import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getCurrentUser(); // Fetch the logged-in user
  }

  onEditProfile() {
    this.router.navigate(['/edit-profile']); // Navigate to the edit profile page
  }

  onDeleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      const isDeleted = this.authService.deleteUser(this.user.email);

      if (isDeleted) {
        this.authService.logout(); // Log out the user
        this.router.navigate(['/login']); // Redirect to the login page
      } else {
        alert('Failed to delete account. Please try again.');
      }
    }
  }
}
