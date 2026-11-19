import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonFooter,
  IonTabBar,
  IonTabButton
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  notificationsOutline,
  addOutline,
  qrCodeOutline,
  barChartOutline,
  ticketOutline,
  logOutOutline,
  chevronForwardOutline,
  homeOutline,
  calendarOutline,
  personOutline,
  moonOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonContent,
    IonButton,
    IonIcon,
    IonFooter,
    IonTabBar,
    IonTabButton
  ],
})
export class PerfilPage {

  constructor() {
    addIcons({
      notificationsOutline,
      addOutline,
      qrCodeOutline,
      barChartOutline,
      ticketOutline,
      logOutOutline,
      chevronForwardOutline,
      homeOutline,
      calendarOutline,
      personOutline,
      moonOutline
    });
  }

  cambiarOscuro() {
    document.body.classList.toggle('oscuro');
  }
}
