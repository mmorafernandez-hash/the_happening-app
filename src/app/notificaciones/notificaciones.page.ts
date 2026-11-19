import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonContent,
  IonButton,
  IonIcon,
  IonFooter,
  IonTabBar,
  IonTabButton
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  notificationsOutline,
  flaskOutline,
  musicalNotesOutline,
  footballOutline,
  checkmarkOutline,
  locationOutline,
  personOutline,
  homeOutline,
  ticketOutline,
  calendarOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonHeader,
    IonContent,
    IonButton,
    IonIcon,
    IonFooter,
    IonTabBar,
    IonTabButton
  ],
})
export class NotificacionesPage {
  constructor() {
    addIcons({
      arrowBackOutline,
      notificationsOutline,
      flaskOutline,
      musicalNotesOutline,
      footballOutline,
      checkmarkOutline,
      locationOutline,
      personOutline,
      homeOutline,
      ticketOutline,
      calendarOutline
    });
  }
}
