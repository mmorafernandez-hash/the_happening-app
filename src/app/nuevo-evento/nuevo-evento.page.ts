import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonToggle,
  ToastController
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  calendarOutline,
  timeOutline,
  chevronDownOutline,
  checkmarkCircleOutline,
  bookmarkOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.page.html',
  styleUrls: ['./nuevo-evento.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    IonContent,
    IonButton,
    IonIcon,
    IonToggle
  ],
})
export class NuevoEventoPage {
  private toastCtrl = inject(ToastController);
  private router = inject(Router);

  titulo: string = '';
  categoriaSeleccionada: string = 'Ciencias';
  fecha: string = '24 sep';
  horario: string = '10:00-14:00';
  lugar: string = 'Patio Central';
  aforo: number = 50;
  inscripcionHasta: string = '20 sep';
  listaEspera: boolean = true;

  constructor() {
    addIcons({
      arrowBackOutline,
      calendarOutline,
      timeOutline,
      chevronDownOutline,
      checkmarkCircleOutline,
      bookmarkOutline
    });
  }

  seleccionarCategoria(cat: string) {
    this.categoriaSeleccionada = cat;
  }

  async publicarEvento() {
    const nombre = this.titulo.trim() || 'Nuevo evento';
    await this.mostrarToast(
      `¡"${nombre}" publicado en ${this.lugar}!`,
      'checkmark-circle-outline',
      'toast-morado'
    );
    this.router.navigateByUrl('/eventos');
  }

  async guardarBorrador() {
    await this.mostrarToast(
      'Borrador guardado correctamente',
      'bookmark-outline',
      'toast-verde'
    );
    this.router.navigateByUrl('/perfil');
  }

  private async mostrarToast(mensaje: string, icono: string, claseColor: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2500,     // Se cierra solo tras 2,5 segundos
      position: 'top',
      icon: icono,
      cssClass: claseColor
    });
    await toast.present();
  }
}
