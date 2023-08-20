"use strict";
(self["webpackChunkNoteHub"] = self["webpackChunkNoteHub"] || []).push([["main"],{

/***/ 4344:
/*!**********************************************************!*\
  !*** ./src/app/Intercepter/error-interceptor.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorCatchingInterceptor": () => (/* binding */ ErrorCatchingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class ErrorCatchingInterceptor {
  constructor(router) {
    this.router = router;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)({
      error: err => {
        console.log(err);
        if (err.error.status === 'CastError') {
          this.router.navigate(['**']);
        } else if (err.error.status === 'resCatchError') {
          localStorage.clear();
          this.router.navigate(['/auth/signin']);
        }
      }
    }));
  }
}
ErrorCatchingInterceptor.ɵfac = function ErrorCatchingInterceptor_Factory(t) {
  return new (t || ErrorCatchingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ErrorCatchingInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ErrorCatchingInterceptor,
  factory: ErrorCatchingInterceptor.ɵfac
});

/***/ }),

/***/ 160:
/*!**********************************************************!*\
  !*** ./src/app/Intercepter/token-intercepter.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenIntercepterService": () => (/* binding */ TokenIntercepterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/authentication.service */ 7217);


class TokenIntercepterService {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    const token = this.authService.isAuthenticated();
    const newRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });
    return next.handle(newRequest);
  }
}
TokenIntercepterService.ɵfac = function TokenIntercepterService_Factory(t) {
  return new (t || TokenIntercepterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
};
TokenIntercepterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TokenIntercepterService,
  factory: TokenIntercepterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.color = 'primary';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 1075);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _guards_verifyEmail_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/verifyEmail.guard */ 7603);
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/authentication.guard */ 6924);
/* harmony import */ var _Intercepter_token_intercepter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Intercepter/token-intercepter.service */ 160);
/* harmony import */ var _guards_userAutherization_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/userAutherization.guard */ 7086);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _common_user_pages_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/user-pages/header/header.component */ 1119);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _common_user_pages_user_pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/user-pages/user-pages.component */ 2685);
/* harmony import */ var _main_workspaces_project_workspace_project_workspace_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-workspaces/project-workspace/project-workspace.component */ 2311);
/* harmony import */ var _main_workspaces_project_workspace_left_pro_workspace_nav_left_pro_workspace_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-workspaces/project-workspace/left-pro-workspace-nav/left-pro-workspace-nav.component */ 9249);
/* harmony import */ var _main_workspaces_main_workspaces_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-workspaces/main-workspaces.component */ 135);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ 980);
/* harmony import */ var _guards_userAccessProject_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/userAccessProject.guard */ 8702);
/* harmony import */ var _main_workspaces_user_workspace_user_workspace_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-workspaces/user-workspace/user-workspace.component */ 6367);
/* harmony import */ var _main_workspaces_user_workspace_workspace_left_nav_workspace_left_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main-workspaces/user-workspace/workspace-left-nav/workspace-left-nav.component */ 8357);
/* harmony import */ var _guards_userAccessPage_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/userAccessPage.guard */ 8619);
/* harmony import */ var _Intercepter_error_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Intercepter/error-interceptor.service */ 4344);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./error-page/error-page.component */ 7446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);
























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS,
    useClass: _Intercepter_token_intercepter_service__WEBPACK_IMPORTED_MODULE_4__.TokenIntercepterService,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS,
    useClass: _Intercepter_error_interceptor_service__WEBPACK_IMPORTED_MODULE_18__.ErrorCatchingInterceptor,
    multi: true
  }, _guards_verifyEmail_guard__WEBPACK_IMPORTED_MODULE_2__.VerifyEmailGuard, _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__.AuthenticationGuard, _guards_userAutherization_guard__WEBPACK_IMPORTED_MODULE_5__.UserAutherizationGuard, _guards_userAccessProject_guard__WEBPACK_IMPORTED_MODULE_14__.userAccessProjectGuard, _guards_userAccessPage_guard__WEBPACK_IMPORTED_MODULE_17__.userAccessPageGuard],
  imports: [_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent, _common_user_pages_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent, _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__.AuthComponent, _main_workspaces_user_workspace_workspace_left_nav_workspace_left_nav_component__WEBPACK_IMPORTED_MODULE_16__.WorkspaceLeftNavComponent, _common_user_pages_user_pages_component__WEBPACK_IMPORTED_MODULE_9__.UserPagesComponent, _main_workspaces_main_workspaces_component__WEBPACK_IMPORTED_MODULE_12__.MainWorkspacesComponent, _main_workspaces_project_workspace_project_workspace_component__WEBPACK_IMPORTED_MODULE_10__.ProjectWorkspaceComponent, _main_workspaces_user_workspace_user_workspace_component__WEBPACK_IMPORTED_MODULE_15__.UserWorkspaceComponent, _main_workspaces_project_workspace_left_pro_workspace_nav_left_pro_workspace_nav_component__WEBPACK_IMPORTED_MODULE_11__.LeftProWorkspaceNavComponent, _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_19__.ErrorPageComponent],
    imports: [_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _guards_userAutherization_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/userAutherization.guard */ 7086);
/* harmony import */ var _common_user_pages_user_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/user-pages/user-pages.component */ 2685);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ 980);
/* harmony import */ var _main_workspaces_project_workspace_project_workspace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-workspaces/project-workspace/project-workspace.component */ 2311);
/* harmony import */ var _main_workspaces_main_workspaces_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-workspaces/main-workspaces.component */ 135);
/* harmony import */ var _main_workspaces_user_workspace_user_workspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-workspaces/user-workspace/user-workspace.component */ 6367);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-page/error-page.component */ 7446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const appRoutes = [
// user pages
{
  path: '',
  children: [{
    path: '',
    component: _common_user_pages_user_pages_component__WEBPACK_IMPORTED_MODULE_1__.UserPagesComponent,
    // Common module
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_common_user-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./common/user-page.module */ 6838)).then(m => m.default)
  },
  // User Workspace Component
  {
    path: 'workspaces',
    canActivate: [_guards_userAutherization_guard__WEBPACK_IMPORTED_MODULE_0__.UserAutherizationGuard],
    component: _main_workspaces_main_workspaces_component__WEBPACK_IMPORTED_MODULE_4__.MainWorkspacesComponent,
    children: [{
      path: 'user-workspace',
      component: _main_workspaces_user_workspace_user_workspace_component__WEBPACK_IMPORTED_MODULE_5__.UserWorkspaceComponent,
      // user Workspace Module,
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main-workspaces_user-workspace_user-workspace_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main-workspaces/user-workspace/user-workspace.module */ 6269)).then(m => m.default)
    }, {
      path: 'project-workspace',
      component: _main_workspaces_project_workspace_project_workspace_component__WEBPACK_IMPORTED_MODULE_3__.ProjectWorkspaceComponent,
      // Project Workspace Module
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main-workspaces_project-workspace_project-workspace_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main-workspaces/project-workspace/project-workspace.module */ 7997)).then(m => m.default)
    }]
  },
  // User authentication
  {
    path: 'auth',
    component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent,
    // Auth Module
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.default)
  }]
}, {
  path: 'not-found',
  component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__.ErrorPageComponent
}, {
  path: '**',
  redirectTo: '/not-found'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(appRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/authentication.service */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 970);




class AuthComponent {}
AuthComponent.ɵfac = function AuthComponent_Factory(t) {
  return new (t || AuthComponent)();
};
AuthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AuthComponent,
  selectors: [["app-auth"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService])],
  decls: 2,
  vars: 0,
  template: function AuthComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet")(1, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1119:
/*!**************************************************************!*\
  !*** ./src/app/common/user-pages/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/authentication.service */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = function () {
  return ["/auth/signup"];
};
function HeaderComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Get Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
const _c1 = function () {
  return ["/profile"];
};
function HeaderComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " My Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
  }
}
const _c2 = function (a0, a1, a2, a3) {
  return {
    "top-[80]": a0,
    "opacity-100": a1,
    "hidden": a2,
    "absolute": a3
  };
};
const _c3 = function () {
  return ["/"];
};
const _c4 = function (a0) {
  return {
    currentRoute: a0
  };
};
const _c5 = function () {
  return ["/workspaces/user-workspace"];
};
const _c6 = function () {
  return ["/workspaces/project-workspace"];
};
class HeaderComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.status = 'close';
  }
  ngOnInit() {
    this.userLoggedIn = this.authService.isAuthenticated() ? true : false;
    const url = this.router.url.split('/');
    this.changeRouterColor(url);
    // currentRoute setting
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        this.userLoggedIn = this.authService.isAuthenticated() ? true : false;
        const route = event.url.split('/');
        this.changeRouterColor(route);
      }
    });
  }
  changeRouterColor(route) {
    this.currentRoute = '';
    this.status = 'close';
    if (route[1] === '') this.currentRoute = 'home';else if (route[1] === 'support') this.currentRoute = 'support';else if (route[1] === 'workspaces') {
      if (route[2] === 'user-workspace') this.currentRoute = 'noteWorkspace';
      if (route[2] === 'project-workspace') this.currentRoute = 'projectWorkspace';
    }
  }
  ngOnChanges(changes) {}
  menuBar() {
    this.status = this.status === 'close' ? 'open' : 'close';
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 19,
  vars: 23,
  consts: [[1, "bg-blue", "w-full", "p-2", "md:flex", "md:items-center", "md:justify-between"], [1, "flex", "justify-between", "items-center"], ["src", "https://notehub0.s3.ap-south-1.amazonaws.com/icons/iconText.png", 1, "h-9", "sm:h-9", "lg:h-10", "xl:h-12"], [1, "text-2xl", "md:hidden", "block", "text-white", "mx-3"], [1, "fa-solid", "fa-bars", 3, "click"], ["toggleMenu", ""], [1, "md:flex", "md:items-center", "z-[10]", "md:z-[0]", "md:static", "bg-blue", "w-full", "left-0", "md:w-auto", "md:py-0", "py-5", "md:pl-0", "pl-4", "md:opacity-100", "top-[-400]", 3, "ngClass"], [3, "routerLink", "ngClass"], [1, "text-white"], ["class", "bg-white text-black rounded px-6 py-2 mx-4", 3, "routerLink", 4, "ngIf"], ["class", "bg-primary text-white rounded px-6 py-2 mx-4", 3, "routerLink", 4, "ngIf"], [1, "bg-white", "text-black", "rounded", "px-6", "py-2", "mx-4", 3, "routerLink"], [1, "bg-primary", "text-white", "rounded", "px-6", "py-2", "mx-4", 3, "routerLink"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3)(5, "i", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_5_listener() {
        return ctx.menuBar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "HOME");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7)(12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "NOTE SPACE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7)(15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "PROJECT SPACE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HeaderComponent_button_17_Template, 2, 2, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HeaderComponent_button_18_Template, 2, 2, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](9, _c2, ctx.status === "open", ctx.status === "open", ctx.status === "close", ctx.status === "open"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c3))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c4, ctx.currentRoute === "home"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c5))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c4, ctx.currentRoute === "noteWorkspace"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c6))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c4, ctx.currentRoute === "projectWorkspace"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userLoggedIn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["a[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-family: JosefinSans-Regular;\n  font-size: 0.9em;\n}\n\nnav[_ngcontent-%COMP%] {\n  z-index: 100;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nli[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 253, 253, 0.116);\n  border-radius: 14px;\n  cursor: pointer;\n}\n\nli[_ngcontent-%COMP%] {\n  border-left: solid 3px transparent;\n  padding: 12px 18px;\n}\n\n.currentRoute[_ngcontent-%COMP%] {\n  border-left: solid 3px #0053a6;\n  border-radius: 14px;\n}\n\nbutton[_ngcontent-%COMP%]:nth-last-child(1) {\n  transition: 0.3s;\n}\n\nbutton[_ngcontent-%COMP%]:nth-last-child(1):hover {\n  background-color: #fff;\n  color: #262626;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEsXG5idXR0b24ge1xuICBmb250LWZhbWlseTogSm9zZWZpblNhbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxubmF2IHtcbiAgei1pbmRleDogMTAwO1xufVxuXG5pOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTMsIDI1MywgMC4xMTYpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTJweCAxOHB4O1xufVxuXG4uY3VycmVudFJvdXRlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCAjMDA1M2E2O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG5idXR0b246bnRoLWxhc3QtY2hpbGQoMSkge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG5idXR0b246bnRoLWxhc3QtY2hpbGQoMSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzI2MjYyNjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3VzZXItcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQSw0d0NBQTR3QyIsInNvdXJjZXNDb250ZW50IjpbImEsXG5idXR0b24ge1xuICBmb250LWZhbWlseTogSm9zZWZpblNhbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxubmF2IHtcbiAgei1pbmRleDogMTAwO1xufVxuXG5pOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTMsIDI1MywgMC4xMTYpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTJweCAxOHB4O1xufVxuXG4uY3VycmVudFJvdXRlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCAjMDA1M2E2O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG5idXR0b246bnRoLWxhc3QtY2hpbGQoMSkge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG5idXR0b246bnRoLWxhc3QtY2hpbGQoMSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzI2MjYyNjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2685:
/*!***********************************************************!*\
  !*** ./src/app/common/user-pages/user-pages.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPagesComponent": () => (/* binding */ UserPagesComponent)
