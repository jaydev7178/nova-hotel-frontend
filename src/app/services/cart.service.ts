import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartItem, Product } from '../models/product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Load cart from localStorage on initialization
    this.loadCartFromStorage();
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  getCartItemsSync(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product, quantity: number = 1): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: '/products' }
      });
      return false;
    }
    
    this.addItemToCart(product, quantity);
    return true;
  }

  private addItemToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
    
    this.updateCart();
  }

  removeFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.updateCart();
  }

  updateQuantity(productId: string, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.updateCart();
      }
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  private updateCart(): void {
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToStorage();
  }

  private saveCartToStorage(): void {
    localStorage.setItem('nova-cart', JSON.stringify(this.cartItems));
  }

  private loadCartFromStorage(): void {
    const savedCart = localStorage.getItem('nova-cart');
    if (savedCart) {
      try {
        this.cartItems = JSON.parse(savedCart);
        this.cartSubject.next([...this.cartItems]);
      } catch (error) {
        console.error('Error loading cart from storage:', error);
        this.cartItems = [];
      }
    }
  }
}
