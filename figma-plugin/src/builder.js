/* TASAMA Design System — Figma builder
 * Generated target: figma-plugin/code.js (run `node build.js` to bundle icons in).
 * ICON_SVG is prepended by the build step.
 */
/* global ICON_SVG */

// ---------------------------------------------------------------------------
// Token data — mirrors tokens/*.css from the TASAMA design-system project.
// ---------------------------------------------------------------------------

var PRIMITIVES = {
  'Brand/Blue':    '#10069E',
  'Brand/Gold':    '#B59D5E',
  'Brand/Sky':     '#8DC7E8',
  'Brand/Orange':  '#E77622',
  'Brand/Green':   '#ADDC91',
  'Brand/Ink':     '#000000',
  'Brand/White':   '#FEFFFE',

  'Blue/900': '#0A0468', 'Blue/800': '#0D0582', 'Blue/700': '#10069E',
  'Blue/600': '#2A21B4', 'Blue/500': '#4A42C6', 'Blue/400': '#7A74D6',
  'Blue/300': '#ADA9E6', 'Blue/200': '#D5D3F2', 'Blue/100': '#EBEAF9',
  'Blue/050': '#F5F5FC',

  'Gold/700': '#8C7742', 'Gold/500': '#B59D5E', 'Gold/300': '#D3C296',
  'Gold/100': '#EFE9D8',

  'Sky/600': '#4E9BC9', 'Sky/400': '#8DC7E8', 'Sky/200': '#C4E3F4',
  'Sky/100': '#E5F2FA',

  'Orange/600': '#C25A11', 'Orange/500': '#E77622', 'Orange/300': '#F2A968',
  'Orange/100': '#FBE6D3',

  'Green/600': '#6FAE4E', 'Green/400': '#ADDC91', 'Green/200': '#D3EDC4',
  'Green/100': '#ECF7E4',

  'Neutral/950': '#0B0B14', 'Neutral/900': '#16161F', 'Neutral/800': '#2A2A36',
  'Neutral/700': '#43434F', 'Neutral/600': '#5E5E6B', 'Neutral/500': '#7C7C88',
  'Neutral/400': '#9C9CA7', 'Neutral/300': '#C2C2CB', 'Neutral/200': '#DEDEE4',
  'Neutral/150': '#E9E9EE', 'Neutral/100': '#F2F2F5', 'Neutral/050': '#F8F8FA'
};

// Semantic layer. `alias` points at a primitive; `hex` (+ optional `alpha`) is a
// literal value where the CSS has no indirection.
var SEMANTIC = [
  { name: 'Text/Strong',        alias: 'Brand/Blue' },
  { name: 'Text/Body',          alias: 'Neutral/800' },
  { name: 'Text/Muted',         alias: 'Neutral/500' },
  { name: 'Text/Inverse',       alias: 'Brand/White' },
  { name: 'Text/Inverse Muted', hex: '#B9B6E8' },
  { name: 'Text/Link',          alias: 'Brand/Blue' },
  { name: 'Text/On Accent',     alias: 'Brand/White' },

  { name: 'Surface/Page',       alias: 'Brand/White' },
  { name: 'Surface/Card',       hex: '#FFFFFF' },
  { name: 'Surface/Subtle',     alias: 'Neutral/050' },
  { name: 'Surface/Sunken',     alias: 'Neutral/100' },
  { name: 'Surface/Brand',      alias: 'Brand/Blue' },
  { name: 'Surface/Brand Deep', alias: 'Blue/900' },
  { name: 'Surface/Tint',       alias: 'Blue/050' },

  { name: 'Border/Subtle',      alias: 'Neutral/200' },
  { name: 'Border/Default',     alias: 'Neutral/300' },
  { name: 'Border/Strong',      alias: 'Neutral/400' },
  { name: 'Border/Brand',       alias: 'Brand/Blue' },
  { name: 'Border/On Brand',    hex: '#FEFFFE', alpha: 0.22 },

  { name: 'Status/Success',          alias: 'Green/600' },
  { name: 'Status/Success Surface',  alias: 'Green/100' },
  { name: 'Status/Warning',          alias: 'Orange/500' },
  { name: 'Status/Warning Surface',  alias: 'Orange/100' },
  { name: 'Status/Info',             alias: 'Sky/600' },
  { name: 'Status/Info Surface',     alias: 'Sky/100' },

  { name: 'Interaction/Focus Ring',    hex: '#10069E', alpha: 0.35 },
  { name: 'Interaction/Overlay Scrim', hex: '#0A0468', alpha: 0.55 }
];

var SCALE = {
  'Space/0': 0, 'Space/1': 4, 'Space/2': 8, 'Space/3': 12, 'Space/4': 16,
  'Space/5': 20, 'Space/6': 24, 'Space/8': 32, 'Space/10': 40, 'Space/12': 48,
  'Space/16': 64, 'Space/20': 80, 'Space/24': 96,

  'Radius/xs': 3, 'Radius/sm': 6, 'Radius/md': 10, 'Radius/lg': 16,
  'Radius/xl': 24, 'Radius/pill': 999,

  'Control/sm': 32, 'Control/md': 40, 'Control/lg': 48,

  'Container/sm': 640, 'Container/md': 960, 'Container/lg': 1200,
  'Container/xl': 1440
};

// name, size, weight, lineHeight %, letterSpacing %, textCase
var TEXT_STYLES = [
  { name: 'Display',        size: 60, weight: 'Bold',     lh: 100, ls: -2 },
  { name: 'Heading/H1',     size: 44, weight: 'SemiBold', lh: 110, ls: -2 },
  { name: 'Heading/H2',     size: 34, weight: 'SemiBold', lh: 125, ls: -2 },
  { name: 'Heading/H3',     size: 24, weight: 'SemiBold', lh: 125, ls: 0 },
  { name: 'Heading/H4',     size: 20, weight: 'SemiBold', lh: 125, ls: 0 },
  { name: 'Title',          size: 17, weight: 'SemiBold', lh: 125, ls: -2 },
  { name: 'Body/Large',     size: 18, weight: 'Regular',  lh: 165, ls: 0 },
  { name: 'Body/Medium',    size: 16, weight: 'Regular',  lh: 150, ls: 0 },
  { name: 'Body/Small',     size: 14, weight: 'Regular',  lh: 150, ls: 0 },
  { name: 'Body/Small Semi',size: 14, weight: 'SemiBold', lh: 150, ls: 0 },
  { name: 'Caption',        size: 12, weight: 'Regular',  lh: 150, ls: 0 },
  { name: 'Label/Uppercase',size: 14, weight: 'SemiBold', lh: 150, ls: 4,  upper: true },
  { name: 'Label/Overline', size: 11, weight: 'SemiBold', lh: 150, ls: 16, upper: true }
];

