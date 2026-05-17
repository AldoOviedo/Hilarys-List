import { ChangeDetectorRef, Component, effect } from '@angular/core';
import { User } from '../../models/user.model';
import { Cafe } from '../../models/cafe.model';
import { CafeService } from '../../services/cafe';
import { AuthService } from '../../services/auth';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { Review } from '../../models/review.model';
import { ReviewService } from '../../services/review';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-my-cafes',
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './my-cafes.html',
  styleUrl: './my-cafes.css',
})
export class MyCafes {
  cafes: Cafe[] = [];
  reviewMap: Map<number, Review> = new Map();

  constructor(
    private cafeService: CafeService,
    private reviewService: ReviewService,
    public authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {
    toObservable(this.authService.currentUser).subscribe((user) => {
      if (user) {
        forkJoin({
          cafes: this.cafeService.getCafesByUserId(user.id),
          reviews: this.reviewService.getReviewsByUserId(user.id),
        }).subscribe({
          next: (data) => {
            this.cafes = data.cafes;
            this.reviewMap = new Map();
            data.reviews.forEach((review) => {
              if (!this.reviewMap.has(review.cafe.id)) {
                this.reviewMap.set(review.cafe.id, review);
              }
            });
            this.cdr.detectChanges();
          },
        });
      }
    });
  }

  getReview(cafeId: number): Review | undefined {
    return this.reviewMap.get(cafeId);
  }
}
