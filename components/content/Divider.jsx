import React from 'react';

/**
 * Divider — a horizontal rule. `tone="gold"` renders the brand's fading gold
 * hairline used between sections; `tone="subtle"` is a plain neutral line.
 */
export function Divider({ tone = 'subtle', vertical = false, className = '', style = {}, ...rest }) {
  const gold = tone === 'gold';
  const onBrand = tone === 'on-brand';
  if (vertical) {
    return (
      <span className={className} role="separator" aria-orientation="vertical"
        style={{
          display: 'inline-block', width: 1, alignSelf: 'stretch', minHeight: 24,
          background: onBrand ? 'var(--border-on-brand)' : 'var(--border-subtle)', ...style,
        }} {...rest} />
    );
  }
  return (
    <hr className={className} role="separator"
      style={{
        border: 0, height: gold ? 2 : 1, width: '100%', margin: 0,
        background: gold ? 'var(--gradient-hairline)'
          : onBrand ? 'var(--border-on-brand)' : 'var(--border-subtle)',
        ...style,
      }} {...rest} />
  );
}
