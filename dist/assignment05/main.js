(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/registeration/registeration.component */ "./src/app/auth/registeration/registeration.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'registeration', component: _auth_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_4__["RegisterationComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" style=\"margin-top: -20px; background-color: darkviolet\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <h1 style=\"color: aliceblue\">Ricebook</h1>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/registeration/registeration.component */ "./src/app/auth/registeration/registeration.component.ts");
/* harmony import */ var _main_following_following_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/following/following.component */ "./src/app/main/following/following.component.ts");
/* harmony import */ var _main_headline_headline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/headline/headline.component */ "./src/app/main/headline/headline.component.ts");
/* harmony import */ var _main_posts_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/posts/posts.component */ "./src/app/main/posts/posts.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_posts_comments_comments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/posts/comments/comments.component */ "./src/app/main/posts/comments/comments.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _auth_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_8__["RegisterationComponent"],
                _main_following_following_component__WEBPACK_IMPORTED_MODULE_9__["FollowingComponent"],
                _main_headline_headline_component__WEBPACK_IMPORTED_MODULE_10__["HeadlineComponent"],
                _main_posts_posts_component__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"],
                _main_posts_comments_comments_component__WEBPACK_IMPORTED_MODULE_14__["CommentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"]
            ],
            entryComponents: [
                _main_posts_comments_comments_component__WEBPACK_IMPORTED_MODULE_14__["CommentsComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-registeration></app-registeration>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n    </div>\n    <div class=\"col-md-5\">\n      <form [formGroup]=\"loginForm\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"cross-validation panel panel-success\" [class.cross-validation-error]=\"loginForm.errors && (loginForm.touched || loginForm.dirty)\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-title\">\n              <h3>Login</h3><h5>(If your account is available)</h5>\n            </div>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"form-group\">\n              <label for=\"netId\" class=\"col-sm-2 control-lable\">netId</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"netId\" id=\"netId\" formControlName=\"netId\">\n                <div *ngIf=\"netId.invalid && (netId.dirty || netId.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"netId.errors.required\">\n                    Username is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"form-group\">\n              <label for=\"password\" class=\"col-sm-2 control-lable\">password</label>\n              <div class=\"col-sm-10\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"password\" id=\"password\" formControlName=\"password\">\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"password.errors.required\">\n                    Password is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-2 col-sm-10\">\n                <label>Remember me!</label>\n                <input type=\"checkbox\" style=\"margin-left: 15px\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-sm-2\">\n                </div>\n                <div class=\"col-sm-4\">\n                  <button class=\"btn btn-success\" [disabled]=\"loginForm.invalid\" (click)=\"login(netId.value, password.value)\">login</button>\n                </div>\n                <div class=\"col-sm-2\">\n                  <button class=\"btn btn-danger\" (click)=\"goToRegister()\">sign up</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-1\"></div>\n              <div class=\"col-sm-9\">\n                <div class=\"alert alert-danger\" *ngIf=\"(errMsg != '') && (errMsg != null)\">{{errMsg}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-4\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.loginState = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            netId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.getUser();
    };
    LoginComponent.prototype.getUser = function () {
        this.http.get('../../../assets/profile.json').subscribe(function (data) {
            localStorage['users'] = JSON.stringify(data['users']);
        });
    };
    LoginComponent.prototype.login = function (netId, passwd) {
        var flag = this.isRegisteredUser(netId, passwd);
        if (flag) {
            this.loginState = 'login success';
            this.router.navigate(['main']);
            //location.replace('main');
        }
        else {
            this.loginState = 'login failure';
            this.errMsg = "invalid user";
        }
    };
    LoginComponent.prototype.isRegisteredUser = function (netId, passwd) {
        var userList = JSON.parse(localStorage['users']);
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].netId == netId && userList[i].password == passwd) {
                localStorage['loginStatus'] = JSON.stringify(userList[i]);
                return true;
            }
        }
        return false;
    };
    LoginComponent.prototype.goToRegister = function () {
        this.router.navigate(['registeration']);
    };
    Object.defineProperty(LoginComponent.prototype, "netId", {
        get: function () { return this.loginForm.get('netId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/registeration/registeration.component.css":
/*!****************************************************************!*\
  !*** ./src/app/auth/registeration/registeration.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/registeration/registeration.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/auth/registeration/registeration.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n    </div>\n\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"registerForm\" class=\"form-horizontal\">\n          <div class=\"cross-validation panel panel-success\" [class.cross-validation-error]=\"registerForm.errors && (registerForm.touched || registerForm.dirty)\">\n            <div class=\"panel-heading\">\n              <h3>Registeration</h3>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"form-group\">\n                <label for=\"accountName\" class=\"col-sm-3 control-lable\">account name</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"account name\" id=\"accountName\" formControlName=\"accountName\" required>\n                  <div *ngIf=\"accountName.invalid && (accountName.dirty || accountName.touched)\"\n                       class=\"alert alert-danger\">\n\n                    <div *ngIf=\"accountName.errors.required\">\n                      Account is required.\n                    </div>\n                    <div *ngIf=\"accountName.errors.minlength\">\n                      Account must be at least 4 characters long.\n                    </div>\n                    <div *ngIf=\"registerForm.hasError('accountNameChecker', 'accountName')\">\n                      {{registerForm.getError('accountNameChecker', 'accountName')?.err}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <br>\n              <div class=\"form-group\">\n                <label class=\"col-sm-3 control-lable\">display name</label>\n                <div for=\"displayName\" class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"display name\" id=\"displayName\" formControlName=\"displayName\">\n                  <div *ngIf=\"displayName.invalid && (displayName.dirty || displayName.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"displayName.errors.required\">\n                      Display Name is required.\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <br>\n\n              <div class=\"form-group\">\n                <label for=\"email\" class=\"col-sm-3 control-lable\">email</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"email\" class=\"form-control\" placeholder=\"xxx@xxx.xxx\" id=\"email\" formControlName=\"email\" required>\n                  <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                       class=\"alert alert-danger\">\n                    <div *ngIf=\"email.errors.required\">\n                      Email is required.\n                    </div>\n                    <div *ngIf=\"email.errors.email\">\n                      Email is inValid.\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <br>\n              <div class=\"form-group\">\n                <label for=\"phone\" class=\"col-sm-3 control-lable\">phone</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"123-123-1234\" id=\"phone\" formControlName=\"phone\">\n                  <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\"\n                       class=\"alert alert-danger\">\n                    <div *ngIf=\"phone.errors.required\">\n                      Phone is required.\n                    </div>\n                    <div *ngIf=\"registerForm.hasError('phoneChecker', 'phone')\">\n                      {{registerForm.getError('phoneChecker', 'phone')?.err}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <br>\n              <div class=\"form-group\">\n                <label for=\"dat\" class=\"col-sm-3 control-lable\">date of birth</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"date\" class=\"form-control\" id=\"dat\" formControlName=\"dat\">\n                  <div *ngIf=\"dat.invalid && (dat.dirty || dat.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"dat.errors.required\">\n                      Birthday is required;\n                    </div>\n                    <div *ngIf=\"registerForm.hasError('ageChecker', 'dat')\">\n                      {{registerForm.getError('ageChecker', 'dat')?.err}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <br>\n              <div class=\"form-group\">\n                <label for=\"zipcode\" class=\"col-sm-3 control-lable\">zipcode</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"77005\" id=\"zipcode\" formControlName=\"zipcode\">\n                  <div *ngIf=\"zipcode.invalid && (zipcode.dirty || zipcode.touched)\"\n                       class=\"alert alert-danger\">\n                    <div *ngIf=\"zipcode.errors.required\">\n                      zipcode is required.\n                    </div>\n                    <div *ngIf=\"registerForm.hasError('zipcodeChecker', 'zipcode')\">\n                      {{registerForm.getError('zipcodeChecker', 'zipcode')?.err}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <br>\n\n              <div formGroupName=\"password\">\n                <div class=\"form-group\">\n                  <label for=\"pass1\" class=\"col-sm-3 control-lable\">password</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"password\" id=\"pass1\" formControlName=\"pass1\">\n                    <div *ngIf=\"pass1.invalid && (pass1.dirty || pass1.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"pass1.errors.minlength\">\n                        Password must be at least 6 characters long.\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"form-group\">\n                  <label for=\"pass2\" class=\"col-sm-3 control-lable\">confirmation</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"password\" class=\"form-control\" id=\"pass2\" formControlName=\"pass2\">\n                    <div *ngIf=\"registerForm.hasError('passValidator', 'password') && (pass2.dirty || pass2.touched)\" class=\"alert alert-danger\">\n                      {{registerForm.getError('passValidator', 'password')?.err}}\n                    </div>\n                  </div>\n                </div>\n                <br>\n              </div>\n\n\n              <br>\n              <div class=\"form-group\">\n                  <div class=\"col-sm-3\"></div>\n                  <div class=\"col-sm-3\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"registerForm.invalid\" (click)=\"toMain()\">sign up</button>\n                  </div>\n                  <div class=\"col-sm-2\">\n                    <button class=\"btn btn-danger\" (click)=\"goBackToLogin()\">back</button>\n                  </div>\n              </div>\n            </div>\n          </div>\n      </form>\n    </div>\n\n    <div class=\"col-md-3\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/registeration/registeration.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/registeration/registeration.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationComponent", function() { return RegisterationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registeration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registeration.service */ "./src/app/auth/registeration/registeration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterationComponent = /** @class */ (function () {
    function RegisterationComponent(fb, registerationService, router) {
        this.fb = fb;
        this.registerationService = registerationService;
        this.router = router;
    }
    RegisterationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            accountName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), this.registerationService.checkAccount]],
            displayName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.registerationService.checkPhone]],
            dat: ['2000-04-23', [this.registerationService.checkAge]],
            zipcode: ['77005', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.registerationService.checkZipcode]],
            password: this.fb.group({
                pass1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
                pass2: ['']
            }, { validator: this.registerationService.checkPassword })
        });
    };
    RegisterationComponent.prototype.goBackToLogin = function () {
        this.router.navigate(['login']);
    };
    Object.defineProperty(RegisterationComponent.prototype, "accountName", {
        get: function () { return this.registerForm.get('accountName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationComponent.prototype, "displayName", {
        get: function () { return this.registerForm.get('displayName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationComponent.prototype, "phone", {
        get: function () { return this.registerForm.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationComponent.prototype, "dat", {
        get: function () { return this.registerForm.get('dat'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationComponent.prototype, "zipcode", {
        get: function () { return this.registerForm.get('zipcode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationComponent.prototype, "pass1", {
        get: function () { return this.registerForm.get('password').get('pass1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationComponent.prototype, "pass2", {
        get: function () { return this.registerForm.get('password').get('pass2'); },
        enumerable: true,
        configurable: true
    });
    RegisterationComponent.prototype.toMain = function () {
        var user = JSON.parse(localStorage['users'])[0];
        localStorage['loginStatus'] = JSON.stringify(user);
        this.router.navigate(['main']);
    };
    RegisterationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registeration',
            template: __webpack_require__(/*! ./registeration.component.html */ "./src/app/auth/registeration/registeration.component.html"),
            styles: [__webpack_require__(/*! ./registeration.component.css */ "./src/app/auth/registeration/registeration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _registeration_service__WEBPACK_IMPORTED_MODULE_2__["RegisterationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterationComponent);
    return RegisterationComponent;
}());



/***/ }),

/***/ "./src/app/auth/registeration/registeration.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/registeration/registeration.service.ts ***!
  \*************************************************************/
/*! exports provided: User, RegisterationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationService", function() { return RegisterationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var RegisterationService = /** @class */ (function () {
    function RegisterationService() {
    }
    RegisterationService.prototype.checkAge = function (control) {
        var date = new Date();
        var birth = control.value;
        var birthdayTs = new Date(birth);
        var diff = date.getTime() - birthdayTs.getTime();
        var age = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
        return (age >= 18) ? null : { ageChecker: { err: 'Your age is under 18' } };
    };
    RegisterationService.prototype.checkAccount = function (control) {
        var account = control.value;
        if (account[0] >= '0' && account[0] <= '9') {
            return { accountNameChecker: { err: 'The first character cannot be number' } };
        }
        for (var i = 1; i < account.length; i++) {
            var letter = account[i];
            if (!((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z') || (letter >= '0' && letter <= '9'))) {
                return { accountNameChecker: { err: 'Illgal characters exist' } };
            }
        }
        return null;
    };
    RegisterationService.prototype.checkPhone = function (control) {
        var phone = control.value;
        if (phone == '')
            return null;
        var pat = /^\d{3}-\d{3}-\d{4}$/;
        var res = pat.test(phone);
        return res ? null : { phoneChecker: { err: 'Phone number is invalid.' } };
    };
    RegisterationService.prototype.checkZipcode = function (control) {
        var zipcode = control.value;
        if (zipcode == '')
            return null;
        var pat = /^\d{5}$/;
        var res = pat.test(zipcode);
        return res ? null : { zipcodeChecker: { err: 'Zipcode is invalid.' } };
    };
    RegisterationService.prototype.checkPassword = function (controlGroup) {
        var pass1 = controlGroup.get('pass1').value;
        var pass2 = controlGroup.get('pass2').value;
        var isEqual = (pass1 == pass2);
        return isEqual ? null : { passValidator: { err: 'The password is not consistent' } };
    };
    RegisterationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RegisterationService);
    return RegisterationService;
}());



/***/ }),

/***/ "./src/app/main/following/following.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/following/following.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/following/following.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/following/following.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-success\">\n  <div class=\"panel-heading\">\n    <div class=\"panel-title\">\n      <strong>Followers</strong>\n    </div>\n  </div>\n  <div class=\"panel-body\" style=\"height:442px; overflow-y:auto\" >\n    <div class=\"row\" style=\"margin-top: 2px; margin-left: -2px; margin-right: -2px\" *ngFor=\"let follower of followers\">\n      <div class=\"panel panel-success panel-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-5\">\n            <img src=\"{{follower.avatar}}\" width=\"80px\" height=\"80px\" alt=\"friend profile\">\n          </div>\n          <div class=\"col-sm-7\">\n            <div class=\"row\" style=\"margin-top: 10px\">\n              <div class=\"col-sm-5\">\n                <div class=\"badge\" style=\"margin-left: -8px\">{{follower.name}}</div>\n              </div>\n              <div class=\"col-sm-6\">\n                <button class=\"btn btn-xs btn-warning\" style=\"margin-left: -5px\" (click)=\"unfollow(follower.netId)\">unfollow</button>\n              </div>\n            </div>\n            <div class=\"row\" style=\"margin-top: 15px\">\n              <span class=\"label label-info\">{{follower.status}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"panel-footer\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <input type=\"form-control\" class=\"form-control\" [(ngModel)]=\"addNetId\" placeholder=\"netId(zp7,jw101,bb34)\">\n      </div>\n      <div class=\"col-sm-3\">\n        <span style=\"margin-left: 20px\">\n          <button class=\"btn btn-danger\" (click)=\"addFollower()\">Add</button>\n        </span>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"errMsg\" style=\"text-align: center\">\n      <span style=\"color: red;\">{{errMsg}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/following/following.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/following/following.component.ts ***!
  \*******************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _following_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./following.service */ "./src/app/main/following/following.service.ts");
/* harmony import */ var _auth_registeration_registeration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/registeration/registeration.service */ "./src/app/auth/registeration/registeration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FollowingComponent = /** @class */ (function () {
    function FollowingComponent(followeringService) {
        this.followeringService = followeringService;
        this.sendNetId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FollowingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.followeringService.initFollowerList().subscribe(function (data) {
            _this.followers = data['followers'];
            localStorage['followers'] = JSON.stringify(_this.followers);
        });
        if (localStorage['loginStatus'] != null) {
            this.user = JSON.parse(localStorage['loginStatus']);
        }
        else {
            this.user = new _auth_registeration_registeration_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        }
    };
    FollowingComponent.prototype.addFollower = function () {
        var _this = this;
        var res = this.followeringService.addFollower(this.addNetId, this.followers, this.user.netId);
        if (res != null) {
            this.followers.push(res);
            this.sendNetId.emit(JSON.stringify({ 'netId': res.netId, 'flag': 1 }));
        }
        else {
            this.errMsg = "invalid adding";
            setTimeout(function () {
                _this.errMsg = '';
            }, 2000);
        }
        this.addNetId = '';
    };
    FollowingComponent.prototype.unfollow = function (netId) {
        var i = 0;
        for (; i < this.followers.length; i++) {
            if (this.followers[i].netId == netId) {
                break;
            }
        }
        this.followers.splice(i, 1);
        this.sendNetId.emit(JSON.stringify({ 'netId': netId, 'flag': 0 }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FollowingComponent.prototype, "sendNetId", void 0);
    FollowingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-following',
            template: __webpack_require__(/*! ./following.component.html */ "./src/app/main/following/following.component.html"),
            styles: [__webpack_require__(/*! ./following.component.css */ "./src/app/main/following/following.component.css")]
        }),
        __metadata("design:paramtypes", [_following_service__WEBPACK_IMPORTED_MODULE_1__["FollowingService"]])
    ], FollowingComponent);
    return FollowingComponent;
}());



/***/ }),

/***/ "./src/app/main/following/following.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/following/following.service.ts ***!
  \*****************************************************/
/*! exports provided: Follower, FollowingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Follower", function() { return Follower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingService", function() { return FollowingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Follower = /** @class */ (function () {
    function Follower() {
    }
    return Follower;
}());

var FollowingService = /** @class */ (function () {
    function FollowingService(http) {
        this.http = http;
    }
    FollowingService.prototype.initFollowerList = function () {
        return this.http.get('../../../assets/followers.json');
    };
    FollowingService.prototype.addFollower = function (addNetId, followers, curNetId) {
        if (!this.checkHasAdded(addNetId, followers)) {
            var users = JSON.parse(localStorage['users']);
            var hasAddingUser = false;
            var i = 0;
            for (; i < users.length; i++) {
                if (users[i].netId == addNetId && curNetId != addNetId) {
                    hasAddingUser = true;
                    break;
                }
            }
            if (hasAddingUser) {
                var f = new Follower();
                f.netId = users[i].netId;
                f.name = addNetId;
                f.avatar = users[i].profile;
                f.status = users[i].headline;
                return f;
            }
            else {
                return null;
            }
        }
        else
            return null;
    };
    FollowingService.prototype.checkHasAdded = function (netId, followers) {
        for (var i = 0; i < followers.length; i++) {
            if (followers[i].netId == netId) {
                return true;
            }
        }
        return false;
    };
    FollowingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FollowingService);
    return FollowingService;
}());



/***/ }),

