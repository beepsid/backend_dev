const person={
    name: 'sid',
    age: 21,
    greet(){
        console.log('Hi, i am ' + person.name());
    }
};

const printname = (persondata) => {
    console.log(persondata.name);
}

const printing = ({name,age}) => {
    console.log(name);
    console.log(age);
}


printname(person);
printing(person);


const hobbies = ['sports', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);