// Function declaration
function greet(name1, name2) {
    return `Hello, ${name1} and ${name2}!`;
}

// Function expression
const greetExpression = function(name, n) {
    return `Hi, ${name}!, and my number is ${n}`;
};

// Arrow functions
const greetArrow = (name) => `Hey, ${name}!`;
const greetArrowShort = name => `Yo, ${name}!`;

console.log(greet('Alice', 'Alex'));
console.log(greetExpression('Bob',68582));
console.log(greetArrow('Charlie'));
console.log(greetArrowShort('Dave'));

//more arrow functions
const num =[1,2,3,4,5];
const double = num.map(n=>n*2);
console.log(double);

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