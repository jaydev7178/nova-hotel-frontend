import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Order, OrderStatus } from '../../../models/product.model';

@Component({
  selector: 'app-approval-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './approval-management.component.html',
  styleUrls: ['./approval-management.component.scss']
})
export class ApprovalManagementComponent implements OnInit {
  pendingOrders: Order[] = [];
  selectedOrder: Order | undefined;
  selectAll = false;
  selectedOrders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadPendingOrders();
  }

  private loadPendingOrders(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.pendingOrders = orders.filter(order => order.status === 'pending');
    });
  }

  selectOrder(order: Order): void {
    this.selectedOrder = order;
  }

  toggleSelectAll(): void {
    this.pendingOrders.forEach(order => order.selected = false);
    this.selectAll = !this.selectAll;
    this.updateSelectedOrders();
  }

  toggleOrderSelection(order: Order): void {
    order.selected = !order.selected;
    this.updateSelectedOrders();
  }

  private updateSelectedOrders(): void {
    this.selectedOrders = this.pendingOrders.filter(order => order.selected);
  }

  getSubtotal(order: Order): number {
    return order.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getTax(order: Order): number {
    return this.getSubtotal(order) * 0.08;
  }

  getStockBadgeClass(stock: number, quantity: number): string {
    if (stock >= quantity) return 'bg-success';
    if (stock > 0) return 'bg-warning';
    return 'bg-danger';
  }

  getStockStatusClass(stock: number, quantity: number): string {
    if (stock >= quantity) return 'text-success';
    if (stock > 0) return 'text-warning';
    return 'text-danger';
  }

  getStockIcon(stock: number, quantity: number): string {
    if (stock >= quantity) return 'fa-check-circle';
    if (stock > 0) return 'fa-exclamation-triangle';
    return 'fa-times-circle';
  }

  getStockMessage(stock: number, quantity: number): string {
    if (stock >= quantity) return 'Stock available';
    if (stock > 0) return 'Limited stock';
    return 'Out of stock';
  }

  approveOrder(order: Order): void {
    // Update order status to approved
    order.status = OrderStatus.APPROVED;
    order.updatedAt = new Date();
    // In a real app, you would call the order service to update the order
  }

  rejectOrder(order: Order): void {
    // Update order status to cancelled
    order.status = OrderStatus.CANCELLED;
    order.updatedAt = new Date();
    // In a real app, you would call the order service to update the order
  }

  approveSelected(): void {
    this.selectedOrders.forEach(order => this.approveOrder(order));
    this.selectedOrders = [];
    this.selectAll = false;
  }

  get pendingRevenue(): number {
    return this.pendingOrders.reduce((total, order) => total + order.totalAmount, 0);
  }

  getTimeAgo(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  }
}