// Blue-tinted elevation. rgba(16,6,158,a)
var SHADOW_RGB = { r: 16 / 255, g: 6 / 255, b: 158 / 255 };
var EFFECT_STYLES = [
  { name: 'Elevation/xs',    layers: [{ y: 1,  blur: 2,  a: 0.06 }] },
  { name: 'Elevation/sm',    layers: [{ y: 1,  blur: 3,  a: 0.08 }, { y: 1, blur: 2, a: 0.05 }] },
  { name: 'Elevation/md',    layers: [{ y: 4,  blur: 14, a: 0.10 }, { y: 2, blur: 4, a: 0.06 }] },
  { name: 'Elevation/lg',    layers: [{ y: 12, blur: 32, a: 0.14 }, { y: 4, blur: 10, a: 0.08 }] },
  { name: 'Elevation/xl',    layers: [{ y: 24, blur: 60, a: 0.18 }] },
  { name: 'Elevation/inner', layers: [{ y: 1,  blur: 2,  a: 0.08 }], inner: true }
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function hexToRgb(hex) {
  var h = hex.replace('#', '');
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255
  };
}

function solid(hex, opacity) {
  return { type: 'SOLID', color: hexToRgb(hex), opacity: opacity === undefined ? 1 : opacity };
}

// Registry filled during the variables pass so components can bind to tokens.
var VARS = {};

/** A solid paint bound to a variable when we have one, else a literal hex. */
function tokenPaint(varName, fallbackHex, opacity) {
  var paint = solid(fallbackHex, opacity);
  var v = VARS[varName];
  if (v && (opacity === undefined || opacity === 1)) {
    try { return figma.variables.setBoundVariableForPaint(paint, 'color', v); } catch (e) { /* fall through */ }
  }
  return paint;
}

/** Linear gradient transform for `angleDeg` measured clockwise from +x. */
function linearTransform(angleDeg) {
  var a = angleDeg * Math.PI / 180;
  var c = Math.cos(a), s = Math.sin(a);
  return [
    [c, s, 0.5 - 0.5 * c - 0.5 * s],
    [-s, c, 0.5 + 0.5 * s - 0.5 * c]
  ];
}

function gradient(stops, angleDeg) {
  return {
    type: 'GRADIENT_LINEAR',
    gradientTransform: linearTransform(angleDeg === undefined ? 45 : angleDeg),
    gradientStops: stops.map(function (s) {
      var rgb = hexToRgb(s[0]);
      return { position: s[1], color: { r: rgb.r, g: rgb.g, b: rgb.b, a: s.length > 2 ? s[2] : 1 } };
    })
  };
}

var GRADIENT_BRAND = function () { return gradient([['#10069E', 0], ['#0A0468', 1]], 45); };
var GRADIENT_SKY = function () { return gradient([['#8DC7E8', 0], ['#4A42C6', 1]], 45); };

// --- fonts ---------------------------------------------------------------

var FONT_FAMILY = 'Montserrat';
var WANTED_WEIGHTS = ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold', 'ExtraBold'];
var LOADED = {};

async function loadFonts() {
  for (var i = 0; i < WANTED_WEIGHTS.length; i++) {
    var style = WANTED_WEIGHTS[i];
    try {
      await figma.loadFontAsync({ family: FONT_FAMILY, style: style });
      LOADED[style] = true;
    } catch (e) { /* weight unavailable in this file */ }
  }
  if (!LOADED.Regular) {
    throw new Error(
      'Montserrat is not available in this Figma file. Add it from the font picker ' +
      '(it ships with Figma as a Google font) or install it locally, then re-run.'
    );
  }
}

/** Nearest available Montserrat weight. */
function fontFor(style) {
  if (LOADED[style]) return { family: FONT_FAMILY, style: style };
  var order = ['SemiBold', 'Bold', 'Medium', 'Regular'];
  for (var i = 0; i < order.length; i++) if (LOADED[order[i]]) return { family: FONT_FAMILY, style: order[i] };
  return { family: FONT_FAMILY, style: 'Regular' };
}

// --- node construction ---------------------------------------------------

function stack(name, direction, gap, pad) {
  var f = figma.createFrame();
  f.name = name;
  f.layoutMode = direction;
  f.itemSpacing = gap || 0;
  f.primaryAxisSizingMode = 'AUTO';
  f.counterAxisSizingMode = 'AUTO';
  f.fills = [];
  f.clipsContent = false;
  if (pad !== undefined) {
    var p = typeof pad === 'number' ? [pad, pad, pad, pad] : pad; // [t,r,b,l]
    f.paddingTop = p[0]; f.paddingRight = p[1]; f.paddingBottom = p[2]; f.paddingLeft = p[3];
  }
  return f;
}

function label(chars, weight, size, hex, opts) {
  opts = opts || {};
  var t = figma.createText();
  t.fontName = fontFor(weight);
  t.characters = chars;
  t.fontSize = size;
  t.fills = [solid(hex)];
  t.lineHeight = { unit: 'PERCENT', value: opts.lh || 150 };
  if (opts.ls !== undefined) t.letterSpacing = { unit: 'PERCENT', value: opts.ls };
  if (opts.upper) t.textCase = 'UPPER';
  t.textAutoResize = 'WIDTH_AND_HEIGHT';
  return t;
}

function rect(w, h, paint, radius) {
  var r = figma.createRectangle();
  r.resize(w, h);
  r.fills = paint ? [paint] : [];
  if (radius) r.cornerRadius = radius;
  return r;
}

// ---------------------------------------------------------------------------
// Foundations
// ---------------------------------------------------------------------------

/** createVariable took a collectionId in older API builds and the collection
 *  object in newer ones. Try the current signature, fall back to the legacy. */
function createVar(name, collection, type) {
  try {
    return figma.variables.createVariable(name, collection, type);
  } catch (e) {
    return figma.variables.createVariable(name, collection.id, type);
  }
}

async function getCollection(name) {
  var all = await figma.variables.getLocalVariableCollectionsAsync();
  for (var i = 0; i < all.length; i++) if (all[i].name === name) return all[i];
  return figma.variables.createVariableCollection(name);
}

