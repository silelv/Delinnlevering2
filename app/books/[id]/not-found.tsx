import styles from "../books.module.css";
import Button from "@/components/Button/Button";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <p className={styles.errorCode}>404</p>
      <h1>Boka ble ikke funnet 💔</h1>
      <p>Boka du leter etter finnes ikke, eller lenken er feil.</p>
      <Button text="Tilbake til bøkene" href="/books" />
    </div>
  );
}