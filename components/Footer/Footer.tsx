import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Baddies bokklubb</p>

      <a href="#top">
        Tilbake til toppen
      </a>
    </footer>
  );
}