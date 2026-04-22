import { ChangeDetectorRef, Component } from '@angular/core';
import { Cafe } from '../../models/cafe.model';
import { CafeService } from '../../services/cafe';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-hilarys-list',
  imports: [CommonModule],
  templateUrl: './hilarys-list.html',
  styleUrl: './hilarys-list.css',
})
export class HilarysList {

  
  cafes: Cafe[] = [];

  constructor(
    private cafeService: CafeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cafeService.getHilarysList().subscribe({
      next: (data) => {
        this.cafes = data;
        this.cdr.detectChanges();
        console.log('Cafes loaded:', this.cafes);
      },
      error: (err) => {
        console.error('Failed to load Hilarys list:', err);
      }
    });
  }
}
