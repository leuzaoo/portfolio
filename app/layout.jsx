"use client";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/i18n";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <title>Portfolio | Leonardo Oliveira</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
