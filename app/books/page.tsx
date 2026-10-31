import styles from "./books.module.css";
import { searchBooks } from "@/lib/books";
import BookResults from "@/components/BookResults/BookResults";
import { genres } from "@/lib/genres";
import Pagination from "@/components/Pagination/Pagination";

type BooksPageProps = {
  searchParams: Promise<{ q?: string; page?: string }>;
};

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const { q, page: pageParam } = await searchParams;

  const page = Math.max(1, Number(pageParam) || 1);
  const booksPerPage = 12;
  const results = await searchBooks(q || "subject:fiction", page, booksPerPage);
  await searchBooks(q || "subject:fantasy", page);

  const books = results.items;
  const totalPages = Math.ceil(results.totalItems / booksPerPage);
  const genre = genres.find((genre) => genre.query === q);
  const searchTitle = genre ? genre.name : q;

  return (
    <div className={styles.booksPage}>
      <section className={styles.intro}>
        <p className="eyebrow">BOKHYLLA</p>
        <h1>Finn din neste bok</h1>
        <p>Søk blant bøker, forfattere og historier verdt å snakke om.</p>
      </section>

      <section className={styles.booksContent}>
        <label htmlFor="q" className={styles.searchLabel}>
          Søk etter bok eller forfatter
        </label>
        <form className={styles.search} action="/books">
          <input
            type="search"
            id="q"
            name="q"
            defaultValue={genre ? "" : q ?? ""}
            placeholder="Søk etter f.eks. Fourth Wing..."
          />

          <button type="submit">Søk</button>
        </form>
        {q && (
          <h2 className={styles.resultsTitle}>
            {q
              ? `Søkeresultater for «${searchTitle}»`
              : "Utvalgte bøker"}
          </h2>
        )}

        {books.length > 0 && (
          <p className={styles.resultsCount}>
            Viser {books.length} av {results.totalItems.toLocaleString("nb-NO")}{" "}
            treff
          </p>
        )}

        {books.length === 0 && <p>Ingen bøker funnet.</p>}

        {books.length > 0 && (
          <BookResults books={books} query={q} page={page} />
        )}
        {totalPages > 1 && <Pagination page={page} totalPages={totalPages} query={q} />}
      </section>
    </div>
  );
}
