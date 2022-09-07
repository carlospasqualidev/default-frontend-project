// LIBS
import { forwardRef, ForwardRefRenderFunction } from 'react';

// TYPES
import { IInput } from './utils/types';
// COMPONENTS
import { ErrorMessage, InputContainer } from './styles';
import { theme } from '../../../styles/theme';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {
    label,
    labelColor = theme.color.gray5,
    name,
    error,
    passwordPlaceholder,
    ...rest
  },
  ref,
) => (
  <InputContainer
    error={!!error}
    passwordPlaceholder={passwordPlaceholder}
    labelColor={labelColor}
  >
    <h6>{label}</h6>
    <input id={name} name={name} ref={ref} {...rest} />
    <ErrorMessage>
      {!!error && <p className="p3">{error.message}</p>}
    </ErrorMessage>
  </InputContainer>
);
export const Input = forwardRef(InputBase);
