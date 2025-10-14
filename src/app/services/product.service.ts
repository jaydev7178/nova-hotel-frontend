import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product, ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'api/products'; // Replace with actual API endpoint

  // Mock data for demonstration
  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Sandalwood Collection - Shampoo',
      description: 'Luxurious wall-mounted shampoo infused with warm, woody sandalwood aroma. Perfect for modern hotels seeking elegance and convenience.',
      price: 12.99,
      images: [
        'assets/images/sandalwood-shampoo-1.jpg',
        'assets/images/sandalwood-shampoo-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Refillable 360 ml bottle',
        'Wall-mounted locking design',
        'English & French bilingual labels',
        'Premium sandalwood fragrance',
        'Eco-friendly & leak-proof pump'
      ],
      stock: 150,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        capacity: '360ml',
        fragrance: 'Sandalwood',
        language: 'English & French',
        design: 'Wall-mounted Locking'
      }
    },
    {
      id: '2',
      name: 'Sandalwood Collection - Shower Gel',
      description: 'Rich shower gel with sandalwood essence, designed for luxury hospitality environments.',
      price: 11.99,
      images: [
        'assets/images/sandalwood-gel-1.jpg',
        'assets/images/sandalwood-gel-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Refillable 360 ml bottle',
        'Wall-mounted locking design',
        'English & French bilingual labels',
        'Premium sandalwood fragrance',
        'Eco-friendly & leak-proof pump'
      ],
      stock: 120,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        capacity: '360ml',
        fragrance: 'Sandalwood',
        language: 'English & French',
        design: 'Wall-mounted Locking'
      }
    },
    {
      id: '3',
      name: 'Sandalwood Collection - Conditioner',
      description: 'Nourishing conditioner with sandalwood extract for silky smooth hair.',
      price: 13.99,
      images: [
        'assets/images/sandalwood-conditioner-1.jpg',
        'assets/images/sandalwood-conditioner-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Refillable 360 ml bottle',
        'Wall-mounted locking design',
        'English & French bilingual labels',
        'Premium sandalwood fragrance',
        'Eco-friendly & leak-proof pump'
      ],
      stock: 100,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        capacity: '360ml',
        fragrance: 'Sandalwood',
        language: 'English & French',
        design: 'Wall-mounted Locking'
      }
    },
    {
      id: '4',
      name: 'Luxury Bath Towel Set',
      description: 'Premium cotton bath towels with elegant embroidery for upscale hotel rooms.',
      price: 45.99,
      images: [
        'assets/images/towel-set-1.jpg',
        'assets/images/towel-set-2.jpg'
      ],
      category: 'Bathroom',
      features: [
        '100% Egyptian cotton',
        'Premium quality construction',
        'Elegant hotel embroidery',
        'Multiple sizes included',
        'Easy care instructions'
      ],
      stock: 75,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        material: '100% Egyptian Cotton',
        design: 'Hotel Embroidery'
      }
    }
  ];

  private mockCategories: ProductCategory[] = [
    {
      id: '1',
      name: 'Toiletries',
      description: 'Premium hotel toiletries and personal care products',
      image: 'assets/images/category-toiletries.jpg'
    },
    {
      id: '2',
      name: 'Bathroom',
      description: 'Luxury bathroom essentials and accessories',
      image: 'assets/images/category-bathroom.jpg'
    },
    {
      id: '3',
      name: 'Bedroom',
      description: 'Comfortable bedroom amenities and linens',
      image: 'assets/images/category-bedroom.jpg'
    },
    {
      id: '4',
      name: 'Dining',
      description: 'Fine dining and kitchen essentials',
      image: 'assets/images/category-dining.jpg'
    }
  ];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // In a real application, this would make an HTTP request
    // return this.http.get<Product[]>(this.apiUrl);
    return of(this.mockProducts);
  }

  getProduct(id: string): Observable<Product | undefined> {
    // return this.http.get<Product>(`${this.apiUrl}/${id}`);
    const product = this.mockProducts.find(p => p.id === id);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    // return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`);
    const products = this.mockProducts.filter(p => p.category === category);
    return of(products);
  }

  getCategories(): Observable<ProductCategory[]> {
    // return this.http.get<ProductCategory[]>(`${this.apiUrl}/categories`);
    return of(this.mockCategories);
  }

  searchProducts(query: string): Observable<Product[]> {
    // return this.http.get<Product[]>(`${this.apiUrl}/search?q=${query}`);
    const products = this.mockProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
    return of(products);
  }

  addProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Observable<Product> {
    // return this.http.post<Product>(this.apiUrl, product);
    const newProduct: Product = {
      ...product,
      id: (this.mockProducts.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.mockProducts.push(newProduct);
    return of(newProduct);
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    // return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
    const index = this.mockProducts.findIndex(p => p.id === id);
    if (index !== -1) {
      this.mockProducts[index] = {
        ...this.mockProducts[index],
        ...product,
        updatedAt: new Date()
      };
      return of(this.mockProducts[index]);
    }
    throw new Error('Product not found');
  }

  deleteProduct(id: string): Observable<void> {
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
    const index = this.mockProducts.findIndex(p => p.id === id);
    if (index !== -1) {
      this.mockProducts.splice(index, 1);
      return of(void 0);
    }
    throw new Error('Product not found');
  }
}
