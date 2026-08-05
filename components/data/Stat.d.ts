import React from 'react';
import { IconName } from '../core/Icon';

/**
 * Headline KPI number with label and caption.
 *
 * @startingPoint section="Data" subtitle="KPI stat blocks" viewport="700x240"
 */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The metric, e.g. "27M" or "90%". */
  value: React.ReactNode;
  /** Uppercase label under the value. */
  label?: React.ReactNode;
  /** Supporting sentence. */
  caption?: React.ReactNode;
  icon?: IconName;
  align?: 'start' | 'center';
  /** Value color accent. */
  tone?: 'brand' | 'gold' | 'orange' | 'green' | 'sky';
  /** plain (default), card (white panel), brand (dark blue). */
  variant?: 'plain' | 'card' | 'brand';
}

/** Headline KPI number with label and caption. */
export function Stat(props: StatProps): JSX.Element;
