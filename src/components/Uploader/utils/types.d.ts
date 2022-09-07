/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError } from 'react-hook-form';

export interface IUploader {
  label: string;
  error: FieldError | undefined;
  register: any;
  defaultImage?: string;
  setNewImage?: any;
}
