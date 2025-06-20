import { color } from '@tokens';

import { ButtonTextVariant } from './Button.types.ts';

export const textVariant = {
  small: 'BTN_M_20' as ButtonTextVariant,
  medium: 'BTN_M_24' as ButtonTextVariant,
  large: 'BTN_M_28' as ButtonTextVariant,
};

export const buttonHeight = {
  small: '32px',
  medium: '40px',
  large: '48px',
};

export const buttonPadding = {
  small: '12px',
  medium: '16px',
  large: '20px',
};

export const buttonBackgroundColor = {
  contained: {
    default: color.primary['500'],
    hover: color.primary['600'],
    pressed: color.primary['700'],
  },
  outlined: {
    default: color.white,
    hover: color.primary['100'],
    pressed: color.primary['500'],
  },
  ghost: {
    default: color.white,
    hover: color.primary['100'],
    pressed: color.primary['500'],
  },
  text: {
    default: color.white,
    hover: color.white,
    pressed: color.white,
  },
};

export const buttonTextColor = {
  contained: {
    default: color.white,
    hover: color.white,
    pressed: color.white,
  },
  outlined: {
    default: color.primary['500'],
    hover: color.primary['500'],
    pressed: color.white,
  },
  ghost: {
    default: color.primary['500'],
    hover: color.primary['500'],
    pressed: color.white,
  },
  text: {
    default: color.black,
    hover: color.primary['500'],
    pressed: color.primary['600'],
  },
};
