"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["common"],{

/***/ 4562:
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryStatus: () => (/* binding */ DeliveryStatus),
/* harmony export */   OrderStatus: () => (/* binding */ OrderStatus),
/* harmony export */   PaymentMethod: () => (/* binding */ PaymentMethod),
/* harmony export */   PaymentStatus: () => (/* binding */ PaymentStatus)
/* harmony export */ });
var OrderStatus;
(function (OrderStatus) {
  OrderStatus["PENDING"] = "pending";
  OrderStatus["APPROVED"] = "approved";
  OrderStatus["PROCESSING"] = "processing";
  OrderStatus["SHIPPED"] = "shipped";
  OrderStatus["DELIVERED"] = "delivered";
  OrderStatus["CANCELLED"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
  PaymentStatus["PENDING"] = "pending";
  PaymentStatus["PROCESSING"] = "processing";
  PaymentStatus["COMPLETED"] = "completed";
  PaymentStatus["FAILED"] = "failed";
  PaymentStatus["REFUNDED"] = "refunded";
})(PaymentStatus || (PaymentStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
  PaymentMethod["CREDIT_CARD"] = "credit_card";
  PaymentMethod["BANK_TRANSFER"] = "bank_transfer";
  PaymentMethod["PAYPAL"] = "paypal";
})(PaymentMethod || (PaymentMethod = {}));
var DeliveryStatus;
(function (DeliveryStatus) {
  DeliveryStatus["PENDING"] = "pending";
  DeliveryStatus["IN_TRANSIT"] = "in_transit";
  DeliveryStatus["DELIVERED"] = "delivered";
  DeliveryStatus["FAILED"] = "failed";
})(DeliveryStatus || (DeliveryStatus = {}));

/***/ }),

