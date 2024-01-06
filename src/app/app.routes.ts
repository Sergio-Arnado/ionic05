import { Routes } from '@angular/router';
import { AppInicioComponent } from './app-inicio/app-inicio.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'configuraciones',
    loadComponent: () => import('./Pagina/configuraciones/configuraciones.page').then( m => m.ConfiguracionesPage)
  },
    
  { path: 'app-app-inicio', 
    component: AppInicioComponent
  }
] ;