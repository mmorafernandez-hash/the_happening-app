import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- AÑADE ESTA LÍNEA
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
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  standalone: true,
  imports: [
    RouterLink, // <-- Y AÑÁDELO AQUÍ DENTRO
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
export class EventosPage {
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
