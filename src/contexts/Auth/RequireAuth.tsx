// LIBS
import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Api } from '../../services/api';

// CONTEXTS
import { AuthContext } from './AuthContext';

// COMPONENTS
import { DotLoading } from '../../components/Loadings/DotLoading';

export const RequireAuth = () => {
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const validateToken = async () => {
    await Api.get('/auth/validate/token')
      .then((res) => {
        setUser(res.data.User);
        setLoading(false);
      })
      .catch(() => {
        navigate('/login');
      });
  };

  useEffect(() => {
    validateToken();
  }, []);

  return loading ? <DotLoading label="Verificando credenciais" /> : <Outlet />;
};