async function buildVariables(report) {
  var existingColor = await figma.variables.getLocalVariablesAsync('COLOR');
  var existingFloat = await figma.variables.getLocalVariablesAsync('FLOAT');

  function find(pool, collectionId, name) {
    for (var i = 0; i < pool.length; i++) {
      if (pool[i].variableCollectionId === collectionId && pool[i].name === name) return pool[i];
    }
    return null;
  }

  // -- primitives --
  var prim = await getCollection('TASAMA · Primitives');
  var primMode = prim.modes[0].modeId;
  var primNames = Object.keys(PRIMITIVES);
  for (var i = 0; i < primNames.length; i++) {
    var n = primNames[i];
    var v = find(existingColor, prim.id, n) || createVar(n, prim, 'COLOR');
    var rgb = hexToRgb(PRIMITIVES[n]);
    v.setValueForMode(primMode, { r: rgb.r, g: rgb.g, b: rgb.b, a: 1 });
    VARS[n] = v;
  }
  report('Primitives: ' + primNames.length + ' color variables');

  // -- semantic (aliases where the CSS has indirection) --
  var sem = await getCollection('TASAMA · Semantic');
  var semMode = sem.modes[0].modeId;
  existingColor = await figma.variables.getLocalVariablesAsync('COLOR');
  for (var j = 0; j < SEMANTIC.length; j++) {
    var spec = SEMANTIC[j];
    var sv = find(existingColor, sem.id, spec.name) || createVar(spec.name, sem, 'COLOR');
    if (spec.alias && VARS[spec.alias]) {
      sv.setValueForMode(semMode, figma.variables.createVariableAlias(VARS[spec.alias]));
    } else {
      var c = hexToRgb(spec.hex);
      sv.setValueForMode(semMode, { r: c.r, g: c.g, b: c.b, a: spec.alpha === undefined ? 1 : spec.alpha });
    }
    VARS[spec.name] = sv;
  }
  report('Semantic: ' + SEMANTIC.length + ' tokens (aliased to primitives)');

  // -- numeric scale --
  var scale = await getCollection('TASAMA · Scale');
  var scaleMode = scale.modes[0].modeId;
  var scaleNames = Object.keys(SCALE);
  for (var k = 0; k < scaleNames.length; k++) {
    var sn = scaleNames[k];
    var nv = find(existingFloat, scale.id, sn) || createVar(sn, scale, 'FLOAT');
    nv.setValueForMode(scaleMode, SCALE[sn]);
    VARS[sn] = nv;
  }
  report('Scale: ' + scaleNames.length + ' number variables');
}

async function buildTextStyles(report) {
  var existing = await figma.getLocalTextStylesAsync();
  function byName(n) {
    for (var i = 0; i < existing.length; i++) if (existing[i].name === n) return existing[i];
    return null;
  }
  for (var i = 0; i < TEXT_STYLES.length; i++) {
    var s = TEXT_STYLES[i];
    var st = byName(s.name) || figma.createTextStyle();
    st.name = s.name;
    st.fontName = fontFor(s.weight);
    st.fontSize = s.size;
    st.lineHeight = { unit: 'PERCENT', value: s.lh };
    st.letterSpacing = { unit: 'PERCENT', value: s.ls };
    st.textCase = s.upper ? 'UPPER' : 'ORIGINAL';
  }
  report('Text styles: ' + TEXT_STYLES.length + ' (Montserrat)');
}

async function buildEffectAndPaintStyles(report) {
  var existingEffects = await figma.getLocalEffectStylesAsync();
  function effByName(n) {
    for (var i = 0; i < existingEffects.length; i++) if (existingEffects[i].name === n) return existingEffects[i];
    return null;
  }
  for (var i = 0; i < EFFECT_STYLES.length; i++) {
    var e = EFFECT_STYLES[i];
    var st = effByName(e.name) || figma.createEffectStyle();
    st.name = e.name;
    st.effects = e.layers.map(function (l) {
      return {
        type: e.inner ? 'INNER_SHADOW' : 'DROP_SHADOW',
        color: { r: SHADOW_RGB.r, g: SHADOW_RGB.g, b: SHADOW_RGB.b, a: l.a },
        offset: { x: 0, y: l.y },
        radius: l.blur,
        spread: 0,
        visible: true,
        blendMode: 'NORMAL'
      };
    });
  }

  var existingPaints = await figma.getLocalPaintStylesAsync();
  function paintByName(n) {
    for (var i = 0; i < existingPaints.length; i++) if (existingPaints[i].name === n) return existingPaints[i];
    return null;
  }
  var gradients = [
    { name: 'Gradient/Brand', paints: [GRADIENT_BRAND()] },
    { name: 'Gradient/Sky', paints: [GRADIENT_SKY()] },
    {
      name: 'Gradient/Brand Glow',
      paints: [{
        type: 'GRADIENT_RADIAL',
        gradientTransform: [[1.2, 0, -0.35], [0, 1.2, -0.6]],
        gradientStops: [
          { position: 0, color: Object.assign({}, hexToRgb('#2A21B4'), { a: 1 }) },
          { position: 0.45, color: Object.assign({}, hexToRgb('#10069E'), { a: 1 }) },
          { position: 1, color: Object.assign({}, hexToRgb('#0A0468'), { a: 1 }) }
        ]
      }]
    },
    {
      name: 'Gradient/Gold Hairline',
      paints: [gradient([['#B59D5E', 0, 0], ['#B59D5E', 0.5, 0.6], ['#B59D5E', 1, 0]], 0)]
    }
  ];
  for (var g = 0; g < gradients.length; g++) {
    var ps = paintByName(gradients[g].name) || figma.createPaintStyle();
    ps.name = gradients[g].name;
    ps.paints = gradients[g].paints;
  }

  report('Elevation: ' + EFFECT_STYLES.length + ' effect styles, ' + gradients.length + ' gradients');
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function buildIcons(page, report) {
  var names = Object.keys(ICON_SVG).sort();
  var wrap = stack('Icons / 24', 'HORIZONTAL', 24, 40);
  wrap.layoutWrap = 'WRAP';
  // Wrapping only takes effect when the primary (horizontal) axis is fixed.
  wrap.primaryAxisSizingMode = 'FIXED';
  wrap.counterAxisSizingMode = 'AUTO';
  wrap.counterAxisSpacing = 24;
  wrap.counterAxisAlignItems = 'CENTER';
  wrap.resize(720, wrap.height);
  page.appendChild(wrap);
  wrap.x = 0; wrap.y = 0;

  var made = 0;
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var data = ICON_SVG[name];
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + data.viewBox +
      '" fill="#10069E">' + data.path + '</svg>';
    var node;
    try {
      node = figma.createNodeFromSvg(svg);
    } catch (e) {
      continue;
    }
    if (node.width > 0) node.rescale(24 / node.width);

    var comp = figma.createComponent();
    comp.name = 'Icon / ' + name;
    comp.resize(24, 24);
    comp.fills = [];
    comp.appendChild(node);
    node.x = 0;
    node.y = (24 - node.height) / 2;
    wrap.appendChild(comp);
    made++;
  }
  report('Icons: ' + made + ' components');
  return wrap;
}

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

