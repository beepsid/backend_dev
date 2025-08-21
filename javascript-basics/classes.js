// Classes and object-oriented programming
console.log('=== Classes ===');

// Basic class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
    }
    
    // Getter
    get info() {
        return `${this.name} (${this.age})`;
    }
    
    // Setter
    set newAge(age) {
        if (age > 0) {
            this.age = age;
        }
    }
    
    // Static method
    static species() {
        return 'Homo sapiens';
    }
}

const john = new Person('John', 30);
console.log(john.greet());
console.log(john.info);
john.newAge = 31;
console.log(john.age);
console.log(Person.species());

// Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call parent constructor
        this.grade = grade;
    }
    
    greet() {
        return `${super.greet()} and I'm in grade ${this.grade}`;
    }
    
    study() {
        return `${this.name} is studying`;
    }
}

const alice = new Student('Alice', 20, 'A');
console.log(alice.greet());
console.log(alice.study());

// Private fields (modern JavaScript)
class BankAccount {
    #balance = 0; // Private field
    
    constructor(owner) {
        this.owner = owner;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount('Bob');
account.deposit(100);
console.log(`Balance: $${account.getBalance()}`);
// console.log(account.#balance); // Error - private field