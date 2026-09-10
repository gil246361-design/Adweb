import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../core/restaurant.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  private readonly router = inject(Router);
  private readonly restaurantService = inject(RestaurantService);

  readonly categories = this.restaurantService.categories;
  readonly favoriteCount = this.restaurantService.favoriteEntries;

  readonly restaurantTerm = signal('');
  readonly menuTerm = signal('');
  readonly selectedCategory = signal<string | null>(null);
  readonly showCategoryMenu = signal(false);

  readonly filteredRestaurants = computed(() =>
    this.restaurantService.filterRestaurants(this.restaurantTerm(), this.selectedCategory())
  );

  readonly menuResults = computed(() =>
    this.restaurantService.searchMenuAcrossRestaurants(this.menuTerm())
  );

  readonly isSearchingMenu = computed(() => this.menuTerm().trim().length > 0);

  onRestaurantSearch(event: Event): void {
    this.restaurantTerm.set((event.target as HTMLInputElement).value);
  }

  onMenuSearch(event: Event): void {
    this.menuTerm.set((event.target as HTMLInputElement).value);
  }

  toggleCategoryMenu(): void {
    this.showCategoryMenu.set(!this.showCategoryMenu());
  }

  selectCategory(category: string | null): void {
    this.selectedCategory.set(category);
    this.showCategoryMenu.set(false);
  }

  openRestaurant(id: string): void {
    this.router.navigate(['/restaurant', id]);
  }

  openFavorites(): void {
    this.router.navigate(['/favorites']);
  }
}
