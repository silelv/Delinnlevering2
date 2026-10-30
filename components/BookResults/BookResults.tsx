"use client";

import { useState } from "react";
import type { Book } from "@/app/types/Book";
import BookCard from "../BookCard/BookCard";
import styles from "./BookResults.module.css";

type BookResultsProps = {
  books: Book[];
  query?: string;
  page: number;
};

export default function BookResults({ books, query, page }: BookResultsProps) {
  const [sortBy, setSortBy] = useState("relevance");
  const sortedBooks = [...books];

  if (sortBy === "newest") {
    sortedBooks.sort(
      (a, b) => (b.firstPublishYear ?? 0) - (a.firstPublishYear ?? 0),
    );
  }

  if (sortBy === "oldest") {
    sortedBooks.sort(
      (a, b) =>
        (a.firstPublishYear ?? Infinity) - (b.firstPublishYear ?? Infinity),
    );
  }

  if (sortBy === "titleAZ") {
    sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "titleZA") {
    sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <>
      <div className={styles.sort}>
        <label htmlFor="sort">Sorter etter:</label>

        <select
          id="sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="relevance">Relevans</option>
          <option value="titleAZ">Tittel A–Å</option>
          <option value="titleZA">Tittel Å–A</option>
          <option value="newest">Nyeste først</option>
          <option value="oldest">Eldste først</option>
        </select>
        <p className={styles.sortInfo}>
          Gjelder bøkene som vises på denne siden.
        </p>
      </div>

      <div className={styles.bookGrid}>
        {sortedBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.authors?.join(", ") ?? "Ukjent forfatter"}
            firstPublishYear={book.firstPublishYear}
            cover={book.cover}
            query={query}
            page={page}
          />
        ))}
      </div>
    </>
  );
}
