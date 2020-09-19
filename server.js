"use strict";
let http = require('http');
let express = require('express');

let server=express();
server.listen(8888);
console.log('Server is running on port 8888');


server.use(express.static(__dirname));

server.get('/', function(req, res){
    console.log("Під'єднання від дорогоцінного клієнта!");
    res.sendFile(__dirname+"/formawithprevent.html");
});

server.get('/reply', function(req, res){
    console.log("Отримано запит від форми");
    console.log("Введене число - "+req.query.data);
    res.writeHead(200,{"Content-type": "text/plain; charset=utf-8"});
    res.write("Введене число - "+req.query.data);
    res.end();
});