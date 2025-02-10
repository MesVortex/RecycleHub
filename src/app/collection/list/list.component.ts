import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {CollectionRequest, CollectionState} from '../../store/collection/collection.state';
import {deleteCollectionRequest, loadCollectionRequests} from '../../store/collection/collection.actions';
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-collection-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    TitleCasePipe,
    AsyncPipe,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class CollectionListComponent {
  requests$: Observable<CollectionRequest[]>;

  constructor(private store: Store<{ collection: CollectionState }>) {
    this.requests$ = this.store.select((state) => state.collection.requests);
    this.store.dispatch(loadCollectionRequests()); // Load requests on init
  }

  isPending(request: CollectionRequest): boolean {
    return request.status === 'pending';
  }
}
