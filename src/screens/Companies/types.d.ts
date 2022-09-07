/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUserCompanies {
  User: {
    id: string;
    name: string;
    email: string;
    lastAccess: string | null;
  };
}

export interface ICompany {
  id: string;
  image: string;
  name: string;
  contactNumber: string;
  CNPJ: string;
  CPF: string;
  isBlocked: boolean;
  createdAt: string;
  UserCompanies: IUserCompanies[];
}

// MODALS
export interface IModalEditCompany {
  company: ICompany;
  setCompany: (setCompany: ICompany) => void;
}

export interface IModalCreateUser {
  setCompanies: (setCompanies: ICompany[]) => void;
  page: number;
  setCount: (setCount: number) => void;
}

// REQUESTS
export interface IRequestEditUser extends IModal {
  toggleModal: () => void;
  data: IFormDataUser;
  company: ICompany;
  setCompany: (setCompany: ICompany) => void;
  setOnQuery: (setOnQuery: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: any;
}

export interface IRequestCreateUser extends IModalCreateUser {
  toggleModal: () => void;
  data: IFormDataUser;
  setOnQuery: (setOnQuery: boolean) => void;
}

export interface IRequestUsersList {
  setCompanies: (setCompanies: ICompany[]) => void;
  setLoading?: (setLoading: boolean) => void;
  page: number;
  setCount: (setCount: number) => void;
  filter?: string;
  setPage?: (setPage: number) => void;
}

export interface IRequestChangeIsActiveAndIsDeleted {
  company: ICompany;
  setCompany: (setCompany: ICompany) => void;
  navigate: any;
}

// YUP
export interface IFormDataCompany {
  image: string;
  name: string;
  email: string;
  companyName: string;
  contactNumber: string;
  CPF: string;
  CNPJ: string;

  password: string;
  confirmPassword: string;
}
