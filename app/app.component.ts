/**
 * Created by omeralper on 12/18/2016.
 */
import {Component, ChangeDetectorRef} from '@angular/core';
import {SocketService} from "./services/socket.injectable";
import {AuthenticationService} from "./services/authentication.injectable";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html'
})

export class AppComponent {
    private currentTypers = [];
    public message;
    private joinedUser: string;
    constructor(private changeDetector: ChangeDetectorRef,
                private socketService: SocketService,
                private authenticationService: AuthenticationService) {
        socketService.socket.on('typing', (typer) => {
            this.currentTypers.push(typer);
        });

        socketService.socket.on('stop typing', (typer) => {
            let i = this.currentTypers.indexOf(typer);
            this.currentTypers.splice(i, 1);
        });

        socketService.socket.on('user joined', (data) => {
            this.joinedUser = data.name;
        });

        socketService.socket.on('new message', (data) => {
            let newDialog = $('<div>')
                .html(data.message)
                .addClass('well');

            $('#dialogContainer').append(newDialog);
        });
    }

    typing() {
        let thisUser = this.authenticationService.currentUser;
        this.socketService.socket.emit('typing', {name: thisUser.name});
    }

    send() {
        this.socketService.socket.emit('new message', this.message);
    }

}
