import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../core/restaurant.service';

@Component({
  selector: 'app-restaurant',
  imports: [],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.css',
})
export class Restaurant {
  private readonly router = inject(Router);
  private readonly restaurantService = inject(RestaurantService);

  id = input.required<string>();

  readonly restaurant = computed(() => this.restaurantService.getRestaurant(this.id()));

  goBack(): void {
    this.router.navigate(['/']);
  }

  isFavorite(menuItemId: string): boolean {
    return this.restaurantService.isFavorite(menuItemId);
  }

  toggleFavorite(menuItemId: string, event: Event): void {
    event.stopPropagation();
    this.restaurantService.toggleFavorite(menuItemId);
  }

  openReview(menuItemId: string): void {
    this.router.navigate(['/review', this.id(), menuItemId]);
  }
}
