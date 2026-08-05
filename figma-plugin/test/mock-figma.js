/* A deliberately strict mock of the Figma Plugin API.
 * It reproduces the constraints that actually bite in real Figma:
 *   - characters cannot be set before the font is loaded
 *   - layoutSizingHorizontal=FILL needs an auto-layout parent whose matching
 *     axis is FIXED
 *   - layoutWrap=WRAP needs a HORIZONTAL layout with a FIXED primary axis
 *   - combineAsVariants needs consistent variant property names
 * Auto-layout sizing is approximated so height/width reads return real numbers.
 */

const loadedFonts = new Set();
const created = { components: 0, textStyles: 0, effectStyles: 0, paintStyles: 0, variables: 0, collections: 0, pages: 0, svgs: 0 };
const warnings = [];

let idSeq = 0;
const nextId = (p) => `${p}:${++idSeq}`;

class BaseNode {
  constructor(type, name = 'Node') {
    this.id = nextId(type);
    this.type = type;
    this.name = name;
    this.children = [];
    this.parent = null;
    this._w = 100;
    this._h = 100;
    this.x = 0;
    this.y = 0;
    this.fills = [];
    this.strokes = [];
    this.effects = [];
    this.layoutMode = 'NONE';
    this.itemSpacing = 0;
    this.counterAxisSpacing = 0;
    this.paddingTop = this.paddingRight = this.paddingBottom = this.paddingLeft = 0;
    this.primaryAxisSizingMode = 'AUTO';
    this.counterAxisSizingMode = 'AUTO';
    this.primaryAxisAlignItems = 'MIN';
    this.counterAxisAlignItems = 'MIN';
    this.layoutWrap = 'NO_WRAP';
    this.cornerRadius = 0;
    this.clipsContent = false;
    this.strokeWeight = 1;
    this.strokeAlign = 'INSIDE';
  }

  get width() { this._relayout(); return this._w; }
  set width(v) { this._w = v; }
  get height() { this._relayout(); return this._h; }
  set height(v) { this._h = v; }

  _relayout() {
    if (this.layoutMode === 'NONE' || !this.children.length) return;
    const horiz = this.layoutMode === 'HORIZONTAL';
    let main = 0;
    let cross = 0;
    for (const c of this.children) {
      const cw = c._w;
      const ch = c._h;
      main += horiz ? cw : ch;
      cross = Math.max(cross, horiz ? ch : cw);
    }
    main += this.itemSpacing * Math.max(0, this.children.length - 1);
    const padMain = horiz ? this.paddingLeft + this.paddingRight : this.paddingTop + this.paddingBottom;
    const padCross = horiz ? this.paddingTop + this.paddingBottom : this.paddingLeft + this.paddingRight;
    const mainSize = main + padMain;
    const crossSize = cross + padCross;
    if (horiz) {
      if (this.primaryAxisSizingMode === 'AUTO') this._w = mainSize;
      if (this.counterAxisSizingMode === 'AUTO') this._h = crossSize;
    } else {
      if (this.primaryAxisSizingMode === 'AUTO') this._h = mainSize;
      if (this.counterAxisSizingMode === 'AUTO') this._w = crossSize;
    }
  }

  set layoutSizingHorizontal(v) {
    if (v === 'FILL') {
      if (!this.parent || this.parent.layoutMode === 'NONE') {
        throw new Error(`layoutSizingHorizontal=FILL on "${this.name}" requires an auto-layout parent`);
      }
      const p = this.parent;
      const axisIsPrimary = p.layoutMode === 'HORIZONTAL';
      const mode = axisIsPrimary ? p.primaryAxisSizingMode : p.counterAxisSizingMode;
      if (mode !== 'FIXED') {
        throw new Error(
          `layoutSizingHorizontal=FILL on "${this.name}": parent "${p.name}" has ` +
          `${axisIsPrimary ? 'primaryAxisSizingMode' : 'counterAxisSizingMode'}=${mode}, needs FIXED`
        );
      }
    }
    this._lsh = v;
  }
  get layoutSizingHorizontal() { return this._lsh; }

  set layoutWrap(v) {
    if (v === 'WRAP') {
      if (this.layoutMode !== 'HORIZONTAL') throw new Error(`layoutWrap=WRAP on "${this.name}" requires HORIZONTAL layout`);
      // Figma allows setting it, but it silently does nothing with an AUTO primary axis.
      this._wrapPending = true;
    }
    this._layoutWrap = v;
  }
  get layoutWrap() { return this._layoutWrap || 'NO_WRAP'; }

