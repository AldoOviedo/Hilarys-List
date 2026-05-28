import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cafe } from '../models/cafe.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CafeService {
  private baseUrl = `${environment.apiUrl}/api/cafe`;

  constructor(private http: HttpClient) {}

  getHilarysList(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(`${this.baseUrl}/hilaryslist`);
  }

  getCafesByUserId(userId: number): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(`${this.baseUrl}/user/${userId}`);
  }

  getCafeById(cafeId: number): Observable<Cafe> {
    return this.http.get<Cafe>(`${this.baseUrl}/${cafeId}`);
  }

  createCafe(userId: number, cafe: Cafe): Observable<Cafe> {
    return this.http.post<Cafe>(`${this.baseUrl}/user/${userId}`, cafe);
  }

  deleteCafe(cafeId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${cafeId}`);
  }


  getWishlist(userId: number): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(`${this.baseUrl}/user/${userId}/wishlist`);
  }
}
