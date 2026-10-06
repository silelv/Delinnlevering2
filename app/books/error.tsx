"use client";

import styles from "./books.module.css";

type ErrorProps = {
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <main className={styles.error}>
      <p className={styles.errorCode}>OOPS!</p>

      <h1>Noe gikk galt</h1>

      <p>
        Vi klarte ikke å hente bøkene akkurat nå.
        Prøv igjen om et lite øyeblikk.
      </p>

      <button onClick={() => reset()}>
        Prøv igjen
      </button>
    </main>
  );
}