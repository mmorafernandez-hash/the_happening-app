import { Routes } from '@angular/router';

export const routes: Routes = [
  // Si entras en la raíz (localhost:8100), te lleva directo a 'eventos'
  {
    path: '',
    redirectTo: 'eventos',
    pathMatch: 'full',
  },
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
    path: 'pasar-lista',
    loadComponent: () => import('./pasar-lista/pasar-lista.page').then( m => m.PasarListaPage)
  },
];
