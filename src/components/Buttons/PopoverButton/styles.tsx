import styled from 'styled-components';
import { theme } from '../../../styles/theme';

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

export const PopoverBody = styled.div<{ contentColor?: string }>`
  width: 100%;
  min-height: fit-content;
  padding: ${theme.size.sm};

  > h2 {
    display: flex;
    justify-content: space-between;
  }

  > .p4 {
    margin: ${theme.size.xsm} 0;
    color: ${theme.color.gray5};
  }

  > .p3 {
    ${({ contentColor }) => contentColor && `color: ${contentColor}`};
  }
`;

export const PopoverBackground = styled.div`
  display: flex;

  z-index: 8;
  border-radius: ${theme.size.xsm};
  width: 330px;
  background-color: ${theme.color.white};

  border: 2px solid ${theme.color.gray3};

  min-height: fit-content;

  @media (max-width: 500px) {
    min-width: calc(100vw - 20px);
    width: 100%;
  }
`;

export const AnimationDiv = styled.div<{ animation: boolean }>`
  ${({ animation }) =>
    animation
      ? `animation: fade-in 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both; @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }`
      : `animation: fade-out 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both; @keyframes fade-out { 0% { opacity: 1; } 100% { opacity: 0; } }`};
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.size.xxsm};
`;
