import { mkdir,copyFile,writeFile } from 'node:fs/promises';
for(const route of ['san-pham','ve-dakawa','chat-luong','doanh-nghiep','dai-ly','lien-he']){
 await mkdir(`dist-pages/${route}`,{recursive:true});await copyFile('dist-pages/index.html',`dist-pages/${route}/index.html`);
}
await copyFile('dist-pages/index.html','dist-pages/404.html');await writeFile('dist-pages/.nojekyll','');
