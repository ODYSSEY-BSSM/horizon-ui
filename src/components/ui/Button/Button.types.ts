import React from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonTypes = 'contained' | 'outlined' | 'ghost' | 'text';
export type ButtonTextVariant = 'BTN_M_20' | 'BTN_M_24' | 'BTN_M_28';

export interface ButtonProps {
  size?: ButtonSize;
  type?: ButtonTypes;
  text?: string;
  leftIcon?: string;
  rightIcon?: string;
  round?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  props?: React.HTMLProps<HTMLButtonElement>;
}
