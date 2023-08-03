import "./globals.scss";
import type { Metadata } from "next";

import { Archivo } from "next/font/google";

const font = Archivo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ronycage",
  description: "My personal blog with web and music projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
