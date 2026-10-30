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
  fromHome?: boolean;
};

export default function BookCard({
  id,
  title,
  author,
  firstPublishYear,
  cover,
  query,
  page,
  fromHome
}: BookCardProps) {
     let bookUrl = `/books/${id}`;

  if (query) {
    bookUrl = `/books/${id}?q=${encodeURIComponent(query)}&page=${page ?? 1}`;
  } else if (fromHome) {
    bookUrl = `/books/${id}?from=home`;
      } else if (fromHome) {
    bookUrl = `/books/${id}?from=home`;
  } else if (page && page > 1) {
    bookUrl = `/books/${id}?page=${page}`;
  }
  
  

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
