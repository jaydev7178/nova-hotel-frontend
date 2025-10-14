"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["src_app_components_not-found_not-found_component_ts"],{

/***/ 4633:
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class NotFoundComponent {
  static {
    this.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 37,
      vars: 0,
      consts: [[1, "container", "py-5"], [1, "row"], [1, "col-12", "text-center"], [1, "error-content"], [1, "error-icon", "mb-4"], [1, "fas", "fa-exclamation-triangle", "fa-5x", "text-warning"], [1, "display-1", "fw-bold", "text-primary", "mb-3"], [1, "display-5", "fw-bold", "text-dark", "mb-4"], [1, "lead", "text-muted", "mb-5"], [1, "action-buttons"], ["routerLink", "/home", 1, "btn", "btn-primary", "btn-lg", "me-3", "mb-3"], [1, "fas", "fa-home", "me-2"], ["routerLink", "/products", 1, "btn", "btn-outline-primary", "btn-lg", "mb-3"], [1, "fas", "fa-shopping-bag", "me-2"], [1, "helpful-links", "mt-5"], [1, "mb-3"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "col-md-4", "mb-2"], ["routerLink", "/products", 1, "text-decoration-none"], ["routerLink", "/about", 1, "text-decoration-none"], [1, "fas", "fa-info-circle", "me-2"], ["routerLink", "/cart", 1, "text-decoration-none"], [1, "fas", "fa-shopping-cart", "me-2"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Page Not Found");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Go Home ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Browse Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14)(20, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Helpful Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "div", 17)(24, "div", 1)(25, "div", 18)(26, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18)(30, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " About Us ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18)(34, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Cart ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".error-content[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%]   .fa-exclamation-triangle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.error-content[_ngcontent-%COMP%]   .display-1[_ngcontent-%COMP%] {\n  font-size: 8rem;\n  font-weight: 900;\n  line-height: 1;\n  color: var(--primary-color);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n}\n.error-content[_ngcontent-%COMP%]   .display-5[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 1.5rem;\n}\n.error-content[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.6;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n}\n.error-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.error-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.error-content[_ngcontent-%COMP%]   .helpful-links[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-weight: 600;\n}\n.error-content[_ngcontent-%COMP%]   .helpful-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n  transition: color 0.3s ease;\n}\n.error-content[_ngcontent-%COMP%]   .helpful-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #214478;\n  text-decoration: underline !important;\n}\n.error-content[_ngcontent-%COMP%]   .helpful-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .error-content[_ngcontent-%COMP%]   .display-1[_ngcontent-%COMP%] {\n    font-size: 6rem;\n  }\n  .error-content[_ngcontent-%COMP%]   .display-5[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .error-content[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .error-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n  .error-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n  .error-content[_ngcontent-%COMP%]   .helpful-links[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 576px) {\n  .error-content[_ngcontent-%COMP%]   .display-1[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n  .error-content[_ngcontent-%COMP%]   .display-5[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .error-content[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .error-content[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%]   .fa-exclamation-triangle[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vSmF5ZGV2JTIwU2FodS9KYXlkZWVwJTIwU2FodS9Qcm9qZWN0L05IUy9zcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLDRCQUFBO0FDSE47QURPRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0FDTEo7QURRRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7QUNOSjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNQSjtBRFdJO0VBQ0UseUJBQUE7QUNUTjtBRFdNO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQ1RSO0FEZUk7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FDYk47QURnQkk7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNkTjtBRGdCTTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtBQ2RSO0FEaUJNO0VBQ0UsWUFBQTtBQ2ZSOztBRHFCQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDbEJGO0VEb0JBO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0VDbEJGO0VEb0JBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDbEJGO0FBQ0Y7QURzQkE7RUFFSTtJQUNFLGVBQUE7RUNyQko7RUR3QkU7SUFDRSxlQUFBO0VDdEJKO0VEeUJFO0lBQ0UsaUJBQUE7RUN2Qko7RUQyQkk7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDekJOO0VEMkJNO0lBQ0UsZ0JBQUE7RUN6QlI7RURnQ007SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDOUJSO0FBQ0Y7QURvQ0E7RUFFSTtJQUNFLGVBQUE7RUNuQ0o7RURzQ0U7SUFDRSxpQkFBQTtFQ3BDSjtFRHVDRTtJQUNFLGVBQUE7RUNyQ0o7RUR3Q0U7SUFDRSxlQUFBO0VDdENKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzJjNWFhMDtcclxuXHJcbi5lcnJvci1jb250ZW50IHtcclxuICAuZXJyb3ItaWNvbiB7XHJcbiAgICAuZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUge1xyXG4gICAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGlzcGxheS0xIHtcclxuICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNwbGF5LTUge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgIC5idG4ge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWxwZnVsLWxpbmtzIHtcclxuICAgIGg1IHtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZhcyB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmVycm9yLWNvbnRlbnQge1xyXG4gICAgLmRpc3BsYXktMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpc3BsYXktNSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxlYWQge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlbHBmdWwtbGlua3Mge1xyXG4gICAgICAucm93IHtcclxuICAgICAgICAuY29sLW1kLTQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5lcnJvci1jb250ZW50IHtcclxuICAgIC5kaXNwbGF5LTEge1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXNwbGF5LTUge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxlYWQge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lcnJvci1pY29uIC5mYS1leGNsYW1hdGlvbi10cmlhbmdsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmVycm9yLWNvbnRlbnQgLmVycm9yLWljb24gLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIHtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cbi5lcnJvci1jb250ZW50IC5kaXNwbGF5LTEge1xuICBmb250LXNpemU6IDhyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uZXJyb3ItY29udGVudCAuZGlzcGxheS01IHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5lcnJvci1jb250ZW50IC5sZWFkIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0byAycmVtO1xufVxuLmVycm9yLWNvbnRlbnQgLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmVycm9yLWNvbnRlbnQgLmFjdGlvbi1idXR0b25zIC5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmVycm9yLWNvbnRlbnQgLmhlbHBmdWwtbGlua3MgaDUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5lcnJvci1jb250ZW50IC5oZWxwZnVsLWxpbmtzIGEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5lcnJvci1jb250ZW50IC5oZWxwZnVsLWxpbmtzIGE6aG92ZXIge1xuICBjb2xvcjogIzIxNDQ3ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cbi5lcnJvci1jb250ZW50IC5oZWxwZnVsLWxpbmtzIGEgLmZhcyB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5lcnJvci1jb250ZW50IC5kaXNwbGF5LTEge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgfVxuICAuZXJyb3ItY29udGVudCAuZGlzcGxheS01IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmVycm9yLWNvbnRlbnQgLmxlYWQge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIC5lcnJvci1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5lcnJvci1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYnRuOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmVycm9yLWNvbnRlbnQgLmhlbHBmdWwtbGlua3MgLnJvdyAuY29sLW1kLTQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmVycm9yLWNvbnRlbnQgLmRpc3BsYXktMSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIC5lcnJvci1jb250ZW50IC5kaXNwbGF5LTUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5lcnJvci1jb250ZW50IC5sZWFkIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLmVycm9yLWNvbnRlbnQgLmVycm9yLWljb24gLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_not-found_not-found_component_ts.js.map