# Product Management Implementation Guide

## Overview
You now have a complete **Product Management System** integrated into your Nova Hotel Admin Dashboard. This guide explains how to use it and where all the changes are.

---

## 📍 Where to Find the Product Management UI

### 1. **Admin Dashboard Navigation**
- **URL**: `http://localhost:4200/admin`
- **Left Sidebar/Top Menu**: Click on **"Products"** link
  - This is defined in `src/app/components/admin/admin-dashboard/admin-dashboard.component.ts`
  - Menu item: `<a class="nav-link" routerLink="/admin/products" ...>Products</a>`

### 2. **Product Management Page**
- **URL**: `http://localhost:4200/admin/products`
- **Component**: `src/app/components/admin/product-management/product-management.component.ts`
- **Features on this page:**
  - ✅ List all products in a table format
  - ✅ Search products by name/description
  - ✅ Filter by category dropdown
  - ✅ **"Add New Product"** button (top right & empty state)
  - ✅ **Edit** button for each product (pencil icon)
  - ✅ **Delete** button for each product (trash icon)

---

## 🎯 User Flow: How to Add/Edit/Delete Products

### **STEP 1: Adding a New Product**

#### Option A: From Product Management Page
1. Navigate to **Admin Dashboard → Products** (`/admin/products`)
2. Click **"Add New Product"** button (top right corner)
3. You'll be redirected to the **Create Product Form** (`/admin/products/create`)

#### Option B: Direct Navigation
- Go directly to: `http://localhost:4200/admin/products/create`

#### Create Product Form Fields:
```
┌─────────────────────────────────────────┐
│         CREATE PRODUCT FORM             │
├─────────────────────────────────────────┤
│ Name *                                  │
│ [________________] (max 150 chars)      │
│                                         │
│ Description *                           │
│ [____________________________]           │
│ [____________________________]           │
│ [____________________________]           │
│ (max 2000 chars)                        │
│                                         │
│ Price           Category    Stock       │
│ [_____]          [Select]   [_____]     │
│ (min 0)                     (min 0)     │
│                                         │
│ ☑ Active (checkbox)                     │
│                                         │
│ [SAVE]  [CANCEL]                        │
└─────────────────────────────────────────┘
```

#### Component Details:
- **File**: `src/app/components/create-product.component.ts`
- **Template**: `src/app/components/create-product.component.html`
- **Styles**: `src/app/components/create-product.component.scss`

#### What Happens When You Click "SAVE":
1. ✅ Form validation runs (all required fields checked)
2. ✅ Data is sent to `ProductService.createProduct(...)`
3. ✅ Product is added to the backend/mock database
4. ✅ **Success toast** appears: "Product created"
5. ✅ You're redirected back to `/admin/products`
6. ✅ New product appears in the list

#### If Validation Fails:
- ❌ Error messages appear below each invalid field
- ❌ Submit button remains disabled
- ❌ Form prevents submission

---

### **STEP 2: Editing an Existing Product**

#### From Product Management Page:
1. In the product table, find the product you want to edit
2. Click the **Edit button** (pencil ✏️ icon) in the **Actions** column
3. You'll be redirected to the **Edit Product Form** (`/admin/products/{productId}/edit`)

#### Or Direct Navigation:
- Example: `http://localhost:4200/admin/products/1/edit`

#### Edit Product Form:
- **Same fields as Create form** (Name, Description, Price, Category, Stock, Active)
- **Pre-filled with current product data**
- All validation rules same as create form

#### What Happens When You Click "SAVE":
1. ✅ Form validation runs
2. ✅ Updated data sent to `ProductService.updateProduct(productId, newData)`
3. ✅ Product is updated in the backend
4. ✅ **Success toast** appears: "Product updated"
5. ✅ You're redirected back to `/admin/products`
6. ✅ Updated product shows new values in the list

#### If Product Not Found:
- ❌ Error toast: "Product not found"
- ❌ Redirects back to `/admin/products`

---

### **STEP 3: Deleting a Product**

