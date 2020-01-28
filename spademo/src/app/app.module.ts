import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './routes/app.routes';
import { PagetwoComponent } from './components/pagetwo.component';
import { PageoneComponent } from './components/pageone.component';
import { SecondChildComponent } from './components/secondchild.component';
import { FirstChildComponent } from './components/firstchild.component';

@NgModule({
  declarations: [
    AppComponent,IndexComponent,PagetwoComponent,PageoneComponent,SecondChildComponent,FirstChildComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
