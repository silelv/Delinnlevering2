import styles from "./BookCard.module.css";

type BookCardProps = {
  title: string;
  author: string;
  rating: number;
};

export default function BookCard({
  title,
  author,
  rating,
}: BookCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>COVER</div>

      <h3>{title}</h3>
      <p>{author}</p>
      <p>{rating} / 5 ⭐</p>
    </article>
  );
}