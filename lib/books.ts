import type { Book } from "@/app/types/Book";

type GoogleBooksResponse = {
  items?: Book[];
};

export async function searchBooks(query: string): Promise<Book[]> {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  if (!apiKey) {
    throw new Error("Google Books API-nøkkel mangler.");
  }

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`,
  );

  if (!response.ok) {
    throw new Error(`Kunne ikke hente bøker: ${response.status}`);
  }

  const data: GoogleBooksResponse = await response.json();

  return data.items ?? [];
}

export async function getBookById(id: string): Promise<Book> {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  if (!apiKey) {
    throw new Error("Google Books API-nøkkel mangler.");
  }

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`,
  );

  if (!response.ok) {
    throw new Error(`Kunne ikke hente bok: ${response.status}`);
  }

  const book: Book = await response.json();

  return book;
}
