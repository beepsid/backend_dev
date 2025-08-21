// Different types of loops
console.log('=== Loops ===');

const fruits = ['apple', 'banana', 'orange', 'grape'];
const numbers = [1, 2, 3, 4, 5];

// For loop
console.log('For loop:');
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}

// For...of loop (values)
console.log('\nFor...of loop:');
for (const fruit of fruits) {
    console.log(fruit);
}

// For...in loop (indexes/keys)
console.log('\nFor...in loop:');
for (const index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}

// While loop
console.log('\nWhile loop:');
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// Do-while loop
console.log('\nDo-while loop:');
let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 3);

// Array methods (functional loops)
console.log('\nArray methods:');

// forEach
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// map
const uppercased = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercased:', uppercased);

// filter
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log('Long fruits:', longFruits);

// find
const foundFruit = fruits.find(fruit => fruit.startsWith('b'));
console.log('Found fruit:', foundFruit);

// some & every
const hasLongFruit = fruits.some(fruit => fruit.length > 6);
const allStrings = fruits.every(fruit => typeof fruit === 'string');
console.log('Has long fruit:', hasLongFruit);
console.log('All strings:', allStrings);