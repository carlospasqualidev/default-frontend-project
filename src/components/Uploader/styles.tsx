import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const BackgroundSection = styled.section`
  position: relative;

  > h6 {
    margin-bottom: ${theme.size.xxsm};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.size.xsm};

  > p {
    opacity: 0.7;
    position: absolute;
    left: 88px;
  }
`;

export const ImageWrapper = styled.div`
  width: fit-content;
  border-radius: 50%;
  transition: 0.25s;
  :hover {
    opacity: 0.7;
  }

  > img {
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 56px;
    top: 20px;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  color: ${theme.color.dangerL};

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
