import {Component} from "@angular/core";
import { PostDemoService } from '../services/postdemo.service';
import { HttpErrorResponse } from "@angular/common/http";

@Component ({
    selector:"post",
    templateUrl:"./postdemo.component.html"
})

export class PostDemoComponent {
    private result:any;
    constructor(private service:PostDemoService){}

    public sendData(data) {
        this.service.uppercase(data).subscribe(
            (posRes)=>{
                this.result = posRes;
            },
            (errRes:HttpErrorResponse)=>{
                if (errRes.error instanceof Error){
                    console.log("client side error");
                }else{
                    console.log("server side error");
                }
            }
        );
    }
};
