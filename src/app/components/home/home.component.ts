import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  loading = true;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  private loadFeaturedProducts(): void {
    this.productService.getProductsPaged(0, 10, 'name', 'asc').subscribe({
      next: products => {
        this.featuredProducts = products.slice(0, 6); // Show first 6 products as featured
        this.loading = false;
      },
      error: () => {
        // fallback to mock products if API fails
        this.productService.getProducts().subscribe(products => {
          this.featuredProducts = products.slice(0, 6);
          this.loading = false;
        });
      }
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product, 1);
    // You could add a toast notification here
  }
}