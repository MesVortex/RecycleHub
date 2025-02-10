import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {CollectionRequest, CollectionState} from '../../store/collection/collection.state';
import {updateCollectionRequestStatus} from '../../store/collection/collection.actions';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true
})
export class EditRequestComponent implements OnInit {
  editForm: FormGroup;
  requestId: string;
  request: CollectionRequest | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ collection: CollectionState }>
  ) {
    this.editForm = this.fb.group({
      wasteType: ['', Validators.required],
      photos: [''],
      estimatedWeight: ['', [Validators.required, Validators.min(1000)]],
      collectionAddress: ['', Validators.required],
      collectionDate: ['', Validators.required],
      collectionTime: ['', Validators.required],
      notes: [''],
    });

    this.requestId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.store.select((state) => state.collection.requests).subscribe((requests) => {
      this.request = requests.find((r) => r.id === this.requestId);
      if (this.request && this.request.status === 'pending') {
        this.editForm.patchValue(this.request);
      } else {
        this.router.navigate(['/collection']); // Redirect if request is not editable
      }
    });
  }

  onSubmit() {
    if (this.editForm.valid && this.request) {
      const updatedRequest: CollectionRequest = {
        ...this.request,
        ...this.editForm.value,
      };

      this.store.dispatch(updateCollectionRequestStatus({ id: this.requestId, status: 'pending' }));
      alert('Request updated successfully!');
      this.router.navigate(['/collection']);
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
