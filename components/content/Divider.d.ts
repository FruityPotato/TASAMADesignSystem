import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** 'subtle' neutral line (default), 'gold' fading brand hairline, 'on-brand' for dark surfaces. */
  tone?: 'subtle' | 'gold' | 'on-brand';
  /** Vertical separator instead of horizontal. */
  vertical?: boolean;
}

/** Horizontal or vertical rule; 'gold' is the signature fading brand hairline. */
export function Divider(props: DividerProps): JSX.Element;
