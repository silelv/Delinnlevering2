import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Baddies bokklubb
      </Link>

      <nav className={styles.nav}>
        <Link href="/">Hjem</Link>
        <Link href="/books">Bøker</Link>
        <Link href="/about">Om oss</Link>
      </nav>
    </header>
  );
}