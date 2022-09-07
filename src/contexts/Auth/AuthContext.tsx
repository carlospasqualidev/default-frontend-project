import { createContext } from 'react';
import { IAuthContext } from './utils/types';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = createContext<IAuthContext>(null!);
