import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorWrapper from "@/components/CursorWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "황도연 - 풀스택 개발자 포트폴리오",
  description: "황도연의 풀스택 개발자 포트폴리오 웹사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <CursorWrapper>{children}</CursorWrapper>
      </body>
    </html>
  );
}
