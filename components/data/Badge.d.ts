import React from 'react';
import { IconName } from '../core/Icon';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  tone?: 'blue' | 'gold' | 'sky' | 'orange' | 'green' | 'neutral';
  /** soft (tinted pill), solid (filled pill), outline, number (circular counter). */
  variant?: 'soft' | 'solid' | 'outline' | 'number';
  icon?: IconName;
  size?: 'sm' | 'md' | 'lg';
}

/** Compact label/chip; `variant="number"` is the circular section counter (01–06). */
export function Badge(props: BadgeProps): JSX.Element;
