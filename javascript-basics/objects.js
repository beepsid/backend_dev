const person ={
    name: 'sid',
    age: 21,
    greet(){
        console.log('Hi I am ' + this.name + ' and i am ' + this.age + ' years old.');
    }
};

person.greet();