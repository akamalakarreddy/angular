import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index.component';
import { PageOneComponent } from './pageone.component';
import { lazyRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,IndexComponent,PageOneComponent,
  ],
  imports: [
    BrowserModule,lazyRoutes
  ],
  providers: [],
  bootstrap: [IndexComponent]
})

export class AppModule { }
