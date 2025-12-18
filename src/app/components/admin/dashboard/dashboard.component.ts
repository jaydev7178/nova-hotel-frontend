import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { ProductService } from '../../../services/product.service';
import { Order, Product } from '../../../models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  orders: Order[] = [];
  products: Product[] = [];
  totalOrders = 0;
  totalRevenue = 0;
  totalProducts = 0;
  pendingOrders = 0;
  currentDate = new Date();

  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    // Load orders
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.totalOrders = orders.length;
      this.pendingOrders = orders.filter(order => order.status === 'pending').length;
      this.totalRevenue = orders.reduce((total, order) => total + order.totalAmount, 0);
    });

    // Load products
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.totalProducts = products.length;
    });
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'pending':
        return 'bg-warning';
      case 'confirmed':
        return 'bg-info';
      case 'shipped':
        return 'bg-primary';
      case 'delivered':
        return 'bg-success';
      case 'cancelled':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
}