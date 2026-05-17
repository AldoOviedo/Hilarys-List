import { Injectable, NgZone, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<User | null>(null);
  users = signal<User[]>([]);

  constructor(private userService: UserService) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.users.set(users);

        const savedId = localStorage.getItem('selectedUserId');
        let defaultUser: User | undefined;

        if (savedId) {
          defaultUser = users.find((u) => u.id === Number(savedId));
        }

        if (!defaultUser) {
          defaultUser = users.find((u) => u.displayName === 'Hilary') || users[0];
        }

        this.currentUser.set(defaultUser);
      },
    });
  }

  setCurrentUser(user: User): void {
    localStorage.setItem('selectedUserId', String(user.id));
    this.currentUser.set(user);
  }
}
