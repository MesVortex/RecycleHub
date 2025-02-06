import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
  { path: 'profile', loadComponent: () => import('./user/profile/profile.component').then(m => m.ProfileComponent) },
  { path: 'edit-profile', loadComponent: () => import('./user/edit-profile/edit-profile.component').then(m => m.EditProfileComponent) },
  { path: 'collection', loadChildren: () => import('./collection/collection.routes').then(m => m.COLLECTION_ROUTES) },
  { path: 'collector', loadChildren: () => import('./collector/collector.routes').then(m => m.COLLECTOR_ROUTES) },
  { path: 'points', loadChildren: () => import('./points/points.routes').then(m => m.POINTS_ROUTES) },
  { path: '**', redirectTo: 'login' }, // Fallback route for unknown paths
];
