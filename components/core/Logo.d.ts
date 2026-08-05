import React from 'react';

export interface LogoProps extends React.SVGAttributes<SVGElement> {
  /** 'full' = TASAMA wordmark + EN/AR tagline lockup; 'pif' = "A PIF Company" endorsement. */
  variant?: 'full' | 'pif';
  /** Recolor: 'color' (brand blue + gold), 'white' (dark surfaces), 'blue', 'mono' (currentColor).
   *  Defaults: full→'color', pif→'white'. */
  tone?: 'color' | 'white' | 'blue' | 'mono';
  /** Rendered height in px (width scales to the artwork ratio). Default 34. */
  height?: number | string;
  title?: string;
}

/**
 * TASAMA brand logo. Use `variant="full"` for the primary lockup and
 * `variant="pif"` for the "A PIF Company" endorsement. Set `tone="white"` on
 * the dark-blue hero surface.
 *
 * @startingPoint section="Core" subtitle="TASAMA logo lockups & tones" viewport="700x200"
 */
export function Logo(props: LogoProps): JSX.Element;
