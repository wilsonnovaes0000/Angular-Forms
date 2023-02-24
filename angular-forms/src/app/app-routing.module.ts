import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () =>
      (await import('./components/header/header.component')).HeaderComponent,
  },
];
