var name='sid';
const age=21;
var hashobbies=true;

function user(username,userage,userhobbie){
    return(
        'Name: ' + username +
    ',Age: ' + userage +
    ',Hobbies: ' + userhobbie
    )
}

const summarize = (username,userage,userhobbie) => {
    return(
        'Name: ' + username +
    ',Age: ' + userage +
    ',Hobbies: ' + userhobbie
    )
}

const addone= (a) => a+1;

console.log(addone(3))
console.log(user('ayush',22,false))
console.log(summarize('ayush',22,false))