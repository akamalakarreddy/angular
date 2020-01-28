import { Component } from '@angular/core';

@Component ({
    selector:'firstchild',
    templateUrl:'./firstchild.component.html'
})

export class FirstChildComponent {
    private child_one:string;

    constructor() {
        this.child_one = "this is first children"
    }
}