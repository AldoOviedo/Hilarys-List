import { ChangeDetectorRef, Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Specialty } from '../../models/specialty.enum';
import { Review } from '../../models/review.model';
import { ReviewService } from '../../services/review';
import { AuthService } from '../../services/auth';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-my-reviews',
  imports: [FormsModule],
  templateUrl: './my-reviews.html',
  styleUrl: './my-reviews.css',
})
export class MyReviews {
  reviews: Review[] = [];
  activeMenuId: number | null = null;
  confirmDeleteId: number | null = null;


  constructor(
    private reviewService: ReviewService,
    public authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {
    toObservable(this.authService.currentUser).subscribe((user) => {

      if (user) {
        this.reviewService.getReviewsByUserId(user.id).subscribe({
          next: (data) => {
            this.reviews = data;
            this.cdr.detectChanges();
          },
        });
      }
    });
  }

  toggleMenu(reviewId: number) {


    if (this.activeMenuId === reviewId) {
      this.activeMenuId = null;
    } else {
      this.activeMenuId = reviewId;
      this.confirmDeleteId = null;
    }

    // @ts-ignore
    console.log('Toggle delete option clicked' + this.activeMenuId.valueOf());
    this.cdr.detectChanges();

  }

  confirmDelete(reviewId: number){
    this.confirmDeleteId = reviewId;
    console.log("this will delete review with id + " , this.confirmDeleteId.valueOf());
    this.activeMenuId = null;
  }

  cancelDelete() {
    this.confirmDeleteId = null;

  }

  deleteReview(reviewId: number) {
    this.reviewService.deleteReview(reviewId).subscribe({
      next: () => {
        this.reviews = this.reviews.filter(r => r.id !== reviewId);
        this.confirmDeleteId = null;
        this.cdr.detectChanges();
      }
    });

}}