var BTN_SIZES = {
  sm: { h: 32, padX: 14, font: 14, gap: 7 },
  md: { h: 40, padX: 20, font: 16, gap: 8 },
  lg: { h: 48, padX: 28, font: 18, gap: 10 }
};

var BTN_VARIANTS = {
  primary:   { bg: 'Brand/Blue',  bgHex: '#10069E', fg: '#FEFFFE', border: '#10069E' },
  secondary: { bg: null,          bgHex: null,      fg: '#10069E', border: '#10069E' },
  ghost:     { bg: null,          bgHex: null,      fg: '#10069E', border: null },
  inverse:   { bg: 'Brand/White', bgHex: '#FEFFFE', fg: '#10069E', border: '#FEFFFE' },
  link:      { bg: null,          bgHex: null,      fg: '#10069E', border: null, link: true }
};

function makeButton(variant, size) {
  var s = BTN_SIZES[size];
  var v = BTN_VARIANTS[variant];
  var c = figma.createComponent();
  c.name = 'Variant=' + variant + ', Size=' + size;
  c.layoutMode = 'HORIZONTAL';
  c.itemSpacing = s.gap;
  c.primaryAxisAlignItems = 'CENTER';
  c.counterAxisAlignItems = 'CENTER';
  c.primaryAxisSizingMode = 'AUTO';

  if (v.link) {
    c.counterAxisSizingMode = 'AUTO';
    c.paddingLeft = 0; c.paddingRight = 0; c.paddingTop = 2; c.paddingBottom = 2;
    c.fills = [];
    c.cornerRadius = 0;
  } else {
    c.counterAxisSizingMode = 'FIXED';
    c.paddingLeft = s.padX; c.paddingRight = s.padX; c.paddingTop = 0; c.paddingBottom = 0;
    c.cornerRadius = 6;
    c.fills = v.bg ? [tokenPaint(v.bg, v.bgHex)] : [];
    if (v.border) {
      c.strokes = [solid(v.border)];
      c.strokeWeight = 1;
      c.strokeAlign = 'INSIDE';
    } else {
      c.strokes = [];
    }
  }

  var t = label('Button', 'SemiBold', s.font, v.fg, { lh: 100, ls: 1 });
  c.appendChild(t);
  if (!v.link) c.resize(Math.max(c.width, s.padX * 2 + t.width), s.h);
  return c;
}

var BADGE_TONES = {
  blue:    { solid: '#10069E', soft: '#EBEAF9', softText: '#10069E' },
  gold:    { solid: '#B59D5E', soft: '#EFE9D8', softText: '#8C7742' },
  sky:     { solid: '#4E9BC9', soft: '#E5F2FA', softText: '#4E9BC9' },
  orange:  { solid: '#E77622', soft: '#FBE6D3', softText: '#C25A11' },
  green:   { solid: '#6FAE4E', soft: '#ECF7E4', softText: '#6FAE4E' },
  neutral: { solid: '#43434F', soft: '#F2F2F5', softText: '#43434F' }
};

var BADGE_DIMS = {
  sm: { padX: 8,  padY: 2, font: 12, d: 26 },
  md: { padX: 12, padY: 4, font: 14, d: 34 },
  lg: { padX: 16, padY: 6, font: 16, d: 44 }
};

function makeBadge(tone, variant, size) {
  var p = BADGE_TONES[tone];
  var d = BADGE_DIMS[size];
  var c = figma.createComponent();
  c.name = 'Tone=' + tone + ', Variant=' + variant + ', Size=' + size;
  c.layoutMode = 'HORIZONTAL';
  c.primaryAxisAlignItems = 'CENTER';
  c.counterAxisAlignItems = 'CENTER';

  if (variant === 'number') {
    c.primaryAxisSizingMode = 'FIXED';
    c.counterAxisSizingMode = 'FIXED';
    c.cornerRadius = d.d / 2;
    c.fills = [];
    c.strokes = [solid(p.solid)];
    c.strokeWeight = 2;
    c.strokeAlign = 'INSIDE';
    c.appendChild(label('01', 'SemiBold', d.font, p.solid, { lh: 100 }));
    c.resize(d.d, d.d);
    return c;
  }

  c.primaryAxisSizingMode = 'AUTO';
  c.counterAxisSizingMode = 'AUTO';
  c.itemSpacing = 6;
  c.paddingLeft = d.padX; c.paddingRight = d.padX;
  c.paddingTop = d.padY; c.paddingBottom = d.padY;
  c.cornerRadius = 999;

  if (variant === 'solid') {
    c.fills = [solid(p.solid)];
    c.strokes = [];
    c.appendChild(label('Label', 'SemiBold', d.font, '#FEFFFE', { lh: 140 }));
  } else if (variant === 'soft') {
    c.fills = [solid(p.soft)];
    c.strokes = [];
    c.appendChild(label('Label', 'SemiBold', d.font, p.softText, { lh: 140 }));
  } else { // outline
    c.fills = [];
    c.strokes = [solid(p.solid)];
    c.strokeWeight = 1;
    c.strokeAlign = 'INSIDE';
    c.appendChild(label('Label', 'SemiBold', d.font, p.softText, { lh: 140 }));
  }
  return c;
}

var STAT_TONES = {
  brand:  { light: '#10069E', onBrand: '#FEFFFE' },
  gold:   { light: '#B59D5E', onBrand: '#B59D5E' },
  orange: { light: '#E77622', onBrand: '#E77622' },
  green:  { light: '#6FAE4E', onBrand: '#6FAE4E' },
  sky:    { light: '#4E9BC9', onBrand: '#8DC7E8' }
};

