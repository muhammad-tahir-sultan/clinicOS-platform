const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            const regex = /from ['"].*generated\/prisma['"];?/g;

            if (regex.test(content)) {
                const newContent = content.replace(regex, `from '@prisma/client';`);
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Fixed: ${fullPath}`);
            }
        }
    }
}

walkDir(srcDir);
console.log('Done src files!');

const seedPath = path.join(__dirname, 'prisma', 'seed.ts');
if (fs.existsSync(seedPath)) {
    let content = fs.readFileSync(seedPath, 'utf8');
    const regex = /from ['"].*generated\/prisma['"];?/g;
    if (regex.test(content)) {
        fs.writeFileSync(seedPath, content.replace(regex, `from '@prisma/client';`));
        console.log('Fixed seed script!');
    }
}
