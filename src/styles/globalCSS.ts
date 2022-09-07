import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { icon } from '../assets/icons/index';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: DM Sans;
  }

  a {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #4339F2;
    text-decoration: none;
  }

  body {
    background-color: ${theme.color.gray2};
    color: ${theme.color.gray5};
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 42px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
  }

  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  }

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }

  h6 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  .p1{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }
  .p2{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
  .p3{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  .p4{
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
  .p5{
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }
  .p6{
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
  }
  .p7{
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
  }


  input {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    outline: none;
    width: 100%;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.gray4};
    height: 32px;
    border-radius: ${theme.size.xxsm};
    padding: ${theme.size.xsm} ${theme.size.sm};
    :placeholder-shown{
      border: 1px solid ${theme.color.gray3};
    }

  }
  input[type=file],
  input[type=file]::-webkit-file-upload-button {
    cursor: pointer;
  }

  input[disabled],textarea[disabled],select[disabled] {
    cursor: not-allowed;
    background-color: ${theme.color.gray1};
    color: ${theme.color.gray4}
  }

  textarea {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    outline: none;
    width: 100%;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.gray4};
    height: 100px;
    border-radius: ${theme.size.xxsm};
    padding: ${theme.size.xsm} ${theme.size.sm} ;
    resize: none;
    :placeholder-shown{
      border: 1px solid ${theme.color.gray3};
    }
  }

  select{
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    outline: none;
    width: 100%;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.gray4};
    height: 32px;
    border-radius: ${theme.size.xxsm};
    padding: 0 ${theme.size.sm};
    background-image: url(${icon.downArrow});
    background-repeat: no-repeat, repeat;
    background-position: right ${theme.size.sm} top 50%, 0 0;
    background-size: 16px;
  }



   button {
    border-radius: ${theme.size.xxsm};
    padding: ${theme.size.xsm} ${theme.size.sm};
    outline: none;
    border: none;
    cursor: pointer;
    color: ${theme.color.white};
    background-color: ${theme.color.primary};
  }

  table{
    th{
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }

   td{
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
   }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: ${theme.size.xsm};

    > :last-child {
      margin-top: ${theme.size.xsm}
    }
  }


::-webkit-scrollbar {
  @media (max-width: 900px) {
    display: none;
  }
}

/* ::-webkit-scrollbar-track {
  background: ${theme.color.gray5};
}
::-webkit-scrollbar-thumb {
  background: ${theme.color.primaryM};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: ${theme.color.primary};
} */
`;
