import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isAuthenticated = localStorage.getItem('hilaryListAuth') === 'true';

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/enter']);
    return false;
  }
};
