import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/product.model';

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {
  orders: Order[] = [];
  selectedOrder: Order | undefined;
  filterStatus = '';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  private loadOrders(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  selectOrder(order: Order): void {
    this.selectedOrder = order;
  }

  getPaymentStatusBadgeClass(status: string | undefined): string {
    switch (status) {
      case 'pending':
        return 'bg-warning';
      case 'paid':
        return 'bg-success';
      case 'failed':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }

  getSubtotal(order: Order): number {
    return order.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getTax(order: Order): number {
    return this.getSubtotal(order) * 0.08;
  }
}