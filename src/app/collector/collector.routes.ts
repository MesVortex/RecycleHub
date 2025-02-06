import { Routes } from '@angular/router';
import { CollectorDashboardComponent } from './dashboard/dashboard.component';
import { CollectorTaskComponent } from './task/task.component';

export const COLLECTOR_ROUTES: Routes = [
  { path: 'dashboard', component: CollectorDashboardComponent },
  { path: 'task/:id', component: CollectorTaskComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
];