function makeStat(variant, tone) {
  var brand = variant === 'brand';
  var c = figma.createComponent();
  c.name = 'Variant=' + variant + ', Tone=' + tone;
  c.layoutMode = 'VERTICAL';
  c.itemSpacing = 4;
  c.primaryAxisSizingMode = 'AUTO';
  c.counterAxisSizingMode = 'AUTO';
  c.counterAxisAlignItems = 'MIN';
  c.cornerRadius = 16;

  if (brand) {
    c.fills = [GRADIENT_BRAND()];
    c.strokes = [solid('#FEFFFE', 0.22)];
    c.strokeWeight = 1;
    c.paddingTop = 20; c.paddingBottom = 20; c.paddingLeft = 20; c.paddingRight = 20;
  } else if (variant === 'card') {
    c.fills = [tokenPaint('Surface/Card', '#FFFFFF')];
    c.strokes = [tokenPaint('Border/Subtle', '#DEDEE4')];
    c.strokeWeight = 1;
    c.paddingTop = 20; c.paddingBottom = 20; c.paddingLeft = 20; c.paddingRight = 20;
  } else {
    c.fills = [];
    c.strokes = [];
  }

  var valueColor = brand ? STAT_TONES[tone].onBrand : STAT_TONES[tone].light;
  c.appendChild(label('27M', 'Bold', 60, valueColor, { lh: 100, ls: -2 }));
  c.appendChild(label('Population', 'SemiBold', 14, brand ? '#FEFFFE' : '#10069E', { lh: 150, ls: 4, upper: true }));
  c.appendChild(label('Saudi Arabia, 2024', 'Regular', 14, brand ? '#B9B6E8' : '#7C7C88', { lh: 150 }));
  return c;
}

function makeCard(variant) {
  var brand = variant === 'brand';
  var c = figma.createComponent();
  c.name = 'Variant=' + variant;
  c.layoutMode = 'VERTICAL';
  c.itemSpacing = 12;
  c.primaryAxisSizingMode = 'AUTO';
  c.counterAxisSizingMode = 'FIXED';
  c.paddingTop = 24; c.paddingBottom = 24; c.paddingLeft = 24; c.paddingRight = 24;
  c.cornerRadius = 16;
  c.clipsContent = true;

  if (brand) {
    c.fills = [GRADIENT_BRAND()];
    c.strokes = [solid('#FEFFFE', 0.22)];
  } else if (variant === 'subtle') {
    c.fills = [tokenPaint('Surface/Subtle', '#F8F8FA')];
    c.strokes = [];
  } else {
    c.fills = [tokenPaint('Surface/Card', '#FFFFFF')];
    c.strokes = [tokenPaint(variant === 'outline' ? 'Border/Default' : 'Border/Subtle',
      variant === 'outline' ? '#C2C2CB' : '#DEDEE4')];
  }
  if (c.strokes.length) { c.strokeWeight = 1; c.strokeAlign = 'INSIDE'; }

  // icon tile
  var tile = figma.createFrame();
  tile.name = 'Icon tile';
  tile.resize(48, 48);
  tile.cornerRadius = 10;
  tile.fills = [brand ? solid('#FEFFFE', 0.10) : tokenPaint('Blue/050', '#F5F5FC')];
  tile.layoutMode = 'HORIZONTAL';
  tile.primaryAxisAlignItems = 'CENTER';
  tile.counterAxisAlignItems = 'CENTER';
  tile.primaryAxisSizingMode = 'FIXED';
  tile.counterAxisSizingMode = 'FIXED';
  var glyph = rect(26, 26, solid(brand ? '#8DC7E8' : '#10069E'), 4);
  glyph.name = 'Icon slot';
  tile.appendChild(glyph);
  c.appendChild(tile);

  c.appendChild(label('EYEBROW', 'SemiBold', 11, '#B59D5E', { lh: 150, ls: 16, upper: true }));
  c.appendChild(label('Card title', 'SemiBold', 20, brand ? '#FEFFFE' : '#10069E', { lh: 125 }));
  var body = label(
    'Supporting copy that explains the service in a sentence or two.',
    'Regular', 16, brand ? '#B9B6E8' : '#7C7C88', { lh: 165 }
  );
  c.appendChild(body);

  c.resize(320, c.height);
  body.layoutSizingHorizontal = 'FILL';
  return c;
}

function makeProgressBar(tone, size) {
  var TONE_HEX = { brand: '#10069E', gold: '#B59D5E', orange: '#E77622', green: '#6FAE4E', sky: '#4E9BC9' };
  var H = { sm: 6, md: 10, lg: 14 };
  var c = figma.createComponent();
  c.name = 'Tone=' + tone + ', Size=' + size;
  c.layoutMode = 'VERTICAL';
  c.itemSpacing = 6;
  c.primaryAxisSizingMode = 'AUTO';
  c.counterAxisSizingMode = 'FIXED';
  c.fills = [];

  var row = stack('Row', 'HORIZONTAL', 8);
  row.primaryAxisAlignItems = 'SPACE_BETWEEN';
  row.counterAxisAlignItems = 'CENTER';
  var lbl = label('Digital adoption', 'Medium', 14, '#2A2A36', { lh: 150 });
  var val = label('70%', 'SemiBold', 14, '#10069E', { lh: 150 });
  row.appendChild(lbl);
  row.appendChild(val);
  c.appendChild(row);

  var track = figma.createFrame();
  track.name = 'Track';
  track.resize(280, H[size]);
  track.cornerRadius = 999;
  track.fills = [tokenPaint('Neutral/150', '#E9E9EE')];
  track.clipsContent = true;
  track.layoutMode = 'HORIZONTAL';
  track.primaryAxisSizingMode = 'FIXED';
  track.counterAxisSizingMode = 'FIXED';
  var fill = rect(196, H[size], solid(TONE_HEX[tone]), 999);
  fill.name = 'Fill';
  track.appendChild(fill);
  c.appendChild(track);

  c.resize(280, c.height);
  row.layoutSizingHorizontal = 'FILL';
  track.layoutSizingHorizontal = 'FILL';
  return c;
}

function makeEyebrow() {
  var c = figma.createComponent();
  c.name = 'Eyebrow';
  c.layoutMode = 'HORIZONTAL';
  c.itemSpacing = 8;
  c.counterAxisAlignItems = 'CENTER';
  c.primaryAxisSizingMode = 'AUTO';
  c.counterAxisSizingMode = 'AUTO';
  c.fills = [];
  var tick = rect(20, 2, tokenPaint('Brand/Gold', '#B59D5E'));
  tick.name = 'Tick';
  c.appendChild(tick);
  c.appendChild(label('SECTION KICKER', 'SemiBold', 11, '#B59D5E', { lh: 150, ls: 16, upper: true }));
  return c;
}

