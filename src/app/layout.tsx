import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="ko" className={`${outfit.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
