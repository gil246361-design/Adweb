import { Injectable, computed, effect, signal } from '@angular/core';
import { CATEGORIES, MOCK_RESTAURANTS } from './mock-data';
import { MenuItem, Restaurant } from './models';

const FAVORITES_STORAGE_KEY = 'aroy-dee-favorites';

export interface FavoriteEntry {
  restaurant: Restaurant;
  menuItem: MenuItem;
}

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  readonly restaurants = signal<Restaurant[]>(MOCK_RESTAURANTS);
  readonly categories = CATEGORIES;

  /** Set of favorited menu item ids, e.g. "r1-m2". Persisted to localStorage
   *  so favorites survive closing the browser, as shown in the wireframe. */
  readonly favoriteIds = signal<Set<string>>(this.loadFavoritesFromStorage());

  readonly favoriteEntries = computed<FavoriteEntry[]>(() => {
    const ids = this.favoriteIds();
    const entries: FavoriteEntry[] = [];
    for (const restaurant of this.restaurants()) {
      for (const menuItem of restaurant.menu) {
        if (ids.has(menuItem.id)) {
          entries.push({ restaurant, menuItem });
        }
      }
    }
    return entries;
  });

  constructor() {
    effect(() => {
      const ids = Array.from(this.favoriteIds());
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids));
      } catch {
        // localStorage unavailable (e.g. private browsing) — fail silently
      }
    });
  }

  private loadFavoritesFromStorage(): Set<string> {
    try {
      const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (!raw) return new Set();
      const parsed = JSON.parse(raw) as string[];
      return new Set(parsed);
    } catch {
      return new Set();
    }
  }

  isFavorite(menuItemId: string): boolean {
    return this.favoriteIds().has(menuItemId);
  }

  toggleFavorite(menuItemId: string): void {
    const next = new Set(this.favoriteIds());
    if (next.has(menuItemId)) {
      next.delete(menuItemId);
    } else {
      next.add(menuItemId);
    }
    this.favoriteIds.set(next);
  }

  clearFavorites(): void {
    this.favoriteIds.set(new Set());
  }

  getRestaurant(id: string): Restaurant | undefined {
    return this.restaurants().find((r) => r.id === id);
  }

  findMenuItem(restaurantId: string, menuId: string): FavoriteEntry | undefined {
    const restaurant = this.getRestaurant(restaurantId);
    const menuItem = restaurant?.menu.find((m) => m.id === menuId);
    if (!restaurant || !menuItem) return undefined;
    return { restaurant, menuItem };
  }

  /** Restaurants filtered by name search + category. */
  filterRestaurants(nameTerm: string, category: string | null): Restaurant[] {
    const term = nameTerm.trim().toLowerCase();
    return this.restaurants().filter((r) => {
      const matchesName = !term || r.name.toLowerCase().includes(term);
      const matchesCategory = !category || r.category === category;
      return matchesName && matchesCategory;
    });
  }

  /** Search menu items by name across every restaurant. */
  searchMenuAcrossRestaurants(menuTerm: string): FavoriteEntry[] {
    const term = menuTerm.trim().toLowerCase();
    if (!term) return [];
    const results: FavoriteEntry[] = [];
    for (const restaurant of this.restaurants()) {
      for (const menuItem of restaurant.menu) {
        if (menuItem.name.toLowerCase().includes(term)) {
          results.push({ restaurant, menuItem });
        }
      }
    }
    return results;
  }
}
