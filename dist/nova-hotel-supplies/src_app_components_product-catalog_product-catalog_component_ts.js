"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["src_app_components_product-catalog_product-catalog_component_ts"],{

/***/ 4769:
/*!*************************************************************************!*\
  !*** ./src/app/components/product-catalog/product-catalog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCatalogComponent: () => (/* binding */ ProductCatalogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 6241);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 6868);









const _c0 = a0 => ["/product", a0];
function ProductCatalogComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
  }
}
function ProductCatalogComponent_div_36_div_1_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r3.stock, " in stock ");
  }
}
function ProductCatalogComponent_div_36_div_1_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Out of stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductCatalogComponent_div_36_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductCatalogComponent_div_36_div_1_div_2_span_5_Template, 2, 1, "span", 39)(6, ProductCatalogComponent_div_36_div_1_div_2_span_6_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 41)(8, "h5", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 44)(13, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 46)(16, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 48)(19, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 50)(23, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCatalogComponent_div_36_div_1_div_2_Template_button_click_23_listener() {
      const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.addToCart(product_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r3.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r3.stock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r3.stock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r3.description.substring(0, 100), "... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r3.features[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 11, product_r3.price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", product_r3.stock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, product_r3.id));
  }
}
function ProductCatalogComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductCatalogComponent_div_36_div_1_div_2_Template, 27, 16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.filteredProducts);
  }
}
function ProductCatalogComponent_div_36_div_2_div_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r6.stock, " in stock ");
  }
}
function ProductCatalogComponent_div_36_div_2_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Out of stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductCatalogComponent_div_36_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 62)(5, "h6", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 44)(10, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 60)(13, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductCatalogComponent_div_36_div_2_div_2_span_14_Template, 2, 1, "span", 39)(15, ProductCatalogComponent_div_36_div_2_div_2_span_15_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 66)(17, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 50)(21, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCatalogComponent_div_36_div_2_div_2_Template_button_click_21_listener() {
      const product_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.addToCart(product_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r6.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r6.description.substring(0, 150), "... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r6.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r6.stock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r6.stock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 10, product_r6.price, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", product_r6.stock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, product_r6.id));
  }
}
function ProductCatalogComponent_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductCatalogComponent_div_36_div_2_div_2_Template, 27, 15, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.filteredProducts);
  }
}
function ProductCatalogComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductCatalogComponent_div_36_div_1_Template, 3, 1, "div", 30)(2, ProductCatalogComponent_div_36_div_2_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.viewMode === "grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.viewMode === "list");
  }
}
function ProductCatalogComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 70)(2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No Products Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " We couldn't find any products matching your criteria. Try adjusting your search or filters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCatalogComponent_div_37_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Clear Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
class ProductCatalogComponent {
  constructor(productService, cartService) {
    this.productService = productService;
    this.cartService = cartService;
    this.allProducts = [];
    this.filteredProducts = [];
    this.categories = [];
    this.searchQuery = '';
    this.selectedCategory = '';
    this.sortBy = 'name';
    this.viewMode = 'grid';
  }
  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }
  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.allProducts = products;
      this.filteredProducts = [...products];
      this.sortProducts();
    });
  }
  loadCategories() {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  onSearch() {
    this.applyFilters();
  }
  onCategoryFilter() {
    this.applyFilters();
  }
  onSort() {
    this.sortProducts();
  }
  setViewMode(mode) {
    this.viewMode = mode;
  }
  addToCart(product) {
    this.cartService.addToCart(product, 1);
    // You could add a toast notification here
  }
  clearFilters() {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.sortBy = 'name';
    this.applyFilters();
  }
  applyFilters() {
    let filtered = [...this.allProducts];
    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(product => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query) || product.features.some(feature => feature.toLowerCase().includes(query)));
    }
    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }
    this.filteredProducts = filtered;
    this.sortProducts();
  }
  sortProducts() {
    this.filteredProducts.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  }
  static {
    this.ɵfac = function ProductCatalogComponent_Factory(t) {
      return new (t || ProductCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductCatalogComponent,
      selectors: [["app-product-catalog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 10,
      consts: [[1, "container", "py-5"], [1, "row", "mb-5"], [1, "col-12", "text-center"], [1, "display-4", "fw-bold", "text-dark", "mb-3"], [1, "lead", "text-muted"], [1, "row", "mb-4"], [1, "col-lg-8"], [1, "row", "g-3"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search products...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "d-flex", "justify-content-lg-end", "gap-2"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-th"], [1, "fas", "fa-list"], [1, "form-select", 2, "width", "auto", 3, "ngModelChange", "change", "ngModel"], ["value", "name"], ["value", "price-low"], ["value", "price-high"], ["value", "newest"], ["class", "row", 4, "ngIf"], [3, "value"], [1, "row"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], [1, "row", "g-4"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "card", "product-card", "h-100"], [1, "position-relative"], [1, "card-img-top", 3, "src", "alt"], [1, "position-absolute", "top-0", "end-0", "p-2"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-danger", 4, "ngIf"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title"], [1, "card-text", "text-muted", "flex-grow-1"], [1, "mb-2"], [1, "badge", "bg-secondary"], [1, "mb-3"], [1, "text-muted"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-auto"], [1, "price", "h5", "mb-0"], [1, "btn-group"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "disabled"], [1, "fas", "fa-cart-plus"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "row", "align-items-center"], [1, "col-md-2"], [1, "img-fluid", "rounded", 3, "src", "alt"], [1, "col-md-4"], [1, "mb-1"], [1, "text-muted", "mb-2", "small"], [1, "stock-status"], [1, "col-lg-4", "text-lg-end"], [1, "price", "h4", "text-primary", "mb-3"], [1, "fas", "fa-cart-plus", "me-1"], [1, "fas", "fa-eye", "me-1"], [1, "col-12", "text-center", "py-5"], [1, "empty-state"], [1, "fas", "fa-search", "fa-4x", "text-muted", "mb-4"], [1, "text-muted", "mb-3"], [1, "text-muted", "mb-4"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-refresh", "me-2"]],
      template: function ProductCatalogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Product Catalog");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Discover our premium collection of hotel supplies and amenities");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProductCatalogComponent_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ProductCatalogComponent_Template_input_input_14_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProductCatalogComponent_Template_select_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductCatalogComponent_Template_select_change_16_listener() {
            return ctx.onCategoryFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProductCatalogComponent_option_19_Template, 2, 2, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "div", 18)(23, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCatalogComponent_Template_button_click_23_listener() {
            return ctx.setViewMode("grid");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCatalogComponent_Template_button_click_25_listener() {
            return ctx.setViewMode("list");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "select", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProductCatalogComponent_Template_select_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.sortBy, $event) || (ctx.sortBy = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductCatalogComponent_Template_select_change_27_listener() {
            return ctx.onSort();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Sort by Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Price: Low to High");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Price: High to Low");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Newest First");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ProductCatalogComponent_div_36_Template, 3, 2, "div", 27)(37, ProductCatalogComponent_div_37_Template, 11, 0, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.viewMode === "grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.viewMode === "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.sortBy);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredProducts.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredProducts.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: [".product-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.product-card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  height: 250px;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .card-img-top[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.product-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 700;\n}\n.product-card[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.products-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.products-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\n}\n.products-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .object-cover[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.products-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 700;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n}\n\n.form-select[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  transition: all 0.3s ease;\n}\n.form-select[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(44, 90, 160, 0.25);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n\n.view-mode-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.view-mode-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.view-mode-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.view-mode-buttons[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: white;\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .product-card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .products-list[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .products-list[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.5rem 0.75rem;\n  }\n}\n@media (max-width: 576px) {\n  .btn-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-radius: 8px !important;\n    margin-bottom: 0.5rem;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWNhdGFsb2cvcHJvZHVjdC1jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vSmF5ZGV2JTIwU2FodS9KYXlkZWVwJTIwU2FodS9Qcm9qZWN0L05IUy9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1jYXRhbG9nL3Byb2R1Y3QtY2F0YWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLDJCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNBSjtBREdFO0VBQ0Usc0JBQUE7QUNESjtBRElFO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FETUk7RUFDRSxpQkFBQTtBQ0pOOztBRFVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUNQSjtBRFNJO0VBQ0UsMENBQUE7QUNQTjtBRFVJO0VBQ0UsaUJBQUE7QUNSTjtBRFdJO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQ1ROOztBRGNBO0VBQ0UseUJBQUE7QUNYRjtBRGFFO0VBQ0UsMkJBQUE7QUNYSjs7QURlQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUNaRjs7QURlQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ1pGO0FEY0U7RUFDRSxrQ0FBQTtFQUNBLGdEQUFBO0FDWko7O0FEZ0JBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQ2JGOztBRGlCRTtFQUNFLGdCQUFBO0FDZEo7QURnQkk7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FDZk47QURrQkk7RUFDRSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQ2hCTjs7QURxQkE7RUFDRSxpQ0FBQTtBQ2xCRjs7QURxQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQ2xCRjtFRG9CQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQ2xCRjtBQUNGO0FEc0JBO0VBQ0U7SUFDRSxhQUFBO0VDcEJGO0VEd0JFO0lBQ0UsYUFBQTtFQ3RCSjtFRHlCRTtJQUNFLG1CQUFBO0VDdkJKO0VENEJFO0lBQ0UsaUJBQUE7SUFDQSx1QkFBQTtFQzFCSjtBQUNGO0FEOEJBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFdBQUE7RUM1QkY7RUQ4QkU7SUFDRSw2QkFBQTtJQUNBLHFCQUFBO0VDNUJKO0VEOEJJO0lBQ0UsZ0JBQUE7RUM1Qk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNhcmQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIC5jYXJkLWltZy10b3Age1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWF0dXJlcyB7XHJcbiAgICAuZmFzIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdHMtbGlzdCB7XHJcbiAgLmNhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAub2JqZWN0LWNvdmVyIHtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcmljZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgLmJ0biB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG59XHJcblxyXG4uZm9ybS1zZWxlY3QsIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDQsIDkwLCAxNjAsIDAuMjUpO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xyXG59XHJcblxyXG4udmlldy1tb2RlLWJ1dHRvbnMge1xyXG4gIC5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIFxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZS1pbiB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjZzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9kdWN0LWNhcmQgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdHMtbGlzdCB7XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC1tZC0zIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1ncm91cCB7XHJcbiAgICAuYnRuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmJ0bi1ncm91cCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIC5idG4ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICBcclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wcm9kdWN0LWNhcmQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnByb2R1Y3QtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5wcm9kdWN0LWNhcmQgLmNhcmQtaW1nLXRvcCB7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLnByb2R1Y3QtY2FyZDpob3ZlciAuY2FyZC1pbWctdG9wIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cbi5wcm9kdWN0LWNhcmQgLnByaWNlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnByb2R1Y3QtY2FyZCAuZmVhdHVyZXMgLmZhcyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucHJvZHVjdHMtbGlzdCAuY2FyZCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ucHJvZHVjdHMtbGlzdCAuY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5wcm9kdWN0cy1saXN0IC5jYXJkIC5vYmplY3QtY292ZXIge1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5wcm9kdWN0cy1saXN0IC5jYXJkIC5wcmljZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ0bi1ncm91cCAuYnRuIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5idG4tZ3JvdXAgLmJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbn1cblxuLmZvcm0tc2VsZWN0LCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDQsIDkwLCAxNjAsIDAuMjUpO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbn1cblxuLnZpZXctbW9kZS1idXR0b25zIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnZpZXctbW9kZS1idXR0b25zIC5idG46Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbn1cbi52aWV3LW1vZGUtYnV0dG9ucyAuYnRuOmxhc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuLnZpZXctbW9kZS1idXR0b25zIC5idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhZGUtaW4ge1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdC1jYXJkIC5jYXJkLWltZy10b3Age1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLnByb2R1Y3RzLWxpc3QgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAucHJvZHVjdHMtbGlzdCAuY29sLW1kLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLmJ0bi1ncm91cCAuYnRuIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5idG4tZ3JvdXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJ0bi1ncm91cCAuYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbiAgLmJ0bi1ncm91cCAuYnRuOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_product-catalog_product-catalog_component_ts.js.map