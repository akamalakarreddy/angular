import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostDemoComponent } from './components/postdemo.component';

@NgModule({
  declarations: [
    AppComponent,PostDemoComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [PostDemoComponent]
})
export class AppModule { }
