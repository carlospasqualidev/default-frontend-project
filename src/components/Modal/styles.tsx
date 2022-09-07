import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Background = styled.div<{
  animation: boolean;
}>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  width: 100vw;
  height: 100%;

  background: rgba(128, 128, 128, 0.6);

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  @media only screen and (max-width: 900px) {
    padding: 0;
  }

  scrollbar-width: none;
  scrollbar-color: transparent;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  ${({ animation }) =>
    animation
      ? `animation: fade-in 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both; @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }`
      : `animation: fade-out 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both; @keyframes fade-out { 0% { opacity: 1; } 100% { opacity: 0; } }`};
`;

export const Body = styled.div<{ animation: boolean; size: string }>`
  ${({ animation }) =>
    animation
      ? `animation: fade-in-scale 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both; @keyframes fade-in-scale { 0% { scale: 0; } 100% { scale: 1; } }`
      : `animation: fade-out-scale 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both; @keyframes fade-out-scale { 0% { scale: 1; } 100% { scale: 0; } }`};

  opacity: 1;

  ${({ size }) => size === 'md' && 'width: 448px;'}
  ${({ size }) => size === 'lg' && 'width: 896px;'}

  margin-top: ${theme.size.xxlg};

  padding: ${theme.size.md};
  background-color: ${theme.color.white};
  border-radius: ${theme.size.xxsm};
  z-index: 10;

  @media (max-width: 900px) {
    width: 100vw;
    min-height: 100vh;
    border-radius: 0px;
    overflow-y: scroll;
    margin-top: 0px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.size.sm};
`;
