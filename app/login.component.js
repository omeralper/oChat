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
var socket_injectable_1 = require("./socket.injectable");
var LoginComponent = (function () {
    function LoginComponent(socketService) {
        this.socketService = socketService;
        this.loginData = {};
    }
    LoginComponent.prototype.login = function () {
        this.socketService.socket.emit('newUser', this.loginData);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: '[login]',
        templateUrl: 'app/login.html',
        styleUrls: ['app/login.css']
    }),
    __metadata("design:paramtypes", [socket_injectable_1.SocketService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map