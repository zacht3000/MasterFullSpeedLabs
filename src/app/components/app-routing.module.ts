import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { Catalog } from './catalog/catalog';

const routes: Routes = [
  { path: '#', component: DummyComponent },
  { path: 'catalog', component: Catalog }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }