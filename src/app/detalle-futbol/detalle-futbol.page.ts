import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { IonContent, IonIcon, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline, timeOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-detalle-futbol',
  templateUrl: './detalle-futbol.page.html',
  styleUrls: ['./detalle-futbol.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon],
})
export class DetalleFutbolPage {
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
        message: 'Te has apuntado al Torneo de Fútbol',
        duration: 2000,
        color: 'success',
        position: 'bottom'
      });
      await toast.present();
    }
  }
}
