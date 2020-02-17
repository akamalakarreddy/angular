import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable ({
    providedIn:"root"
})

export class InsertService {
    constructor(private http:HttpClient){}
    public insertRecord(data:any):Observable<any>{
        return this.http.post("http://localhost:8080/product",data);
    };
};