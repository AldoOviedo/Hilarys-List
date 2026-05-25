import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user';
import { AuthService } from '../../services/auth';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-selector.html',
  styleUrl: './user-selector.css',
})
export class UserSelector {
  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
