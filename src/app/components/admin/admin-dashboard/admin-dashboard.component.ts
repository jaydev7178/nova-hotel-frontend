import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  template: `
    <div class="admin-layout">
      <!-- Admin Header -->
      <nav class="admin-header navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" routerLink="/admin">
            <i class="fas fa-crown me-2"></i>
            Nova Admin
          </a>
          
          <button class="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#adminNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="adminNavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" routerLink="/admin/dashboard" routerLinkActive="active">
                  <i class="fas fa-tachometer-alt me-1"></i>
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/admin/products" routerLinkActive="active">
                  <i class="fas fa-box me-1"></i>
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/admin/orders" routerLinkActive="active">
                  <i class="fas fa-shopping-cart me-1"></i>
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/admin/approvals" routerLinkActive="active">
                  <i class="fas fa-check-circle me-1"></i>
                  Approvals
                </a>
              </li>
            </ul>
            
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" routerLink="/home">
                  <i class="fas fa-external-link-alt me-1"></i>
                  View Site
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-sign-out-alt me-1"></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Admin Content -->
      <div class="admin-content">
        <div class="container-fluid py-4">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {}