/***/ "./src/app/main/headline/headline.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/headline/headline.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/headline/headline.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/headline/headline.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n  <div class=\"panel panel-heading\">\n    <div class=\"panel-title\">\n      <strong>Basic Profile</strong>\n    </div>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"row\" style=\"margin-top: -10px\">\n      <div class=\"col-sm-5\">\n        <img src=\"{{user.profile}}\" alt=\"my profile\" class=\"img-circle\" width=\"75px\" height=\"90px\">\n      </div>\n      <div class=\"col-sm-7\">\n        <div class=\"row\" style=\"margin-top: 10px\">\n          <div class=\"badge\">\n            <span class=\"glyphicon glyphicon-user\"></span>{{user.display_name}}\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top: 15px\">\n          <span class=\"label label-info\">{{user.headline}}</span>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"new status\" [(ngModel)]=\"newStatus\">\n      </div>\n      <div class=\"col-sm-5\">\n        <button class=\"btn btn-success\" (click)=\"updateHeadline()\">Update</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"panel-footer\">\n    <button id=\"logout\" class=\"btn btn-danger\" (click)=\"logout()\" style=\"margin-right: 80px\">Log Out</button>\n    <button id=\"profile\" class=\"btn btn-warning\" (click)=\"toProfile()\">Profile</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/headline/headline.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/headline/headline.component.ts ***!
  \*****************************************************/
