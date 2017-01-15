/**
 * Created by omeralper on 1/15/2017.
 */

import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
    public socket:SocketIOClient.Socket;
    constructor() {
        this.socket = io();
        // this.socket.emit('add user', 'omer');
    }
}