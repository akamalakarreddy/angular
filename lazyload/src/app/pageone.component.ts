import { Component } from '@angular/core';

@Component ({
    selector:'pageone',
    templateUrl:'./pageone.component.html'
})

export class PageOneComponent {
    private var_one:string;
    constructor () {
        this.var_one = "this is first text";
    }  
}