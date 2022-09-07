// LIBS
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// COMPONENTS
import * as Style from './styles';
import { ModalComponent } from '../../../../../../components/Modal';
import { Input } from '../../../../../../components/Form/Input';
import { Button } from '../../../../../../components/Buttons/Button';
import { Uploader } from '../../../../../../components/Uploader';

// FUNCTIONS
import { requestCreateUser, schemaModalCreateCompany } from '../../functions';
import { applyMask } from '../../../../../../utils/functions';

// TYPES
import { IFormDataCompany, IModalCreateUser } from '../../../../types';

export const modalCreateCompanie = () => {
  const {
    Modal,
    toggleModal: toggleModalCreateCompanie,
    modalIsOpen: modalCreateCompanieIsOpen,
  } = ModalComponent();

  const ModalCreateCompanie = ({
    setCompanies,
    page,
    setCount,
  }: IModalCreateUser) => {
    const [onQuery, setOnQuery] = useState<boolean>(false);
    const [masksInput, setMasksInput] = useState({
      CNPJ: '',
      CPF: '',
      TEL: '',
    });

    // YUP VALIDATION
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IFormDataCompany>({
      resolver: yupResolver(schemaModalCreateCompany),
    });

    // SUBMITED FORM
    const onSubmit = handleSubmit(async (data) => {
      await requestCreateUser({
        data,
        toggleModal: toggleModalCreateCompanie,
        setCompanies,
        page,
        setCount,
        setOnQuery,
      });
    });

    return (
      <Modal title="Cadastrar usuário">
        <Style.FormContainer as="form" onSubmit={onSubmit}>
          <Uploader
            label="Logo"
            error={errors.image}
            register={{ ...register('image') }}
          />

          <Input
            label="Nome do responsável"
            placeholder="Ex: João Silva"
            error={errors.name}
            {...register('name')}
            maxLength={40}
          />

          <Input
            label="E-mail"
            placeholder="Ex: joao.silva@ada.com.br"
            error={errors.email}
            {...register('email')}
            maxLength={50}
          />

          <Input
            label="Nome da empresa"
            placeholder="Ex: SATC"
            error={errors.companyName}
            {...register('companyName')}
            maxLength={40}
          />

          <Input
            label="Telefone"
            placeholder="Ex: 48 99000-0000"
            error={errors.contactNumber}
            {...register('contactNumber')}
            maxLength={applyMask({ value: masksInput.TEL, mask: 'TEL' }).length}
            value={applyMask({ value: masksInput.TEL, mask: 'TEL' }).value}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              setMasksInput({ ...masksInput, TEL: evt.target.value });
            }}
          />
          <Input
            label="CPF"
            placeholder="Ex: 000.000.000.00"
            error={errors.CPF}
            {...register('CPF')}
            maxLength={applyMask({ value: masksInput.CPF, mask: 'CPF' }).length}
            value={applyMask({ value: masksInput.CPF, mask: 'CPF' }).value}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              setMasksInput({ ...masksInput, CPF: evt.target.value });
            }}
          />
          <Input
            label="CNPJ"
            placeholder="Ex: 00.000.000/0000-00"
            error={errors.CNPJ}
            {...register('CNPJ')}
            maxLength={
              applyMask({ value: masksInput.CNPJ, mask: 'CNPJ' }).length
            }
            value={applyMask({ value: masksInput.CNPJ, mask: 'CNPJ' }).value}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              setMasksInput({ ...masksInput, CNPJ: evt.target.value });
            }}
          />

          <Input
            type="password"
            placeholder="Crie uma senha"
            label="Senha do usuário"
            error={errors.password}
            {...register('password')}
            maxLength={120}
          />
          <Input
            type="password"
            label="Confirmar senha"
            placeholder="Repita a senha criada"
            error={errors.confirmPassword}
            {...register('confirmPassword')}
            maxLength={120}
          />

          <Button center label="Cadastrar" type="submit" loading={onQuery} />
        </Style.FormContainer>
      </Modal>
    );
  };

  return {
    ModalCreateCompanie,
    toggleModalCreateCompanie,
    modalCreateCompanieIsOpen,
  };
};
