import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Show the short leading rule. Default true. */
  tick?: boolean;
  /** Label color. Default brand gold. */
  color?: string;
}

/** Uppercase gold section kicker with a short leading rule. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
