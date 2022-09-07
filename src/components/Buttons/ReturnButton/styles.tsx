import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Background = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.25s;
  :hover {
    opacity: 0.7;
  }
  > h6 {
    color: ${theme.color.gray4};
  }
`;
