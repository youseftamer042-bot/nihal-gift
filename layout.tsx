import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little World for Nihal",
  description: "A little gift, made with love.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}