// File system operations
const fs = require('fs');
const path = require('path');

//synchronous read
try{
    const data = fs.readFileSync('package.json','utf8');
    console.log('Package.json exists, size:', data.length, 'characters');
}catch(error){
    console.log('Package.json not found in current directory')
}

//asyncrhonous read
fs.readFile('package.json','utf8',(err, data)=>{
    if(err){
        console.log('Async read: Package.json not found');
    }else{
        console.log('Async read: Package.json found');
    }
});

const sampleData=`hello from node.js
this file was created at: ${new Date().toISOString()}
current directory: ${process.cwd()}`

// Synchronous write
fs.writeFileSync('sample.txt',sampleData)
console.log('created sampledata.txt synchronously')

//Asynchronous write
fs.writeFile('async-sample.txt', sampleData, (err)=>{
    if(err){
        console.log('Error writing async file',err)
    }else{
        console.log('Created async-sample.txt asyncrhonously')
    }
});

//checking if file exists, if not it creates a new one

if(fs.existsSync('temp')){
    console.log('temp directory exists');
}else{
    (fs.mkdirSync('temp'))
    console.log('created temp directory');
};

//reading from file
const files=fs.readdirSync('.');
console.log('Current directory files:', files.slice(0,5)); //slicing only first 5 items

//getting file stats
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

//path operations
const filePath = '/users/john/documents/file.txt';
console.log('Full path:', filePath);
console.log('Directory:', path.dirname(filePath));
console.log('Filename:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Joined path:', path.join('users', 'john', 'documents', 'file.txt'));
