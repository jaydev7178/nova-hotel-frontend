import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { CartItem, Order, CustomerInfo, PaymentInfo, OrderStatus, PaymentMethod, PaymentStatus } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  customerInfo: CustomerInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States'
    }
  };
  paymentInfo: PaymentInfo = {
    method: PaymentMethod.CREDIT_CARD,
    status: PaymentStatus.PENDING,
    amount: 0,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  };

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  private loadCartItems(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      if (items.length === 0) {
        this.router.navigate(['/cart']);
      }
    });
  }

  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.08; // 8% tax rate
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      const order: Order = {
        id: '',
        customerInfo: this.customerInfo,
        items: this.cartItems,
        totalAmount: this.getTotal(),
        status: OrderStatus.PENDING,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: this.paymentInfo
      };

      this.orderService.createOrder(order).subscribe(createdOrder => {
        this.cartService.clearCart();
        this.router.navigate(['/order-confirmation', createdOrder.id]);
      });
    }
  }

  private isFormValid(): boolean {
    // Basic validation - in a real app, you'd use reactive forms with proper validation
    return !!(this.customerInfo.firstName && 
              this.customerInfo.lastName && 
              this.customerInfo.email && 
              this.customerInfo.phone &&
              this.customerInfo.address.street &&
              this.customerInfo.address.city &&
              this.customerInfo.address.state &&
              this.customerInfo.address.zipCode);
  }
}