/* harmony export */ });
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/authentication.service */ 7217);
/* harmony import */ var src_app_service_s3_bucket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/s3-bucket.service */ 6385);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 1119);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../footer/footer.component */ 970);







class UserPagesComponent {}
UserPagesComponent.ɵfac = function UserPagesComponent_Factory(t) {
  return new (t || UserPagesComponent)();
};
UserPagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UserPagesComponent,
  selectors: [["app-user-pages"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService, src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService, src_app_service_s3_bucket_service__WEBPACK_IMPORTED_MODULE_1__.S3BucketService])],
  decls: 3,
  vars: 0,
  template: function UserPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBhZ2VzLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3VzZXItcGFnZXMvdXNlci1wYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1494:
/*!*************************************************!*\
  !*** ./src/app/environments/environment.dev.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  baseUrl: 'http://localhost:8000/api'
};

/***/ }),

/***/ 7446:
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": () => (/* binding */ ErrorPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () {
  return ["/"];
};
class ErrorPageComponent {}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) {
  return new (t || ErrorPageComponent)();
};
ErrorPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ErrorPageComponent,
  selectors: [["app-error-page"]],
  decls: 8,
  vars: 2,
  consts: [[1, "h-screen", "w-full", "flex", "flex-col", "justify-center", "items-center", "bg-blue"], [1, "text-9xl", "font-extrabold", "text-white", "tracking-widest"], [1, "bg-primary", "px-2", "text-sm", "rounded", "rotate-12", "absolute", "text-white"], [1, "mt-5"], [3, "routerLink"]],
  template: function ErrorPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Page Not Found ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go to home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["button[_ngcontent-%COMP%] {\n  padding: 8px 22px;\n  color: #fff;\n  background-color: #0053a6;\n  border-radius: 12px;\n  font-weight: 700;\n  transition: 0.3s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #262626;\n}\n\nmain[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImVycm9yLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAyMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTNhNjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMyNjI2MjY7XG59XG5cbm1haW4ge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFHQSxvd0JBQW93QiIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAyMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTNhNjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMyNjI2MjY7XG59XG5cbm1haW4ge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 4,
  vars: 0,
  consts: [[1, "bg-blue", "py-5", "overflow-hidden", "text-sm", "flex", "justify-center", "align-items-center"], ["src", "https://notehub0.s3.ap-south-1.amazonaws.com/icons/iconWhite.png", "alt", "", 1, "w-5", "mr-2"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 2022 NoteHub, Inc. All rights reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["footer[_ngcontent-%COMP%] {\n  font-family: JosefinSans-Regular;\n  z-index: -2;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBKb3NlZmluU2Fucy1SZWd1bGFyO1xuICB6LWluZGV4OiAtMjtcbn1cblxuaDEge1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxnYUFBZ2EiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBmb250LWZhbWlseTogSm9zZWZpblNhbnMtUmVndWxhcjtcbiAgei1pbmRleDogLTI7XG59XG5cbmgxIHtcbiAgY29sb3I6ICNmZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6924:
/*!************************************************!*\
  !*** ./src/app/guards/authentication.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationGuard": () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/authentication.service */ 7217);



class AuthenticationGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate() {
    if (!this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) {
  return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
};
AuthenticationGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthenticationGuard,
  factory: AuthenticationGuard.ɵfac
});

/***/ }),

/***/ 8619:
/*!************************************************!*\
  !*** ./src/app/guards/userAccessPage.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAccessPageGuard": () => (/* binding */ userAccessPageGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _service_userWorkspace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/userWorkspace.service */ 8158);




class userAccessPageGuard {
  constructor(router, _pageWorkspace) {
    this.router = router;
    this._pageWorkspace = _pageWorkspace;
  }
  canActivate(route) {
    const pageId = route.params?.['id'];
    return this._pageWorkspace.isCanAccessPage(pageId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(status => {
      if (status.data) {
        return true;
      } else {
        this.router.navigate(['/workspaces/user-workspace']);
        return false;
      }
    }));
  }
}
userAccessPageGuard.ɵfac = function userAccessPageGuard_Factory(t) {
  return new (t || userAccessPageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_userWorkspace_service__WEBPACK_IMPORTED_MODULE_0__.UserWorkspaceService));
};
userAccessPageGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: userAccessPageGuard,
  factory: userAccessPageGuard.ɵfac
});

/***/ }),

/***/ 8702:
/*!***************************************************!*\
  !*** ./src/app/guards/userAccessProject.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAccessProjectGuard": () => (/* binding */ userAccessProjectGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/projectWorkspace.service */ 3751);




class userAccessProjectGuard {
  constructor(router, _projectWorkspace) {
    this.router = router;
    this._projectWorkspace = _projectWorkspace;
  }
  canActivate(route) {
    const projectId = route.params?.['id'];
    return this._projectWorkspace.isCanAccessProject(projectId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(status => {
      if (status.data) {
        return true;
      } else {
        this.router.navigate(['/workspaces/project-workspace']);
        return false;
      }
    }));
  }
}
userAccessProjectGuard.ɵfac = function userAccessProjectGuard_Factory(t) {
  return new (t || userAccessProjectGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__.ProjectWorkspaceService));
};
userAccessProjectGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: userAccessProjectGuard,
  factory: userAccessProjectGuard.ɵfac
});

/***/ }),

/***/ 7086:
/*!***************************************************!*\
  !*** ./src/app/guards/userAutherization.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAutherizationGuard": () => (/* binding */ UserAutherizationGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/authentication.service */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class UserAutherizationGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/auth/signin']);
      return false;
    } else {
      return true;
    }
  }
}
UserAutherizationGuard.ɵfac = function UserAutherizationGuard_Factory(t) {
  return new (t || UserAutherizationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
UserAutherizationGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserAutherizationGuard,
  factory: UserAutherizationGuard.ɵfac
});

/***/ }),

/***/ 7603:
/*!*********************************************!*\
  !*** ./src/app/guards/verifyEmail.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailGuard": () => (/* binding */ VerifyEmailGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/authentication.service */ 7217);



class VerifyEmailGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate() {
    if (!this.authService.isVerify()) {
      this.router.navigate(['auth/signup']);
      return false;
    } else {
      return true;
    }
  }
}
VerifyEmailGuard.ɵfac = function VerifyEmailGuard_Factory(t) {
  return new (t || VerifyEmailGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
};
VerifyEmailGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: VerifyEmailGuard,
  factory: VerifyEmailGuard.ɵfac
});

/***/ }),

/***/ 135:
/*!**************************************************************!*\
  !*** ./src/app/main-workspaces/main-workspaces.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainWorkspacesComponent": () => (/* binding */ MainWorkspacesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_user_pages_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/user-pages/header/header.component */ 1119);



class MainWorkspacesComponent {}
MainWorkspacesComponent.ɵfac = function MainWorkspacesComponent_Factory(t) {
  return new (t || MainWorkspacesComponent)();
};
MainWorkspacesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MainWorkspacesComponent,
  selectors: [["app-main-workspaces"]],
  decls: 2,
  vars: 0,
  template: function MainWorkspacesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _common_user_pages_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXdvcmtzcGFjZXMuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi13b3Jrc3BhY2VzL21haW4td29ya3NwYWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9249:
