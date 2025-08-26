const person = {
    name:'sid',
    age: 21,
    greet(){
        console.log('This is '+ person.name);
    }
};

const personname=(persondata) =>{
    console.log(persondata.name);
};

const personinfo = ({name, age})=>{
    console.log(name);
    console.log(age);
}

personname(person);
personinfo(person);

const hobbies = ['sports','cooking','running'];
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1, hobby3);
