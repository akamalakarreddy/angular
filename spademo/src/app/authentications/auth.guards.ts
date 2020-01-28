import { Injectable } from '@angular/core';

@Injectable ({
    providedIn:'root'
})

export class AuthGuards {
    canActivate():boolean{
        return confirm( 'do u want to enter first page');
    };
    canDeactivate():boolean {
        return confirm('do uwant leave component');
    };
    canActivateChild():boolean {
        return confirm('123456789');
    };
}