/***/ 8674:
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product.model */ 4562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class OrderService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'api/orders'; // Replace with actual API endpoint
    this.orders = [];
  }
  createOrder(order) {
    // In a real application, this would make an HTTP request
    // return this.http.post<Order>(this.apiUrl, order);
    // Mock implementation
    const newOrder = {
      ...order,
      id: this.generateOrderId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.orders.push(newOrder);
    // Simulate async operation
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(newOrder);
  }
  getOrders() {
    // return this.http.get<Order[]>(this.apiUrl);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.orders);
  }
  getOrder(id) {
    // return this.http.get<Order>(`${this.apiUrl}/${id}`);
    const order = this.orders.find(o => o.id === id);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(order);
  }
  updateOrderStatus(id, status) {
    // return this.http.put<Order>(`${this.apiUrl}/${id}/status`, { status });
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = status;
      order.updatedAt = new Date();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(order);
    }
    throw new Error('Order not found');
  }
  updatePaymentStatus(id, paymentStatus, transactionId) {
    // return this.http.put<Order>(`${this.apiUrl}/${id}/payment`, { paymentStatus, transactionId });
    const order = this.orders.find(o => o.id === id);
    if (order && order.paymentInfo) {
      order.paymentInfo.status = paymentStatus;
      if (transactionId) {
        order.paymentInfo.transactionId = transactionId;
      }
      order.paymentInfo.processedAt = new Date();
      order.updatedAt = new Date();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(order);
    }
    throw new Error('Order not found');
  }
  getOrdersByStatus(status) {
    // return this.http.get<Order[]>(`${this.apiUrl}?status=${status}`);
    const orders = this.orders.filter(o => o.status === status);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(orders);
  }
  getPendingApprovalOrders() {
    // return this.http.get<Order[]>(`${this.apiUrl}/pending-approval`);
    const orders = this.orders.filter(o => o.status === _models_product_model__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.PENDING);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(orders);
  }
  approveOrder(id) {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/approve`, {});
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = _models_product_model__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.APPROVED;
      order.updatedAt = new Date();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(order);
    }
    throw new Error('Order not found');
  }
  rejectOrder(id, reason) {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/reject`, { reason });
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = _models_product_model__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.CANCELLED;
      order.updatedAt = new Date();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(order);
    }
    throw new Error('Order not found');
  }
  processPayment(id) {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/process-payment`, {});
    const order = this.orders.find(o => o.id === id);
    if (order && order.paymentInfo) {
      order.paymentInfo.status = _models_product_model__WEBPACK_IMPORTED_MODULE_0__.PaymentStatus.COMPLETED;
      order.paymentInfo.processedAt = new Date();
      order.status = _models_product_model__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.PROCESSING;
      order.updatedAt = new Date();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(order);
    }
    throw new Error('Order not found');
  }
  shipOrder(id, trackingNumber, carrier) {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/ship`, { trackingNumber, carrier });
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = _models_product_model__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.SHIPPED;
      order.deliveryInfo = {
        ...order.deliveryInfo,
        trackingNumber,
        carrier,
        status: 'in_transit',
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
      };
      order.updatedAt = new Date();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(order);
    }
    throw new Error('Order not found');
  }
  markAsDelivered(id) {
    // return this.http.post<Order>(`${this.apiUrl}/${id}/deliver`, {});
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = _models_product_model__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.DELIVERED;
      if (order.deliveryInfo) {
        order.deliveryInfo.status = 'delivered';
        order.deliveryInfo.actualDelivery = new Date();
      }
      order.updatedAt = new Date();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(order);
    }
    throw new Error('Order not found');
  }
  generateOrderId() {
    return 'ORD-' + Date.now().toString(36).toUpperCase();
  }
  // Email service integration
  sendOrderConfirmation(order) {
    // In a real application, this would integrate with an email service
    // return this.http.post<any>('api/email/order-confirmation', order);
    // Mock implementation
    console.log('Sending order confirmation email to:', order.customerInfo.email);
    console.log('Order details:', order);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
      success: true,
      messageId: 'mock-email-id'
    });
  }
  sendOrderUpdateNotification(order, updateType) {
    // return this.http.post<any>('api/email/order-update', { order, updateType });
    // Mock implementation
    console.log('Sending order update notification:', updateType, 'to:', order.customerInfo.email);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
      success: true,
      messageId: 'mock-update-email-id'
    });
  }
  static {
    this.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6241:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class ProductService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'api/products'; // Replace with actual API endpoint
    // Mock data for demonstration
    this.mockProducts = [{
      id: '1',
      name: 'Sandalwood Collection - Shampoo',
      description: 'Luxurious wall-mounted shampoo infused with warm, woody sandalwood aroma. Perfect for modern hotels seeking elegance and convenience.',
      price: 12.99,
      images: ['assets/images/sandalwood-shampoo-1.jpg', 'assets/images/sandalwood-shampoo-2.jpg'],
      category: 'Toiletries',
      features: ['Refillable 360 ml bottle', 'Wall-mounted locking design', 'English & French bilingual labels', 'Premium sandalwood fragrance', 'Eco-friendly & leak-proof pump'],
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
    }, {
      id: '2',
      name: 'Sandalwood Collection - Shower Gel',
      description: 'Rich shower gel with sandalwood essence, designed for luxury hospitality environments.',
      price: 11.99,
      images: ['assets/images/sandalwood-gel-1.jpg', 'assets/images/sandalwood-gel-2.jpg'],
      category: 'Toiletries',
      features: ['Refillable 360 ml bottle', 'Wall-mounted locking design', 'English & French bilingual labels', 'Premium sandalwood fragrance', 'Eco-friendly & leak-proof pump'],
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
    }, {
      id: '3',
      name: 'Sandalwood Collection - Conditioner',
      description: 'Nourishing conditioner with sandalwood extract for silky smooth hair.',
      price: 13.99,
      images: ['assets/images/sandalwood-conditioner-1.jpg', 'assets/images/sandalwood-conditioner-2.jpg'],
      category: 'Toiletries',
      features: ['Refillable 360 ml bottle', 'Wall-mounted locking design', 'English & French bilingual labels', 'Premium sandalwood fragrance', 'Eco-friendly & leak-proof pump'],
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
    }, {
      id: '4',
      name: 'Luxury Bath Towel Set',
      description: 'Premium cotton bath towels with elegant embroidery for upscale hotel rooms.',
      price: 45.99,
      images: ['assets/images/towel-set-1.jpg', 'assets/images/towel-set-2.jpg'],
      category: 'Bathroom',
      features: ['100% Egyptian cotton', 'Premium quality construction', 'Elegant hotel embroidery', 'Multiple sizes included', 'Easy care instructions'],
      stock: 75,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        material: '100% Egyptian Cotton',
        design: 'Hotel Embroidery'
      }
    }];
    this.mockCategories = [{
      id: '1',
      name: 'Toiletries',
      description: 'Premium hotel toiletries and personal care products',
      image: 'assets/images/category-toiletries.jpg'
    }, {
      id: '2',
      name: 'Bathroom',
      description: 'Luxury bathroom essentials and accessories',
      image: 'assets/images/category-bathroom.jpg'
    }, {
      id: '3',
      name: 'Bedroom',
      description: 'Comfortable bedroom amenities and linens',
      image: 'assets/images/category-bedroom.jpg'
    }, {
      id: '4',
      name: 'Dining',
      description: 'Fine dining and kitchen essentials',
      image: 'assets/images/category-dining.jpg'
    }];
  }
  getProducts() {
    // In a real application, this would make an HTTP request
    // return this.http.get<Product[]>(this.apiUrl);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.mockProducts);
  }
  getProduct(id) {
    // return this.http.get<Product>(`${this.apiUrl}/${id}`);
    const product = this.mockProducts.find(p => p.id === id);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(product);
  }
  getProductsByCategory(category) {
    // return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`);
    const products = this.mockProducts.filter(p => p.category === category);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(products);
  }
  getCategories() {
    // return this.http.get<ProductCategory[]>(`${this.apiUrl}/categories`);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.mockCategories);
  }
  searchProducts(query) {
    // return this.http.get<Product[]>(`${this.apiUrl}/search?q=${query}`);
    const products = this.mockProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(products);
  }
  addProduct(product) {
    // return this.http.post<Product>(this.apiUrl, product);
    const newProduct = {
      ...product,
      id: (this.mockProducts.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.mockProducts.push(newProduct);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(newProduct);
  }
  updateProduct(id, product) {
    // return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
    const index = this.mockProducts.findIndex(p => p.id === id);
    if (index !== -1) {
      this.mockProducts[index] = {
        ...this.mockProducts[index],
        ...product,
        updatedAt: new Date()
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.mockProducts[index]);
    }
    throw new Error('Product not found');
  }
  deleteProduct(id) {
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
    const index = this.mockProducts.findIndex(p => p.id === id);
    if (index !== -1) {
      this.mockProducts.splice(index, 1);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(void 0);
    }
    throw new Error('Product not found');
  }
  static {
    this.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map