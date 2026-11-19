import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  // Pantalla principal (TODOS)
  {
    path: 'eventos',
    loadComponent: () => import('./eventos/eventos.page').then((m) => m.EventosPage),
  },
  // Pantalla DEPORTES
  {
    path: 'deportes',
    loadComponent: () => import('./deportes/deportes.page').then((m) => m.DeportesPage),
  },
  // Pantalla OTROS EVENTOS (ya sin duplicar)
  {
    path: 'otros-eventos',
    loadComponent: () => import('./otros-eventos/otros-eventos.page').then((m) => m.OtrosEventosPage),
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./notificaciones/notificaciones.page').then( m => m.NotificacionesPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then( m => m.CalendarioPage)
  },
  {
    path: 'tickets',
    loadComponent: () => import('./tickets/tickets.page').then( m => m.TicketsPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'nuevo-evento',
    loadComponent: () => import('./nuevo-evento/nuevo-evento.page').then( m => m.NuevoEventoPage)
  },
  {
    path: 'informes',
    loadComponent: () => import('./informes/informes.page').then( m => m.InformesPage)
  },
  {
    path: 'detalle-futbol',
    loadComponent: () => import('./detalle-futbol/detalle-futbol.page').then( m => m.DetalleFutbolPage)
  },
  {
    path: 'detalle-ciencias',
    loadComponent: () => import('./detalle-ciencias/detalle-ciencias.page').then( m => m.DetalleCienciasPage)
  },
  {
    path: 'detalle-cultura',
    loadComponent: () => import('./detalle-cultura/detalle-cultura.page').then( m => m.DetalleCulturaPage)
  },
  {
    path: 'entrada-cultural',
    loadComponent: () => import('./entrada-cultural/entrada-cultural.page').then(m => m.EntradaCulturalPage)
  },
  {
    path: 'entrada-ciencias',
    loadComponent: () => import('./entrada-ciencias/entrada-ciencias.page').then( m => m.EntradaCienciasPage)
  },
  {
    path: 'resultados-futbol',
    loadComponent: () => import('./resultados-futbol/resultados-futbol.page').then( m => m.ResultadosFutbolPage)
  },
  {
    path: 'pasar-lista',
    loadComponent: () => import('./pasar-lista/pasar-lista.page').then(m => m.PasarListaPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