  appendChild(node) {
    if (node.parent) {
      const i = node.parent.children.indexOf(node);
      if (i >= 0) node.parent.children.splice(i, 1);
    }
    node.parent = this;
    this.children.push(node);
  }
  resize(w, h) {
    if (typeof w !== 'number' || typeof h !== 'number' || Number.isNaN(w) || Number.isNaN(h)) {
      throw new Error(`resize("${this.name}", ${w}, ${h}) — non-numeric size`);
    }
    if (w <= 0 || h <= 0) throw new Error(`resize("${this.name}", ${w}, ${h}) — must be > 0`);
    this._w = w; this._h = h;
  }
  rescale(f) {
    if (!(f > 0)) throw new Error(`rescale("${this.name}", ${f})`);
    this._w *= f; this._h *= f;
  }
  remove() {
    if (this.parent) {
      const i = this.parent.children.indexOf(this);
      if (i >= 0) this.parent.children.splice(i, 1);
    }
  }
}

class TextNode extends BaseNode {
  constructor() {
    super('TEXT', 'Text');
    this._chars = '';
    this.fontSize = 12;
    this.fontName = { family: 'Inter', style: 'Regular' };
    this.textAutoResize = 'NONE';
    this.textCase = 'ORIGINAL';
    this.lineHeight = { unit: 'AUTO' };
    this.letterSpacing = { unit: 'PERCENT', value: 0 };
  }
  set characters(v) {
    const key = `${this.fontName.family}|${this.fontName.style}`;
    if (!loadedFonts.has(key)) throw new Error(`Cannot set characters — font not loaded: ${key}`);
    this._chars = v;
    // crude text metrics so auto-layout maths produce sane numbers
    this._w = Math.max(8, v.length * this.fontSize * 0.58);
    this._h = Math.max(this.fontSize, this.fontSize * 1.4);
  }
  get characters() { return this._chars; }
}

class PageNode extends BaseNode {
  constructor(name) { super('PAGE', name); created.pages++; }
}

class ComponentNode extends BaseNode {
  constructor() { super('COMPONENT', 'Component'); created.components++; }
}

class ComponentSetNode extends BaseNode {
  constructor() { super('COMPONENT_SET', 'ComponentSet'); }
}

// --- styles & variables ---------------------------------------------------

const textStyles = [];
const effectStyles = [];
const paintStyles = [];
const collections = [];
const variables = [];

class Style {
  constructor(kind, pool) { this.id = nextId(kind); this.name = ''; pool.push(this); }
}

class Variable {
  constructor(name, collection, type) {
    this.id = nextId('Var');
    this.name = name;
    this.resolvedType = type;
    this.variableCollectionId = collection.id;
    this.valuesByMode = {};
    variables.push(this);
    created.variables++;
  }
  setValueForMode(modeId, value) {
    if (!modeId) throw new Error(`setValueForMode on "${this.name}" — missing modeId`);
    if (value === undefined || value === null) throw new Error(`setValueForMode on "${this.name}" — undefined value`);
    if (this.resolvedType === 'COLOR' && typeof value === 'object' && !value.type) {
      for (const ch of ['r', 'g', 'b']) {
        if (typeof value[ch] !== 'number' || value[ch] < 0 || value[ch] > 1) {
          throw new Error(`Variable "${this.name}" channel ${ch}=${value[ch]} out of 0..1`);
        }
      }
    }
    if (this.resolvedType === 'FLOAT' && typeof value !== 'number') {
      throw new Error(`Variable "${this.name}" expected number, got ${typeof value}`);
    }
    this.valuesByMode[modeId] = value;
  }
}

class VariableCollection {
  constructor(name) {
    this.id = nextId('Coll');
    this.name = name;
    this.modes = [{ modeId: nextId('Mode'), name: 'Mode 1' }];
    collections.push(this);
    created.collections++;
  }
}

// --- root -----------------------------------------------------------------

const root = { type: 'DOCUMENT', children: [] };
const firstPage = new PageNode('Page 1');
root.children.push(firstPage);

