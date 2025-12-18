import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product, ProductCategory } from '../../models/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-admin-products',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
    categories: ProductCategory[] = [];
    products: Product[] = [];

    constructor(
        private productService: ProductService,
        private router: Router,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.loadCategories();
        this.loadProducts();
    }

    private loadCategories(): void {
        this.productService.getCategories().subscribe({
            next: (cats) => {
                this.categories = cats;
                if (!cats || cats.length === 0) {
                    this.toastr.warning('No categories available');
                }
            },
            error: (err) => {
                console.error('Failed to load categories', err);
                this.toastr.error('Failed to load categories from API');
            }
        });
    }

    private loadProducts(): void {
        this.productService.getProducts().subscribe({
            next: (prods) => (this.products = prods),
            error: (err) => console.error('Failed to load products', err)
        });
    }

    createProduct(): void {
        this.router.navigate(['/admin/products/create']);
    }

    editProduct(product: Product): void {
        this.router.navigate(['/admin/products', product.id, 'edit']);
    }

    deleteProduct(product: Product): void {
        if (!product || !product.id) return;
        this.productService.deleteProduct(product.id).subscribe({
            next: () => this.loadProducts(),
            error: (err) => console.error('Failed to delete product', err)
        });
    }
}