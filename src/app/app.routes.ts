import { Routes } from '@angular/router';

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
    path: 'cart',
    loadComponent: () => import('./components/shopping-cart/shopping-cart.component').then(m => m.ShoppingCartComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./components/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'order-confirmation/:id',
    loadComponent: () => import('./components/order-confirmation/order-confirmation.component').then(m => m.OrderConfirmationComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./components/admin/product-management/product-management.component').then(m => m.ProductManagementComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./components/admin/order-management/order-management.component').then(m => m.OrderManagementComponent)
      },
      {
        path: 'approvals',
        loadComponent: () => import('./components/admin/approval-management/approval-management.component').then(m => m.ApprovalManagementComponent)
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
