import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celovin — 셀로빈",
  description: "AI 기술로 사람의 가능성을 확장합니다. Usan, TheLabForge, EditorKit Pro.",
  metadataBase: new URL("https://celovin.com"),
  openGraph: {
    title: "Celovin — 셀로빈",
    description: "AI 기술로 사람의 가능성을 확장합니다.",
    url: "https://celovin.com",
    siteName: "Celovin",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
