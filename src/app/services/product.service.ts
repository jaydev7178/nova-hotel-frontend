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
      name: 'Body Wash',
      description: 'Luxurious body wash with gentle cleansing formula, perfect for hotel guests seeking premium skincare.',
      price: 8.99,
      images: [
        'assets/images/body-wash-1.jpg',
        'assets/images/body-wash-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Gentle cleansing formula',
        'Moisturizing properties',
        'Fresh fragrance',
        'Suitable for all skin types',
        'Eco-friendly packaging'
      ],
      stock: 200,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        capacity: '250ml',
        fragrance: 'Fresh',
        design: 'Hotel Standard'
      }
    },
    {
      id: '2',
      name: 'Shampoo',
      description: 'Professional-grade shampoo designed for luxury hotels, providing excellent cleansing and conditioning.',
      price: 9.99,
      images: [
        'assets/images/shampoo-1.jpg',
        'assets/images/shampoo-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Professional-grade formula',
        'Deep cleansing action',
        'Suitable for all hair types',
        'Premium fragrance',
        'Easy-to-use pump dispenser'
      ],
      stock: 180,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        capacity: '250ml',
        fragrance: 'Professional',
        design: 'Pump Dispenser'
      }
    },
    {
      id: '3',
      name: 'Hand Wash',
      description: 'Antibacterial hand wash with moisturizing properties, essential for hotel bathroom amenities.',
      price: 7.99,
      images: [
        'assets/images/hand-wash-1.jpg',
        'assets/images/hand-wash-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Antibacterial formula',
        'Moisturizing properties',
        'Gentle on hands',
        'Fresh, clean fragrance',
        'Easy-to-use dispenser'
      ],
      stock: 150,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        capacity: '250ml',
        fragrance: 'Clean',
        design: 'Wall Mount'
      }
    },
    {
      id: '4',
      name: 'Conditioner',
      description: 'Rich conditioner for silky smooth hair, designed to complement our shampoo for complete hair care.',
      price: 10.99,
      images: [
        'assets/images/conditioner-1.jpg',
        'assets/images/conditioner-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Rich conditioning formula',
        'Silky smooth results',
        'Suitable for all hair types',
        'Complementary fragrance',
        'Professional packaging'
      ],
      stock: 160,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        capacity: '250ml',
        fragrance: 'Professional',
        design: 'Pump Dispenser'
      }
    },
    {
      id: '5',
      name: 'Body Lotion',
      description: 'Moisturizing body lotion with vitamin E, providing long-lasting hydration for hotel guests.',
      price: 11.99,
      images: [
        'assets/images/body-lotion-1.jpg',
        'assets/images/body-lotion-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Vitamin E enriched',
        'Long-lasting hydration',
        'Light, non-greasy formula',
        'Pleasant fragrance',
        'Fast-absorbing'
      ],
      stock: 140,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        capacity: '200ml',
        fragrance: 'Light',
        design: 'Pump Bottle'
      }
    },
    {
      id: '6',
      name: 'Shaving Kit',
      description: 'Complete shaving kit including razor, shaving cream, and after-shave lotion for gentlemen.',
      price: 15.99,
      images: [
        'assets/images/shaving-kit-1.jpg',
        'assets/images/shaving-kit-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Disposable razor included',
        'Shaving cream',
        'After-shave lotion',
        'Compact travel case',
        'Premium quality'
      ],
      stock: 100,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        material: 'Disposable',
        design: 'Travel Kit'
      }
    },
    {
      id: '7',
      name: 'Vanity Kit',
      description: 'Comprehensive vanity kit with essential personal care items for hotel guests.',
      price: 12.99,
      images: [
        'assets/images/vanity-kit-1.jpg',
        'assets/images/vanity-kit-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Multiple personal care items',
        'Convenient packaging',
        'Travel-friendly',
        'Premium quality',
        'Complete set'
      ],
      stock: 120,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        material: 'Multiple',
        design: 'Complete Kit'
      }
    },
    {
      id: '8',
      name: 'Shower Cap',
      description: 'Waterproof shower cap to protect hair during showers, essential hotel amenity.',
      price: 3.99,
      images: [
        'assets/images/shower-cap-1.jpg',
        'assets/images/shower-cap-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Waterproof material',
        'Elastic band',
        'One-size-fits-all',
        'Disposable',
        'Hygienic packaging'
      ],
      stock: 300,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        material: 'Waterproof Plastic',
        design: 'Elastic Band'
      }
    },
    {
      id: '9',
      name: 'Comb',
      description: 'Stylish comb for hair care, made from durable materials for hotel use.',
      price: 4.99,
      images: [
        'assets/images/comb-1.jpg',
        'assets/images/comb-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Durable construction',
        'Wide-tooth design',
        'Easy to clean',
        'Hygienic',
        'Long-lasting'
      ],
      stock: 250,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        material: 'Plastic',
        design: 'Wide-tooth'
      }
    },
    {
      id: '10',
      name: 'Soap',
      description: 'Premium soap bar with gentle cleansing properties and pleasant fragrance.',
      price: 2.99,
      images: [
        'assets/images/soap-1.jpg',
        'assets/images/soap-2.jpg'
      ],
      category: 'Toiletries',
      features: [
        'Gentle cleansing',
        'Moisturizing formula',
        'Pleasant fragrance',
        'Long-lasting',
        'Eco-friendly'
      ],
      stock: 400,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        material: 'Soap Bar',
        design: 'Standard Size'
      }
    },
    {
      id: '11',
      name: 'Slippers',
      description: 'Comfortable hotel slippers for guest convenience and comfort.',
      price: 6.99,
      images: [
        'assets/images/slippers-1.jpg',
        'assets/images/slippers-2.jpg'
      ],
      category: 'Bathroom',
      features: [
        'Comfortable fit',
        'Non-slip sole',
        'Disposable',
        'One-size-fits-most',
        'Soft material'
      ],
      stock: 200,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        material: 'Soft Fabric',
        design: 'One Size'
      }
    },
    {
      id: '12',
      name: 'Bracket',
      description: 'Wall-mounted bracket for organizing bathroom amenities and toiletries.',
      price: 8.99,
      images: [
        'assets/images/bracket-1.jpg',
        'assets/images/bracket-2.jpg'
      ],
      category: 'Bathroom',
      features: [
        'Wall-mounted design',
        'Durable construction',
        'Easy installation',
        'Space-saving',
        'Rust-resistant'
      ],
      stock: 80,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        material: 'Stainless Steel',
        design: 'Wall Mount'
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
