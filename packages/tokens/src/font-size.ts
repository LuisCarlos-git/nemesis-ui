import { pxToRem } from './pxToRem';

export const fontSize = {
  sm: pxToRem(12),
  base: pxToRem(16),
  lg: pxToRem(20),
  xl: pxToRem(28),
  '2xl': pxToRem(38),
  '3xl': pxToRem(50),
} as const;
