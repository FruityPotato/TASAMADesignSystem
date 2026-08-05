import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * TASAMA content card. Default is a clean white surface with a soft blue-tinted
 * shadow; `variant="brand"` is the dark-blue hero surface; `variant="outline"`
 * is a flat bordered card.
 */
export function Card({
  icon, iconColor, eyebrow, title, children, footer, variant = 'elevated',
  interactive = false, accent, className = '', style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const brand = variant === 'brand';

  const surfaces = {
    elevated: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' },
    outline: { background: 'var(--surface-card)', border: '1px solid var(--border-default)', boxShadow: 'none' },
    subtle: { background: 'var(--surface-subtle)', border: '1px solid transparent', boxShadow: 'none' },
    brand: { background: 'var(--gradient-brand)', border: '1px solid var(--border-on-brand)', boxShadow: 'var(--shadow-lg)' },
  };
  const base = {
    position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
    padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
    color: brand ? 'var(--text-inverse)' : 'var(--text-body)',
    transition: 'transform var(--duration-base) var(--ease-emphasized), box-shadow var(--duration-base) var(--ease-standard)',
    ...surfaces[variant],
    ...(interactive && hover ? { transform: 'translateY(-3px)', boxShadow: 'var(--shadow-lg)' } : null),
    ...style,
  };
  const titleColor = brand ? 'var(--text-inverse)' : 'var(--text-strong)';
  const bodyColor = brand ? 'var(--text-inverse-muted)' : 'var(--text-muted)';

  return (
    <div
      className={className} style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
    >
      {accent && <span style={{ position: 'absolute', insetInlineStart: 0, top: 0, bottom: 0, width: 4, background: accent }} />}
      {icon && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 48, height: 48, borderRadius: 'var(--radius-md)',
          background: brand ? 'rgba(254,255,254,0.10)' : 'var(--blue-050)',
          color: iconColor || (brand ? 'var(--tasama-sky)' : 'var(--tasama-blue)'),
        }}>
          <Icon name={icon} size={26} />
        </span>
      )}
      {eyebrow && (
        <span style={{
          fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)',
          textTransform: 'uppercase', fontWeight: 'var(--weight-semibold)',
          color: brand ? 'var(--tasama-gold)' : 'var(--tasama-gold)',
        }}>{eyebrow}</span>
      )}
      {title && (
        <h3 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
          fontSize: 'var(--text-h4)', lineHeight: 'var(--leading-snug)', color: titleColor,
        }}>{title}</h3>
      )}
      {children && (
        <div style={{ fontSize: 'var(--text-body-md)', lineHeight: 'var(--leading-relaxed)', color: bodyColor }}>
          {children}
        </div>
      )}
      {footer && <div style={{ marginTop: 'var(--space-2)' }}>{footer}</div>}
    </div>
  );
}
