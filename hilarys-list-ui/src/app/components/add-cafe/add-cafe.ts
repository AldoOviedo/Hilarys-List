import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CafeService } from '../../services/cafe';
import { AuthService } from '../../services/auth';
import { User } from '../../models/user.model';
import { Cafe } from '../../models/cafe.model';

@Component({
  selector: 'app-add-cafe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-cafe.html',
  styleUrl: './add-cafe.css'
})
export class AddCafe implements OnInit {

  currentUser: User | null = null;

  cafeName: string = '';
  city: string = '';
  state: string = '';
  isPublic: boolean = false;

  constructor(
    private cafeService: CafeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  isHilary(): boolean {
    return this.currentUser?.displayName === 'Hilary';
  }

  onSubmit(): void {
    if (!this.currentUser) return;

    const cafe: any = {
      name: this.cafeName,
      city: this.city,
      state: this.state,
      isPublic: this.isPublic
    };

    this.cafeService.createCafe(this.currentUser.id, cafe).subscribe({
      next: (savedCafe) => {
        console.log('Cafe created:', savedCafe);
        if (this.isPublic) {
          this.router.navigate(['/hilarys-list']);
        } else {
          this.router.navigate(['/my-cafes']);
        }
      },
      error: (err) => {
        console.error('Failed to create cafe:', err);
      }
    });
  }
}