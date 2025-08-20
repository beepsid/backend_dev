const fetchdata = () =>{
    const promise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Done!")
    }, 1500)
  });
    return promise;
}

setTimeout(() => {
    console.log("time is done!")
    fetchdata()
    .then(text => {
        console.log(text);
        return fetchdata();
    })
    .then(text2=>{
        console.log(text2);
    })
}, 2000);

console.log('hi')
console.log('hello')
