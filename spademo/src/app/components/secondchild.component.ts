import { Component } from '@angular/core';

@Component ({
    selector:'secondchild',
    templateUrl:'./secondchild.component.html'
})

export class SecondChildComponent {
    private child_two:string;

    constructor() {
        this.child_two = "this is child two"
    }

}