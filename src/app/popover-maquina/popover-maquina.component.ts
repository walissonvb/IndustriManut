import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalPage } from '../maquina/modal/modal.page';
import { Pagina01Page } from '../maquina/pagina/pagina.page';
import { ArvorepecaPage } from '../maquina/arvorepeca/arvorepeca.page';
import { ListpecaPage } from '../maquina/listpeca/listpeca.page';

@Component({
  selector: 'app-popover-maquina',
  templateUrl: './popover-maquina.component.html',
  styleUrls: ['./popover-maquina.component.scss'],
})
export class PopoverMaquinaComponent {

  constructor(
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
  ) { }


  acaoBotao1() {
    this.popoverCtrl.dismiss();
    this.modalCtrl.create({ component: ModalPage }).then((modal) => modal.present());
  }

  acaoBotao2() {
    this.popoverCtrl.dismiss();
    this.modalCtrl.create({ component: Pagina01Page }).then((modal) => modal.present());
  }

  acaoBotao3() {
    this.popoverCtrl.dismiss();
    this.modalCtrl.create({ component: ArvorepecaPage }).then((modal) => modal.present());
  }


}
