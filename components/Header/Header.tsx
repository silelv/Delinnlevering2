import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
  src="/images/logo.svg"
  alt="Baddies Bokklubb"
  width={70}
  height={70}
/>
      </Link>

      <nav className={styles.nav} aria-label="Hovedmeny">
        <Link href="/">Hjem</Link>
        <Link href="/books">Bøker</Link>
        <Link href="/about">Om oss</Link>
      </nav>
    </header>
  );
}
