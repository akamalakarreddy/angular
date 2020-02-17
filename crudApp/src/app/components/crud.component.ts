import { Component, OnInit } from '@angular/core';
import { FetchService } from "../services/fetch.service";
import { InsertService } from "../services/insert.service";
import { UpdateService } from "../services/update.service";
import { DeleteService } from "../services/delete.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ModalService } from "../_modal/modal.service";

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styles: []
})
export class CrudComponent implements OnInit {

  private result:any;
  private update_pid:number;
  private update_pname:string;
  private update_pcost:number;
  bodyText:any;
  constructor(private fetch:FetchService,
              private insert:InsertService,
              private update:UpdateService,
              private remove:DeleteService,
              private service:ModalService) { }

  private errCallBack = (errRes:HttpErrorResponse)=>{
      if(errRes.error instanceof Error){
        console.log("client side error");
      }else{
        console.log("server side error");
      }
  };

  ngOnInit() {
    this.fetch.getProducts().subscribe((posRes)=>{
        this.result = posRes;
    },this.errCallBack);
  }

  deleteRecord(data):any{
      console.log(data);
      this.remove.deleteRecord({p_id:data})
          .subscribe((posRes)=>{
            if(posRes.delete === "success"){
              let i = 
                this.result
                  .findIndex((element,index)=>{
                  return element.p_id === data;
               });
               this.result.splice(i,1);
            }else{
              alert("delete fail");
            }
      },this.errCallBack);
  }

  openUpdateModal(id: string,data:any) {
    this.bodyText = data;
    console.log(this.bodyText);
    this.update_pid=data.p_id;
    this.update_pname=data.p_name;
    this.update_pcost=data.p_cost;
    this.service.open(id);
  }

  closeUpdateModal(id: string) {
    this.update.updateRecord({"p_id":this.update_pid,"p_name":this.update_pname,"p_cost":this.update_pcost})
              .subscribe((posRes)=>{
                if(posRes.update === "success"){
                  let i = this.result.findIndex((element,index)=>{
                      return element.p_id == this.update_pid;
                  });   
                  this.result[i].p_name = this.update_pname;
                  this.result[i].p_cost = this.update_pcost;
                  this.service.close(id);
                }
              },this.errCallBack);
    
  }

  cancel(id:string){
    this.service.close(id);
  }




  insertRecord(){
     this.service.open("insert");
  };


  insertR(id,data:any){
     this.insert.insertRecord(data)
                .subscribe((posRes)=>{
        if(posRes.insert === "success"){
            this.result.push(data);
        }else{
            alert("Insert Fail");
        }
        this.service.close(id);
     },this.errCallBack);
  }

  removeR(id){
    this.service.close(id);
  }








}
