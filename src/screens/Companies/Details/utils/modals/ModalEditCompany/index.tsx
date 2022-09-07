// LIBS
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import * as Style from './styles';
import { ModalComponent } from '../../../../../../components/Modal';
import { Input } from '../../../../../../components/Form/Input';
import { Button } from '../../../../../../components/Buttons/Button';
import { Uploader } from '../../../../../../components/Uploader';

// FUNCTIONS
import { requestEditUser, schemaModalEditCompany } from '../../functions';

// TYPES
import { IModalEditCompany, IFormDataCompany } from '../../../../types';
import { applyMask } from '../../../../../../utils/functions';

export const modalEditCompany = () => {
  const {
    Modal,
    toggleModal: toggleModalEditCompany,
    modalIsOpen: modalCompanyIsOpen,
  } = ModalComponent();

  const ModalEditCompany = ({ setCompany, company }: IModalEditCompany) => {
    const navigate = useNavigate();
    const [onQuery, setOnQuery] = useState<boolean>(false);

    const [masksInput, setMasksInput] = useState({
      CNPJ: applyMask({ value: company.CNPJ, mask: 'CNPJ' }).value,
      CPF: applyMask({ value: company.CPF, mask: 'CPF' }).value,
      TEL: applyMask({ value: company.contactNumber, mask: 'TEL' }).value,
    });

    // YUP VALIDATION
    const {
      register,
      handleSubmit,

      formState: { errors },
    } = useForm<IFormDataCompany>({
      resolver: yupResolver(schemaModalEditCompany),
      defaultValues: {
        name: company.name,
        email: company.UserCompanies[0].User.email,
        companyName: company.name,
        // CNPJ: applyMask({ value: company.CNPJ, mask: 'CNPJ' }).value,
        // CPF: applyMask({ value: company.CPF, mask: 'CPF' }).value,
        // contactNumber: applyMask({ value: company.contactNumber, mask: 'TEL' })
        //   .value,
      },
    });

    // SUBMITED FORM
    const onSubmit = handleSubmit(async (data) => {
      console.log(data);
      await requestEditUser({
        data,
        toggleModal: toggleModalEditCompany,
        company,
        setCompany,
        navigate,
        setOnQuery,
      });
    });

    return (
      <Modal title="Editar usuário">
        <Style.FormContainer as="form" onSubmit={onSubmit}>
          <Uploader
            label="Logo"
            error={errors.image}
            register={{ ...register('image') }}
            defaultImage={company.image}
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
            placeholder="Ex: (48) 9 9000-0000"
            error={errors.contactNumber}
            {...register('contactNumber')}
            maxLength={applyMask({ value: masksInput.TEL, mask: 'TEL' }).length}
            value={applyMask({ value: masksInput.TEL, mask: 'TEL' }).value}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              setMasksInput({ ...masksInput, TEL: evt.target.value });
            }}
          />

          {company.CPF && (
            <Input
              label="CPF"
              placeholder="Ex: 000.000.000.00"
              error={errors.CPF}
              {...register('CPF')}
              maxLength={
                applyMask({ value: masksInput.CPF, mask: 'CPF' }).length
              }
              value={applyMask({ value: masksInput.CPF, mask: 'CPF' }).value}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setMasksInput({ ...masksInput, CPF: evt.target.value });
              }}
            />
          )}

          {company.CNPJ && (
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
          )}

          <Input
            type="password"
            placeholder="••••••••••"
            passwordPlaceholder
            label="Senha do usuário"
            error={errors.password}
            {...register('password')}
            maxLength={120}
          />
          <Input
            type="password"
            placeholder="••••••••••"
            passwordPlaceholder
            label="Confirmar senha"
            error={errors.confirmPassword}
            {...register('confirmPassword')}
            maxLength={120}
          />

          <Button center label="Salvar" type="submit" loading={onQuery} />
        </Style.FormContainer>
      </Modal>
    );
  };

  return { ModalEditCompany, toggleModalEditCompany, modalCompanyIsOpen };
};