/*!**************************************************************************************************************!*\
  !*** ./src/app/main-workspaces/project-workspace/left-pro-workspace-nav/left-pro-workspace-nav.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftProWorkspaceNavComponent": () => (/* binding */ LeftProWorkspaceNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/projectWorkspace.service */ 3751);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function LeftProWorkspaceNavComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails.workSpaces.projectWorkspace.name);
  }
}
const _c0 = function (a0) {
  return {
    "color": a0
  };
};
const _c1 = function (a1) {
  return ["/workspaces/project-workspace/boards", a1];
};
const _c2 = function (a1) {
  return ["/workspaces/project-workspace/boards", a1, "contributors"];
};
function LeftProWorkspaceNavComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Contributors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r1.projectRouteColor === "boards" ? "#2f7fcf" : "#222"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx_r1.projectId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx_r1.projectRouteColor === "contributors" ? "#2f7fcf" : "#222"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c2, ctx_r1.projectId));
  }
}
const _c3 = function () {
  return ["/workspaces/project-workspace"];
};
class LeftProWorkspaceNavComponent {
  constructor(_projectService, router) {
    this._projectService = _projectService;
    this.router = router;
  }
  ngOnInit() {
    this.detailSubscribtion = this._projectService.DetailsDataTransfer.subscribe(data => {
      this.userDetails = this._projectService.userDetails;
      this.boardDetails = this._projectService.boardsDetails;
    });
    const url = this.router.url.split('/');
    this.routerColor(url);
    if (url.length >= 5) {
      this.projectId = url[4];
    }
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        const url = event.url.split('/');
        this.routerColor(url);
        if (url.length >= 5) {
          this.projectId = url[4];
        }
      }
    });
  }
  routerColor(url) {
    this.projectRouteColor = '';
    if (url[url.length - 1] === 'contributors') this.projectRouteColor = 'contributors';else if (url[url.length - 2] === 'boards') this.projectRouteColor = 'boards';
  }
  // Board Settings
  boardSettings() {
    this._projectService.ProjectSettingsDataTransfer.emit(true);
  }
  ngOnDestroy() {
    this.detailSubscribtion.unsubscribe();
  }
}
LeftProWorkspaceNavComponent.ɵfac = function LeftProWorkspaceNavComponent_Factory(t) {
  return new (t || LeftProWorkspaceNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__.ProjectWorkspaceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
LeftProWorkspaceNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LeftProWorkspaceNavComponent,
  selectors: [["app-left-pro-workspace-nav"]],
  decls: 14,
  vars: 4,
  consts: [[1, "workspace", "w-full", "flex", "justify-start", "gap-2"], ["class", "workspace-name", 4, "ngIf"], [1, "mt-3", "workspace-settings"], [1, "workspace-settings-tool", 3, "click"], [1, "fa-solid", "fa-gear"], [1, "workspace-settings"], [1, "workspace-settings-tool", 3, "routerLink"], [1, "fa-solid", "fa-clone"], [4, "ngIf"], [1, "workspace-name"], [1, "workspace-board-container"], [1, "workspace-board-bar", 3, "ngStyle", "routerLink"], [1, "fa-solid", "fa-table-columns"], [1, "fa-solid", "fa-users"]],
  template: function LeftProWorkspaceNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftProWorkspaceNavComponent_p_2_Template, 2, 1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftProWorkspaceNavComponent_Template_div_click_4_listener() {
        return ctx.boardSettings();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Boards");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LeftProWorkspaceNavComponent_div_13_Template, 11, 12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.projectId);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["section[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n\nhr[_ngcontent-%COMP%] {\n  color: #616161;\n  margin: 8px 0;\n}\n\n.workspace[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 8px;\n  align-items: center;\n  cursor: default;\n}\n\n.workspace-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 100%;\n  overflow: hidden;\n  padding-left: 5px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: start;\n}\n\n.workspace-settings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  column-gap: 0.5rem;\n}\n\n.workspace-settings-tool[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 6px 8px;\n  gap: 0.8rem;\n}\n\n.workspace-settings-tool[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.068);\n}\n\n.workspace-settings-tool[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n}\n\n.workspace-board-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px;\n  background-color: #ffffff;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 2px;\n}\n\n.workspace-board-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 6px;\n  margin: 1px 0px;\n}\n\n.workspace-board-bar[_ngcontent-%COMP%]:hover {\n  background-color: #e1e0e0;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.workspace-board-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.workspace-board-bar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 17px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtcHJvLXdvcmtzcGFjZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRyIsImZpbGUiOiJsZWZ0LXByby13b3Jrc3BhY2UtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgcGFkZGluZzogNnB4O1xufVxuXG5ociB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4ud29ya3NwYWNlIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLndvcmtzcGFjZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLndvcmtzcGFjZS1zZXR0aW5ncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcbn1cblxuLndvcmtzcGFjZS1zZXR0aW5ncy10b29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgZ2FwOiAwLjhyZW07XG59XG5cbi53b3Jrc3BhY2Utc2V0dGluZ3MtdG9vbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDY4KTtcbn1cblxuLndvcmtzcGFjZS1zZXR0aW5ncy10b29sID4gKiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi53b3Jrc3BhY2UtYm9hcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAycHg7XG59XG5cbi53b3Jrc3BhY2UtYm9hcmQtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW46IDFweCAwcHg7XG59XG5cbi53b3Jrc3BhY2UtYm9hcmQtYmFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53b3Jrc3BhY2UtYm9hcmQtYmFyIGkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi53b3Jrc3BhY2UtYm9hcmQtYmFyIGg1IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogXG4ud29ya3NwYWNlLXBhZ2VzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzcHggMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud29ya3NwYWNlLXBhZ2VzLWJhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUwZTA7XG4gIHBhZGRpbmc6IDNweCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud29ya3NwYWNlLXBhZ2VzLW5hbWUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufSAqL1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi13b3Jrc3BhY2VzL3Byb2plY3Qtd29ya3NwYWNlL2xlZnQtcHJvLXdvcmtzcGFjZS1uYXYvbGVmdC1wcm8td29ya3NwYWNlLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHOztBQUVILG9ySEFBb3JIIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuaHIge1xuICBjb2xvcjogIzYxNjE2MTtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLndvcmtzcGFjZSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi53b3Jrc3BhY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi53b3Jrc3BhY2Utc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG59XG5cbi53b3Jrc3BhY2Utc2V0dGluZ3MtdG9vbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGdhcDogMC44cmVtO1xufVxuXG4ud29ya3NwYWNlLXNldHRpbmdzLXRvb2w6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2OCk7XG59XG5cbi53b3Jrc3BhY2Utc2V0dGluZ3MtdG9vbCA+ICoge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ud29ya3NwYWNlLWJvYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMnB4O1xufVxuXG4ud29ya3NwYWNlLWJvYXJkLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luOiAxcHggMHB4O1xufVxuXG4ud29ya3NwYWNlLWJvYXJkLWJhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud29ya3NwYWNlLWJvYXJkLWJhciBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ud29ya3NwYWNlLWJvYXJkLWJhciBoNSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIFxuLndvcmtzcGFjZS1wYWdlcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndvcmtzcGFjZS1wYWdlcy1iYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMGUwO1xuICBwYWRkaW5nOiAzcHggMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLndvcmtzcGFjZS1wYWdlcy1uYW1lIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn0gKi9cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2311:
/*!**********************************************************************************!*\
  !*** ./src/app/main-workspaces/project-workspace/project-workspace.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectWorkspaceComponent": () => (/* binding */ ProjectWorkspaceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1339);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/projectWorkspace.service */ 3751);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _left_pro_workspace_nav_left_pro_workspace_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-pro-workspace-nav/left-pro-workspace-nav.component */ 9249);













function ProjectWorkspaceComponent_button_6_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProjectWorkspaceComponent_button_6_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProjectWorkspaceComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectWorkspaceComponent_button_6_mat_icon_1_Template, 2, 0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProjectWorkspaceComponent_button_6_mat_icon_2_Template, 2, 0, "mat-icon", 33);
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
function ProjectWorkspaceComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Board Already exist");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProjectWorkspaceComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Role Already exist");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProjectWorkspaceComponent_form_67_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const val_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", val_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](val_r18.name);
  }
}
function ProjectWorkspaceComponent_form_67_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Contributor Already exist");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProjectWorkspaceComponent_form_67_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please enter valid Contributor user name !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProjectWorkspaceComponent_form_67_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "User name matched to admin !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0, a1) {
  return {
    "opacity-50": a0,
    "cursor-not-allowed": a1
  };
};
function ProjectWorkspaceComponent_form_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProjectWorkspaceComponent_form_67_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.createContributor(ctx_r19.ContributorsCreatingForm.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 37)(9, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Select Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProjectWorkspaceComponent_form_67_option_11_Template, 2, 2, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProjectWorkspaceComponent_form_67_div_12_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProjectWorkspaceComponent_form_67_div_13_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProjectWorkspaceComponent_form_67_div_14_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 18)(16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r4.ContributorsCreatingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.boardDetails == null ? null : ctx_r4.boardDetails.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.ContributorAlreadyExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.ContributorNotExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.ContributorAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, !ctx_r4.ContributorsCreatingForm.valid, !ctx_r4.ContributorsCreatingForm.valid))("disabled", !ctx_r4.ContributorsCreatingForm.valid);
  }
}
function ProjectWorkspaceComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Role is Empty first Create a Role !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProjectWorkspaceComponent_form_106_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const val_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", val_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](val_r25.name);
  }
}
function ProjectWorkspaceComponent_form_106_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Contributor Already exist");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProjectWorkspaceComponent_form_106_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please enter valid Contributor user name !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProjectWorkspaceComponent_form_106_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "User name matched to admin !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProjectWorkspaceComponent_form_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProjectWorkspaceComponent_form_106_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.createTask(ctx_r26.TaskCreatingForm.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Task Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 37)(9, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Select Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProjectWorkspaceComponent_form_106_option_11_Template, 2, 2, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProjectWorkspaceComponent_form_106_div_12_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProjectWorkspaceComponent_form_106_div_13_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProjectWorkspaceComponent_form_106_div_14_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 18)(16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r7.TaskCreatingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.boardDetails == null ? null : ctx_r7.boardDetails.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.ContributorAlreadyExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.ContributorNotExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.ContributorAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, !ctx_r7.TaskCreatingForm.valid, !ctx_r7.TaskCreatingForm.valid))("disabled", !ctx_r7.TaskCreatingForm.valid);
  }
}
function ProjectWorkspaceComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Role is Empty first Create a Role !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "hidden": a0
  };
};
class ProjectWorkspaceComponent {
  constructor(observer, router, _projectService) {
    this.observer = observer;
    this.router = router;
    this._projectService = _projectService;
    this.PageWorkspaceNameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.isShowTasksModal = {
      taskDetails: null,
      taskList: '',
      projectId: ''
    };
  }
  ngOnInit() {
    this.setForms();
    this._projectService.viewProjectWorspacePage().subscribe({
      next: response => {
        this.userDetails = response.data.userDetails;
        this._projectService.userDetails = response.data.userDetails;
        this._projectService.boardsDetails = response.data.boardDetails;
        this._projectService.DetailsDataTransfer.emit({
          userDetails: this._projectService.userDetails,
          boardDetails: this._projectService.boardsDetails
        });
      }
    });
    // Open modal of Settings Subscription
    this.ProjectSettingsDataTransfer = this._projectService.ProjectSettingsDataTransfer.subscribe(data => {
      this.isProjectSettingsModal = true;
    });
    // Create Project modal open
    this.CreateProjectDataTransfer = this._projectService.CreateProjectDataTransfer.subscribe(data => {
      this.isCreateProjectModal = true;
    });
    // Create new project role
    this.CreateRoleDataTransfer = this._projectService.CreateRoleDataTransfer.subscribe(data => {
      this.isCreateRoleModal = true;
    });
    // Remove the contributor
    this.RemoveContributorsDataTransfer = this._projectService.RemoveContributorsDataTransfer.subscribe(data => {
      this.isRemoveContributorsModal = data;
    });
    // Remove Roles
    this.RemoveRolesDataTransfer = this._projectService.RemoveRolesDataTransfer.subscribe(data => {
      this.isRemoveRolesModal = data;
    });
    // Remove Project task
    this.RemoveTaskDataTransfer = this._projectService.RemoveTaskDataTransfer.subscribe(data => {
      this.isRemoveTaskModal = data;
    });
    // Remove project
    this.RemoveProjectDataTransfer = this._projectService.RemoveProjectDataTransfer.subscribe(data => {
      this.isRemoveProjectModal = data;
    });
    // Create task
    this.CreateTaskDataTransfer = this._projectService.CreateTaskDataTransfer.subscribe(data => {
      this.isCreateTaskModal = true;
      this._projectService.GetBoardDetails(data).subscribe({
        next: response => {
          this._projectService.board_Details = response.data.boardDetails;
          this._projectService.userDetails = response.data.userDetails;
          this.boardDetails = this._projectService.board_Details;
        }
      });
    });
    // Create a new contributors
    this.CreateContributorsDataTransfer = this._projectService.CreateContributorsDataTransfer.subscribe(data => {
      this.isCreateContributorsModal = true;
      this._projectService.GetBoardDetails(data).subscribe({
        next: response => {
          this._projectService.board_Details = response.data.boardDetails;
          this._projectService.userDetails = response.data.userDetails;
          this.boardDetails = this._projectService.board_Details;
        }
      });
    });
    // Show the task details
    this.ShowTaskDataTransfer = this._projectService.WorkspaceDataTransfer.subscribe(data => {
      this.isShowTasksModal = data;
    });
    // update the data by debounceTime
    this.PageWorkspaceNameSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(1000)).subscribe(value => {
      this._projectService.UpdateProjectWorkspaceName(value).subscribe({
        next: response => {
          this._projectService.userDetails.workSpaces.projectWorkspace.name = value;
          this._projectService.DetailsDataTransfer.emit({
            userDetails: this._projectService.userDetails,
            boardDetails: this._projectService.boardsDetails
          });
        }
      });
    });
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.delay)(1)).subscribe(res => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd)).subscribe(() => {
      if (this.sidenav.mode === 'over') {
        this.sidenav.close();
      }
    });
  }
  setForms() {
    // Board Creating Form
    this.BoardCreatingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      boardName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(25)]
      }),
      projectType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(25)]
      })
    });
    // Role Creating Form
    this.RoleCreatingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      roleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(25)]
      }),
      color: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      })
    });
    // contributors Creating Form
    this.ContributorsCreatingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      contributorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(25)]
      }),
      roleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      })
    });
    // Create Task Form
    this.TaskCreatingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      taskName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      }),
      roleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      })
    });
  }
  projectName(event) {
    this.PageWorkspaceNameSubject.next(event.target.value);
  }
  // close Board Settings modal
  closeBoardModal() {
    this.isProjectSettingsModal = false;
    this.isCreateProjectModal = false;
    this.isCreateRoleModal = false;
    this.isCreateContributorsModal = false;
    this.isRemoveContributorsModal = {
      userId: '',
      projectId: ''
    };
    this.isRemoveRolesModal = {
      roleName: '',
      projectId: ''
    };
    this.isCreateTaskModal = false;
    this.isShowTasksModal = {
      taskList: '',
      taskDetails: null,
      projectId: ''
    };
    this.isRemoveProjectModal = '';
    this.isRemoveTaskModal = {
      taskId: '',
      taskListName: '',
      projectId: ''
    };
    this.boardAlreadyExist = false;
    this.roleAlreadyExist = false;
    this.ContributorNotExist = false;
    this.ContributorAlreadyExist = false;
    this.ContributorAdmin = false;
    this.setForms();
  }
  // Create Board
  createBoard(formData) {
    this._projectService.CreateProjectWorkspace(formData).subscribe({
      next: response => {
        this.boardAlreadyExist = false;
        if (response.status === 'Existed') {
          this.boardAlreadyExist = true;
        } else {
          this._projectService.boardsDetails = response.data.boardDetails;
          this._projectService.userDetails = response.data.userDetails;
          this._projectService.DetailsDataTransfer.emit({
            userDetails: this._projectService.userDetails,
            boardDetails: this._projectService.boardsDetails
          });
          this.closeBoardModal();
        }
      }
    });
  }
  createRole(formData) {
    const url = this.router.url.split('/');
    this._projectService.CreateProjectRole(formData, url[url.length - 2]).subscribe({
      next: response => {
        this.roleAlreadyExist = false;
        if (response.status === 'Existed') {
          this.roleAlreadyExist = true;
        } else {
          this._projectService.board_Details = response.data;
          this._projectService.BoardDataTransfer.emit(this._projectService.board_Details);
          this.closeBoardModal();
        }
      }
    });
  }
  createContributor(formData) {
    const url = this.router.url.split('/');
    this._projectService.CreateProjectContributor(formData, url[url.length - 2]).subscribe({
      next: response => {
        this.ContributorNotExist = false;
        this.ContributorAlreadyExist = false;
        this.ContributorAdmin = false;
        if (response.status === 'Existed') {
          this.ContributorAlreadyExist = true;
        } else if (response.status === 'no-user-exist') {
          this.ContributorNotExist = true;
        } else if (response.status === 'Admin') {
          this.ContributorAdmin = true;
        } else {
          this._projectService.board_Details = response.data;
          this._projectService.BoardDataTransfer.emit(this._projectService.board_Details);
          this.closeBoardModal();
        }
      }
    });
  }
  createTask(formData) {
    const url = this.router.url.split('/');
    // Access contributor to task
    this._projectService.isAccessProjectContributorsTask(url[url.length - 1]).subscribe({
      next: response => {
        this._projectService.AccessContributorDataTransfer.emit(response.data);
      }
    });
    this._projectService.CreateProjectTask(formData, url[url.length - 1]).subscribe({
      next: response => {
        this._projectService.board_Details = response.data;
        this._projectService.BoardDataTransfer.emit(this._projectService.board_Details);
        this.closeBoardModal();
      }
    });
  }
  successDeleteContributor() {
    this._projectService.RemoveProjectContributor(this.isRemoveContributorsModal.projectId, this.isRemoveContributorsModal.userId).subscribe({
      next: response => {
        this._projectService.board_Details = response.data;
        this._projectService.BoardDataTransfer.emit(this._projectService.board_Details);
        this.closeBoardModal();
      }
    });
  }
  successDeleteRoles() {
    this._projectService.RemoveProjectRole(this.isRemoveRolesModal.projectId, this.isRemoveRolesModal.roleName).subscribe({
      next: response => {
        this._projectService.board_Details = response.data;
        this._projectService.BoardDataTransfer.emit(this._projectService.board_Details);
        this.closeBoardModal();
      }
    });
  }
  successDeleteTask() {
    // Access contributor to task
    this._projectService.isAccessProjectContributorsTask(this.isRemoveTaskModal.projectId).subscribe({
      next: response => {
        this._projectService.AccessContributorDataTransfer.emit(response.data);
      }
    });
    this._projectService.RemoveProjectTask(this.isRemoveTaskModal.taskId, this.isRemoveTaskModal.taskListName, this.isRemoveTaskModal.projectId).subscribe({
      next: response => {
        this._projectService.board_Details = response.data;
        this._projectService.BoardDataTransfer.emit(this._projectService.board_Details);
        this.closeBoardModal();
      }
    });
  }
  successDeleteProject() {
    this._projectService.RemoveProject(this.isRemoveProjectModal).subscribe({
      next: response => {
        this.closeBoardModal();
        this._projectService.boardsDetails = response.data;
        this._projectService.DetailsDataTransfer.emit({
          userDetails: this._projectService.userDetails,
          boardDetails: this._projectService.boardsDetails
        });
        this.router.navigate(['/workspaces/project-workspace']);
      }
    });
  }
  ngOnDestroy() {
    this.ProjectSettingsDataTransfer.unsubscribe();
    this.CreateProjectDataTransfer.unsubscribe();
    this.CreateRoleDataTransfer.unsubscribe();
    this.CreateContributorsDataTransfer.unsubscribe();
    this.RemoveContributorsDataTransfer.unsubscribe();
    this.RemoveRolesDataTransfer.unsubscribe();
    this.CreateTaskDataTransfer.unsubscribe();
    this.ShowTaskDataTransfer.unsubscribe();
    this.RemoveTaskDataTransfer.unsubscribe();
    this.RemoveProjectDataTransfer.unsubscribe();
  }
}
ProjectWorkspaceComponent.ɵfac = function ProjectWorkspaceComponent_Factory(t) {
  return new (t || ProjectWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__.ProjectWorkspaceService));
};
ProjectWorkspaceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProjectWorkspaceComponent,
  selectors: [["app-project-workspace"]],
  viewQuery: function ProjectWorkspaceComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    }
  },
  decls: 163,
  vars: 85,
  consts: [["sidenav", "matSidenav"], [1, "workspace-container"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "modal", "w-10/12", "md:w-6/12", 3, "ngClass"], [1, "flex", "flex-col"], [1, "flex", "justify-end", "mr-4"], [1, "close-modal", 3, "click"], [1, "flex", "flex-col", "justify-start", "pt-2", "pl-8", "pr-8", "pb-6", "gap-y-4", "boardSettings"], [1, "w-full", "flex", "flex-col", "lg:flex-row", "justify-between", "gap-2"], ["for", "boardName"], ["type", "text", 3, "value", "input"], ["type", "text", "disabled", "", 3, "value"], ["type", "email", "disabled", "", 3, "value"], [1, "flex", "flex-col", "justify-start", "pt-2", "pl-8", "pr-8", "pb-6", "gap-y-4", "boardSettings", 3, "formGroup", "ngSubmit"], ["formControlName", "boardName", "type", "text", "placeholder", "Enter board name", 1, "boardInput"], ["for", "projectType"], ["formControlName", "projectType", "type", "text", "placeholder", "Enter project type", 1, "boardInput"], ["class", "w-full flex flex-col lg:flex-row justify-start mt-3", 4, "ngIf"], [1, "w-full", "flex", "flex-col", "lg:flex-row", "justify-end", "gap-2", "mt-3"], [1, "Board-Modal-Button", "bg-primary", 3, "ngClass", "disabled"], ["formControlName", "roleName", "type", "text", "placeholder", "Enter board name", 1, "boardInput"], ["formControlName", "color", "type", "color", "placeholder", "Enter project type", 1, "boardInput"], ["class", "flex flex-col justify-start pt-2 pl-8 pr-8 pb-6 gap-y-4 boardSettings", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["elseRole", ""], [1, "flex", "flex-col", "justify-start", "mt-2", "pt-2", "pl-8", "pr-8", "pb-6", "gap-y-4"], [1, "w-full"], [1, "text-xl"], [1, "w-full", "flex", "justify-end", "gap-4", "pageDeleteButton", "mt-2"], [3, "click"], ["type", "text", "placeholder", "Enter task name", "disabled", "", 1, "boardInput", 3, "value"], ["selected", "", "disabled", "", 3, "value"], [1, "overlay", 3, "ngClass", "click"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], [1, "w-full", "flex", "flex-col", "lg:flex-row", "justify-start", "mt-3"], [1, "text-red"], ["formControlName", "contributorName", "type", "text", "placeholder", "Enter username", 1, "boardInput"], ["formControlName", "roleName"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "text-center", "text-lg", "py-4", "pb-8"], ["formControlName", "taskName", "type", "text", "placeholder", "Enter task name", 1, "boardInput"]],
  template: function ProjectWorkspaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container")(1, "mat-sidenav", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-left-pro-workspace-nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-sidenav-content")(5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProjectWorkspaceComponent_button_6_Template, 3, 2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_11_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Project Space name :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ProjectWorkspaceComponent_Template_input_input_17_listener($event) {
        return ctx.projectName($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8)(19, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Your ID :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 8)(23, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Your Email :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3)(27, "div", 4)(28, "div", 5)(29, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_29_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "form", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProjectWorkspaceComponent_Template_form_ngSubmit_31_listener() {
        return ctx.createBoard(ctx.BoardCreatingForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 8)(33, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Board name :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 8)(37, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Project type :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProjectWorkspaceComponent_div_40_Template, 3, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 18)(42, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 3)(45, "div", 4)(46, "div", 5)(47, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_47_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "form", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProjectWorkspaceComponent_Template_form_ngSubmit_49_listener() {
        return ctx.createRole(ctx.RoleCreatingForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 8)(51, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Role Name :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 8)(55, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Color :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ProjectWorkspaceComponent_div_58_Template, 3, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 18)(60, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 3)(63, "div", 4)(64, "div", 5)(65, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_65_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, ProjectWorkspaceComponent_form_67_Template, 18, 10, "form", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, ProjectWorkspaceComponent_ng_template_68_Template, 2, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 3)(71, "div", 4)(72, "div", 5)(73, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_73_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 24)(76, "div", 25)(77, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Do you really want to remove the contributor ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 27)(80, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_80_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_82_listener() {
        return ctx.successDeleteContributor();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 3)(85, "div", 4)(86, "div", 5)(87, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_87_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 24)(90, "div", 25)(91, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Do you really want to remove the role ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "NB : Every Contributors under the role will remove !");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 27)(97, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_97_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_99_listener() {
        return ctx.successDeleteRoles();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 3)(102, "div", 4)(103, "div", 5)(104, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_104_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, ProjectWorkspaceComponent_form_106_Template, 18, 10, "form", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](107, ProjectWorkspaceComponent_ng_template_107_Template, 2, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 3)(110, "div", 4)(111, "div", 5)(112, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_112_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "form", 7)(115, "div", 8)(116, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Task Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 8)(120, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Role");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "select")(123, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 3)(126, "div", 4)(127, "div", 5)(128, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_128_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 24)(131, "div", 25)(132, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Do you really want to remove the Task ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 27)(135, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_135_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_137_listener() {
        return ctx.successDeleteTask();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 3)(140, "div", 4)(141, "div", 5)(142, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_142_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 24)(145, "div", 25)(146, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Do you really want to remove the Project ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 27)(149, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_149_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_button_click_151_listener() {
        return ctx.successDeleteProject();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_153_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_154_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_155_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_156_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_157_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_158_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_159_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_160_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_161_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectWorkspaceComponent_Template_div_click_162_listener() {
        return ctx.closeBoardModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.mode === "over");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c1, !ctx.isProjectSettingsModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.userDetails == null ? null : ctx.userDetails.workSpaces.projectWorkspace.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.userDetails == null ? null : ctx.userDetails.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.userDetails == null ? null : ctx.userDetails.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c1, !ctx.isCreateProjectModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.BoardCreatingForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.boardAlreadyExist);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](43, _c0, !ctx.BoardCreatingForm.valid, !ctx.BoardCreatingForm.valid))("disabled", !ctx.BoardCreatingForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](46, _c1, !ctx.isCreateRoleModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.RoleCreatingForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.roleAlreadyExist);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](48, _c0, !ctx.RoleCreatingForm.valid, !ctx.RoleCreatingForm.valid))("disabled", !ctx.RoleCreatingForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](51, _c1, !ctx.isCreateContributorsModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.boardDetails == null ? null : ctx.boardDetails.roles.length) > 0)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](53, _c1, (ctx.isRemoveContributorsModal == null ? null : ctx.isRemoveContributorsModal.userId) === "" || !ctx.isRemoveContributorsModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](55, _c1, (ctx.isRemoveRolesModal == null ? null : ctx.isRemoveRolesModal.roleName) === "" || !ctx.isRemoveRolesModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](57, _c1, !ctx.isCreateTaskModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.boardDetails == null ? null : ctx.boardDetails.roles.length) > 0)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](59, _c1, (ctx.isShowTasksModal == null ? null : ctx.isShowTasksModal.projectId) === "" || !ctx.isShowTasksModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.isShowTasksModal.taskDetails == null ? null : ctx.isShowTasksModal.taskDetails.taskName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.isShowTasksModal.taskDetails == null ? null : ctx.isShowTasksModal.taskDetails.roleName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isShowTasksModal.taskDetails == null ? null : ctx.isShowTasksModal.taskDetails.roleName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](61, _c1, (ctx.isRemoveTaskModal == null ? null : ctx.isRemoveTaskModal.projectId) === "" || !ctx.isRemoveTaskModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](63, _c1, !ctx.isRemoveProjectModal || ctx.isRemoveProjectModal === ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](65, _c1, !ctx.isProjectSettingsModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](67, _c1, !ctx.isCreateProjectModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](69, _c1, !ctx.isCreateRoleModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](71, _c1, !ctx.isCreateContributorsModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](73, _c1, (ctx.isRemoveContributorsModal == null ? null : ctx.isRemoveContributorsModal.userId) === "" || !ctx.isRemoveContributorsModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](75, _c1, (ctx.isRemoveRolesModal == null ? null : ctx.isRemoveRolesModal.roleName) === "" || !ctx.isRemoveRolesModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](77, _c1, !ctx.isCreateTaskModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](79, _c1, (ctx.isShowTasksModal == null ? null : ctx.isShowTasksModal.projectId) === "" || !ctx.isShowTasksModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](81, _c1, (ctx.isRemoveTaskModal == null ? null : ctx.isRemoveTaskModal.projectId) === "" || !ctx.isRemoveTaskModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](83, _c1, !ctx.isRemoveProjectModal || ctx.isRemoveProjectModal === ""));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _left_pro_workspace_nav_left_pro_workspace_nav_component__WEBPACK_IMPORTED_MODULE_1__.LeftProWorkspaceNavComponent],
  styles: ["mat-sidenav[_ngcontent-%COMP%] {\n  margin: 6px;\n  width: 160px;\n  border-right: none;\n  background: #0e1525;\n  border-radius: 6px;\n  text-align: center;\n  box-shadow: 3px 5px 20px rgb(0 0 0 / 22%);\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n\n.workspace-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 77px);\n  border-radius: 10px;\n  margin: 6px;\n  margin-left: 18px;\n  padding: 8px;\n  overflow: auto;\n  box-shadow: 3px 5px 20px rgb(0 0 0 / 22%);\n}\n\n\n.modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\n  z-index: 10;\n}\n\n.close-modal[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #333;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 5;\n}\n\n\n.boardSettings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n\n.boardSettings[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  border: solid 1px #bfbfbf;\n  border-radius: 4px;\n  padding: 5px 6px;\n  font-size: 18px;\n  color: #747474;\n  overflow: hidden;\n}\n\n.boardSettings[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n.boardSettings[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 5px 6px;\n}\n\n.boardSettings[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.boardSettings[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n\n.Board-Modal-Button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  padding: 3px 20px;\n  border-radius: 6px;\n}\n\n.pageDeleteButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background-color: #0053a6;\n}\n\n.pageDeleteButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 2px 9px;\n  font-size: 18px;\n  color: white;\n  border: solid 1px transparent;\n  background-color: #b01d1d;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Qtd29ya3NwYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7O0FBRUEsVUFBVTtBQUNWO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InByb2plY3Qtd29ya3NwYWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdiB7XG4gIG1hcmdpbjogNnB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYmFja2dyb3VuZDogIzBlMTUyNTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDNweCA1cHggMjBweCByZ2IoMCAwIDAgLyAyMiUpO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbn1cblxuLndvcmtzcGFjZS1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3N3B4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAzcHggNXB4IDIwcHggcmdiKDAgMCAwIC8gMjIlKTtcbn1cblxuLyogbW9kYWwgKi9cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3JlbSA1cmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jbG9zZS1tb2RhbCB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICB6LWluZGV4OiA1O1xufVxuXG4vKiBCb2FyZCBTZXR0aW5ncyBNb2RhbCAqL1xuLmJvYXJkU2V0dGluZ3MgbGFiZWwge1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5ib2FyZFNldHRpbmdzIGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA1cHggNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNzQ3NDc0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9hcmRTZXR0aW5ncyBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYm9hcmRTZXR0aW5ncyBzZWxlY3Qge1xuICBwYWRkaW5nOiA1cHggNnB4O1xufVxuXG4uYm9hcmRTZXR0aW5ncyBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYm9hcmRTZXR0aW5ncyBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIEJvcmFkIENyZWF0aW5nICovXG4uQm9hcmQtTW9kYWwtQnV0dG9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5wYWdlRGVsZXRlQnV0dG9uIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUzYTY7XG59XG5cbi5wYWdlRGVsZXRlQnV0dG9uIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDJweCA5cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMWQxZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi13b3Jrc3BhY2VzL3Byb2plY3Qtd29ya3NwYWNlL3Byb2plY3Qtd29ya3NwYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7O0FBRUEsVUFBVTtBQUNWO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUdBLDQxSEFBNDFIIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYge1xuICBtYXJnaW46IDZweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwZTE1MjU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAzcHggNXB4IDIwcHggcmdiKDAgMCAwIC8gMjIlKTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG59XG5cbi53b3Jrc3BhY2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzdweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNnB4O1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgcGFkZGluZzogOHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogM3B4IDVweCAyMHB4IHJnYigwIDAgMCAvIDIyJSk7XG59XG5cbi8qIG1vZGFsICovXG4ubW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDNyZW0gNXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2xvc2UtbW9kYWwge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgei1pbmRleDogNTtcbn1cblxuLyogQm9hcmQgU2V0dGluZ3MgTW9kYWwgKi9cbi5ib2FyZFNldHRpbmdzIGxhYmVsIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4uYm9hcmRTZXR0aW5ncyBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiZmJmYmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4IDZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzc0NzQ3NDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvYXJkU2V0dGluZ3MgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmJvYXJkU2V0dGluZ3Mgc2VsZWN0IHtcbiAgcGFkZGluZzogNXB4IDZweDtcbn1cblxuLmJvYXJkU2V0dGluZ3Mgc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJvYXJkU2V0dGluZ3MgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBCb3JhZCBDcmVhdGluZyAqL1xuLkJvYXJkLU1vZGFsLUJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucGFnZURlbGV0ZUJ1dHRvbiBidXR0b246Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1M2E2O1xufVxuXG4ucGFnZURlbGV0ZUJ1dHRvbiBidXR0b24ge1xuICBwYWRkaW5nOiAycHggOXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDFkMWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6367:
/*!****************************************************************************!*\
  !*** ./src/app/main-workspaces/user-workspace/user-workspace.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserWorkspaceComponent": () => (/* binding */ UserWorkspaceComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_service_s3_bucket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/s3-bucket.service */ 6385);
