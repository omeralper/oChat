/**
 * Created by omeralper on 1/16/2017.
 */

var express = require('express')
var http = require('http');
var app = express();
module.exports.app = app;
module.exports.server =  http.createServer(app);