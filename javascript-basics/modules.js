// Module system (ES6 modules and CommonJS)
console.log('=== Modules ===');

// This file demonstrates module concepts
// In real projects, you'd split these into separate files

// CommonJS (Node.js style) - what you're using now
console.log('CommonJS exports:');

// Exporting functions
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Export multiple functions
const mathUtils = {
    add,
    multiply,
    subtract: (a, b) => a - b,
    divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero'
};

// In a real module file, you'd do:
// module.exports = mathUtils;
// or
// exports.add = add;
// exports.multiply = multiply;

console.log('Math utils:', mathUtils);
console.log('Add 5 + 3:', mathUtils.add(5, 3));

// ES6 Modules (modern JavaScript)
// These would be in separate files with .mjs extension or type: "module" in package.json

/*
// math.js
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export default function subtract(a, b) {
    return a - b;
}

// main.js
import subtract, { add, multiply } from './math.js';
import * as math from './math.js';

console.log(add(2, 3));
console.log(math.multiply(4, 5));
*/

// Demonstrating require (CommonJS)
// const fs = require('fs'); // Built-in module
// const express = require('express'); // External module
// const myModule = require('./myModule'); // Local module

console.log('Module system concepts covered!');
console.log('- CommonJS: require/module.exports');
console.log('- ES6 Modules: import/export');
console.log('- Default vs named exports');
console.log('- Importing built-in, external, and local modules');