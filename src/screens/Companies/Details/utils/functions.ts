/* eslint-disable @typescript-eslint/no-explicit-any */
// LIBS
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Api } from '../../../../services/api';

// FUNCTIONS
import { unMask, uploadFile } from '../../../../utils/functions';

// TYPES
import {
  ICompany,
  IRequestChangeIsActiveAndIsDeleted,
  IRequestEditUser,
} from '../../types';

export const requestEditUser = async ({
  data,
  toggleModal,
  company,
  setCompany,
  navigate,
  setOnQuery,
}: IRequestEditUser) => {
  setOnQuery(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let imageUrl: any;

  if (data.image.length) {
    const { Location } = await uploadFile(data.image);
    imageUrl = Location;
  } else {
    imageUrl = company.image;
  }

  await Api.put('/backoffice/companies/edit', {
    userId: company.UserCompanies[0].User.id,
    companyId: company.id,
    image: imageUrl,
    name: data.name,
    email: data.email,
    companyName: data.companyName,
    contactNumber: unMask(data.contactNumber),
    CNPJ: unMask(data.CNPJ),
    CPF: unMask(data.CPF),
    password: data.password,
  })
    .then((res) => {
      const updatedCompany: ICompany = {
        id: company.id,
        image: imageUrl,
        name: data.companyName,
        contactNumber: data.contactNumber,
        CNPJ: data.CNPJ,
        CPF: data.CPF,
        isBlocked: data.isBlocked,
        createdAt: company.createdAt,
        UserCompanies: [
          {
            User: {
              id: company.UserCompanies[0].User.id,
              name: data.name,
              email: data.email,
              lastAccess: company.UserCompanies[0].User.lastAccess,
            },
          },
        ],
      };

      navigate(window.location.pathname, { state: updatedCompany });
      setCompany(updatedCompany);
      toggleModal();
      toast.success(res.data.ServerMessage.message);
    })
    .catch((err) => {
      setOnQuery(false);
      if (err.response.data) {
        toast.error(err.response.data.ServerMessage.message);
      } else {
        toast.error('Erro de comunica????o');
      }
    });
};

export const requestChangeIsBlocked = async ({
  company,
  setCompany,
  navigate,
}: IRequestChangeIsActiveAndIsDeleted) => {
  toast.loading('Atualizando...');

  await Api.put('/backoffice/companies/change/isBlocked', {
    companyId: company.id,
  })
    .then((res) => {
      setCompany({ ...company, isBlocked: !company.isBlocked });
      navigate(window.location.pathname, {
        state: { ...company, isBlocked: !company.isBlocked },
      });
      toast.dismiss();
      toast.success(res.data.ServerMessage.message);
    })
    .catch((err) => {
      toast.dismiss();
      if (err.response.data) {
        toast.error(err.response.data.ServerMessage.message);
      } else {
        toast.error('Erro de comunica????o');
      }
    });
};

export const requestDeleteCompany = async ({
  company,
  navigate,
}: {
  company: ICompany;
  navigate: any;
}) => {
  toast.loading('Atualizando...');

  await Api.delete('/backoffice/companies/delete', {
    data: { companyId: company.id },
  })
    .then((res) => {
      navigate('/companies', { replace: true });
      toast.dismiss();
      toast.success(res.data.ServerMessage.message);
    })
    .catch((err) => {
      toast.dismiss();
      if (err.response.data) {
        toast.error(err.response.data.ServerMessage.message);
      } else {
        toast.error('Erro de comunica????o');
      }
    });
};

// YUP
export const schemaModalEditCompany = yup
  .object({
    image: yup
      .mixed()
      .test('fileSize', 'O tamanho da imagem excede o limite.', (value) => {
        if (!value.length) return true; // attachment is optional
        return value[0].size <= 5000000;
      })
      .test('type', 'Formato inv??lido.', (value) => {
        if (!value.length) return true;
        return (
          value[0].type === 'image/jpeg' ||
          value[0].type === 'image/png' ||
          value[0].type === 'image/jpg'
        );
      }),

    name: yup
      .string()
      .min(3, 'O nome deve conter 3 ou mais caracteres.')
      .required('O nome deve ser preenchido.'),

    email: yup
      .string()
      .email('Informe um e-mail v??lido.')
      .required('O E-mail deve ser preenchido.'),

    companyName: yup
      .string()
      .min(3, 'O nome da empresa deve conter 3 ou mais caracteres.')
      .required('O nome deve ser preenchido.'),

    contactNumber: yup
      .string()
      .required('O n??mero de telefone deve ser preenchido.')
      .min(15, 'O n??mero de telefone deve conter  no m??nimo 15 caracteres.'),

    // CPF: yup.string().min(14, 'O CPF deve ser v??lido.'),
    //  .required('O CPF deve ser preenchido.')

    // CNPJ: yup.string().min(18, 'O CNPJ deve ser v??lido.'),
    //  .min(11, 'O CNPJ deve ser v??lido.'),

    password: yup
      .string()
      .matches(/^(|.{8,})$/, 'Sua senha deve possuir 8 ou mais caracteres.'),

    confirmPassword: yup
      .string()
      .matches(/^(|.{8,})$/, 'Sua senha deve possuir 8 ou mais caracteres.')
      .oneOf([yup.ref('password'), null], 'As senhas n??o coincidem.'),
  })
  .required();
