import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from '../../models/user.model';
import { Cafe } from '../../models/cafe.model';
import { CafeService } from '../../services/cafe';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-my-cafes',
  imports: [],
  templateUrl: './my-cafes.html',
  styleUrl: './my-cafes.css',
})
export class MyCafes {
  currentUser: User | null = null;
  cafes: Cafe[] = [];
  constructor(
    private cafeService: CafeService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(
      user => {this.currentUser = user;
      if (user) {
        this.cafeService.getCafesByUserId(user.id).subscribe({
          next: (data: any) => {
            this.cafes = data;
            this.cdr.detectChanges();
          },
          error: (err: any) => {
            console.error('failed to load cafes: ', err);
          } // testing commit after pull
        });
      }
      });
  }
}
