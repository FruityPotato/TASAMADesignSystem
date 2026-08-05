import React from 'react';
import { LOGO_FULL, LOGO_PIF } from './logoData.js';

const WORDMARK = '#10069F';
const TAGLINE = '#B59E5F';
const WHITE = '#FEFFFE';

/** Recolor the artwork per tone. */
function paint(body, tone, isPif) {
  let out = body.replace(/<style>[\s\S]*?<\/style>/g, '');
  const rep = (from, to) => { out = out.split(`fill="${from}"`).join(`fill="${to}"`); };
  if (isPif) {
    if (tone === 'mono') rep(WHITE, 'currentColor');
    else if (tone === 'blue') rep(WHITE, '#10069E');
    // color/white keep white
  } else {
    if (tone === 'white') { rep(WORDMARK, WHITE); rep(TAGLINE, WHITE); }
    else if (tone === 'mono') { rep(WORDMARK, 'currentColor'); rep(TAGLINE, 'currentColor'); }
    else if (tone === 'blue') { rep(WORDMARK, '#10069E'); rep(TAGLINE, '#10069E'); }
    // 'color' keeps brand blue + gold
  }
  return out;
}

/**
 * TASAMA logo. `variant` picks the lockup, `tone` recolors it for the surface.
 */
export function Logo({ variant = 'full', tone, height = 34, title = 'TASAMA', className = '', style = {}, ...rest }) {
  const isPif = variant === 'pif';
  const art = isPif ? LOGO_PIF : LOGO_FULL;
  const resolvedTone = tone || (isPif ? 'white' : 'color');
  const [vbW, , , vbH] = art.viewBox.split(/\s+/).map(Number);
  const width = (vbW / vbH) * (typeof height === 'number' ? height : parseFloat(height));
  return (
    <svg
      role="img" aria-label={title} viewBox={art.viewBox}
      height={height} width={width} className={className}
      style={{ display: 'block', ...style }}
      dangerouslySetInnerHTML={{ __html: `<title>${title}</title>` + paint(art.body, resolvedTone, isPif) }}
      {...rest}
    />
  );
}
