import Button from "../Button/Button";
import styles from "./GenreButtons.module.css";
import { genres } from "@/lib/genres";


export default function GenreButtons() {
  return (
    <div className={styles.genreButtons}>
      {genres.map((genre) => (
        <Button
          key={genre.query}
          text={genre.name}
          href={`/books?q=${encodeURIComponent(genre.query)}`}
        />
      ))}
    </div>
  );
}