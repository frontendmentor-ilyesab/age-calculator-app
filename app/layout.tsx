import type { Metadata } from "next";
import { myFont } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Age calculator app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="grid min-h-screen items-start justify-center bg-white-off px-4 pt-24 text-[2rem] sm:px-12 lg:place-items-center lg:p-0 [@media(max-height:750px){&}]:py-32">
        {children}
      </body>
    </html>
  );
}
