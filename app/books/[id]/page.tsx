import { getBookById } from "@/lib/books";
import styles from "./bookDetails.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

type BookDetailsPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ q?: string; page?: string }>;
};

export default async function BookDetailsPage({
  params,
  searchParams,
}: BookDetailsPageProps) {
  const { id } = await params;
  const { q, page } = await searchParams;

  const backUrl = q
    ? `/books?q=${encodeURIComponent(q)}&page=${page ?? 1}`
    : "/books";

  const book = await getBookById(id);
  const description = book.volumeInfo.description
    ?.replace(/<[^>]*>/g, " ")
    .replace(/\[[^\]]+\]\[\d+\]/g, "")
    .replace(/\[\d+\]:\s*https?:\/\/\S+/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <main className={styles.bookPage}>
      <Button text="← Tilbake til søkeresultater" href={backUrl} />
      <section className={styles.bookDetails}>
        <div className={styles.cover}>
          {book.volumeInfo.imageLinks?.thumbnail && (
            <Image
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={`Forsiden til ${book.volumeInfo.title}`}
              width={300}
              height={450}
            />
          )}
        </div>

        <div className={styles.bookInfo}>
          <h1>{book.volumeInfo.title}</h1>

          <p className={styles.author}>
            {book.volumeInfo.authors?.join(", ") ?? "Ukjent forfatter"}
          </p>

          {book.volumeInfo.firstPublishYear && (
            <p className={styles.publishYear}>
              Først utgitt i {book.volumeInfo.firstPublishYear}
            </p>
          )}

          <p className={styles.description}>
            {description || "Ingen beskrivelse tilgjengelig."}
          </p>
        </div>
      </section>
    </main>
  );
}
