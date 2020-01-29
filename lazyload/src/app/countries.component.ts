import { Component } from "@angular/core";
import { CountriesService } from './countries.service';
import { HttpErrorResponse  } from "@angular/common/http";

@Component ({
    selector:'countries',
    templateUrl:'./countries.component.html'
})

export class CountriesComponent{
    private result:any;

    constructor(private service:CountriesService) {}

    ngOnInit() {
        this.service.getCountries()
        .subscribe((posRes)=>{
                this.result = posRes;
            },(errRes:HttpErrorResponse)=>{
                console.log(errRes);
            }
        );
    }
}
