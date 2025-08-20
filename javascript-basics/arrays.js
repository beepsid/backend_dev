const hobbies = ['sports','cooking','dancing'];
for (let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'hobby:' + hobby));
console.log(hobbies);

hobbies.push('programming')
hobbies.unshift('reading');
console.log('After adding elements');
console.log(hobbies);

hobbies.pop();
hobbies.shift();
console.log('After removing elements');
console.log(hobbies);