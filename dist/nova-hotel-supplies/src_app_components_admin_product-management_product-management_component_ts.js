"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["src_app_components_admin_product-management_product-management_component_ts"],{

/***/ 4829:
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin/product-management/product-management.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductManagementComponent: () => (/* binding */ ProductManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 6241);






function ProductManagementComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r1, " ");
  }
}
function ProductManagementComponent_div_36_tr_17_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductManagementComponent_div_36_tr_17_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Out of Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductManagementComponent_div_36_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td")(16, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProductManagementComponent_div_36_tr_17_span_19_Template, 2, 0, "span", 42)(20, ProductManagementComponent_div_36_tr_17_span_20_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td")(22, "div", 44)(23, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r2.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", product_r2.description.substring(0, 50), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 10, product_r2.price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.getStockBadgeClass(product_r2.stock));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r2.stock, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r2.stock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r2.stock === 0);
  }
}
function ProductManagementComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "table", 34)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProductManagementComponent_div_36_tr_17_Template, 27, 13, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.filteredProducts);
  }
}
function ProductManagementComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No Products Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Try adjusting your search criteria or add a new product.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Add New Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ProductManagementComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    this.filteredProducts = [];
    this.searchQuery = '';
    this.selectedCategory = '';
    this.categories = [];
  }
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = [...products];
      this.extractCategories();
    });
  }
  extractCategories() {
    this.categories = [...new Set(this.products.map(p => p.category))];
  }
  onSearch() {
    this.applyFilters();
  }
  onCategoryFilter() {
    this.applyFilters();
  }
  applyFilters() {
    let filtered = [...this.products];
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(product => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query));
    }
    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }
    this.filteredProducts = filtered;
  }
  getStockBadgeClass(stock) {
    if (stock === 0) return 'bg-danger';
    if (stock < 10) return 'bg-warning';
    return 'bg-success';
  }
  clearFilters() {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.filteredProducts = [...this.products];
  }
  static {
    this.ɵfac = function ProductManagementComponent_Factory(t) {
      return new (t || ProductManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductManagementComponent,
      selectors: [["app-product-management"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 5,
      consts: [[1, "page-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "h3", "fw-bold", "text-dark", "mb-2"], [1, "text-muted", "mb-0"], [1, "btn", "btn-primary"], [1, "fas", "fa-plus", "me-2"], [1, "row", "mb-4"], [1, "col-lg-8"], [1, "row", "g-3"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search products...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "col-md-4"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "fas", "fa-times"], [1, "col-lg-4"], [1, "d-flex", "justify-content-lg-end"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-primary", "active"], [1, "fas", "fa-table"], ["type", "button", 1, "btn", "btn-outline-primary"], [1, "fas", "fa-th-large"], [1, "card"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [3, "value"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "product-thumb", "me-3", 3, "src", "alt"], [1, "fw-bold"], [1, "text-muted"], [1, "badge", "bg-secondary"], [1, "badge", 3, "ngClass"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-danger", 4, "ngIf"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-edit"], [1, "btn", "btn-outline-danger"], [1, "fas", "fa-trash"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "text-center", "py-5"], [1, "fas", "fa-box", "fa-3x", "text-muted", "mb-3"], [1, "text-muted", "mb-3"]],
      template: function ProductManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Product Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Manage your product catalog and inventory");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Add New Product ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ProductManagementComponent_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ProductManagementComponent_Template_input_input_17_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ProductManagementComponent_Template_select_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductManagementComponent_Template_select_change_19_listener() {
            return ctx.onCategoryFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProductManagementComponent_option_22_Template, 2, 2, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductManagementComponent_Template_button_click_24_listener() {
            return ctx.clearFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Clear ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21)(28, "div", 22)(29, "div", 23)(30, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28)(35, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProductManagementComponent_div_36_Template, 18, 1, "div", 30)(37, ProductManagementComponent_div_37_Template, 9, 0, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredProducts.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredProducts.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: [".page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: var(--text-dark);\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: var(--text-dark);\n  background-color: #f8f9fa;\n  padding: 1rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-bottom: 1px solid #dee2e6;\n  padding: 1rem;\n}\n.table[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n}\n.table[_ngcontent-%COMP%]   .btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.8rem;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n  border-radius: 12px 12px 0 0;\n  border: none;\n}\n.modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  filter: invert(1);\n}\n.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 2rem;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  padding: 0.75rem 1rem;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(44, 90, 160, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%], .form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, .form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n\n.image-preview[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.image-preview[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.image-preview[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: #dc3545;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  opacity: 1;\n}\n.image-preview[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n\n.feature-inputs[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0 8px 8px 0;\n}\n.feature-inputs[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n}\n\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(44, 90, 160, 0.25);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-dark);\n}\n\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .page-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  .card-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .card-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    width: 100%;\n  }\n  .card-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .table-responsive[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .table-responsive[_ngcontent-%COMP%]   .btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.2rem 0.4rem;\n    font-size: 0.75rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n  }\n}\n@media (max-width: 576px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n  }\n  .table-responsive[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    padding: 0.5rem 1rem;\n  }\n  .image-preview[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9wcm9kdWN0LW1hbmFnZW1lbnQvcHJvZHVjdC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vSmF5ZGV2JTIwU2FodS9KYXlkZWVwJTIwU2FodS9Qcm9qZWN0L05IUy9zcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vcHJvZHVjdC1tYW5hZ2VtZW50L3Byb2R1Y3QtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHVCQUFBO0FDQUo7O0FESUE7RUFDRSxZQUFBO0VBQ0EseUNBQUE7QUNERjtBREdFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtBQ0RKO0FER0k7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ROO0FER007RUFDRSxZQUFBO0FDRFI7QURLSTtFQUNFLGlCQUFBO0FDSE47O0FEU0U7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ05KO0FEU0U7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQ1BKO0FEVUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1JKO0FEV0U7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0FDVEo7QURZRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURjQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDWEY7QURhRTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ1hKO0FEYUk7RUFDRSxnQkFBQTtBQ1hOO0FEY0k7RUFDRSxpQkFBQTtBQ1pOO0FEZ0JFO0VBQ0UsYUFBQTtBQ2RKO0FEaUJFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtBQ2ZKOztBRG1CQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ2hCRjs7QURtQkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2hCRjtBRGtCRTtFQUNFLGtDQUFBO0VBQ0EsZ0RBQUE7QUNoQko7QURtQkU7RUFDRSxxQkFBQTtBQ2pCSjtBRG1CSTtFQUNFLGdEQUFBO0FDakJOOztBRHNCQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUNuQkY7O0FEdUJFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ3BCSjtBRHNCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3BCTjtBRHVCSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDckJOO0FEdUJNO0VBQ0UsbUJBQUE7QUNyQlI7O0FENkJJO0VBQ0UsMEJBQUE7QUMxQk47QUQ4QkU7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FDNUJKOztBRGtDSTtFQUNFLHNDQUFBO0VBQ0Esa0NBQUE7QUMvQk47QURrQ0k7RUFDRSxnREFBQTtBQ2hDTjtBRG9DRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNsQ0o7O0FEc0NBO0VBQ0UseUJBQUE7QUNuQ0Y7QURxQ0U7RUFDRSwyQkFBQTtBQ25DSjtBRHNDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ3BDSjs7QUR3Q0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDckNGOztBRHlDQTtFQUVJO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQ3ZDSjtFRHlDSTtJQUNFLGdCQUFBO0VDdkNOO0VENkNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQzNDSjtFRDZDSTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQzNDTjtFRDZDTTtJQUNFLHFCQUFBO0VDM0NSO0VEaURBO0lBQ0UsaUJBQUE7RUMvQ0Y7RURpREU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQy9DSjtFRGtERTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUNoREo7RURvREE7SUFDRSxlQUFBO0VDbERGO0VEcURBO0lBQ0Usb0JBQUE7RUNuREY7QUFDRjtBRHNEQTtFQUNFO0lBQ0UsaUJBQUE7RUNwREY7RURzREU7SUFDRSx1QkFBQTtFQ3BESjtFRHVERTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDckRKO0VEeURBO0lBQ0UsYUFBQTtFQ3ZERjtFRDBEQTtJQUNFLHFCQUFBO0VDeERGO0VEMERFO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQ3hESjtFRDZERTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDM0RKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXIge1xyXG4gIGgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgIFxyXG4gICAgICAuZmFzIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm0tY29udHJvbCwgLmZvcm0tc2VsZWN0IHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHRoIHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC10aHVtYiB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICB9XHJcbiAgXHJcbiAgLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdyb3VwLXNtIC5idG4ge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBcclxuICAgIC5tb2RhbC10aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tY2xvc2Uge1xyXG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWZvb3RlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCwgLmZvcm0tc2VsZWN0IHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0NCwgOTAsIDE2MCwgMC4yNSk7XHJcbiAgfVxyXG4gIFxyXG4gICYuaXMtaW52YWxpZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbiAgICBcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC4yNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICAuaW1hZ2UtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tY2xvc2Uge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLThweDtcclxuICAgICAgcmlnaHQ6IC04cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjODIzMzM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mZWF0dXJlLWlucHV0cyB7XHJcbiAgLmlucHV0LWdyb3VwIHtcclxuICAgIC5idG4ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tY2hlY2sge1xyXG4gIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDQsIDkwLCAxNjAsIDAuMjUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIH1cclxuICBcclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wYWdlLWhlYWRlciB7XHJcbiAgICAuZC1mbGV4IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIFxyXG4gICAgICAuYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICAuZC1mbGV4IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIFxyXG4gICAgICAuZC1mbGV4IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wsIC5mb3JtLXNlbGVjdCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgXHJcbiAgICAucHJvZHVjdC10aHVtYiB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tZ3JvdXAtc20gLmJ0biB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBcclxuICAgIHRoLCB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZHVjdC10aHVtYiB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtcHJldmlldyB7XHJcbiAgICAuaW1hZ2UtaXRlbSBpbWcge1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGFnZS1oZWFkZXIgaDEge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIC5mYXMge1xuICBvcGFjaXR5OiAwLjg7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgLmZvcm0tY29udHJvbCwgLmNhcmQgLmNhcmQtaGVhZGVyIC5mb3JtLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udGFibGUgdGgge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4udGFibGUgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi50YWJsZSAucHJvZHVjdC10aHVtYiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4udGFibGUgLmJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbn1cbi50YWJsZSAuYnRuLWdyb3VwLXNtIC5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciAuYnRuLWNsb3NlIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG4ubW9kYWwtY29udGVudCAubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4ubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxuLmZvcm0tbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sLCAuZm9ybS1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQ0LCA5MCwgMTYwLCAwLjI1KTtcbn1cbi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCwgLmZvcm0tc2VsZWN0LmlzLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQ6Zm9jdXMsIC5mb3JtLXNlbGVjdC5pcy1pbnZhbGlkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbn1cblxuLmltYWdlLXByZXZpZXcgLmltYWdlLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5pbWFnZS1wcmV2aWV3IC5pbWFnZS1pdGVtIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uaW1hZ2UtcHJldmlldyAuaW1hZ2UtaXRlbSAuYnRuLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIHJpZ2h0OiAtOHB4O1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG4uaW1hZ2UtcHJldmlldyAuaW1hZ2UtaXRlbSAuYnRuLWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M4MjMzMztcbn1cblxuLmZlYXR1cmUtaW5wdXRzIC5pbnB1dC1ncm91cCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XG59XG4uZmVhdHVyZS1pbnB1dHMgLmJ0bi1zbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmZvcm0tY2hlY2sgLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmZvcm0tY2hlY2sgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0NCwgOTAsIDE2MCwgMC4yNSk7XG59XG4uZm9ybS1jaGVjayAuZm9ybS1jaGVjay1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuXG4uYnRuIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG4uYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGFnZS1oZWFkZXIgLmQtZmxleCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAucGFnZS1oZWFkZXIgLmQtZmxleCAuYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG4gIC5jYXJkLWhlYWRlciAuZC1mbGV4IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5jYXJkLWhlYWRlciAuZC1mbGV4IC5kLWZsZXgge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNhcmQtaGVhZGVyIC5kLWZsZXggLmQtZmxleCAuZm9ybS1jb250cm9sLCAuY2FyZC1oZWFkZXIgLmQtZmxleCAuZC1mbGV4IC5mb3JtLXNlbGVjdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSAucHJvZHVjdC10aHVtYiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlIC5idG4tZ3JvdXAtc20gLmJ0biB7XG4gICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbiAgLm1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuICAubW9kYWwtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSB0aCwgLnRhYmxlLXJlc3BvbnNpdmUgdGQge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlIC5wcm9kdWN0LXRodW1iIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLm1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLm1vZGFsLWZvb3RlciB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICB9XG4gIC5tb2RhbC1mb290ZXIgLmJ0biB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIH1cbiAgLmltYWdlLXByZXZpZXcgLmltYWdlLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_product-management_product-management_component_ts.js.map