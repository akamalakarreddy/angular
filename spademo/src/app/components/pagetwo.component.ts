import { Component } from '@angular/core';

@Component ({
    selector: 'pagetwo',
    templateUrl:'./pagetwo.component.html'
})

export class PagetwoComponent {
    private var_two:string

    constructor() {
        this.var_two = "this is page two";
    }
}