import { createReducer, on } from '@ngrx/store';
import { CollectionState, initialState } from './collection.state';
import * as CollectionActions from './collection.actions';

export const collectionReducer = createReducer(
  initialState,

  // Add a new collection request
  on(CollectionActions.addCollectionRequest, (state, { request }) => {
    const activeRequestsCount = state.requests.filter(
      (r) => r.status === 'pending' || r.status === 'occupied'
    ).length;
    return {
      ...state,
      requests: [...state.requests, request],
      activeRequestsCount: activeRequestsCount + 1,
    };
  }),

  // Update the status of a collection request
  on(CollectionActions.updateCollectionRequestStatus, (state, { id, status }) => {
    const updatedRequests = state.requests.map((request) =>
      request.id === id ? { ...request, status } : request
    );
    const activeRequestsCount = updatedRequests.filter(
      (r) => r.status === 'pending' || r.status === 'occupied'
    ).length;
    return {
      ...state,
      requests: updatedRequests,
      activeRequestsCount,
    };
  }),

  // Delete a collection request
  on(CollectionActions.deleteCollectionRequest, (state, { id }) => {
    const updatedRequests = state.requests.filter((request) => request.id !== id);
    const activeRequestsCount = updatedRequests.filter(
      (r) => r.status === 'pending' || r.status === 'occupied'
    ).length;
    return {
      ...state,
      requests: updatedRequests,
      activeRequestsCount,
    };
  }),

  // Load collection requests
  on(CollectionActions.loadCollectionRequests, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // Load collection requests success
  on(CollectionActions.loadCollectionRequestsSuccess, (state, { requests }) => {
    const activeRequestsCount = requests.filter(
      (r) => r.status === 'pending' || r.status === 'occupied'
    ).length;
    return {
      ...state,
      requests,
      activeRequestsCount,
      loading: false,
    };
  }),

  // Load collection requests failure
  on(CollectionActions.loadCollectionRequestsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
