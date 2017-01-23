/**
 * Created by omeralper on 12/18/2016.
 */
import {NgModule}      from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {LoginComponent} from "./login.component";
import {SocketService} from "./services/socket.injectable";
import {NavbarComponent} from "./navbar.component";
import {AuthenticationService} from "./services/authentication.injectable";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [SocketService, AuthenticationService],
    declarations: [AppComponent, LoginComponent, NavbarComponent],
    bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule {
}