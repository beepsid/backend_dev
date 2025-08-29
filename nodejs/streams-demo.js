// Streams in Node.js
const fs = require('fs');
const { Readable, Writable, Transform } = require('stream');

console.log('=== Streams in Node.js ===');

// 1. Readable Stream
console.log('1. Creating readable stream:');

class NumberStream extends Readable {
    constructor(options) {
        super(options);
        this.current = 1;
        this.max = 5;
    }
    
    _read() {
        if (this.current <= this.max) {
            this.push(`Number: ${this.current}\n`);
            this.current++;
        } else {
            this.push(null); // End the stream
        }
    }
}

const numberStream = new NumberStream();
numberStream.on('data', (chunk) => {
    process.stdout.write(`Received: ${chunk}`);
});

numberStream.on('end', () => {
    console.log('Number stream ended');
});

// 2. Writable Stream
console.log('\n2. Creating writable stream:');

class LogStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(`[LOG] ${chunk.toString().trim()}`);
        callback();
    }
}

const logStream = new LogStream();
logStream.write('First log message\n');
logStream.write('Second log message\n');
logStream.end('Final log message\n');

// 3. Transform Stream
console.log('\n3. Creating transform stream:');

class UpperCaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase();
        callback(null, upperCased);
    }
}

const upperCaseTransform = new UpperCaseTransform();

// Create a simple readable stream
const textStream = new Readable({
    read() {
        this.push('hello world\n');
        this.push('node.js streams\n');
        this.push('are awesome\n');
        this.push(null);
    }
});

console.log('Transforming text to uppercase:');
textStream
    .pipe(upperCaseTransform)
    .pipe(process.stdout);

// 4. File streams
console.log('\n4. File streams:');

// Create a sample file first
fs.writeFileSync('sample-data.txt', 'Line 1: Hello World\nLine 2: Node.js Streams\nLine 3: File Processing\n');

// Read file using stream
const readStream = fs.createReadStream('sample-data.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('output.txt');

console.log('Reading file with stream:');
readStream.on('data', (chunk) => {
    console.log('Read chunk:', chunk.length, 'characters');
});

readStream.on('end', () => {
    console.log('File reading completed');
});

// 5. Pipe example
console.log('\n5. Piping streams:');

setTimeout(() => {
    const sourceStream = fs.createReadStream('sample-data.txt');
    const destinationStream = fs.createWriteStream('copied-file.txt');
    
    sourceStream.pipe(destinationStream);
    
    destinationStream.on('finish', () => {
        console.log('File copied using streams');
    });
}, 1000);

// 6. Stream events
console.log('\n6. Stream events:');
const eventStream = fs.createReadStream('sample-data.txt');

eventStream.on('open', () => {
    console.log('Stream opened');
});

eventStream.on('close', () => {
    console.log('Stream closed');
});

eventStream.on('error', (error) => {
    console.error('Stream error:', error.message);
});

// Consume the stream
eventStream.on('data', () => {}); // Just consume, don't log