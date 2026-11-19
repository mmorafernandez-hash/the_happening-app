import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonDatetime,
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
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonContent,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonDatetime,
    IonCard,
    IonFooter,
    IonTabBar,
    IonTabButton
  ],
})
export class CalendarioPage {

  fechaSeleccionada: string = '2026-09-24';
  textoFecha: string = '24 de septiembre';

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
  cambiarFecha(evento: any) {
    const valor = evento.detail.value;
    if (valor) {
      const fecha = new Date(valor);
      this.textoFecha = fecha.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long'
      });
    }
  }
}
