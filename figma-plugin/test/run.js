/* Runs the built code.js against the mock and asserts the system is complete.
 * Usage: node test/run.js
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

import * as mock from './mock-figma.js';

const CODE = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'code.js');
if (!fs.existsSync(CODE)) {
  console.error('code.js missing — run `node build.js` first.');
  process.exit(1);
}

const sandbox = {
  figma: mock.figma,
  __html__: '<html></html>',
  console,
  Math,
  JSON,
  Object,
  Number,
  String,
  Array,
  Error,
  parseInt,
  parseFloat,
  isNaN,
  Promise,
  setTimeout
};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(CODE, 'utf8'), sandbox, { filename: 'code.js' });

if (typeof mock.figma.ui.onmessage !== 'function') {
  console.error('FAIL: plugin never registered figma.ui.onmessage');
  process.exit(1);
}

const failures = [];
function check(label, cond, detail) {
  if (cond) console.log('  ok   ' + label);
  else { console.log('  FAIL ' + label + (detail ? ' — ' + detail : '')); failures.push(label); }
}

(async () => {
  console.log('running plugin with all options enabled...\n');
  await mock.figma.ui.onmessage({
    type: 'run',
    opts: { variables: true, textStyles: true, effectStyles: true, icons: true, components: true, docs: true }
  });

  const log = mock.figma.__uiLog || [];
  const errors = log.filter((m) => m.type === 'error');
  for (const m of log) console.log('  [ui] ' + m.text);
  console.log('');

  check('plugin completed without error', errors.length === 0, errors.map((e) => e.text).join('; '));

  // --- foundations ---
  const collNames = mock.collections.map((c) => c.name).sort();
  check('3 variable collections', mock.collections.length === 3, collNames.join(', '));
  const colorVars = mock.variables.filter((v) => v.resolvedType === 'COLOR');
  const floatVars = mock.variables.filter((v) => v.resolvedType === 'FLOAT');
  const primColl = mock.collections.find((c) => c.name === 'TASAMA · Primitives');
  const semColl = mock.collections.find((c) => c.name === 'TASAMA · Semantic');
  const prims = colorVars.filter((v) => v.variableCollectionId === primColl.id);
  const sems = colorVars.filter((v) => v.variableCollectionId === semColl.id);
  check('45 primitive colors', prims.length === 45, 'got ' + prims.length);
  check('27 semantic colors', sems.length === 27, 'got ' + sems.length);
  check('26 scale numbers', floatVars.length === 26, 'got ' + floatVars.length);

  // every semantic token that should alias, does
  const semAliased = sems.filter((v) =>
    Object.values(v.valuesByMode).some((val) => val && val.type === 'VARIABLE_ALIAS'));
  check('22 semantic tokens alias a primitive', semAliased.length === 22, 'got ' + semAliased.length);
  // the 5 literals: Text/Inverse Muted, Surface/Card, Border/On Brand, Focus Ring, Overlay Scrim
  check('5 semantic tokens are literals', sems.length - semAliased.length === 5);

  const aliased = colorVars.filter((v) =>
    Object.values(v.valuesByMode).some((val) => val && val.type === 'VARIABLE_ALIAS'));
  check('semantic tokens alias primitives', aliased.length >= 20, 'got ' + aliased.length);

  // every variable has a value in its collection's mode
  const unset = mock.variables.filter((v) => Object.keys(v.valuesByMode).length === 0);
  check('no variable left unset', unset.length === 0, unset.map((v) => v.name).join(', '));

  check('13 text styles', mock.textStyles.length === 13, 'got ' + mock.textStyles.length);
  check('all text styles use Montserrat',
    mock.textStyles.every((s) => s.fontName && s.fontName.family === 'Montserrat'));
  check('6 effect styles', mock.effectStyles.length === 6, 'got ' + mock.effectStyles.length);
  check('4 gradient paint styles', mock.paintStyles.length === 4, 'got ' + mock.paintStyles.length);

  // shadows must be blue-tinted, never neutral
  const allShadowsBlue = mock.effectStyles.every((s) =>
    s.effects.every((e) => e.color.b > e.color.r && e.color.b > e.color.g));
  check('elevation is blue-tinted (brand rule)', allShadowsBlue);

  // --- pages ---
  const pages = mock.figma.root.children.map((p) => p.name);
  for (const want of ['TASAMA · Icons', 'TASAMA · Components', 'TASAMA · Foundations']) {
    check('page "' + want + '"', pages.includes(want));
  }

  // --- icons ---
  const iconPage = mock.figma.root.children.find((p) => p.name === 'TASAMA · Icons');
  const iconComps = [];
  (function walk(n) { for (const c of n.children) { if (c.type === 'COMPONENT' && c.name.startsWith('Icon / ')) iconComps.push(c); walk(c); } })(iconPage);
  check('24 icon components', iconComps.length === 24, 'got ' + iconComps.length);
  check('icons are 24x24', iconComps.every((c) => c.width === 24 && c.height === 24));

  // --- components ---
  const compPage = mock.figma.root.children.find((p) => p.name === 'TASAMA · Components');
  const sets = [];
  (function walk(n) { for (const c of n.children) { if (c.type === 'COMPONENT_SET') sets.push(c); walk(c); } })(compPage);
  const setNames = sets.map((s) => s.name).sort();
  check('7 component sets', sets.length === 7, setNames.join(', '));
  for (const want of ['Badge', 'Button', 'Card', 'Divider', 'ProgressBar', 'Stat', 'TeamCard']) {
    check('set "' + want + '"', setNames.includes(want));
  }
  const buttonSet = sets.find((s) => s.name === 'Button');
  check('Button has 15 variants (5 x 3)', buttonSet && buttonSet.children.length === 15,
    buttonSet && buttonSet.children.length);
  const badgeSet = sets.find((s) => s.name === 'Badge');
  check('Badge has 72 variants (6 x 4 x 3)', badgeSet && badgeSet.children.length === 72,
    badgeSet && badgeSet.children.length);

  // no zero-size components
  const zero = [];
  (function walk(n) { for (const c of n.children) { if (c.type === 'COMPONENT' && (c.width <= 0 || c.height <= 0)) zero.push(c.name); walk(c); } })(compPage);
  check('no zero-size components', zero.length === 0, zero.join(', '));

  // token binding actually happened
  let bound = 0;
  (function walk(n) {
    for (const c of n.children) {
      if (Array.isArray(c.fills)) for (const f of c.fills) if (f && f.boundVariables) bound++;
      if (Array.isArray(c.strokes)) for (const s of c.strokes) if (s && s.boundVariables) bound++;
      walk(c);
    }
  })(compPage);
  check('components bind to variables', bound > 0, 'bound paints: ' + bound);

  // --- docs ---
  const docPage = mock.figma.root.children.find((p) => p.name === 'TASAMA · Foundations');
  check('foundations page has content', docPage.children.length > 0);

  console.log('\n' + (failures.length ? `${failures.length} FAILURE(S)` : 'all checks passed'));
  console.log(`nodes: ${mock.created.components} components, ${mock.created.svgs} svgs imported`);
  process.exit(failures.length ? 1 : 0);
})().catch((e) => {
  console.error('\nharness threw:', e.stack || e.message);
  process.exit(1);
});
