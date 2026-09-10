import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Restaurant } from './pages/restaurant/restaurant';
import { Favorites } from './pages/favorites/favorites';
import { Review } from './pages/review/review';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'restaurant/:id', component: Restaurant },
  { path: 'favorites', component: Favorites },
  { path: 'review/:restaurantId/:menuId', component: Review },
  // Wild Card Route for 404 request
  { path: '**', component: Pagenotfound },
];
