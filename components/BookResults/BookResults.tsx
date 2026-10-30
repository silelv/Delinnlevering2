"use client";

import { useState } from "react";
import type { Book } from "@/app/types/Book";
import BookCard from "../BookCard/BookCard";
import styles from "./BookResults.module.css";

type BookResultsProps = {
  books: Book[];
  query: string;
  page: number;
};

export default function BookResults({ books, query, page }: BookResultsProps) {
  const [sortBy, setSortBy] = useState("relevance");
  let sortedBooks = [...books];

  if (sortBy === "newest") {
    sortedBooks.sort(
      (a, b) =>
        (b.volumeInfo.firstPublishYear ?? 0) -
        (a.volumeInfo.firstPublishYear ?? 0),
    );
  }

  if (sortBy === "oldest") {
    sortedBooks.sort(
      (a, b) =>
        (a.volumeInfo.firstPublishYear ?? Infinity) -
        (b.volumeInfo.firstPublishYear ?? Infinity),
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
        <label htmlFor="sort">Sorter etter:</label>

        <select
          id="sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="titleAZ">Tittel A–Å</option>
          <option value="titleZA">Tittel Å–A</option>
          <option value="relevance">Relevans</option>
          <option value="newest">Nyeste først</option>
          <option value="oldest">Eldste først</option>
        </select>
      </div>

      <div className={styles.bookGrid}>
        {sortedBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors?.join(", ") ?? "Ukjent forfatter"}
            firstPublishYear={book.volumeInfo.firstPublishYear}
            cover={book.volumeInfo.imageLinks?.thumbnail}
            query={query}
            page={page}
          />
        ))}
      </div>
    </>
  );
}
