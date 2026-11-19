import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  qrCodeOutline,
  searchOutline,
  checkmarkOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-pasar-lista',
  templateUrl: './pasar-lista.page.html',
  styleUrls: ['./pasar-lista.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonButton, IonIcon],
})
export class PasarListaPage {

  constructor() {
    addIcons({
      arrowBackOutline,
      qrCodeOutline,
      searchOutline,
      checkmarkOutline
    });
  }

}