function makeDivider(tone) {
  var c = figma.createComponent();
  c.name = 'Tone=' + tone;
  c.layoutMode = 'HORIZONTAL';
  c.primaryAxisSizingMode = 'FIXED';
  c.counterAxisSizingMode = 'FIXED';
  c.fills = [];
  var h = tone === 'gold' ? 2 : 1;
  var line = rect(320, h, tone === 'gold'
    ? gradient([['#B59D5E', 0, 0], ['#B59D5E', 0.5, 0.6], ['#B59D5E', 1, 0]], 0)
    : tone === 'on-brand' ? solid('#FEFFFE', 0.22) : tokenPaint('Border/Subtle', '#DEDEE4'));
  line.name = 'Line';
  c.appendChild(line);
  c.resize(320, h);
  line.layoutSizingHorizontal = 'FILL';
  return c;
}

function makeTeamCard(variant) {
  var brand = variant === 'brand';
  var c = figma.createComponent();
  c.name = 'Variant=' + variant;
  c.layoutMode = 'VERTICAL';
  c.itemSpacing = 12;
  c.primaryAxisSizingMode = 'AUTO';
  c.counterAxisSizingMode = 'AUTO';
  c.counterAxisAlignItems = 'CENTER';
  c.cornerRadius = 16;

  if (brand) {
    c.fills = [GRADIENT_BRAND()];
    c.strokes = [solid('#FEFFFE', 0.22)];
    c.strokeWeight = 1;
  } else if (variant === 'card') {
    c.fills = [tokenPaint('Surface/Card', '#FFFFFF')];
    c.strokes = [tokenPaint('Border/Subtle', '#DEDEE4')];
    c.strokeWeight = 1;
  } else {
    c.fills = [];
    c.strokes = [];
  }
  if (variant !== 'plain') {
    c.paddingTop = 20; c.paddingBottom = 20; c.paddingLeft = 20; c.paddingRight = 20;
  }

  var avatar = figma.createFrame();
  avatar.name = 'Avatar';
  avatar.resize(96, 96);
  avatar.cornerRadius = 48;
  avatar.fills = [brand ? solid('#FEFFFE', 0.12) : tokenPaint('Blue/050', '#F5F5FC')];
  avatar.strokes = [brand ? solid('#FEFFFE', 0.35) : tokenPaint('Blue/100', '#EBEAF9')];
  avatar.strokeWeight = 2;
  avatar.layoutMode = 'HORIZONTAL';
  avatar.primaryAxisAlignItems = 'CENTER';
  avatar.counterAxisAlignItems = 'CENTER';
  avatar.primaryAxisSizingMode = 'FIXED';
  avatar.counterAxisSizingMode = 'FIXED';
  avatar.appendChild(label('FL', 'SemiBold', 24, brand ? '#8DC7E8' : '#10069E', { lh: 100 }));
  c.appendChild(avatar);

  var text = stack('Text', 'VERTICAL', 2);
  text.counterAxisAlignItems = 'CENTER';
  text.appendChild(label('First Last', 'SemiBold', 17, brand ? '#FEFFFE' : '#10069E', { lh: 125, ls: -2 }));
  text.appendChild(label('Position', 'Medium', 14, brand ? '#B9B6E8' : '#B59D5E', { lh: 150, ls: 4, upper: true }));
  c.appendChild(text);
  return c;
}

// --- assembly ------------------------------------------------------------

function section(page, title, subtitle, y) {
  var s = stack(title, 'VERTICAL', 20, 40);
  s.counterAxisAlignItems = 'MIN';
  page.appendChild(s);
  s.x = 0; s.y = y;
  var head = stack('Head', 'VERTICAL', 4);
  head.appendChild(label(title, 'SemiBold', 24, '#10069E', { lh: 125 }));
  if (subtitle) head.appendChild(label(subtitle, 'Regular', 14, '#7C7C88', { lh: 150 }));
  s.appendChild(head);
  return s;
}

function variantSet(parent, name, comps, cols) {
  for (var i = 0; i < comps.length; i++) figma.currentPage.appendChild(comps[i]);
  var set = figma.combineAsVariants(comps, figma.currentPage);
  set.name = name;
  set.layoutMode = 'HORIZONTAL';
  set.layoutWrap = 'WRAP';
  set.itemSpacing = 24;
  set.counterAxisSpacing = 24;
  set.paddingTop = 24; set.paddingBottom = 24; set.paddingLeft = 24; set.paddingRight = 24;
  set.primaryAxisSizingMode = 'FIXED';
  set.counterAxisSizingMode = 'AUTO';
  set.counterAxisAlignItems = 'CENTER';
  set.resize(cols || 900, set.height);
  parent.appendChild(set);
  return set;
}

