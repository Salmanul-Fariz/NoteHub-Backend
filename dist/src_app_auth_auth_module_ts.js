"use strict";
(self["webpackChunkNoteHub"] = self["webpackChunkNoteHub"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.module */ 1075);
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.routing */ 8860);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ 3267);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ 4309);
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify-email/verify-email.component */ 4825);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);









class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [{
        id: _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.GoogleLoginProvider.PROVIDER_ID,
        provider: new _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.GoogleLoginProvider('806091553721-2f7tgpbm558v0968l1p5csr0065o9s9b.apps.googleusercontent.com')
      }],
      onError: err => {
        console.error(err);
      }
    }
  }],
  imports: [_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _auth_routing__WEBPACK_IMPORTED_MODULE_1__.AuthRouting, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.SocialLoginModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent, _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__.VerifyEmailComponent],
    imports: [_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _auth_routing__WEBPACK_IMPORTED_MODULE_1__.AuthRouting, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.SocialLoginModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 8860:
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRouting": () => (/* binding */ AuthRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/authentication.guard */ 6924);
/* harmony import */ var _guards_verifyEmail_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/verifyEmail.guard */ 7603);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ 3267);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ 4309);
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify-email/verify-email.component */ 4825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: 'signup',
  component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent,
  canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard]
}, {
  path: 'signin',
  component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent,
  canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard]
}, {
  path: 'verify',
  component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__.VerifyEmailComponent,
  canActivate: [_guards_verifyEmail_guard__WEBPACK_IMPORTED_MODULE_1__.VerifyEmailGuard]
}];
class AuthRouting {}
AuthRouting.ɵfac = function AuthRouting_Factory(t) {
  return new (t || AuthRouting)();
};
AuthRouting.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AuthRouting
});
AuthRouting.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthRouting, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 3267:
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/authentication.service */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);