/* harmony import */ var src_app_service_workspace_tree_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/workspace-tree.service */ 9846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var src_app_service_userWorkspace_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/userWorkspace.service */ 8158);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ 4307);
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ 65);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _workspace_left_nav_workspace_left_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workspace-left-nav/workspace-left-nav.component */ 8357);


















function UserWorkspaceComponent_button_6_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserWorkspaceComponent_button_6_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserWorkspaceComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserWorkspaceComponent_button_6_mat_icon_1_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserWorkspaceComponent_button_6_mat_icon_2_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r0.opened);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r0.opened);
  }
}
function UserWorkspaceComponent_emoji_mart_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "emoji-mart", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("emojiClick", function UserWorkspaceComponent_emoji_mart_53_Template_emoji_mart_emojiClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.addEmoji($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserWorkspaceComponent_emoji_mart_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "emoji-mart", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("emojiClick", function UserWorkspaceComponent_emoji_mart_54_Template_emoji_mart_emojiClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.addTitleEmoji($event, ctx_r10.titleEmojiEdit.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "hidden": a0
  };
};
const _c1 = function (a0, a1) {
  return {
    "opacity-50": a0,
    "cursor-not-allowed": a1
  };
};
const _c2 = function () {
  return {
    "display": "none"
  };
};
class UserWorkspaceComponent {
  constructor(observer, router, workspaceService, s3Service) {
    this.observer = observer;
    this.router = router;
    this.workspaceService = workspaceService;
    this.s3Service = s3Service;
    this.workspace = {
      name: '',
      icon: ''
    };
    this.titleEmojiEdit = {
      bol: false,
      id: ''
    };
    this.deletePageData = {
      bol: false,
      id: ''
    };
    this.isWorkSpaceNameUpdate = false;
    this.isImageUpload = {
      bol: false,
      id: '',
      pageId: ''
    };
  }
  ngOnInit() {
    this.workspaceService.viewWorspacePage().subscribe({
      next: response => {
        const obj = {
          name: response.data.userDetails.workSpaces.userWorkspace.name,
          icon: response.data.userDetails.workSpaces.userWorkspace.icon
        };
        this.workSpaceNameUpdate = obj.name;
        this.workspace = obj;
        // Page Details
        this.workspaceService.pages = response.data.pageDetails;
        // Data Transer event
        this.workspaceService.pagesDataTransfer.emit(response.data.pageDetails);
      }
    });
    this.modalSubscribtion = this.workspaceService.isModalDataTransfer.subscribe(data => {
      this.isModal = data;
    });
    this.deletePageSubscribtion = this.workspaceService.deleteDataTransfer.subscribe(data => {
      this.deletePageData.bol = data.bol;
      this.deletePageData.id = data.id;
    });
    // image upload modal
    this.imageUploadModalSubscription = this.workspaceService.isImageUpploadDataTransfer.subscribe(data => {
      this.isImageUpload = data;
    });
    // Form Setup
    this.workspaceNameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      data: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(1)]
      })
    });
    // Edit title icon
    this.editTitleEmojiSubscribtion = this.workspaceService.titleIconEditDataTransfer.subscribe(data => {
      this.titleEmojiEdit = data;
    });
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(1)).subscribe(res => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd)).subscribe(() => {
      if (this.sidenav.mode === 'over') {
        this.sidenav.close();
      }
    });
  }
  closeModal() {
    this.isWorkSpaceNameUpdate = false;
    this.workspaceService.isModalDataTransfer.emit(false);
  }
  openEmojiBar() {
    this.isEmojiBar = true;
  }
  closeEmojiBar() {
    this.isEmojiBar = false;
    this.titleEmojiEdit.bol = false;
  }
  addEmoji(event) {
    this.workspaceService.UpdateWorkspaceIcon(event.emoji.id).subscribe({
      next: response => {
        this.workspace.icon = event.emoji.id;
        this.closeEmojiBar();
        this.closeModal();
        this.isWorkSpaceNameUpdate = false;
      }
    });
  }
  // Edit Title icon
  addTitleEmoji(event, id) {
    document.body.style.cursor = 'wait';
    this.titleEmojiEdit.bol = false;
    this.workspaceService.UpdateWorkspacePageIcon(event.emoji.id, id).subscribe({
      next: response => {
        this.workspaceService.pageDataTransfer.emit(response.data);
        this.isEmojiBar = false;
        this.isWorkSpaceNameUpdate = false;
        document.body.style.cursor = 'auto';
      }
    });
  }
  updateName(event) {
    this.isWorkSpaceNameUpdate = false;
    if (event.target.value !== this.workSpaceNameUpdate && event.target.value !== '') {
      this.isWorkSpaceNameUpdate = true;
    }
  }
  nameUpdate(data) {
    this.workspaceService.UpdateWorkspaceName(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000)).subscribe({
      next: response => {
        this.isEmojiBar = false;
        this.isWorkSpaceNameUpdate = false;
        this.workspaceService.isModalDataTransfer.emit(false);
        this.workSpaceNameUpdate = data.data;
        this.workspace.name = data.data;
      }
    });
  }
  // close Image Upload Modal
  closeImageUploadModal() {
    this.isImageUpload = {
      bol: false,
      id: '',
      pageId: ''
    };
    // close Option Tab  while enter / at first
    const optionTab = document.querySelector('.workspace-content-menu-block');
    optionTab.style.display = 'none';
    optionTab.style.left = '0px';
    optionTab.style.top = '0px';
    document.body.style.cursor = 'auto';
  }
  // upload image
  uploadCover(event) {
    const file = event.target.files[0];
    if (file) {
      document.body.style.cursor = 'wait';
      // get a seccure url from a server
      this.s3Service.createUploadUrlToSecImage().subscribe({
        next: response => {
          const url = response.data;
          // post the image directly to the s3 bucket
          this.s3Service.uploadpageCoverImg(url, file).then(data => {
            const imageUrl = data.url.split('?')[0];
            // post req to server to save any data
            this.workspaceService.UpdateWorkspaceSecImage(imageUrl, this.isImageUpload.pageId, this.isImageUpload.id).subscribe({
              next: response => {
                this.workspaceService.pageDataTransfer.emit(response.data);
                this.closeImageUploadModal();
                document.body.style.cursor = 'auto';
              }
            });
          });
        }
      });
    }
  }
  // Delete the user page
  successDelete() {
    document.body.style.cursor = 'wait';
    this.workspaceService.deleteWorspacePage(this.deletePageData.id).subscribe({
      next: response => {
        this.workspaceService.deleteWorkspacePage(this.deletePageData.id);
        this.workspaceService.deleteDataTransfer.emit({
          bol: false,
          id: ''
        });
        this.cancelPageDelete();
        document.body.style.cursor = 'auto';
      }
    });
  }
  // close the delelte modal
  cancelPageDelete() {
    this.deletePageData = {
      bol: false,
      id: ''
    };
  }
  ngOnDestroy() {
    this.deletePageSubscribtion.unsubscribe();
    this.modalSubscribtion.unsubscribe();
    this.editTitleEmojiSubscribtion.unsubscribe();
    this.imageUploadModalSubscription.unsubscribe();
  }
}
UserWorkspaceComponent.ɵfac = function UserWorkspaceComponent_Factory(t) {
  return new (t || UserWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_userWorkspace_service__WEBPACK_IMPORTED_MODULE_2__.UserWorkspaceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_s3_bucket_service__WEBPACK_IMPORTED_MODULE_0__.S3BucketService));
};
UserWorkspaceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UserWorkspaceComponent,
  selectors: [["app-user-workspace"]],
  viewQuery: function UserWorkspaceComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_service_s3_bucket_service__WEBPACK_IMPORTED_MODULE_0__.S3BucketService, src_app_service_workspace_tree_service__WEBPACK_IMPORTED_MODULE_1__.WorkspaceTreeService])],
  decls: 59,
  vars: 35,
  consts: [["sidenav", "matSidenav"], [3, "workspace"], [1, "workspace-container"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "ws-modal", "w-10/12", "md:w-6/12", 3, "ngClass"], [1, "flex", "flex-col"], [1, "flex", "justify-end", "mr-4"], [1, "ws-close-modal", 3, "click"], [1, "flex", "flex-col", "xl:flex-row", "justify-start", "mt-2", "pt-2", "pl-8", "pr-8", "pb-12", "gap-y-4"], [1, "flex", "w-full", "justify-center", "xl:w-6/12"], [1, "flex", "flex-col", "gap-y-2", 3, "formGroup", "ngSubmit"], ["for", "name"], ["formControlName", "data", "type", "text", 3, "value", "input"], [1, "bg-primary", "rounded-lg", "mt-3", "p-1", "text-white", "text-xl", 3, "disabled", "ngClass"], [1, "flex", "flex-col", "gap-y-2"], [1, "flex", "gap-5", "items-end"], ["size", "36", 3, "emoji"], [1, "workspace-icon-i", "fa-solid", "fa-pen-to-square", "mb-1", 3, "click"], [1, "flex", "flex-col", "justify-start", "mt-2", "pt-2", "pl-8", "pr-8", "pb-12", "gap-y-4"], [1, "w-full"], ["id", "uploadFile", "accept", "image/*", "type", "file", 3, "ngStyle", "input"], ["for", "uploadFile", 1, "imageUploadLabel", "items-center", "text-center"], [1, "flex", "flex-col", "justify-start", "mt-2", "pt-2", "pl-8", "pr-8", "pb-6", "gap-y-4"], [1, "text-xl"], [1, "w-full", "flex", "justify-end", "gap-4", "pageDeleteButton", "mt-2"], [3, "click"], [3, "emojiClick", 4, "ngIf"], [1, "ws-overlay", 3, "ngClass", "click"], [1, "ic-overlay", 3, "ngClass", "click"], [1, "iu-overlay", 3, "ngClass", "click"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], [3, "emojiClick"]],
  template: function UserWorkspaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container")(1, "mat-sidenav", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-workspace-left-nav", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-sidenav-content")(5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, UserWorkspaceComponent_button_6_Template, 3, 2, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_button_click_11_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function UserWorkspaceComponent_Template_form_ngSubmit_15_listener() {
        return ctx.nameUpdate(ctx.workspaceNameForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Workspace Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function UserWorkspaceComponent_Template_input_input_18_listener($event) {
        return ctx.updateName($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9)(22, "div", 14)(23, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Workspace icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "ngx-emoji", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_i_click_27_listener() {
        return ctx.openEmojiBar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 4)(29, "div", 5)(30, "div", 6)(31, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_button_click_31_listener() {
        return ctx.closeImageUploadModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 18)(34, "div", 19)(35, "form", 14)(36, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function UserWorkspaceComponent_Template_input_input_36_listener($event) {
        return ctx.uploadCover($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Upload Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 4)(40, "div", 5)(41, "div", 6)(42, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_button_click_42_listener() {
        return ctx.cancelPageDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 22)(45, "div", 19)(46, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Do you really want to remove the page ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 24)(49, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_button_click_49_listener() {
        return ctx.cancelPageDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_button_click_51_listener() {
        return ctx.successDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, UserWorkspaceComponent_emoji_mart_53_Template, 1, 0, "emoji-mart", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, UserWorkspaceComponent_emoji_mart_54_Template, 1, 0, "emoji-mart", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_div_click_55_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_div_click_56_listener() {
        return ctx.closeEmojiBar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_div_click_57_listener() {
        return ctx.closeImageUploadModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserWorkspaceComponent_Template_div_click_58_listener() {
        return ctx.cancelPageDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("workspace", ctx.workspace);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r0.mode === "over");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c0, !ctx.isModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.workspaceNameForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.workspace.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isWorkSpaceNameUpdate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](19, _c1, !ctx.isWorkSpaceNameUpdate, !ctx.isWorkSpaceNameUpdate));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("emoji", ctx.workspace.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c0, !ctx.isImageUpload.bol));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c0, !ctx.deletePageData.bol));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEmojiBar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.titleEmojiEdit.bol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c0, !ctx.isModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c0, !ctx.isEmojiBar && !ctx.titleEmojiEdit.bol));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](31, _c0, !ctx.isImageUpload.bol));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](33, _c0, !ctx.deletePageData.bol));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_13__.PickerComponent, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_14__.EmojiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _workspace_left_nav_workspace_left_nav_component__WEBPACK_IMPORTED_MODULE_3__.WorkspaceLeftNavComponent],
  styles: ["mat-sidenav[_ngcontent-%COMP%] {\n  margin: 6px;\n  width: 160px;\n  border-right: none;\n  background: #0e1525;\n  border-radius: 6px;\n  text-align: center;\n  box-shadow: 3px 5px 20px rgb(0 0 0 / 22%);\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n\n.workspace-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 77px);\n  border-radius: 10px;\n  margin: 6px;\n  margin-left: 18px;\n  padding: 8px;\n  overflow: auto;\n  box-shadow: 3px 5px 20px rgb(0 0 0 / 22%);\n}\n\n\n.ws-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\n  z-index: 10;\n}\n\n.ws-close-modal[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #333;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\n.ws-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 5;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 6px 8px;\n  color: #4b4b4b;\n  border: solid 1px #8e8e8e;\n  border-radius: 6px;\n  overflow: hidden;\n}\n\nngx-emoji[_ngcontent-%COMP%] {\n  display: block;\n  width: 36px;\n  height: 36px;\n}\n\n.workspace-icon-i[_ngcontent-%COMP%] {\n  color: #888888;\n  font-size: 19px;\n}\n\n.workspace-icon-i[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nemoji-mart[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\n  z-index: 25;\n}\n\n.ic-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 15;\n  cursor: pointer;\n}\n\n\n.imageUploadLabel[_ngcontent-%COMP%] {\n  background-color: #ebe6e6;\n  padding: 6px 0px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition-duration: 0.3s;\n}\n\n.iu-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 1;\n  cursor: pointer;\n}\n\n.imageUploadLabel[_ngcontent-%COMP%]:hover {\n  background-color: #d6d6d6;\n}\n\n.pageDeleteButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background-color: #0053a6;\n}\n\n.pageDeleteButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 2px 9px;\n  font-size: 18px;\n  color: white;\n  border: solid 1px transparent;\n  background-color: #b01d1d;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItd29ya3NwYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7O0FBRUEsVUFBVTtBQUNWO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQSxhQUFhOztBQUViO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsMENBQTBDO0VBQzFDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJ1c2VyLXdvcmtzcGFjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYge1xuICBtYXJnaW46IDZweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwZTE1MjU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAzcHggNXB4IDIwcHggcmdiKDAgMCAwIC8gMjIlKTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG59XG5cbi53b3Jrc3BhY2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzdweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNnB4O1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgcGFkZGluZzogOHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogM3B4IDVweCAyMHB4IHJnYigwIDAgMCAvIDIyJSk7XG59XG5cbi8qIG1vZGFsICovXG4ud3MtbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDNyZW0gNXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ud3MtY2xvc2UtbW9kYWwge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLndzLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgei1pbmRleDogNTtcbn1cblxuLyogaWNvbiBiYXIgKi9cblxubGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBjb2xvcjogIzRiNGI0YjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzhlOGU4ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5uZ3gtZW1vamkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbn1cblxuLndvcmtzcGFjZS1pY29uLWkge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4ud29ya3NwYWNlLWljb24taTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZW1vamktbWFydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6IDAgM3JlbSA1cmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgei1pbmRleDogMjU7XG59XG5cbi5pYy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIHotaW5kZXg6IDE1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGltYWdlIFVwbG9hZCBMYWJlbCAqL1xuLmltYWdlVXBsb2FkTGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlNmU2O1xuICBwYWRkaW5nOiA2cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cblxuLml1LW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2VVcGxvYWRMYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XG59XG5cbi5wYWdlRGVsZXRlQnV0dG9uIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUzYTY7XG59XG5cbi5wYWdlRGVsZXRlQnV0dG9uIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDJweCA5cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMWQxZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi13b3Jrc3BhY2VzL3VzZXItd29ya3NwYWNlL3VzZXItd29ya3NwYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7O0FBRUEsVUFBVTtBQUNWO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQSxhQUFhOztBQUViO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsMENBQTBDO0VBQzFDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFLQSxna0tBQWdrSyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2IHtcbiAgbWFyZ2luOiA2cHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMGUxNTI1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogM3B4IDVweCAyMHB4IHJnYigwIDAgMCAvIDIyJSk7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufVxuXG4ud29ya3NwYWNlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc3cHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDNweCA1cHggMjBweCByZ2IoMCAwIDAgLyAyMiUpO1xufVxuXG4vKiBtb2RhbCAqL1xuLndzLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAzcmVtIDVyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLndzLWNsb3NlLW1vZGFsIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi53cy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIHotaW5kZXg6IDU7XG59XG5cbi8qIGljb24gYmFyICovXG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgY29sb3I6ICM0YjRiNGI7XG4gIGJvcmRlcjogc29saWQgMXB4ICM4ZThlOGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxubmd4LWVtb2ppIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi53b3Jrc3BhY2UtaWNvbi1pIHtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLndvcmtzcGFjZS1pY29uLWk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmVtb2ppLW1hcnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3gtc2hhZG93OiAwIDNyZW0gNXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHotaW5kZXg6IDI1O1xufVxuXG4uaWMtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICB6LWluZGV4OiAxNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBpbWFnZSBVcGxvYWQgTGFiZWwgKi9cbi5pbWFnZVVwbG9hZExhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTZlNjtcbiAgcGFkZGluZzogNnB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5pdS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlVXBsb2FkTGFiZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xufVxuXG4ucGFnZURlbGV0ZUJ1dHRvbiBidXR0b246Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1M2E2O1xufVxuXG4ucGFnZURlbGV0ZUJ1dHRvbiBidXR0b24ge1xuICBwYWRkaW5nOiAycHggOXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDFkMWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8357:
/*!***************************************************************************************************!*\
  !*** ./src/app/main-workspaces/user-workspace/workspace-left-nav/workspace-left-nav.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkspaceLeftNavComponent": () => (/* binding */ WorkspaceLeftNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_userWorkspace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/userWorkspace.service */ 8158);
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ 65);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





