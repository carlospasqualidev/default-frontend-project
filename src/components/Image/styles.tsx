import styled from 'styled-components';
// TYPES
import { ImageProps } from './utils/types';

export const ImgHolder = styled.div<ImageProps>`
  ${({ size }) =>
    size &&
    ` min-width:${size}; width: ${size}; min-height: ${size};  height: ${size};`}
  ${({ width }) => width && `min-width:${width} ; width: ${width};`}
    ${({ height }) => height && `min-height: ${height}; height: ${height};`}

  > img {
    object-fit: cover;
    ${({ radius }) => radius && `border-radius:${radius};`}
    ${({ size }) =>
      size &&
      ` min-width:${size}; width: ${size}; min-height: ${size};  height: ${size};`}
    ${({ width }) => width && `min-width:${width} ; width: ${width};`}
    ${({ height }) => height && `min-height: ${height}; height: ${height};`}
  }
`;
