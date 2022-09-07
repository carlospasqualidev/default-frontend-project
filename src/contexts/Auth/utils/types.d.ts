import { IUser } from '../../../types/types';

export interface IAuthContext {
  user: IUser | null;
  setUser: (setUser: IUser) => void;
  signin: (ILoginRequestResponse) => void;
  signout: () => void;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginRequestResponse {
  User: IUser;
  token: string;
}
