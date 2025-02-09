import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import {addCollectionRequest} from '../../store/collection/collection.actions';
import {CollectionRequest} from '../../store/collection/collection.state';

@Component({
  selector: 'app-request-collection',
  templateUrl: './request-collection.component.html',
  styleUrls: ['./request-collection.component.scss'],
  standalone: true
})
export class RequestCollectionComponent {
  requestForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.requestForm = this.fb.group({
      wasteType: ['', Validators.required],
      photos: [''],
      estimatedWeight: ['', [Validators.required, Validators.min(1000)]],
      collectionAddress: ['', Validators.required],
      collectionDate: ['', Validators.required],
      collectionTime: ['', Validators.required],
      notes: [''],
    });
  }

  onSubmit() {
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
      };

      this.store.dispatch(addCollectionRequest({ request })); // Dispatch the action
      alert('Collection request submitted successfully!');
      this.requestForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