function SigninComponent_small_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Field is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_small_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must contain 4 letters !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SigninComponent_small_10_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SigninComponent_small_10_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.signinForm.get("usernameOrEmail").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.signinForm.get("usernameOrEmail").errors["minlength"]);
  }
}
function SigninComponent_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Incorrect email or username !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function SigninComponent_small_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Field is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_small_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Strong Password ! ,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_small_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must Contain atleast 1 uppercase !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_small_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must Contain atleast 1 lowerCase !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_small_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must Contain atleast 1 number !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_small_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must Contain special character !@#%& !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SigninComponent_small_20_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SigninComponent_small_20_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SigninComponent_small_20_span_3_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SigninComponent_small_20_span_4_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SigninComponent_small_20_span_5_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SigninComponent_small_20_span_6_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signinForm.get("password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signinForm.get("password").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signinForm.get("password").errors["upperCase"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signinForm.get("password").errors["lowerCase"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signinForm.get("password").errors["number"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signinForm.get("password").errors["special"]);
  }
}
function SigninComponent_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Incorrect Password !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function SigninComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Email already used for another account !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function SigninComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_p_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Progressing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SigninComponent_mat_spinner_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 21);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
  }
}
const _c0 = function () {
  return ["/auth/signup"];
};
class SigninComponent {
  constructor(socialService, authService, router) {
    this.socialService = socialService;
    this.authService = authService;
    this.router = router;
    this.hide = true;
    this.isLoading = false;
    this.passwordErr = false;
    this.userOrMailErr = false;
    this.googleServise = false;
    this.googleEmailExist = false;
  }
  ngOnInit() {
    // Form Setup
    this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      usernameOrEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(4)]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6), this.authService.validatePassword])
    });
    // Sigin With google responce
    this.googleSubscription = this.socialService.authState.subscribe(user => {
      if (this.googleServise) {
        this.isLoading = true;
        this.authService.signinWithGoogle(user).subscribe({
          next: response => {
            if (response.status === 'Email-Error') {
              this.googleEmailExist = true;
              // Remove the Validation Message From template
              setTimeout(() => {
                this.googleEmailExist = false;
              }, 1500);
            } else {
              this.isLoading = false;
              // Register Success
              localStorage.setItem('jwt', response.data.token);
              this.router.navigate(['/']);
            }
            this.isLoading = false;
          }
        });
      }
    });
    this.googleServise = true;
  }
  // Sigin With google
  signIn() {
    this.socialService.signIn(_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_3__.GoogleLoginProvider.PROVIDER_ID);
  }
  // Submit Form
  submit(formData) {
    this.isLoading = true;
    this.authService.signin(formData).subscribe({
      next: response => {
        if (response.status === 'Password-Error') {
          this.passwordErr = true;
        } else if (response.status === 'Username-Or-Email') {
          this.userOrMailErr = true;
        } else {
          this.isLoading = false;
          // Signin Success
          localStorage.setItem('jwt', response.data.token);
          this.router.navigate(['/']);
        }
        // Remove the Validation Message From template
        setTimeout(() => {
          this.passwordErr = false;
          this.userOrMailErr = false;
        }, 1500);
      }
    });
  }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) {
  return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_3__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
SigninComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SigninComponent,
  selectors: [["app-signin"]],
  decls: 36,
  vars: 16,
  consts: [[1, "bg-blue", "flex", "justify-center", "content-center", "items-center"], [1, "signBar", "py-8", "px-3", "sm:px-9", "w-10/12", "md:w-7/12", "lg:w-5/12"], [1, "flex", "justify-center", "w-full"], [1, "text-center"], [1, "mt-6", 3, "formGroup", "ngSubmit"], [1, "block", "mt-4"], ["for", "userName"], ["type", "text", "formControlName", "usernameOrEmail", "placeholder", "Enter your username or email", 1, "w-full", "mt-2", "h-10", "md:h-11", "authInput"], ["class", "block text-sm pt-2", 4, "ngIf"], [1, "relative"], ["formControlName", "password", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF ", 1, "w-full", "mt-2", "h-10", "md:h-11", "authInput", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 1, "hideButton", 3, "click"], [1, "orLine"], ["class", "text-sm mt-3 flex justify-center", 4, "ngIf"], [1, "w-full", "flex", "justify-center", "bg-blue", "py-4", "mt-7", 3, "disabled"], [4, "ngIf"], [3, "diameter", 4, "ngIf"], [1, "mt-5"], [3, "routerLink"], [1, "block", "text-sm", "pt-2"], [1, "text-sm", "mt-3", "flex", "justify-center"], [3, "diameter"]],
  template: function SigninComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_5_listener() {
        return ctx.submit(ctx.signinForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Username or Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SigninComponent_small_10_Template, 3, 2, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SigninComponent_small_11_Template, 3, 0, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5)(13, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SigninComponent_Template_span_click_17_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SigninComponent_small_20_Template, 7, 6, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SigninComponent_small_21_Template, 3, 0, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12)(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "OR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SigninComponent_small_25_Template, 3, 0, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SigninComponent_p_27_Template, 2, 0, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SigninComponent_p_28_Template, 2, 0, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SigninComponent_mat_spinner_29_Template, 1, 1, "mat-spinner", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17)(31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Not a Member ? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 18)(34, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Sign Up now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signinForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signinForm.get("usernameOrEmail").valid && ctx.signinForm.get("usernameOrEmail").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signinForm.get("usernameOrEmail").valid && ctx.userOrMailErr);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signinForm.get("password").valid && ctx.signinForm.get("password").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signinForm.get("usernameOrEmail").valid && ctx.passwordErr);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.googleEmailExist);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.signinForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 10px 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Regular';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 45px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.03em;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Regular';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  font-size: 16px;\n  padding: 10px;\n  caret-color: #303030;\n  outline: 0ch;\n  color: #303030;\n  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.25));\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-family: 'JosefinSans-Regular';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 17px;\n  line-height: 17px;\n  text-align: center;\n  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.25));\n\n  color: #ffffff;\n  align-items: center;\n  gap: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Regular';\n  font-size: 16px;\n  text-align: center;\n  color: #5c5c5c;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid rgb(248, 0, 0);\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: rgb(248, 0, 0);\n}\n\nbutton[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  background-color: #30343c;\n}\n\nbutton[_ngcontent-%COMP%]:disabled:hover, button[disabled][_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n}\n\n.orLine[_ngcontent-%COMP%] {\n  border: none;\n  border-top: solid;\n  border-width: 1px;\n  margin: 38px 0;\n  border-color: #c5c5c5;\n  position: relative;\n}\n\n.orLine[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 7px;\n  background-color: #dfdddd;\n}\n\n.signBar[_ngcontent-%COMP%] {\n  background-color: #dfdddd;\n  border-radius: 15px;\n  z-index: 10;\n}\n\n.authInput[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n}\n\n\n.hideButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 10px;\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osY0FBYztFQUNkLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxREFBcUQ7O0VBRXJELGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6InNpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1SZWd1bGFyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG59XG5cbmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1SZWd1bGFyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjYXJldC1jb2xvcjogIzMwMzAzMDtcbiAgb3V0bGluZTogMGNoO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtUmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcblxuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1SZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWM1YzVjO1xufVxuXG5jYW52YXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDgsIDAsIDApO1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiByZ2IoMjQ4LCAwLCAwKTtcbn1cblxuYnV0dG9uID4gcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5idXR0b246ZGlzYWJsZWQsXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzYztcbn1cblxuYnV0dG9uOmRpc2FibGVkOmhvdmVyLFxuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5vckxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgbWFyZ2luOiAzOHB4IDA7XG4gIGJvcmRlci1jb2xvcjogI2M1YzVjNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3JMaW5lID4gcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZGRkO1xufVxuXG4uc2lnbkJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYXV0aElucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogaGlkZSBidXR0b24gKi9cbi5oaWRlQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzIyMjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixjQUFjO0VBQ2QscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFEQUFxRDs7RUFFckQsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUEsb3NJQUFvc0kiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxubGFiZWwge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNhcmV0LWNvbG9yOiAjMzAzMDMwO1xuICBvdXRsaW5lOiAwY2g7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1SZWd1bGFyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xuXG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1YzVjNWM7XG59XG5cbmNhbnZhcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OCwgMCwgMCk7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6IHJnYigyNDgsIDAsIDApO1xufVxuXG5idXR0b24gPiBwIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCxcbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNDNjO1xufVxuXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIsXG5idXR0b25bZGlzYWJsZWRdOmhvdmVyIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm9yTGluZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBtYXJnaW46IDM4cHggMDtcbiAgYm9yZGVyLWNvbG9yOiAjYzVjNWM1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vckxpbmUgPiBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMCA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRkZGQ7XG59XG5cbi5zaWduQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGRkZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5hdXRoSW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBoaWRlIGJ1dHRvbiAqL1xuLmhpZGVCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjMjIyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4309:
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/authentication.service */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);











function SignupComponent_mat_spinner_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
  }
}
function SignupComponent_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 25);
  }
}
function SignupComponent_small_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Field is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must contain 4 letters !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must contain lowercase or numbers !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_small_13_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_small_13_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignupComponent_small_13_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("userName").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("userName").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("userName").errors["usernameStructure"]);
  }
}
function SignupComponent_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Username already exist !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function SignupComponent_small_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Field is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Valid email !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_small_19_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_small_19_span_2_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.signupForm.get("email").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.signupForm.get("email").errors["email"]);
  }
}
function SignupComponent_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Valid email !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email already Exist !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Strong Password ! ,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_30_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must Contain atleast 1 uppercase !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_30_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must Contain atleast 1 lowerCase !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_30_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must Contain atleast 1 number !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_30_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must Contain special character !@#%& !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_small_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_small_30_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_small_30_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignupComponent_small_30_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SignupComponent_small_30_span_4_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignupComponent_small_30_span_5_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SignupComponent_small_30_span_6_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.signupForm.get("password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.signupForm.get("password").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.signupForm.get("password").errors["upperCase"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.signupForm.get("password").errors["lowerCase"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.signupForm.get("password").errors["number"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.signupForm.get("password").errors["special"]);
  }
}
function SignupComponent_small_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 29)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Email already used for another account !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function SignupComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Progressing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_mat_spinner_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 30);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
  }
}
const _c0 = function () {
  return ["/auth/signin"];
};
class SignupComponent {
  constructor(socialService, authService, router) {
    this.socialService = socialService;
    this.authService = authService;
    this.router = router;
    this.hide = true;
    this.authEmailFail = false;
    this.authEmailExist = false;
    this.isLoading = false;
    this.isUserLoading = false;
    this.isUsernameExist = false;
    this.googleEmailExist = false;
    this.googleServise = false;
  }
  ngOnInit() {
    // Form Setup
    this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(4), this.authService.userNameValidator]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6), this.authService.validatePassword])
    });
    // Sigin With google responce
    this.googleSubscription = this.socialService.authState.subscribe(user => {
      if (this.googleServise) {
        this.isLoading = true;
        this.authService.signinWithGoogle(user).subscribe({
          next: response => {
            if (response.status === 'Email-Error') {
              this.googleEmailExist = true;
              // Remove the Validation Message From template
              setTimeout(() => {
                this.googleEmailExist = false;
              }, 1500);
            } else {
              // Register Success
              localStorage.setItem('jwt', response.data.token);
              this.router.navigate(['/']);
            }
            this.isLoading = false;
          }
        });
      }
    });
    this.googleServise = true;
  }
  // Sigin With google
  signIn() {
    this.socialService.signIn(_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_3__.GoogleLoginProvider.PROVIDER_ID);
  }
  // Check user name exist
  checkUserExit(event) {
    const value = event.target.value;
    if (value.length >= 4) {
      this.isUserLoading = true;
      this.authService.checkUsernameExist(value).subscribe({
        next: responce => {
          if (responce.status === 'Fail') {
            setTimeout(() => {
              this.isUserLoading = false;
              this.isUsernameExist = true;
            }, 500);
          } else {
            setTimeout(() => {
              this.isUserLoading = false;
              this.isUsernameExist = false;
            }, 500);
          }
          this.isLoading = false;
        }
      });
    }
  }
  // Form Submittion
  submit(formData) {
    this.isLoading = true;
    this.authService.signup(formData).subscribe({
      next: response => {
        if (response.status === 'Email-Error') {
          this.authEmailFail = true;
        } else if (response.status === 'Email-exist-Error') {
          this.authEmailExist = true;
        } else {
          this.isLoading = false;
          // Register Success
          localStorage.setItem('jwt', response.data.token);
          this.router.navigate(['/']);
        }
        // Remove the Validation Message From template
        setTimeout(() => {
          this.authEmailFail = false;
          this.authEmailExist = false;
        }, 1500);
      }
    });
  }
  ngOnDestroy() {
    this.googleSubscription.unsubscribe();
  }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) {
  return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_3__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
SignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SignupComponent,
  selectors: [["app-signup"]],
  decls: 45,
  vars: 20,
  consts: [[1, "bg-blue", "flex", "justify-center", "content-center", "items-center"], [1, "signBar", "py-8", "px-3", "sm:px-9", "w-10/12", "md:w-7/12", "lg:w-5/12"], [1, "flex", "justify-center", "w-full"], [1, "text-center"], [1, "mt-6", 3, "formGroup", "ngSubmit"], [1, "block", "mt-4"], ["for", "userName"], ["type", "text", "formControlName", "userName", "placeholder", "Enter your username", 1, "w-full", "mt-2", "h-10", "md:h-11", "authInput", 3, "input"], [1, "w-full", "relative"], ["class", "userSpinner", 3, "diameter", 4, "ngIf"], ["class", "userSpinnerTick text-success fa-solid fa-check", 4, "ngIf"], ["class", "block text-sm pt-2", 4, "ngIf"], ["for", "email"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "w-full", "mt-2", "h-10", "md:h-11", "authInput"], [4, "ngIf"], [1, "relative"], ["formControlName", "password", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF ", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", 1, "w-full", "mt-2", "h-10", "md:h-11", "authInput", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 1, "hideButton", 3, "click"], [1, "orLine"], ["class", "text-sm mt-3 flex justify-center", 4, "ngIf"], [1, "w-full", "flex", "justify-center", "bg-blue", "py-4", "mt-10", 3, "disabled"], [3, "diameter", 4, "ngIf"], [1, "mt-5"], [3, "routerLink"], [1, "userSpinner", 3, "diameter"], [1, "userSpinnerTick", "text-success", "fa-solid", "fa-check"], [1, "block", "text-sm", "pt-2"], ["spanName", "", 4, "ngIf"], ["spanName", ""], [1, "text-sm", "mt-3", "flex", "justify-center"], [3, "diameter"]],
  template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_5_listener() {
        return ctx.submit(ctx.signupForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SignupComponent_Template_input_input_9_listener($event) {
        return ctx.checkUserExit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SignupComponent_mat_spinner_11_Template, 1, 1, "mat-spinner", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignupComponent_i_12_Template, 1, 0, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SignupComponent_small_13_Template, 4, 3, "small", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SignupComponent_small_14_Template, 3, 0, "small", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5)(16, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SignupComponent_small_19_Template, 3, 2, "small", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SignupComponent_small_20_Template, 2, 0, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SignupComponent_small_21_Template, 2, 0, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5)(23, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_span_click_27_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SignupComponent_small_30_Template, 7, 6, "small", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18)(32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "OR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SignupComponent_small_34_Template, 3, 0, "small", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SignupComponent_p_36_Template, 2, 0, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, SignupComponent_p_37_Template, 2, 0, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SignupComponent_mat_spinner_38_Template, 1, 1, "mat-spinner", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 22)(40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Have an account ? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 23)(43, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Sign In now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signupForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUsernameExist && !ctx.isUserLoading && ctx.signupForm.get("userName").valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("userName").valid && ctx.signupForm.get("userName").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signupForm.get("userName").valid && ctx.isUsernameExist);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("email").valid && ctx.signupForm.get("email").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authEmailFail && ctx.signupForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authEmailExist && ctx.signupForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("password").valid && ctx.signupForm.get("password").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.googleEmailExist);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 10px 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Regular';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 45px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.03em;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Regular';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  font-size: 16px;\n  padding: 10px;\n  caret-color: #303030;\n  outline: 0ch;\n  color: #303030;\n  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.25));\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-family: 'JosefinSans-Regular';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 17px;\n  line-height: 17px;\n  text-align: center;\n  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.25));\n  align-items: center;\n  gap: 10px;\n  color: #ffffff;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Regular';\n  font-size: 16px;\n  text-align: center;\n  color: #5c5c5c;\n}\n\nspan[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  display: block;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid rgb(248, 0, 0);\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: rgb(248, 0, 0);\n}\n\nbutton[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  background-color: #30343c;\n}\n\nbutton[_ngcontent-%COMP%]:disabled:hover, button[disabled][_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n}\n\n.userSpinnerTick[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: -36px;\n  font-size: 26px;\n}\n\n.userSpinner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: -38px;\n}\n\n.orLine[_ngcontent-%COMP%] {\n  border: none;\n  border-top: solid;\n  border-width: 1px;\n  margin: 38px 0;\n  border-color: #c5c5c5;\n  position: relative;\n}\n\n.orLine[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 7px;\n  background-color: #dfdddd;\n}\n\n.signBar[_ngcontent-%COMP%] {\n  background-color: #dfdddd;\n  border-radius: 15px;\n  z-index: 1;\n}\n\n.signinGoogleBar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  margin-top: 30px;\n\n  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.25));\n}\n\n.signinGoogleBar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.googleLogo[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 6px 0px;\n  margin: 0;\n}\n\n.authInput[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n}\n\n\n.hideButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 10px;\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osY0FBYztFQUNkLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjs7RUFFaEIscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxubGFiZWwge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNhcmV0LWNvbG9yOiAjMzAzMDMwO1xuICBvdXRsaW5lOiAwY2g7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1SZWd1bGFyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1SZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWM1YzVjO1xufVxuXG5zcGFuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuY2FudmFzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDgsIDAsIDApO1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiByZ2IoMjQ4LCAwLCAwKTtcbn1cblxuYnV0dG9uID4gcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5idXR0b246ZGlzYWJsZWQsXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzYztcbn1cblxuYnV0dG9uOmRpc2FibGVkOmhvdmVyLFxuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi51c2VyU3Bpbm5lclRpY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IC0zNnB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi51c2VyU3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogLTM4cHg7XG59XG5cbi5vckxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgbWFyZ2luOiAzOHB4IDA7XG4gIGJvcmRlci1jb2xvcjogI2M1YzVjNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3JMaW5lID4gcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZGRkO1xufVxuXG4uc2lnbkJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zaWduaW5Hb29nbGVCYXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xufVxuXG4uc2lnbmluR29vZ2xlQmFyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ29vZ2xlTG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogNnB4IDBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXV0aElucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogaGlkZSBidXR0b24gKi9cbi5oaWRlQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzIyMjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixjQUFjO0VBQ2QscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFEQUFxRDtFQUNyRCxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCOztFQUVoQixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQSw0b0tBQTRvSyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtUmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtUmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY2FyZXQtY29sb3I6ICMzMDMwMzA7XG4gIG91dGxpbmU6IDBjaDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1YzVjNWM7XG59XG5cbnNwYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5jYW52YXMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OCwgMCwgMCk7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6IHJnYigyNDgsIDAsIDApO1xufVxuXG5idXR0b24gPiBwIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCxcbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNDNjO1xufVxuXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIsXG5idXR0b25bZGlzYWJsZWRdOmhvdmVyIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnVzZXJTcGlubmVyVGljayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogLTM2cHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLnVzZXJTcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAtMzhweDtcbn1cblxuLm9yTGluZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBtYXJnaW46IDM4cHggMDtcbiAgYm9yZGVyLWNvbG9yOiAjYzVjNWM1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vckxpbmUgPiBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMCA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRkZGQ7XG59XG5cbi5zaWduQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGRkZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnNpZ25pbkdvb2dsZUJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG59XG5cbi5zaWduaW5Hb29nbGVCYXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5nb29nbGVMb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiA2cHggMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5hdXRoSW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBoaWRlIGJ1dHRvbiAqL1xuLmhpZGVCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjMjIyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4825:
/*!*************************************************************!*\
  !*** ./src/app/auth/verify-email/verify-email.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailComponent": () => (/* binding */ VerifyEmailComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/authentication.service */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class VerifyEmailComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    // Auto Checking
    const sendIntervalRequest = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      const intervel = setInterval(() => {
        this.authService.verifyEmailVerification(localStorage.getItem('jwt')).subscribe({
          next: response => {
            if (response.data === 'Verify') {
              localStorage.removeItem('verify');
              this.router.navigate(['/']);
              stopIntervel();
            }
            if (response.data === 'Delete') {
              localStorage.clear();
              this.router.navigate(['/auth/signup']);
              stopIntervel();
            }
            if (response.data === 'token-expired') {
              localStorage.clear();
              this.router.navigate(['/auth/signup']);
              stopIntervel();
            }
          }
        });
      }, 4000);
      function stopIntervel() {
        clearInterval(intervel);
      }
    });
    this.sendIntervalRequest = sendIntervalRequest.subscribe();
  }
  ngOnDestroy() {
    this.sendIntervalRequest.unsubscribe();
  }
}
VerifyEmailComponent.ɵfac = function VerifyEmailComponent_Factory(t) {
  return new (t || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
VerifyEmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: VerifyEmailComponent,
  selectors: [["app-verify-email"]],
  decls: 6,
  vars: 0,
  consts: [[1, "bg-blue", "py-52", "md:py-60", "flex", "justify-center", "align-center", "content-center", "h-auto"], [1, "w-10/12", "py-20", "px-20", "sm:w-6/12", "md:w-5/12"], [1, "text-center", "text-2xl"], [1, "mt-2", "text-center", "text-md"]],
  template: function VerifyEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Verify Your Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Check your mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 15px;\n  filter: (2px 2px 10px rgba(0, 0, 0, 0.25));\n  font-family: JosefinSans-SemiBold;\n}\n\nsection[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZpbHRlcjogKDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcbiAgZm9udC1mYW1pbHk6IEpvc2VmaW5TYW5zLVNlbWlCb2xkO1xufVxuXG5zZWN0aW9uIHtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsb2xCQUFvbEIiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZmlsdGVyOiAoMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xuICBmb250LWZhbWlseTogSm9zZWZpblNhbnMtU2VtaUJvbGQ7XG59XG5cbnNlY3Rpb24ge1xuICB6LWluZGV4OiAxO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7367:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/AsyncSubject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSubject": () => (/* binding */ AsyncSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 228);

class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor() {
    super(...arguments);
    this._value = null;
    this._hasValue = false;
    this._isComplete = false;
  }
  _checkFinalizedStatuses(subscriber) {
    const {
      hasError,
      _hasValue,
      _value,
      thrownError,
      isStopped,
      _isComplete
    } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped || _isComplete) {
      _hasValue && subscriber.next(_value);
      subscriber.complete();
    }
  }
  next(value) {
    if (!this.isStopped) {
      this._value = value;
      this._hasValue = true;
    }
  }
  complete() {
    const {
      _hasValue,
      _value,
      _isComplete
    } = this;
    if (!_isComplete) {
      this._isComplete = true;
      _hasValue && super.next(_value);
      super.complete();
    }
  }
}

