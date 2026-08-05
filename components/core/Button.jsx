import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 'var(--control-sm)', padding: '0 14px', font: 'var(--text-body-sm)', gap: 7, icon: 16 },
  md: { height: 'var(--control-md)', padding: '0 20px', font: 'var(--text-body-md)', gap: 8, icon: 18 },
  lg: { height: 'var(--control-lg)', padding: '0 28px', font: 'var(--text-body-lg)', gap: 10, icon: 20 },
};

const VARIANTS = {
  primary: {
    background: 'var(--tasama-blue)', color: 'var(--tasama-white)', border: '1px solid var(--tasama-blue)',
    hover: { background: 'var(--blue-800)', borderColor: 'var(--blue-800)' },
    active: { background: 'var(--blue-900)' },
  },
  secondary: {
    background: 'transparent', color: 'var(--tasama-blue)', border: '1px solid var(--tasama-blue)',
    hover: { background: 'var(--blue-050)' },
    active: { background: 'var(--blue-100)' },
  },
  ghost: {
    background: 'transparent', color: 'var(--tasama-blue)', border: '1px solid transparent',
    hover: { background: 'var(--blue-050)' },
    active: { background: 'var(--blue-100)' },
  },
  inverse: {
    background: 'var(--tasama-white)', color: 'var(--tasama-blue)', border: '1px solid var(--tasama-white)',
    hover: { background: 'rgba(254,255,254,0.86)' },
    active: { background: 'rgba(254,255,254,0.72)' },
  },
  link: {
    background: 'transparent', color: 'var(--tasama-blue)', border: '1px solid transparent',
    hover: { color: 'var(--blue-500)' },
    active: { color: 'var(--blue-900)' },
  },
};

export function Button({
  children, variant = 'primary', size = 'md', iconLeft, iconRight,
  pill = false, disabled = false, fullWidth = false, className = '', style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const isLink = variant === 'link';

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
    alignItems: 'center', justifyContent: 'center', gap: s.gap,
    height: isLink ? 'auto' : s.height, padding: isLink ? '2px 0' : s.padding,
    fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)', fontSize: s.font,
    lineHeight: 1, letterSpacing: '0.01em', whiteSpace: 'nowrap', textDecoration: 'none',
    borderRadius: isLink ? 0 : (pill ? 'var(--radius-pill)' : 'var(--radius-sm)'),
    background: v.background, color: v.color, border: v.border,
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
    transform: !disabled && active && !isLink ? 'translateY(1px)' : 'none',
    boxShadow: !disabled && hover && variant === 'primary' ? 'var(--shadow-md)' : 'none',
    ...(!disabled && hover ? v.hover : null),
    ...(!disabled && active ? v.active : null),
    ...style,
  };
  if (isLink && !disabled && hover) base.textDecoration = 'underline', base.textUnderlineOffset = '3px';

  return (
    <button
      type="button" disabled={disabled} className={className} style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
