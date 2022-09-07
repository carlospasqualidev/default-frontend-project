// LIBS
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// COMPONENTS
import { Api } from '../../../services/api';
import { Input } from '../../../components/Form/Input';
import { Button } from '../../../components/Buttons/Button';
import { Image } from '../../../components/Image';

// COMPONENTS
import * as Style from './styles';

// ICONS
import { icon } from '../../../assets/icons';

// FUNCTIONS
import { schema } from './utils/functions';

// CONTEXTS
import { useAuthContext } from '../../../contexts/Auth/UseAuthContext';

// TYPES
import { IFormData } from './types';
import { theme } from '../../../styles/theme';

export const Login = () => {
  const navigate = useNavigate();
  const { signin } = useAuthContext();
  const [onQuery, setOnQuery] = useState<boolean>(false);

  // YUP VALIDATIONS
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });
  // SUBMITED FORM
  const onSubmit = handleSubmit(async (data) => {
    setOnQuery(true);
    await Api.post('/auth/backoffice/login', {
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        signin(res.data);
        navigate('/companies');
      })
      .catch((err) => {
        setOnQuery(false);
        if (err.response.data) {
          toast.error(err.response.data.ServerMessage.message);
        } else {
          toast.error('Erro de comunicação');
        }
      });
  });

  return (
    <Style.Background>
      <Image img={icon.logo} width="150px" height="150px" radius="0" />
      <Style.FormContainter as="form" onSubmit={onSubmit}>
        <Style.LoginContainer>
          <h2>Login/Backoffice</h2>
          <Input
            label="E-mail"
            labelColor={theme.color.white}
            placeholder="Ex: joao.silva@ada.com.br"
            error={errors.email}
            {...register('email')}
          />

          <Input
            label="Senha"
            type="password"
            labelColor={theme.color.white}
            placeholder="Insira sua senha"
            error={errors.password}
            {...register('password')}
          />
        </Style.LoginContainer>
        <Button label="Login" loading={onQuery} type="submit" />
      </Style.FormContainter>
    </Style.Background>
  );
};
