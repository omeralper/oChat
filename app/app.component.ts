/**
 * Created by omeralper on 12/18/2016.
 */
import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
    selector: 'my-app',
    templateUrl : 'app/app.html'
})

export class AppComponent {
    constructor(){
        var socket = io();
        socket.emit('add user', 'omer');
    }
}
