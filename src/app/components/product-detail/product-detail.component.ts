import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  relatedProducts: Product[] = [];
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.loadProduct(productId);
        this.loadRelatedProducts();
      }
    });
  }

  private loadProduct(id: string): void {
    this.productService.getProduct(id).subscribe(product => {
      if (product) {
        this.product = product;
      } else {
        this.router.navigate(['/products']);
      }
    });
  }

  private loadRelatedProducts(): void {
    // Load related products (same category, excluding current product)
    this.productService.getProducts().subscribe(products => {
      if (this.product) {
        this.relatedProducts = products
          .filter(p => p.id !== this.product!.id && p.category === this.product!.category)
          .slice(0, 4);
      }
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      // You could add a toast notification here
    }
  }

  incrementQuantity(): void {
    if (this.product && this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  viewRelatedProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}