import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container py-5">
      <div class="row">
        <div class="col-12 text-center">
          <div class="error-content">
            <div class="error-icon mb-4">
              <i class="fas fa-exclamation-triangle fa-5x text-warning"></i>
            </div>
            
            <h1 class="display-1 fw-bold text-primary mb-3">404</h1>
            <h2 class="display-5 fw-bold text-dark mb-4">Page Not Found</h2>
            
            <p class="lead text-muted mb-5">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
            
            <div class="action-buttons">
              <a routerLink="/home" class="btn btn-primary btn-lg me-3 mb-3">
                <i class="fas fa-home me-2"></i>
                Go Home
              </a>
              <a routerLink="/products" class="btn btn-outline-primary btn-lg mb-3">
                <i class="fas fa-shopping-bag me-2"></i>
                Browse Products
              </a>
            </div>
            
            <div class="helpful-links mt-5">
              <h5 class="mb-3">Helpful Links</h5>
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-4 mb-2">
                      <a routerLink="/products" class="text-decoration-none">
                        <i class="fas fa-shopping-bag me-2"></i>
                        Products
                      </a>
                    </div>
                    <div class="col-md-4 mb-2">
                      <a routerLink="/about" class="text-decoration-none">
                        <i class="fas fa-info-circle me-2"></i>
                        About Us
                      </a>
                    </div>
                    <div class="col-md-4 mb-2">
                      <a routerLink="/cart" class="text-decoration-none">
                        <i class="fas fa-shopping-cart me-2"></i>
                        Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {}
