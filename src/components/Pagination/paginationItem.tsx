import { Container } from './style';

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  pageNumber,
  isCurrent = false,
  onPageChange,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Container>
        <button type="button" className="isCurrent" disabled>
          <p className="p5">{pageNumber}</p>
        </button>
      </Container>
    );
  }

  return (
    <Container>
      <button
        type="button"
        className="notCurrent"
        onClick={() => onPageChange(pageNumber)}
      >
        <p className="p5">{pageNumber}</p>
      </button>
    </Container>
  );
};

export default PaginationItem;
