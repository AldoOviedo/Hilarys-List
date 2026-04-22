import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-user-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-selector.html',
  styleUrl: './user-selector.css'
})
export class UserSelector implements OnInit {

  users: User[] = [];
  selectedUserId: number = 0;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        if (this.users.length > 0) {
          this.selectedUserId = this.users[0].id;
          this.authService.setCurrentUser(this.users[0]);
        }
      },
      error: (err) => {
        console.error('Failed to load users:', err);
      }
    });
  }

  onUserChange(): void {
    const user = this.users.find(u => u.id == this.selectedUserId);
    if (user) {
      this.authService.setCurrentUser(user);
    }
  }
}