/*! exports provided: HeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineComponent", function() { return HeadlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _headline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headline.service */ "./src/app/main/headline/headline.service.ts");
/* harmony import */ var _auth_registeration_registeration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/registeration/registeration.service */ "./src/app/auth/registeration/registeration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeadlineComponent = /** @class */ (function () {
    function HeadlineComponent(router, headlineService) {
        this.router = router;
        this.headlineService = headlineService;
    }
    HeadlineComponent.prototype.ngOnInit = function () {
        if (localStorage['loginStatus'] != null) {
            this.user = JSON.parse(localStorage['loginStatus']);
        }
        else {
            this.user = new _auth_registeration_registeration_service__WEBPACK_IMPORTED_MODULE_3__["User"]();
        }
    };
    HeadlineComponent.prototype.updateHeadline = function () {
        this.user.headline = this.headlineService.updateHeadline(this.newStatus, this.user.headline);
        this.newStatus = '';
    };
    HeadlineComponent.prototype.logout = function () {
        localStorage.removeItem('loginStatus');
        this.router.navigate(['login']);
        //location.replace('login');
    };
    HeadlineComponent.prototype.toProfile = function () {
        this.router.navigate(['profile']);
    };
    HeadlineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headline',
            template: __webpack_require__(/*! ./headline.component.html */ "./src/app/main/headline/headline.component.html"),
            styles: [__webpack_require__(/*! ./headline.component.css */ "./src/app/main/headline/headline.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _headline_service__WEBPACK_IMPORTED_MODULE_2__["HeadlineService"]])
    ], HeadlineComponent);
    return HeadlineComponent;
}());



