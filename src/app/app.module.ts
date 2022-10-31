import { SiteLayoutModule } from './site-layout/site-layout.module';
import { OdersModule } from './oders/oders.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
//import {OdersModule} from './oders/oders.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    OdersModule,
    SiteLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
