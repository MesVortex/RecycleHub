import { Routes } from '@angular/router';
import { PointsSummaryComponent } from './summary/summary.component';
import { RedeemPointsComponent } from './redeem/redeem.component';

export const POINTS_ROUTES: Routes = [
  { path: 'summary', component: PointsSummaryComponent },
  { path: 'redeem', component: RedeemPointsComponent },
  { path: '', redirectTo: 'summary', pathMatch: 'full' }, // Default route
];
