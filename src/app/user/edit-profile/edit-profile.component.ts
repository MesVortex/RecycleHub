import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  editProfileForm: FormGroup;
  user: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.user = this.authService.getCurrentUser(); // Fetch the logged-in user

    this.editProfileForm = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      address: [this.user.address, Validators.required],
      phoneNumber: [this.user.phoneNumber, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dateOfBirth: [this.user.dateOfBirth, Validators.required],
    });
  }

  onSubmit() {
    if (this.editProfileForm.valid) {
      const updatedUser = { ...this.user, ...this.editProfileForm.value };

      // Update user data in localStorage
      this.authService.updateUser(updatedUser);

      console.log('Profile updated successfully', updatedUser);
      this.router.navigate(['/profile']); // Redirect to profile after successful update
    } else {
      alert('Please fill out the form correctly.'); // Form validation feedback
    }
  }
}
