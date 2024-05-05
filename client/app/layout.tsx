import type { Metadata } from "next";
import { cairo } from "@/styles/font";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Apartments App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
