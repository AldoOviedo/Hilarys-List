import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-gate',
  imports: [FormsModule],
  templateUrl: './password-gate.html',
  styleUrl: './password-gate.css',
})
export class PasswordGate {
  password: string = '';
  error: boolean = false;

  private correctPassword: string = 'hilaryslist';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.password === this.correctPassword) {
      localStorage.setItem('hilaryListAuth', 'true');
      this.router.navigate(['/hilarys-list']);
    } else {
      this.error = true;
    }
  }
}
