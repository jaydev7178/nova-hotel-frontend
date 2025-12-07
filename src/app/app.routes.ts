import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./components/product-catalog/product-catalog.component').then(m => m.ProductCatalogComponent)
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./components/shopping-cart/shopping-cart.component').then(m => m.ShoppingCartComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    loadComponent: () => import('./components/checkout/checkout.component').then(m => m.CheckoutComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'order-confirmation/:id',
    loadComponent: () => import('./components/order-confirmation/order-confirmation.component').then(m => m.OrderConfirmationComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [AuthGuard],
        data: { role: 'admin' }
      },
      {
        path: 'products',
        loadComponent: () => import('./components/admin/product-management/product-management.component').then(m => m.ProductManagementComponent),
        canActivate: [AuthGuard],
        data: { role: 'admin' }
      },
      {
        path: 'orders',
        loadComponent: () => import('./components/admin/order-management/order-management.component').then(m => m.OrderManagementComponent),
        canActivate: [AuthGuard],
        data: { role: 'admin' }
      },
      {
        path: 'approvals',
        loadComponent: () => import('./components/admin/approval-management/approval-management.component').then(m => m.ApprovalManagementComponent),
        canActivate: [AuthGuard],
        data: { role: 'admin' }
      }
    ]
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
