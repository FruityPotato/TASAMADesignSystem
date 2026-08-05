import React from 'react';
import { ICONS } from './iconData.js';

/**
 * TASAMA Icon — renders a brand line/solid glyph. Tints via `color` (currentColor).
 */
export function Icon({ name, size = 24, color, strokeless, className = '', style = {}, title, ...rest }) {
  const glyph = ICONS[name];
  if (!glyph) {
    return (
      <span
        className={className}
        style={{ display: 'inline-block', width: size, height: size, ...style }}
        title={title || `icon:${name}`}
        {...rest}
      />
    );
  }
  return (
    <svg
      role={title ? 'img' : 'presentation'}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      viewBox={glyph.viewBox}
      width={size}
      height={size}
      className={className}
      style={{ display: 'inline-block', flexShrink: 0, color: color || 'currentColor', ...style }}
      dangerouslySetInnerHTML={{ __html: (title ? `<title>${title}</title>` : '') + glyph.path }}
      {...rest}
    />
  );
}
