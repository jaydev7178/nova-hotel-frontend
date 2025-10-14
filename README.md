# Nova Hotel Supplies - Angular E-commerce Application

A comprehensive Angular-based e-commerce application for Nova Hotel Supplies Ltd., featuring a modern, responsive design with full admin panel functionality for managing hotel supplies and amenities.

## 🏨 About Nova Hotel Supplies

Nova Hotel Supplies specializes in providing premium hotel toiletries and essentials that go beyond amenities, into experience. Our products are designed to reflect the quality and standard that your guests deserve, partnering with hotels, resorts, and hospitality businesses to deliver solutions that elevate comfort and create lasting impressions.

## ✨ Features

### Customer Features
- **Product Catalog**: Browse and search through premium hotel supplies
- **Product Details**: Detailed product information with images and specifications
- **Shopping Cart**: Add, remove, and manage items in cart
- **Checkout Process**: Complete order placement with customer information
- **Order Confirmation**: Email confirmation with order details
- **Responsive Design**: Mobile-first design that works on all devices

### Admin Features
- **Dashboard**: Overview of orders, products, and key metrics
- **Product Management**: Add, edit, delete, and manage product inventory
- **Order Management**: View, update, and track order status
- **Approval System**: Review and approve orders for stock availability
- **Stock Management**: Real-time inventory tracking with low stock alerts
- **Order Processing**: Complete order lifecycle management

### Business Workflow
1. **Browse**: Customers browse the product catalog
2. **Add to Catalog**: Items are added to shopping cart
3. **Final Catalog (Checkout)**: Customer completes order
4. **Email Confirmation**: Automatic email with product list
5. **Owner Approval**: Admin reviews and approves stock availability
6. **Payment Processing**: Payment is processed after approval
7. **Order Delivery**: Order is shipped and tracked

## 🚀 Technology Stack

- **Frontend**: Angular 17+ with standalone components
- **Styling**: Bootstrap 5 + Custom SCSS
- **Icons**: Font Awesome
- **State Management**: RxJS Observables and Services
- **Routing**: Angular Router with lazy loading
- **Forms**: Angular Reactive Forms with validation
- **HTTP**: Angular HttpClient for API communication

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nova-hotel-supplies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Angular CLI (if not already installed)**
   ```bash
   npm install -g @angular/cli
   ```

4. **Install additional dependencies**
   ```bash
   npm install bootstrap ngx-toastr ngx-pagination
   ```

5. **Add Font Awesome**
   ```bash
   npm install @fortawesome/fontawesome-free
   ```

6. **Update angular.json to include Font Awesome**
   ```json
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
     "node_modules/ngx-toastr/toastr.css",
     "src/styles.scss"
   ],
   "scripts": [
     "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
   ]
   ```

7. **Run the application**
   ```bash
   ng serve
   ```

8. **Open your browser**
   Navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── shared/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── home/
│   │   ├── product-catalog/
│   │   ├── product-detail/
│   │   ├── shopping-cart/
│   │   ├── checkout/
│   │   ├── order-confirmation/
│   │   ├── about/
│   │   ├── not-found/
│   │   └── admin/
│   │       ├── admin-dashboard/
│   │       ├── dashboard/
│   │       ├── product-management/
│   │       ├── order-management/
│   │       └── approval-management/
│   ├── models/
│   │   └── product.model.ts
│   ├── services/
│   │   ├── product.service.ts
│   │   ├── cart.service.ts
│   │   └── order.service.ts
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── main.ts
├── assets/
│   └── images/
├── styles.scss
└── index.html
```

## 🎨 Design System

### Color Palette
- **Primary**: #2c5aa0 (Navy Blue)
- **Secondary**: #8b4513 (Saddle Brown)
- **Accent**: #d4af37 (Gold)
- **Text Dark**: #2c3e50
- **Text Light**: #6c757d
- **Background**: #f8f9fa

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Consistent styling with hover animations
- **Forms**: Bootstrap styling with custom validation
- **Tables**: Responsive with hover effects
- **Modals**: Full-featured with proper accessibility

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with appropriate breakpoints.

## 🔧 Configuration

### Environment Setup
Create `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### API Integration
The application uses mock services for demonstration. To integrate with a real API:

1. Update service URLs in `src/app/services/`
2. Configure CORS on your backend
3. Update authentication if required
4. Implement error handling

## 🛠️ Development

### Available Scripts
- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests
- `ng lint` - Run linting

### Code Style
- Follow Angular style guide
- Use TypeScript strict mode
- Implement proper error handling
- Add JSDoc comments for complex functions

## 🚀 Deployment

### Build for Production
```bash
ng build --configuration production
```

### Deploy to Netlify/Vercel
1. Build the application
2. Upload `dist/` folder contents
3. Configure routing for SPA

### Deploy to Apache/Nginx
1. Build the application
2. Configure server for Angular routing
3. Set up proper caching headers

## 📊 Features Breakdown

### Product Catalog
- Grid and list view options
- Search and filter functionality
- Category-based browsing
- Product comparison features

### Shopping Cart
- Persistent cart storage
- Quantity management
- Real-time total calculation
- Cart item validation

### Checkout Process
- Multi-step form validation
- Customer information collection
- Payment method selection
- Order confirmation

### Admin Dashboard
- Real-time statistics
- Order management
- Product inventory control
- Stock level monitoring

### Approval Workflow
- Order review interface
- Stock availability checking
- Bulk approval operations
- Rejection with reasons

## 🔒 Security Considerations

- Form validation on client and server
- XSS protection
- CSRF protection
- Secure payment processing
- Input sanitization

## 📈 Performance Optimization

- Lazy loading for routes
- OnPush change detection
- Image optimization
- Bundle size optimization
- Caching strategies

## 🧪 Testing

### Unit Tests
```bash
ng test
```

### E2E Tests
```bash
ng e2e
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: info@novahotelsupplies.com
- Phone: +1 (555) 123-4567

## 🎯 Future Enhancements

- User authentication and accounts
- Wishlist functionality
- Product reviews and ratings
- Advanced search with filters
- Multi-language support
- Analytics integration
- Mobile app development
- Real-time notifications
- Advanced reporting
- Integration with shipping providers

---

**Nova Hotel Supplies Ltd.** - Elevating guest experiences through premium hotel amenities and exceptional service.
