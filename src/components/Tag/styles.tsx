import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const TagContainer = styled.div<{ isInvalid: boolean }>`
  width: fit-content;
  padding: 2px ${theme.size.xxsm};
  border-radius: ${theme.size.xxsm};

  ${({ isInvalid }) =>
    isInvalid
      ? `background-color: ${theme.color.dangerL}; color: ${theme.color.danger};`
      : `background-color: ${theme.color.successL}; color: ${theme.color.success};`}
`;
