import React from 'react';

export type IconName =
  | 'globe' | 'megaphone' | 'building' | 'money-bag' | 'gavel' | 'send'
  | 'handshake' | 'document-list' | 'presentation' | 'document-edit' | 'id-card'
  | 'arrow-up-right' | 'briefcase' | 'blocks' | 'magic-wand' | 'chart-growth'
  | 'workflow' | 'user-search' | 'check' | 'bar-chart' | 'saudi-map' | 'resume'
  | 'monitor' | 'trend-up';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** Glyph name from the TASAMA icon set. */
  name: IconName;
  /** Pixel size (width & height). Default 24. */
  size?: number | string;
  /** Overrides currentColor. Prefer setting `color` on a parent instead. */
  color?: string;
  /** Accessible label; when omitted the icon is decorative (aria-hidden). */
  title?: string;
}

/**
 * Brand line/solid icon from the TASAMA glyph set. Monochrome, tints via CSS `color`.
 */
export function Icon(props: IconProps): JSX.Element;
