import React from 'react';

const TONES = {
  brand: 'var(--tasama-blue)', gold: 'var(--tasama-gold)',
  orange: 'var(--tasama-orange)', green: 'var(--green-600)', sky: 'var(--sky-600)',
};

/**
 * ProgressBar — a labeled percentage track. Mirrors the deck's "70% / 30%"
 * comparison bars. Set `showValue` to print the percentage at the end.
 */
export function ProgressBar({
  value = 0, max = 100, label, tone = 'brand', size = 'md',
  showValue = true, onBrand = false, className = '', style = {}, ...rest
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const heights = { sm: 6, md: 10, lg: 14 };
  const h = heights[size] || heights.md;
  const fill = TONES[tone] || TONES.brand;
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }} {...rest}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          {label && <span style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)', color: onBrand ? 'var(--text-inverse)' : 'var(--text-body)' }}>{label}</span>}
          {showValue && <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-body-sm)', color: onBrand ? 'var(--text-inverse)' : 'var(--text-strong)' }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div style={{ height: h, borderRadius: 'var(--radius-pill)', background: onBrand ? 'rgba(254,255,254,0.16)' : 'var(--neutral-150)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, borderRadius: 'var(--radius-pill)', background: fill, transition: 'width var(--duration-slow) var(--ease-emphasized)' }} />
      </div>
    </div>
  );
}
