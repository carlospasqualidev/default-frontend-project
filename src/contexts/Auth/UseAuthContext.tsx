import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
