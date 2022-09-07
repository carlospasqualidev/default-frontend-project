import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  font-family: DM Sans;
  background-color: ${theme.color.gray2};

  @media (max-width: 900px) {
    position: fixed;
    overflow: hidden;
  }

  > button {
    font-family: DM Sans;
    width: fit-content;
    transition: 0.25s;
    border-radius: ${theme.size.xxsm};
    padding: ${theme.size.xsm} ${theme.size.sm};
    outline: none;
    border: none;
    cursor: pointer;
    color: ${theme.color.white};
    background-color: ${theme.color.primary};
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const Content = styled.div`
  margin-top: ${theme.size.xxxxlg};
  margin-bottom: ${theme.size.sm};
  border-radius: ${theme.size.xxsm};
  background-color: ${theme.color.white};
  color: ${theme.color.primary};
  padding: ${theme.size.sm};
  width: 100%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.size.sm};
  font-family: DM Sans;

  > h2 {
    margin: 0;
  }

  @media (max-width: 900px) {
    width: 80%;
  }
`;
