/**
 * Created by omeralper on 12/18/2016.
 */
import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import {SocketService} from "./socket.injectable";

@Component({
    selector: '[login]',
    templateUrl : 'app/login.html',
    styleUrls:['app/login.css']
})

export class LoginComponent {
    private loginData = <LoginData>{};
    constructor(private socketService:SocketService){

    }

    login(){
        this.socketService.socket.emit('newUser',this.loginData);
    }
}

export interface LoginData{
    email:string;
    password:string;
}
