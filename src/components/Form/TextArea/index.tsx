// LIBS
import { forwardRef, ForwardRefRenderFunction } from 'react';
// TYPES
import { TextAreaProps } from './utils/types';
// COMPONENTS
import { ErrorMessage, TextAreaContainer } from './styles';

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ label, name, error, ...rest }, ref) => (
  <TextAreaContainer error={!!error}>
    {label && <h6>{label}</h6>}
    <textarea id={name} name={name} ref={ref} {...rest} />
    <ErrorMessage>
      {!!error && <p className="p3">{error.message}</p>}
    </ErrorMessage>
  </TextAreaContainer>
);
export const TextArea = forwardRef(TextAreaBase);
