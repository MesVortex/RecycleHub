import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionRequest, CollectionState } from '../../store/collection/collection.state';
import { AuthService } from '../../core/services/auth.service';
import { updateCollectionRequestStatus } from '../../store/collection/collection.actions';
import {AsyncPipe, NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-collector-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    NgClass,
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  standalone: true
})
export class CollectorDashboardComponent implements OnInit {
  cityRequests$: Observable<CollectionRequest[]>;
  collectorCity: string;

  constructor(
    private store: Store<{ collection: CollectionState }>,
    private authService: AuthService
  ) {
    this.collectorCity = this.authService.getCurrentUser().city;

    this.cityRequests$ = this.store.select(state => state.collection.requests)
      .pipe(
        map(requests => requests.filter(request =>
          request.city === this.collectorCity &&
          request.status === 'pending'
        ))
      );
  }

  ngOnInit(): void {}

  acceptRequest(request: CollectionRequest): void {
    this.store.dispatch(updateCollectionRequestStatus({ id: request.id, status: 'in-progress' }));
  }

  rejectRequest(request: CollectionRequest): void {
    this.store.dispatch(updateCollectionRequestStatus({ id: request.id, status: 'rejected' }));
  }
}
