import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Order, OrderStatus, PaymentStatus, PaymentMethod } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'api/orders'; // Replace with actual API endpoint
  private orders: Order[] = [];

  constructor(private http: HttpClient) {}

  createOrder(order: Order): Observable<Order> {
    // In a real application, this would make an HTTP request
    // return this.http.post<Order>(this.apiUrl, order);
    
    // Mock implementation
    const newOrder: Order = {
      ...order,
      id: this.generateOrderId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.orders.push(newOrder);
    
    // Simulate async operation
    return of(newOrder);
  }

  getOrders(): Observable<Order[]> {
    // return this.http.get<Order[]>(this.apiUrl);
    return of(this.orders);
  }

  getOrder(id: string): Observable<Order | undefined> {
    // return this.http.get<Order>(`${this.apiUrl}/${id}`);
    const order = this.orders.find(o => o.id === id);
    return of(order);
  }

  updateOrderStatus(id: string, status: OrderStatus): Observable<Order> {
    // return this.http.put<Order>(`${this.apiUrl}/${id}/status`, { status });
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = status;
      order.updatedAt = new Date();
      return of(order);
    }
    throw new Error('Order not found');
  }

  updatePaymentStatus(id: string, paymentStatus: PaymentStatus, transactionId?: string): Observable<Order> {
    // return this.http.put<Order>(`${this.apiUrl}/${id}/payment`, { paymentStatus, transactionId });
    const order = this.orders.find(o => o.id === id);
    if (order && order.paymentInfo) {
      order.paymentInfo.status = paymentStatus;
      if (transactionId) {
        order.paymentInfo.transactionId = transactionId;
      }
      order.paymentInfo.processedAt = new Date();
      order.updatedAt = new Date();
      return of(order);
    }
    throw new Error('Order not found');
  }

  getOrdersByStatus(status: OrderStatus): Observable<Order[]> {
    // return this.http.get<Order[]>(`${this.apiUrl}?status=${status}`);
    const orders = this.orders.filter(o => o.status === status);
    return of(orders);
  }

  getPendingApprovalOrders(): Observable<Order[]> {
    // return this.http.get<Order[]>(`${this.apiUrl}/pending-approval`);
    const orders = this.orders.filter(o => o.status === OrderStatus.PENDING);
    return of(orders);
  }

  approveOrder(id: string): Observable<Order> {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/approve`, {});
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = OrderStatus.APPROVED;
      order.updatedAt = new Date();
      return of(order);
    }
    throw new Error('Order not found');
  }

  rejectOrder(id: string, reason: string): Observable<Order> {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/reject`, { reason });
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = OrderStatus.CANCELLED;
      order.updatedAt = new Date();
      return of(order);
    }
    throw new Error('Order not found');
  }

  processPayment(id: string): Observable<Order> {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/process-payment`, {});
    const order = this.orders.find(o => o.id === id);
    if (order && order.paymentInfo) {
      order.paymentInfo.status = PaymentStatus.COMPLETED;
      order.paymentInfo.processedAt = new Date();
      order.status = OrderStatus.PROCESSING;
      order.updatedAt = new Date();
      return of(order);
    }
    throw new Error('Order not found');
  }

  shipOrder(id: string, trackingNumber: string, carrier: string): Observable<Order> {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/ship`, { trackingNumber, carrier });
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = OrderStatus.SHIPPED;
      order.deliveryInfo = {
        ...order.deliveryInfo,
        trackingNumber,
        carrier,
        status: 'in_transit' as any,
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
      };
      order.updatedAt = new Date();
      return of(order);
    }
    throw new Error('Order not found');
  }

  markAsDelivered(id: string): Observable<Order> {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/deliver`, {});
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = OrderStatus.DELIVERED;
      if (order.deliveryInfo) {
        order.deliveryInfo.status = 'delivered' as any;
        order.deliveryInfo.actualDelivery = new Date();
      }
      order.updatedAt = new Date();
      return of(order);
    }
    throw new Error('Order not found');
  }

  private generateOrderId(): string {
    return 'ORD-' + Date.now().toString(36).toUpperCase();
  }

  // Email service integration
  sendOrderConfirmation(order: Order): Observable<any> {
    // In a real application, this would integrate with an email service
    // return this.http.post<any>('api/email/order-confirmation', order);
    
    // Mock implementation
    console.log('Sending order confirmation email to:', order.customerInfo.email);
    console.log('Order details:', order);
    
    return of({ success: true, messageId: 'mock-email-id' });
  }

  sendOrderUpdateNotification(order: Order, updateType: string): Observable<any> {
    // return this.http.post<any>('api/email/order-update', { order, updateType });
    
    // Mock implementation
    console.log('Sending order update notification:', updateType, 'to:', order.customerInfo.email);
    
    return of({ success: true, messageId: 'mock-update-email-id' });
  }
}
