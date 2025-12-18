import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  private loadCartItems(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(productId);
    } else {
      this.cartService.updateQuantity(productId, quantity);
    }
  }

  removeItem(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
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
}