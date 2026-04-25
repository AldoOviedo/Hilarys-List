import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Specialty } from '../../models/specialty.enum';

@Component({
  selector: 'app-my-reviews',
  imports: [FormsModule],
  templateUrl: './my-reviews.html',
  styleUrl: './my-reviews.css',
})
export class MyReviews {

  rating: Number = 0;
  notes: String | null = null;
  specialty: Specialty | null = null;
  servesAlcohol: Boolean | null = null;

}