#### From Product Management Page:
1. In the product table, find the product you want to delete
2. Click the **Delete button** (trash 🗑️ icon) in the **Actions** column
3. **Confirmation dialog** appears: "Delete product '{name}'?"
   - If you click **OK** → Product is deleted
   - If you click **Cancel** → Nothing happens

#### What Happens After Confirmation:
1. ✅ Product is sent to `ProductService.deleteProduct(productId)`
2. ✅ Product is removed from the backend
3. ✅ **Success toast** appears: "Product deleted"
4. ✅ Product list refreshes automatically
5. ✅ Deleted product disappears from table

#### If Deletion Fails:
- ❌ Error toast: "Failed to delete product"
- ❌ Product remains in the list

---

## 🔧 Implementation Details: Files Changed/Created

### **New Files Created:**

#### 1. Create Product Component
```
src/app/components/
├── create-product.component.ts       (TypeScript logic)
├── create-product.component.html     (Form template)
└── create-product.component.scss     (Styles)
```

**Functionality:**
- Standalone Angular component
- Uses Reactive Forms (`FormBuilder`, `FormGroup`)
- Loads categories from `ProductService.getCategories()`
- Creates product via `ProductService.createProduct(payload)`
- Shows success/error toasts via `ToastrService`
- Routes back to `/admin/products` on success

---

#### 2. Edit Product Component
```
src/app/components/
├── edit-product.component.ts         (TypeScript logic)
├── edit-product.component.html       (Form template)
└── edit-product.component.scss       (Styles)
```

**Functionality:**
- Standalone Angular component
- Extracts product ID from route params (`ActivatedRoute`)
- Loads product via `ProductService.getProduct(id)`
- Pre-fills form with product data
- Updates product via `ProductService.updateProduct(id, payload)`
- Shows success/error toasts
- Routes back to `/admin/products` on success

---

### **Modified Files:**

#### 1. Product Service
**File**: `src/app/services/product.service.ts`

**Changes:**
- ✅ Added `getProduct(id)` method — fetches single product by ID
- ✅ Already has `createProduct(payload)` — creates new product
- ✅ Already has `updateProduct(id, payload)` — updates existing product
- ✅ Already has `deleteProduct(id)` — deletes product
- ✅ Already has `getCategories()` — loads category list

---

#### 2. Product Management Component
**File**: `src/app/components/admin/product-management/product-management.component.ts`

**Changes:**
- ✅ Injected `Router` and `ToastrService`
- ✅ Added `goToCreate()` method — navigates to `/admin/products/create`
- ✅ Added `editProduct(product)` method — navigates to `/admin/products/{id}/edit`
- ✅ Added `deleteProduct(product)` method — calls API with confirmation
  - Shows "Delete product '{name}'?" dialog
  - Reloads product list on success
  - Shows toast notifications

**File**: `src/app/components/admin/product-management/product-management.component.html`

**Changes:**
- ✅ "Add New Product" buttons wired to `goToCreate()`
- ✅ Edit buttons wired to `editProduct(product)`
- ✅ Delete buttons wired to `deleteProduct(product)`

---

#### 3. App Routes
**File**: `src/app/app.routes.ts`

**Changes:**
```typescript
{
  path: 'products',
  canActivate: [AuthGuard],
  data: { role: 'admin' },
  children: [
    {
      path: '',
      loadComponent: () => import('./components/admin/product-management/product-management.component')
        .then(m => m.ProductManagementComponent)
    },
    {
      path: 'create',
      loadComponent: () => import('./components/create-product.component')
        .then(m => m.CreateProductComponent)
    },
    {
      path: ':id/edit',
      loadComponent: () => import('./components/edit-product.component')
        .then(m => m.EditProductComponent)
    }
  ]
}
```

**Routes Available:**
- `/admin/products` — Product list (main page)
- `/admin/products/create` — Create new product form
- `/admin/products/{id}/edit` — Edit existing product form

---

