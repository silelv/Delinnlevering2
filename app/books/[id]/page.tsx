import { getBookById } from "@/lib/books";
import styles from "./bookDetails.module.css";
import Image from "next/image";

type BookDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BookDetailsPage({
  params,
}: BookDetailsPageProps) {
  const { id } = await params;

  const book = await getBookById(id);
  const description = book.volumeInfo.description
    ?.replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <main className={styles.bookPage}>
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

          <p className={styles.rating}>
            {book.volumeInfo.averageRating
              ? `${book.volumeInfo.averageRating} / 5 ⭐`
              : "Ingen rating"}
          </p>

          <p className={styles.description}>
            {description || "Ingen beskrivelse tilgjengelig."}
          </p>
        </div>
      </section>
    </main>
  );
}
