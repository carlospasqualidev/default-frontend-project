/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonHTMLAttributes } from 'react';

export interface IPopoverButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  message: {
    title: string;
    content: string;
    contentColor?: string | undefined;
  };
  actionButtonBgColor?: string;
  actionButtonClick: () => void;
  bgColor?: string;
  iconButtonColor?: string;
  type: 'IconButton' | 'Button';
  loading?: boolean;
  buttonIcon?: string;
  buttonIconSize?: string;
  borderless?: boolean;
}
