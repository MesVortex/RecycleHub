import { createAction, props } from '@ngrx/store';
import { CollectionRequest } from './collection.state';

export const addCollectionRequest = createAction(
  '[Collection] Add Request',
  props<{ request: CollectionRequest }>()
);

export const updateCollectionRequestStatus = createAction(
  '[Collection] Update Request Status',
  props<{ id: string; status: CollectionRequest['status'] }>()
);

export const deleteCollectionRequest = createAction(
  '[Collection] Delete Request',
  props<{ id: string }>()
);

export const loadCollectionRequests = createAction('[Collection] Load Requests');

export const loadCollectionRequestsSuccess = createAction(
  '[Collection] Load Requests Success',
  props<{ requests: CollectionRequest[] }>()
);

export const loadCollectionRequestsFailure = createAction(
  '[Collection] Load Requests Failure',
  props<{ error: string }>()
);
