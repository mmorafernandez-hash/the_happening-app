import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonChip,
  IonCard,
  IonFooter,
  IonTabBar,
  IonTabButton
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  notificationsOutline,
  optionsOutline,
  calendarOutline,
  homeOutline,
  ticketOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-otros-eventos',
  templateUrl: './otros-eventos.page.html',
  styleUrls: ['./otros-eventos.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonContent,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonChip,
    IonCard,
    IonFooter,
    IonTabBar,
    IonTabButton
  ],
})
export class OtrosEventosPage {
  constructor() {
    addIcons({
      notificationsOutline,
      optionsOutline,
      calendarOutline,
      homeOutline,
      ticketOutline,
      personOutline
    });
  }
}
