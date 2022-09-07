// LIBS
import { useState } from 'react';

// FUNCTIONS
import { setToken } from './utils/functions';

// TYPES
import { IUser } from '../../types/types';
import { AuthContext } from './AuthContext';
import { ILoginRequestResponse } from './utils/types';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const signin = async ({ User, token }: ILoginRequestResponse) => {
    setUser(User);
    setToken({ token });
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
