import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ModalProvider from "@/components/ModalProvider";
import NextAuthProvider from "./provider/NextAuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ask Einstein",
  description: "AI Bot Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/einstein.png" />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          <ModalProvider />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
