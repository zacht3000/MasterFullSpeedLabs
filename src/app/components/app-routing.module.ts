import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [
  { path: '', redirectTo: '/novedades', pathMatch: 'full' },
  { path: 'novedades', component: DummyComponent},
  { path: 'catalog', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }