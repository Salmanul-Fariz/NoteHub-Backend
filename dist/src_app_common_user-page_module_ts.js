"use strict";
(self["webpackChunkNoteHub"] = self["webpackChunkNoteHub"] || []).push([["src_app_common_user-page_module_ts"],{

/***/ 6838:
/*!********************************************!*\
  !*** ./src/app/common/user-page.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.module */ 1075);
/* harmony import */ var _user_page_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.routing */ 5737);
/* harmony import */ var _user_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-pages/home/home.component */ 6887);
/* harmony import */ var _user_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-pages/my-account/my-account.component */ 7526);
/* harmony import */ var _user_pages_my_account_left_nav_profile_left_nav_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-pages/my-account/left-nav-profile/left-nav-profile.component */ 9148);
/* harmony import */ var _user_pages_my_account_your_projects_your_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-pages/my-account/your-projects/your-projects.component */ 762);
/* harmony import */ var _user_pages_my_account_your_profile_your_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-pages/my-account/your-profile/your-profile.component */ 8503);
/* harmony import */ var _user_pages_my_account_your_pages_your_pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-pages/my-account/your-pages/your-pages.component */ 769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);










class UserPageModule {}
UserPageModule.ɵfac = function UserPageModule_Factory(t) {
  return new (t || UserPageModule)();
};
UserPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: UserPageModule
});
UserPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _user_page_routing__WEBPACK_IMPORTED_MODULE_1__.UserPageRouting, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](UserPageModule, {
    declarations: [_user_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _user_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__.MyAccountComponent, _user_pages_my_account_left_nav_profile_left_nav_profile_component__WEBPACK_IMPORTED_MODULE_4__.LeftNavProfileComponent, _user_pages_my_account_your_projects_your_projects_component__WEBPACK_IMPORTED_MODULE_5__.YourProjectsComponent, _user_pages_my_account_your_profile_your_profile_component__WEBPACK_IMPORTED_MODULE_6__.YourProfileComponent, _user_pages_my_account_your_pages_your_pages_component__WEBPACK_IMPORTED_MODULE_7__.YourPagesComponent],
    imports: [_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _user_page_routing__WEBPACK_IMPORTED_MODULE_1__.UserPageRouting],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 5737:
/*!*********************************************!*\
  !*** ./src/app/common/user-page.routing.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRouting": () => (/* binding */ UserPageRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _guards_userAutherization_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/userAutherization.guard */ 7086);
/* harmony import */ var _user_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-pages/home/home.component */ 6887);
/* harmony import */ var _user_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-pages/my-account/my-account.component */ 7526);
/* harmony import */ var _user_pages_my_account_your_pages_your_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-pages/my-account/your-pages/your-pages.component */ 769);
/* harmony import */ var _user_pages_my_account_your_profile_your_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-pages/my-account/your-profile/your-profile.component */ 8503);
/* harmony import */ var _user_pages_my_account_your_projects_your_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-pages/my-account/your-projects/your-projects.component */ 762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [{
  path: '',
  component: _user_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}, {
  path: 'profile',
  component: _user_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__.MyAccountComponent,
  canActivate: [_guards_userAutherization_guard__WEBPACK_IMPORTED_MODULE_0__.UserAutherizationGuard],
  children: [{
    path: '',
    component: _user_pages_my_account_your_profile_your_profile_component__WEBPACK_IMPORTED_MODULE_4__.YourProfileComponent
  }, {
    path: 'pages',
    component: _user_pages_my_account_your_pages_your_pages_component__WEBPACK_IMPORTED_MODULE_3__.YourPagesComponent
  }, {
    path: 'projects',
    component: _user_pages_my_account_your_projects_your_projects_component__WEBPACK_IMPORTED_MODULE_5__.YourProjectsComponent
  }]
}];
class UserPageRouting {}
UserPageRouting.ɵfac = function UserPageRouting_Factory(t) {
  return new (t || UserPageRouting)();
};
UserPageRouting.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: UserPageRouting
});
UserPageRouting.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UserPageRouting, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6887:
/*!**********************************************************!*\
  !*** ./src/app/common/user-pages/home/home.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/user.service */ 4981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




