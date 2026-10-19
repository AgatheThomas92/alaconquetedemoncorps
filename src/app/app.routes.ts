import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/accueil/accueil.component').then((m) => m.Accueil),
    title: 'Accueil — ALCC Réflexologie',
  },
  {
    path: 'reservation',
    loadComponent: () => import('./pages/reservation/reservation.component').then((m) => m.Reservation),
    title: 'Réservation — ALCC Réflexologie',
  }
];