"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["src_app_components_order-confirmation_order-confirmation_component_ts"],{

/***/ 2235:
/*!*******************************************************************************!*\
  !*** ./src/app/components/order-confirmation/order-confirmation.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderConfirmationComponent: () => (/* binding */ OrderConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/order.service */ 8674);






function OrderConfirmationComponent_div_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.order.customerInfo.company, " ");
  }
}
function OrderConfirmationComponent_div_0_tr_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r3.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r3.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r3.product.description.substring(0, 50), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 7, item_r3.product.price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 10, item_r3.product.price * item_r3.quantity, "1.2-2"), "");
  }
}
function OrderConfirmationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Order Confirmed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Thank you for your order. We've sent a confirmation email to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Order Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15)(19, "div", 9)(20, "div", 16)(21, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Order Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "div", 19)(25, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Order Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19)(30, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Order Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19)(36, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 19)(42, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Payment Method:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16)(47, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Customer Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23)(50, "div", 24)(51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, OrderConfirmationComponent_div_0_div_57_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 11)(59, "div", 12)(60, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Shipping Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 15)(64, "address", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 11)(71, "div", 12)(72, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Order Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 15)(76, "div", 29)(77, "table", 30)(78, "thead")(79, "tr")(80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, OrderConfirmationComponent_div_0_tr_89_Template, 17, 13, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 32)(91, "div", 33)(92, "div", 12)(93, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 15)(96, "div", 34)(97, "div", 19)(98, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Subtotal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](102, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 19)(104, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Shipping:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 19)(109, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Tax:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](113, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 36)(116, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](120, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 38)(122, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "What's Next?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 39)(125, "div", 40)(126, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 43)(129, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Order Placed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "We've received your order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 45)(134, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 43)(137, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Owner Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Awaiting stock confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 45)(142, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 43)(145, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Payment Processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Payment will be processed after approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 45)(150, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 43)(153, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Order Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Your order will be shipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 49)(158, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, " Continue Shopping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderConfirmationComponent_div_0_Template_button_click_161_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.printOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, " Print Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.order.customerInfo.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.order.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](34, 19, ctx_r1.order.createdAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 22, ctx_r1.order.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getPaymentMethodLabel(ctx_r1.order.paymentInfo == null ? null : ctx_r1.order.paymentInfo.method));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.order.customerInfo.firstName, " ", ctx_r1.order.customerInfo.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.order.customerInfo.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.order.customerInfo.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.order.customerInfo.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.order.customerInfo.address.street, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx_r1.order.customerInfo.address.city, ", ", ctx_r1.order.customerInfo.address.state, " ", ctx_r1.order.customerInfo.address.zipCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.order.customerInfo.address.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.order.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](102, 24, ctx_r1.getSubtotal(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](113, 27, ctx_r1.getTax(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](120, 30, ctx_r1.order.totalAmount, "1.2-2"), "");
  }
}
function OrderConfirmationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading order details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class OrderConfirmationComponent {
  constructor(route, orderService, router) {
    this.route = route;
    this.orderService = orderService;
    this.router = router;
    this.orderId = null;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
      if (this.orderId) {
        this.loadOrder(this.orderId);
      }
    });
  }
  loadOrder(orderId) {
    this.orderService.getOrder(orderId).subscribe(order => {
      if (order) {
        this.order = order;
        // Send confirmation email
        this.orderService.sendOrderConfirmation(order).subscribe({
          next: response => {
            console.log('Order confirmation email sent:', response);
          },
          error: error => {
            console.error('Failed to send confirmation email:', error);
          }
        });
      } else {
        // Order not found, redirect to home
        this.router.navigate(['/home']);
      }
    });
  }
  getSubtotal() {
    if (!this.order) return 0;
    return this.order.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
  getTax() {
    return this.getSubtotal() * 0.08; // 8% tax rate
  }
  getPaymentMethodLabel(method) {
    switch (method) {
      case 'credit_card':
        return 'Credit Card';
      case 'bank_transfer':
        return 'Bank Transfer';
      case 'paypal':
        return 'PayPal';
      default:
        return 'Not specified';
    }
  }
  printOrder() {
    window.print();
  }
  static {
    this.ɵfac = function OrderConfirmationComponent_Factory(t) {
      return new (t || OrderConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OrderConfirmationComponent,
      selectors: [["app-order-confirmation"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      consts: [["class", "container py-5", 4, "ngIf"], ["class", "container py-5 text-center", 4, "ngIf"], [1, "container", "py-5"], [1, "row", "mb-5"], [1, "col-12", "text-center"], [1, "success-icon", "mb-4"], [1, "fas", "fa-check-circle", "fa-5x", "text-success"], [1, "display-4", "fw-bold", "text-success", "mb-3"], [1, "lead", "text-muted"], [1, "row"], [1, "col-lg-8"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "fas", "fa-receipt", "me-2"], [1, "card-body"], [1, "col-md-6"], [1, "fw-bold", "mb-3"], [1, "order-info"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "text-muted"], [1, "fw-bold"], [1, "badge", "bg-warning"], [1, "customer-info"], [1, "mb-2"], ["class", "mb-2", 4, "ngIf"], [1, "fas", "fa-map-marker-alt", "me-2"], [1, "mb-0"], [1, "fas", "fa-shopping-bag", "me-2"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "card"], [1, "order-summary"], [1, "text-success"], [1, "d-flex", "justify-content-between", "h5", "mb-3"], [1, "fw-bold", "text-primary"], [1, "next-steps", "mt-4"], [1, "timeline"], [1, "timeline-item", "completed"], [1, "timeline-marker"], [1, "fas", "fa-check"], [1, "timeline-content"], [1, "mb-1"], [1, "timeline-item", "pending"], [1, "fas", "fa-clock"], [1, "fas", "fa-credit-card"], [1, "fas", "fa-shipping-fast"], [1, "action-buttons", "mt-4"], ["routerLink", "/products", 1, "btn", "btn-outline-primary", "w-100", "mb-2"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "fas", "fa-print", "me-2"], [1, "d-flex", "align-items-center"], [1, "product-thumb", "me-3", 3, "src", "alt"], [1, "container", "py-5", "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"]],
      template: function OrderConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OrderConfirmationComponent_div_0_Template, 164, 33, "div", 0)(1, OrderConfirmationComponent_div_1_Template, 6, 0, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.order);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".success-icon[_ngcontent-%COMP%]   .fa-check-circle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_checkmark 0.6s ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_checkmark {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1.5rem;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #2c5aa0;\n  color: white;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.product-thumb[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #2c3e50;\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-bottom: 1px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   .fw-bold[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n\n.order-summary[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.order-summary[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #f8f9fa;\n}\n.order-summary[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  border-color: #dee2e6;\n}\n.order-summary[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n.order-summary[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: #2c5aa0 !important;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2rem;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 1rem;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background-color: #dee2e6;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -1.5rem;\n  top: 0;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  z-index: 1;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item.completed[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item.pending[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n  background-color: #dee2e6;\n  color: #6c757d;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  color: #2c3e50;\n  font-weight: 600;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.5rem 0.75rem;\n}\n\naddress[_ngcontent-%COMP%] {\n  font-style: normal;\n  line-height: 1.6;\n}\n\n@media print {\n  .action-buttons[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%], .next-steps[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .card[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n    border: 1px solid #dee2e6 !important;\n  }\n  .success-icon[_ngcontent-%COMP%]   .fa-check-circle[_ngcontent-%COMP%] {\n    color: #000 !important;\n  }\n}\n@media (max-width: 768px) {\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .product-thumb[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n  }\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 0.75rem;\n  }\n  .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n    left: -1.25rem;\n    width: 1.5rem;\n    height: 1.5rem;\n    font-size: 0.7rem;\n  }\n}\n@media (max-width: 576px) {\n  .success-icon[_ngcontent-%COMP%]   .fa-check-circle[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .display-4[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .product-thumb[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .table[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vSmF5ZGV2JTIwU2FodS9KYXlkZWVwJTIwU2FodS9Qcm9qZWN0L05IUy9zcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uL29yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFLHFDQUFBO0FDSko7O0FEUUE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ0xGO0VET0E7SUFDRSxxQkFBQTtJQUNBLFVBQUE7RUNMRjtFRE9BO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDTEY7QUFDRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLHlDQUFBO0VBQ0EscUJBQUE7QUNORjtBRFFFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ05KO0FEUUk7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUNOTjtBRFFNO0VBQ0UsWUFBQTtBQ05SO0FEV0U7RUFDRSxlQUFBO0FDVEo7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1ZGOztBRGNFO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0EvRFE7RUFnRVIseUJBQUE7QUNYSjtBRGNFO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtBQ1pKO0FEZUU7RUFDRSxjQXpFUTtBQzREWjs7QURrQkU7RUFDRSxpQkFBQTtBQ2ZKO0FEaUJJO0VBQ0UsZ0NBQUE7QUNmTjtBRG1CRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ2pCSjtBRG9CRTtFQUNFLGNBNUZRO0FDMEVaO0FEb0JJO0VBQ0UseUJBQUE7QUNsQk47O0FEdUJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ3BCRjtBRHNCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ3BCSjtBRHVCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNyQko7QUR1Qkk7RUFDRSxnQkFBQTtBQ3JCTjtBRHdCSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUN0Qk47QUQwQk07RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUN4QlI7QUQ2Qk07RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUMzQlI7QURnQ007RUFDRSxzQkFBQTtFQUNBLGNBekpJO0VBMEpKLGdCQUFBO0FDOUJSO0FEaUNNO0VBQ0UsY0E3Sks7QUM4SGI7O0FEc0NFO0VBQ0UseUJBQUE7QUNuQ0o7QURxQ0k7RUFDRSwyQkFBQTtBQ25DTjs7QUR3Q0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FDckNGOztBRHdDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNyQ0Y7O0FEeUNBO0VBQ0U7OztJQUdFLHdCQUFBO0VDdENGO0VEeUNBO0lBQ0UsMkJBQUE7SUFDQSxvQ0FBQTtFQ3ZDRjtFRDJDRTtJQUNFLHNCQUFBO0VDekNKO0FBQ0Y7QUQ4Q0E7RUFDRTtJQUNFLGFBQUE7RUM1Q0Y7RUQrQ0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQzdDRjtFRGdEQTtJQUNFLGlCQUFBO0VDOUNGO0VEaURBO0lBQ0Usb0JBQUE7RUMvQ0Y7RURpREU7SUFDRSxhQUFBO0VDL0NKO0VEa0RFO0lBQ0UsY0FBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNoREo7QUFDRjtBRG9EQTtFQUNFO0lBQ0UsZUFBQTtFQ2xERjtFRHFEQTtJQUNFLGVBQUE7RUNuREY7RURzREE7SUFDRSxnQkFBQTtFQ3BERjtFRHVEQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDckRGO0VEd0RBO0lBQ0UsaUJBQUE7RUN0REY7RUR3REU7SUFDRSx1QkFBQTtFQ3RESjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJHRleHQtZGFyazogIzJjM2U1MDtcclxuJHRleHQtbGlnaHQ6ICM2Yzc1N2Q7XHJcbiRwcmltYXJ5LWNvbG9yOiAjMmM1YWEwO1xyXG5cclxuLnN1Y2Nlc3MtaWNvbiB7XHJcbiAgLmZhLWNoZWNrLWNpcmNsZSB7XHJcbiAgICBhbmltYXRpb246IGNoZWNrbWFyayAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjaGVja21hcmsge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIFxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM1YWEwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgXHJcbiAgICAgIC5mYXMge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LXRodW1iIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgdGgge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAkdGV4dC1kYXJrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICB9XHJcbiAgXHJcbiAgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIH1cclxuICBcclxuICAuZnctYm9sZCB7XHJcbiAgICBjb2xvcjogJHRleHQtZGFyaztcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1zdW1tYXJ5IHtcclxuICAuZC1mbGV4IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgXHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaHIge1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5oNSB7XHJcbiAgICBjb2xvcjogJHRleHQtZGFyaztcclxuICAgIFxyXG4gICAgLnRleHQtcHJpbWFyeSB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIFxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIFxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpbWVsaW5lLW1hcmtlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogLTEuNXJlbTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5jb21wbGV0ZWQge1xyXG4gICAgICAudGltZWxpbmUtbWFya2VyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnBlbmRpbmcge1xyXG4gICAgICAudGltZWxpbmUtbWFya2VyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgaDYge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWRhcms7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dC1saWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1idXR0b25zIHtcclxuICAuYnRuIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG59XHJcblxyXG5hZGRyZXNzIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLy8gUHJpbnQgc3R5bGVzXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmFjdGlvbi1idXR0b25zLFxyXG4gIC50aW1lbGluZSxcclxuICAubmV4dC1zdGVwcyB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnN1Y2Nlc3MtaWNvbiB7XHJcbiAgICAuZmEtY2hlY2stY2lyY2xlIHtcclxuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC10aHVtYiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgIFxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgbGVmdDogMC43NXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpbWVsaW5lLWl0ZW0gLnRpbWVsaW5lLW1hcmtlciB7XHJcbiAgICAgIGxlZnQ6IC0xLjI1cmVtO1xyXG4gICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuc3VjY2Vzcy1pY29uIC5mYS1jaGVjay1jaXJjbGUge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuICBcclxuICAuZGlzcGxheS00IHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC10aHVtYiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgXHJcbiAgICB0aCwgdGQge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMC4yNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn0iLCIuc3VjY2Vzcy1pY29uIC5mYS1jaGVjay1jaXJjbGUge1xuICBhbmltYXRpb246IGNoZWNrbWFyayAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGNoZWNrbWFyayB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjNWFhMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUgLmZhcyB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5wcm9kdWN0LXRodW1iIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnRhYmxlIHRoIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuLnRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4udGFibGUgLmZ3LWJvbGQge1xuICBjb2xvcjogIzJjM2U1MDtcbn1cblxuLm9yZGVyLXN1bW1hcnkgLmQtZmxleCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufVxuLm9yZGVyLXN1bW1hcnkgLmQtZmxleDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XG59XG4ub3JkZXItc3VtbWFyeSBociB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG59XG4ub3JkZXItc3VtbWFyeSAuaDUge1xuICBjb2xvcjogIzJjM2U1MDtcbn1cbi5vcmRlci1zdW1tYXJ5IC5oNSAudGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICMyYzVhYTAgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG4udGltZWxpbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0gLnRpbWVsaW5lLW1hcmtlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEuNXJlbTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgei1pbmRleDogMTtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtaXRlbS5jb21wbGV0ZWQgLnRpbWVsaW5lLW1hcmtlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtaXRlbS5wZW5kaW5nIC50aW1lbGluZS1tYXJrZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtaXRlbSAudGltZWxpbmUtY29udGVudCBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1jb250ZW50IHNtYWxsIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hY3Rpb24tYnV0dG9ucyAuYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uYmFkZ2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG59XG5cbmFkZHJlc3Mge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5hY3Rpb24tYnV0dG9ucyxcbiAgLnRpbWVsaW5lLFxuICAubmV4dC1zdGVwcyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuICB9XG4gIC5zdWNjZXNzLWljb24gLmZhLWNoZWNrLWNpcmNsZSB7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLnByb2R1Y3QtdGh1bWIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLnRpbWVsaW5lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgfVxuICAudGltZWxpbmU6OmJlZm9yZSB7XG4gICAgbGVmdDogMC43NXJlbTtcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0gLnRpbWVsaW5lLW1hcmtlciB7XG4gICAgbGVmdDogLTEuMjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zdWNjZXNzLWljb24gLmZhLWNoZWNrLWNpcmNsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG4gIC5kaXNwbGF5LTQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICB9XG4gIC5wcm9kdWN0LXRodW1iIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLnRhYmxlIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAudGFibGUgdGgsIC50YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_order-confirmation_order-confirmation_component_ts.js.map