/***/ }),

/***/ 3218:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@abacritt/angularx-social-login/fesm2020/abacritt-angularx-social-login.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmazonLoginProvider": () => (/* binding */ AmazonLoginProvider),
/* harmony export */   "BaseLoginProvider": () => (/* binding */ BaseLoginProvider),
/* harmony export */   "DummyLoginProvider": () => (/* binding */ DummyLoginProvider),
/* harmony export */   "FacebookLoginProvider": () => (/* binding */ FacebookLoginProvider),
/* harmony export */   "GoogleLoginProvider": () => (/* binding */ GoogleLoginProvider),
/* harmony export */   "GoogleSigninButtonDirective": () => (/* binding */ GoogleSigninButtonDirective),
/* harmony export */   "MicrosoftLoginProvider": () => (/* binding */ MicrosoftLoginProvider),
/* harmony export */   "SocialAuthService": () => (/* binding */ SocialAuthService),
/* harmony export */   "SocialLoginModule": () => (/* binding */ SocialLoginModule),
/* harmony export */   "SocialUser": () => (/* binding */ SocialUser),
/* harmony export */   "VKLoginProvider": () => (/* binding */ VKLoginProvider)
/* harmony export */ });
/* harmony import */ var _home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4437);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);





class BaseLoginProvider {
  constructor() {}
  loadScript(id, src, onload, parentElement = null) {
    // get document if platform is only browser
    if (typeof document !== 'undefined' && !document.getElementById(id)) {
      let signInJS = document.createElement('script');
      signInJS.async = true;
      signInJS.src = src;
      signInJS.onload = onload;
      if (!parentElement) {
        parentElement = document.head;
      }
      parentElement.appendChild(signInJS);
    }
  }
}
class SocialUser {}
const defaultInitOptions = {
  oneTapEnabled: true
};
class GoogleLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions) {
    super();
    this.clientId = clientId;
    this.initOptions = initOptions;
    this.changeUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._socialUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this._accessToken = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this._receivedAccessToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.initOptions = {
      ...defaultInitOptions,
      ...this.initOptions
    };
    // emit changeUser events but skip initial value from behaviorSubject
    this._socialUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.skip)(1)).subscribe(this.changeUser);
    // emit receivedAccessToken but skip initial value from behaviorSubject
    this._accessToken.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.skip)(1)).subscribe(this._receivedAccessToken);
  }
  initialize(autoLogin) {
    return new Promise((resolve, reject) => {
      try {
        this.loadScript(GoogleLoginProvider.PROVIDER_ID, 'https://accounts.google.com/gsi/client', () => {
          google.accounts.id.initialize({
            client_id: this.clientId,
            auto_select: autoLogin,
            callback: ({
              credential
            }) => {
              const socialUser = this.createSocialUser(credential);
              this._socialUser.next(socialUser);
            },
            prompt_parent_id: this.initOptions?.prompt_parent_id,
            itp_support: this.initOptions.oneTapEnabled
          });
          if (this.initOptions.oneTapEnabled) {
            this._socialUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(user => user === null)).subscribe(() => google.accounts.id.prompt(console.debug));
          }
          if (this.initOptions.scopes) {
            const scope = this.initOptions.scopes instanceof Array ? this.initOptions.scopes.filter(s => s).join(' ') : this.initOptions.scopes;
            this._tokenClient = google.accounts.oauth2.initTokenClient({
              client_id: this.clientId,
              scope,
              prompt: this.initOptions.prompt,
              callback: tokenResponse => {
                if (tokenResponse.error) {
                  this._accessToken.error({
                    code: tokenResponse.error,
                    description: tokenResponse.error_description,
                    uri: tokenResponse.error_uri
                  });
                } else {
                  this._accessToken.next(tokenResponse.access_token);
                }
              }
            });
          }
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus() {
    return new Promise((resolve, reject) => {
      if (this._socialUser.value) {
        resolve(this._socialUser.value);
      } else {
        reject(`No user is currently logged in with ${GoogleLoginProvider.PROVIDER_ID}`);
      }
    });
  }
  refreshToken() {
    return new Promise((resolve, reject) => {
      google.accounts.id.revoke(this._socialUser.value.id, response => {
        if (response.error) reject(response.error);else resolve(this._socialUser.value);
      });
    });
  }
  getAccessToken() {
    return new Promise((resolve, reject) => {
      if (!this._tokenClient) {
        if (this._socialUser.value) {
          reject('No token client was instantiated, you should specify some scopes.');
        } else {
          reject('You should be logged-in first.');
        }
      } else {
        this._tokenClient.requestAccessToken({
          hint: this._socialUser.value?.email
        });
        this._receivedAccessToken.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(resolve);
      }
    });
  }
  revokeAccessToken() {
    return new Promise((resolve, reject) => {
      if (!this._tokenClient) {
        reject('No token client was instantiated, you should specify some scopes.');
      } else if (!this._accessToken.value) {
        reject('No access token to revoke');
      } else {
        google.accounts.oauth2.revoke(this._accessToken.value, () => {
          this._accessToken.next(null);
          resolve();
        });
      }
    });
  }
  signIn() {
    return Promise.reject('You should not call this method directly for Google, use "<asl-google-signin-button>" wrapper ' + 'or generate the button yourself with "google.accounts.id.renderButton()" ' + '(https://developers.google.com/identity/gsi/web/guides/display-button#javascript)');
  }
  signOut() {
    var _this = this;
    return (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      google.accounts.id.disableAutoSelect();
      _this._socialUser.next(null);
    })();
  }
  createSocialUser(idToken) {
    const user = new SocialUser();
    user.idToken = idToken;
    const payload = this.decodeJwt(idToken);
    user.id = payload.sub;
    user.name = payload.name;
    user.email = payload.email;
    user.photoUrl = payload.picture;
    user.firstName = payload['given_name'];
    user.lastName = payload['family_name'];
    return user;
  }
  decodeJwt(idToken) {
    const base64Url = idToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(window.atob(base64).split("").map(function (c) {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(jsonPayload);
  }
}
GoogleLoginProvider.PROVIDER_ID = 'GOOGLE';

/**
 * The service encapsulating the social login functionality. Exposes methods like
 * `signIn`, `signOut`. Also, exposes an `authState` `Observable` that one can
 * subscribe to get the current logged in user information.
 *
 * @dynamic
 */
class SocialAuthService {
  /**
   * @param config A `SocialAuthServiceConfig` object or a `Promise` that resolves to a `SocialAuthServiceConfig` object
   */
  constructor(config, _ngZone, _injector) {
    this._ngZone = _ngZone;
    this._injector = _injector;
    this.providers = new Map();
    this.autoLogin = false;
    this._user = null;
    this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_6__.ReplaySubject(1);
    /* Consider making this an enum comprising LOADING, LOADED, FAILED etc. */
    this.initialized = false;
    this._initState = new rxjs__WEBPACK_IMPORTED_MODULE_7__.AsyncSubject();
    if (config instanceof Promise) {
      config.then(config => {
        this.initialize(config);
      });
    } else {
      this.initialize(config);
    }
  }
  /** An `Observable` that one can subscribe to get the current logged in user information */
  get authState() {
    return this._authState.asObservable();
  }
  /** An `Observable` to communicate the readiness of the service and associated login providers */
  get initState() {
    return this._initState.asObservable();
  }
  initialize(config) {
    this.autoLogin = config.autoLogin !== undefined ? config.autoLogin : false;
    const {
      onError = console.error
    } = config;
    config.providers.forEach(item => {
      this.providers.set(item.id, 'prototype' in item.provider ? this._injector.get(item.provider) : item.provider);
    });
    Promise.all(Array.from(this.providers.values()).map(provider => provider.initialize(this.autoLogin))).then(() => {
      if (this.autoLogin) {
        const loginStatusPromises = [];
        let loggedIn = false;
        this.providers.forEach((provider, key) => {
          const promise = provider.getLoginStatus();
          loginStatusPromises.push(promise);
          promise.then(user => {
            this.setUser(user, key);
            loggedIn = true;
          }).catch(console.debug);
        });
        Promise.all(loginStatusPromises).catch(() => {
          if (!loggedIn) {
            this._user = null;
            this._authState.next(null);
          }
        });
      }
      this.providers.forEach((provider, key) => {
        if ((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.isObservable)(provider.changeUser)) {
          provider.changeUser.subscribe(user => {
            this._ngZone.run(() => {
              this.setUser(user, key);
            });
          });
        }
      });
    }).catch(error => {
      onError(error);
    }).finally(() => {
      this.initialized = true;
      this._initState.next(this.initialized);
      this._initState.complete();
    });
  }
  getAccessToken(providerId) {
    var _this2 = this;
    return (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const providerObject = _this2.providers.get(providerId);
      if (!_this2.initialized) {
        throw SocialAuthService.ERR_NOT_INITIALIZED;
      } else if (!providerObject) {
        throw SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND;
      } else if (!(providerObject instanceof GoogleLoginProvider)) {
        throw SocialAuthService.ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN;
      }
      return yield providerObject.getAccessToken();
    })();
  }
  refreshAuthToken(providerId) {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject(SocialAuthService.ERR_NOT_INITIALIZED);
      } else {
        const providerObject = this.providers.get(providerId);
        if (providerObject) {
          if (typeof providerObject.refreshToken !== 'function') {
            reject(SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);
          } else {
            providerObject.refreshToken().then(user => {
              this.setUser(user, providerId);
              resolve();
            }).catch(err => {
              reject(err);
            });
          }
        } else {
          reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
        }
      }
    });
  }
  refreshAccessToken(providerId) {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject(SocialAuthService.ERR_NOT_INITIALIZED);
      } else if (providerId !== GoogleLoginProvider.PROVIDER_ID) {
        reject(SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);
      } else {
        const providerObject = this.providers.get(providerId);
        if (providerObject instanceof GoogleLoginProvider) {
          providerObject.revokeAccessToken().then(resolve).catch(reject);
        } else {
          reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
        }
      }
    });
  }
  /**
   * A method used to sign in a user with a specific `LoginProvider`.
   *
   * @param providerId Id with which the `LoginProvider` has been registered with the service
   * @param signInOptions Optional `LoginProvider` specific arguments
   * @returns A `Promise` that resolves to the authenticated user information
   */
  signIn(providerId, signInOptions) {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject(SocialAuthService.ERR_NOT_INITIALIZED);
      } else {
        let providerObject = this.providers.get(providerId);
        if (providerObject) {
          providerObject.signIn(signInOptions).then(user => {
            this.setUser(user, providerId);
            resolve(user);
          }).catch(err => {
            reject(err);
          });
        } else {
          reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
        }
      }
    });
  }
  /**
   * A method used to sign out the currently loggen in user.
   *
   * @param revoke Optional parameter to specify whether a hard sign out is to be performed
   * @returns A `Promise` that resolves if the operation is successful, rejects otherwise
   */
  signOut(revoke = false) {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject(SocialAuthService.ERR_NOT_INITIALIZED);
      } else if (!this._user) {
        reject(SocialAuthService.ERR_NOT_LOGGED_IN);
      } else {
        let providerId = this._user.provider;
        let providerObject = this.providers.get(providerId);
        if (providerObject) {
          providerObject.signOut(revoke).then(() => {
            resolve();
            this.setUser(null);
          }).catch(err => {
            reject(err);
          });
        } else {
          reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
        }
      }
    });
  }
  setUser(user, id) {
    if (user && id) user.provider = id;
    this._user = user;
    this._authState.next(user);
  }
}
SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
SocialAuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
SocialAuthService.ERR_NOT_INITIALIZED = 'Login providers not ready yet. Are there errors on your console?';
SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN = 'Chosen login provider is not supported for refreshing a token';
SocialAuthService.ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN = 'Chosen login provider is not supported for getting an access token';
SocialAuthService.ɵfac = function SocialAuthService_Factory(t) {
  return new (t || SocialAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('SocialAuthServiceConfig'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
SocialAuthService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SocialAuthService,
  factory: SocialAuthService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocialAuthService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: ['SocialAuthServiceConfig']
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }];
  }, null);
})();
class GoogleSigninButtonDirective {
  constructor(el, socialAuthService) {
    this.type = 'icon';
    this.size = 'medium';
    this.text = 'signin_with';
    this.shape = 'rectangular';
    this.theme = 'outline';
    this.logo_alignment = 'left';
    this.width = '';
    this.locale = '';
    socialAuthService.initState.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => {
      Promise.resolve(this.width).then(value => {
        if (value > '400' || value < '200' && value != '') {
          Promise.reject('Please note .. max-width 400 , min-width 200 ' + '(https://developers.google.com/identity/gsi/web/tools/configurator)');
        } else {
          google.accounts.id.renderButton(el.nativeElement, {
            type: this.type,
            size: this.size,
            text: this.text,
            width: this.width,
            shape: this.shape,
            theme: this.theme,
            logo_alignment: this.logo_alignment,
            locale: this.locale
          });
        }
      });
    });
  }
}
GoogleSigninButtonDirective.ɵfac = function GoogleSigninButtonDirective_Factory(t) {
  return new (t || GoogleSigninButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SocialAuthService));
};
GoogleSigninButtonDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GoogleSigninButtonDirective,
  selectors: [["asl-google-signin-button"]],
  inputs: {
    type: "type",
    size: "size",
    text: "text",
    shape: "shape",
    theme: "theme",
    logo_alignment: "logo_alignment",
    width: "width",
    locale: "locale"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleSigninButtonDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: 'asl-google-signin-button'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: SocialAuthService
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    shape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    logo_alignment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The main module of angularx-social-login library.
 */
class SocialLoginModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('SocialLoginModule is already loaded. Import it in the AppModule only');
    }
  }
  static initialize(config) {
    return {
      ngModule: SocialLoginModule,
      providers: [SocialAuthService, {
        provide: 'SocialAuthServiceConfig',
        useValue: config
      }]
    };
  }
}
SocialLoginModule.ɵfac = function SocialLoginModule_Factory(t) {
  return new (t || SocialLoginModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SocialLoginModule, 12));
};
SocialLoginModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SocialLoginModule
});
SocialLoginModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [SocialAuthService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocialLoginModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [GoogleSigninButtonDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule],
      providers: [SocialAuthService],
      exports: [GoogleSigninButtonDirective]
    }]
  }], function () {
    return [{
      type: SocialLoginModule,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
      }]
    }];
  }, null);
})();

