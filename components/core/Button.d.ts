import React from 'react';
import { IconName } from './Icon';

/**
 * TASAMA button. Primary is solid brand blue; use `inverse` on dark-blue hero
 * surfaces and `link` for inline "See more" actions.
 *
 * @startingPoint section="Core" subtitle="Brand buttons — all variants & sizes" viewport="700x220"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** primary = solid blue (main CTAs); secondary = blue outline; ghost = quiet;
   *  inverse = white-on-blue for dark surfaces; link = inline text action. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Brand icon rendered before the label. */
  iconLeft?: IconName;
  /** Brand icon rendered after the label (e.g. 'arrow-up-right' for "See more"). */
  iconRight?: IconName;
  /** Fully-rounded pill shape. Default false (crisp 6px radius). */
  pill?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/**
 * TASAMA button.
 */
export function Button(props: ButtonProps): JSX.Element;
