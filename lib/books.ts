import type { Book } from "@/app/types/Book";

type OpenLibraryWork = {
  key: string;
  title: string;
  description?: string | { value: string };
  covers?: number[];
};

type OpenLibraryResponse = {
  docs: {
    key: string;
    title: string;
    author_name?: string[];
    cover_i?: number;
  }[];
  numFound: number;
};

export async function searchBooks(
  query: string,
  startIndex = 0,
  maxResults = 12,
): Promise<GoogleBooksResponse> {
  const response = await fetch(
  `https://openlibrary.org${id}.json`,
);

  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`;
  let response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Kunne ikke hente bøker: ${response.status}`);
  }

  const data: OpenLibraryResponse = await response.json();

const books: Book[] = data.docs.map((book) => ({
  id: book.key,
  volumeInfo: {
    title: book.title,
    authors: book.author_name,
    imageLinks: book.cover_i
      ? {
          thumbnail: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
        }
      : undefined,
  },
}));

return {
  items: books,
  totalItems: data.numFound,
};
}

export async function getBookById(id: string): Promise<Book> {
  const page = Math.floor(startIndex / maxResults) + 1;

  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&page=${page}&limit=${maxResults}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Kunne ikke hente bok: ${response.status}`);
  }

 const data: OpenLibraryWork = await response.json();

const description =
  typeof data.description === "string"
    ? data.description
    : data.description?.value;

const book: Book = {
  id: data.key,
  volumeInfo: {
    title: data.title,
    description: description,
    imageLinks: data.covers?.[0]
      ? {
          thumbnail: `https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`,
        }
      : undefined,
  },
};

return book;
}
