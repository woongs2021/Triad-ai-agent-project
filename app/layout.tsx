import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Triad AI UX Mentor",
  description: "Conversational AI UX mentor team prototype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
