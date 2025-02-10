import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import {Observable} from 'rxjs';
import {CollectionRequest, CollectionState} from '../../store/collection/collection.state';
import {addCollectionRequest} from '../../store/collection/collection.actions';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-request-collection',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true
})
export class RequestCollectionComponent {
  requestForm: FormGroup;
  activeRequestsCount$: Observable<number>;

  constructor(private fb: FormBuilder, private store: Store<{ collection: CollectionState }>) {
    this.requestForm = this.fb.group({
      wasteType: ['', Validators.required],
      photos: [''],
      estimatedWeight: ['', [Validators.required, Validators.min(1000)]],
      collectionAddress: ['', Validators.required],
      collectionDate: ['', Validators.required],
      collectionTime: ['', Validators.required],
      notes: [''],
      city: ['', Validators.required],
    });

    this.activeRequestsCount$ = this.store.select((state) => state.collection.activeRequestsCount);
  }

  onSubmit() {
    this.store.select((state) => state.collection.requests).subscribe((requests: CollectionRequest[]) => {
      const activeRequests = requests.filter((request: CollectionRequest) => request.status === 'pending' || request.status === 'occupied');
      const totalWeight = activeRequests.reduce((sum: number, request: CollectionRequest) => sum + request.estimatedWeight, 0);

      if (activeRequests.length >= 3) {
        alert('You cannot have more than 3 active requests.');
        return;
      }

      if (totalWeight + this.requestForm.value.estimatedWeight > 10000) {
        alert('You cannot have more than 10kg of active requests.');
        return;
      }

      if (this.requestForm.valid) {
        const request: CollectionRequest = {
          id: uuidv4(),
          wasteType: this.requestForm.value.wasteType,
          photos: this.requestForm.value.photos ? [this.requestForm.value.photos] : [],
          estimatedWeight: this.requestForm.value.estimatedWeight,
          collectionAddress: this.requestForm.value.collectionAddress,
          collectionDate: this.requestForm.value.collectionDate,
          collectionTime: this.requestForm.value.collectionTime,
          notes: this.requestForm.value.notes,
          status: 'pending',
          city: this.requestForm.value.city,
        };

        this.store.dispatch(addCollectionRequest({ request })); // Dispatch the action
        alert('Collection request submitted successfully!');
        this.requestForm.reset();
      } else {
        alert('Please fill out the form correctly.');
      }
    });
  }
}
