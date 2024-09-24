import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPageRoutingModule } from './pagina-routing.module';

import { Pagina01Page } from './pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPageRoutingModule
  ],
  declarations: [Pagina01Page]
})
export class PaginaPageModule {}