const _c0 = function () {
  return ["/workspaces/user-workspace"];
};
function HomeComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Notepage Making");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
const _c1 = function () {
  return ["/workspaces/project-workspace"];
};
function HomeComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Project Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
  }
}
const _c2 = function () {
  return ["/auth/signup"];
};
function HomeComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Try NoteHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
  }
}
class HomeComponent {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
  }
  ngOnInit() {
    this.userService.homePage().subscribe({
      next: response => {
        if (response.status === 'Pending-Verify') {
          localStorage.setItem('verify', 'true');
          this.router.navigate(['auth/verify']);
        }
      }
    });
    this.isAuth = localStorage.getItem('jwt') !== ( false || null) ? true : false;
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 50,
  vars: 3,
  consts: [[1, "section-1-container"], [1, "text-4xl", "md:text-6xl"], [1, "text-base", "md:text-xl"], [1, "mt-5", "gap-3"], [3, "routerLink", 4, "ngIf"], [1, "section-2-container"], [1, "text-3xl", "md:text-5xl"], [1, "section-4-container", "py-10", "md:py-28"], [1, "flex", "flex-col", "md:flex-row", "items-start", "md:items-center", "justify-center"], [1, "flex", "justify-center", "items-center", "md:block", "w-12/12", "md:w-6/12"], ["src", "https://notehub0.s3.ap-south-1.amazonaws.com/resorces/project--img.png", "alt", "", 1, "image"], [1, "right-bar", "w-12/12", "md:w-6/12"], [1, "text-2xl", "md:text-4xl"], [1, "section-5-container", "py-10", "md:py-28"], ["src", "https://notehub0.s3.ap-south-1.amazonaws.com/resorces/workspace-img.png", "alt", "", 1, "image"], [3, "routerLink"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main")(1, "section")(2, "div", 0)(3, "div")(4, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Build something great");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "h6", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "For every minute spent organizing, an hour is earned. Without Spending time Create a Work Space");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_button_10_Template, 2, 2, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_button_11_Template, 2, 2, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_button_12_Template, 2, 2, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "div")(15, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Productivity and Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div")(20, "h6", 2)(21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Choose a high-quality ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Application.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Our Platform gives ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " User Management and Project Management Work Space ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7)(29, "div", 8)(30, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11)(33, "div")(34, "h2", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Build Your Work Space for Productivity and Organization.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div")(37, "h6", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Individuals and teams looking to improve their productivity and organization. It can help users Keep like a note book and manage their work and personal lives more effectively.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "div", 8)(41, "div", 11)(42, "div")(43, "h2", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Create, Track, and Release Projects.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div")(46, "h6", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "It is the process of planning, organizing, and controlling resources in order to achieve specific goals and objectives.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["main[_ngcontent-%COMP%] {\n  background: #0e1525;\n}\n\nsection[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0 auto;\n}\n\n\n.section-1-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-height: 800px;\n  padding: 120px 0px;\n  row-gap: 5px;\n}\n\n.section-1-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-1-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  font-style: normal;\n  font-weight: 400;\n  color: #ffffff;\n  font-family: 'JosefinSans-Regular';\n}\n\n.section-1-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #ffffff;\n  line-height: 42px;\n  max-width: 475px;\n}\n\n.section-1-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 22px;\n  color: #fff;\n  background-color: #0053a6;\n  border-radius: 12px;\n  font-weight: 700;\n  transition: 0.3s;\n}\n\n.section-1-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #262626;\n}\n\n\n.section-2-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-height: 800px;\n  padding: 60px 0px;\n  row-gap: 30px;\n}\n\n.section-2-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-2-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: start;\n  font-style: normal;\n  font-weight: 400;\n  color: #ffffff;\n  font-family: 'JosefinSans-Regular';\n}\n\n.section-2-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  text-align: start;\n  color: #ffffff;\n  line-height: 42px;\n}\n\n.section-2-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #71cf7b;\n  font-weight: 800;\n}\n\n\n.section-4-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-height: 800px;\n  row-gap: 30px;\n}\n\n.section-4-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  gap: 30px;\n}\n\n.section-4-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-4-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: start;\n  font-style: normal;\n  font-weight: 400;\n  color: #ffffff;\n  font-family: 'JosefinSans-Regular';\n}\n\n.section-4-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  text-align: start;\n  color: #ffffff;\n  line-height: 42px;\n  max-width: 440px;\n}\n\n.section-4-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #71cf7b;\n  font-weight: 800;\n}\n\n.section-4-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 30px;\n}\n\n\n.section-5-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-height: 800px;\n  padding: 100px 0px;\n  row-gap: 30px;\n}\n\n.section-5-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  gap: 30px;\n}\n\n.section-5-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-5-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: start;\n  font-style: normal;\n  font-weight: 400;\n  color: #ffffff;\n  font-family: 'JosefinSans-Regular';\n}\n\n.section-5-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  text-align: start;\n  color: #ffffff;\n  line-height: 42px;\n  max-width: 440px;\n}\n\n.section-5-container[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #71cf7b;\n  font-weight: 800;\n}\n\n.section-5-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBLGNBQWM7QUFDZDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjMGUxNTI1O1xufVxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIHNlY3Rpb24gMiAqL1xuLnNlY3Rpb24tMS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LWhlaWdodDogODAwcHg7XG4gIHBhZGRpbmc6IDEyMHB4IDBweDtcbiAgcm93LWdhcDogNXB4O1xufVxuXG4uc2VjdGlvbi0xLWNvbnRhaW5lciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tMS1jb250YWluZXIgaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtUmVndWxhcic7XG59XG5cbi5zZWN0aW9uLTEtY29udGFpbmVyIGg2IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgbWF4LXdpZHRoOiA0NzVweDtcbn1cblxuLnNlY3Rpb24tMS1jb250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDIycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1M2E2O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2VjdGlvbi0xLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzI2MjYyNjtcbn1cblxuLyogc2VjdGlvbiAyICovXG4uc2VjdGlvbi0yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWF4LWhlaWdodDogODAwcHg7XG4gIHBhZGRpbmc6IDYwcHggMHB4O1xuICByb3ctZ2FwOiAzMHB4O1xufVxuXG4uc2VjdGlvbi0yLWNvbnRhaW5lciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tMi1jb250YWluZXIgaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1SZWd1bGFyJztcbn1cblxuLnNlY3Rpb24tMi1jb250YWluZXIgaDYge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG59XG5cbi5zZWN0aW9uLTItY29udGFpbmVyIHNwYW4ge1xuICBjb2xvcjogIzcxY2Y3YjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLyogc2VjdGlvbiA0ICovXG4uc2VjdGlvbi00LWNvbnRhaW5lciAucmlnaHQtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xuICByb3ctZ2FwOiAzMHB4O1xufVxuXG4uc2VjdGlvbi00LWNvbnRhaW5lciA+IGRpdiB7XG4gIGdhcDogMzBweDtcbn1cblxuLnNlY3Rpb24tNC1jb250YWluZXIgLnJpZ2h0LWJhciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tNC1jb250YWluZXIgLnJpZ2h0LWJhciBoMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xufVxuXG4uc2VjdGlvbi00LWNvbnRhaW5lciAucmlnaHQtYmFyIGg2IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICBtYXgtd2lkdGg6IDQ0MHB4O1xufVxuXG4uc2VjdGlvbi00LWNvbnRhaW5lciAucmlnaHQtYmFyIHNwYW4ge1xuICBjb2xvcjogIzcxY2Y3YjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlY3Rpb24tNC1jb250YWluZXIgLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi8qIHNlY3Rpb24gNSAqL1xuLnNlY3Rpb24tNS1jb250YWluZXIgLnJpZ2h0LWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgcGFkZGluZzogMTAwcHggMHB4O1xuICByb3ctZ2FwOiAzMHB4O1xufVxuXG4uc2VjdGlvbi01LWNvbnRhaW5lciA+IGRpdiB7XG4gIGdhcDogMzBweDtcbn1cblxuLnNlY3Rpb24tNS1jb250YWluZXIgLnJpZ2h0LWJhciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tNS1jb250YWluZXIgLnJpZ2h0LWJhciBoMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xufVxuXG4uc2VjdGlvbi01LWNvbnRhaW5lciAucmlnaHQtYmFyIGg2IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICBtYXgtd2lkdGg6IDQ0MHB4O1xufVxuXG4uc2VjdGlvbi01LWNvbnRhaW5lciAucmlnaHQtYmFyIHNwYW4ge1xuICBjb2xvcjogIzcxY2Y3YjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlY3Rpb24tNS1jb250YWluZXIgLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3VzZXItcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBLGNBQWM7QUFDZDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQSxnZ09BQWdnTyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjMGUxNTI1O1xufVxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIHNlY3Rpb24gMiAqL1xuLnNlY3Rpb24tMS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LWhlaWdodDogODAwcHg7XG4gIHBhZGRpbmc6IDEyMHB4IDBweDtcbiAgcm93LWdhcDogNXB4O1xufVxuXG4uc2VjdGlvbi0xLWNvbnRhaW5lciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tMS1jb250YWluZXIgaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtUmVndWxhcic7XG59XG5cbi5zZWN0aW9uLTEtY29udGFpbmVyIGg2IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgbWF4LXdpZHRoOiA0NzVweDtcbn1cblxuLnNlY3Rpb24tMS1jb250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDIycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1M2E2O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2VjdGlvbi0xLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzI2MjYyNjtcbn1cblxuLyogc2VjdGlvbiAyICovXG4uc2VjdGlvbi0yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWF4LWhlaWdodDogODAwcHg7XG4gIHBhZGRpbmc6IDYwcHggMHB4O1xuICByb3ctZ2FwOiAzMHB4O1xufVxuXG4uc2VjdGlvbi0yLWNvbnRhaW5lciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tMi1jb250YWluZXIgaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1SZWd1bGFyJztcbn1cblxuLnNlY3Rpb24tMi1jb250YWluZXIgaDYge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG59XG5cbi5zZWN0aW9uLTItY29udGFpbmVyIHNwYW4ge1xuICBjb2xvcjogIzcxY2Y3YjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLyogc2VjdGlvbiA0ICovXG4uc2VjdGlvbi00LWNvbnRhaW5lciAucmlnaHQtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xuICByb3ctZ2FwOiAzMHB4O1xufVxuXG4uc2VjdGlvbi00LWNvbnRhaW5lciA+IGRpdiB7XG4gIGdhcDogMzBweDtcbn1cblxuLnNlY3Rpb24tNC1jb250YWluZXIgLnJpZ2h0LWJhciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tNC1jb250YWluZXIgLnJpZ2h0LWJhciBoMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xufVxuXG4uc2VjdGlvbi00LWNvbnRhaW5lciAucmlnaHQtYmFyIGg2IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICBtYXgtd2lkdGg6IDQ0MHB4O1xufVxuXG4uc2VjdGlvbi00LWNvbnRhaW5lciAucmlnaHQtYmFyIHNwYW4ge1xuICBjb2xvcjogIzcxY2Y3YjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlY3Rpb24tNC1jb250YWluZXIgLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi8qIHNlY3Rpb24gNSAqL1xuLnNlY3Rpb24tNS1jb250YWluZXIgLnJpZ2h0LWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgcGFkZGluZzogMTAwcHggMHB4O1xuICByb3ctZ2FwOiAzMHB4O1xufVxuXG4uc2VjdGlvbi01LWNvbnRhaW5lciA+IGRpdiB7XG4gIGdhcDogMzBweDtcbn1cblxuLnNlY3Rpb24tNS1jb250YWluZXIgLnJpZ2h0LWJhciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tNS1jb250YWluZXIgLnJpZ2h0LWJhciBoMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xufVxuXG4uc2VjdGlvbi01LWNvbnRhaW5lciAucmlnaHQtYmFyIGg2IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICBtYXgtd2lkdGg6IDQ0MHB4O1xufVxuXG4uc2VjdGlvbi01LWNvbnRhaW5lciAucmlnaHQtYmFyIHNwYW4ge1xuICBjb2xvcjogIzcxY2Y3YjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlY3Rpb24tNS1jb250YWluZXIgLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9148:
/*!*********************************************************************************************!*\
  !*** ./src/app/common/user-pages/my-account/left-nav-profile/left-nav-profile.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftNavProfileComponent": () => (/* binding */ LeftNavProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/profile.service */ 9042);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = function () {
  return ["/profile"];
};
const _c1 = function (a0, a1) {
  return {
    "border-left": a0,
    "color": a1
  };
};
const _c2 = function () {
  return ["/profile/pages"];
};
const _c3 = function () {
  return ["/profile/projects"];
};
class LeftNavProfileComponent {
  constructor(router, _profileService) {
    this.router = router;
    this._profileService = _profileService;
  }
  ngOnInit() {
    const url = this.router.url.split('/');
    this.changeLeftColor(url);
    // currentRoute setting
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        const route = event.url.split('/');
        this.changeLeftColor(route);
      }
    });
  }
  changeLeftColor(route) {
    this.currentRoute = '';
    if (route[1] === 'profile') {
      if (route.length === 2) {
        this.currentRoute = 'profile';
      } else {
        if (route[2] === 'pages') {
          this.currentRoute = route[2];
        } else if (route[2] === 'projects') {
          this.currentRoute = route[2];
        }
      }
    }
  }
  logoutTransfer() {
    this._profileService.LogoutDataTransfer.emit(true);
  }
}
LeftNavProfileComponent.ɵfac = function LeftNavProfileComponent_Factory(t) {
  return new (t || LeftNavProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService));
};
LeftNavProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LeftNavProfileComponent,
  selectors: [["app-left-nav-profile"]],
  decls: 21,
  vars: 18,
  consts: [[1, "mt-4"], [1, "left-profile-nav-items", 3, "routerLink"], [3, "ngStyle"], [1, "fa-solid", "fa-circle-user"], [1, "fa-solid", "fa-file"], [1, "fa-solid", "fa-table-columns"], [1, "left-profile-nav-items", 3, "click"], [1, "logout"], [1, "fa-solid", "fa-right-from-bracket"]],
  template: function LeftNavProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Your Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1)(7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Your Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1)(12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Your Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LeftNavProfileComponent_Template_div_click_16_listener() {
        return ctx.logoutTransfer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c1, ctx.currentRoute === "profile" ? "solid 3px #2f7fcf" : "solid 3px transparent", ctx.currentRoute === "profile" ? "#2f7fcf" : "#222"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c1, ctx.currentRoute === "pages" ? "solid 3px #2f7fcf" : "solid 3px transparent", ctx.currentRoute === "pages" ? "#2f7fcf" : "#222"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](15, _c1, ctx.currentRoute === "projects" ? "solid 3px #2f7fcf" : "solid 3px transparent", ctx.currentRoute === "projects" ? "#2f7fcf" : "#222"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".left-profile-nav-items[_ngcontent-%COMP%] {\n  padding: 8px 5px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 8px;\n  overflow: hidden;\n  border-radius: 8px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.left-profile-nav-items[_ngcontent-%COMP%]:hover {\n  background-color: #d5d5d5;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.left-profile-nav-items[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 8px;\n  overflow: hidden;\n  padding: 3px 8px;\n}\n\n.left-profile-nav-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  overflow: hidden;\n}\n\n.left-profile-nav-items[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 25px;\n}\n\n.logout[_ngcontent-%COMP%] {\n  border-left: solid 3px transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtbmF2LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQyIsImZpbGUiOiJsZWZ0LW5hdi1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1wcm9maWxlLW5hdi1pdGVtcyB7XG4gIHBhZGRpbmc6IDhweCA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5sZWZ0LXByb2ZpbGUtbmF2LWl0ZW1zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDVkNTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sZWZ0LXByb2ZpbGUtbmF2LWl0ZW1zID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogM3B4IDhweDtcbn1cblxuLmxlZnQtcHJvZmlsZS1uYXYtaXRlbXMgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxlZnQtcHJvZmlsZS1uYXYtaXRlbXMgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5sb2dvdXQge1xuICBib3JkZXItbGVmdDogc29saWQgM3B4IHRyYW5zcGFyZW50O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3VzZXItcGFnZXMvbXktYWNjb3VudC9sZWZ0LW5hdi1wcm9maWxlL2xlZnQtbmF2LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFHQSx3a0RBQXdrRCIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0LXByb2ZpbGUtbmF2LWl0ZW1zIHtcbiAgcGFkZGluZzogOHB4IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmxlZnQtcHJvZmlsZS1uYXYtaXRlbXM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQtcHJvZmlsZS1uYXYtaXRlbXMgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAzcHggOHB4O1xufVxuXG4ubGVmdC1wcm9maWxlLW5hdi1pdGVtcyBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGVmdC1wcm9maWxlLW5hdi1pdGVtcyBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLmxvZ291dCB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7526:
/*!**********************************************************************!*\
  !*** ./src/app/common/user-pages/my-account/my-account.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountComponent": () => (/* binding */ MyAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1339);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/profile.service */ 9042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _left_nav_profile_left_nav_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-nav-profile/left-nav-profile.component */ 9148);












