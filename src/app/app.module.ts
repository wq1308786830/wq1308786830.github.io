import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdSidenavModule, MdTabsModule} from '@angular/material';
import { TestApiComponent } from './pages/test-api/test-api.component';
import {CommonService} from './services/common.service';
import {TestService} from './services/test.service';
import 'hammerjs';
import { SvgsComponent } from './pages/svgs/svgs.component';
import { IndexComponent } from './pages/index/index.component';
import { OutletComponent } from './pages/outlet/outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    SvgsComponent,
    IndexComponent,
    OutletComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdButtonModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdTabsModule
  ],
  providers: [CommonService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
