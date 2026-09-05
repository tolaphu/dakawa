import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
const base='/dakawa/';
export default defineConfig({
 root:'pages',base,publicDir:'../public',resolve:{alias:{'@':path.resolve('.')}},
 plugins:[{name:'pages-base-path',enforce:'pre',transform(code,id){
  if(!/\/(app|components)\/.*\.(tsx?|css)$/.test(id))return;
  return code.replace(/(["'`])\/(?!\/)(?=(?:assets\/|acuas\/|san-pham["'`]|ve-dakawa["'`]|chat-luong["'`]|doanh-nghiep["'`]|dai-ly["'`]|lien-he["'`]|["'`]))/g,`$1${base}`);
 }},react()],build:{outDir:'../dist-pages',emptyOutDir:true}
});
