import { Component } from "@angular/core";

@Component ({
    selector:'pageone',
    templateUrl:'./pageone.component.html',
})


export class PageoneComponent {
    private var_one:string;

    constructor () {
        this.var_one = "this is page One";
    }
}