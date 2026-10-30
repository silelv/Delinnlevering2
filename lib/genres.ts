export type Genre = {
  name: string;
  query: string;
};

export const genres: Genre[] = [
  { name: "Romantasy", query: "subject:romantasy" },
  { name: "Krim", query: "subject:crime" },
  { name: "Litteratur", query: "subject:literary fiction" },
  { name: "Fantasy", query: "subject:fantasy" },
  { name: "Action", query: "subject:action" },
];