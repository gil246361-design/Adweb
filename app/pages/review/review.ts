import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../core/restaurant.service';

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.html',
  styleUrl: './review.css',
})
export class Review {
  private readonly router = inject(Router);
  private readonly restaurantService = inject(RestaurantService);

  restaurantId = input.required<string>();
  menuId = input.required<string>();

  readonly entry = computed(() =>
    this.restaurantService.findMenuItem(this.restaurantId(), this.menuId())
  );

  readonly stars = computed(() => {
    const rating = this.entry()?.menuItem.rating ?? 0;
    return Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  });

  goBack(): void {
    this.router.navigate(['/restaurant', this.restaurantId()]);
  }
}
