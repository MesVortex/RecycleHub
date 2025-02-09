import { createReducer, on } from '@ngrx/store';
import { CollectionState, initialState } from './collection.state';
import * as CollectionActions from './collection.actions';

export const collectionReducer = createReducer(
  initialState,

  // Add a new collection request
  on(CollectionActions.addCollectionRequest, (state, { request }) => ({
    ...state,
    requests: [...state.requests, request],
  })),

  // Update the status of a collection request
  on(CollectionActions.updateCollectionRequestStatus, (state, { id, status }) => ({
    ...state,
    requests: state.requests.map((request) =>
      request.id === id ? { ...request, status } : request
    ),
  })),

  // Delete a collection request
  on(CollectionActions.deleteCollectionRequest, (state, { id }) => ({
    ...state,
    requests: state.requests.filter((request) => request.id !== id),
  })),

  // Load collection requests
  on(CollectionActions.loadCollectionRequests, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // Load collection requests success
  on(CollectionActions.loadCollectionRequestsSuccess, (state, { requests }) => ({
    ...state,
    requests,
    loading: false,
  })),

  // Load collection requests failure
  on(CollectionActions.loadCollectionRequestsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
