import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../services/product.service';
import { Product, ProductCategory } from '../../../models/product.model';

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
  categories: ProductCategory[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = [...products];
    });
  }

  private loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
        if (!cats || cats.length === 0) {
          this.toastr.warning('No categories available.');
        }
      },
      error: (err) => {
        console.error('Failed to load categories', err);
        this.toastr.error('Failed to load categories');
      }
    });
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
      filtered = filtered.filter(product => {
        // Match by category name or id
        const cat = this.categories.find(c => c.id === this.selectedCategory || c.name === this.selectedCategory);
        return product.category === (cat?.name || this.selectedCategory);
      });
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

  goToCreate(): void {
    this.router.navigate(['/admin/products/create']);
  }

  editProduct(product: Product): void {
    if (!product?.id) return;
    this.router.navigate(['/admin/products', product.id, 'edit']);
  }

  deleteProduct(product: Product): void {
    if (!product?.id) return;
    if (!confirm(`Delete product "${product.name}"?`)) return;
    this.productService.deleteProduct(product.id).subscribe({
      next: () => {
        this.toastr.success('Product deleted');
        this.loadProducts();
      },
      error: (err) => {
        console.error('Failed to delete', err);
        this.toastr.error('Failed to delete product');
      }
    });
  }
}