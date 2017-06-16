#!/usr/bin/node
const http = require('http');
const fs = require('fs');

let json = "{}";

fs.readFile('./data/data.json', (err, data) => {
    if(err) {
        console.log(`${new Date()}: failed to read file`);
        console.log(err);
        json = null;
    } else {
        json = data;
    }
})
const server = http.createServer((req, res) => {
    if(!json) {
        res.statusCode = 500;
        res.end()
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(json);
});

console.log(`${new Date()}: server listening on port 3000`)
server.listen(3000, 'localhost');