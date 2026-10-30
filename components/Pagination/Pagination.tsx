import Button from "../Button/Button";
import styles from "./Pagination.module.css";

type PaginationProps = {
  page: number;
  totalPages: number;
  query?: string;
};

export default function Pagination({ page, totalPages, query }: PaginationProps) {
  function pageUrl(newPage: number) {
    return query
      ? `/books?q=${encodeURIComponent(query)}&page=${newPage}`
      : `/books?page=${newPage}`;
  }

  return (
    <nav className={styles.pagination} aria-label="Sidenavigasjon">
      {page > 1 && <Button text="← Forrige" href={pageUrl(page - 1)} />}
      <p>Side {page} av {totalPages}</p>
      {page < totalPages && <Button text="Neste →" href={pageUrl(page + 1)} />}
    </nav>
  );
}