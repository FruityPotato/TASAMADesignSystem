import React from 'react';

export interface TeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  /** Role/title — rendered in uppercase gold. */
  position?: string;
  /** Photo URL; falls back to initials on a tinted disc. */
  photo?: string;
  /** Optional secondary line (e.g. department). */
  meta?: React.ReactNode;
  align?: 'center' | 'start';
  /** plain (no container), card (white), brand (dark blue). */
  variant?: 'plain' | 'card' | 'brand';
}

/** Person tile with photo/initials, name and position. */
export function TeamCard(props: TeamCardProps): JSX.Element;
