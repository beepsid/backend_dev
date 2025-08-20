const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>Hi from Express!</h1>');
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware');
});

app.listen(3000);
console.log('Server is running on port 3000');