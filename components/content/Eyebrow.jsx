import React from 'react';

/**
 * Eyebrow / section kicker — the small uppercase gold label that sits above
 * TASAMA section titles. A short gold rule precedes the text by default.
 */
export function Eyebrow({ children, tick = true, color = 'var(--tasama-gold)', className = '', style = {}, ...rest }) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-overline)',
        fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-overline)',
        textTransform: 'uppercase', color, ...style,
      }}
      {...rest}
    >
      {tick && <span style={{ width: 20, height: 2, background: 'currentColor', display: 'inline-block' }} />}
      {children}
    </span>
  );
}
