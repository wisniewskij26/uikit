import { CSSProperties } from 'styled-components';

export type SpacingUnit =
  | 'none'
  | 'px'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export type SpacingMap = Record<SpacingUnit, CSSProperties['padding']>;

const spacing: SpacingMap = {
  none: '0rem',
  px: '0.0625rem',
  xxxs: '0.125rem',
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '2.5rem',
  xxxl: '3rem',
};

export default spacing;
