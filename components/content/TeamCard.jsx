import React from 'react';

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

/**
 * TeamCard — a person tile: photo (or initials), name and position. Mirrors the
 * template's "FIRST NAME LAST NAME / POSITION" leadership layout.
 */
export function TeamCard({
  name = 'First Last', position = 'Position', photo, meta,
  align = 'center', variant = 'plain', className = '', style = {}, ...rest
}) {
  const centered = align === 'center';
  const brand = variant === 'brand';
  return (
    <div
      className={className}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: centered ? 'center' : 'flex-start',
        textAlign: centered ? 'center' : 'start', gap: 'var(--space-3)',
        padding: variant === 'plain' ? 0 : 'var(--space-5)',
        borderRadius: 'var(--radius-lg)',
        background: brand ? 'var(--gradient-brand)' : variant === 'card' ? 'var(--surface-card)' : 'transparent',
        border: variant === 'card' ? '1px solid var(--border-subtle)' : brand ? '1px solid var(--border-on-brand)' : 'none',
        boxShadow: variant === 'card' ? 'var(--shadow-sm)' : 'none',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        width: 96, height: 96, borderRadius: 'var(--radius-circle)', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        background: brand ? 'rgba(254,255,254,0.12)' : 'var(--blue-050)',
        border: `2px solid ${brand ? 'rgba(254,255,254,0.35)' : 'var(--blue-100)'}`,
        color: brand ? 'var(--tasama-sky)' : 'var(--tasama-blue)',
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-h3)',
      }}>
        {photo ? <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials(name)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
          fontSize: 'var(--text-title)', letterSpacing: 'var(--tracking-tight)',
          color: brand ? 'var(--text-inverse)' : 'var(--text-strong)',
        }}>{name}</span>
        <span style={{
          fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
          color: brand ? 'var(--text-inverse-muted)' : 'var(--tasama-gold)',
        }}>{position}</span>
        {meta && <span style={{ marginTop: 4, fontSize: 'var(--text-body-sm)', color: brand ? 'var(--text-inverse-muted)' : 'var(--text-muted)' }}>{meta}</span>}
      </div>
    </div>
  );
}
