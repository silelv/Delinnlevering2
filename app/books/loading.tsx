import styles from "./books.module.css";


// bytt til suspense 

export default function Loading() {
  return (
    <main className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Laster bøker...</p>
    </main>
  );
}
