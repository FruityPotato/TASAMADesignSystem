import React from 'react';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  label?: React.ReactNode;
  tone?: 'brand' | 'gold' | 'orange' | 'green' | 'sky';
  size?: 'sm' | 'md' | 'lg';
  /** Print the percentage at the end. Default true. */
  showValue?: boolean;
  /** Style track/text for dark-blue surfaces. */
  onBrand?: boolean;
}

/** Labeled percentage track (the deck's "70% / 30%" comparison bars). */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
