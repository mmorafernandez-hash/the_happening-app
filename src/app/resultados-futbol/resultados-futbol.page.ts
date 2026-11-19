import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonFooter } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  trophyOutline,
  addOutline,
  paperPlaneOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-resultados-futbol',
  templateUrl: './resultados-futbol.page.html',
  styleUrls: ['./resultados-futbol.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonIcon, IonFooter],
})
export class ResultadosFutbolPage {

  constructor() {
    addIcons({
      arrowBackOutline,
      trophyOutline,
      addOutline,
      paperPlaneOutline
    });
  }

}
