import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable } from "rxjs";

@Injectable ({
    providedIn:"root"
})

export class DeleteService {
    constructor(private http:HttpClient){}
    public deleteRecord(data:any):Observable<any>{
        console.log(data);
        return this.http.post("http://localhost:8080/product",data);
    };
};