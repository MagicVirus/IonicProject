import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../AuthentificationService/authentication.service';
import {Router} from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(public auth: AuthenticationService, private  router: Router) {}

    canActivate(): boolean {
        if (this.auth.isAuthenticated()) {
            return this.auth.isAuthenticated();
        } else {
            this.router.navigate(['login']);
        }
    }
}
