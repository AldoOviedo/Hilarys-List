import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { UserService } from './user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = signal<User | null>(null);

  private tokenKey = 'hilaryListToken';

  constructor(
    private http: HttpClient,
    private router: Router,

  ) {
    if (this.isLoggedIn()) {
      this.loadCurrentUser();
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/login`, { email, password }).pipe(
      tap((response) => {
        localStorage.setItem(this.tokenKey, response.token);
        this.loadCurrentUser();
      }),
    );
  }

  register(displayName: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/register`, {
      displayName,
      email,
      password,
    });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getEmailFromToken(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.sub;
    } catch {
      return null;
    }
  }

  getRolesFromToken(): string[] {
    const token = this.getToken();
    if (!token) return [];

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.roles || [];
    } catch {
      return [];
    }
  }

  isAdmin(): boolean {
    return this.getRolesFromToken().includes('ROLE_ADMIN');
  }


  setCurrentUser(user: User): void {
    localStorage.setItem('selectedUserId', String(user.id));
    this.currentUser.set(user);
  }

  loadCurrentUser(): void {
    this.http.get<User>(`${environment.apiUrl}/api/auth/me`).subscribe({
      next: (user) => {
        this.currentUser.set(user);
      },
    });
  }
}
