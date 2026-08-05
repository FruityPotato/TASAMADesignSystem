import React from 'react';
import { Icon } from '../core/Icon.jsx';

const PALETTE = {
  blue: { solid: 'var(--tasama-blue)', soft: 'var(--blue-100)', softText: 'var(--tasama-blue)' },
  gold: { solid: 'var(--tasama-gold)', soft: 'var(--gold-100)', softText: 'var(--gold-700)' },
  sky: { solid: 'var(--sky-600)', soft: 'var(--sky-100)', softText: 'var(--sky-600)' },
  orange: { solid: 'var(--tasama-orange)', soft: 'var(--orange-100)', softText: 'var(--orange-600)' },
  green: { solid: 'var(--green-600)', soft: 'var(--green-100)', softText: 'var(--green-600)' },
  neutral: { solid: 'var(--neutral-700)', soft: 'var(--neutral-100)', softText: 'var(--neutral-700)' },
};

/**
 * Badge — a compact label/chip. `variant="number"` renders the deck's circular
 * section counters (01–06); `soft`/`solid`/`outline` render tag pills.
 */
export function Badge({
  children, tone = 'blue', variant = 'soft', icon, size = 'md', className = '', style = {}, ...rest
}) {
  const p = PALETTE[tone] || PALETTE.blue;
  const num = variant === 'number';
  const dims = { sm: { pad: '2px 8px', font: 'var(--text-caption)', d: 26 }, md: { pad: '4px 12px', font: 'var(--text-body-sm)', d: 34 }, lg: { pad: '6px 16px', font: 'var(--text-body-md)', d: 44 } }[size];

  const surfaces = {
    solid: { background: p.solid, color: 'var(--text-on-accent)', border: '1px solid transparent' },
    soft: { background: p.soft, color: p.softText, border: '1px solid transparent' },
    outline: { background: 'transparent', color: p.softText, border: `1px solid ${p.solid}` },
    number: { background: 'transparent', color: p.solid, border: `2px solid ${p.solid}` },
  };

  if (num) {
    return (
      <span className={className} style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dims.d, height: dims.d, borderRadius: 'var(--radius-circle)',
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
        fontSize: dims.font, ...surfaces.number, ...style,
      }} {...rest}>{children}</span>
    );
  }
  return (
    <span className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: dims.pad,
      borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)', fontSize: dims.font, lineHeight: 1.4,
      whiteSpace: 'nowrap', ...surfaces[variant], ...style,
    }} {...rest}>
      {icon && <Icon name={icon} size={parseInt(dims.font) > 13 ? 15 : 13} />}
      {children}
    </span>
  );
}