const figma = {
  root,
  currentPage: firstPage,
  notify: (m) => warnings.push('notify: ' + m),

  showUI() {},
  ui: {
    onmessage: null,
    postMessage(m) { (figma.__uiLog || (figma.__uiLog = [])).push(m); }
  },

  async loadFontAsync(f) {
    // Mirror Figma: Montserrat ships as a Google font; ExtraBold is present too.
    const available = ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold', 'ExtraBold'];
    if (f.family !== 'Montserrat' || !available.includes(f.style)) {
      throw new Error(`font not available: ${f.family} ${f.style}`);
    }
    loadedFonts.add(`${f.family}|${f.style}`);
  },

  createFrame() { const n = new BaseNode('FRAME', 'Frame'); figma.currentPage.appendChild(n); return n; },
  createText() { const n = new TextNode(); figma.currentPage.appendChild(n); return n; },
  createRectangle() { const n = new BaseNode('RECTANGLE', 'Rectangle'); figma.currentPage.appendChild(n); return n; },
  createComponent() { const n = new ComponentNode(); figma.currentPage.appendChild(n); return n; },
  createPage() { const p = new PageNode('Page'); root.children.push(p); return p; },

  createNodeFromSvg(svg) {
    if (typeof svg !== 'string' || !svg.startsWith('<svg')) throw new Error('createNodeFromSvg: not an svg string');
    if (!/viewBox="[^"]+"/.test(svg)) throw new Error('createNodeFromSvg: missing viewBox');
    const vb = svg.match(/viewBox="([^"]+)"/)[1].trim().split(/\s+/).map(Number);
    if (vb.length !== 4 || vb.some(Number.isNaN)) throw new Error('createNodeFromSvg: bad viewBox: ' + vb);
    created.svgs++;
    const n = new BaseNode('FRAME', 'svg');
    n._w = vb[2]; n._h = vb[3];
    figma.currentPage.appendChild(n);
    return n;
  },

  combineAsVariants(components, parent) {
    if (!components.length) throw new Error('combineAsVariants: empty');
    const keys = components.map((c) =>
      c.name.split(',').map((p) => p.split('=')[0].trim()).join('|'));
    const first = keys[0];
    for (let i = 1; i < keys.length; i++) {
      if (keys[i] !== first) {
        throw new Error(`combineAsVariants: inconsistent variant properties "${first}" vs "${keys[i]}"`);
      }
    }
    const names = components.map((c) => c.name);
    const dupes = names.filter((n, i) => names.indexOf(n) !== i);
    if (dupes.length) throw new Error('combineAsVariants: duplicate variant ' + dupes[0]);
    const set = new ComponentSetNode();
    for (const c of components) set.appendChild(c);
    parent.appendChild(set);
    return set;
  },

  async setCurrentPageAsync(p) {
    if (!p || p.type !== 'PAGE') throw new Error('setCurrentPageAsync: not a page');
    figma.currentPage = p;
  },

  createTextStyle() { created.textStyles++; return new Style('TextStyle', textStyles); },
  createEffectStyle() { created.effectStyles++; return new Style('EffectStyle', effectStyles); },
  createPaintStyle() { created.paintStyles++; return new Style('PaintStyle', paintStyles); },
  async getLocalTextStylesAsync() { return textStyles.slice(); },
  async getLocalEffectStylesAsync() { return effectStyles.slice(); },
  async getLocalPaintStylesAsync() { return paintStyles.slice(); },

  variables: {
    createVariableCollection: (name) => new VariableCollection(name),
    async getLocalVariableCollectionsAsync() { return collections.slice(); },
    async getLocalVariablesAsync(type) { return variables.filter((v) => !type || v.resolvedType === type); },
    createVariable(name, collection, type) {
      if (!collection || typeof collection !== 'object' || !collection.id) {
        throw new Error('createVariable: expected a VariableCollection object');
      }
      return new Variable(name, collection, type);
    },
    createVariableAlias(v) {
      if (!v || !v.id) throw new Error('createVariableAlias: not a variable');
      return { type: 'VARIABLE_ALIAS', id: v.id };
    },
    setBoundVariableForPaint(paint, field, v) {
      if (!v || !v.id) throw new Error('setBoundVariableForPaint: not a variable');
      if (paint.type !== 'SOLID') throw new Error('setBoundVariableForPaint: needs a SOLID paint');
      return Object.assign({}, paint, { boundVariables: { [field]: { type: 'VARIABLE_ALIAS', id: v.id } } });
    }
  }
};

export { figma, created, textStyles, effectStyles, paintStyles, collections, variables, warnings, loadedFonts };
