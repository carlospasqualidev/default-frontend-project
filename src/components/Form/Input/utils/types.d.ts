import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelColor?: string;
  error?: FieldError;
  passwordPlaceholder?: boolean;
}
