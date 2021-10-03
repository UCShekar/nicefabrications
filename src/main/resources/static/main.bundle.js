webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 0px;\r\n  }\r\n  \r\n  .carousel-item {\r\n    height: 65vh;\r\n    min-height: 300px;\r\n    background: no-repeat center center scroll;\r\n    background-size: cover;\r\n  }\r\n  \r\n  .portfolio-item {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .header__menu{\r\n  text-align: center;\r\n    padding: 30px 0;\r\n  }\r\n  \r\n  .header__menu ul li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 40px;\r\n    position: relative;\r\n  }\r\n  \r\n  a{\r\n    text-decoration:none;\r\n  }\r\n  \r\n  .header__menu ul li a {\r\n    font-size: 15px;\r\n    color: #0d0d0d;\r\n    display: block;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    letter-spacing: 2px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  \n<app-header></app-header>\n  \n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__body_body_component__ = __webpack_require__("./src/app/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__work_work_component__["a" /* WorkComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_main_component__["a" /* MainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'services',
                        component: __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */]
                    }, {
                        path: 'contacts',
                        component: __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */]
                    },
                    { path: 'ourwork',
                        component: __WEBPACK_IMPORTED_MODULE_10__work_work_component__["a" /* WorkComponent */]
                    }, {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_12__main_main_component__["a" /* MainComponent */]
                    }, {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_12__main_main_component__["a" /* MainComponent */]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div><img src=\"../../assets/Main.jpg\" style=\"width:100%;height:50%\"/></div>\n"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/body/body.component.html"),
            styles: [__webpack_require__("./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"services spad\">\n    <div class=\"container\">\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-lg-12\">\n                <div class=\"request__form\">\n                    <div class=\"section-title\">\n                        <h2>INQUIRIES</h2>\n                        <p>For business related inquires please use the form below or email us on test@gmail.com</p>\n                    </div>\n                    <form [formGroup]=\"angForm\" novalidate (ngSubmit)=\"onSubmit()\" >\n                        <div class=\"row\">\n                            <div class=\"col-lg-7 col-md-7 col-sm-7 px-2\">\n                                <input type=\"text\" placeholder=\"Name\" formControlName=\"name\">\n                            </div>\n                          \n                            \n                            <div *ngIf=\"submitted && angForm.controls['name'].invalid\" class=\"alert alert-danger\">\n                                <div *ngIf=\"angForm.controls['name'].errors.required\">\n                                  Name is required.\n                                </div>\n                              </div>\n                            <div class=\"col-lg-7 col-md-7 col-sm-7 px-2\">\n                                <input type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n                            </div>\n                            <div *ngIf=\"submitted && angForm.controls['email'].invalid\" class=\"alert alert-danger\">\n                                <div *ngIf=\"angForm.controls['email'].errors.required\">\n                                  email is required.\n                                </div>\n                                <div *ngIf=\"angForm.controls['email'].errors.email\">\n                                  email is invalid.\n                                </div>                          \n                              </div>\n                            <div class=\"col-lg-7 col-md-7 col-sm-7 px-2\">\n                              <input type=\"text\" placeholder=\"phone\" formControlName=\"phone\">\n                            </div>\n                            <div *ngIf=\"submitted &&  angForm.controls['phone'].invalid\" class=\"alert alert-danger\">\n                                <div *ngIf=\"angForm.controls['phone'].errors.required\">\n                                    phone is required.\n                                </div>\n                                <div *ngIf=\"angForm.controls['phone'].dirty\">\n                                   Invalid mobile number.\n                                </div>\n                              </div>\n                            <div class=\"col-lg-12 px-2 text-center\">\n                                <textarea placeholder=\"Message\"></textarea>\n                                <button type=\"submit\" class=\"site-btn\">send a request</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.submitted = false;
        this.createForm();
    }
    ContactComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$')]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email]]
        });
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.angForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.angForm.value));
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nfooter {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}   "

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">Copyright &copy; Nice Fabrication 2020</p>\n  </div>\n  <!-- /.container -->\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-item{\r\n    padding:2px;\r\n    margin-left: 7px;\r\n}\r\nul li{\r\n    display: inline-block;\r\n    font-family: \"Raleway\", sans-serif;\r\n    margin-right:10px;\r\n\r\n}\r\n.bg-light{\r\n    background-color:#ffff!important;\r\n    text-align:center;\r\n    padding: 30px 0;\r\n}\r\na:after {\r\n    opacity: 1;\r\n}\r\nul li a{\r\n    font-size: 15px;\r\n    color: #0d0d0d;\r\n    display: block;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    letter-spacing: 2px;\r\n}\r\nul{\r\ndisplay: inline-block;\r\nlist-style-type: disc;\r\n-webkit-margin-before: 1em;\r\n        margin-block-start: 1em;\r\n-webkit-margin-after: 1em;\r\n        margin-block-end: 1em;\r\n-webkit-margin-start: 0px;\r\n        margin-inline-start: 0px;\r\n-webkit-margin-end: 0px;\r\n        margin-inline-end: 0px;\r\n-webkit-padding-start: 10px;\r\n        padding-inline-start: 10px;\r\ntext-align: center;\r\nmargin:0px;\r\n}\r\n@media (min-width: 768px) {\r\n    .navbar-nav.navbar-center {\r\n      position: absolute;\r\n      left: 50%;\r\n      -webkit-transform: translatex(-50%);\r\n              transform: translatex(-50%);\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"nav navbar-nav navbar-center\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink = \"home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink = \"services\"  routerLinkActive=\"active\">Services</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink = \"ourwork\"  routerLinkActive=\"active\">Our Work</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink = \"contacts\"  routerLinkActive=\"active\">Contact</a>\n      </li>\n   </ul>\n    \n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero set-bg\" data-setbg=\"../assets/rod.jpg\" style=\"background-image: url(../assets/rod.jpg);\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"hero__text\">\r\n            <img src=\"img/icon/hi.png\" alt=\"\">\r\n             <h2>Nice Fabrications</h2>\r\n            <p>Design is not how it looks and feels.Design is how it works </p>\r\n        </div>\r\n    </div>\r\n  </section>\r\n  <app-services></app-services>\r\n  <app-work></app-work>\r\n  <app-contact></app-contact>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"services spad\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <div class=\"section-title\">\n                  <h2>Our services</h2>\n                  <img src=\"img/icon/ti.png\" alt=\"\">\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 col-sm-6\">\n              <div class=\"services__item\">\n                  <img src=\"../assets/metal.png\" alt=\"\">\n                  <h4>Iron Fabrication</h4>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusm`od tempor.</p>\n              </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6 col-sm-6\">\n              <div class=\"services__item\">\n                  <img src=\"../assets/metal.png\" alt=\"\">\n                  <h4>Steel Fabrication</h4>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusm`od tempor.</p>\n              </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6 col-sm-6\">\n              <div class=\"services__item\">\n                  <img src=\"../assets/metal.png\" alt=\"\">\n                  <h4>Fabrication</h4>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusm`od tempor.</p>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/services/services.component.html"),
            styles: [__webpack_require__("./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"services spad\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <div class=\"section-title\">\n                  <h2>Our Work</h2>\n                  <img src=\"img/icon/ti.png\" alt=\"\">\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-6 col-sm-6\">\n              <ul class=\"filter__controls\">\n                  <li class=\"active\" data-filter=\"*\">All</li>\n                  <li data-filter=\".couple\">Gates</li>\n                  <li data-filter=\".event\">Railings</li>\n                  <li data-filter=\".music\">Glass house</li>\n                  <li data-filter=\".others\">Others</li>\n              </ul>\n          </div>\n      </div>\n      <div class=\"feature__gallery\" style=\"position: relative; height: 790px;\">\n          <div class=\"grid-sizer\"></div>\n          <div class=\"fg__item photography set-bg\" data-setbg=\"img/features/feature-1.jpg\" style=\"background-image: url(&quot;../assets/gate.jpg&quot;); position: absolute; left: 0%; top: 0px;\">\n              <div class=\"fg__item__text\">\n                  <span>Gates</span>\n                  <h2>gate</h2>\n              </div>\n          </div>\n          <div class=\"fg__item honeymoon mid_item set-bg\" data-setbg=\"img/features/feature-2.jpg\" style=\"background-image: url(&quot;../assets/Gate1.jpg&quot;); position: absolute; left: 33.2468%; top: 0px;\">\n              <div class=\"fg__item__text\">\n                  <span>Gates</span>\n                  <h2>Rolling Gates</h2>\n              </div>\n          </div>\n          <div class=\"fg__item honeymoon mid_item set-bg\" data-setbg=\"img/features/feature-2.jpg\" style=\"background-image: url(&quot;../assets/railing.jpg&quot;); position: absolute; left: 33.2468%; top: 0px;\">\n            <div class=\"fg__item__text\">\n                <span>Railings</span>\n                <h2>Steel Railings</h2>\n            </div>\n        </div>\n          <div class=\"fg__item music large_item set-bg\" data-setbg=\"img/features/feature-3.jpg\" style=\"background-image: url(&quot;../assets/glasshouse.jpg&quot;); position: absolute; left: 66.5801%; top: 0px;\">\n              <div class=\"fg__item__text\">\n                  <span>Glass House</span>\n                  <h2>Glass House</h2>\n              </div>\n          </div>\n          <div class=\"fg__item event large_item set-bg\" data-setbg=\"img/features/feature-4.jpg\" style=\"background-image: url(&quot;../assets/rollingshutter.jpg&quot;); position: absolute; left: 0%; top: 268px;\">\n              <div class=\"fg__item__text\">\n                  <span>Others</span>\n                  <h2>Shutters</h2>\n              </div>\n          </div>\n      </div>\n        </div>\n</section>\n"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__("./src/app/work/work.component.html"),
            styles: [__webpack_require__("./src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map