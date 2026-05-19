import { Component, OnInit } from '@angular/core';
import { Cafe } from '../../models/cafe.model';
import { Specialty } from '../../models/specialty.enum';
import { CafeService } from '../../services/cafe';
import { ActivatedRoute, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { ReviewService } from '../../services/review';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  imports: [FormsModule],
  templateUrl: './add-review.html',
  styleUrl: './add-review.css',
})
export class AddReview implements OnInit {
  //Parameters for getting data

  cafeId: number = 0;
  cafe: Cafe | null = null;
  rating: number | null = null;
  notes: String | null = null;
  specialty: Specialty | null = null;
  servesAlcohol: Boolean | null = null;

  constructor(
    private reviewService: ReviewService,
    private cafeService: CafeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.cafeId = Number(this.route.snapshot.paramMap.get('cafeId'));
    this.cafeService.getCafeById(this.cafeId).subscribe({
      next: (data) => {
        this.cafe = data;
      },
      error(err: any) {
        console.error('error loading cafe ' + err);
      },
    });
  }
  onSubmit(): void {
    const review: any = {
      rating: this.rating,
      notes: this.notes,
      specialty: this.specialty,
      servesAlcohol: this.servesAlcohol,
    };

    this.reviewService.createReview(this.cafeId, review).subscribe({
      next: (createdReview: any) => {
        console.log('review created ', createdReview);
        this.router.navigate(['/my-cafes']);
      },
      error: (err) => {
        console.error('error creating review ', err);
      },
    });
  }
}
