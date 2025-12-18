import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/product.model';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
  order: Order | undefined;
  orderId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
      if (this.orderId) {
        this.loadOrder(this.orderId);
      }
    });
  }

  private loadOrder(orderId: string): void {
    this.orderService.getOrder(orderId).subscribe(order => {
      if (order) {
        this.order = order;
        // Send confirmation email
        this.orderService.sendOrderConfirmation(order).subscribe({
          next: (response) => {
            console.log('Order confirmation email sent:', response);
          },
          error: (error) => {
            console.error('Failed to send confirmation email:', error);
          }
        });
      } else {
        // Order not found, redirect to home
        this.router.navigate(['/home']);
      }
    });
  }

  getSubtotal(): number {
    if (!this.order) return 0;
    return this.order.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.08; // 8% tax rate
  }

  getPaymentMethodLabel(method: string | undefined): string {
    switch (method) {
      case 'credit_card':
        return 'Credit Card';
      case 'bank_transfer':
        return 'Bank Transfer';
      case 'paypal':
        return 'PayPal';
      default:
        return 'Not specified';
    }
  }

  printOrder(): void {
    window.print();
  }
}