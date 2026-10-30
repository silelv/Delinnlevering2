import { getBookById } from "@/lib/books";
import styles from "./bookDetails.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

type BookDetailsPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ q?: string; page?: string; from?: string }>;
};

export default async function BookDetailsPage({
  params,
  searchParams,
}: BookDetailsPageProps) {
  const { id } = await params;
  const { q, page, from } = await searchParams;

  let backUrl = "/books";
  let backText = "← Tilbake til bøkene";

  if (q) {
    backUrl = `/books?q=${encodeURIComponent(q)}&page=${page ?? 1}`;
    backText = "← Tilbake til søkeresultater";
  } else if (from === "home") {
    backUrl = "/";
    backText = "← Tilbake til forsiden";
  } else if (from === "home") {
    backUrl = "/";
    backText = "← Tilbake til forsiden";
  } else if (page) {
    backUrl = `/books?page=${page}`;
  }

  const book = await getBookById(id);
  const description = book.description
    ?.replace(/<[^>]*>/g, " ") // fjerner HTML-tagger, f.eks. <br>
    .replace(/\[[^\]]+\]\[\d+\]/g, "") // fjerner lenker som [tekst][1]
    .replace(/\[\d+\]:\s*https?:\/\/\S+/g, "") // fjerner kildelister som [1]: https://...
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [tekst](url) blir bare tekst
    .replace(/&amp;/g, "&") // HTML-koder blir vanlige tegn
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ") // doble mellomrom og linjeskift blir ett mellomrom
    .trim();

  return (
    <div className={styles.bookPage}>
      <Button text={backText} href={backUrl} />
      <section className={styles.bookDetails}>
        <div className={styles.cover}>
          {book.cover ? (
            <Image
              src={book.cover}
              alt={`Forsiden til ${book.title}`}
              width={300}
              height={450}
            />
          ) : (
            <div className={styles.noCover}>Ingen cover</div>
          )}
        </div>

        <div className={styles.bookInfo}>
          <h1>{book.title}</h1>

          <p className={styles.author}>
            {book.authors?.join(", ") ?? "Ukjent forfatter"}
          </p>

          {book.firstPublishYear && (
            <p className={styles.publishYear}>
              Først utgitt i {book.firstPublishYear}
            </p>
          )}

          <p className={styles.description}>
            {description || "Ingen beskrivelse tilgjengelig."}
          </p>
        </div>
      </section>
    </div>
  );
}