function buildComponents(page, report) {
  var y = 0;
  var made = 0;

  // Buttons
  var btnSection = section(page, 'Button', 'primary · secondary · ghost · inverse · link, in three sizes', y);
  var btns = [];
  var variants = ['primary', 'secondary', 'ghost', 'inverse', 'link'];
  var sizes = ['sm', 'md', 'lg'];
  for (var v = 0; v < variants.length; v++) {
    for (var s = 0; s < sizes.length; s++) btns.push(makeButton(variants[v], sizes[s]));
  }
  variantSet(btnSection, 'Button', btns, 900);
  made += btns.length;

  // Badges
  var badgeSection = section(page, 'Badge', 'tag pills in six tones, plus the deck’s circular section counters', y);
  var badges = [];
  var tones = ['blue', 'gold', 'sky', 'orange', 'green', 'neutral'];
  var bvars = ['solid', 'soft', 'outline', 'number'];
  for (var t = 0; t < tones.length; t++) {
    for (var bv = 0; bv < bvars.length; bv++) {
      for (var bs = 0; bs < sizes.length; bs++) badges.push(makeBadge(tones[t], bvars[bv], sizes[bs]));
    }
  }
  variantSet(badgeSection, 'Badge', badges, 900);
  made += badges.length;

  // Stat
  var statSection = section(page, 'Stat', 'headline metrics — plain, card and brand surfaces', y);
  var stats = [];
  var svars = ['plain', 'card', 'brand'];
  var stones = ['brand', 'gold', 'orange', 'green', 'sky'];
  for (var sv = 0; sv < svars.length; sv++) {
    for (var st = 0; st < stones.length; st++) stats.push(makeStat(svars[sv], stones[st]));
  }
  variantSet(statSection, 'Stat', stats, 1200);
  made += stats.length;

  // Card
  var cardSection = section(page, 'Card', 'elevated · outline · subtle · brand', y);
  var cards = ['elevated', 'outline', 'subtle', 'brand'].map(makeCard);
  variantSet(cardSection, 'Card', cards, 1450);
  made += cards.length;

  // TeamCard
  var teamSection = section(page, 'TeamCard', 'leadership tiles — plain, card, brand', y);
  var team = ['plain', 'card', 'brand'].map(makeTeamCard);
  variantSet(teamSection, 'TeamCard', team, 800);
  made += team.length;

  // ProgressBar
  var pbSection = section(page, 'ProgressBar', 'labelled percentage tracks in five tones, three heights', y);
  var bars = [];
  var ptones = ['brand', 'gold', 'orange', 'green', 'sky'];
  for (var p = 0; p < ptones.length; p++) {
    for (var ps = 0; ps < sizes.length; ps++) bars.push(makeProgressBar(ptones[p], sizes[ps]));
  }
  variantSet(pbSection, 'ProgressBar', bars, 1000);
  made += bars.length;

  // Divider + Eyebrow
  var miscSection = section(page, 'Eyebrow & Divider', 'section kicker and horizontal rules', y);
  var eyebrow = makeEyebrow();
  figma.currentPage.appendChild(eyebrow);
  miscSection.appendChild(eyebrow);
  var dividers = ['subtle', 'gold', 'on-brand'].map(makeDivider);
  variantSet(miscSection, 'Divider', dividers, 400);
  made += 1 + dividers.length;

  // Lay the sections out in a column
  var sections = [btnSection, badgeSection, statSection, cardSection, teamSection, pbSection, miscSection];
  var cursor = 0;
  for (var i = 0; i < sections.length; i++) {
    sections[i].x = 0;
    sections[i].y = cursor;
    cursor += sections[i].height + 80;
  }

  report('Components: ' + made + ' variants across ' + sections.length + ' sets');
}

// ---------------------------------------------------------------------------
// Foundations documentation page
// ---------------------------------------------------------------------------

function swatchRow(title, entries) {
  var row = stack(title, 'VERTICAL', 10);
  row.appendChild(label(title, 'SemiBold', 14, '#2A2A36', { lh: 150 }));
  var chips = stack('Chips', 'HORIZONTAL', 12);
  for (var i = 0; i < entries.length; i++) {
    var chip = stack(entries[i][0], 'VERTICAL', 6);
    var sw = rect(96, 64, solid(entries[i][1]), 8);
    sw.strokes = [solid('#DEDEE4')];
    sw.strokeWeight = 1;
    chip.appendChild(sw);
    chip.appendChild(label(entries[i][0], 'Medium', 11, '#2A2A36', { lh: 140 }));
    chip.appendChild(label(entries[i][1].toUpperCase(), 'Regular', 10, '#9C9CA7', { lh: 140 }));
    chips.appendChild(chip);
  }
  row.appendChild(chips);
  return row;
}

