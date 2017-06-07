import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { TestApiComponent } from './pages/test-api/test-api.component';
import {CommonService} from './services/common.service';
import {TestService} from './services/test.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    AppRoutingModule
  ],
  providers: [CommonService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
