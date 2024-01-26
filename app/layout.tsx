import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/app/components/navbar";

const inter = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duomo Test",
  description: "Sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar />{children}</body>
    </html>
  );
}
