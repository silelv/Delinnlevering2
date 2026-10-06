import styles from "./BookCard.module.css";
import Link from "next/link";
import Image from "next/image";

type BookCardProps = {
  id: string;
  title: string;
  author: string;
  rating: number;
  cover?: string;
};

export default function BookCard({
  id,
  title,
  author,
  rating,
  cover,
}: BookCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/books/${id}`}>
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
        <p>{rating > 0 ? `${rating} / 5 ⭐` : "Ingen rating"}</p>
      </Link>
    </article>
  );
}
