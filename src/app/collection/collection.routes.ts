import { Routes } from '@angular/router';
import { RequestCollectionComponent } from './request/request.component';
import { CollectionListComponent } from './list/list.component';
import {EditRequestComponent} from './edit-request/edit-request.component';

export const COLLECTION_ROUTES: Routes = [
  { path: 'request', component: RequestCollectionComponent },
  { path: 'list', component: CollectionListComponent },
  { path: 'edit-request/:id', component: EditRequestComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // Default route
];
