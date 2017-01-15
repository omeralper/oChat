/**
 * Created by omeralper on 12/18/2016.
 */
import { Component } from '@angular/core';

import {SocketService} from "./socket.injectable";

@Component({
    selector: 'my-app',
    templateUrl : 'app/app.html'
})

export class AppComponent {
    constructor(private socketService:SocketService){

    }
}
