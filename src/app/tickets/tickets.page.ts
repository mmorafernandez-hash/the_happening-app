import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonCard,
  IonIcon,
  IonButton,
  IonFooter,
  IonTabBar,
  IonTabButton
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  checkmarkOutline,
  calendarOutline,
  trophyOutline,
  homeOutline,
  ticketOutline,
  notificationsOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonContent,
    IonCard,
    IonIcon,
    IonButton,
    IonFooter,
    IonTabBar,
    IonTabButton
  ],
})
export class TicketsPage {
  constructor() {
    addIcons({
      checkmarkOutline,
      calendarOutline,
      trophyOutline,
      homeOutline,
      ticketOutline,
      notificationsOutline,
      personOutline
    });
  }
}
