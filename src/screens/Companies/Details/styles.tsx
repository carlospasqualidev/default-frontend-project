import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.size.xsm};
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.size.xxsm};
  margin: ${theme.size.sm} 0;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.size.xsm} ${theme.size.sm};
  background-color: ${theme.color.white};
  border-radius: ${theme.size.xxsm};

  > img {
    width: 80px;
    height: 80px;
  }

  > h6 {
    width: 40%;
  }

  @media (max-width: 500px) {
    > h6 {
      width: fit-content;
      min-width: 130px;
    }
    > p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: ${theme.size.sm};
`;

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

export const ContainerButton = styled.div`
  position: relative;
  width: fit-content;
`;

export const SpinnerContent = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  border: 3px solid ${theme.color.white};
  border-top: 3px solid ${theme.color.primaryL};
  border-radius: 50%;
  width: ${theme.size.sm};
  height: ${theme.size.sm};
  animation: spin 0.75s linear infinite;
  display: flex;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Hr = styled.div`
  height: 1px;
  background-color: ${theme.color.gray2};

  margin: ${theme.size.xsm} 0px;
`;

export const Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid white;
  right: -10px;
  bottom: calc(50% - 10px);

  @media (max-width: 500px) {
    display: none;
  }
`;

export const PopoverBody = styled.div<{ p3Color: string }>`
  width: 100%;
  min-height: fit-content;
  padding: ${theme.size.sm};

  > h2 {
    display: flex;
    justify-content: space-between;
  }

  > .p4 {
    margin-top: ${theme.size.xsm};
    color: ${theme.color.gray5};
  }

  > .p3 {
    margin-top: ${theme.size.xsm};
    ${({ p3Color }) => p3Color && `color: ${p3Color};`}
  }
`;

export const PopoverBackground = styled.div`
  display: flex;

  position: absolute;
  z-index: 8;
  border-radius: ${theme.size.xsm};
  border: 2px solid ${theme.color.gray1};
  min-width: 330px;
  width: 100%;
  background-color: ${theme.color.white};
  min-height: fit-content;

  right: calc(100% + 10px);
  top: calc(100% - 25px);
  bottom: 0;
  margin: auto 0;

  @media (max-width: 500px) {
    position: fixed;
    min-width: 280px;

    right: 0;
    left: 0;
    top: 410px;
  }
`;
