/**
 * Created by omeralper on 1/15/2017.
 */

var all = require('./all');
var _ = require('underscore');
var io = require('socket.io').listen(all.server);

module.exports.start = function () {
    var numUsers = 0;

    io.on('connection', function (socket) {
        var thisUser = {};

        socket.on('new message', function (message) {
            socket.broadcast.emit('new message', {
                name: thisUser.name,
                message: message
            });
        });

        socket.on('new user', function (userData) {
            if (!_.isEmpty(thisUser)) return;
            thisUser = userData;
            ++numUsers;

            socket.broadcast.emit('user joined', {
                name: thisUser.name
            });
        });

        // when the client emits 'typing', we broadcast it to others
        socket.on('typing', function () {
            socket.broadcast.emit('typing', {
                name: thisUser.name
            });
        });

        // when the client emits 'stop typing', we broadcast it to others
        socket.on('stop typing', function () {
            socket.broadcast.emit('stop typing', {
                name: thisUser.name
            });
        });

        // when the user disconnects.. perform this
        socket.on('disconnect', function () {
            if (!_.isEmpty(thisUser)) {
                --numUsers;

                // echo globally that this client has left
                socket.broadcast.emit('user left', {
                    name: socket.name,
                    numUsers: numUsers
                });
            }
        });
    });
};

