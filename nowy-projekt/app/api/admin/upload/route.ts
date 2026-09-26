import { put } from "@vercel/blob";
import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

function token() {
  return createHmac("sha256", process.env.ADMIN_PASSWORD || "missing").update("chata-polska-admin").digest("hex");
}

function authorized(request: Request) {
  const value = request.headers.get("cookie")?.match(/(?:^|; )admin_session=([^;]+)/)?.[1];
  if (!value) return false;
  const expected = token();
  try {
    return timingSafeEqual(Buffer.from(value), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const form = await request.formData();
  const files = form.getAll("photos").filter((item): item is File => item instanceof File);
  if (!files.length) return NextResponse.json({ error: "No files" }, { status: 400 });

  for (const file of files) {
    if (!file.type.startsWith("image/")) continue;
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    await put(`gallery/${Date.now()}-${safeName}`, file, { access: "public" });
  }

  return NextResponse.json({ ok: true });
}