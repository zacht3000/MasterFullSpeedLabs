import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './components/app-routing.module';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { CatalogModule } from './components/catalog/catalog.module';
import { BannerPromotionComponent } from './components/banner-promotion/banner-promotion.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerPromotionComponent,
  ],
  imports: [
    BrowserModule,
    MdbCollapseModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CatalogModule,
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
