import fs from 'fs';
import path from 'path';

let output = [];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (['node_modules', 'dist', '.git', 'assets'].includes(file)) return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (['.jsx', '.js', '.css', '.html'].includes(path.extname(file))) {
      results.push(fullPath);
    }
  });
  return results;
}

try {
  let files = walk('src');
  if (fs.existsSync('index.html')) files.push('index.html');

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.toLowerCase().includes('club')) {
        output.push(`${file}:${idx + 1}: ${line.trim()}`);
      }
    });
  });

  fs.writeFileSync('search-results.txt', output.join('\n'));
  console.log('Search completed successfully. Results written to search-results.txt');
} catch (err) {
  fs.writeFileSync('search-results.txt', 'Error: ' + err.stack);
  console.error(err);
}