// Simulates login / logout without actually requiring an Internet connection.
//
// Useful for certain development situations.
//
// For example, if you want to simulate the greatest football referee England has ever produced:
//
//  const dummyUser: SocialUser = {
//     id: '0123456789',
//     name: 'Howard Webb',
//     email: 'howard@webb.com',
//     firstName: 'Howard',
//     lastName: 'Webb',
//     authToken: 'dummyAuthToken',
//     photoUrl: 'https://en.wikipedia.org/wiki/Howard_Webb#/media/File:Howard_Webb_march11.jpg',
//     provider: 'DUMMY',
//     idToken: 'dummyIdToken',
//     authorizationCode: 'dummyAuthCode'
// };
//
//  let config = new AuthServiceConfig([
//  { ... },
//  {
//       id: DummyLoginProvider.PROVIDER_ID,
//       provider: new DummyLoginProvider(dummyUser)  // Pass your user into the constructor
//   },
//  { ... }
//  ]);
class DummyLoginProvider extends BaseLoginProvider {
  constructor(dummy) {
    super();
    if (dummy) {
      this.dummy = dummy;
    } else {
      this.dummy = DummyLoginProvider.DEFAULT_USER;
    }
    // Start not logged in
    this.loggedIn = false;
  }
  getLoginStatus() {
    return new Promise((resolve, reject) => {
      if (this.loggedIn) {
        resolve(this.dummy);
      } else {
        reject('No user is currently logged in.');
      }
    });
  }
  initialize() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  signIn() {
    return new Promise((resolve, reject) => {
      this.loggedIn = true;
      resolve(this.dummy);
    });
  }
  signOut(revoke) {
    return new Promise((resolve, reject) => {
      this.loggedIn = false;
      resolve();
    });
  }
}
DummyLoginProvider.PROVIDER_ID = 'DUMMY';
DummyLoginProvider.DEFAULT_USER = {
  id: '1234567890',
  name: 'Mickey Mouse',
  email: 'mickey@mouse.com',
  firstName: 'Mickey',
  lastName: 'Mouse',
  authToken: 'dummyAuthToken',
  photoUrl: 'https://en.wikipedia.org/wiki/File:Mickey_Mouse.png',
  provider: 'DUMMY',
  idToken: 'dummyIdToken',
  authorizationCode: 'dummyAuthCode',
  response: {}
};
class FacebookLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions = {}) {
    super();
    this.clientId = clientId;
    this.requestOptions = {
      scope: 'email,public_profile',
      locale: 'en_US',
      fields: 'name,email,picture,first_name,last_name',
      version: 'v10.0'
    };
    this.requestOptions = {
      ...this.requestOptions,
      ...initOptions
    };
  }
  initialize() {
    return new Promise((resolve, reject) => {
      try {
        this.loadScript(FacebookLoginProvider.PROVIDER_ID, `//connect.facebook.net/${this.requestOptions.locale}/sdk.js`, () => {
          FB.init({
            appId: this.clientId,
            autoLogAppEvents: true,
            cookie: true,
            xfbml: true,
            version: this.requestOptions.version
          });
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus() {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          let authResponse = response.authResponse;
          FB.api(`/me?fields=${this.requestOptions.fields}`, fbUser => {
            let user = new SocialUser();
            user.id = fbUser.id;
            user.name = fbUser.name;
            user.email = fbUser.email;
            user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal&access_token=' + authResponse.accessToken;
            user.firstName = fbUser.first_name;
            user.lastName = fbUser.last_name;
            user.authToken = authResponse.accessToken;
            user.response = fbUser;
            resolve(user);
          });
        } else {
          reject(`No user is currently logged in with ${FacebookLoginProvider.PROVIDER_ID}`);
        }
      });
    });
  }
  signIn(signInOptions) {
    const options = {
      ...this.requestOptions,
      ...signInOptions
    };
    return new Promise((resolve, reject) => {
      FB.login(response => {
        if (response.authResponse) {
          let authResponse = response.authResponse;
          FB.api(`/me?fields=${options.fields}`, fbUser => {
            let user = new SocialUser();
            user.id = fbUser.id;
            user.name = fbUser.name;
            user.email = fbUser.email;
            user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
            user.firstName = fbUser.first_name;
            user.lastName = fbUser.last_name;
            user.authToken = authResponse.accessToken;
            user.response = fbUser;
            resolve(user);
          });
        } else {
          reject('User cancelled login or did not fully authorize.');
        }
      }, options);
    });
  }
  signOut() {
    return new Promise((resolve, reject) => {
      FB.logout(response => {
        resolve();
      });
    });
  }
}
FacebookLoginProvider.PROVIDER_ID = 'FACEBOOK';
class AmazonLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions = {
    scope: 'profile',
    scope_data: {
      profile: {
        essential: false
      }
    },
    redirect_uri: location.origin
  }) {
    super();
    this.clientId = clientId;
    this.initOptions = initOptions;
  }
  initialize() {
    let amazonRoot = null;
    if (document) {
      amazonRoot = document.createElement('div');
      amazonRoot.id = 'amazon-root';
      document.body.appendChild(amazonRoot);
    }
    window.onAmazonLoginReady = () => {
      amazon.Login.setClientId(this.clientId);
    };
    return new Promise((resolve, reject) => {
      try {
        this.loadScript('amazon-login-sdk', 'https://assets.loginwithamazon.com/sdk/na/login1.js', () => {
          resolve();
        }, amazonRoot);
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus() {
    return new Promise((resolve, reject) => {
      let token = this.retrieveToken();
      if (token) {
        amazon.Login.retrieveProfile(token, response => {
          if (response.success) {
            let user = new SocialUser();
            user.id = response.profile.CustomerId;
            user.name = response.profile.Name;
            user.email = response.profile.PrimaryEmail;
            user.response = response.profile;
            resolve(user);
          } else {
            reject(response.error);
          }
        });
      } else {
        reject(`No user is currently logged in with ${AmazonLoginProvider.PROVIDER_ID}`);
      }
    });
  }
  signIn(signInOptions) {
    const options = {
      ...this.initOptions,
      ...signInOptions
    };
    return new Promise((resolve, reject) => {
      amazon.Login.authorize(options, authResponse => {
        if (authResponse.error) {
          reject(authResponse.error);
        } else {
          amazon.Login.retrieveProfile(authResponse.access_token, response => {
            let user = new SocialUser();
            user.id = response.profile.CustomerId;
            user.name = response.profile.Name;
            user.email = response.profile.PrimaryEmail;
            user.authToken = authResponse.access_token;
            user.response = response.profile;
            this.persistToken(authResponse.access_token);
            resolve(user);
          });
        }
      });
    });
  }
  signOut() {
    return new Promise((resolve, reject) => {
      try {
        amazon.Login.logout();
        this.clearToken();
        resolve();
      } catch (err) {
        reject(err.message);
      }
    });
  }
  persistToken(token) {
    localStorage.setItem(`${AmazonLoginProvider.PROVIDER_ID}_token`, token);
  }
  retrieveToken() {
    return localStorage.getItem(`${AmazonLoginProvider.PROVIDER_ID}_token`);
  }
  clearToken() {
    localStorage.removeItem(`${AmazonLoginProvider.PROVIDER_ID}_token`);
  }
}
AmazonLoginProvider.PROVIDER_ID = 'AMAZON';
class VKLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions = {
    fields: 'photo_max,contacts',
    version: '5.124'
  }) {
    super();
    this.clientId = clientId;
    this.initOptions = initOptions;
    this.VK_API_URL = '//vk.com/js/api/openapi.js';
    this.VK_API_GET_USER = 'users.get';
  }
  initialize() {
    return new Promise((resolve, reject) => {
      try {
        this.loadScript(VKLoginProvider.PROVIDER_ID, this.VK_API_URL, () => {
          VK.init({
            apiId: this.clientId
          });
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus() {
    return new Promise((resolve, reject) => this.getLoginStatusInternal(resolve, reject));
  }
  signIn() {
    return new Promise((resolve, reject) => this.signInInternal(resolve, reject));
  }
  signOut() {
    return new Promise((resolve, reject) => {
      VK.Auth.logout(response => {
        resolve();
      });
    });
  }
  signInInternal(resolve, reject) {
    VK.Auth.login(loginResponse => {
      if (loginResponse.status === 'connected') {
        this.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
      }
    });
  }
  getUser(userId, token, resolve) {
    VK.Api.call(this.VK_API_GET_USER, {
      user_id: userId,
      fields: this.initOptions.fields,
      v: this.initOptions.version
    }, userResponse => {
      resolve(this.createUser(Object.assign({}, {
        token
      }, userResponse.response[0])));
    });
  }
  getLoginStatusInternal(resolve, reject) {
    VK.Auth.getLoginStatus(loginResponse => {
      if (loginResponse.status === 'connected') {
        this.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
      }
    });
  }
  createUser(response) {
    const user = new SocialUser();
    user.id = response.id;
    user.name = `${response.first_name} ${response.last_name}`;
    user.photoUrl = response.photo_max;
    user.authToken = response.token;
    return user;
  }
}
VKLoginProvider.PROVIDER_ID = 'VK';

/**
 * Protocol modes supported by MSAL.
 */
var ProtocolMode;
(function (ProtocolMode) {
  ProtocolMode["AAD"] = "AAD";
  ProtocolMode["OIDC"] = "OIDC";
})(ProtocolMode || (ProtocolMode = {}));
const COMMON_AUTHORITY = 'https://login.microsoftonline.com/common/';
/**
 * Microsoft Authentication using MSAL v2: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser
 */
class MicrosoftLoginProvider extends BaseLoginProvider {
  constructor(clientId, initOptions) {
    super();
    this.clientId = clientId;
    this.initOptions = {
      authority: COMMON_AUTHORITY,
      scopes: ['openid', 'email', 'profile', 'User.Read'],
      knownAuthorities: [],
      protocolMode: ProtocolMode.AAD,
      clientCapabilities: [],
      cacheLocation: 'sessionStorage'
    };
    this.initOptions = {
      ...this.initOptions,
      ...initOptions
    };
  }
  initialize() {
    return new Promise((resolve, reject) => {
      this.loadScript(MicrosoftLoginProvider.PROVIDER_ID, 'https://alcdn.msauth.net/browser/2.13.1/js/msal-browser.min.js', () => {
        try {
          const config = {
            auth: {
              clientId: this.clientId,
              redirectUri: this.initOptions.redirect_uri ?? location.origin,
              authority: this.initOptions.authority,
              knownAuthorities: this.initOptions.knownAuthorities,
              protocolMode: this.initOptions.protocolMode,
              clientCapabilities: this.initOptions.clientCapabilities
            },
            cache: !this.initOptions.cacheLocation ? null : {
              cacheLocation: this.initOptions.cacheLocation
            }
          };
          this._instance = new msal.PublicClientApplication(config);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  getSocialUser(loginResponse) {
    return new Promise((resolve, reject) => {
      //After login, use Microsoft Graph API to get user info
      let meRequest = new XMLHttpRequest();
      meRequest.onreadystatechange = () => {
        if (meRequest.readyState == 4) {
          try {
            if (meRequest.status == 200) {
              let userInfo = JSON.parse(meRequest.responseText);
              let user = new SocialUser();
              user.provider = MicrosoftLoginProvider.PROVIDER_ID;
              user.id = loginResponse.idToken;
              user.authToken = loginResponse.accessToken;
              user.name = loginResponse.idTokenClaims.name;
              user.email = loginResponse.account.username;
              user.idToken = loginResponse.idToken;
              user.response = loginResponse;
              user.firstName = userInfo.givenName;
              user.lastName = userInfo.surname;
              resolve(user);
            } else {
              reject(`Error retrieving user info: ${meRequest.status}`);
            }
          } catch (err) {
            reject(err);
          }
        }
      };
      //Microsoft Graph ME Endpoint: https://docs.microsoft.com/en-us/graph/api/user-get?view=graph-rest-1.0&tabs=http
      meRequest.open('GET', 'https://graph.microsoft.com/v1.0/me');
      meRequest.setRequestHeader('Authorization', `Bearer ${loginResponse.accessToken}`);
      try {
        meRequest.send();
      } catch (err) {
        reject(err);
      }
    });
  }
  getLoginStatus() {
    var _this3 = this;
    return (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accounts = _this3._instance.getAllAccounts();
      if (accounts?.length > 0) {
        const loginResponse = yield _this3._instance.ssoSilent({
          scopes: _this3.initOptions.scopes,
          loginHint: accounts[0].username
        });
        return yield _this3.getSocialUser(loginResponse);
      } else {
        throw `No user is currently logged in with ${MicrosoftLoginProvider.PROVIDER_ID}`;
      }
    })();
  }
  signIn() {
    var _this4 = this;
    return (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loginResponse = yield _this4._instance.loginPopup({
        scopes: _this4.initOptions.scopes,
        prompt: _this4.initOptions.prompt
      });
      return yield _this4.getSocialUser(loginResponse);
    })();
  }
  signOut(revoke) {
    var _this5 = this;
    return (0,_home_salman_Desktop_SSD_My_Folder_Project_New_NoteHub_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accounts = _this5._instance.getAllAccounts();
      if (accounts?.length > 0) {
        yield _this5._instance.logoutPopup({
          account: accounts[0],
          postLogoutRedirectUri: _this5.initOptions.logout_redirect_uri ?? _this5.initOptions.redirect_uri ?? location.href
        });
      }
    })();
  }
}
MicrosoftLoginProvider.PROVIDER_ID = 'MICROSOFT';

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map