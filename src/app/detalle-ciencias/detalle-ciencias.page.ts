import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { IonContent, IonIcon, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline, timeOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-detalle-ciencias',
  templateUrl: './detalle-ciencias.page.html',
  styleUrls: ['./detalle-ciencias.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon],
})
export class DetalleCienciasPage {
  private location = inject(Location);
  private toastCtrl = inject(ToastController);

  asistire: boolean = false;

  constructor() {
    addIcons({ arrowBackOutline, timeOutline, locationOutline });
  }

  volver() {
    this.location.back();
  }

  async confirmarAsistencia() {
    this.asistire = !this.asistire;
    if (this.asistire) {
      const toast = await this.toastCtrl.create({
        message: 'Te has apuntado a la Feria de Ciencias',
        duration: 2000,
        color: 'success',
        position: 'bottom'
      });
      await toast.present();
    }
  }
}