## 📊 Data Flow Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                   ADMIN DASHBOARD                            │
│  [Home] [Products] [Orders] [Approvals]                      │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│           PRODUCT MANAGEMENT PAGE                            │
│  (/admin/products)                                           │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ [Add New Product] [Search] [Category Filter] [Clear]    │ │
│  │                                                         │ │
│  │ Product Table:                                          │ │
│  │ ┌──────────┬──────────┬────────┬────────┬──────────┐   │ │
│  │ │ Name     │ Category │ Price  │ Stock  │ Actions  │   │ │
│  │ ├──────────┼──────────┼────────┼────────┼──────────┤   │ │
│  │ │ Body W.. │Toiletri. │ $8.99  │ 200    │ [✏️] [🗑️] │   │ │
│  │ │ Shampoo  │Toiletri. │ $9.99  │ 180    │ [✏️] [🗑️] │   │ │
│  │ └──────────┴──────────┴────────┴────────┴──────────┘   │ │
│  └─────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
       ↓ "Add New Product"              ↓ Edit [✏️]
┌──────────────────────────┐  ┌──────────────────────────┐
│  CREATE PRODUCT FORM     │  │  EDIT PRODUCT FORM       │
│  (/admin/products/create)│  │  (/admin/products/{id..) │
│  ┌────────────────────┐  │  │  ┌────────────────────┐  │
│  │ Name: ________     │  │  │  │ Name: ________     │  │
│  │ Desc: ________     │  │  │  │ Desc: ________     │  │
│  │ Price: ____        │  │  │  │ Price: ____        │  │
│  │ Cat: [Select]      │  │  │  │ Cat: [Select]      │  │
│  │ Stock: ____        │  │  │  │ Stock: ____        │  │
│  │ [SAVE] [CANCEL]    │  │  │  │ [SAVE] [CANCEL]    │  │
│  └────────────────────┘  │  │  └────────────────────┘  │
└──────────────────────────┘  └──────────────────────────┘
       ↓ SAVE                       ↓ SAVE
   ProductService              ProductService
   .createProduct()            .updateProduct()
       ↓                           ↓
   ┌─────────────────────────────────────┐
   │   PRODUCT SERVICE (Backend API)     │
   │  POST /api/products                 │
   │  PUT /api/products/{id}             │
   │  DELETE /api/products/{id}          │
   └─────────────────────────────────────┘
       ↓ Success
   Toast: "Product created/updated/deleted"
       ↓
   Redirect to /admin/products
       ↓
   List refreshes with new/updated/removed product
```

---

## 🎨 UI Components Used

All components use **Bootstrap 5** CSS classes:

### Form Elements:
```html
<input class="form-control" ... />
<textarea class="form-control" ... />
<select class="form-select" ... />
<input type="checkbox" class="form-check-input" ... />
```

### Buttons:
```html
<button class="btn btn-primary">Save</button>
<button class="btn btn-secondary">Cancel</button>
<button class="btn btn-outline-primary">[✏️] Edit</button>
<button class="btn btn-outline-danger">[🗑️] Delete</button>
```

### Badges/Status:
```html
<span class="badge bg-success">Active</span>
<span class="badge bg-danger">Out of Stock</span>
```

### Toasts (via ngx-toastr):
```typescript
this.toastr.success('Product created');      // Green toast
this.toastr.error('Failed to create');       // Red toast
```

---

## ✅ Validation Rules

### Form Validation:
| Field | Required | Min/Max | Rules |
|-------|----------|---------|-------|
| Name | ✅ Yes | 1-150 chars | Cannot be empty |
| Description | ✅ Yes | 1-2000 chars | Cannot be empty |
| Price | ✅ Yes | ≥ 0 | Must be a number |
| Category | ✅ Yes | - | Must select from dropdown |
| Stock | ✅ Yes | ≥ 0 | Must be a number |
| Active | ❌ No | - | Default: true |

### Error Display:
- Invalid fields show **red error messages** below the input
- Error messages only appear after user touches the field
- Submit button is **disabled** until all validations pass

---

## 🔄 API Integration

### Backend Endpoints Expected:

```
POST /api/admin/products
  Payload: { name, description, price, categoryId, stockQuantity, isActive }
  Returns: { id, name, ..., createdAt, updatedAt }

GET /api/products/{id}
  Returns: Product object

PUT /api/admin/products/{id}
  Payload: { name, description, price, categoryId, stockQuantity, isActive }
  Returns: Updated product object

DELETE /api/admin/products/{id}
  Returns: void (204 No Content)

GET /api/products
  Returns: Paginated products
```

### Key Payload Details:
- **Create Product**: Uses `categoryId` (numeric ID), not category name string
- **Stock Field**: Payload uses `stockQuantity`, not `stock`
- **Category Selection**: Form dropdown shows category names but sends category IDs
- **Current Setup (Development)**:
  - **Mock data** is used when no auth token is provided
  - **Real API** is called when user is authenticated (token in headers)
  - **Base URL**: `http://localhost:8080/api` (from `environment.ts`)

---

## 🖼️ Product Image Upload (Optional)

Both the **Create Product** and **Edit Product** forms now include optional file upload fields for product images.

### Image Upload Fields:

#### 1. **Cover Image**
- Single image upload field
- Used as the main product display image
- Uploaded to: `POST /api/admin/categories/{categoryId}/products/{productId}/images/cover`
- Supported formats: JPG, PNG, WebP, etc.
- Optional field (can create/edit product without cover image)

#### 2. **Gallery Images**
- Multiple file upload field (select multiple images at once)
- Used for product detail page image carousel
- Uploaded to: `POST /api/admin/categories/{categoryId}/products/{productId}/images/gallery`
- Supported formats: JPG, PNG, WebP, etc.
- Optional field (can create/edit product without gallery images)

### How to Upload Images:

#### From Create Product Form:
1. Fill in product details (Name, Description, Price, Category, Stock)
2. **Optional**: Select a Cover Image file
3. **Optional**: Select multiple Gallery Image files
4. Click **SAVE**
5. Product is created first, then images are uploaded
6. Success toast shows: "Product created" → "Cover image uploaded" → "Gallery images uploaded"
7. Redirected to `/admin/products` on complete

#### From Edit Product Form:
1. Update product details (Name, Description, Price, Category, Stock)
2. **Optional**: Select a new Cover Image file
3. **Optional**: Select new Gallery Image files
4. Click **SAVE**
5. Product is updated first, then images are uploaded (new images replace old ones)
6. Success toasts show updates
7. Redirected to `/admin/products` on complete

### Current Form Structure:

**Create/Edit Product Form Fields:**
```
┌──────────────────────────────────────────┐
│ Name *                                   │
│ Description *                            │
│ Price * | Category * | Stock *           │
│ ☑ Active (checkbox)                      │
├──────────────────────────────────────────┤
│ PRODUCT IMAGES (Optional Section)        │
├──────────────────────────────────────────┤
│ Cover Image (file input)                 │
│ Gallery Images (file input, multiple)    │
├──────────────────────────────────────────┤
│ [SAVE] [CANCEL]                          │
└──────────────────────────────────────────┘
```

### Behind the Scenes:
- When you click SAVE, the form creates/updates the product first
- If you selected cover image file:
  - Component extracts categoryId from form
  - Calls `ProductService.uploadCoverImage(categoryId, productId, coverImageFile)`
  - Backend receives multipart file at `/api/admin/categories/{categoryId}/products/{productId}/images/cover`
- If you selected gallery image files:
  - Component converts FileList to File[]
  - Calls `ProductService.uploadGalleryImages(categoryId, productId, fileArray)`
  - Backend receives multipart files at `/api/admin/categories/{categoryId}/products/{productId}/images/gallery`
- Toast notifications show progress: ✅ "Product created" → ✅ "Cover image uploaded" → ✅ "Gallery images uploaded"

---

Below are example cURL commands for admin flows (login, categories, admin product CRUD, activate/deactivate, and image uploads). These are examples — the frontend uses `ProductService` methods which call similar endpoints; use these for testing with the backend or when wiring additional admin-only flows.

1) Authenticate (get token)

