"use client";

import { useState } from "react";
import type { Book } from "@/app/types/Book";
import BookCard from "../BookCard/BookCard";
import styles from "./BookResults.module.css";

type BookResultsProps = {
  books: Book[];
};

export default function BookResults({ books }: BookResultsProps) {
  const [sortBy, setSortBy] = useState("relevance");
  let sortedBooks = [...books];

  if (sortBy === "onlyRated") {
  sortedBooks = sortedBooks.filter(
    (book) => book.volumeInfo.averageRating
  );
}
  if (sortBy === "rating") {
    sortedBooks.sort(
      (a, b) =>
        (b.volumeInfo.averageRating ?? 0) - (a.volumeInfo.averageRating ?? 0),
    );
  }

  if (sortBy === "titleAZ") {
    sortedBooks.sort((a, b) =>
      a.volumeInfo.title.localeCompare(b.volumeInfo.title),
    );
  }

  if (sortBy === "titleZA") {
    sortedBooks.sort((a, b) =>
      b.volumeInfo.title.localeCompare(a.volumeInfo.title),
    );
  }

  return (
    <>
      <div className={styles.sort}>
        <label htmlFor="sort">Sorter / filtrer etter:</label>

        <select
          id="sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
            <option value="titleAZ">Tittel A–Å</option>
          <option value="titleZA">Tittel Å–A</option>
          <option value="relevance">Relevans</option>
          <option value="rating">Høyest rating</option>
            <option value="onlyRated">Kun bøker med rating</option>
          
        </select>

    
      </div>

      <div className={styles.bookGrid}>
        {sortedBooks.slice(0, 12).map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors?.join(", ") ?? "Ukjent forfatter"}
            rating={book.volumeInfo.averageRating ?? 0}
            cover={book.volumeInfo.imageLinks?.thumbnail}
          />
        ))}
      </div>
    </>
  );
}
