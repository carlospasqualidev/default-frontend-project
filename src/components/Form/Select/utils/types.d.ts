import { SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface SelectProps
  extends SelectHTMLAttributes<SelectHTMLAttributes> {
  label: string;
  error?: FieldError;
}
