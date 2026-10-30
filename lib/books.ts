import type { Book } from "@/app/types/Book";

type OpenLibraryWork = {
  key: string;
  title: string;
  description?: string | { value: string };
  covers?: number[];
  first_publish_date?: string;
  authors?: {
    author: {
      key: string;
    };
  }[];
};

type OpenLibraryAuthor = {
  name: string;
};

type OpenLibraryResponse = {
  docs: {
    key: string;
    title: string;
    author_name?: string[];
    cover_i?: number;
    first_publish_year?: number;
  }[];
  numFound: number;
};

type SearchBooksResult = {
  items: Book[];
  totalItems: number;
};

export async function searchBooks(
  query: string,
  startIndex = 0,
  maxResults = 12,
): Promise<SearchBooksResult> {
  const page = Math.floor(startIndex / maxResults) + 1;

  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&page=${page}&limit=${maxResults}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Kunne ikke hente bøker: ${response.status}`);
  }

  const data: OpenLibraryResponse = await response.json();

  const books: Book[] = data.docs.map((book) => ({
    id: book.key.split("/").pop() ?? "",
    volumeInfo: {
      title: book.title,
      authors: book.author_name,
      firstPublishYear: book.first_publish_year,
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
  const response = await fetch(
    `https://openlibrary.org/works/${encodeURIComponent(id)}.json`,
  );

  if (!response.ok) {
    throw new Error(`Kunne ikke hente bok: ${response.status}`);
  }

  const data: OpenLibraryWork = await response.json();

  const authors = await Promise.all(
    (data.authors ?? []).map(async (item) => {
      const response = await fetch(
        `https://openlibrary.org${item.author.key}.json`,
      );

      if (!response.ok) {
        return "Ukjent forfatter";
      }

      const author: OpenLibraryAuthor = await response.json();

      return author.name;
    }),
  );

  const description =
    typeof data.description === "string"
      ? data.description
      : data.description?.value;

  const firstPublishYear = data.first_publish_date
    ? Number(data.first_publish_date.match(/\d{4}/)?.[0])
    : undefined;

  const book: Book = {
    id: data.key.split("/").pop() ?? "",
    volumeInfo: {
      title: data.title,
      authors: authors,
      firstPublishYear: firstPublishYear,
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
