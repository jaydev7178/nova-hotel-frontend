"use strict";
(self["webpackChunknova_hotel_supplies"] = self["webpackChunknova_hotel_supplies"] || []).push([["src_app_components_admin_admin-dashboard_admin-dashboard_component_ts"],{

/***/ 6597:
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class AdminDashboardComponent {
  static {
    this.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 0,
      consts: [[1, "admin-layout"], [1, "admin-header", "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["routerLink", "/admin", 1, "navbar-brand"], [1, "fas", "fa-crown", "me-2"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#adminNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "adminNavbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto"], [1, "nav-item"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-tachometer-alt", "me-1"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-box", "me-1"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-shopping-cart", "me-1"], ["routerLink", "/admin/approvals", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-check-circle", "me-1"], [1, "navbar-nav"], ["routerLink", "/home", 1, "nav-link"], [1, "fas", "fa-external-link-alt", "me-1"], ["href", "#", 1, "nav-link"], [1, "fas", "fa-sign-out-alt", "me-1"], [1, "admin-content"], [1, "container-fluid", "py-4"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Nova Admin ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Dashboard ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9)(15, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9)(19, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Orders ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9)(23, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Approvals ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 18)(27, "li", 9)(28, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " View Site ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 9)(32, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Logout ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23)(36, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: [".admin-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f8f9fa;\n}\n\n.admin-header[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.admin-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.admin-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n.admin-header[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0.75rem 1rem;\n  transition: all 0.3s ease;\n}\n.admin-header[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .admin-header[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n}\n.admin-header[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.admin-content[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 76px);\n  padding-top: 0;\n}\n\n@media (max-width: 768px) {\n  .admin-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.9rem;\n  }\n  .admin-content[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vSmF5ZGV2JTIwU2FodS9KYXlkZWVwJTIwU2FodS9Qcm9qZWN0L05IUy9zcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLHdDQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0UsMEJBQUE7QUNDTjtBREdFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDREo7QURHSTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtBQ0ZOOztBRE9BO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FDSkY7O0FET0E7RUFHTTtJQUNFLHVCQUFBO0lBQ0EsaUJBQUE7RUNOTjtFRFlFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ1ZKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tbGF5b3V0IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uYWRtaW4taGVhZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIFxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIFxyXG4gICAgLmZhcyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIsICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mYXMge1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRtaW4tY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDc2cHgpO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYWRtaW4taGVhZGVyIHtcclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYWRtaW4tY29udGVudCB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYWRtaW4tbGF5b3V0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi5hZG1pbi1oZWFkZXIge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmFkbWluLWhlYWRlciAubmF2YmFyLWJyYW5kIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuLmFkbWluLWhlYWRlciAubmF2YmFyLWJyYW5kIC5mYXMge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cbi5hZG1pbi1oZWFkZXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmFkbWluLWhlYWRlciAubmF2LWxpbms6aG92ZXIsIC5hZG1pbi1oZWFkZXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmFkbWluLWhlYWRlciAubmF2LWxpbmsgLmZhcyB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmFkbWluLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzZweCk7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFkbWluLWhlYWRlciAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG4gIC5hZG1pbi1jb250ZW50IC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_admin-dashboard_admin-dashboard_component_ts.js.map