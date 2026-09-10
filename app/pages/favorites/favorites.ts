import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../core/restaurant.service';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  private readonly router = inject(Router);
  private readonly restaurantService = inject(RestaurantService);

  readonly entries = this.restaurantService.favoriteEntries;

  goBack(): void {
    this.router.navigate(['/']);
  }

  clearAll(): void {
    this.restaurantService.clearFavorites();
  }

  removeOne(menuItemId: string, event: Event): void {
    event.stopPropagation();
    this.restaurantService.toggleFavorite(menuItemId);
  }

  openReview(restaurantId: string, menuItemId: string): void {
    this.router.navigate(['/review', restaurantId, menuItemId]);
  }
}
