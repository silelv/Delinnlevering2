export type Book = {
  id: string;
  title: string;
  authors?: string[];
  description?: string;
  firstPublishYear?: number;
  cover?: string;
};
