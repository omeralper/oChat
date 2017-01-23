/**
 * Created by omeralper on 1/18/2017.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {
    currentUser: UserData = <UserData>{};

    constructor() {

    }
}

export interface UserData {
    email: string;
    password: string;
    name: string;
}