const _c0 = function (a1) {
  return ["/workspaces/user-workspace", a1];
};
function WorkspaceLeftNavComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-emoji", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, page_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("emoji", page_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r2.title);
  }
}
function WorkspaceLeftNavComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkspaceLeftNavComponent_div_11_div_1_Template, 4, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.pagesDetails);
  }
}
class WorkspaceLeftNavComponent {
  constructor(workspaceService) {
    this.workspaceService = workspaceService;
  }
  ngOnInit() {
    this.modalSubscribtion = this.workspaceService.isModalDataTransfer.subscribe(data => {
      this.isModal = data;
    });
    // Page Details
    this.pagesDataTransfer = this.workspaceService.pagesDataTransfer.subscribe(data => {
      document.body.style.cursor = 'auto';
      this.pagesDetails = data;
    });
  }
  openModal() {
    this.workspaceService.isModalDataTransfer.emit(true);
  }
  createPage() {
    document.body.style.cursor = 'wait';
    this.workspaceService.CreateWorkspacePage().subscribe({
      next: response => {
        this.workspaceService.pushPage(response.data);
        this.workspaceService.pagesDataTransfer.emit(this.workspaceService.pages);
      }
    });
  }
  // Show Pages Details
  sendPageDetails(pageId) {
    this.workspaceService.GetWorkspacePage(pageId).subscribe({
      next: response => {
        this.workspaceService.pageDataTransfer.emit(response.data);
      }
    });
  }
  ngOnDestroy() {
    this.modalSubscribtion.unsubscribe();
    this.pagesDataTransfer.unsubscribe();
  }
}
WorkspaceLeftNavComponent.ɵfac = function WorkspaceLeftNavComponent_Factory(t) {
  return new (t || WorkspaceLeftNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_userWorkspace_service__WEBPACK_IMPORTED_MODULE_0__.UserWorkspaceService));
};
WorkspaceLeftNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: WorkspaceLeftNavComponent,
  selectors: [["app-workspace-left-nav"]],
  inputs: {
    workspace: "workspace"
  },
  decls: 16,
  vars: 3,
  consts: [[1, "workspace", "w-full", "flex", "justify-start", "gap-2"], ["size", "24", 3, "emoji"], [1, "workspace-name"], [1, "mt-3", "workspace-settings"], [1, "workspace-settings-tool", 3, "click"], [1, "fa-solid", "fa-gear"], ["class", "workspace-pages-container", 4, "ngIf"], [1, "mt-3", "workspace-pages-new", "gap-2", "mb-4", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "workspace-pages-container"], ["class", "workspace-pages-bar", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "workspace-pages-bar", 3, "routerLink"], [1, "workspace-pages-name"]],
  template: function WorkspaceLeftNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-emoji", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceLeftNavComponent_Template_div_click_6_listener() {
        return ctx.openModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, WorkspaceLeftNavComponent_div_11_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceLeftNavComponent_Template_div_click_12_listener() {
        return ctx.createPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("emoji", ctx.workspace.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.workspace.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.pagesDetails == null ? null : ctx.pagesDetails.length) > 0);
    }
  },
  dependencies: [_ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_2__.EmojiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["hr[_ngcontent-%COMP%] {\n  color: #616161;\n  margin: 12px 0;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\nngx-emoji[_ngcontent-%COMP%] {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  border-radius: 0 20px 20px 0;\n  padding: 30px;\n}\n\n.workspace[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 8px;\n  align-items: center;\n  cursor: default;\n}\n\n.workspace-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 100%;\n  overflow: hidden;\n  padding-left: 5px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: start;\n}\n\n.workspace-settings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  column-gap: 0.5rem;\n}\n\n.workspace-settings-tool[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 6px 8px;\n  gap: 0.8rem;\n}\n\n.workspace-settings-tool[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.068);\n}\n\n.workspace-settings-tool[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n}\n\n.workspace-pages-new[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  padding: 4px 0;\n  border-radius: 7px;\n  transition: 0.5s;\n  cursor: pointer;\n}\n\n.workspace-pages-new[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.workspace-new-page-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n.workspace-pages-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px;\n  background-color: #ffffff;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 2px;\n}\n\n.workspace-pages-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 3px 2px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.workspace-pages-bar[_ngcontent-%COMP%]:hover {\n  background-color: #e1e0e0;\n  padding: 3px 2px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.workspace-pages-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 100%;\n  overflow: hidden;\n  padding-left: 5px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzcGFjZS1sZWZ0LW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ3b3Jrc3BhY2UtbGVmdC1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIG1hcmdpbjogMTJweCAwO1xufVxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxubmd4LWVtb2ppIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLndvcmtzcGFjZSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi53b3Jrc3BhY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi53b3Jrc3BhY2Utc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG59XG5cbi53b3Jrc3BhY2Utc2V0dGluZ3MtdG9vbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGdhcDogMC44cmVtO1xufVxuXG4ud29ya3NwYWNlLXNldHRpbmdzLXRvb2w6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2OCk7XG59XG5cbi53b3Jrc3BhY2Utc2V0dGluZ3MtdG9vbCA+ICoge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ud29ya3NwYWNlLXBhZ2VzLW5ldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA0cHggMDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53b3Jrc3BhY2UtcGFnZXMtbmV3ID4gKiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLndvcmtzcGFjZS1uZXctcGFnZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogd29ya3NwYWNlIHBhZ2VzICAqL1xuXG4ud29ya3NwYWNlLXBhZ2VzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMnB4O1xufVxuXG4ud29ya3NwYWNlLXBhZ2VzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzcHggMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud29ya3NwYWNlLXBhZ2VzLWJhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUwZTA7XG4gIHBhZGRpbmc6IDNweCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud29ya3NwYWNlLXBhZ2VzLW5hbWUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi13b3Jrc3BhY2VzL3VzZXItd29ya3NwYWNlL3dvcmtzcGFjZS1sZWZ0LW5hdi93b3Jrc3BhY2UtbGVmdC1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUEsNHBJQUE0cEkiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBtYXJnaW46IDEycHggMDtcbn1cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbm5neC1lbW9qaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi53b3Jrc3BhY2Uge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ud29ya3NwYWNlLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4ud29ya3NwYWNlLXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xufVxuXG4ud29ya3NwYWNlLXNldHRpbmdzLXRvb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBnYXA6IDAuOHJlbTtcbn1cblxuLndvcmtzcGFjZS1zZXR0aW5ncy10b29sOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNjgpO1xufVxuXG4ud29ya3NwYWNlLXNldHRpbmdzLXRvb2wgPiAqIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLndvcmtzcGFjZS1wYWdlcy1uZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud29ya3NwYWNlLXBhZ2VzLW5ldyA+ICoge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi53b3Jrc3BhY2UtbmV3LXBhZ2UtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIHdvcmtzcGFjZSBwYWdlcyAgKi9cblxuLndvcmtzcGFjZS1wYWdlcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDJweDtcbn1cblxuLndvcmtzcGFjZS1wYWdlcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndvcmtzcGFjZS1wYWdlcy1iYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMGUwO1xuICBwYWRkaW5nOiAzcHggMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLndvcmtzcGFjZS1wYWdlcy1uYW1lIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7217:
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment.dev */ 1494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class AuthenticationService {
  constructor(http) {
    this.http = http;
  }
  // Register a user
  signup(signUpData) {
    return this.http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/auth/signup`, signUpData);
  }
  // Signin a user
  signin(signinData) {
    return this.http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/auth/signin`, signinData);
  }
  // check Username Exist
  checkUsernameExist(userName) {
    return this.http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/auth/signup?userNameExist=${userName}`, userName);
  }
  // Mail verify
  verifyEmailVerification(token) {
    return this.http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/auth/checkVerify`, {
      jwt: token
    });
  }
  // Sign in with google
  signinWithGoogle(userData) {
    return this.http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/auth/google`, userData);
  }
  // is JWT token is there
  isAuthenticated() {
    return localStorage.getItem('jwt');
  }
  // Mail Verification dine
  isVerify() {
    return localStorage.getItem('verify');
  }
  // Password Validator
  validatePassword(control) {
    const password = control.value;
    if (!password) {
      return null;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#%&]/.test(password);
    if (!hasUpperCase) {
      return {
        upperCase: true
      };
    }
    if (!hasLowerCase) {
      return {
        lowerCase: true
      };
    }
    if (!hasNumber) {
      return {
        number: true
      };
    }
    if (!hasSpecial) {
      return {
        special: true
      };
    }
    return null;
  }
  // Check user name have space or ..
  userNameValidator(control) {
    const value = control.value;
    if (!value) {
      return null;
    }
    const output = [];
    for (let i = 0; i < value.length; i++) {
      const code = value.charCodeAt(i);
      if (code > 47 && code < 58 || code > 96 && code < 122) {
        if (code !== 32) {
          output.push(code);
        }
      }
    }
    if (output.length === value.length) {
      return null;
    }
    return {
      usernameStructure: true
    };
  }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3751:
/*!*****************************************************!*\
  !*** ./src/app/service/projectWorkspace.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectWorkspaceService": () => (/* binding */ ProjectWorkspaceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment.dev */ 1494);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ProjectWorkspaceService {
  constructor(_http) {
    this._http = _http;
    this.DetailsDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.AccessAdminDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.AccessContributorDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.BoardDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.ProjectSettingsDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.CreateProjectDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.CreateRoleDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.CreateContributorsDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.RemoveContributorsDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.RemoveRolesDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.WorkspaceDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.CreateTaskDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.RemoveTaskDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.RemoveProjectDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  // is user can Access the projct workSpaces
  isCanAccessProject(projectId) {
    return this._http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/access?projectId=${projectId}`);
  }
  // is Access to Admin
  isAccessProjectAdmin(projectId) {
    return this._http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/access/admin?projectId=${projectId}`);
  }
  // is Access contributor to task
  isAccessProjectContributorsTask(projectId) {
    return this._http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/access/contributors?projectId=${projectId}`);
  }
  // View Project Management
  viewProjectWorspacePage() {
    return this._http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace`);
  }
  // Update the name of project Workspace
  UpdateProjectWorkspaceName(newName) {
    return this._http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/name`, {
      data: newName
    });
  }
  // Create a new project workspace
  CreateProjectWorkspace(formData) {
    return this._http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace`, formData);
  }
  // Create a new project role
  CreateProjectRole(formData, projectId) {
    return this._http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/roles`, {
      roleName: formData.roleName,
      color: formData.color,
      projectId: projectId
    });
  }
  // Create a new project contributors
  CreateProjectContributor(formData, projectId) {
    return this._http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/contributors`, {
      roleName: formData.roleName,
      contributorName: formData.contributorName,
      projectId: projectId
    });
  }
  // Create a new project Task
  CreateProjectTask(formData, projectId) {
    return this._http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/tasks`, {
      roleName: formData.roleName,
      taskName: formData.taskName,
      projectId: projectId
    });
  }
  // Update a new project Task list
  UpdateProjectTask(newTasks, projectId, editedTaskId, editedListName) {
    return this._http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/tasks`, {
      newTasks: newTasks,
      projectId: projectId,
      editedTaskId: editedTaskId,
      editedListName: editedListName
    });
  }
  // Remove project contributors
  RemoveProjectContributor(projectId, userId) {
    return this._http.delete(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/contributors?projectId=${projectId}&userId=${userId}`);
  }
  // Remove project Role
  RemoveProjectRole(projectId, roleName) {
    return this._http.delete(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/roles?projectId=${projectId}&roleName=${roleName}`);
  }
  // Remove project Task
  RemoveProjectTask(taskId, taskListName, projectId) {
    return this._http.delete(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/tasks?projectId=${projectId}&taskId=${taskId}&taskListName=${taskListName}`);
  }
  // Remove project Task
  RemoveProject(projectId) {
    return this._http.delete(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace?projectId=${projectId}`);
  }
  // Get the board details
  GetBoardDetails(data) {
    this.boardSelectedId = data;
    return this._http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/project-workspace/boards/${data}`);
  }
  // Search the boards
  SearchBoard(data) {
    const resultArray = [];
    for (const el of this.boardsDetails) {
      const index = el.boardName.search(data);
      if (index !== -1) {
        resultArray.push(el);
      }
    }
    return resultArray;
  }
}
ProjectWorkspaceService.ɵfac = function ProjectWorkspaceService_Factory(t) {
  return new (t || ProjectWorkspaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ProjectWorkspaceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProjectWorkspaceService,
  factory: ProjectWorkspaceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6385:
/*!**********************************************!*\
  !*** ./src/app/service/s3-bucket.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S3BucketService": () => (/* binding */ S3BucketService)
/* harmony export */ });
/* harmony import */ var _home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment.dev */ 1494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class S3BucketService {
  constructor(http) {
    this.http = http;
  }
  createUploadUrl(pageId) {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl}/s3/page-cover/generate-url?pageId=${pageId}`);
  }
  createUploadUrlToSecImage() {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl}/s3/page-section/generate-url`);
  }
  // Update the profile image
  updateProfileImg() {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl}/s3/profile`);
  }
  // post the image directly to the s3 bucket userWorkspace page cover
  uploadpageCoverImg(url, file) {
    return (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: file
      });
    })();
  }
}
S3BucketService.ɵfac = function S3BucketService_Factory(t) {
  return new (t || S3BucketService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
S3BucketService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: S3BucketService,
  factory: S3BucketService.ɵfac
});

/***/ }),

/***/ 4981:
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment.dev */ 1494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class UserService {
  constructor(http) {
    this.http = http;
  }
  homePage() {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}`);
  }
}
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac
});

