// /**
//  * Created by omeralper on 12/14/2016.
//  */
var express = require('express')
    , http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

io.on('connection', function(socket){
    console.log('web socket is shaking!');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


// app.use('/node_modules',express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(__dirname));


app.get('/', function (req, res) {
    res.sendFile('index.html',{ root: path.join( __dirname , '..' )});
});


app.set('port', (process.env.PORT || 5000));

server.listen(app.get('port'), function () {
    console.log('Example app listening on port ', app.get('port'));
});