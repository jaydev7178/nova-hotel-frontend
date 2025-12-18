import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService, User } from '../../../services/auth.service';
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
        <a class="navbar-brand fw-bold d-flex align-items-center" routerLink="/home">
          <img src="assets/images/WebsiteIcon.png" alt="Nova Hotel Supplies" class="logo me-1" />
          <span class="brand-text">Nova Hotel Supplies</span>
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
            
            <!-- User Authentication -->
            <li class="nav-item" *ngIf="!(isLoggedIn$ | async)">
              <a class="nav-link" routerLink="/login">
                <i class="fas fa-sign-in-alt"></i>
                Login
              </a>
            </li>
            
            <li class="nav-item dropdown" *ngIf="isLoggedIn$ | async">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <i class="fas fa-user"></i>
                {{ (currentUser$ | async)?.username }}
              </a>
              <ul class="dropdown-menu">
                <li *ngIf="isAdmin()">
                  <a class="dropdown-item" routerLink="/admin">
                    <i class="fas fa-user-cog me-2"></i>Admin Panel
                  </a>
                </li>
                <li><hr class="dropdown-divider" *ngIf="isAdmin()"></li>
                <li>
                  <a class="dropdown-item" href="#" (click)="logout()">
                    <i class="fas fa-sign-out-alt me-2"></i>Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  cartItemCount = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.currentUser$ = this.authService.currentUser$;
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
