import React from 'react';
import { IconName } from '../core/Icon';

/**
 * Content card — the workhorse container for feature blocks, stats and copy.
 *
 * @startingPoint section="Content" subtitle="Feature & content cards" viewport="700x300"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Brand icon shown in a tinted tile at the top. */
  icon?: IconName;
  iconColor?: string;
  /** Uppercase gold kicker above the title. */
  eyebrow?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /** elevated = white + soft shadow (default); outline = flat bordered;
   *  subtle = grey surface; brand = dark-blue hero surface. */
  variant?: 'elevated' | 'outline' | 'subtle' | 'brand';
  /** Lift on hover. */
  interactive?: boolean;
  /** Color for a left accent bar (e.g. var(--tasama-orange)). */
  accent?: string;
}

/** Content card — the workhorse container for feature blocks, stats and copy. */
export function Card(props: CardProps): JSX.Element;
