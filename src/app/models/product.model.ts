export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  features: string[];
  stock: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  specifications?: {
    capacity?: string;
    material?: string;
    fragrance?: string;
    language?: string;
    design?: string;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  customerInfo: CustomerInfo;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  paymentInfo?: PaymentInfo;
  deliveryInfo?: DeliveryInfo;
  selected?: boolean; // For admin selection functionality
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface PaymentInfo {
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
  amount: number;
  processedAt?: Date;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardholderName?: string;
}

export interface DeliveryInfo {
  trackingNumber?: string;
  carrier?: string;
  estimatedDelivery?: Date;
  actualDelivery?: Date;
  status: DeliveryStatus;
}

export enum OrderStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded'
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  BANK_TRANSFER = 'bank_transfer',
  PAYPAL = 'paypal'
}

export enum DeliveryStatus {
  PENDING = 'pending',
  IN_TRANSIT = 'in_transit',
  DELIVERED = 'delivered',
  FAILED = 'failed'
}

export interface PagedResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  number: number;      // current page
  size: number;        // page size
  first: boolean;
  last: boolean;
}