```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "usernameOrEmail": "admin@novahotelsupplies.com",
    "password": "admin123"
  }'
```

The server will return a JWT token (example below). Use it in `Authorization: Bearer $TOKEN` header for admin calls.

```
TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJhZG1pbiIsImlhdCI6MTc2NTkyNjAxOSwiZXhwIjoxNzY2MDEyNDE5fQ.k_UxBwOXN2vz01aMQ4yqQy8DpHivBqiL_mDcLsZby-U
```

2) Get categories (example)

```bash
curl -X GET http://localhost:8080/api/categories \
  -H "Authorization: Bearer $TOKEN"
```

3) Create an admin product (example)

```bash
curl -X POST http://localhost:8080/api/admin/products \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Deluxe Room",
    "description": "Luxury deluxe room with king-size bed",
    "price": 4500,
    "stockQuantity": 20,
    "categoryId": 1,
    "isActive": true
  }'
```

Response:
```json
{
  "id": 101,
  "name": "Deluxe Room",
  "description": "Luxury deluxe room with king-size bed",
  "price": 4500.00,
  "stockQuantity": 20,
  "categoryId": 1,
  "isActive": true,
  "createdAt": "2025-12-18T01:00:00Z",
  "updatedAt": "2025-12-18T01:00:00Z"
}
```

