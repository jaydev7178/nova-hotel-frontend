import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product, ProductCategory } from '../models/product.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  submitting = false;
  categories: ProductCategory[] = [];
  uploadProgress = 0;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService
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
    this.loadCategories();
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

  onSubmit(): void {
    if (this.productForm.invalid) {
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
    this.productService.createProduct(payload).subscribe({
      next: (event: any) => {
        // If this is an HttpEvent (upload progress / response)
        if (event && event.type !== undefined) {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            this.uploadProgress = Math.round(100 * event.loaded / event.total);
          } else if (event.type === HttpEventType.Response) {
            const created = event.body;
            this.toastr.success('Product created');
            this.uploadProgress = 0;
            this.router.navigate(['/admin/products']);
          }
        } else {
          // Mock / immediate response
          const created = event;
          this.toastr.success('Product created');
          this.uploadProgress = 0;
          this.router.navigate(['/admin/products']);
        }
      },
      error: (err) => {
        console.error('Error creating product:', err);
        this.toastr.error('Failed to create product');
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