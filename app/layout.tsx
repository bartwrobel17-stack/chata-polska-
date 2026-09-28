import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Chata Polska | Rawicz",
  description: "Chata Polska w Rawiczu. Promocje i aktualna gazetka.",
  verification: {
    google: "Tr0VmD_ytBuU7kmyxa0veQcmxUNUymeVrLBPAQG7nCs",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}</body></html>;
}
