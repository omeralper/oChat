/**
 * Created by omeralper on 12/18/2016.
 */
import { Component } from '@angular/core';
import {SocketService} from "./services/socket.injectable";
import {AuthenticationService, UserData} from "./services/authentication.injectable";

@Component({
    selector: '[login]',
    templateUrl : 'app/login.html',
    styleUrls:['app/login.css']
})

export class LoginComponent {
    private userData = <UserData>{};
    constructor(private socketService:SocketService, private authenticationService:AuthenticationService){

    }

    login(){
        this.authenticationService.currentUser = this.userData;
        this.socketService.socket.emit('new user',this.userData);
    }
}