function MyAccountComponent_button_6_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MyAccountComponent_button_6_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MyAccountComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyAccountComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MyAccountComponent_button_6_mat_icon_1_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MyAccountComponent_button_6_mat_icon_2_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.opened);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.opened);
  }
}
const _c0 = function (a0) {
  return {
    "hidden": a0
  };
};
class MyAccountComponent {
  constructor(observer, router, _profileService) {
    this.observer = observer;
    this.router = router;
    this._profileService = _profileService;
  }
  ngOnInit() {
    this.LogoutSubscription = this._profileService.LogoutDataTransfer.subscribe(data => {
      if (data) {
        this.isLogout = data;
      }
    });
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.delay)(1)).subscribe(res => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(() => {
      if (this.sidenav.mode === 'over') {
        this.sidenav.close();
      }
    });
  }
  cancelLogout() {
    this.isLogout = false;
  }
  successLogout() {
    this._profileService.logout();
  }
  ngOnDestroy() {
    this.LogoutSubscription.unsubscribe();
  }
}
MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) {
  return new (t || MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService));
};
MyAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MyAccountComponent,
  selectors: [["app-my-account"]],
  viewQuery: function MyAccountComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenav, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService])],
  decls: 23,
  vars: 7,
  consts: [["sidenav", "matSidenav"], [1, "workspace-container"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "log-modal", "w-10/12", "md:w-6/12", 3, "ngClass"], [1, "flex", "flex-col"], [1, "flex", "justify-end", "mr-4"], [1, "log-close-modal", 3, "click"], [1, "flex", "flex-col", "justify-start", "mt-2", "pt-2", "pl-8", "pr-8", "pb-6", "gap-y-4"], [1, "w-full"], [1, "text-xl"], [1, "w-full", "flex", "justify-end", "gap-4", "logOutButton", "mt-2"], [3, "click"], [1, "log-overlay", 3, "ngClass", "click"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"]],
  template: function MyAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container")(1, "mat-sidenav", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-left-nav-profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-sidenav-content")(5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MyAccountComponent_button_6_Template, 3, 2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_11_listener() {
        return ctx.cancelLogout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Do you really want to logout ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_18_listener() {
        return ctx.cancelLogout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_20_listener() {
        return ctx.successLogout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyAccountComponent_Template_div_click_22_listener() {
        return ctx.cancelLogout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.mode === "over");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, !ctx.isLogout));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, !ctx.isLogout));
    }
  },
  dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _left_nav_profile_left_nav_profile_component__WEBPACK_IMPORTED_MODULE_1__.LeftNavProfileComponent],
  styles: ["mat-sidenav[_ngcontent-%COMP%] {\n  width: 160px;\n  background: #efefef;\n  border: none;\n  text-align: center;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n\n.workspace-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 77px);\n  border-radius: 10px;\n  margin: 6px;\n  margin-left: 18px;\n  padding: 8px;\n  overflow: auto;\n}\n\n\n.log-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\n  z-index: 10;\n}\n\n.log-close-modal[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #333;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\n.log-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 1;\n  cursor: pointer;\n}\n\n.logOutButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background-color: #0053a6;\n}\n\n.logOutButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 2px 9px;\n  font-size: 18px;\n  color: white;\n  border: solid 1px transparent;\n  background-color: #b01d1d;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJteS1hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufVxuXG4ud29ya3NwYWNlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc3cHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIE1vZGFscyAqL1xuLmxvZy1tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3JlbSA1cmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5sb2ctY2xvc2UtbW9kYWwge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmxvZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ091dEJ1dHRvbiBidXR0b246Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1M2E2O1xufVxuXG4ubG9nT3V0QnV0dG9uIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDJweCA5cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMWQxZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3VzZXItcGFnZXMvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBR0EsNDdFQUE0N0UiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufVxuXG4ud29ya3NwYWNlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc3cHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIE1vZGFscyAqL1xuLmxvZy1tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3JlbSA1cmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5sb2ctY2xvc2UtbW9kYWwge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmxvZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ091dEJ1dHRvbiBidXR0b246Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1M2E2O1xufVxuXG4ubG9nT3V0QnV0dG9uIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDJweCA5cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMWQxZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 769:
/*!*********************************************************************************!*\
  !*** ./src/app/common/user-pages/my-account/your-pages/your-pages.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourPagesComponent": () => (/* binding */ YourPagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/profile.service */ 9042);
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ 65);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







