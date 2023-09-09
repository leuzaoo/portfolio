"use client";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/i18n";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
