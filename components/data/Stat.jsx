import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Stat — a headline metric: big value, label, optional icon and caption.
 * Used for KPI rows and highlight numbers (e.g. "27M", "90%").
 */
export function Stat({
  value, label, caption, icon, align = 'start', tone = 'brand',
  variant = 'plain', className = '', style = {}, ...rest
}) {
  const brand = variant === 'brand';
  const valueColors = {
    brand: brand ? 'var(--text-inverse)' : 'var(--tasama-blue)',
    gold: 'var(--tasama-gold)',
    orange: 'var(--tasama-orange)',
    green: 'var(--green-600)',
    sky: brand ? 'var(--tasama-sky)' : 'var(--sky-600)',
  };
  const centered = align === 'center';
  return (
    <div
      className={className}
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-1)',
        alignItems: centered ? 'center' : 'flex-start', textAlign: centered ? 'center' : 'start',
        padding: variant === 'card' ? 'var(--space-5)' : 0,
        borderRadius: 'var(--radius-lg)',
        background: brand ? 'var(--gradient-brand)' : variant === 'card' ? 'var(--surface-card)' : 'transparent',
        border: variant === 'card' ? '1px solid var(--border-subtle)' : brand ? '1px solid var(--border-on-brand)' : 'none',
        boxShadow: variant === 'card' ? 'var(--shadow-sm)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {icon && (
        <Icon name={icon} size={24} style={{ marginBottom: 4, color: valueColors[tone] || valueColors.brand }} />
      )}
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--text-display)', lineHeight: 1, letterSpacing: 'var(--tracking-tight)',
        color: valueColors[tone] || valueColors.brand,
      }}>{value}</span>
      {label && (
        <span style={{
          fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
          color: brand ? 'var(--text-inverse)' : 'var(--text-strong)', marginTop: 2,
        }}>{label}</span>
      )}
      {caption && (
        <span style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-normal)', color: brand ? 'var(--text-inverse-muted)' : 'var(--text-muted)', marginTop: 2 }}>
          {caption}
        </span>
      )}
    </div>
  );
}
