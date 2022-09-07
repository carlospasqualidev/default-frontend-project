import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const InputContainer = styled.div<{
  labelColor: string;
  error: boolean;
  passwordPlaceholder?: boolean;
}>`
  display: flex;
  flex-direction: column;
  > h6 {
    color: ${({ labelColor }) => labelColor};
    margin-bottom: ${theme.size.xxsm};
  }
  width: 100%;

  // CÓDIGOS PARA PLACEHOLDER DE SENHA FICAR PRETO E SUMIR NO FOCUS,
  // APENAS PARA O VISUAL ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  ${({ passwordPlaceholder }) =>
    passwordPlaceholder &&
    `
    > .opera input[type="password"],
    .webkit input[type="password"],
    input[type="password"] {

      border: 1px solid ${theme.color.gray4};

      ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: black;
        opacity: 1; /* Firefox */
      }
      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: black;
      }
      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: black;
      }
    }
    input[type="password"]:focus::-webkit-input-placeholder {
      color: transparent !important;
    }
    input[type="password"]:focus::-moz-placeholder {
      color: transparent !important;
    }
    input[type="password"]:focus:-moz-placeholder {
      color: transparent !important;
   }
 `}
  // CÓDIGOS PARA PLACEHOLDER DE SENHA FICAR PRETO E SUMIR NO FOCUS,
  // APENAS PARA O VISUAL ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  ${({ error }) =>
    error &&
    `
   > input {
    border-color: ${theme.color.danger} !important;
    color: ${theme.color.danger};
    margin-bottom: ${theme.size.xxsm};
    }
 `}
`;

export const ErrorMessage = styled.div`
  display: flex;
  color: ${theme.color.danger};

  > p {
    animation: scale-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes scale-in-left {
      0% {
        transform: scale(0);
        transform-origin: 0% 50%;
        opacity: 1;
      }
      100% {
        transform: scale(1);
        transform-origin: 0% 50%;
        opacity: 1;
      }
    }
  }
`;
