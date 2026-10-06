import styles from "./BookCard.module.css";

type BookCardProps = {
  title: string;
  author: string;
  rating: number;
  cover?: string;
};

export default function BookCard({
  title,
  author,
  rating,
  cover,
}: BookCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        {cover ? (
          <img src={cover} alt={`Forsiden til ${title}`} />
        ) : (
          <span>Ingen cover</span>
        )}
      </div>

      <h3>{title}</h3>
      <p>{author}</p>
      <p>{rating} / 5 ⭐</p>
    </article>
  );
}
