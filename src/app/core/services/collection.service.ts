import { Injectable } from '@angular/core';
import {CollectionRequest} from '../../store/collection/collection.state';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private readonly localStorageKey = 'collectionRequests';

  constructor() {}

  getRequests(): CollectionRequest[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  addRequest(request: CollectionRequest): void {
    const requests = this.getRequests();
    requests.push(request);
    localStorage.setItem(this.localStorageKey, JSON.stringify(requests));
  }

  updateRequestStatus(id: string, status: CollectionRequest['status']): void {
    const requests = this.getRequests();
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status } : request
    );
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedRequests));
  }

  deleteRequest(id: string): void {
    const requests = this.getRequests();
    const updatedRequests = requests.filter((request) => request.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedRequests));
  }
}
