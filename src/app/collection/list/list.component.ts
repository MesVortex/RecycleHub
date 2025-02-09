import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {CollectionRequest, CollectionState} from '../../store/collection/collection.state';
import {deleteCollectionRequest, loadCollectionRequests} from '../../store/collection/collection.actions';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss'],
  standalone: true
})
export class CollectionListComponent {
  requests$: Observable<CollectionRequest[]>;

  constructor(private store: Store<{ collection: CollectionState }>) {
    this.requests$ = this.store.select((state) => state.collection.requests);
    this.store.dispatch(loadCollectionRequests()); // Load requests on init
  }

  onDeleteRequest(id: string) {
    this.store.dispatch(deleteCollectionRequest({ id }));
  }
}
