"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["src_app_components_home_home_component_ts"],{

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 6241);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 6868);







const _c0 = a0 => ["/product", a0];
function HomeComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Loading featured products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_div_69_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r1.stock, " in stock ");
  }
}
function HomeComponent_div_69_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Out of stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HomeComponent_div_69_div_1_span_5_Template, 2, 1, "span", 54)(6, HomeComponent_div_69_div_1_span_6_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 56)(8, "h5", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 59)(13, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 61)(16, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r1.stock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r1.stock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r1.description.substring(0, 100), "... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 9, product_r1.price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, product_r1.id));
  }
}
function HomeComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_69_div_1_Template, 21, 14, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.featuredProducts);
  }
}
function HomeComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "div", 44)(2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " View All Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class HomeComponent {
  constructor(productService, cartService) {
    this.productService = productService;
    this.cartService = cartService;
    this.featuredProducts = [];
    this.loading = true;
  }
  ngOnInit() {
    this.loadFeaturedProducts();
  }
  loadFeaturedProducts() {
    this.productService.getProducts().subscribe(products => {
      this.featuredProducts = products.slice(0, 6); // Show first 6 products as featured
      this.loading = false;
    });
  }
  addToCart(product) {
    this.cartService.addToCart(product, 1);
    // You could add a toast notification here
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 88,
      vars: 3,
      consts: [[1, "hero-section"], [1, "container"], [1, "row", "align-items-center", "min-vh-75"], [1, "col-lg-6"], [1, "hero-content"], [1, "display-3", "fw-bold", "text-white", "mb-4"], [1, "lead", "text-white", "mb-4"], [1, "hero-actions"], ["routerLink", "/products", 1, "btn", "btn-primary", "btn-lg", "me-3"], [1, "fas", "fa-shopping-bag", "me-2"], ["routerLink", "/about", 1, "btn", "btn-outline-light", "btn-lg"], [1, "fas", "fa-info-circle", "me-2"], [1, "hero-image", "text-center"], ["src", "assets/images/hero-product.jpg", "alt", "Nova Hotel Supplies", 1, "img-fluid", "rounded", "shadow-lg"], [1, "features-section", "py-5"], [1, "row", "text-center", "mb-5"], [1, "col-12"], [1, "display-5", "fw-bold", "text-dark", "mb-3"], [1, "lead", "text-muted"], [1, "row", "g-4"], [1, "col-lg-3", "col-md-6"], [1, "feature-card", "text-center"], [1, "feature-icon", "mb-3"], [1, "fas", "fa-award", "fa-3x", "text-primary"], [1, "fw-bold", "mb-3"], [1, "text-muted"], [1, "fas", "fa-leaf", "fa-3x", "text-success"], [1, "fas", "fa-shipping-fast", "fa-3x", "text-info"], [1, "fas", "fa-headset", "fa-3x", "text-warning"], [1, "featured-products", "py-5", "bg-light"], ["class", "row", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "row mt-5", 4, "ngIf"], [1, "cta-section", "py-5"], [1, "row", "align-items-center"], [1, "col-lg-8"], [1, "cta-content"], [1, "display-6", "fw-bold", "text-white", "mb-3"], [1, "lead", "text-white", "mb-0"], [1, "col-lg-4", "text-lg-end"], [1, "cta-actions"], ["routerLink", "/products", 1, "btn", "btn-light", "btn-lg", "me-3"], [1, "fas", "fa-phone", "me-2"], [1, "row"], [1, "col-12", "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "card", "product-card", "h-100"], [1, "position-relative"], [1, "card-img-top", 3, "src", "alt"], [1, "position-absolute", "top-0", "end-0", "p-2"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-danger", 4, "ngIf"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title"], [1, "card-text", "text-muted", "flex-grow-1"], [1, "mb-2"], [1, "badge", "bg-secondary"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-auto"], [1, "price"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "row", "mt-5"], ["routerLink", "/products", 1, "btn", "btn-outline-primary", "btn-lg"], [1, "fas", "fa-th-large", "me-2"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Premium Hotel Supplies & Amenities ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Elevate your guests' experience with Nova's luxurious collection of hotel supplies. From elegant toiletries to premium amenities, we provide everything you need to create unforgettable hospitality experiences. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Shop Now ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Learn More ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3)(17, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section", 14)(20, "div", 1)(21, "div", 15)(22, "div", 16)(23, "h2", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Why Choose Nova?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "We're committed to delivering excellence in every product");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h5", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Premium Quality");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Only the finest materials and craftsmanship in every product");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20)(37, "div", 21)(38, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h5", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Eco-Friendly");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Sustainable and environmentally conscious products");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 20)(45, "div", 21)(46, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h5", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Fast Delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Quick and reliable shipping to meet your deadlines");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 20)(53, "div", 21)(54, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h5", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "24/7 Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Round-the-clock customer service and support");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "section", 29)(61, "div", 1)(62, "div", 15)(63, "div", 16)(64, "h2", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Featured Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Discover our most popular hotel supplies and amenities");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, HomeComponent_div_68_Template, 7, 0, "div", 30)(69, HomeComponent_div_69_Template, 2, 1, "div", 31)(70, HomeComponent_div_70_Template, 5, 0, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "section", 33)(72, "div", 1)(73, "div", 34)(74, "div", 35)(75, "div", 36)(76, "h3", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Ready to Elevate Your Hotel Experience? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Join thousands of hotels worldwide who trust Nova for their supply needs. Get started with a free consultation today. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 39)(81, "div", 40)(82, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Browse Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, " Contact Us ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.featuredProducts.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".hero-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color) 0%, #1e3a8a 100%);\n  min-height: 60vh;\n  display: flex;\n  align-items: center;\n}\n.hero-section[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 1.2;\n}\n.hero-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 400px;\n  object-fit: cover;\n}\n\n.featured-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.featured-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.featured-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  height: 250px;\n  object-fit: cover;\n}\n\n.categories-section[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: none;\n}\n.categories-section[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.categories-section[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  height: 200px;\n  object-fit: cover;\n}\n\n.why-choose-us[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.why-choose-us[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n}\n.why-choose-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.6;\n}\n\n.cta-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color) 0%, #1e3a8a 100%);\n}\n.cta-section[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateY(-2px);\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.5rem;\n    font-size: 1rem;\n  }\n  .featured-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .categories-section[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9KYXlkZXYlMjBTYWh1L0pheWRlZXAlMjBTYWh1L1Byb2plY3QvTkhTL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwRUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FES0U7RUFDRSx5QkFBQTtBQ0ZKO0FESUk7RUFDRSwyQkFBQTtFQUNBLDJDQUFBO0FDRk47QURLSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0hOOztBRFNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDTko7QURRSTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUNOTjtBRFNJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDUE47O0FEYUU7RUFDRSxxQkFBQTtBQ1ZKO0FEYUU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FDWEo7QURjRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURnQkE7RUFDRSwwRUFBQTtBQ2JGO0FEZ0JJO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQ2ROOztBRG9CQTtFQUNFLGlDQUFBO0FDakJGOztBRG9CQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VDakJGO0VEbUJBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VDakJGO0FBQ0Y7QURxQkE7RUFFSTtJQUNFLGlCQUFBO0VDcEJKO0VEdUJFO0lBQ0UsZUFBQTtFQ3JCSjtFRHdCRTtJQUNFLHVCQUFBO0lBQ0EsZUFBQTtFQ3RCSjtFRDBCQTtJQUNFLGFBQUE7RUN4QkY7RUQyQkE7SUFDRSxhQUFBO0VDekJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyby1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSAwJSwgIzFlM2E4YSAxMDAlKTtcclxuICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAuZGlzcGxheS00IHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmZlYXR1cmVkLXByb2R1Y3RzIHtcclxuICAucHJvZHVjdC1jYXJkIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXNlY3Rpb24ge1xyXG4gIC5jYXRlZ29yeS1jYXJkIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ud2h5LWNob29zZS11cyB7XHJcbiAgLmZlYXR1cmUtaWNvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGg0IHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgfVxyXG59XHJcblxyXG4uY3RhLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCAjMWUzYThhIDEwMCUpO1xyXG4gIFxyXG4gIC5idG4tbGlnaHQge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hdGlvbiBjbGFzc2VzXHJcbi5mYWRlLWluIHtcclxuICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhlcm8tc2VjdGlvbiB7XHJcbiAgICAuZGlzcGxheS00IHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sZWFkIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWxnIHtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZlYXR1cmVkLXByb2R1Y3RzIC5wcm9kdWN0LWNhcmQgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2F0ZWdvcmllcy1zZWN0aW9uIC5jYXRlZ29yeS1jYXJkIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbn1cclxuIiwiLmhlcm8tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCAjMWUzYThhIDEwMCUpO1xuICBtaW4taGVpZ2h0OiA2MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlcm8tc2VjdGlvbiAuZGlzcGxheS00IHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLmhlcm8tc2VjdGlvbiBpbWcge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5mZWF0dXJlZC1wcm9kdWN0cyAucHJvZHVjdC1jYXJkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5mZWF0dXJlZC1wcm9kdWN0cyAucHJvZHVjdC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLmZlYXR1cmVkLXByb2R1Y3RzIC5wcm9kdWN0LWNhcmQgLmNhcmQtaW1nLXRvcCB7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2F0ZWdvcmllcy1zZWN0aW9uIC5jYXRlZ29yeS1jYXJkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNhdGVnb3JpZXMtc2VjdGlvbiAuY2F0ZWdvcnktY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uY2F0ZWdvcmllcy1zZWN0aW9uIC5jYXRlZ29yeS1jYXJkIC5jYXJkLWltZy10b3Age1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLndoeS1jaG9vc2UtdXMgLmZlYXR1cmUtaWNvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi53aHktY2hvb3NlLXVzIGg0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ud2h5LWNob29zZS11cyBwIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5jdGEtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCAjMWUzYThhIDEwMCUpO1xufVxuLmN0YS1zZWN0aW9uIC5idG4tbGlnaHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjZzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tc2VjdGlvbiAuZGlzcGxheS00IHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5sZWFkIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuYnRuLWxnIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLmZlYXR1cmVkLXByb2R1Y3RzIC5wcm9kdWN0LWNhcmQgLmNhcmQtaW1nLXRvcCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAuY2F0ZWdvcmllcy1zZWN0aW9uIC5jYXRlZ29yeS1jYXJkIC5jYXJkLWltZy10b3Age1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_home_home_component_ts.js.map