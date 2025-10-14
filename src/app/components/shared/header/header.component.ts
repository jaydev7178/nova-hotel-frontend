import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <!-- Brand -->
        <a class="navbar-brand fw-bold" routerLink="/home">
          <i class="fas fa-crown me-2 text-primary"></i>
          Nova Hotel Supplies
        </a>

        <!-- Mobile toggle button -->
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/home" routerLinkActive="active">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/products" routerLinkActive="active">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
            </li>
          </ul>

          <!-- Cart and User Actions -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link position-relative" routerLink="/cart">
                <i class="fas fa-shopping-cart"></i>
                Cart
                <span *ngIf="cartItemCount > 0" 
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{ cartItemCount }}
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin">
                <i class="fas fa-user-cog"></i>
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartItemCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }
}
