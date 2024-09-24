import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina01Page } from './pagina.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPageRoutingModule {}
