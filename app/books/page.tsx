import styles from "./books.module.css";
import { searchBooks } from "@/lib/books";
import BookCard from "@/components/BookCard/BookCard";

type BooksPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const { q } = await searchParams;

  const books = q ? await searchBooks(q) : [];

  return (
    <main className={styles.booksPage}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>BOKHYLLA</p>
        <h1>Finn din neste bok</h1>
        <p>Søk blant bøker, forfattere og historier verdt å snakke om.</p>
      </section>

      <section className={styles.booksContent}>
        <form className={styles.search} action="/books">
          <input
            type="search"
            name="q"
            defaultValue={q ?? ""}
            placeholder="Søk etter bok eller forfatter..."
            aria-label="Søk etter bok eller forfatter"
          />

          <button type="submit">Søk</button>
</form>
          {q && (
            <h2 className={styles.resultsTitle}>Søkeresultater for "{q}"</h2>
          )}

          {q && books.length === 0 && <p>Ingen bøker funnet.</p>}
        
        <div className={styles.bookGrid}>
          {books.slice(0, 12).map((book) => (
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
