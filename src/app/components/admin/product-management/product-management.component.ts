import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery = '';
  selectedCategory = '';
  categories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = [...products];
      this.extractCategories();
    });
  }

  private extractCategories(): void {
    this.categories = [...new Set(this.products.map(p => p.category))];
  }

  onSearch(): void {
    this.applyFilters();
  }

  onCategoryFilter(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = [...this.products];

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    this.filteredProducts = filtered;
  }

  getStockBadgeClass(stock: number): string {
    if (stock === 0) return 'bg-danger';
    if (stock < 10) return 'bg-warning';
    return 'bg-success';
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.filteredProducts = [...this.products];
  }
}