import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Background = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.size.sm} ${theme.size.md};
  background-color: ${theme.color.gray5};
`;

export const FormContainter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 900px) {
    padding: 0 ${theme.size.md};
  }
`;

export const LoginContainer = styled.div`
  background-color: ${theme.color.primary};
  border-radius: ${theme.size.xxsm};

  width: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;

  margin: ${theme.size.xxxxlg} 0px 0 0px;
  padding: ${theme.size.sm} ${theme.size.md};

  > h2 {
    margin-bottom: ${theme.size.sm};
    color: ${theme.color.white};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > :nth-child(2) {
    margin-bottom: ${theme.size.xsm};
  }
`;