function buildDocs(page, report) {
  var root = stack('Foundations', 'VERTICAL', 48, 64);
  page.appendChild(root);
  root.x = 0; root.y = 0;
  root.fills = [solid('#FEFFFE')];

  var head = stack('Head', 'VERTICAL', 8);
  head.appendChild(label('TASAMA', 'SemiBold', 11, '#B59D5E', { lh: 150, ls: 16, upper: true }));
  head.appendChild(label('Design system foundations', 'Bold', 44, '#10069E', { lh: 110, ls: -2 }));
  head.appendChild(label(
    'Colour, type, spacing and elevation for the TASAMA (A PIF Company) brand system.',
    'Regular', 18, '#7C7C88', { lh: 165 }
  ));
  root.appendChild(head);

  // Colour
  var colour = stack('Colour', 'VERTICAL', 24);
  colour.appendChild(label('Colour', 'SemiBold', 24, '#10069E', { lh: 125 }));
  colour.appendChild(swatchRow('Brand core', [
    ['Blue', '#10069E'], ['Gold', '#B59D5E'], ['Sky', '#8DC7E8'],
    ['Orange', '#E77622'], ['Green', '#ADDC91'], ['White', '#FEFFFE']
  ]));
  colour.appendChild(swatchRow('Blue ramp', [
    ['900', '#0A0468'], ['800', '#0D0582'], ['700', '#10069E'], ['600', '#2A21B4'],
    ['500', '#4A42C6'], ['400', '#7A74D6'], ['300', '#ADA9E6'], ['200', '#D5D3F2'],
    ['100', '#EBEAF9'], ['050', '#F5F5FC']
  ]));
  colour.appendChild(swatchRow('Neutral', [
    ['950', '#0B0B14'], ['900', '#16161F'], ['800', '#2A2A36'], ['700', '#43434F'],
    ['600', '#5E5E6B'], ['500', '#7C7C88'], ['400', '#9C9CA7'], ['300', '#C2C2CB'],
    ['200', '#DEDEE4'], ['150', '#E9E9EE'], ['100', '#F2F2F5'], ['050', '#F8F8FA']
  ]));
  colour.appendChild(swatchRow('Accent ramps', [
    ['Gold 700', '#8C7742'], ['Gold 300', '#D3C296'], ['Sky 600', '#4E9BC9'],
    ['Orange 600', '#C25A11'], ['Green 600', '#6FAE4E'], ['Green 200', '#D3EDC4']
  ]));
  root.appendChild(colour);

  // Type
  var type = stack('Type', 'VERTICAL', 18);
  type.appendChild(label('Typography — Montserrat', 'SemiBold', 24, '#10069E', { lh: 125 }));
  for (var i = 0; i < TEXT_STYLES.length; i++) {
    var s = TEXT_STYLES[i];
    var line = stack(s.name, 'HORIZONTAL', 24);
    line.counterAxisAlignItems = 'CENTER';
    var meta = label(s.name + '  ·  ' + s.size + '/' + s.weight, 'Regular', 12, '#9C9CA7', { lh: 150 });
    meta.textAutoResize = 'HEIGHT';
    meta.resize(220, meta.height);
    line.appendChild(meta);
    line.appendChild(label('Growing Saudi talent', s.weight, s.size, '#2A2A36',
      { lh: s.lh, ls: s.ls, upper: s.upper }));
    type.appendChild(line);
  }
  root.appendChild(type);

  // Spacing
  var sp = stack('Spacing', 'VERTICAL', 12);
  sp.appendChild(label('Spacing — 4px grid', 'SemiBold', 24, '#10069E', { lh: 125 }));
  var spKeys = ['Space/1', 'Space/2', 'Space/3', 'Space/4', 'Space/5', 'Space/6', 'Space/8',
    'Space/10', 'Space/12', 'Space/16', 'Space/20', 'Space/24'];
  for (var k = 0; k < spKeys.length; k++) {
    var srow = stack(spKeys[k], 'HORIZONTAL', 16);
    srow.counterAxisAlignItems = 'CENTER';
    var nm = label(spKeys[k], 'Medium', 12, '#2A2A36', { lh: 150 });
    nm.textAutoResize = 'HEIGHT'; nm.resize(90, nm.height);
    srow.appendChild(nm);
    srow.appendChild(rect(SCALE[spKeys[k]], 16, solid('#10069E'), 2));
    srow.appendChild(label(SCALE[spKeys[k]] + 'px', 'Regular', 12, '#9C9CA7', { lh: 150 }));
    sp.appendChild(srow);
  }
  root.appendChild(sp);

  // Radii + elevation
  var rad = stack('Radii & elevation', 'VERTICAL', 16);
  rad.appendChild(label('Radii & elevation', 'SemiBold', 24, '#10069E', { lh: 125 }));
  var radRow = stack('Radii', 'HORIZONTAL', 16);
  var radKeys = ['Radius/xs', 'Radius/sm', 'Radius/md', 'Radius/lg', 'Radius/xl', 'Radius/pill'];
  for (var r = 0; r < radKeys.length; r++) {
    var rc = stack(radKeys[r], 'VERTICAL', 6);
    rc.counterAxisAlignItems = 'CENTER';
    var box = rect(80, 60, solid('#EBEAF9'), Math.min(SCALE[radKeys[r]], 30));
    box.strokes = [solid('#10069E')]; box.strokeWeight = 1;
    rc.appendChild(box);
    rc.appendChild(label(radKeys[r].split('/')[1], 'Medium', 11, '#2A2A36', { lh: 140 }));
    radRow.appendChild(rc);
  }
  rad.appendChild(radRow);

  var elRow = stack('Elevation', 'HORIZONTAL', 24, [16, 16, 24, 16]);
  for (var e = 0; e < EFFECT_STYLES.length; e++) {
    var spec = EFFECT_STYLES[e];
    var ec = stack(spec.name, 'VERTICAL', 8);
    ec.counterAxisAlignItems = 'CENTER';
    var card = figma.createFrame();
    card.resize(110, 72);
    card.cornerRadius = 10;
    card.fills = [solid('#FFFFFF')];
    card.effects = spec.layers.map(function (l) {
      return {
        type: spec.inner ? 'INNER_SHADOW' : 'DROP_SHADOW',
        color: { r: SHADOW_RGB.r, g: SHADOW_RGB.g, b: SHADOW_RGB.b, a: l.a },
        offset: { x: 0, y: l.y }, radius: l.blur, spread: 0, visible: true, blendMode: 'NORMAL'
      };
    });
    ec.appendChild(card);
    ec.appendChild(label(spec.name.split('/')[1], 'Medium', 11, '#2A2A36', { lh: 140 }));
    elRow.appendChild(ec);
  }
  rad.appendChild(elRow);

  // Gradients
  var gradRow = stack('Gradients', 'HORIZONTAL', 16);
  var grads = [['Brand', GRADIENT_BRAND()], ['Sky', GRADIENT_SKY()]];
  for (var g = 0; g < grads.length; g++) {
    var gc = stack(grads[g][0], 'VERTICAL', 6);
    var gb = rect(180, 80, grads[g][1], 12);
    gc.appendChild(gb);
    gc.appendChild(label('Gradient/' + grads[g][0], 'Medium', 11, '#2A2A36', { lh: 140 }));
    gradRow.appendChild(gc);
  }
  rad.appendChild(gradRow);
  root.appendChild(rad);

  report('Docs: foundations page laid out');
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function getOrCreatePage(name) {
  for (var i = 0; i < figma.root.children.length; i++) {
    if (figma.root.children[i].name === name) return figma.root.children[i];
  }
  var p = figma.createPage();
  p.name = name;
  return p;
}

figma.showUI(__html__, { width: 320, height: 480 });

figma.ui.onmessage = async function (msg) {
  if (msg.type !== 'run') return;
  var opts = msg.opts;
  var steps = 0, total = 0;
  ['variables', 'textStyles', 'effectStyles', 'icons', 'components', 'docs']
    .forEach(function (k) { if (opts[k]) total++; });
  if (total === 0) total = 1;

  function report(text) {
    steps++;
    figma.ui.postMessage({ type: 'progress', text: '✓ ' + text, pct: (steps / total) * 100 });
  }

  try {
    await loadFonts();

    if (opts.variables) {
      await buildVariables(report);
    } else {
      // Components still want to bind to tokens if they already exist.
      var pools = await figma.variables.getLocalVariablesAsync('COLOR');
      for (var i = 0; i < pools.length; i++) VARS[pools[i].name] = pools[i];
    }
    if (opts.textStyles) await buildTextStyles(report);
    if (opts.effectStyles) await buildEffectAndPaintStyles(report);

    if (opts.icons) {
      var iconPage = getOrCreatePage('TASAMA · Icons');
      await figma.setCurrentPageAsync(iconPage);
      buildIcons(iconPage, report);
    }
    if (opts.components) {
      var compPage = getOrCreatePage('TASAMA · Components');
      await figma.setCurrentPageAsync(compPage);
      buildComponents(compPage, report);
    }
    if (opts.docs) {
      var docPage = getOrCreatePage('TASAMA · Foundations');
      await figma.setCurrentPageAsync(docPage);
      buildDocs(docPage, report);
      await figma.setCurrentPageAsync(docPage);
    }

    figma.ui.postMessage({ type: 'done', text: 'Done — TASAMA design system built.' });
    figma.notify('TASAMA design system built.');
  } catch (err) {
    figma.ui.postMessage({ type: 'error', text: 'Failed: ' + (err && err.message ? err.message : String(err)) });
  }
};