4) Update an admin product

```bash
curl -X PUT "http://localhost:8080/api/admin/products/101" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Deluxe Room",
    "description": "Spacious deluxe room with sea view",
    "price": 4500.00,
    "stockQuantity": 12,
    "categoryId": 1,
    "isActive": true
  }'
```

Response:
```json
{
  "id": 101,
  "name": "Deluxe Room",
  "description": "Spacious deluxe room with sea view",
  "price": 4500.00,
  "stockQuantity": 12,
  "categoryId": 1,
  "isActive": true,
  "createdAt": "2025-12-18T01:00:00Z",
  "updatedAt": "2025-12-18T01:05:00Z"
}
```

5) Deactivate / Activate a product

```bash
curl -X PUT "http://localhost:8080/admin/products/101/deactivate" \
  -H "Authorization: Bearer $TOKEN"

curl -X PUT "http://localhost:8080/admin/products/101/activate" \
  -H "Authorization: Bearer $TOKEN"
```

6) Upload cover image (multipart/form-data)

```bash
curl -X POST "http://localhost:8080/api/admin/categories/1/products/101/images/cover" \
  -H "Authorization: Bearer $TOKEN" \
  -F "file=@cover.jpg"
```

Response:
```json
{
  "message": "Cover image uploaded successfully",
  "imageUrl": "https://cdn.example.com/products/101/cover.jpg"
}
```

**From UI:** After creating a product, the Create/Edit form allows you to select a cover image file. The form uploads it automatically after product creation completes.

7) Upload gallery images (multipart/form-data)

```bash
curl -X POST "http://localhost:8080/api/admin/categories/1/products/101/images/gallery" \
  -H "Authorization: Bearer $TOKEN" \
  -F "files=@img1.jpg" \
  -F "files=@img2.jpg" \
  -F "files=@img3.jpg"
```

Response:
```json
{
  "message": "Gallery images uploaded successfully",
  "imageUrls": [
    "https://cdn.example.com/products/101/gallery/img1.jpg",
    "https://cdn.example.com/products/101/gallery/img2.jpg",
    "https://cdn.example.com/products/101/gallery/img3.jpg"
  ]
}
```

**From UI:** The Create/Edit form allows you to select multiple gallery image files at once. The form uploads them automatically after product creation/update completes.

8) Replace/update product images (keepUrls + new files)

```bash
curl -X PUT "http://localhost:8080/api/products/101/images" \
  -H "Authorization: Bearer $TOKEN" \
  -F "keepUrls=https://cdn/img1.jpg,https://cdn/img2.jpg" \
  -F "files=@img4.jpg" \
  -F "files=@img5.jpg"
```

9) Delete a product image by URL

```bash
curl -X DELETE "http://localhost:8080/api/products/101/images?imageUrl=https://cdn/img2.jpg" \
  -H "Authorization: Bearer $TOKEN"
```

