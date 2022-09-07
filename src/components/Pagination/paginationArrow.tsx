import { Next, Previous } from './style';
import { icon } from '../../assets/icons/index';

interface PaginationItemProps {
  pageNumber: number;
  onPageChange: (page: number) => void;
  previous?: boolean;
  disabled?: boolean;
}

const PaginationArrow: React.FC<PaginationItemProps> = ({
  pageNumber,
  onPageChange,
  previous,
  disabled,
}: PaginationItemProps) => {
  if (previous) {
    return (
      <Previous disabled={disabled} onClick={() => onPageChange(pageNumber)}>
        <img src={icon.leftArrow} alt="" />
      </Previous>
    );
  }

  return (
    <Next disabled={disabled} onClick={() => onPageChange(pageNumber)}>
      <img src={icon.rightArrow} alt="" />
    </Next>
  );
};

export default PaginationArrow;
