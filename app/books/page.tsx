import styles from "./books.module.css";
import { searchBooks } from "@/lib/books";
import BookResults from "@/components/BookResults/BookResults";

type BooksPageProps = {
  searchParams: Promise<{ q?: string; page?: string }>;
};

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const { q, page: pageParam } = await searchParams;

  const page = Math.max(1, Number(pageParam) || 1);
  const booksPerPage = 12;
  const startIndex = (page - 1) * booksPerPage;

  const results = q ? await searchBooks(q, startIndex, booksPerPage) : { items: [], totalItems: 0 };

  const books = results.items;

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
        {q && <h2 className={styles.resultsTitle}>Søkeresultater for «{q}»</h2>}

        {q && books.length === 0 && <p>Ingen bøker funnet.</p>}

        {q && books.length > 0 && <BookResults books={books}  query={q} page={page} />}
      </section>
    </main>
  );
}
