import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud.component';
import { ModalModule  } from "./_modal/modal.module";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [CrudComponent]
})

export class AppModule { }
