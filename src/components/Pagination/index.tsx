import PaginationItem from './paginationItem';
import { Ellipsis } from './style';
import PaginationArrow from './paginationArrow';
import { IPagination } from './utils/types';

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export const Pagination = ({
  totalCountOfRegister,
  registerPerPage,
  currentPage = 1,
  onPageChange,
}: IPagination) => {
  const lastPage = Math.ceil(totalCountOfRegister / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  return (
    <>
      <PaginationArrow
        disabled={currentPage === 1}
        onPageChange={onPageChange}
        pageNumber={currentPage - 1}
        previous
      />

      {currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem pageNumber={1} onPageChange={onPageChange} />
          {currentPage > 2 + siblingsCount && (
            <Ellipsis>
              <p className="p5">...</p>
            </Ellipsis>
          )}
        </>
      )}

      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem
            pageNumber={page}
            onPageChange={onPageChange}
            key={page}
          />
        ))}

      <PaginationItem
        pageNumber={currentPage}
        onPageChange={onPageChange}
        isCurrent
      />

      {nextPages.length > 0 &&
        nextPages.map((page) => (
          <PaginationItem
            pageNumber={page}
            onPageChange={onPageChange}
            key={page}
          />
        ))}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && (
            <Ellipsis>
              <p className="p5">...</p>
            </Ellipsis>
          )}
          <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
        </>
      )}

      <PaginationArrow
        onPageChange={onPageChange}
        pageNumber={currentPage + 1}
        previous={false}
        disabled={currentPage === lastPage}
      />
    </>
  );
};
