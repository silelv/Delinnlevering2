import styles from "./books/books.module.css";
import Button from "@/components/Button/Button";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <p className={styles.errorCode}>404</p>
      <h1>Fant ikke siden</h1>
      <p>Siden du leter etter finnes ikke.</p>
      <Button text="Tilbake til forsiden" href="/" />
    </div>
  );
}