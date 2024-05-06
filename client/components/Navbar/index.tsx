import Link from "next/link";
import styles from "./style.module.scss";
import { ROUTES } from "@/constants/routes";

export default function Navbar() {
  return (
    <div className={`${styles.navContainer} `}>
      <Link href={ROUTES.Home}>APARTMENTS</Link>
    </div>
  );
}
