const http = require('http');
const express = require('express');

const app = express();  

app.use((req, res, next) => {
    console.log('request received');
    next();
});

app.use ((req, res, next )=> {
    console.log('request processed');
    res.send('Hello World');
});

const server = http.createServer(app);

server.listen(3000);