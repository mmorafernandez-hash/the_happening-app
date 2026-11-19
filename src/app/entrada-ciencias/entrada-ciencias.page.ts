import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { IonContent, IonIcon, IonModal } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  timeOutline,
  locationOutline,
  checkmarkOutline,
  qrCodeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-entrada-ciencias',
  templateUrl: './entrada-ciencias.page.html',
  styleUrls: ['./entrada-ciencias.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon, IonModal],
})
export class EntradaCienciasPage {
  private location = inject(Location);

  estado: 'asistire' | 'interesa' = 'asistire';
  mostrarEntrada: boolean = false;

  constructor() {
    addIcons({
      arrowBackOutline,
      timeOutline,
      locationOutline,
      checkmarkOutline,
      qrCodeOutline
    });
  }

  volver() {
    this.location.back();
  }

  cambiarEstado(nuevoEstado: 'asistire' | 'interesa') {
    this.estado = nuevoEstado;
  }

  abrirEntrada(estado: boolean) {
    this.mostrarEntrada = estado;
  }
}
