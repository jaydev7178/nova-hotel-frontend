import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product, ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  categories: ProductCategory[] = [];
  
  searchQuery = '';
  selectedCategory = '';
  sortBy = 'name';
  viewMode: 'grid' | 'list' = 'grid';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  private loadProducts(): void {
    // Use the public paged products API (no token required) to ensure live data is shown
    this.productService.getProductsPaged(0, 100, 'name', 'asc').subscribe({
      next: products => {
        this.allProducts = products;
        this.filteredProducts = [...products];
        this.sortProducts();
      },
      error: () => {
        // Fallback to legacy getProducts (which may return mock data)
        this.productService.getProducts().subscribe(products => {
          this.allProducts = products;
          this.filteredProducts = [...products];
          this.sortProducts();
        });
      }
    });
  }

  private loadCategories(): void {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  onCategoryFilter(): void {
    this.applyFilters();
  }

  onSort(): void {
    this.sortProducts();
  }

  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }

  addToCart(product: Product): void {
    const success = this.cartService.addToCart(product, 1);
    if (success) {
      // You could add a toast notification here
      console.log('Product added to cart');
    }
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.sortBy = 'name';
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = [...this.allProducts];

    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.features.some(feature => feature.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    this.filteredProducts = filtered;
    this.sortProducts();
  }

  private sortProducts(): void {
    this.filteredProducts.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  }

  onImageError(event: any): void {
    event.target.src = 'assets/images/hero-product.jpg';
  }
}