// Function declarations and expressions
console.log('=== Functions ===');

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const greetExpression = function(name) {
    return `Hi, ${name}!`;
};

// Arrow functions
const greetArrow = (name) => `Hey, ${name}!`;
const greetArrowShort = name => `Yo, ${name}!`;

console.log(greet('Alice'));
console.log(greetExpression('Bob'));
console.log(greetArrow('Charlie'));
console.log(greetArrowShort('Dave'));

// Default parameters
const greetWithDefault = (name = 'World') => `Hello, ${name}!`;
console.log(greetWithDefault());
console.log(greetWithDefault('JavaScript'));

// Rest parameters
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3, 4, 5)); // 15

// Higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Total:', total);