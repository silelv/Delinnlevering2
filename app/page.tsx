import Link from "next/link";
import styles from "./page.module.css";
import BookCard from "@/components/BookCard/BookCard"; 
import { searchBooks } from "@/lib/books"; 

const favoriteBooks = [
  "The Road of Bones Demi Winters",
  "Fourth Wing Rebecca Yarros",
  "Project Hail Mary Andy Weir",
];

export default async function Home() {
  const bookResults = await Promise.all(
    favoriteBooks.map((favorite) => searchBooks(favorite)),
  );

   const books = bookResults
    .map((results) => results[0])
    .filter((book) => book !== undefined);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>BADDIES BOKKLUBB</p>

          <h1 className={styles.heroTitle}>
            Bøker er bedre
            <br />
            når vi leser dem sammen.
          </h1>

          <p className={styles.heroText}>
            En bokklubb for deg som elsker gode historier, sterke meninger og
            enda bedre diskusjoner.
          </p>

          <Link href="/books" className={styles.heroButton}>
            Utforsk bøkene våre
          </Link>
        </div>
      </section>

      <section className={styles.topBooks}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>VÅRE FAVORITTER</p>
          <h2>Topp 3 akkurat nå</h2>
        </div>
        <div className={styles.bookGrid}>
           {books.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors?.join(", ") ?? "Ukjent forfatter"}
              rating={book.volumeInfo.averageRating ?? 0}
              cover={book.volumeInfo.imageLinks?.thumbnail}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
