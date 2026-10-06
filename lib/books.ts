import type { Book } from "../app/types/Book";

type GoogleBooksResponse = {
  items?: Book[];
};

export async function searchBooks(query: string): Promise<Book[]> {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

const response = await fetch(
  `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`
);

  if (!response.ok) {
  const errorText = await response.text();

  console.error("Google Books API error:", response.status, errorText);

  throw new Error(`Kunne ikke hente bøker: ${response.status}`);
}

  const data: GoogleBooksResponse = await response.json();

  return data.items ?? [];
}