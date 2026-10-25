export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    firstPublishYear?: number;
    imageLinks?: {
      thumbnail?: string;
    };
  };
};
