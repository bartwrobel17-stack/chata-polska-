"use client";

import "./admin.css";

import { FormEvent, useState } from "react";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function login(e: FormEvent) {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/admin/login", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ password }) });
    if (res.ok) setLoggedIn(true);
    else setMessage("Nieprawidłowe hasło.");
  }

  async function upload(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    const data = new FormData(e.currentTarget);
    const res = await fetch("/api/admin/upload", { method: "POST", body: data });
    setMessage(res.ok ? "Zdjęcia zostały dodane." : "Nie udało się dodać zdjęć.");
  }

  if (!loggedIn) return <main className="admin"><div className="adminCard"><p className="eyebrow">PANEL WŁAŚCICIELA</p><h1>Dodaj zdjęcia</h1><form onSubmit={login}><input type="password" placeholder="Hasło" value={password} onChange={e=>setPassword(e.target.value)} required /><button className="button">Zaloguj</button></form>{message && <p>{message}</p>}<a href="/" className="textButton">← Wróć na stronę</a></div></main>;

  return <main className="admin"><div className="adminCard"><p className="eyebrow">PANEL WŁAŚCICIELA</p><h1>Galeria</h1><form onSubmit={upload}><input type="file" name="photos" accept="image/*" multiple required /><button className="button">Dodaj zdjęcia</button></form>{message && <p>{message}</p>}<a href="/" className="textButton">← Wróć na stronę</a></div></main>;
}