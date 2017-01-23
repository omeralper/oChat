"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by omeralper on 12/18/2016.
 */
var core_1 = require("@angular/core");
var socket_injectable_1 = require("./services/socket.injectable");
var authentication_injectable_1 = require("./services/authentication.injectable");
var AppComponent = (function () {
    function AppComponent(changeDetector, socketService, authenticationService) {
        var _this = this;
        this.changeDetector = changeDetector;
        this.socketService = socketService;
        this.authenticationService = authenticationService;
        this.currentTypers = [];
        socketService.socket.on('typing', function (typer) {
            _this.currentTypers.push(typer);
        });
        socketService.socket.on('stop typing', function (typer) {
            var i = _this.currentTypers.indexOf(typer);
            _this.currentTypers.splice(i, 1);
        });
        socketService.socket.on('user joined', function (data) {
            _this.joinedUser = data.name;
        });
        socketService.socket.on('new message', function (data) {
            var newDialog = $('<div>')
                .html(data.message)
                .addClass('well');
            $('#dialogContainer').append(newDialog);
        });
    }
    AppComponent.prototype.typing = function () {
        var thisUser = this.authenticationService.currentUser;
        this.socketService.socket.emit('typing', { name: thisUser.name });
    };
    AppComponent.prototype.send = function () {
        this.socketService.socket.emit('new message', this.message);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.html'
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
        socket_injectable_1.SocketService,
        authentication_injectable_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map