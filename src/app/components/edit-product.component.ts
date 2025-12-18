import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Product, ProductCategory } from '../models/product.model';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  submitting = false;
  productId: string | null = null;
  categoryId: string | null = null;
  categories: ProductCategory[] = [];
  uploadProgress = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.maxLength(2000)]],
      price: [0, [Validators.required, Validators.min(0)]],
      categoryId: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      isActive: [true],
      coverImage: [null],
      galleryImages: [null]
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.loadCategories();
    if (this.productId) this.loadProduct(this.productId);
  }

  private loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
        if (!cats || cats.length === 0) {
          this.toastr.warning('No categories available. Please contact admin.');
        }
      },
      error: (err) => {
        console.error('Failed to load categories', err);
        this.toastr.error('Failed to load categories');
      }
    });
  }

  private loadProduct(id: string): void {
    this.productService.getProduct(id).subscribe({
      next: (p) => {
        if (!p) {
          this.toastr.error('Product not found');
          this.router.navigate(['/admin/products']);
          return;
        }
        // Find categoryId from category name
        const matchingCat = this.categories.find(c => c.name === p.category);
        this.categoryId = matchingCat?.id || '';
        
        this.productForm.patchValue({
          name: p.name,
          description: p.description,
          price: p.price,
          categoryId: this.categoryId,
          stock: p.stock,
          isActive: p.isActive
        });
      },
      error: (err) => {
        console.error('Failed to load product', err);
        this.toastr.error('Failed to load product');
        this.router.navigate(['/admin/products']);
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid || !this.productId) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const formValue = this.productForm.value;
    const payload: any = {
      name: formValue.name,
      description: formValue.description,
      price: formValue.price,
      categoryId: parseInt(formValue.categoryId, 10),
      stockQuantity: formValue.stock,
      isActive: formValue.isActive,
      coverImage: formValue.coverImage,
      galleryImages: formValue.galleryImages
    };

    this.uploadProgress = 0;
    this.productService.updateProduct(this.productId, payload).subscribe({
      next: (event: any) => {
        if (event && event.type !== undefined) {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            this.uploadProgress = Math.round(100 * event.loaded / event.total);
          } else if (event.type === HttpEventType.Response) {
            this.toastr.success('Product updated');
            this.uploadProgress = 0;
            this.router.navigate(['/admin/products']);
          }
        } else {
          // Mock / immediate response
          this.toastr.success('Product updated');
          this.uploadProgress = 0;
          this.router.navigate(['/admin/products']);
        }
      },
      error: (err) => {
        console.error('Failed to update', err);
        this.toastr.error('Failed to update product');
        this.submitting = false;
        this.uploadProgress = 0;
      }
    });
  }
  onCoverImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files.length ? input.files[0] : null;
    this.productForm.patchValue({ coverImage: file });
  }

  onGalleryImagesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files && input.files.length ? input.files : null;
    this.productForm.patchValue({ galleryImages: files });
  }

  cancel(): void {
    this.router.navigate(['/admin/products']);
  }
}
