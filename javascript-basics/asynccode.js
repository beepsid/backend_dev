console.log('hi this is async code!, give us a moment');

const fetchdata = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching data...');
            resolve(); // Add resolve to complete the promise
        }, 1000);
    });
};

const waittime = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('just a moment...');
            resolve();
        }, 1000);
    });
};

const displaydata = (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data fetched...');
            console.log(`hi my name is ${name} and i am ${age}`);
            resolve(); // Add resolve to complete the promise
        }, 1500);
    });
};

setTimeout((name, age) => {
    fetchdata()
    .then(() => waittime())
    .then(() => displaydata(name, age));
}, 1000, 'sid', '21');