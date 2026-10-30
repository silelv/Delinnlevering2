import styles from "./books.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Laster bøker...</p>
    </div>
  );
}
