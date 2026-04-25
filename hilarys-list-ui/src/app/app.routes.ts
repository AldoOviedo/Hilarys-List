import { Routes } from '@angular/router';
import { HilarysList } from './components/hilarys-list/hilarys-list';
import { MyCafes } from './components/my-cafes/my-cafes';
import { MyReviews } from './components/my-reviews/my-reviews';
import { AddCafe } from './components/add-cafe/add-cafe';
import { Profile } from './components/profile/profile';
import { AddReview } from './components/add-review/add-review';


export const routes: Routes = [
  { path: '', redirectTo: 'hilarys-list', pathMatch: 'full' },
  { path: 'hilarys-list', component: HilarysList },
  { path: 'my-cafes', component: MyCafes },
  { path: 'my-reviews', component: MyReviews },
  { path: 'add-cafe', component: AddCafe },
  { path: 'profile', component: Profile },
  { path: 'add-review/:cafeId', component: AddReview },
];
