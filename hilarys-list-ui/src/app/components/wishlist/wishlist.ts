import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CafeService } from '../../services/cafe';
import { toObservable } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth';
import { Cafe } from '../../models/cafe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
  standalone: true,
})
export class Wishlist {
  cafes: Cafe[] = [];

  constructor(
    private cafeService: CafeService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    toObservable(this.authService.currentUser).subscribe((user) => {
      if (user) {
        this.cafeService.getWishlist(user.id).subscribe({
          next: (Cafes) => {
            this.cafes = Cafes;
            this.cdr.detectChanges();
          }

        });

      }
    });
  }
}