/***/ }),

/***/ "./src/app/main/headline/headline.service.ts":
/*!***************************************************!*\
  !*** ./src/app/main/headline/headline.service.ts ***!
  \***************************************************/
/*! exports provided: HeadlineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineService", function() { return HeadlineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadlineService = /** @class */ (function () {
    function HeadlineService() {
    }
    HeadlineService.prototype.updateHeadline = function (newStatus, headline) {
        if (newStatus != '') {
            var preLoginJson = JSON.parse(localStorage['loginStatus']);
            preLoginJson['headline'] = newStatus;
            localStorage['loginStatus'] = JSON.stringify(preLoginJson);
            if (newStatus.length > 16) {
                return newStatus.substr(0, 16) + "..";
            }
            else {
                return newStatus;
            }
        }
        else
            return headline;
    };
    HeadlineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HeadlineService);
    return HeadlineService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"following/following.component.ts\"></script>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"row\">\n        <app-headline></app-headline>\n      </div>\n      <div class=\"row\">\n        <app-following (sendNetId)=\"getNewNetId($event)\"></app-following>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <app-posts [getNetIdFromParent]=\"getNetIdFromFollowing\"></app-posts>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n<!--\n\n<div class=\"col-md-6\">\n  <div class=\"panel panel-success panel-body\" *ngIf=\"feed[0] != null\">\n    <div class=\"row\">\n      <div class=\"col-sm-7\">\n        <div class=\"row\">\n          <div class=\"col-sm-5\">\n            <div class=\"badge\">\n              <span class=\"glyphicon glyphicon-user\"></span>{{feed[0].author}}\n            </div>\n          </div>\n          <div class=\"col-sm-5\">\n            <span class=\"label label-info\">{{feed[0].create_time}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"panel panel-default panel-body\" style=\"margin-top: 9px; margin-left: 3px; margin-bottom: -7px\">\n            {{feed[0].content}}\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-5\">\n        <div class=\"row\" style=\"text-align: center\">\n          <img src=\"{{feed[0].pic}}\" class=\"img-rounded\" alt=\"feed pic\" width=\"120px\" height=\"96px\">\n        </div>\n        <div class=\"row\" style=\"text-align: center; margin-top: 5px\">\n          <button class=\"btn btn-success\" style=\"margin-right: 5px\">Edit</button>\n          <button class=\"btn btn-info\">Comment</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(http) {
        this.http = http;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.getNewNetId = function (event) {
        this.getNetIdFromFollowing = event;
        //alert('haha');
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/posts/comments/comments.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/posts/comments/comments.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/posts/comments/comments.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/posts/comments/comments.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <ul class=\"list-group\" *ngIf=\"feed\">\n    <li class=\"list-group-item\" *ngFor=\"let comment of feed.comments\">{{comment.content}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/main/posts/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/posts/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(modalRef) {
        this.modalRef = modalRef;
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/main/posts/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/main/posts/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/main/posts/posts.component.css":
/*!************************************************!*\
  !*** ./src/app/main/posts/posts.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/posts/posts.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/posts/posts.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"panel panel-success\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">\n          <strong>Feed Post</strong>\n        </div>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"panel panel-danger panel-body\">\n              <img src=\"{{imgUrl}}\" class=\"img-rounded\" alt=\"upload pic\" width=\"120px\" height=\"96px\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <textarea class=\"form-control\" rows=\"6\" [(ngModel)]=\"textContent\" placeholder=\"write sth down\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel-footer\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\" style=\"text-align: center\">\n            <label for=\"file\" class=\"btn btn-default\">add image</label>\n            <input id=\"file\" type=\"file\" style=\"display:none\">\n          </div>\n          <div class=\"col-sm-4\" style=\"text-align: center\">\n            <button class=\"btn btn-danger\" (click)=\"reset()\">cancel</button>\n          </div>\n          <div class=\"col-sm-4\" style=\"text-align: center\">\n            <button class=\"btn btn-success\" (click)=\"postFeed()\">post</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"row\">\n      <div class=\"panel panel-success panel-body\" style=\"height: 150px; margin-top: 43px;\">\n        <div class=\"row\" style=\"text-align: center\">\n          <img src=\"{{album}}\" alt=\"Rice gallery\" class=\"img-rounded\" width=\"140px\" height=\"120px\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchCondition\" placeholder=\"search area\">\n      </div>\n      <div class=\"col-sm-4\">\n        <button class=\"btn btn-success\" (click)=\"searchPost()\">search</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"panel panel-success\" style=\"margin-left: 15px; margin-top: 6px\">\n    <div class=\"panel-heading\">\n      <div class=\"panel-title\">\n        <strong>Feed Area</strong>\n      </div>\n    </div>\n    <div class=\"panel-body\" style=\"height:500px; overflow-y:auto\">\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let feed of searchRes; index as i\">\n          <div class=\"panel panel-success panel-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <div class=\"badge\">\n                  <span class=\"glyphicon glyphicon-user\"></span>{{feed.author}}\n                </div>\n              </div>\n              <div class=\"col-sm-7\">\n                <span class=\"label label-info\" style=\"margin-right: 10px\">{{feed.create_time}}</span>\n              </div>\n            </div>\n            <div class=\"row\" style=\"text-align: center; margin-top: 5px\">\n              <img src=\"{{feed.pic}}\" class=\"img-rounded\" alt=\"feed pic\" width=\"120px\" height=\"96px\">\n            </div>\n            <div class=\"row\" style=\"margin-top: 5px\">\n              <div class=\"panel panel-default panel-body\" style=\"height: 100px; overflow-y: auto\">\n                {{feed.content}}\n              </div>\n            </div>\n            <div class=\"row\" style=\"text-align: center; margin-top: 5px\">\n              <button class=\"btn btn-success\" style=\"margin-right: 20px\">Edit</button>\n              <button class=\"btn btn-info\" (click)=\"showComments(i)\">Comment</button>\n            </div>\n          </div>\n\n\n          <!--(click)=\"showComments(template)\"-->\n          <!--<ng-template #template>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title pull-left\">Modal</h4>\n              <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              This is a modal.\n            </div>\n          </ng-template>-->\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.service */ "./src/app/main/posts/posts.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/main/posts/comments/comments.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var album_data = ["https://www.rice.edu/_images/feature-rice-facts.jpg",
    "https://www.rice.edu/_images/feature-why-rice.jpg",
    "https://www.rice.edu/_images/uploads/2015/baker-college-746x496.jpg",
    "https://www.rice.edu/_images/uploads/2015/martel-around-at-night-746x496.jpg"];
var PostsComponent = /** @class */ (function () {
    /*modalRef: BsModalRef;*/
    function PostsComponent(postsService, modalService, http) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.http = http;
        this.textContent = '';
        this.searchCondition = '';
        this.album = "https://www.rice.edu/_images/uploads/2015/martel-around-at-night-746x496.jpg";
        this.index = 0;
    }
    Object.defineProperty(PostsComponent.prototype, "getNetIdFromParent", {
        set: function (getNetIdFromParent) {
            //alert(getNetIdFromParent);
            if (getNetIdFromParent != null && getNetIdFromParent != '') {
                var obj = JSON.parse(getNetIdFromParent);
                if (obj.flag == 1) {
                    this.searchRes = this.postsService.addNewFollowersPosts(obj.netId, this.feedList);
                }
                else {
                    this.feedList = this.postsService.removeFollowersPosts(obj.netId, this.feedList);
                    this.searchRes = this.feedList;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('../../assets/articles.json').subscribe(function (data) {
            localStorage['articles'] = JSON.stringify(data['articles']);
            var user = JSON.parse(localStorage['loginStatus']);
            _this.netId = user.netId;
            _this.feedList = _this.getFeedList(_this.netId);
            _this.searchRes = _this.feedList;
        });
        this.imgUrl = 'assets/white.jpg';
        this.searchRes = [];
        setInterval(function () {
            _this.index = (_this.index + 1) % album_data.length;
            _this.album = album_data[_this.index];
        }, 2500);
    };
    PostsComponent.prototype.getFeedList = function (netId) {
        return this.postsService.getFeedList(netId);
    };
    PostsComponent.prototype.reset = function () {
        this.textContent = '';
    };
    PostsComponent.prototype.postFeed = function () {
        if (this.textContent !== '') {
            this.postsService.postFeed(this.feedList, this.imgUrl, this.textContent);
            this.textContent = '';
        }
    };
    PostsComponent.prototype.searchPost = function () {
        if (this.searchCondition != '') {
            this.searchRes = this.postsService.searchPost(this.feedList, this.searchCondition);
            this.searchCondition = '';
        }
        else {
            this.searchRes = this.feedList;
        }
    };
    PostsComponent.prototype.showComments = function (index) {
        this.modalRef = this.modalService.show(_comments_comments_component__WEBPACK_IMPORTED_MODULE_3__["CommentsComponent"], {
            initialState: {
                title: 'Comment List',
                feed: this.feedList[index]
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PostsComponent.prototype, "getNetIdFromParent", null);
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/main/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/main/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/main/posts/posts.service.ts":
/*!*********************************************!*\
  !*** ./src/app/main/posts/posts.service.ts ***!
  \*********************************************/
/*! exports provided: Feed, Comment, PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Feed = /** @class */ (function () {
    function Feed() {
    }
    return Feed;
}());

var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());

var PostsService = /** @class */ (function () {
    function PostsService() {
    }
    PostsService.prototype.sortFeedListByTime = function (feedList) {
        feedList.sort(function (a, b) {
            if (a.create_time > b.create_time)
                return -1;
            else if (a.create_time < b.create_time)
                return 1;
            else
                return 0;
        });
    };
    PostsService.prototype.searchPost = function (feedList, searchCondition) {
        this.sortFeedListByTime(feedList);
        var tmpArr = [];
        for (var i = 0; i < feedList.length; i++) {
            if (feedList[i].content.includes(searchCondition)
                || feedList[i].author.toLowerCase() == searchCondition.toLowerCase()) {
                tmpArr.push(feedList[i]);
            }
        }
        return tmpArr;
    };
    PostsService.prototype.getFeedList = function (netId) {
        var articles = JSON.parse(localStorage['articles']);
        var arr = [];
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].netId == netId)
                arr.push(articles[i]);
        }
        this.sortFeedListByTime(arr);
        return arr;
    };
    PostsService.prototype.postFeed = function (feedList, imgUrl, textContent) {
        var f = new Feed();
        var date = new Date();
        f.pic = imgUrl;
        f.content = textContent;
        f.id = 11;
        var month = (date.getMonth() < 9) ? ("0" + (date.getMonth() + 1)) : ("" + (date.getMonth() + 1));
        var day = (date.getDate() < 10) ? ("0" + (date.getDate() + 1)) : ("" + (date.getDate() + 1));
        f.create_time = date.getFullYear() + "-" + month + "-" + day;
        f.author = JSON.parse(localStorage['loginStatus']).display_name;
        feedList.unshift(f);
    };
    PostsService.prototype.copyFeedList = function (tmpFeedList) {
        var feedList = [];
        for (var i = 0; i < tmpFeedList.length; i++) {
            feedList.push(tmpFeedList[i]);
        }
        return feedList;
    };
    PostsService.prototype.addNewFollowersPosts = function (newNetId, tmpFeedList) {
        var articles = JSON.parse(localStorage['articles']);
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].netId == newNetId)
                tmpFeedList.push(articles[i]);
        }
        this.sortFeedListByTime(tmpFeedList);
        return this.copyFeedList(tmpFeedList);
    };
    PostsService.prototype.removeFollowersPosts = function (newNetId, tmpFeedList) {
        var tmpArr = [];
        for (var i = 0; i < tmpFeedList.length; i++) {
            if (tmpFeedList[i].netId != newNetId) {
                tmpArr.push(tmpFeedList[i]);
            }
        }
        this.sortFeedListByTime(tmpArr);
        return tmpArr;
    };
    PostsService.prototype.getValue = function () {
        return 10;
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" xmlns=\"http://www.w3.org/1999/html\" xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-success\">\n        <div class=\"panel-body row\">\n          <div class=\"col-md-2 panel panel-success panel-heading\">\n            <strong>Basic Profile</strong>\n          </div>\n          <div class=\"col-md-3\">\n            <img src=\"{{user.profile}}\" class=\"img-circle\" width=\"75px\" height=\"90px\" alt=\"user head shot\">\n          </div>\n          <div class=\"col-md-7\">\n            <div id=\"description\">\n              <p>1. First-year master of computer science student from Rice.</p>\n              <p>2. Programming is the most favorite thing that I have ever met.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-danger\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <img src=\"../../assets/owl.jpg\" class=\"img-rounded\" width=\"120px\" height=\"95px\"  alt=\"logo\">\n            </div>\n            <div class=\"col-md-5\" style=\"text-align: center\">\n              <div class=\"row\">\n                <h4>Ricebook</h4>\n              </div>\n              <div class=\"row\">\n                <strong>Write your story in Rice!</strong>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <img src=\"../../assets/lovett.jpg\" class=\"img-rounded\" width=\"140px\" height=\"95px\" alt=\"Lovett Hall\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3\" style=\"text-align: center\">\n      <label for=\"file\" class=\"btn btn-success\">update image</label>\n      <input id=\"file\" type=\"file\" style=\"display:none; \">\n    </div>\n    <div class=\"col-md-3\" style=\"text-align: center\">\n      <button class=\"btn btn-info\" (click)=\"toMain()\">main</button>\n    </div>\n  </div>\n\n\n  <div class=\"row\" style=\"margin-top: 5px;\">\n    <div class=\"col-md-6\">\n      <div id=\"current_info_board\" class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <div class=\"panel-title\">\n            <h3>Current Info</h3>\n          </div>\n        </div>\n        <div class=\"panel-body\" *ngIf=\"user\">\n          <div class=\"alert alert-warning\">\n            <span><strong>Name:</strong>&nbsp;&nbsp;&nbsp;&nbsp;</span>\n            <span>{{user.display_name}}</span>\n          </div>\n          <div class=\"alert alert-warning\">\n            <span><strong>Email:</strong>&nbsp;&nbsp;&nbsp;&nbsp;</span>\n            <span>{{user.email}}</span>\n          </div>\n          <div class=\"alert alert-warning\">\n            <span><strong>Phone:</strong>&nbsp;&nbsp;&nbsp;&nbsp;</span>\n            <span>{{user.phone}}</span>\n          </div>\n          <div class=\"alert alert-warning\">\n            <span><strong>Zipcode:</strong>&nbsp;&nbsp;&nbsp;&nbsp;</span>\n            <span>{{user.zipcode}}</span>\n          </div>\n          <div class=\"alert alert-danger\">\n            <span><strong>Date of Birth:</strong>&nbsp;&nbsp;&nbsp;&nbsp;</span>\n            <span>{{user.date_of_birth}}</span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"updateForm\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"cross-validation panel panel-success\" [class.cross-validation-error]=\"updateForm.errors && (updateForm.touched || updateForm.dirty)\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-title\">\n              <h3>Update Info</h3>\n            </div>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"col-sm-2 control-lable\">Name</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n              </div>\n            </div>\n            <br>\n\n            <div class=\"form-group\">\n              <label for=\"email\" class=\"col-sm-2 control-lable\">Email</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"xx@xx.xx\" id=\"email\" formControlName=\"email\">\n                <div *ngIf=\"updateEmail.invalid && (updateEmail.dirty || updateEmail.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"updateEmail.errors.email\">\n                    Email is invalid.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <br>\n\n            <div class=\"form-group\">\n              <label for=\"phone\" class=\"col-sm-2 control-lable\">Phone</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"123-123-1234\" id=\"phone\" formControlName=\"phone\">\n                <div *ngIf=\"updatePhone.invalid && (updatePhone.dirty || updatePhone.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"updatePhone.errors.phoneChecker\">\n                    {{updatePhone.errors.phoneChecker.err}}\n                  </div>\n                </div>\n              </div>\n            </div>\n            <br>\n\n            <div class=\"form-group\">\n              <label for=\"zipcode\" class=\"col-sm-2 control-lable\">Zipcode</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"77005\" id=\"zipcode\" formControlName=\"zipcode\">\n                <div *ngIf=\"updateZipcode.invalid && (updateZipcode.dirty || updateZipcode.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"updateZipcode.errors.zipcodeChecker\">\n                    Zipcode is invalid.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <br>\n\n            <div class=\"form-group\">\n              <label for=\"password\" class=\"col-sm-2 control-lable\">Password</label>\n              <div class=\"col-sm-10 \">\n                <input type=\"password\" class=\"form-control\" placeholder=\"***\" id=\"password\" formControlName=\"password\">\n                <div *ngIf=\"updatePassword.invalid && (updatePassword.dirty || updatePassword.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"updatePassword.errors.minlength\">\n                    Password should be at least 6 characters.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"form-group\">\n                <div class=\"col-sm-2\"></div>\n                <div class=\"col-sm-8\">\n                  <button class=\"btn btn-info\" [disabled]=\"updateForm.invalid\" (click)=\"onUpdate()\">Update Info</button>\n                </div>\n            </div>\n          </div>\n        </div>\n      </form>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_registeration_registeration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/registeration/registeration.service */ "./src/app/auth/registeration/registeration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, profileService, router) {
        this.fb = fb;
        this.profileService = profileService;
        this.router = router;
    }
    ProfileComponent.prototype.fetchUser = function () {
        if (localStorage['loginStatus'] != null) {
            this.user = JSON.parse(localStorage['loginStatus']);
        }
        else {
            this.user = new _auth_registeration_registeration_service__WEBPACK_IMPORTED_MODULE_4__["User"]();
        }
    };
    ProfileComponent.prototype.initForm = function () {
        this.updateForm = this.fb.group({
            name: ['', []],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: ['', [this.profileService.checkPhone]],
            zipcode: ['', [this.profileService.checkZipcode]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.fetchUser();
    };
    Object.defineProperty(ProfileComponent.prototype, "updateName", {
        get: function () { return this.updateForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "updateEmail", {
        get: function () { return this.updateForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "updatePhone", {
        get: function () { return this.updateForm.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "updateZipcode", {
        get: function () { return this.updateForm.get('zipcode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "updatePassword", {
        get: function () { return this.updateForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.onUpdate = function () {
        this.profileService.onUpdate(this.updateForm, this.user);
        localStorage['loginStatus'] = JSON.stringify(this.user);
        this.initForm();
    };
    ProfileComponent.prototype.toMain = function () {
        this.router.navigate(['main']);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getUser = function () {
        return this.http.get('../../assets/profile.json');
    };
    ProfileService.prototype.onUpdate = function (updateForm, user) {
        var formRawValue = updateForm.getRawValue();
        if (formRawValue.name != '') {
            user.display_name = formRawValue.name;
        }
        if (formRawValue.email != '') {
            user.email = formRawValue.email;
        }
        if (formRawValue.phone != '') {
            user.phone = formRawValue.phone;
        }
        if (formRawValue.zipcode != '') {
            user.zipcode = formRawValue.zipcode;
        }
        updateForm.reset('');
    };
    ProfileService.prototype.checkPhone = function (control) {
        var phone = control.value;
        if (phone == '')
            return null;
        var pat = /^\d{3}-\d{3}-\d{4}$/;
        var res = pat.test(phone);
        return res ? null : { phoneChecker: { err: 'Phone number is invalid.' } };
    };
    ProfileService.prototype.checkZipcode = function (control) {
        var zipcode = control.value;
        if (zipcode == '')
            return null;
        var pat = /^\d{5}$/;
        var res = pat.test(zipcode);
        return res ? null : { zipcodeChecker: { err: 'Zipcode is invalid.' } };
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zhaokangpan/WebstormProjects/assignment05/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map