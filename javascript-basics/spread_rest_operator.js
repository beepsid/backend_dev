hobbies = ['sports', 'cooking'];

copied_array = [...hobbies];
console.log(copied_array);

const person = {
    name: 'sid',
    age: 21,
    greet() {
        console.log('Hi I am ' + this.name);
    },
    hello() {
        console.log('Hi I am ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

copied_person = { ...person };
console.log(copied_person);


//rest operator


const toarray = (a,b,...num) => [a,b,num];
console.log(toarray(1, 2, 3, 5, 6, 6,));