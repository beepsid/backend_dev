// String methods and manipulation
console.log('=== Strings ===');

const text = 'Hi i am Senzaei';
const uname = 'John';
const age = 25;

// Template literals
const greeting = `Hello, my name is ${uname} and I am ${age} years old`;
console.log(greeting);

// Multi-line strings
const multiLine = `
This is a
multi-line
string
`;
console.log(multiLine);

// String methods
console.log('Length:', text.length);
console.log('Uppercase:', text.toUpperCase());
console.log('Lowercase:', text.toLowerCase());

// Searching
console.log('Includes "Script":', text.includes('Script'));
console.log('Starts with "Java":', text.startsWith('Java'));
console.log('Ends with "some":', text.endsWith('some'));
console.log('Index of "Script":', text.indexOf('Script'));

// Extracting
console.log('Substring:', text.substring(0, 10));
console.log('Slice:', text.slice(0, 10));
console.log('Slice negative:', text.slice(-7));

// Replacing
console.log('Replace:', text.replace('awesome', 'amazing'));
console.log('Replace all:', text.replaceAll('a', '@'));

// Splitting and joining
const words = text.split(' ');
console.log('Split:', words);
console.log('Join:', words.join('-'));

// Trimming
const messyString = '  hello world  ';
console.log(`Original: ${messyString}`);
console.log(`Trimmed: ${messyString.trim()}`);

// Padding
const number = '5';
console.log('Pad start:', number.padStart(3, '0')); // "005"
console.log('Pad end:', number.padEnd(3, '0'));     // "500"

// Character access
console.log('First char:', text[0]);
console.log('Last char:', text[text.length - 1]);
console.log('Char at 4:', text.charAt(5));