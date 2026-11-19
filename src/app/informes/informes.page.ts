import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline, downloadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonIcon],
})
export class InformesPage {
  periodoActivo: 'mes' | 'trimestre' | 'curso' = 'mes';

  datosPorPeriodo = {
    mes: {
      participacion: 78,
      eventos: 12,
      categorias: [
        { nombre: 'Ciencias', porcentaje: 82, color: '#ff6337' },
        { nombre: 'Deportes', porcentaje: 74, color: '#ffc409' },
        { nombre: 'Cultural', porcentaje: 65, color: '#1d8cf8' },
      ],
      cursos: [
        { nombre: '1.º ESO', porcentaje: 58 },
        { nombre: '2.º ESO', porcentaje: 81 },
        { nombre: '3.º ESO', porcentaje: 72 },
        { nombre: '4.º ESO', porcentaje: 64 },
        { nombre: '1.º Bach.', porcentaje: 76 },
        { nombre: '2.º Bach.', porcentaje: 52 },
        { nombre: 'Grado Medio', porcentaje: 84 },
        { nombre: 'Grado Sup.', porcentaje: 90 },
      ],
    },
    trimestre: {
      participacion: 84,
      eventos: 34,
      categorias: [
        { nombre: 'Ciencias', porcentaje: 88, color: '#ff6337' },
        { nombre: 'Deportes', porcentaje: 79, color: '#ffc409' },
        { nombre: 'Cultural', porcentaje: 71, color: '#1d8cf8' },
      ],
      cursos: [
        { nombre: '1.º ESO', porcentaje: 69 },
        { nombre: '2.º ESO', porcentaje: 86 },
        { nombre: '3.º ESO', porcentaje: 80 },
        { nombre: '4.º ESO', porcentaje: 74 },
        { nombre: '1.º Bach.', porcentaje: 82 },
        { nombre: '2.º Bach.', porcentaje: 61 },
        { nombre: 'Grado Medio', porcentaje: 88 },
        { nombre: 'Grado Sup.', porcentaje: 93 },
      ],
    },
    curso: {
      participacion: 81,
      eventos: 96,
      categorias: [
        { nombre: 'Ciencias', porcentaje: 85, color: '#ff6337' },
        { nombre: 'Deportes', porcentaje: 82, color: '#ffc409' },
        { nombre: 'Cultural', porcentaje: 76, color: '#1d8cf8' },
      ],
      cursos: [
        { nombre: '1.º ESO', porcentaje: 74 },
        { nombre: '2.º ESO', porcentaje: 84 },
        { nombre: '3.º ESO', porcentaje: 78 },
        { nombre: '4.º ESO', porcentaje: 71 },
        { nombre: '1.º Bach.', porcentaje: 79 },
        { nombre: '2.º Bach.', porcentaje: 66 },
        { nombre: 'Grado Medio', porcentaje: 87 },
        { nombre: 'Grado Sup.', porcentaje: 95 },
      ],
    },
  };

  constructor() {
    addIcons({
      arrowBackOutline,
      downloadOutline,
    });
  }

  get datosActuales() {
    return this.datosPorPeriodo[this.periodoActivo];
  }

  cambiarPeriodo(periodo: 'mes' | 'trimestre' | 'curso') {
    this.periodoActivo = periodo;
  }

  exportarInforme() {
    alert('Informe exportado correctamente en formato PDF.');
  }
}
