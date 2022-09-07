/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Api } from '../services/api';
import { IMask, IUploadFile } from './types';

export const DateFormatter = (date: string) =>
  new Date(date).toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });

export async function uploadFile(file: any) {
  let response = {};

  const formData = new FormData();
  formData.append('file', file[0]);

  await Api.post('upload/file', formData).then((res) => {
    response = res.data;
  });

  return response as IUploadFile;
}

export const handleError = async ({ error }: { error: Error }) => {
  if (process.env.NODE_ENV !== 'development') {
    axios.post('https://ada-logs.herokuapp.com/api/logs/create', {
      projectName: 'Sul Oxidos',
      environment: window.location.host.includes('sandbox')
        ? 'Sandbox'
        : 'Production',
      side: 'Backoffice',
      errorStack: error.stack,
    });
  }
};

export const applyMask = ({
  mask,
  value,
}: {
  mask: 'CPF' | 'CNPJ' | 'TEL' | 'CEP' | 'BRL';
  value: string;
}) => {
  let Mask: IMask = { value: '', length: 0 };

  switch (mask) {
    case 'CPF':
      Mask = {
        value: value
          .replace(/\D/g, '')
          .replace(/^(\d{9})(\d)/g, '$1-$2')
          .replace(/^(\d{6})(\d)/g, '$1.$2')
          .replace(/^(\d{3})(\d)/g, '$1.$2'),
        length: 14,
      };
      break;
    case 'CNPJ':
      Mask = {
        value: value
          .replace(/\D/g, '')
          .replace(/^(\d{12})(\d)/g, '$1-$2')
          .replace(/^(\d{8})(\d)/g, '$1/$2')
          .replace(/^(\d{5})(\d)/g, '$1.$2')
          .replace(/^(\d{2})(\d)/g, '$1.$2'),
        length: 18,
      };
      break;
    case 'CEP':
      Mask = {
        value: value.replace(/\D/g, '').replace(/^(\d{5})(\d)/g, '$1-$2'),
        length: 9,
      };
      break;
    case 'TEL':
      Mask = {
        value: value
          .replace(/\D/g, '')
          .replace(/^(\d{2})(\d)/g, '($1) $2')
          .replace(/(\d)(\d{8})$/, '$1 $2')
          .replace(/(\d)(\d{4})$/, '$1-$2'),
        length: 16,
      };
      break;
    case 'BRL':
      Mask = {
        value: (Number(value.replace(/[^0-9]*/g, '')) / 100).toLocaleString(
          'pt-br',
          {
            style: 'currency',
            currency: 'BRL',
          },
        ),
        length: 17,
      };
      break;

    default:
      break;
  }
  return Mask;
};

export const unMask = (value: string) => value.replace(/[^a-zA-Z0-9]/g, '');
