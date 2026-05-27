import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth';
import { CafeService } from '../../services/cafe';
import { ReviewService } from '../../services/review';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  cafeCount: number = 0;
  reviewCount: number = 0;

  constructor(
    public authService: AuthService,
    private cafeService: CafeService,
    private reviewService: ReviewService,
    private cdr: ChangeDetectorRef,
  ) {
    toObservable(this.authService.currentUser).subscribe((user) => {
      if (user) {
        this.cafeService.getCafesByUserId(user.id).subscribe({
          next: (cafes) => {
            this.cafeCount = cafes.length;
            this.cdr.detectChanges();
          },
        });
        this.reviewService.getReviewsByUserId(user.id).subscribe({
          next: (reviews) => {
            this.reviewCount = reviews.length;
            this.cdr.detectChanges();
          },
        });
      }
    });
  }
}