function YourPagesComponent_table_5_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pages Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function YourPagesComponent_table_5_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-emoji", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("emoji", element_r11.icon);
  }
}
function YourPagesComponent_table_5_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pages Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function YourPagesComponent_table_5_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.title, " ");
  }
}
function YourPagesComponent_table_5_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pages ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function YourPagesComponent_table_5_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13._id, " ");
  }
}
function YourPagesComponent_table_5_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 16);
  }
}
const _c0 = function (a1) {
  return ["/workspaces/user-workspace", a1];
};
function YourPagesComponent_table_5_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 17);
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, row_r14._id));
  }
}
function YourPagesComponent_table_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, YourPagesComponent_table_5_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, YourPagesComponent_table_5_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, YourPagesComponent_table_5_th_5_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, YourPagesComponent_table_5_td_6_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, YourPagesComponent_table_5_th_8_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, YourPagesComponent_table_5_td_9_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, YourPagesComponent_table_5_tr_10_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, YourPagesComponent_table_5_tr_11_Template, 1, 3, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.PagesDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
function YourPagesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
const _c1 = function () {
  return ["/workspaces/user-workspace"];
};
class YourPagesComponent {
  constructor(_profileService) {
    this._profileService = _profileService;
    this.displayedColumns = ['pageIcon', 'pageName', 'Id'];
    this.PagesDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource();
  }
  ngOnInit() {
    this.PagesDataSource.data = this._profileService.PagesDetails;
    this._profileService.ProfilePageDetailsGet().subscribe({
      next: response => {
        this._profileService.PagesDetails = response.data.workSpaces.userWorkspace.pages;
        this.PagesDataSource.data = this._profileService.PagesDetails;
      }
    });
  }
}
YourPagesComponent.ɵfac = function YourPagesComponent_Factory(t) {
  return new (t || YourPagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService));
};
YourPagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YourPagesComponent,
  selectors: [["app-your-pages"]],
  decls: 8,
  vars: 4,
  consts: [[1, "page-title-container"], [3, "routerLink"], [1, "pages-table-container"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf", "ngIfElse"], ["elseBoard", ""], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "pageIcon"], ["class", "w-1/4 text-xs md:text-sm", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-1/4 text-xs md:text-sm", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "pageName"], ["matColumnDef", "Id"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "w-1/4", "text-xs", "md:text-sm"], ["mat-cell", "", 1, "w-1/4", "text-xs", "md:text-sm"], ["size", "32", 3, "emoji"], ["mat-header-row", ""], ["mat-row", "", 3, "routerLink"], [1, "empty-page-container"], [1, "empty-page"], [1, "fa-regular", "fa-file"]],
  template: function YourPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Go to Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, YourPagesComponent_table_5_Template, 12, 3, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, YourPagesComponent_ng_template_6_Template, 5, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.PagesDataSource.data.length > 0)("ngIfElse", _r1);
    }
  },
  dependencies: [_ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: [".pages-table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 18px 10px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\ntr[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  line-break: anywhere;\n}\n\ntr[mat-row][_ngcontent-%COMP%]:hover {\n  background-color: rgb(235, 234, 234);\n  cursor: pointer;\n}\n\n\n.empty-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 129px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 90px 0px;\n}\n\n.empty-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.empty-page[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #6e6e6e;\n}\n\n.empty-page[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Bold';\n  font-size: 30px;\n  align-self: flex-end;\n  color: #6e6e6e;\n}\n\n\ntd[_ngcontent-%COMP%]    > ngx-emoji[_ngcontent-%COMP%] {\n  display: block;\n  width: 32px;\n  height: 32px;\n}\n\n.page-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  padding: 18px 10px;\n}\n\n.page-title-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0053a6;\n  color: #fff;\n  padding: 6px 16px;\n  font-size: 17px;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXItcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InlvdXItcGFnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlcy10YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxMHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCBidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRyICoge1xuICBsaW5lLWJyZWFrOiBhbnl3aGVyZTtcbn1cblxudHJbbWF0LXJvd106aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzQsIDIzNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogZW1wdHkgcGFnZSAqL1xuLmVtcHR5LXBhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyOXB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDkwcHggMHB4O1xufVxuXG4uZW1wdHktcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5lbXB0eS1wYWdlID4gaSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICM2ZTZlNmU7XG59XG5cbi5lbXB0eS1wYWdlID4gaDMge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLUJvbGQnO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBjb2xvcjogIzZlNmU2ZTtcbn1cblxuLyogVGFibGUgKi9cbnRkID4gbmd4LWVtb2ppIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5wYWdlLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBwYWRkaW5nOiAxOHB4IDEwcHg7XG59XG5cbi5wYWdlLXRpdGxlLWNvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1M2E2O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3VzZXItcGFnZXMvbXktYWNjb3VudC95b3VyLXBhZ2VzL3lvdXItcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBLHcvRUFBdy9FIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VzLXRhYmxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudHIgKiB7XG4gIGxpbmUtYnJlYWs6IGFueXdoZXJlO1xufVxuXG50clttYXQtcm93XTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNCwgMjM0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBlbXB0eSBwYWdlICovXG4uZW1wdHktcGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTI5cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOTBweCAwcHg7XG59XG5cbi5lbXB0eS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmVtcHR5LXBhZ2UgPiBpIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogIzZlNmU2ZTtcbn1cblxuLmVtcHR5LXBhZ2UgPiBoMyB7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGNvbG9yOiAjNmU2ZTZlO1xufVxuXG4vKiBUYWJsZSAqL1xudGQgPiBuZ3gtZW1vamkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLnBhZ2UtdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHBhZGRpbmc6IDE4cHggMTBweDtcbn1cblxuLnBhZ2UtdGl0bGUtY29udGFpbmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUzYTY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8503:
/*!*************************************************************************************!*\
  !*** ./src/app/common/user-pages/my-account/your-profile/your-profile.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourProfileComponent": () => (/* binding */ YourProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/profile.service */ 9042);
/* harmony import */ var src_app_service_s3_bucket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/s3-bucket.service */ 6385);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function YourProfileComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Must Contain atleast 4 letter !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function YourProfileComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "User Name is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
class YourProfileComponent {
  constructor(_profileService, s3Service) {
    this._profileService = _profileService;
    this.s3Service = s3Service;
    this.FullNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
    this.UserNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
  }
  ngOnInit() {
    this._profileService.ProfileDataGetting().subscribe({
      next: response => {
        response.data.profilePhoto = `url(${response.data.profilePhoto})`;
        this._profileService.UserDetails = response.data;
        this.userDetails = this._profileService.UserDetails;
      }
    });
    this.UserDetailsSubscribtion = this._profileService.UserDetailsDataTransfer.subscribe(data => {
      this.userDetails = data;
    });
    // Full Name update
    this.FullNameControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(500)).subscribe(changedValue => {
      this.requiredData = false;
      this.existData = false;
      if (changedValue.length > 4) {
        this._profileService.ProfileFullNameUpdate(changedValue).subscribe({
          next: response => {
            if (response.status === 'Null data') {
              this.requiredData = true;
            } else {
              response.data.profilePhoto = `url(${response.data.profilePhoto})`;
              this._profileService.UserDetails = response.data;
              this._profileService.UserDetailsDataTransfer.emit(this._profileService.UserDetails);
            }
            document.body.style.cursor = 'auto';
          }
        });
      } else {
        this.requiredData = true;
      }
    });
    // User Name update
    this.UserNameControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(500)).subscribe(changedValue => {
      this.requiredData = false;
      this.existData = false;
      if (changedValue.length > 4) {
        this._profileService.ProfileUserNameUpdate(changedValue).subscribe({
          next: response => {
            if (response.status === 'Null data') {
              this.requiredData = true;
            } else if (response.status === 'Exist data') {
              this.existData = true;
            } else {
              response.data.profilePhoto = `url(${response.data.profilePhoto})`;
              this._profileService.UserDetails = response.data;
              this._profileService.UserDetailsDataTransfer.emit(this._profileService.UserDetails);
            }
            document.body.style.cursor = 'auto';
          }
        });
      } else {
        this.requiredData = true;
      }
    });
  }
  uploadCover(event) {
    const file = event.target.files[0];
    if (file) {
      document.body.style.cursor = 'wait';
      // get a seccure url from a server
      this.s3Service.updateProfileImg().subscribe({
        next: response => {
          const url = response.data;
          // post the image directly to the s3 bucket
          this.s3Service.uploadpageCoverImg(url, file).then(data => {
            const imageUrl = data.url.split('?')[0];
            // post req to server to save any data
            this._profileService.ProfileImagePatch(imageUrl).subscribe({
              next: response => {
                response.data.profilePhoto = `url(${response.data.profilePhoto})`;
                this._profileService.UserDetails = response.data;
                this._profileService.UserDetailsDataTransfer.emit(this._profileService.UserDetails);
                document.body.style.cursor = 'auto';
              }
            });
          });
        }
      });
    }
  }
  // Full Name update
  fullNameUpdate(event) {}
  ngOnDestroy() {
    this.UserDetailsSubscribtion.unsubscribe();
  }
}
YourProfileComponent.ɵfac = function YourProfileComponent_Factory(t) {
  return new (t || YourProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_s3_bucket_service__WEBPACK_IMPORTED_MODULE_1__.S3BucketService));
};
YourProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: YourProfileComponent,
  selectors: [["app-your-profile"]],
  decls: 19,
  vars: 9,
  consts: [[1, "profile-image-section"], [1, "w-20", "md:w-22", "lg:w-28", "h-20", "md:h-22", "lg:h-28", 3, "ngStyle"], ["action", ""], ["id", "files", "type", "file", "accept", "image/*", 3, "input"], ["for", "files"], [1, "profile-info-section", "w-2/2", "sm:w-1/2"], ["class", "mt-2", 4, "ngIf"], [1, "flex", "flex-col", "justify-start", "mt-3", "gap-y-5", "profile-info"], [1, "w-full", "flex", "flex-col", "lg:flex-row", "justify-between", "gap-2"], ["type", "text", "placeholder", "Enter your name", 1, "lg:w-2/3", 3, "formControl", "value", "input"], ["type", "text", "placeholder", "Enter your username", 1, "lg:w-2/3", 3, "formControl", "value"], [1, "mt-2"]],
  template: function YourProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2)(4, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function YourProfileComponent_Template_input_input_4_listener($event) {
        return ctx.uploadCover($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, YourProfileComponent_span_8_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, YourProfileComponent_span_9_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 7)(11, "div", 8)(12, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Full name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function YourProfileComponent_Template_input_input_14_listener($event) {
        return ctx.fullNameUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "User name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.userDetails == null ? null : ctx.userDetails.profilePhoto));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.requiredData);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.existData);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.userDetails == null ? null : ctx.userDetails.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.FullNameControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.userDetails == null ? null : ctx.userDetails.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.UserNameControl);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle],
  styles: [".profile-image-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  padding: 36px 8px;\n  gap: 20px;\n  align-items: flex-end;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 70px;\n  border: solid 1px #e7e7e7;\n  background-size: 100% auto;\n  background-position: center;\n  background-color: #cdcdcd;\n  background-repeat: no-repeat;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  font-size: 16px;\n  background-color: #9f9e9e;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #c5c4c4;\n}\n\n\n.profile-info-section[_ngcontent-%COMP%] {\n  padding: 36px 14px;\n}\n\n.profile-info-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.profile-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.profile-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border: solid 1px #ffffff;\n  border-radius: 4px;\n  padding: 5px 6px;\n  font-size: 18px;\n  color: #747474;\n  overflow: hidden;\n  box-shadow: 1px 1px 2px rgb(0 0 0 / 25%);\n}\n\n.profile-info[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n.profile-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: #e9e9e9;\n  color: #585858;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJmaWxlIjoieW91ci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWFnZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAzNnB4IDhweDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5wcm9maWxlLWltYWdlLXNlY3Rpb24gZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2U3ZTdlNztcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkY2RjZDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Utc2VjdGlvbiBsYWJlbCB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZjllOWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2ZpbGUtaW1hZ2Utc2VjdGlvbiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9maWxlLWltYWdlLXNlY3Rpb24gbGFiZWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM0YzQ7XG59XG5cbi8qIHByb2ZpbGUgc2VjdGlvbiAqL1xuLnByb2ZpbGUtaW5mby1zZWN0aW9uIHtcbiAgcGFkZGluZzogMzZweCAxNHB4O1xufVxuXG4ucHJvZmlsZS1pbmZvLXNlY3Rpb24gc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wcm9maWxlLWluZm8gbGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWluZm8gaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweCA2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM3NDc0NzQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYigwIDAgMCAvIDI1JSk7XG59XG5cbi5wcm9maWxlLWluZm8gaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnByb2ZpbGUtaW5mbyBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIGNvbG9yOiAjNTg1ODU4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3VzZXItcGFnZXMvbXktYWNjb3VudC95b3VyLXByb2ZpbGUveW91ci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQSw0cEZBQTRwRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltYWdlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDM2cHggOHB4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Utc2VjdGlvbiBkaXYge1xuICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTdlN2U3O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjZGNkO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucHJvZmlsZS1pbWFnZS1zZWN0aW9uIGxhYmVsIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmOWU5ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZmlsZS1pbWFnZS1zZWN0aW9uIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2ZpbGUtaW1hZ2Utc2VjdGlvbiBsYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzRjNDtcbn1cblxuLyogcHJvZmlsZSBzZWN0aW9uICovXG4ucHJvZmlsZS1pbmZvLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAzNnB4IDE0cHg7XG59XG5cbi5wcm9maWxlLWluZm8tc2VjdGlvbiBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnByb2ZpbGUtaW5mbyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtaW5mbyBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4IDZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzc0NzQ3NDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDAgMCAwIC8gMjUlKTtcbn1cblxuLnByb2ZpbGUtaW5mbyBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ucHJvZmlsZS1pbmZvIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgY29sb3I6ICM1ODU4NTg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 762:
/*!***************************************************************************************!*\
  !*** ./src/app/common/user-pages/my-account/your-projects/your-projects.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourProjectsComponent": () => (/* binding */ YourProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/profile.service */ 9042);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






function YourProjectsComponent_table_5_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function YourProjectsComponent_table_5_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r11.boardName);
  }
}
function YourProjectsComponent_table_5_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Projet Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function YourProjectsComponent_table_5_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.projectType, " ");
  }
}
function YourProjectsComponent_table_5_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function YourProjectsComponent_table_5_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13._id, " ");
  }
}
function YourProjectsComponent_table_5_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 15);
  }
}
const _c0 = function (a1) {
  return ["/workspaces/project-workspace/boards", a1];
};
function YourProjectsComponent_table_5_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 16);
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, row_r14._id));
  }
}
function YourProjectsComponent_table_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, YourProjectsComponent_table_5_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, YourProjectsComponent_table_5_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, YourProjectsComponent_table_5_th_5_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, YourProjectsComponent_table_5_td_6_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, YourProjectsComponent_table_5_th_8_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, YourProjectsComponent_table_5_td_9_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, YourProjectsComponent_table_5_tr_10_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, YourProjectsComponent_table_5_tr_11_Template, 1, 3, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.ProjectDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
function YourProjectsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
const _c1 = function () {
  return ["/workspaces/project-workspace"];
};
class YourProjectsComponent {
  constructor(_profileService) {
    this._profileService = _profileService;
    this.displayedColumns = ['boardName', 'projectType', 'Id'];
    this.ProjectDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource();
  }
  ngOnInit() {
    this.ProjectDataSource.data = this._profileService.PagesDetails;
    this._profileService.ProfileProjectDetailsGet().subscribe({
      next: response => {
        this._profileService.ProjectDetails = response.data.workSpaces.projectWorkspace.boards;
        this.ProjectDataSource.data = this._profileService.ProjectDetails;
      }
    });
  }
}
YourProjectsComponent.ɵfac = function YourProjectsComponent_Factory(t) {
  return new (t || YourProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService));
};
YourProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YourProjectsComponent,
  selectors: [["app-your-projects"]],
  decls: 8,
  vars: 4,
  consts: [[1, "page-title-container"], [3, "routerLink"], [1, "pages-table-container"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf", "ngIfElse"], ["elseBoard", ""], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "boardName"], ["class", "w-1/4 text-xs md:text-sm", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-1/4 text-xs md:text-sm", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "projectType"], ["matColumnDef", "Id"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "w-1/4", "text-xs", "md:text-sm"], ["mat-cell", "", 1, "w-1/4", "text-xs", "md:text-sm"], ["mat-header-row", ""], ["mat-row", "", 3, "routerLink"], [1, "empty-page-container"], [1, "empty-page"], [1, "fa-regular", "fa-file"]],
  template: function YourProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Project Space");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, YourProjectsComponent_table_5_Template, 12, 3, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, YourProjectsComponent_ng_template_6_Template, 5, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ProjectDataSource.data.length > 0)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: [".pages-table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 18px 10px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\ntr[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  line-break: anywhere;\n}\n\ntr[mat-row][_ngcontent-%COMP%]:hover {\n  background-color: rgb(235, 234, 234);\n  cursor: pointer;\n}\n\n\n.empty-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 129px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 90px 0px;\n}\n\n.empty-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.empty-page[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #6e6e6e;\n}\n\n.empty-page[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Bold';\n  font-size: 30px;\n  align-self: flex-end;\n  color: #6e6e6e;\n}\n\n\ntd[_ngcontent-%COMP%]    > ngx-emoji[_ngcontent-%COMP%] {\n  display: block;\n  width: 32px;\n  height: 32px;\n}\n\n.page-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  padding: 18px 10px;\n}\n\n.page-title-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0053a6;\n  color: #fff;\n  padding: 6px 16px;\n  font-size: 17px;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXItcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InlvdXItcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlcy10YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxMHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCBidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRyICoge1xuICBsaW5lLWJyZWFrOiBhbnl3aGVyZTtcbn1cblxudHJbbWF0LXJvd106aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzQsIDIzNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogZW1wdHkgcGFnZSAqL1xuLmVtcHR5LXBhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyOXB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDkwcHggMHB4O1xufVxuXG4uZW1wdHktcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5lbXB0eS1wYWdlID4gaSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICM2ZTZlNmU7XG59XG5cbi5lbXB0eS1wYWdlID4gaDMge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLUJvbGQnO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBjb2xvcjogIzZlNmU2ZTtcbn1cblxuLyogVGFibGUgKi9cbnRkID4gbmd4LWVtb2ppIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5wYWdlLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBwYWRkaW5nOiAxOHB4IDEwcHg7XG59XG5cbi5wYWdlLXRpdGxlLWNvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1M2E2O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3VzZXItcGFnZXMvbXktYWNjb3VudC95b3VyLXByb2plY3RzL3lvdXItcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBLGdnRkFBZ2dGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VzLXRhYmxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudHIgKiB7XG4gIGxpbmUtYnJlYWs6IGFueXdoZXJlO1xufVxuXG50clttYXQtcm93XTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNCwgMjM0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBlbXB0eSBwYWdlICovXG4uZW1wdHktcGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTI5cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOTBweCAwcHg7XG59XG5cbi5lbXB0eS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmVtcHR5LXBhZ2UgPiBpIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogIzZlNmU2ZTtcbn1cblxuLmVtcHR5LXBhZ2UgPiBoMyB7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGNvbG9yOiAjNmU2ZTZlO1xufVxuXG4vKiBUYWJsZSAqL1xudGQgPiBuZ3gtZW1vamkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLnBhZ2UtdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHBhZGRpbmc6IDE4cHggMTBweDtcbn1cblxuLnBhZ2UtdGl0bGUtY29udGFpbmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUzYTY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9042:
/*!********************************************!*\
  !*** ./src/app/service/profile.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment.dev */ 1494);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class ProfileService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.LogoutDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.UserDetailsDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ProfileDataGetting() {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/profile`);
  }
  ProfileImagePatch(url) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/profile/image`, {
      url
    });
  }
  ProfileFullNameUpdate(value) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/profile/name`, {
      value
    });
  }
  ProfileUserNameUpdate(value) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/profile/username`, {
      value
    });
  }
  // Pages details in Profile Pages
  ProfilePageDetailsGet() {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/profile/pages`);
  }
  // Project details in Profile Pages
  ProfileProjectDetailsGet() {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/profile/project`);
  }
  logout() {
    this.router.navigate(['/']);
    localStorage.clear();
  }
}
ProfileService.ɵfac = function ProfileService_Factory(t) {
  return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
ProfileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProfileService,
  factory: ProfileService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=src_app_common_user-page_module_ts.js.map