import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CardLayoutComponent } from '../card-layout/card-layout.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CardLayoutComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardLayoutComponent,
  ],
})

export class CatalogModule { }
