// LIBS
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// COMPONENTS
import * as Style from './styles';
import { ReturnButton } from '../../../components/Buttons/ReturnButton';
import { IconButton } from '../../../components/Buttons/IconButton';
import { Image } from '../../../components/Image';
import { Tag } from '../../../components/Tag';
import { PopoverButton } from '../../../components/Buttons/PopoverButton';

// THEMES
import { theme } from '../../../styles/theme';

// ICONS
import { icon } from '../../../assets/icons/index';

// TYPES
import { ICompany } from '../types';

// MODAIS
import { modalEditCompany } from './utils/modals/ModalEditCompany';

// FUNCTIONS
import { applyMask, DateFormatter } from '../../../utils/functions';
import {
  requestChangeIsBlocked,
  requestDeleteCompany,
} from './utils/functions';

export const CompanyDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [company, setCompany] = useState<ICompany>(state as ICompany);
  const [loading, setLoading] = useState<boolean>(true);

  const { ModalEditCompany, modalCompanyIsOpen, toggleModalEditCompany } =
    modalEditCompany();

  useEffect(() => {
    if (!state) {
      navigate('/companies');
    }
    setLoading(false);
  }, []);

  return (
    <>
      {modalCompanyIsOpen && (
        <ModalEditCompany company={company} setCompany={setCompany} />
      )}

      {!loading && (
        <>
          <Style.Header>
            <h2>Detalhes de usuário</h2>
          </Style.Header>

          <ReturnButton path="/companies" />
          <Style.CardSection>
            <Style.Card>
              <h6>Foto de perfil</h6>
              <Image img={company.image} size="80px" />
            </Style.Card>

            <Style.Card>
              <h6>Nome do responsável</h6>
              <p className="p2">{company.UserCompanies[0].User.name}</p>
            </Style.Card>

            <Style.Card>
              <h6>E-mail</h6>
              <p className="p2">{company.UserCompanies[0].User.email}</p>
            </Style.Card>

            <Style.Card>
              <h6>Nome da empresa</h6>
              <p className="p2">{company.name}</p>
            </Style.Card>

            <Style.Card>
              <h6>Telefone</h6>
              <p className="p2">
                {applyMask({ value: company.contactNumber, mask: 'TEL' }).value}
              </p>
            </Style.Card>

            {company.CPF && (
              <Style.Card>
                <h6>CPF</h6>
                <p className="p2">
                  {applyMask({ value: company.CPF, mask: 'CPF' }).value}
                </p>
              </Style.Card>
            )}

            {company.CNPJ && (
              <Style.Card>
                <h6>CNPJ</h6>
                <p className="p2">
                  {applyMask({ value: company.CNPJ, mask: 'CNPJ' }).value}
                </p>
              </Style.Card>
            )}

            <Style.Card>
              <h6>Status</h6>
              <Tag isInvalid={company.isBlocked} />
            </Style.Card>

            <Style.Card>
              <h6>Data de cadastro</h6>
              <p className="p2">{DateFormatter(company.createdAt)}</p>
            </Style.Card>

            <Style.Card>
              <h6>Último acesso</h6>
              <p className="p2">
                {company.UserCompanies[0].User.lastAccess
                  ? DateFormatter(company.UserCompanies[0].User.lastAccess)
                  : '-'}
              </p>
            </Style.Card>
          </Style.CardSection>

          <Style.Footer>
            <PopoverButton
              actionButtonBgColor={
                company.isBlocked ? theme.color.success : theme.color.danger
              }
              type="IconButton"
              label={company.isBlocked ? 'Ativar' : 'Desativar'}
              buttonIcon={company.isBlocked ? icon.checked : icon.block}
              message={{
                title: `Deseja ${
                  company.isBlocked ? 'ativar' : 'desativar'
                } o acesso deste usuário?`,
                content: 'Esta ação poderá ser desfeita posteriormente.',
                contentColor: theme.color.danger,
              }}
              actionButtonClick={() => {
                requestChangeIsBlocked({
                  company,
                  setCompany,
                  navigate,
                });
              }}
            />
            <PopoverButton
              actionButtonBgColor={theme.color.danger}
              type="IconButton"
              label="Excluir"
              buttonIcon={icon.trash}
              message={{
                title: 'Deseja excluir este usuário?',
                content:
                  'Atenção, essa ação não poderá ser desfeita posteriormente.',
                contentColor: theme.color.danger,
              }}
              actionButtonClick={() => {
                requestDeleteCompany({
                  company,
                  navigate,
                });
              }}
            />

            <IconButton
              hideLabelOnMedia
              icon={icon.editWithBg}
              label="Editar"
              onClick={() => {
                toggleModalEditCompany();
              }}
            />
          </Style.Footer>
        </>
      )}
    </>
  );
};
