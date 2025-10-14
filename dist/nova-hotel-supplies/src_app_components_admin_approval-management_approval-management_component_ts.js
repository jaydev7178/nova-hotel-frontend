"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["src_app_components_admin_approval-management_approval-management_component_ts"],{

/***/ 2177:
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin/approval-management/approval-management.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApprovalManagementComponent: () => (/* binding */ ApprovalManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/product.model */ 4562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/order.service */ 8674);







function ApprovalManagementComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApprovalManagementComponent_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.approveSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Approve Selected (", ctx_r1.selectedOrders.length, ") ");
  }
}
function ApprovalManagementComponent_div_23_tr_20_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getStockBadgeClass(item_r6.product.stock, item_r6.quantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", item_r6.product.name, ": ", item_r6.product.stock, " / ", item_r6.quantity, " ");
  }
}
function ApprovalManagementComponent_div_23_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 25)(3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ApprovalManagementComponent_div_23_tr_20_Template_input_change_3_listener() {
      const order_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleOrderSelection(order_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ApprovalManagementComponent_div_23_tr_20_div_13_Template, 3, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td")(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td")(24, "div", 33)(25, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApprovalManagementComponent_div_23_tr_20_Template_button_click_25_listener() {
      const order_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectOrder(order_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApprovalManagementComponent_div_23_tr_20_Template_button_click_27_listener() {
      const order_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.approveOrder(order_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApprovalManagementComponent_div_23_tr_20_Template_button_click_29_listener() {
      const order_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.rejectOrder(order_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("table-active", (ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.id) === order_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", order_r5.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", order_r5.customerInfo.firstName, " ", order_r5.customerInfo.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r5.customerInfo.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", order_r5.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 11, order_r5.totalAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 14, order_r5.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getTimeAgo(order_r5.createdAt));
  }
}
function ApprovalManagementComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "table", 24)(2, "thead")(3, "tr")(4, "th")(5, "div", 25)(6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ApprovalManagementComponent_div_23_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.selectAll, $event) || (ctx_r1.selectAll = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ApprovalManagementComponent_div_23_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleSelectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Stock Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ApprovalManagementComponent_div_23_tr_20_Template, 31, 17, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.pendingOrders);
  }
}
function ApprovalManagementComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "All Orders Processed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No pending orders require approval at this time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ApprovalManagementComponent_div_25_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedOrder.customerInfo.company, " ");
  }
}
function ApprovalManagementComponent_div_25_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 69)(4, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 70)(9, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 73)(17, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r8.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", item_r8.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r8.product.description.substring(0, 50), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Qty: ", item_r8.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getStockBadgeClass(item_r8.product.stock, item_r8.quantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Stock: ", item_r8.product.stock, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 11, item_r8.product.price * item_r8.quantity, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getStockStatusClass(item_r8.product.stock, item_r8.quantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getStockIcon(item_r8.product.stock, item_r8.quantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getStockMessage(item_r8.product.stock, item_r8.quantity), " ");
  }
}
function ApprovalManagementComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "div", 15)(2, "div", 46)(3, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Order Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 16)(6, "div", 48)(7, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Customer Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 50)(10, "div", 51)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ApprovalManagementComponent_div_25_div_17_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 48)(19, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Order Items & Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ApprovalManagementComponent_div_25_div_22_Template, 20, 14, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 48)(24, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 55)(27, "div", 56)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Subtotal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 56)(34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Shipping:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 56)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Tax:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 58)(46, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 60)(52, "div", 61)(53, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApprovalManagementComponent_div_25_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.approveOrder(ctx_r1.selectedOrder));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Approve Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApprovalManagementComponent_div_25_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.rejectOrder(ctx_r1.selectedOrder));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Reject Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApprovalManagementComponent_div_25_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectedOrder = undefined);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.selectedOrder.customerInfo.firstName, " ", ctx_r1.selectedOrder.customerInfo.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.selectedOrder.customerInfo.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.selectedOrder.customerInfo.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedOrder.customerInfo.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.selectedOrder.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](32, 9, ctx_r1.getSubtotal(ctx_r1.selectedOrder), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](43, 12, ctx_r1.getTax(ctx_r1.selectedOrder), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](50, 15, ctx_r1.selectedOrder.totalAmount, "1.2-2"), "");
  }
}
function ApprovalManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "div", 15)(2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Select an order to review");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Click on any pending order to review its details and stock availability.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
class ApprovalManagementComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.pendingOrders = [];
    this.selectAll = false;
    this.selectedOrders = [];
  }
  ngOnInit() {
    this.loadPendingOrders();
  }
  loadPendingOrders() {
    this.orderService.getOrders().subscribe(orders => {
      this.pendingOrders = orders.filter(order => order.status === 'pending');
    });
  }
  selectOrder(order) {
    this.selectedOrder = order;
  }
  toggleSelectAll() {
    this.pendingOrders.forEach(order => order.selected = false);
    this.selectAll = !this.selectAll;
    this.updateSelectedOrders();
  }
  toggleOrderSelection(order) {
    order.selected = !order.selected;
    this.updateSelectedOrders();
  }
  updateSelectedOrders() {
    this.selectedOrders = this.pendingOrders.filter(order => order.selected);
  }
  getSubtotal(order) {
    return order.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
  getTax(order) {
    return this.getSubtotal(order) * 0.08;
  }
  getStockBadgeClass(stock, quantity) {
    if (stock >= quantity) return 'bg-success';
    if (stock > 0) return 'bg-warning';
    return 'bg-danger';
  }
  getStockStatusClass(stock, quantity) {
    if (stock >= quantity) return 'text-success';
    if (stock > 0) return 'text-warning';
    return 'text-danger';
  }
  getStockIcon(stock, quantity) {
    if (stock >= quantity) return 'fa-check-circle';
    if (stock > 0) return 'fa-exclamation-triangle';
    return 'fa-times-circle';
  }
  getStockMessage(stock, quantity) {
    if (stock >= quantity) return 'Stock available';
    if (stock > 0) return 'Limited stock';
    return 'Out of stock';
  }
  approveOrder(order) {
    // Update order status to approved
    order.status = _models_product_model__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.APPROVED;
    order.updatedAt = new Date();
    // In a real app, you would call the order service to update the order
  }
  rejectOrder(order) {
    // Update order status to cancelled
    order.status = _models_product_model__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.CANCELLED;
    order.updatedAt = new Date();
    // In a real app, you would call the order service to update the order
  }
  approveSelected() {
    this.selectedOrders.forEach(order => this.approveOrder(order));
    this.selectedOrders = [];
    this.selectAll = false;
  }
  get pendingRevenue() {
    return this.pendingOrders.reduce((total, order) => total + order.totalAmount, 0);
  }
  getTimeAgo(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  }
  static {
    this.ɵfac = function ApprovalManagementComponent_Factory(t) {
      return new (t || ApprovalManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ApprovalManagementComponent,
      selectors: [["app-approval-management"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 27,
      vars: 9,
      consts: [[1, "page-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "h3", "fw-bold", "text-dark", "mb-2"], [1, "text-muted", "mb-0"], ["class", "btn-group", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-lg-3"], [1, "stats-card"], [1, "stats-icon"], [1, "fas", "fa-dollar-sign", "fa-2x", "text-info"], [1, "stats-content"], [1, "stats-number"], [1, "stats-label"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "col-lg-4", 4, "ngIf"], [1, "btn-group"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-check", "me-2"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "change", "ngModel"], [3, "table-active", 4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "fw-bold"], [1, "text-muted"], [1, "stock-status"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-eye"], [1, "btn", "btn-outline-success", 3, "click"], [1, "fas", "fa-check"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"], [1, "mb-1"], [1, "badge", 3, "ngClass"], [1, "text-center", "py-5"], [1, "fas", "fa-check-circle", "fa-3x", "text-success", "mb-3"], [1, "text-success", "mb-3"], [1, "col-lg-4"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "mb-4"], [1, "fw-bold", "mb-3"], [1, "customer-info"], [1, "mb-2"], ["class", "mb-2", 4, "ngIf"], [1, "order-items"], ["class", "order-item mb-3", 4, "ngFor", "ngForOf"], [1, "order-summary"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "text-success"], [1, "d-flex", "justify-content-between", "h5", "mb-3"], [1, "fw-bold", "text-primary"], [1, "approval-actions"], [1, "d-grid", "gap-2"], [1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "btn", "btn-danger", "btn-lg", 3, "click"], [1, "fas", "fa-times", "me-2"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "order-item", "mb-3"], [1, "d-flex", "align-items-start"], [1, "item-thumb", "me-3", 3, "src", "alt"], [1, "flex-grow-1"], [1, "mt-2"], [1, "badge", "bg-secondary", "me-2"], [1, "fw-bold", "ms-2"], [1, "stock-status", "mt-1"], [3, "ngClass"], [1, "fas", 3, "ngClass"], [1, "card-body", "text-center", "py-5"], [1, "fas", "fa-clipboard-check", "fa-3x", "text-muted", "mb-3"], [1, "text-muted", "small"]],
      template: function ApprovalManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Order Approval");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Review and approve pending orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ApprovalManagementComponent_div_7_Template, 4, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Pending Revenue");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ApprovalManagementComponent_div_23_Template, 21, 2, "div", 17)(24, ApprovalManagementComponent_div_24_Template, 6, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ApprovalManagementComponent_div_25_Template, 62, 18, "div", 19)(26, ApprovalManagementComponent_div_26_Template, 8, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedOrders.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 6, ctx.pendingRevenue, "1.2-2"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pendingOrders.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pendingOrders.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedOrder);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedOrder);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: [".page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n\n.stats-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease;\n}\n.stats-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n  color: var(--text-dark);\n}\n.stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: var(--text-dark);\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(44, 90, 160, 0.25);\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: var(--text-dark);\n  background-color: #f8f9fa;\n  padding: 1rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-bottom: 1px solid #dee2e6;\n  padding: 1rem;\n}\n.table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: var(--primary-color);\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n}\n.table[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n}\n.table[_ngcontent-%COMP%]   .btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.8rem;\n}\n.table[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .item-count[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-dark);\n}\n.table[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .stock-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.5rem;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n  border-radius: 12px 12px 0 0;\n  border: none;\n}\n.modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  filter: invert(1);\n}\n.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 2rem;\n}\n\n.customer-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.customer-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-size: 1.1rem;\n}\n\naddress[_ngcontent-%COMP%] {\n  font-style: normal;\n  line-height: 1.6;\n  color: var(--text-dark);\n}\n\n.order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f8f9fa;\n  padding-bottom: 1rem;\n}\n.order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n.order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n}\n.order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n}\n.order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n\n.order-summary[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.order-summary[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #f8f9fa;\n}\n.order-summary[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  border-color: #dee2e6;\n}\n.order-summary[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n.order-summary[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n@media (max-width: 768px) {\n  .stats-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-number[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n  .table-responsive[_ngcontent-%COMP%]   .btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.2rem 0.4rem;\n    font-size: 0.75rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n  }\n  .order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    align-self: center;\n  }\n}\n@media (max-width: 576px) {\n  .stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-number[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   .stats-label[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    padding: 0.5rem 1rem;\n  }\n  .order-items-detail[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hcHByb3ZhbC1tYW5hZ2VtZW50L2FwcHJvdmFsLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9KYXlkZXYlMjBTYWh1L0pheWRlZXAlMjBTYWh1L1Byb2plY3QvTkhTL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hcHByb3ZhbC1tYW5hZ2VtZW50L2FwcHJvdmFsLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1QkFBQTtBQ0FKOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDREY7QURHRTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7QUNGSjtBRElJO0VBQ0UsWUFBQTtBQ0ZOO0FET0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDTE47QURRSTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNOTjs7QURXQTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtBQ1JGO0FEVUU7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FDUko7QURVSTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDUk47QURVTTtFQUNFLFlBQUE7QUNSUjs7QURlRTtFQUNFLHNDQUFBO0VBQ0Esa0NBQUE7QUNaSjtBRGVFO0VBQ0UsZ0RBQUE7QUNiSjs7QURrQkU7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ2ZKO0FEa0JFO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUNoQko7QURtQkU7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDakJKO0FEb0JFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQ2xCSjtBRHFCRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUNuQko7QUR1Qkk7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FDckJOO0FEMkJNO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQ3pCUjs7QUQrQkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQzVCRjtBRDhCRTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQzVCSjtBRDhCSTtFQUNFLGdCQUFBO0FDNUJOO0FEK0JJO0VBQ0UsaUJBQUE7QUM3Qk47QURpQ0U7RUFDRSxhQUFBO0FDL0JKO0FEa0NFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtBQ2hDSjs7QURxQ0U7RUFDRSxxQkFBQTtBQ2xDSjtBRG9DSTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUNsQ047O0FEdUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDcENGOztBRHdDRTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7QUNyQ0o7QUR1Q0k7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDckNOO0FEd0NJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUN0Q047QUR5Q0k7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0FDdkNOO0FEMENJO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQ3hDTjtBRDRDTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUMxQ1I7QUQ0Q1E7RUFDRSxxQkFBQTtBQzFDVjs7QURrREU7RUFDRSxpQkFBQTtBQy9DSjtBRGlESTtFQUNFLGdDQUFBO0FDL0NOO0FEbURFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDakRKO0FEb0RFO0VBQ0UsdUJBQUE7QUNsREo7QURvREk7RUFDRSxzQ0FBQTtBQ2xETjs7QUR1REE7RUFDRSx5QkFBQTtBQ3BERjtBRHNERTtFQUNFLDJCQUFBO0FDcERKO0FEdURFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDckRKOztBRDBEQTtFQUNFO0lBQ0UsYUFBQTtFQ3ZERjtFRHlERTtJQUNFLGlCQUFBO0VDdkRKO0VENERFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQzFESjtFRDRESTtJQUNFLGdCQUFBO0VDMUROO0VEK0RBO0lBQ0UsaUJBQUE7RUM3REY7RUQrREU7SUFDRSx1QkFBQTtFQzdESjtFRGdFRTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUM5REo7RURrRUE7SUFDRSxlQUFBO0VDaEVGO0VEbUVBO0lBQ0Usb0JBQUE7RUNqRUY7RURzRUk7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VDcEVOO0VEc0VNO0lBQ0UsbUJBQUE7SUFDQSxrQkFBQTtFQ3BFUjtBQUNGO0FEMEVBO0VBR007SUFDRSxrQkFBQTtFQzFFTjtFRDZFSTtJQUNFLGlCQUFBO0VDM0VOO0VEZ0ZBO0lBQ0UsaUJBQUE7RUM5RUY7RURnRkU7SUFDRSx1QkFBQTtFQzlFSjtFRGtGQTtJQUNFLGFBQUE7RUNoRkY7RURtRkE7SUFDRSxxQkFBQTtFQ2pGRjtFRG1GRTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7RUNqRko7RUR1Rkk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ3JGTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIHtcclxuICBoMSB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGF0cy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXRzLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgXHJcbiAgICAuZmFzIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc3RhdHMtY29udGVudCB7XHJcbiAgICAuc3RhdHMtbnVtYmVyIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0YXRzLWxhYmVsIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgIFxyXG4gICAgICAuZmFzIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAmOmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQ0LCA5MCwgMTYwLCAwLjI1KTtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgdGgge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGNvZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1ncm91cC1zbSAuYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlci1pdGVtcyB7XHJcbiAgICAuaXRlbS1jb3VudCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc3RvY2stc3RhdHVzIHtcclxuICAgIC5zdG9jay1pdGVtIHtcclxuICAgICAgLmJhZGdlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICBcclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIFxyXG4gICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1jbG9zZSB7XHJcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtZm9vdGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbWVyLWluZm8ge1xyXG4gIGRpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBcclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFkZHJlc3Mge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG59XHJcblxyXG4ub3JkZXItaXRlbXMtZGV0YWlsIHtcclxuICAub3JkZXItaXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2R1Y3QtdGh1bWIge1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoNiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWRnZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdG9jay1zdGF0dXMge1xyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBcclxuICAgICAgICAuZmFzIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1zdW1tYXJ5IHtcclxuICAuZC1mbGV4IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgXHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaHIge1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5oNSB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgIFxyXG4gICAgLnRleHQtcHJpbWFyeSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbiAgXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBhZGp1c3RtZW50c1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc3RhdHMtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgXHJcbiAgICAuc3RhdHMtY29udGVudCAuc3RhdHMtbnVtYmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgLmQtZmxleCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBcclxuICAgICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIFxyXG4gICAgdGgsIHRkIHtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAwLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tZ3JvdXAtc20gLmJ0biB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAub3JkZXItaXRlbXMtZGV0YWlsIHtcclxuICAgIC5vcmRlci1pdGVtIHtcclxuICAgICAgLmQtZmxleCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBcclxuICAgICAgICAucHJvZHVjdC10aHVtYiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnN0YXRzLWNhcmQge1xyXG4gICAgLnN0YXRzLWNvbnRlbnQge1xyXG4gICAgICAuc3RhdHMtbnVtYmVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5zdGF0cy1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBcclxuICAgIHRoLCB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyLWl0ZW1zLWRldGFpbCB7XHJcbiAgICAub3JkZXItaXRlbSB7XHJcbiAgICAgIC5wcm9kdWN0LXRodW1iIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBhZ2UtaGVhZGVyIGgxIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5cbi5zdGF0cy1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uc3RhdHMtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLnN0YXRzLWNhcmQgLnN0YXRzLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4uc3RhdHMtY2FyZCAuc3RhdHMtaWNvbiAuZmFzIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLnN0YXRzLWNhcmQgLnN0YXRzLWNvbnRlbnQgLnN0YXRzLW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG4uc3RhdHMtY2FyZCAuc3RhdHMtY29udGVudCAuc3RhdHMtbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSAuZmFzIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQ0LCA5MCwgMTYwLCAwLjI1KTtcbn1cblxuLnRhYmxlIHRoIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4udGFibGUgY29kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4udGFibGUgLmJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbn1cbi50YWJsZSAuYnRuLWdyb3VwLXNtIC5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4udGFibGUgLm9yZGVyLWl0ZW1zIC5pdGVtLWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG4udGFibGUgLnN0b2NrLXN0YXR1cyAuc3RvY2staXRlbSAuYmFkZ2Uge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciAuYnRuLWNsb3NlIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG4ubW9kYWwtY29udGVudCAubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4ubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxuLmN1c3RvbWVyLWluZm8gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmN1c3RvbWVyLWluZm8gZGl2IHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuYWRkcmVzcyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5cbi5vcmRlci1pdGVtcy1kZXRhaWwgLm9yZGVyLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG4ub3JkZXItaXRlbXMtZGV0YWlsIC5vcmRlci1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5vcmRlci1pdGVtcy1kZXRhaWwgLm9yZGVyLWl0ZW0gLnByb2R1Y3QtdGh1bWIge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuLm9yZGVyLWl0ZW1zLWRldGFpbCAub3JkZXItaXRlbSBoNiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ub3JkZXItaXRlbXMtZGV0YWlsIC5vcmRlci1pdGVtIC5iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG59XG4ub3JkZXItaXRlbXMtZGV0YWlsIC5vcmRlci1pdGVtIC5zdG9jay1zdGF0dXMgc21hbGwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5vcmRlci1pdGVtcy1kZXRhaWwgLm9yZGVyLWl0ZW0gLnN0b2NrLXN0YXR1cyBzbWFsbCAuZmFzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xufVxuXG4ub3JkZXItc3VtbWFyeSAuZC1mbGV4IHtcbiAgcGFkZGluZzogMC41cmVtIDA7XG59XG4ub3JkZXItc3VtbWFyeSAuZC1mbGV4Om5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcbn1cbi5vcmRlci1zdW1tYXJ5IGhyIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbn1cbi5vcmRlci1zdW1tYXJ5IC5oNSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuLm9yZGVyLXN1bW1hcnkgLmg1IC50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLmJ0biB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuLmJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zdGF0cy1jYXJkIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5zdGF0cy1jYXJkIC5zdGF0cy1jb250ZW50IC5zdGF0cy1udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5jYXJkLWJvZHkgLmQtZmxleCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuY2FyZC1ib2R5IC5kLWZsZXggLmJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGgsIC50YWJsZS1yZXNwb25zaXZlIHRkIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbTtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSAuYnRuLWdyb3VwLXNtIC5idG4ge1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbiAgLm1vZGFsLWZvb3RlciB7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIH1cbiAgLm9yZGVyLWl0ZW1zLWRldGFpbCAub3JkZXItaXRlbSAuZC1mbGV4IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5vcmRlci1pdGVtcy1kZXRhaWwgLm9yZGVyLWl0ZW0gLmQtZmxleCAucHJvZHVjdC10aHVtYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc3RhdHMtY2FyZCAuc3RhdHMtY29udGVudCAuc3RhdHMtbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbiAgLnN0YXRzLWNhcmQgLnN0YXRzLWNvbnRlbnQgLnN0YXRzLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGgsIC50YWJsZS1yZXNwb25zaXZlIHRkIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC4yNXJlbTtcbiAgfVxuICAubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAubW9kYWwtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIH1cbiAgLm1vZGFsLWZvb3RlciAuYnRuIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgfVxuICAub3JkZXItaXRlbXMtZGV0YWlsIC5vcmRlci1pdGVtIC5wcm9kdWN0LXRodW1iIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_approval-management_approval-management_component_ts.js.map