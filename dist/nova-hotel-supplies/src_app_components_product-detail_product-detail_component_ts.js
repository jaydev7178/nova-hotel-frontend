"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["src_app_components_product-detail_product-detail_component_ts"],{

/***/ 1329:
/*!***********************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailComponent: () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 6241);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 6868);









const _c0 = a0 => ["/product", a0];
function ProductDetailComponent_div_0_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 39);
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r1.product.name);
  }
}
function ProductDetailComponent_div_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.product.stock, " in stock ");
  }
}
function ProductDetailComponent_div_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Out of stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductDetailComponent_div_0_li_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", feature_r3, " ");
  }
}
function ProductDetailComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 46)(6, "div", 48)(7, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_div_0_div_26_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.decrementQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProductDetailComponent_div_0_div_26_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.quantity, $event) || (ctx_r1.quantity = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_div_0_div_26_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.incrementQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 53)(13, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_div_0_div_26_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.addToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r1.product.stock);
  }
}
function ProductDetailComponent_div_0_div_98_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const relatedProduct_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", relatedProduct_r5.stock, " in stock ");
  }
}
function ProductDetailComponent_div_0_div_98_div_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Out of stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductDetailComponent_div_0_div_98_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductDetailComponent_div_0_div_98_div_5_span_5_Template, 2, 1, "span", 64)(6, ProductDetailComponent_div_0_div_98_div_5_span_6_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 66)(8, "h6", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 69)(13, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const relatedProduct_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", relatedProduct_r5.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", relatedProduct_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", relatedProduct_r5.stock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", relatedProduct_r5.stock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](relatedProduct_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", relatedProduct_r5.description.substring(0, 80), "... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 8, relatedProduct_r5.price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, relatedProduct_r5.id));
  }
}
function ProductDetailComponent_div_0_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Related Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductDetailComponent_div_0_div_98_div_5_Template, 18, 13, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.relatedProducts);
  }
}
function ProductDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductDetailComponent_div_0_img_7_Template, 1, 2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "div", 10)(10, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 12)(13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductDetailComponent_div_0_span_16_Template, 2, 1, "span", 14)(17, ProductDetailComponent_div_0_span_17_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16)(19, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 18)(22, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Key Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ProductDetailComponent_div_0_li_25_Template, 3, 1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProductDetailComponent_div_0_div_26_Template, 16, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 23)(28, "div", 24)(29, "div", 25)(30, "div", 26)(31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 25)(36, "div", 26)(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "SKU:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25)(42, "div", 26)(43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Stock:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 25)(48, "div", 26)(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Weight:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "0.5 kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 28)(54, "div", 29)(55, "div", 30)(56, "div", 31)(57, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Product Specifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 34)(61, "div", 3)(62, "div", 35)(63, "table", 36)(64, "tbody")(65, "tr")(66, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Material:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Premium Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tr")(71, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Dimensions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "15cm x 10cm x 5cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "tr")(76, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Capacity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "360ml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 35)(81, "table", 36)(82, "tbody")(83, "tr")(84, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Packaging:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Eco-friendly");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "tr")(89, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Certification:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "ISO 9001");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "tr")(94, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Warranty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "1 Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, ProductDetailComponent_div_0_div_98_Template, 6, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.product.images.slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 14, ctx_r1.product.price, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.product.stock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.product.stock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.product.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.product.stock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.product.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.product.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.product.stock, " units");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.relatedProducts.length > 0);
  }
}
function ProductDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 74)(1, "div", 75)(2, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Loading product details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ProductDetailComponent {
  constructor(route, router, productService, cartService) {
    this.route = route;
    this.router = router;
    this.productService = productService;
    this.cartService = cartService;
    this.relatedProducts = [];
    this.quantity = 1;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.loadProduct(productId);
        this.loadRelatedProducts();
      }
    });
  }
  loadProduct(id) {
    this.productService.getProduct(id).subscribe(product => {
      if (product) {
        this.product = product;
      } else {
        this.router.navigate(['/products']);
      }
    });
  }
  loadRelatedProducts() {
    // Load related products (same category, excluding current product)
    this.productService.getProducts().subscribe(products => {
      if (this.product) {
        this.relatedProducts = products.filter(p => p.id !== this.product.id && p.category === this.product.category).slice(0, 4);
      }
    });
  }
  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      // You could add a toast notification here
    }
  }
  incrementQuantity() {
    if (this.product && this.quantity < this.product.stock) {
      this.quantity++;
    }
  }
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  viewRelatedProduct(productId) {
    this.router.navigate(['/product', productId]);
  }
  static {
    this.ɵfac = function ProductDetailComponent_Factory(t) {
      return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductDetailComponent,
      selectors: [["app-product-detail"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      consts: [["class", "container py-5", 4, "ngIf"], ["class", "container py-5 text-center", 4, "ngIf"], [1, "container", "py-5"], [1, "row"], [1, "col-lg-6"], [1, "product-images"], [1, "main-image", "mb-3"], [1, "img-fluid", "rounded", "shadow", 3, "src", "alt"], [1, "thumbnail-images", "d-flex", "gap-2"], ["class", "img-thumbnail cursor-pointer", "style", "width: 80px; height: 80px; object-fit: cover;", 3, "src", "alt", 4, "ngFor", "ngForOf"], [1, "product-info"], [1, "product-title", "mb-3"], [1, "price-section", "mb-4"], [1, "price", "h3", "text-primary", "fw-bold"], ["class", "ms-3 badge bg-success", 4, "ngIf"], ["class", "ms-3 badge bg-danger", 4, "ngIf"], [1, "description", "mb-4"], [1, "text-muted"], [1, "features", "mb-4"], [1, "mb-3"], [1, "list-unstyled"], ["class", "mb-2", 4, "ngFor", "ngForOf"], ["class", "add-to-cart mb-4", 4, "ngIf"], [1, "product-details"], [1, "row", "g-3"], [1, "col-6"], [1, "detail-item"], [1, "ms-2"], [1, "row", "mt-5"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "fas", "fa-info-circle", "me-2"], [1, "card-body"], [1, "col-md-6"], [1, "table", "table-borderless"], [1, "fw-bold"], ["class", "row mt-5", 4, "ngIf"], [1, "img-thumbnail", "cursor-pointer", 2, "width", "80px", "height", "80px", "object-fit", "cover", 3, "src", "alt"], [1, "ms-3", "badge", "bg-success"], [1, "ms-3", "badge", "bg-danger"], [1, "mb-2"], [1, "fas", "fa-check", "text-success", "me-2"], [1, "add-to-cart", "mb-4"], [1, "row", "align-items-center"], [1, "col-auto"], [1, "form-label", "fw-bold"], [1, "input-group", 2, "width", "120px"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-minus"], ["type", "number", "min", "1", 1, "form-control", "text-center", 3, "ngModelChange", "ngModel", "max"], [1, "fas", "fa-plus"], [1, "col"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "fas", "fa-cart-plus", "me-2"], [1, "mb-4"], [1, "row", "g-4"], ["class", "col-lg-3 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6"], [1, "card", "product-card", "h-100"], [1, "position-relative"], [1, "card-img-top", 3, "src", "alt"], [1, "position-absolute", "top-0", "end-0", "p-2"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-danger", 4, "ngIf"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title"], [1, "card-text", "text-muted", "small", "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-auto"], [1, "price"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "container", "py-5", "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"]],
      template: function ProductDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductDetailComponent_div_0_Template, 99, 17, "div", 0)(1, ProductDetailComponent_div_1_Template, 6, 0, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.product);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: [".product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.product-images[_ngcontent-%COMP%]   .thumbnail-images[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.product-images[_ngcontent-%COMP%]   .thumbnail-images[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:hover, .product-images[_ngcontent-%COMP%]   .thumbnail-images[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  transform: scale(1.05);\n}\n\n.product-info[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-weight: 700;\n  line-height: 1.2;\n}\n.product-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 700;\n}\n.product-info[_ngcontent-%COMP%]   .specifications[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  background-color: #f8f9fa;\n  border-radius: 6px;\n}\n.product-info[_ngcontent-%COMP%]   .specifications[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n.product-info[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n}\n.product-info[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-left: 0;\n  border-right: 0;\n  border-radius: 0;\n}\n.product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: none;\n}\n.product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n}\n.product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.product-info[_ngcontent-%COMP%]   .additional-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.product-info[_ngcontent-%COMP%]   .additional-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.related-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.related-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.related-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  height: 200px;\n  object-fit: cover;\n}\n.related-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 0;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: var(--text-light);\n}\n\n@media (max-width: 768px) {\n  .product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .product-images[_ngcontent-%COMP%]   .thumbnail-images[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .product-info[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  .product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], .product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .product-info[_ngcontent-%COMP%]   .additional-actions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n}\n@media (max-width: 576px) {\n  .product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .product-images[_ngcontent-%COMP%]   .thumbnail-images[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .product-images[_ngcontent-%COMP%]   .thumbnail-images[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .product-info[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .product-info[_ngcontent-%COMP%]   .specifications[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0pheWRldiUyMFNhaHUvSmF5ZGVlcCUyMFNhaHUvUHJvamVjdC9OSFMvc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDRE47QURHTTtFQUNFLHNCQUFBO0FDRFI7QURPSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ0xOO0FET007RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0FDTFI7O0FEWUU7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlFO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEY0k7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDWk47QURjTTtFQUNFLHVCQUFBO0FDWlI7QURrQkk7RUFDRSxrQkFBQTtBQ2hCTjtBRGtCTTtFQUNFLGlCQUFBO0FDaEJSO0FEdUJNO0VBQ0UsZ0JBQUE7QUNyQlI7QUR1QlE7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FDckJWO0FEd0JRO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBQ3RCVjtBRDBCTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN4QlI7QUQwQlE7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0FDeEJWO0FENkJJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQzNCTjtBRDZCTTtFQUNFLDJCQUFBO0FDM0JSO0FEaUNJO0VBQ0UseUJBQUE7QUMvQk47QURpQ007RUFDRSwyQkFBQTtBQy9CUjs7QURzQ0U7RUFDRSx5QkFBQTtBQ25DSjtBRHFDSTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUNuQ047QURzQ0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNwQ047QUR1Q0k7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FDckNOOztBRDBDQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQ3ZDRjtBRDBDSTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7QUN4Q047QUQwQ007RUFDRSwwQkFBQTtBQ3hDUjtBRDRDSTtFQUNFLHdCQUFBO0FDMUNOOztBRGdEQTtFQUVJO0lBQ0UsYUFBQTtFQzlDSjtFRGtESTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDaEROO0VEcURBO0lBQ0UsZ0JBQUE7RUNuREY7RUR1RE07SUFDRSxtQkFBQTtFQ3JEUjtFRDRETTtJQUNFLHFCQUFBO0VDMURSO0FBQ0Y7QURnRUE7RUFFSTtJQUNFLGFBQUE7RUMvREo7RURrRUU7SUFDRSx1QkFBQTtFQ2hFSjtFRGtFSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDaEVOO0VEc0VFO0lBQ0UsaUJBQUE7RUNwRUo7RUR5RU07SUFDRSxxQkFBQTtFQ3ZFUjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1hZ2VzIHtcclxuICAubWFpbi1pbWFnZSB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50aHVtYm5haWwtaW1hZ2VzIHtcclxuICAgIC50aHVtYm5haWwge1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIsICYuYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm8ge1xyXG4gIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICAuc3BlY2lmaWNhdGlvbnMge1xyXG4gICAgLnNwZWMtaXRlbSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIFxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWF0dXJlcyB7XHJcbiAgICB1bCBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMDtcclxuICAgICAgXHJcbiAgICAgIC5mYXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCB7XHJcbiAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAuYnRuIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWxnIHtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmFkZGl0aW9uYWwtYWN0aW9ucyB7XHJcbiAgICAuYnRuIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJlbGF0ZWQtcHJvZHVjdHMge1xyXG4gIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcmljZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5icmVhZGNydW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gIC5icmVhZGNydW1iLWl0ZW0ge1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9kdWN0LWltYWdlcyB7XHJcbiAgICAubWFpbi1pbWFnZSBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGh1bWJuYWlsLWltYWdlcyB7XHJcbiAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBcclxuICAgIC5hZGQtdG8tY2FydCB7XHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIC5jb2wtbWQtNCwgLmNvbC1tZC04IHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hZGRpdGlvbmFsLWFjdGlvbnMge1xyXG4gICAgICAucm93IHtcclxuICAgICAgICAuY29sLTYge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnByb2R1Y3QtaW1hZ2VzIHtcclxuICAgIC5tYWluLWltYWdlIGltZyB7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aHVtYm5haWwtaW1hZ2VzIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtaW5mbyB7XHJcbiAgICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3BlY2lmaWNhdGlvbnMge1xyXG4gICAgICAucm93IHtcclxuICAgICAgICAuY29sLXNtLTYge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucHJvZHVjdC1pbWFnZXMgLm1haW4taW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLnByb2R1Y3QtaW1hZ2VzIC5tYWluLWltYWdlIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59XG4ucHJvZHVjdC1pbWFnZXMgLnRodW1ibmFpbC1pbWFnZXMgLnRodW1ibmFpbCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnByb2R1Y3QtaW1hZ2VzIC50aHVtYm5haWwtaW1hZ2VzIC50aHVtYm5haWw6aG92ZXIsIC5wcm9kdWN0LWltYWdlcyAudGh1bWJuYWlsLWltYWdlcyAudGh1bWJuYWlsLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wcm9kdWN0LWluZm8gLnByb2R1Y3QtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5wcm9kdWN0LWluZm8gLnByaWNlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnByb2R1Y3QtaW5mbyAuc3BlY2lmaWNhdGlvbnMgLnNwZWMtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ucHJvZHVjdC1pbmZvIC5zcGVjaWZpY2F0aW9ucyAuc3BlYy1pdGVtIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuLnByb2R1Y3QtaW5mbyAuZmVhdHVyZXMgdWwgbGkge1xuICBwYWRkaW5nOiAwLjI1cmVtIDA7XG59XG4ucHJvZHVjdC1pbmZvIC5mZWF0dXJlcyB1bCBsaSAuZmFzIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ucHJvZHVjdC1pbmZvIC5hZGQtdG8tY2FydCAuaW5wdXQtZ3JvdXAgLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucHJvZHVjdC1pbmZvIC5hZGQtdG8tY2FydCAuaW5wdXQtZ3JvdXAgLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xufVxuLnByb2R1Y3QtaW5mbyAuYWRkLXRvLWNhcnQgLmlucHV0LWdyb3VwIC5idG46bGFzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG59XG4ucHJvZHVjdC1pbmZvIC5hZGQtdG8tY2FydCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucHJvZHVjdC1pbmZvIC5hZGQtdG8tY2FydCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucHJvZHVjdC1pbmZvIC5hZGQtdG8tY2FydCAuYnRuLWxnIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvZHVjdC1pbmZvIC5hZGQtdG8tY2FydCAuYnRuLWxnOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuLnByb2R1Y3QtaW5mbyAuYWRkaXRpb25hbC1hY3Rpb25zIC5idG4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnByb2R1Y3QtaW5mbyAuYWRkaXRpb25hbC1hY3Rpb25zIC5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5yZWxhdGVkLXByb2R1Y3RzIC5wcm9kdWN0LWNhcmQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3QtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLnJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3QtY2FyZCAuY2FyZC1pbWctdG9wIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAucHJvZHVjdC1jYXJkIC5wcmljZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJyZWFkY3J1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gYSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LWltYWdlcyAubWFpbi1pbWFnZSBpbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgLnByb2R1Y3QtaW1hZ2VzIC50aHVtYm5haWwtaW1hZ2VzIC50aHVtYm5haWwge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICAucHJvZHVjdC1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG4gIC5wcm9kdWN0LWluZm8gLmFkZC10by1jYXJ0IC5yb3cgLmNvbC1tZC00LCAucHJvZHVjdC1pbmZvIC5hZGQtdG8tY2FydCAucm93IC5jb2wtbWQtOCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICAucHJvZHVjdC1pbmZvIC5hZGRpdGlvbmFsLWFjdGlvbnMgLnJvdyAuY29sLTYge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wcm9kdWN0LWltYWdlcyAubWFpbi1pbWFnZSBpbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbiAgLnByb2R1Y3QtaW1hZ2VzIC50aHVtYm5haWwtaW1hZ2VzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAucHJvZHVjdC1pbWFnZXMgLnRodW1ibmFpbC1pbWFnZXMgLnRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5wcm9kdWN0LWluZm8gLnByb2R1Y3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5wcm9kdWN0LWluZm8gLnNwZWNpZmljYXRpb25zIC5yb3cgLmNvbC1zbS02IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_product-detail_product-detail_component_ts.js.map