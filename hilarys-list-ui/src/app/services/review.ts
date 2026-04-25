import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Review} from '../models/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {

  private baseUrl: string = '/api/review';

  constructor(private http: HttpClient) {}

  getReviewsByCafeId(cafeId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/cafe${cafeId}`);
  }

  getReviewsByUserId(userId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/user/${userId}`);
  }

  createReview(cafeId: number, review: any): Observable<Review> {
    return this.http.post<Review>(`${this.baseUrl}/cafe/${cafeId}`, review);
  }

  deleteReview(reviewId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${reviewId}`);
  }
}
