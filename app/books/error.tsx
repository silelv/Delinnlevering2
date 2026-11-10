"use client";

import styles from "./books.module.css";

type ErrorProps = {
  unstable_retry: () => void;
};

export default function Error({ unstable_retry }: ErrorProps) {
  return (
    <div className={styles.error}>
      <p className={styles.errorCode}>OOPS!</p>

      <h1>Noe gikk galt</h1>

      <p>
        Vi klarte ikke å hente innholdet akkurat nå.
      </p>

      <button onClick={unstable_retry}>Prøv igjen</button>
    </div>
  );
}
