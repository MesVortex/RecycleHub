import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  register(userData: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if the email is already registered
    const isEmailRegistered = users.some((user: any) => user.email === userData.email);
    if (isEmailRegistered) {
      alert('This email is already registered.');
      return false;
    }

    // Add the new user to the list
    userData.role = 'user'; // set default role
    users.push(userData);

    // Save the updated list back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): any {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user)); // Save the logged-in user
      return user;
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('currentUser'); // Remove the logged-in user
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  updateUser(updatedUser: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((u: any) => u.email === updatedUser.email);

    if (userIndex !== -1) {
      users[userIndex] = updatedUser; // Update the user data
      localStorage.setItem('users', JSON.stringify(users)); // Save the updated list
      localStorage.setItem('currentUser', JSON.stringify(updatedUser)); // Update the logged-in user
      return true;
    } else {
      return false;
    }
  }

  deleteUser(email: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter((user: any) => user.email !== email); // Remove the user

    if (updatedUsers.length < users.length) {
      localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save the updated list
      localStorage.removeItem('currentUser'); // Remove the logged-in user
      return true;
    } else {
      return false;
    }
  }
}
