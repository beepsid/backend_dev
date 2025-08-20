const hobbies = ['sports','cooking'];
for (let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'hobby:' + hobby));
console.log(hobbies);

hobbies.push('programming')

console.log(hobbies);