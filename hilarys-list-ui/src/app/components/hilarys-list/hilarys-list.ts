import { ChangeDetectorRef, Component } from '@angular/core';
import { Cafe } from '../../models/cafe.model';
import { CafeService } from '../../services/cafe';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../../services/review';
import { Review } from '../../models/review.model';
import { AuthService } from '../../services/auth';



@Component({
  selector: 'app-hilarys-list',
  imports: [CommonModule],
  templateUrl: './hilarys-list.html',
  styleUrl: './hilarys-list.css',
  standalone: true,
})
export class HilarysList {
  cafes: Cafe[] = [];
  reviewMap: Map<number, Review> = new Map();

  constructor(
    private cafeService: CafeService,
    private reviewService: ReviewService,
    public authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.cafeService.getHilarysList().subscribe({
      next: (cafes) => {
        this.cafes = cafes;

        if (cafes.length > 0) {
          const hilaryId = cafes[0].user.id;
          this.reviewService.getReviewsByUserId(hilaryId).subscribe({
            next: (reviews) => {
              this.reviewMap = new Map();
              reviews.forEach((review) => {
                if (!this.reviewMap.has(review.cafe.id)) {
                  this.reviewMap.set(review.cafe.id, review);
                }
              });
              this.cdr.detectChanges();
            },
          });
        } else {
          this.cdr.detectChanges();
        }
      },
    });
  }

  getReview(cafeId: number): Review | undefined {
    return this.reviewMap.get(cafeId);
  }
}
