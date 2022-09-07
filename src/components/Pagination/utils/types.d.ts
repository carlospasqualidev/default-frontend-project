export interface IPagination {
  totalCountOfRegister: number;
  registerPerPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}
