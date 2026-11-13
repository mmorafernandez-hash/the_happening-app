import { Component } from '@angular/core';
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
// 1. Importamos el gestor de iconos y todos los iconos usados en el HTML
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
  // 2. Añadimos todos los componentes de Ionic usados en eventos.page.html
  imports: [
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
    // 3. Registramos todos los iconos para que se muestren en pantalla
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
