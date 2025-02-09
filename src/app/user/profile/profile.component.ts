import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

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
}
