import { Routes } from '@angular/router';
import { HilarysList } from './components/hilarys-list/hilarys-list';
import { MyCafes } from './components/my-cafes/my-cafes';
import { MyReviews } from './components/my-reviews/my-reviews';
import { AddCafe } from './components/add-cafe/add-cafe';
import { Profile } from './components/profile/profile';
import { AddReview } from './components/add-review/add-review';
import { authGuard } from './components/password-gate/auth.guard';
import { PasswordGate } from './components/password-gate/password-gate';
import { Login } from './components/login/login';
import { Register } from './components/register/register';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'enter', component: PasswordGate },
  { path: '', redirectTo: 'hilarys-list', pathMatch: 'full' },
  { path: 'hilarys-list', component: HilarysList, canActivate: [authGuard] },
  { path: 'my-cafes', component: MyCafes, canActivate: [authGuard] },
  { path: 'my-reviews', component: MyReviews, canActivate: [authGuard] },
  { path: 'add-cafe', component: AddCafe, canActivate: [authGuard] },
  { path: 'add-review/:cafeId', component: AddReview, canActivate: [authGuard] },
  { path: 'profile', component: Profile, canActivate: [authGuard] },
];
