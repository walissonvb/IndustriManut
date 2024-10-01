import { Component, OnInit } from '@angular/core';
import { RelatorioService, Relatorio } from 'src/app/servico/relatorio.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';
import { WhatsonPage } from 'src/app/whatson/whatson.page';

@Component({
  selector: 'app-allordem',
  templateUrl: './allordem.page.html',
  styleUrls: ['./allordem.page.scss'],
})
export class AllordemPage implements OnInit {
  segmentValue: 'LIDOS' | 'NÃO LIDOS' = 'NÃO LIDOS';  // Segment toggle between read and unread
  selectedRelatorio: Relatorio | null = null;
  showForm = true;
  ordemServico: Relatorio[] = [];

  constructor(
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth,
    private relatServ: RelatorioService
  ) {}

  async ngOnInit() {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        const userId = user.uid;
        console.log(`Authenticated User ID: ${userId}`);
        this.ordemServico = await this.relatServ.readData03(user.uid);
        console.log(`Data retrieved: ${this.ordemServico}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  opemRelato(id: string) {
    this.selectedRelatorio = this.ordemServico.find(r => r.id === id) || null;
    this.showForm = !this.showForm;
    if (this.selectedRelatorio) {
      this.selectedRelatorio.lido = true;
      this.updateRelatorio(this.selectedRelatorio);
    }
  }

  async updateRelatorio(relatorio: Relatorio) {
    try {
      await this.relatServ.updateData03(relatorio.id, relatorio);
      console.log('Successfully updated the report!');
    } catch (error) {
      console.error('Error updating report:', error);
    }
  }

  async deleteRelat(id: string) {
    try {
      await this.relatServ.deleteData03(id);
      this.fecharModal();
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  }

  toggleView() {
    this.showForm = !this.showForm;
  }

  async pesquisar() {
    this.modalCtrl.create({ component: WhatsonPage }).then(modal => modal.present());
  }

  fecharModal() {
    this.modalCtrl.dismiss();
  }
}
