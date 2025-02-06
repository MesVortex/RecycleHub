import { Routes } from '@angular/router';
import { RequestCollectionComponent } from './request/request.component';
import { CollectionListComponent } from './list/list.component';

export const COLLECTION_ROUTES: Routes = [
  { path: 'request', component: RequestCollectionComponent },
  { path: 'list', component: CollectionListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // Default route
];
