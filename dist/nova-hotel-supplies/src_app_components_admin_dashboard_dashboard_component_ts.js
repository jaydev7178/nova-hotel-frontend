"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["src_app_components_admin_dashboard_dashboard_component_ts"],{

/***/ 8561:
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/order.service */ 8674);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ 6241);







const _c0 = () => ["/admin/orders"];
function DashboardComponent_div_59_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", order_r1.customerInfo.firstName, " ", order_r1.customerInfo.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getStatusBadgeClass(order_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 8, order_r1.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 10, order_r1.totalAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 13, order_r1.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
  }
}
function DashboardComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "table", 27)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DashboardComponent_div_59_tr_17_Template, 19, 17, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.orders.slice(0, 5));
  }
}
function DashboardComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No orders found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class DashboardComponent {
  constructor(orderService, productService) {
    this.orderService = orderService;
    this.productService = productService;
    this.orders = [];
    this.products = [];
    this.totalOrders = 0;
    this.totalRevenue = 0;
    this.totalProducts = 0;
    this.pendingOrders = 0;
    this.currentDate = new Date();
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    // Load orders
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.totalOrders = orders.length;
      this.pendingOrders = orders.filter(order => order.status === 'pending').length;
      this.totalRevenue = orders.reduce((total, order) => total + order.totalAmount, 0);
    });
    // Load products
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.totalProducts = products.length;
    });
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case 'pending':
        return 'bg-warning';
      case 'confirmed':
        return 'bg-info';
      case 'shipped':
        return 'bg-primary';
      case 'delivered':
        return 'bg-success';
      case 'cancelled':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 61,
      vars: 13,
      consts: [[1, "dashboard-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "h3", "fw-bold", "text-dark", "mb-2"], [1, "text-muted", "mb-0"], [1, "dashboard-date"], [1, "text-muted"], [1, "row", "g-4", "mb-5"], [1, "col-lg-3", "col-md-6"], [1, "stats-card"], [1, "stats-icon"], [1, "fas", "fa-shopping-cart", "fa-2x", "text-primary"], [1, "stats-content"], [1, "stats-number"], [1, "stats-label"], [1, "fas", "fa-dollar-sign", "fa-2x", "text-success"], [1, "fas", "fa-box", "fa-2x", "text-info"], [1, "fas", "fa-clock", "fa-2x", "text-warning"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], ["routerLink", "/admin/orders", 1, "btn", "btn-outline-primary", "btn-sm"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "fw-bold"], [1, "badge", 3, "ngClass"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "routerLink"], [1, "fas", "fa-eye"], [1, "text-center", "py-4"], [1, "fas", "fa-shopping-cart", "fa-3x", "text-muted", "mb-3"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Welcome to Nova Hotel Supplies Admin Panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11)(17, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Total Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7)(22, "div", 8)(23, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11)(26, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Total Revenue");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7)(32, "div", 8)(33, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 11)(36, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Total Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 7)(41, "div", 8)(42, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 11)(45, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Pending Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 17)(50, "div", 18)(51, "div", 19)(52, "div", 20)(53, "div", 1)(54, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Recent Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " View All Orders ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, DashboardComponent_div_59_Template, 18, 1, "div", 24)(60, DashboardComponent_div_60_Template, 4, 0, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 7, ctx.currentDate, "fullDate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalOrders);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 10, ctx.totalRevenue, "1.2-2"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalProducts);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pendingOrders);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orders.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orders.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n\n.stats-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease;\n}\n.stats-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n  color: var(--text-dark);\n}\n.stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1.5rem;\n}\n.dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  border-radius: 12px 12px 0 0;\n  padding: 1rem 1.5rem;\n  display: flex;\n  justify-content: between;\n  align-items: center;\n}\n.dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: var(--text-dark);\n}\n.dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.5rem 1rem;\n}\n.dashboard-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: var(--text-dark);\n  background-color: #f8f9fa;\n  padding: 1rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-bottom: 1px solid #dee2e6;\n  padding: 1rem;\n}\n.table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: var(--primary-color);\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n}\n.table[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n}\n.table[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.8rem;\n}\n\n.quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 8px;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.3s ease;\n  margin-bottom: 0.5rem;\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(5px);\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%]   .quick-action-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%]   .quick-action-icon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%]   .quick-action-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  color: var(--text-dark);\n  font-weight: 600;\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%]   .quick-action-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-size: 0.8rem;\n}\n\n.low-stock-items[_ngcontent-%COMP%]   .low-stock-item[_ngcontent-%COMP%] {\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.low-stock-items[_ngcontent-%COMP%]   .low-stock-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.low-stock-items[_ngcontent-%COMP%]   .low-stock-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  color: var(--text-dark);\n  font-weight: 600;\n}\n.low-stock-items[_ngcontent-%COMP%]   .low-stock-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-light);\n}\n.low-stock-items[_ngcontent-%COMP%]   .low-stock-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n}\n\n@media (max-width: 768px) {\n  .stats-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-number[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  .dashboard-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .table[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n  .quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%]   .quick-action-icon[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    margin-right: 0.75rem;\n  }\n  .quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%]   .quick-action-icon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 576px) {\n  .stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-number[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-label[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%]   .quick-action-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .quick-actions[_ngcontent-%COMP%]   .quick-action[_ngcontent-%COMP%]   .quick-action-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vSmF5ZGV2JTIwU2FodS9KYXlkZWVwJTIwU2FodS9Qcm9qZWN0L05IUy9zcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHVCQUFBO0FDQUo7O0FESUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNERjtBREdFO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtBQ0ZKO0FESUk7RUFDRSxZQUFBO0FDRk47QURPSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNMTjtBRFFJO0VBQ0UsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ05OOztBRFdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EscUJBQUE7QUNSRjtBRFVFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEVUk7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1JOO0FEVU07RUFDRSxZQUFBO0FDUlI7QURZSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNWTjtBRGNFO0VBQ0UsZUFBQTtBQ1pKOztBRGlCRTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDZEo7QURpQkU7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQ2ZKO0FEa0JFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUNqQko7QURvQkU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FDbEJKOztBRHVCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNwQko7QURzQkk7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDcEJOO0FEdUJJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtBQ3JCTjtBRHVCTTtFQUNFLGlCQUFBO0FDckJSO0FEMEJNO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDeEJSO0FEMkJNO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtBQ3pCUjs7QURnQ0U7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0FDN0JKO0FEK0JJO0VBQ0UsbUJBQUE7QUM3Qk47QURnQ0k7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUM5Qk47QURpQ0k7RUFDRSx3QkFBQTtBQy9CTjtBRGtDSTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUNoQ047O0FEc0NBO0VBQ0U7SUFDRSxhQUFBO0VDbkNGO0VEcUNFO0lBQ0UsaUJBQUE7RUNuQ0o7RUR3Q0U7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUN0Q0o7RUR3Q0k7SUFDRSxrQkFBQTtFQ3RDTjtFRDBDRTtJQUNFLGFBQUE7RUN4Q0o7RUQ0Q0E7SUFDRSxpQkFBQTtFQzFDRjtFRDRDRTtJQUNFLHVCQUFBO0VDMUNKO0VEK0NFO0lBQ0UsZ0JBQUE7RUM3Q0o7RUQrQ0k7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VDN0NOO0VEK0NNO0lBQ0UsZUFBQTtFQzdDUjtBQUNGO0FEbURBO0VBR007SUFDRSxrQkFBQTtFQ25ETjtFRHNESTtJQUNFLGlCQUFBO0VDcEROO0VEeURBO0lBQ0UsaUJBQUE7RUN2REY7RUQ2RE07SUFDRSxpQkFBQTtFQzNEUjtFRDhETTtJQUNFLGtCQUFBO0VDNURSO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgaDEge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHMtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0cy1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIFxyXG4gICAgLmZhcyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnN0YXRzLWNvbnRlbnQge1xyXG4gICAgLnN0YXRzLW51bWJlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdGF0cy1sYWJlbCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgIFxyXG4gICAgICAuZmFzIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHRoIHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICBjb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuICBcclxuICAuYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tc20ge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5xdWljay1hY3Rpb25zIHtcclxuICAucXVpY2stYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucXVpY2stYWN0aW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgICAgIFxyXG4gICAgICAuZmFzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucXVpY2stYWN0aW9uLWNvbnRlbnQge1xyXG4gICAgICBoNiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG93LXN0b2NrLWl0ZW1zIHtcclxuICAubG93LXN0b2NrLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbiAgICBcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg2IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNtYWxsIHtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFkZ2Uge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBhZGp1c3RtZW50c1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc3RhdHMtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgXHJcbiAgICAuc3RhdHMtY29udGVudCAuc3RhdHMtbnVtYmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBcclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudGFibGUge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBcclxuICAgIHRoLCB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucXVpY2stYWN0aW9ucyB7XHJcbiAgICAucXVpY2stYWN0aW9uIHtcclxuICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgXHJcbiAgICAgIC5xdWljay1hY3Rpb24taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAuZmFzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5zdGF0cy1jYXJkIHtcclxuICAgIC5zdGF0cy1jb250ZW50IHtcclxuICAgICAgLnN0YXRzLW51bWJlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc3RhdHMtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuICBcclxuICAucXVpY2stYWN0aW9ucyB7XHJcbiAgICAucXVpY2stYWN0aW9uIHtcclxuICAgICAgLnF1aWNrLWFjdGlvbi1jb250ZW50IHtcclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZGFzaGJvYXJkLWhlYWRlciBoMSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuXG4uc3RhdHMtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnN0YXRzLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5zdGF0cy1jYXJkIC5zdGF0cy1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLnN0YXRzLWNhcmQgLnN0YXRzLWljb24gLmZhcyB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5zdGF0cy1jYXJkIC5zdGF0cy1jb250ZW50IC5zdGF0cy1udW1iZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuLnN0YXRzLWNhcmQgLnN0YXRzLWNvbnRlbnQgLnN0YXRzLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5kYXNoYm9hcmQtY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kYXNoYm9hcmQtY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuLmRhc2hib2FyZC1jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSAuZmFzIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmRhc2hib2FyZC1jYXJkIC5jYXJkLWhlYWRlciAuYnRuIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuLmRhc2hib2FyZC1jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi50YWJsZSB0aCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi50YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnRhYmxlIGNvZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnRhYmxlIC5iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG59XG4udGFibGUgLmJ0bi1zbSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnF1aWNrLWFjdGlvbnMgLnF1aWNrLWFjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnF1aWNrLWFjdGlvbnMgLnF1aWNrLWFjdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xufVxuLnF1aWNrLWFjdGlvbnMgLnF1aWNrLWFjdGlvbiAucXVpY2stYWN0aW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG4ucXVpY2stYWN0aW9ucyAucXVpY2stYWN0aW9uIC5xdWljay1hY3Rpb24taWNvbiAuZmFzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4ucXVpY2stYWN0aW9ucyAucXVpY2stYWN0aW9uIC5xdWljay1hY3Rpb24tY29udGVudCBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnF1aWNrLWFjdGlvbnMgLnF1aWNrLWFjdGlvbiAucXVpY2stYWN0aW9uLWNvbnRlbnQgc21hbGwge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ubG93LXN0b2NrLWl0ZW1zIC5sb3ctc3RvY2staXRlbSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XG59XG4ubG93LXN0b2NrLWl0ZW1zIC5sb3ctc3RvY2staXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5sb3ctc3RvY2staXRlbXMgLmxvdy1zdG9jay1pdGVtIGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubG93LXN0b2NrLWl0ZW1zIC5sb3ctc3RvY2staXRlbSBzbWFsbCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cbi5sb3ctc3RvY2staXRlbXMgLmxvdy1zdG9jay1pdGVtIC5iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3RhdHMtY2FyZCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAuc3RhdHMtY2FyZCAuc3RhdHMtY29udGVudCAuc3RhdHMtbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZGFzaGJvYXJkLWNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuZGFzaGJvYXJkLWNhcmQgLmNhcmQtaGVhZGVyIC5idG4ge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxuICAuZGFzaGJvYXJkLWNhcmQgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAudGFibGUge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG4gIC50YWJsZSB0aCwgLnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbTtcbiAgfVxuICAucXVpY2stYWN0aW9ucyAucXVpY2stYWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICB9XG4gIC5xdWljay1hY3Rpb25zIC5xdWljay1hY3Rpb24gLnF1aWNrLWFjdGlvbi1pY29uIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuICB9XG4gIC5xdWljay1hY3Rpb25zIC5xdWljay1hY3Rpb24gLnF1aWNrLWFjdGlvbi1pY29uIC5mYXMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zdGF0cy1jYXJkIC5zdGF0cy1jb250ZW50IC5zdGF0cy1udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuICAuc3RhdHMtY2FyZCAuc3RhdHMtY29udGVudCAuc3RhdHMtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAucXVpY2stYWN0aW9ucyAucXVpY2stYWN0aW9uIC5xdWljay1hY3Rpb24tY29udGVudCBoNiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLnF1aWNrLWFjdGlvbnMgLnF1aWNrLWFjdGlvbiAucXVpY2stYWN0aW9uLWNvbnRlbnQgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_dashboard_dashboard_component_ts.js.map