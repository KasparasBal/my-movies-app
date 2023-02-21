import { usePagination, DOTS } from '../../hooks/usePagination';
import styles from './Pagination.module.css';

type PaginationProps = {
  className: string;
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};
const Pagination: React.FC<PaginationProps> = ({ totalCount, siblingCount = 1, currentPage, onPageChange }: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage !== totalCount) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };
  return (
    <ul className={styles.paginationContainer}>
      <li className={styles.paginationItem} onClick={onPrevious}>
        <div className={currentPage > 1 ? `${styles.arrow} ${styles.left}` : `${styles.arrow} ${styles.left} ${styles.disabled}`} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className={`${styles.paginationItem} ${styles.dots}`} key={index}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={pageNumber === currentPage ? `${styles.paginationItem} ${styles.selected}` : `${styles.paginationItem}`}
            key={index}
            onClick={() => onPageChange(+pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li className={styles.paginationItem} onClick={onNext}>
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
