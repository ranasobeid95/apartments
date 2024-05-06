"use client";
import type { Metadata } from "next";
import { cairo } from "@/styles/font";
import "@/styles/globals.scss";
import Navbar from "@/components/Navbar";
import Link from "next/link";

import styles from "./style.module.scss";
import { ROUTES } from "@/constants/routes";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang='en'>
      <body className={cairo.className}>
        {" "}
        <Navbar />
        {children}
        {!pathname.includes(ROUTES.ADD_APARTMENT) && (
          <Link href={ROUTES.ADD_APARTMENT} className={styles.addButtonStyle}>
            +
          </Link>
        )}
      </body>
    </html>
  );
}
