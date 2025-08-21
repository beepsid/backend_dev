// Conditional statements and operators
console.log('=== Conditionals ===');

const age = 25;
const hasLicense = true;

// If-else statements
if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}

// If-else if-else
if (age < 13) {
    console.log('Child');
} else if (age < 20) {
    console.log('Teenager');
} else if (age < 60) {
    console.log('Adult');
} else {
    console.log('Senior');
}

// Ternary operator
const ageStatus = age >= 18 ? 'adult' : 'minor';
console.log(`Status: ${ageStatus}`);

// Logical operators
const canDrive = age >= 16 && hasLicense;
console.log(`Can drive: ${canDrive}`);

const needsPermission = age < 18 || !hasLicense;
console.log(`Needs permission: ${needsPermission}`);

// Switch statement
const day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Start of work week');
        break;
    case 'Friday':
        console.log('TGIF!');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend!');
        break;
    default:
        console.log('Regular day');
}

// Truthy and falsy values
console.log('\n=== Truthy/Falsy ===');
const falsyValues = [false, 0, '', null, undefined, NaN];
const truthyValues = [true, 1, 'hello', [], {}, 'false'];

falsyValues.forEach(val => console.log(`${val} is falsy:`, !val));
truthyValues.forEach(val => console.log(`${val} is truthy:`, !!val));