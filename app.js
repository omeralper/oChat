// /**
//  * Created by omeralper on 12/14/2016.
//  */
var express = require('express')
var all = require('./server/all');
var app = all.app;
var server = all.server;
var chatServer = require('./server/chatServer');
var path = require('path');

chatServer.start();
// app.use('/node_modules',express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(__dirname));


app.get('/', function (req, res) {
    res.sendFile('index.html',{ root: path.join( __dirname , '..' )});
});


app.set('port', (process.env.PORT || 5000));

server.listen(app.get('port'), function () {
    console.log('Example app listening on port ', app.get('port'));
});