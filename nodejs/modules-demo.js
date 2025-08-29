// Node.js modules and require system
console.log('=== Node.js Modules ===');

// 1. Built-in modules
const os = require('os');
const path = require('path');
const url = require('url');

console.log('1. Built-in modules:');
console.log('Operating System:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory:', Math.round(os.totalmem() / 1024 / 1024), 'MB');
console.log('Free Memory:', Math.round(os.freemem() / 1024 / 1024), 'MB');

// 2. Path module
console.log('\n2. Path module:');
console.log('Current directory:', __dirname);
console.log('Current file:', __filename);
console.log('Joined path:', path.join(__dirname, 'files', 'data.txt'));

// 3. URL module
console.log('\n3. URL module:');
const sampleUrl = 'https://example.com:8080/path/to/page?name=john&age=25#section';
const parsedUrl = url.parse(sampleUrl, true);
console.log('Parsed URL:');
console.log('- Protocol:', parsedUrl.protocol);
console.log('- Host:', parsedUrl.host);
console.log('- Pathname:', parsedUrl.pathname);
console.log('- Query:', parsedUrl.query);

// 4. Process object
console.log('\n4. Process information:');
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Current working directory:', process.cwd());
console.log('Process ID:', process.pid);

// Command line arguments
console.log('Command line arguments:', process.argv);

// Environment variables
console.log('NODE_ENV:', process.env.NODE_ENV || 'not set');

// 5. Global objects
console.log('\n5. Global objects:');
console.log('Global object exists:', typeof global !== 'undefined');
console.log('Buffer class exists:', typeof Buffer !== 'undefined');

// Create a buffer
const buffer = Buffer.from('Hello Node.js', 'utf8');
console.log('Buffer:', buffer);
console.log('Buffer to string:', buffer.toString());

// 6. Timers
console.log('\n6. Timers:');
console.log('Setting timeout...');

setTimeout(() => {
    console.log('Timeout executed after 1 second');
}, 1000);

setImmediate(() => {
    console.log('Immediate executed');
});

console.log('Timers set, continuing execution...');