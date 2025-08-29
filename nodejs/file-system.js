// File system operations
const fs = require('fs');
const path = require('path');

console.log('=== File System Operations ===');

// 1. Reading files
console.log('1. Reading files:');

// Synchronous read
try {
    const data = fs.readFileSync('package.json', 'utf8');
    console.log('Package.json exists, size:', data.length, 'characters');
} catch (error) {
    console.log('package.json not found in current directory');
}

// Asynchronous read
fs.readFile('package.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Async read: package.json not found');
    } else {
        console.log('Async read: package.json found');
    }
});

// 2. Writing files
console.log('\n2. Writing files:');

const sampleData = `Hello from Node.js!
This file was created at: ${new Date().toISOString()}
Current directory: ${process.cwd()}`;

// Synchronous write
fs.writeFileSync('sample.txt', sampleData);
console.log('Created sample.txt synchronously');

// Asynchronous write
fs.writeFile('async-sample.txt', sampleData, (err) => {
    if (err) {
        console.error('Error writing async file:', err);
    } else {
        console.log('Created async-sample.txt asynchronously');
    }
});

// 3. Directory operations
console.log('\n3. Directory operations:');

// Check if directory exists
if (fs.existsSync('temp')) {
    console.log('temp directory exists');
} else {
    // Create directory
    fs.mkdirSync('temp');
    console.log('Created temp directory');
}

// List directory contents
const files = fs.readdirSync('.');
console.log('Current directory files:', files.slice(0, 5)); // Show first 5

// 4. File stats
console.log('\n4. File information:');
fs.stat('sample.txt', (err, stats) => {
    if (!err) {
        console.log('File stats:');
        console.log('- Size:', stats.size, 'bytes');
        console.log('- Created:', stats.birthtime);
        console.log('- Modified:', stats.mtime);
        console.log('- Is file:', stats.isFile());
        console.log('- Is directory:', stats.isDirectory());
    }
});

// 5. Path operations
console.log('\n5. Path operations:');
const filePath = '/users/john/documents/file.txt';
console.log('Full path:', filePath);
console.log('Directory:', path.dirname(filePath));
console.log('Filename:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Joined path:', path.join('users', 'john', 'documents', 'file.txt'));