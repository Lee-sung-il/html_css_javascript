import fs from 'fs';
const folderName = process.argv[2] || 'Project';

// fs.mkdir('DOGS', { recursive: true }, (err) => {
//   console.log('IN THE CALLBACK!!');
//   if (err) throw err;
// });

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
  fs.writeFileSync(`${folderName}/style.css`, '');
} catch (e) {
  console.log('SOMETHING WENT WRONG!');
  console.log(e);
}
