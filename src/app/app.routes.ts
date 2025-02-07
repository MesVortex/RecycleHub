import { Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {RoleGuard} from './core/guards/role.guard';
import {UnauthorizedComponent} from './shared/components/unauthorized/unauthorized.component';
import {AuthRedirectGuard} from './core/guards/auth-redirect.guard';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent), canActivate: [AuthRedirectGuard] },
  { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent), canActivate: [AuthRedirectGuard] },
  { path: 'profile', loadComponent: () => import('./user/profile/profile.component').then(m => m.ProfileComponent), canActivate: [AuthGuard] },
  { path: 'edit-profile', loadComponent: () => import('./user/edit-profile/edit-profile.component').then(m => m.EditProfileComponent), canActivate: [AuthGuard] },
  { path: 'collection', loadChildren: () => import('./collection/collection.routes').then(m => m.COLLECTION_ROUTES), canActivate: [AuthGuard] },
  { path: 'collector', loadChildren: () => import('./collector/collector.routes').then(m => m.COLLECTOR_ROUTES), canActivate: [AuthGuard, RoleGuard], data: { role: 'collector' }},
  { path: 'points', loadChildren: () => import('./points/points.routes').then(m => m.POINTS_ROUTES) },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', redirectTo: 'login' }, // Fallback route for unknown paths
];
