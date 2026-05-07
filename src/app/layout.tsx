import type { Metadata } from "next";
import { Outfit, Noto_Serif_KR } from "next/font/google";
import { LocaleProvider } from "@/i18n/provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Celovin — 셀로빈",
  description:
    "AI 기술로 사람의 가능성을 확장합니다. Usan, TheLabForge, EditorKit Pro, Luvoire, parabreak, ara.studio.",
  metadataBase: new URL("https://celovin.com"),
  openGraph: {
    title: "Celovin — 셀로빈",
    description:
      "AI 기술로 사람의 가능성을 확장합니다. 제품과 스튜디오, 그리고 오픈소스 시뮬레이션 엔진.",
    url: "https://celovin.com",
    siteName: "Celovin",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Celovin — 셀로빈",
    description: "Technology that expands human potential.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${outfit.variable} ${notoSerifKr.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
