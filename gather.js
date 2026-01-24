const fs = require('fs');
const path = require('path');

const outFile = 'page_content.md';
const dirs = ['src/pages', 'src/lib'];

// clear file
fs.writeFileSync(outFile, '');

dirs.forEach(dir => {
    const fullDir = path.resolve(dir);
    if (!fs.existsSync(fullDir)) return;
    const files = fs.readdirSync(fullDir);
    files.forEach(file => {
        const ext = path.extname(file);
        if (ext === '.tsx' || ext === '.ts') {
            const fullPath = path.join(fullDir, file);
            // Skip directories if any
            if (fs.statSync(fullPath).isDirectory()) return;

            const content = fs.readFileSync(fullPath, 'utf8');
            const relativePath = path.relative(process.cwd(), fullPath).replace(/\\/g, '/');
            const md = `\n# File: ${relativePath}\n\n\`\`\`${ext.substring(1)}\n${content}\n\`\`\`\n`;
            fs.appendFileSync(outFile, md);
        }
    });
});
console.log('Done');