/***/ }),

/***/ 8158:
/*!**************************************************!*\
  !*** ./src/app/service/userWorkspace.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserWorkspaceService": () => (/* binding */ UserWorkspaceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment.dev */ 1494);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);





class UserWorkspaceService {
  constructor(http) {
    this.http = http;
    this.pagesDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isModalDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isImageUpploadDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.titleIconEditDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.deleteDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.pageDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  // is user have access to page
  isCanAccessPage(pageId) {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/access?pageId=${pageId}`);
  }
  // View User Workspace Page
  viewWorspacePage() {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace`);
  }
  // Get the workspace page details
  GetWorkspacePage(pageId) {
    return this.http.get(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/${pageId}`);
  }
  // Update Workspace icon
  UpdateWorkspaceIcon(newIcon) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/icon`, {
      data: newIcon
    });
  }
  // Update Workspace name
  UpdateWorkspaceName(newName) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/name`, newName);
  }
  // Create Workspace Page
  CreateWorkspacePage() {
    return this.http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace`, {});
  }
  // Update workspace page icon
  UpdateWorkspacePageIcon(iconName, pageId) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/page-icon`, {
      iconName: iconName,
      pageId: pageId
    });
  }
  // Update workspace page name
  UpdateWorkspacePageName(pageName, pageId) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/page-name`, {
      pageName: pageName,
      pageId: pageId
    });
  }
  // Update workspace page Cover imageUrl
  UpdateWorkspaceCoverImage(imageUrl, pageId) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/cover-image`, {
      imageUrl: imageUrl,
      pageId: pageId
    });
  }
  // Update workspace page Cover image positionY
  UpdateWorkspaceCoverPosition(positionY, pageId) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/cover-position`, {
      positionY: positionY,
      pageId: pageId
    });
  }
  // Update workspace page section type
  UpdateWorkspaceSecType(pageType, pageSectionId, pageId) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/page/type`, {
      pageType: pageType,
      pageSectionId: pageSectionId,
      pageId: pageId
    });
  }
  // Update workspace page section Content
  UpdateWorkspaceSecContent(pageContent, pageSectionId, pageId) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/page/content`, {
      pageContent: pageContent,
      pageSectionId: pageSectionId,
      pageId: pageId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(data => {
      return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/page/content`, {
        pageContent: pageContent,
        pageSectionId: pageSectionId,
        pageId: pageId
      });
    }));
  }
  // Add new section
  AddNewSection(pageId, pageSectionId, pageType, pageContent, PageInsertType) {
    return this.http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/page/content?type=${PageInsertType}`, {
      pageId: pageId,
      pageSectionId: pageSectionId,
      pageType: pageType,
      pageContent: pageContent
    });
  }
  // Update workspace page section toggle options
  UpdateWorkspaceSecToggleOption(isToggle, pageSectionId, pageId) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/page/toggle`, {
      isToggle: isToggle,
      pageSectionId: pageSectionId,
      pageId: pageId
    });
  }
  // Update workspace page Cover imageUrl
  UpdateWorkspaceSecImage(imageUrl, pageId, pageSectionId) {
    return this.http.post(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/page/section-image`, {
      imageUrl: imageUrl,
      pageId: pageId,
      pageSectionId: pageSectionId
    });
  }
  // Update workspace page Cover imageSize
  UpdateWorkspaceSecImageSize(imgSize, pageId, pageSectionId) {
    return this.http.patch(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace/page/section-image`, {
      imgSize: imgSize,
      pageId: pageId,
      pageSectionId: pageSectionId
    });
  }
  // Delete a user workspace page
  deleteWorspacePage(pageId) {
    return this.http.delete(`${_environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/workspaces/user-workspace?pageId=${pageId}`);
  }
  // update page array
  updatePageArray(id, data) {
    const index = this.pages.findIndex(val => {
      return val._id === id;
    });
    this.pages.splice(index, 1, data);
  }
  // Delete the user Workspace page
  deleteWorkspacePage(id) {
    const index = this.pages.findIndex(val => {
      return val._id === id;
    });
    this.pages.splice(index, 1);
  }
  // Push createPage to array
  pushPage(data) {
    this.pages.push(data);
  }
  // ShowPages
  ShowPages() {
    return this.pages;
  }
}
UserWorkspaceService.ɵfac = function UserWorkspaceService_Factory(t) {
  return new (t || UserWorkspaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
UserWorkspaceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserWorkspaceService,
  factory: UserWorkspaceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9846:
/*!***************************************************!*\
  !*** ./src/app/service/workspace-tree.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkspaceTreeService": () => (/* binding */ WorkspaceTreeService)
/* harmony export */ });
/* harmony import */ var _home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateMethodInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateMethodInitSpec.js */ 7027);
/* harmony import */ var _home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 4482);
/* harmony import */ var _home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateMethodGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateMethodGet.js */ 1925);
/* harmony import */ var _home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 8758);
/* harmony import */ var _home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);






var _OrderArray = /*#__PURE__*/new WeakMap();
var _printAllNodes = /*#__PURE__*/new WeakSet();
class WorkspaceTreeService {
  constructor() {
    (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateMethodInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _printAllNodes);
    (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _OrderArray, {
      writable: true,
      value: void 0
    });
    (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _OrderArray, []);
    this.isToggleLevel = [];
    this.isToggleOpenLevel = [];
    this.root = [];
    this.toggleInc = 0;
  }
  ChangeDatatolevel() {
    const tree = new WorkspaceTreeService();
    (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateMethodGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(tree, _printAllNodes, _printAllNodes2).call(tree, this.root, '100%', 0);
    return (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tree, _OrderArray);
  }
}
function _printAllNodes2(root, level, pdfLevel) {
  for (const data of root) {
    const dataObj = {
      level: level,
      pdfLevel: pdfLevel,
      toggleInc: this.toggleInc,
      _id: data._id,
      type: data.type,
      imgPosition: data.imgPosition,
      content: data.content,
      isToggle: data.isToggle,
      childToggle: ''
    };
    if (this.isToggle) {
      const percentage = Number(level.split('%')[0]);
      if (percentage === this.isToggleLevel[this.isToggleLevel.length - 1] || percentage > this.isToggleLevel[this.isToggleLevel.length - 1]) {
        this.isToggleLevel.pop();
        this.isToggleOpenLevel.pop();
        if (percentage > this.isToggleLevel[0] || percentage === this.isToggleLevel[0]) {
          this.isToggleLevel.length = 0;
          this.isToggleOpenLevel.length = 0;
        }
        if (this.isToggleLevel.length === 0) {
          this.isToggle = false;
          this.toggleInc = 0;
        } else {
          this.toggleInc--;
        }
        dataObj.toggleInc = this.toggleInc;
      }
    }
    if (this.isToggleOpenLevel.length === 0) {
      dataObj.childToggle = 'null';
    } else {
      dataObj.childToggle = this.isToggleOpenLevel[this.isToggleOpenLevel.length - 1];
    }
    (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _OrderArray).push(dataObj);
    if (data.childNode.length > 0) {
      const percentage = Number(level.split('%')[0]);
      if (data.type === 'toggle') {
        this.isToggleLevel.push(percentage);
        this.isToggle = true;
        this.toggleInc++;
        if (data.isToggle) {
          this.isToggleOpenLevel.push('open');
        } else {
          this.isToggleOpenLevel.push('close');
        }
      }
      (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_classPrivateMethodGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _printAllNodes, _printAllNodes2).call(this, data.childNode, `${percentage - 5}%`, pdfLevel + 1);
    }
  }
}
WorkspaceTreeService.ɵfac = function WorkspaceTreeService_Factory(t) {
  return new (t || WorkspaceTreeService)();
};
WorkspaceTreeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: WorkspaceTreeService,
  factory: WorkspaceTreeService.ɵfac
});

/***/ }),

/***/ 1075:
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ 4307);
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ 65);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);















class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__.PickerModule, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_9__.EmojiModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.DragDropModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__.PickerModule, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_9__.EmojiModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.DragDropModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__.PickerModule, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_9__.EmojiModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.DragDropModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__.PickerModule, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_9__.EmojiModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.DragDropModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map