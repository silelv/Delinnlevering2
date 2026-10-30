import styles from "./BookCard.module.css";
import Link from "next/link";
import Image from "next/image";

type BookCardProps = {
  id: string;
  title: string;
  author: string;
  firstPublishYear?: number;
  cover?: string;
  query?: string;
  page?: number;
};

export default function BookCard({
  id,
  title,
  author,
  firstPublishYear,
  cover,
  query,
  page,
}: BookCardProps) {
   const bookUrl = query
    ? `/books/${id}?q=${encodeURIComponent(query)}&page=${page ?? 1}`
    : `/books/${id}`;
  return (
    <article className={styles.card}>
      <Link href={bookUrl}>
        <div className={styles.cover}>
          {cover ? (
            <Image
              src={cover}
              alt={`Forsiden til ${title}`}
              width={300}
              height={450}
            />
          ) : (
            <span>Ingen cover</span>
          )}
        </div>

        <h3>{title}</h3>
        <p>{author}</p>
        {firstPublishYear && <p>Først utgitt i {firstPublishYear}</p>}
      </Link>
    </article>
  );
}