Notes:
- These admin endpoints often live under `/api/admin/...` — I added admin-specific helper methods to `ProductService` that call `/admin/products` and image endpoints when a token is present.
- In the frontend, use the `ProductService.adminCreateProduct(...)`, `adminUpdateProduct(...)`, `adminActivateProduct(...)`, `adminDeactivateProduct(...)`, `uploadCoverImage(...)`, `uploadGalleryImages(...)`, `updateProductImages(...)`, and `deleteProductImage(...)` methods to invoke these flows.
- If your backend expects different paths (e.g. `/admin/...` vs `/api/admin/...`) adjust `environment.apiUrl` or the `ProductService` methods accordingly.

---

## 🚀 How to Test Locally

### Prerequisites:
1. Node.js installed
2. Backend server running on `http://localhost:8080`
3. Dev server running on `http://localhost:4200`

### Steps:

```bash
# 1. Start the development server
npm start

# 2. Open browser
http://localhost:4200

# 3. Login with admin credentials
# (or use mock data if no authentication)

# 4. Navigate to Admin Dashboard
# Click "Products" in the sidebar

# 5. Test flows:
# - Click "Add New Product" button
# - Fill form and click SAVE
# - Edit a product (click pencil icon)
# - Delete a product (click trash icon, confirm)
# - Watch toast notifications appear
```

---

## 📋 Key Components Summary

| Component | Location | Purpose |
|-----------|----------|---------|
| ProductManagement | `src/app/components/admin/product-management/` | Main product list & actions |
| CreateProduct | `src/app/components/` | Form to create new products |
| EditProduct | `src/app/components/` | Form to edit existing products |
| ProductService | `src/app/services/product.service.ts` | API calls & data management |
| AdminDashboard | `src/app/components/admin/admin-dashboard/` | Main admin layout & navigation |

---

## ⚠️ Common Issues & Solutions

### Issue: Product not appearing after creation
**Solution**: Refresh the page or wait for the list to reload automatically

### Issue: Form validation errors appear
**Solution**: Ensure all required fields are filled correctly (Name, Description, Category)

### Issue: Can't edit product
**Solution**: Make sure you're logged in as admin and have proper permissions

### Issue: Delete confirmation doesn't appear
**Solution**: Browser may have blocked popup notifications; use browser console to check errors

### Issue: Image upload fails but product was created
**Solution**: Product was created successfully. Image upload is optional and separate. Check:
- Auth token is present and valid
- Category ID is correct (should be a number, not a string)
- File format is supported (JPG, PNG, etc.)
- Server has write permissions for image directory

### Issue: "categoryId is required" error on form
**Solution**: This is a form validation error. Select a category from the dropdown before clicking SAVE.

### Issue: Product payload doesn't include categoryId
**Problem**: Old code may be sending `category` (string name) instead of `categoryId` (numeric ID)
**Solution**: Ensure using the updated Create/Edit components that convert form data correctly:
```typescript
const payload = {
  name: formValue.name,
  description: formValue.description,
  price: formValue.price,
  categoryId: parseInt(formValue.categoryId, 10),  // Convert to number
  stockQuantity: formValue.stock,                  // Use stockQuantity, not stock
  isActive: formValue.isActive
};
```

### Issue: Backend returns error "Invalid categoryId"
**Solution**: 
- Verify categoryId is a number (not a string)
- Check the categoryId exists in your categories table
- Ensure form dropdown is properly binding category.id values

### Issue: "stockQuantity not recognized"
**Problem**: Backend expects `stockQuantity` but code sends `stock`
**Solution**: Ensure payload uses correct field name:
```typescript
stockQuantity: formValue.stock,  // ✅ Correct
// NOT:
stock: formValue.stock,          // ❌ Wrong
```

---

## 🔐 Security Notes

- All admin routes are protected by `AuthGuard`
- Only users with `role: 'admin'` can access product management
- API calls include authentication token in headers
- Form validates on both client and server side

---

## 📝 Next Steps (Optional Enhancements)

1. **Image uploads**: Add file upload input for product images
2. **Bulk actions**: Select multiple products and delete/update together
3. **Categories management**: Add CRUD for categories
4. **Product variants**: Support different sizes/colors
5. **Audit log**: Track who created/modified products and when
6. **Search refinement**: Add advanced filters (price range, stock status, etc.)

---

**That's it! You now have a fully functional Product Management system in your admin dashboard.** 🎉
