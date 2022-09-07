// LIBS
import { forwardRef, ForwardRefRenderFunction } from 'react';

// TYPES
import { SelectProps } from './utils/types';

// COMPONENTS
import { ErrorMessage, SelectContainer } from './styles';

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { label, name, error, ...rest },
  ref,
) => (
  <SelectContainer error={!!error}>
    <h6>{label}</h6>
    <select id={name} name={name} ref={ref} {...rest} />
    <ErrorMessage>
      {!!error && <p className="p3">{error.message}</p>}
    </ErrorMessage>
  </SelectContainer>
);
export const Select = forwardRef(SelectBase);
