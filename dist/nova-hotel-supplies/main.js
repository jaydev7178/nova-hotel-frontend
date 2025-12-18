"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shared/header/header.component */ 6687);
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ 4607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





class AppComponent {
  constructor() {
    this.title = 'Nova Hotel Supplies';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 0,
      consts: [[1, "app-container"], [1, "main-content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
      styles: [".app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vSmF5ZGV2JTIwU2FodS9KYXlkZWVwJTIwU2FodS9Qcm9qZWN0L05IUy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxPQUFBO0VBQ0EsY0FBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4iLCIuYXBwLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy10b3A6IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_home_home_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/home/home.component */ 2865)).then(m => m.HomeComponent)
}, {
  path: 'products',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_product-catalog_product-catalog_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/product-catalog/product-catalog.component */ 4769)).then(m => m.ProductCatalogComponent)
}, {
  path: 'product/:id',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_product-detail_product-detail_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/product-detail/product-detail.component */ 1329)).then(m => m.ProductDetailComponent)
}, {
  path: 'cart',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_shopping-cart_shopping-cart_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/shopping-cart/shopping-cart.component */ 233)).then(m => m.ShoppingCartComponent)
}, {
  path: 'checkout',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_checkout_checkout_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/checkout/checkout.component */ 9215)).then(m => m.CheckoutComponent)
}, {
  path: 'order-confirmation/:id',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_order-confirmation_order-confirmation_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/order-confirmation/order-confirmation.component */ 2235)).then(m => m.OrderConfirmationComponent)
}, {
  path: 'admin',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_admin_admin-dashboard_admin-dashboard_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin/admin-dashboard/admin-dashboard.component */ 6597)).then(m => m.AdminDashboardComponent),
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_admin_dashboard_dashboard_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin/dashboard/dashboard.component */ 8561)).then(m => m.DashboardComponent)
  }, {
    path: 'products',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_admin_product-management_product-management_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin/product-management/product-management.component */ 4829)).then(m => m.ProductManagementComponent)
  }, {
    path: 'orders',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_admin_order-management_order-management_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin/order-management/order-management.component */ 1035)).then(m => m.OrderManagementComponent)
  }, {
    path: 'approvals',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_admin_approval-management_approval-management_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin/approval-management/approval-management.component */ 2177)).then(m => m.ApprovalManagementComponent)
  }]
}, {
  path: 'about',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_about_about_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/about/about.component */ 2905)).then(m => m.AboutComponent)
}, {
  path: '**',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_not-found_not-found_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/not-found/not-found.component */ 4633)).then(m => m.NotFoundComponent)
}];

/***/ }),

/***/ 4607:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class FooterComponent {
  constructor() {
    this.currentYear = new Date().getFullYear();
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 76,
      vars: 1,
      consts: [[1, "footer", "bg-dark", "text-light", "py-5", "mt-5"], [1, "container"], [1, "row"], [1, "col-lg-4", "mb-4"], [1, "fw-bold", "mb-3"], [1, "fas", "fa-crown", "me-2", "text-warning"], [1, "text-light-emphasis"], [1, "social-links"], ["href", "#", 1, "text-light", "me-3"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], ["href", "#", 1, "text-light"], [1, "fab", "fa-instagram"], [1, "col-lg-2", "col-md-6", "mb-4"], [1, "list-unstyled"], ["routerLink", "/home", 1, "text-light-emphasis", "text-decoration-none"], ["routerLink", "/products", 1, "text-light-emphasis", "text-decoration-none"], ["routerLink", "/about", 1, "text-light-emphasis", "text-decoration-none"], ["routerLink", "/admin", 1, "text-light-emphasis", "text-decoration-none"], ["href", "#", 1, "text-light-emphasis", "text-decoration-none"], [1, "contact-info"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fas", "fa-map-marker-alt", "me-3", "text-warning"], [1, "fas", "fa-phone", "me-3", "text-warning"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-envelope", "me-3", "text-warning"], [1, "my-4", "border-secondary"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "mb-0", "text-light-emphasis"], [1, "col-md-6", "text-md-end"], ["href", "#", 1, "text-light-emphasis", "text-decoration-none", "me-3"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nova Hotel Supplies ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Elevating guest experiences through premium hotel amenities and exceptional service. Your trusted partner in hospitality excellence. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "h6", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Quick Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 15)(22, "li")(23, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "About Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14)(35, "h6", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 15)(38, "li")(39, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Toiletries");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Bathroom");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Bedroom");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li")(48, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Dining");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3)(51, "h6", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Contact Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21)(54, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "123 Hospitality Ave, Hotel District, HX 12345");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "+1 (555) 123-4567");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "info@novahotelsupplies.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28)(68, "div", 29)(69, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31)(72, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Terms of Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.currentYear, " Nova Hotel Supplies Ltd. All rights reserved. ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);\n}\n.footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color);\n  transform: translateY(-2px);\n}\n.footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 0.3s ease;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color) !important;\n}\n\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    font-size: 0.9rem;\n  }\n  .footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0pheWRldiUyMFNhaHUvSmF5ZGVlcCUyMFNhaHUvUHJvamVjdC9OSFMvc3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkRBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0FKO0FERUk7RUFDRSxzQ0FBQTtFQUNBLDJCQUFBO0FDQU47QURLSTtFQUNFLFdBQUE7QUNITjtBRE9FO0VBQ0UsMkJBQUE7QUNMSjtBRE9JO0VBQ0UscUNBQUE7QUNMTjs7QURVQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDUko7RURXRTtJQUNFLGlCQUFBO0VDVEo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyYzNlNTAgMCUsICMzNDQ5NWUgMTAwJSk7XHJcbiAgXHJcbiAgaDUsIGg2IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsLWxpbmtzIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pbmZvIHtcclxuICAgIC5mYXMge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvb3RlciB7XHJcbiAgICAuc29jaWFsLWxpbmtzIGEge1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWN0LWluZm8ge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyYzNlNTAgMCUsICMzNDQ5NWUgMTAwJSk7XG59XG4uZm9vdGVyIGg1LCAuZm9vdGVyIGg2IHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZm9vdGVyIC5zb2NpYWwtbGlua3MgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uZm9vdGVyIC5zb2NpYWwtbGlua3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uZm9vdGVyIC5jb250YWN0LWluZm8gLmZhcyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmZvb3RlciBhIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXIgLnNvY2lhbC1saW5rcyBhIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLmZvb3RlciAuY29udGFjdC1pbmZvIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6687:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/cart.service */ 6868);






function HeaderComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.cartItemCount, " ");
  }
}
class HeaderComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.cartItemCount = 0;
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 28,
      vars: 1,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-white", "shadow-sm"], [1, "container"], ["routerLink", "/home", 1, "navbar-brand", "fw-bold"], [1, "fas", "fa-crown", "me-2", "text-primary"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/products", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link"], [1, "navbar-nav"], ["routerLink", "/cart", 1, "nav-link", "position-relative"], [1, "fas", "fa-shopping-cart"], ["class", "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger", 4, "ngIf"], ["routerLink", "/admin", 1, "nav-link"], [1, "fas", "fa-user-cog"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Nova Hotel Supplies ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 8)(13, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8)(16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 12)(19, "li", 8)(20, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Cart ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HeaderComponent_span_23_Template, 2, 1, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 8)(25, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Admin ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItemCount > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
      styles: [".navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary-color) !important;\n}\n.navbar-brand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-dark) !important;\n  transition: color 0.3s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n.nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  min-width: 18px;\n  height: 18px;\n  line-height: 16px;\n}\n\n@media (max-width: 768px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0pheWRldiUyMFNhaHUvSmF5ZGVlcCUyMFNhaHUvUHJvamVjdC9OSFMvc3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxzQ0FBQTtBQ0NGO0FEQ0U7RUFDRSwwQkFBQTtBQ0NKOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FDQUY7QURFRTtFQUNFLHNDQUFBO0FDQUo7QURHRTtFQUNFLG9CQUFBO0FDREo7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFO0lBQ0Usa0JBQUE7RUNGRjtFREtBO0lBQ0UscUJBQUE7RUNIRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyLCAmLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgbWluLXdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgfVxyXG59XHJcbiIsIi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLWJyYW5kIGkge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyaykgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLm5hdi1saW5rOmhvdmVyLCAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XG59XG4ubmF2LWxpbmsgaSB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uYmFkZ2Uge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbWluLXdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6868:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CartService {
  constructor() {
    this.cartItems = [];
    this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    // Load cart from localStorage on initialization
    this.loadCartFromStorage();
  }
  getCartItems() {
    return this.cartSubject.asObservable();
  }
  getCartItemsSync() {
    return this.cartItems;
  }
  addToCart(product, quantity = 1) {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        product,
        quantity
      });
    }
    this.updateCart();
  }
  removeFromCart(productId) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.updateCart();
  }
  updateQuantity(productId, quantity) {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.updateCart();
      }
    }
  }
  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }
  getTotalItems() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  getTotalAmount() {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
  updateCart() {
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToStorage();
  }
  saveCartToStorage() {
    localStorage.setItem('nova-cart', JSON.stringify(this.cartItems));
  }
  loadCartFromStorage() {
    const savedCart = localStorage.getItem('nova-cart');
    if (savedCart) {
      try {
        this.cartItems = JSON.parse(savedCart);
        this.cartSubject.next([...this.cartItems]);
      } catch (error) {
        console.error('Error loading cart from storage:', error);
        this.cartItems = [];
      }
    }
  }
  static {
    this.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4285);








(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.provideAnimations)(), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true
  }))]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map