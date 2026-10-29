import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');const {products,stats}=JSON.parse(fs.readFileSync(path.join(root,'catalog.json'),'utf8'));let originals=0,scenes=0;
assert.equal(products.length,72);assert.equal(new Set(products.map(p=>p.id)).size,72);assert.equal(new Set(products.map(p=>p.name)).size,72);assert.equal(new Set(products.map(p=>p.range)).size,7);assert.ok(products.every(p=>!p.id.includes('kettle')));
for(const p of products){assert.ok(p.sourceName&&p.nameStatus&&p.imageRatioLocked);assert.equal(p.price,null);assert.equal(p.stock,null);const hero=p.variants.find(v=>v.id===p.heroVariant);assert.ok(hero);assert.equal(hero.gallery[0].src,p.heroSource);assert.ok(hero.gallery[0].generated);for(const v of p.variants){assert.ok(v.gallery.length);for(const im of v.gallery){assert.ok(fs.existsSync(path.join(root,im.src)),`Missing ${im.src}`);if(im.generated){assert.ok(im.referencePath.startsWith('Steel Products/'));assert.ok(im.width>0&&im.height>0);scenes++}else{assert.ok(im.sourcePath.startsWith('Steel Products/'));if(p.verifiedOriginals)assert.match(im.sourcePath,/Original Photos/);originals++}}}}
assert.equal(scenes,72);assert.equal(originals,783);assert.equal(stats.originals,669);assert.equal(stats.ai,1176);assert.equal(products.reduce((s,p)=>s+p.variants.length,0),145);
assert.ok(!fs.readdirSync(path.join(root,'assets/products')).some(n=>n.startsWith('electric-steel-kettle-')||n.startsWith('steel-kettle-')));assert.ok(!fs.readdirSync(path.join(root,'assets/courtyard')).some(n=>n.includes('kettle')));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert.ok(!html.includes('ratio-safe.css'));assert.ok(html.includes('scene-layout.css'));
const css=fs.readFileSync(path.join(root,'scene-layout.css'),'utf8');assert.ok(css.includes('object-fit:contain'));assert.ok(css.includes('padding:0'));assert.ok(!css.includes('empty-set.webp'));
console.log(`PASS: 72 generated lead scenes, 783 source gallery images, 72 names, 145 options, no frames or kettle products.`);
