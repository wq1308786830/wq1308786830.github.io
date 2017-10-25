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
import {HeroProfileComponent} from './components/advertising/hero-profile.component';
import {HeroJobAdComponent} from './components/advertising/hero-job-ad.component';
import { AdDirective } from './directives/ad.directive';
import {AdService} from './services/ad.service';
import {AdBannerComponent} from './components/advertising/ad-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    SvgsComponent,
    IndexComponent,
    OutletComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
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
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  providers: [CommonService, TestService, AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
