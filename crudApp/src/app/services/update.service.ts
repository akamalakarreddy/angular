import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable ({
    providedIn:'root'
})

export class UpdateService {
    constructor(private http:HttpClient){}
    public updateRecord(data:any):Observable<any>{
       return this.http.post("http://localhost:8080/product", data);
    };
};