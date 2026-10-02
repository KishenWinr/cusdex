// Downloads the real photos + logo from your Figma file into public/images.
// Usage:  FIGMA_TOKEN=your_token npm run images     (Windows PowerShell: $env:FIGMA_TOKEN="your_token"; npm run images)
import fs from 'node:fs'
const KEY='QEiTdwyKJAod4NwLJe4lje',T=process.env.FIGMA_TOKEN
if(!T){console.error('Set FIGMA_TOKEN first (Figma > Settings > Security > Personal access tokens)');process.exit(1)}
const jpg={hero:'48:46',who:'48:72',how:'48:187',fin:'73:35',tech:'93:148',retail:'48:264',cx:'85:125',about:'76:65',detail:'65:9',
 svchero:'87:132',why:'65:26',approach:'65:20',big:'65:23',digital:'3:3136',omni2:'76:62',cxs:'77:71',omni:'76:68',ai:'77:74',qa:'78:77',data:'79:86',training:'82:95',
 ins1:'10:73',ins2:'65:12',ins3:'73:38',r1:'82:101',r2:'83:110',r3:'84:113'}
async function run(map,fmt){
  const r=await(await fetch(`https://api.figma.com/v1/images/${KEY}?ids=${Object.values(map).join(',')}&format=${fmt}&scale=2`,{headers:{'X-Figma-Token':T}})).json()
  if(r.err)throw new Error(r.err)
  for(const [n,id] of Object.entries(map)){const u=r.images[id];if(!u){console.log('skip',n);continue}
    fs.writeFileSync(`public/images/${n}.${fmt}`,Buffer.from(await(await fetch(u)).arrayBuffer()));console.log('saved',n)}}
fs.mkdirSync('public/images',{recursive:true});await run(jpg,'jpg');await run({logo:'48:5'},'png')
