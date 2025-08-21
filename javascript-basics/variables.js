// Variable declarations and scope
console.log('=== Variables & Scope ===');

// var, let, const differences
var oldWay = 'function scoped';
let newWay = 'block scoped';
const constant = 'cannot be reassigned';

console.log(oldWay, newWay, constant);

// Block scope demonstration
if (true) {
    var varVariable = 'I leak out!';
    let letVariable = 'I stay in block';
    const constVariable = 'Me too!';
}

console.log(varVariable); // Works
// console.log(letVariable); // Error
// console.log(constVariable); // Error

// Hoisting example
console.log(hoistedVar); // undefined (not error)
var hoistedVar = 'I am hoisted';
console.log(hoistedVar); 

// Data types
console.log('\n=== Data Types ===');
let string = 'Hello';
let number = 42;
let boolean = true;
let nullvalue = null;
let udvalue = undefined;
let symbol = Symbol('id');
let bigint = 123n;

console.log(typeof string, typeof number, typeof boolean);
console.log(typeof nullvalue, typeof udvalue, typeof symbol);