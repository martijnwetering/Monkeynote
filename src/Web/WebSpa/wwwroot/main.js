(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./Client/$$_lazy_route_resource lazy recursive":
/*!*************************************************************!*\
  !*** ./Client/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./Client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./Client/app/app-routing.module.ts":
/*!******************************************!*\
  !*** ./Client/app/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_require_authenticated_user_route_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/require-authenticated-user-route-guard.service */ "./Client/app/shared/require-authenticated-user-route-guard.service.ts");
/* harmony import */ var _signin_oidc_signin_oidc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin-oidc/signin-oidc.component */ "./Client/app/signin-oidc/signin-oidc.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', redirectTo: 'notes', pathMatch: 'full',
        canActivate: [_shared_require_authenticated_user_route_guard_service__WEBPACK_IMPORTED_MODULE_2__["RequireAuthenticatedUserRouteGuardService"]]
    },
    { path: 'signin-oidc', component: _signin_oidc_signin_oidc_component__WEBPACK_IMPORTED_MODULE_3__["SigninOidcComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./Client/app/app.component.html":
/*!***************************************!*\
  !*** ./Client/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n\n"

/***/ }),

/***/ "./Client/app/app.component.scss":
/*!***************************************!*\
  !*** ./Client/app/app.component.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./Client/app/app.component.ts":
/*!*************************************!*\
  !*** ./Client/app/app.component.ts ***!
  \*************************************/
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
        this.title = 'WebSpa';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./Client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./Client/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./Client/app/app.module.ts":
/*!**********************************!*\
  !*** ./Client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./Client/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./Client/app/app.component.ts");
/* harmony import */ var _signin_oidc_signin_oidc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin-oidc/signin-oidc.component */ "./Client/app/signin-oidc/signin-oidc.component.ts");
/* harmony import */ var _shared_require_authenticated_user_route_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/require-authenticated-user-route-guard.service */ "./Client/app/shared/require-authenticated-user-route-guard.service.ts");
/* harmony import */ var _shared_open_id_connect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/open-id-connect.service */ "./Client/app/shared/open-id-connect.service.ts");
/* harmony import */ var _redirect_silent_renew_redirect_silent_renew_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redirect-silent-renew/redirect-silent-renew.component */ "./Client/app/redirect-silent-renew/redirect-silent-renew.component.ts");
/* harmony import */ var _shared_write_out_json_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/write-out-json-interceptor */ "./Client/app/shared/write-out-json-interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_ensure_accept_header_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/ensure-accept-header-interceptor */ "./Client/app/shared/ensure-accept-header-interceptor.ts");
/* harmony import */ var _shared_add_authorization_header_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/add-authorization-header-interceptor */ "./Client/app/shared/add-authorization-header-interceptor.ts");
/* harmony import */ var _notebooks_notes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notebooks/notes.module */ "./Client/app/notebooks/notes.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/ui.module */ "./Client/app/ui/ui.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _signin_oidc_signin_oidc_component__WEBPACK_IMPORTED_MODULE_4__["SigninOidcComponent"],
                _redirect_silent_renew_redirect_silent_renew_component__WEBPACK_IMPORTED_MODULE_7__["RedirectSilentRenewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _notebooks_notes_module__WEBPACK_IMPORTED_MODULE_12__["NotesModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_13__["UiModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _shared_write_out_json_interceptor__WEBPACK_IMPORTED_MODULE_8__["WriteOutJsonInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _shared_ensure_accept_header_interceptor__WEBPACK_IMPORTED_MODULE_10__["EnsureAcceptHeaderInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _shared_add_authorization_header_interceptor__WEBPACK_IMPORTED_MODULE_11__["AddAuthorizationHeaderInterceptor"],
                    multi: true,
                    deps: [_shared_open_id_connect_service__WEBPACK_IMPORTED_MODULE_6__["OpenIdConnectService"]]
                },
                _shared_require_authenticated_user_route_guard_service__WEBPACK_IMPORTED_MODULE_5__["RequireAuthenticatedUserRouteGuardService"],
                _shared_open_id_connect_service__WEBPACK_IMPORTED_MODULE_6__["OpenIdConnectService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./Client/app/notebooks/default-notebook-resolver.service.ts":
/*!*******************************************************************!*\
  !*** ./Client/app/notebooks/default-notebook-resolver.service.ts ***!
  \*******************************************************************/
/*! exports provided: DefaultNotebookResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultNotebookResolverService", function() { return DefaultNotebookResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_notebooks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/notebooks.service */ "./Client/app/notebooks/shared/notebooks.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultNotebookResolverService = /** @class */ (function () {
    function DefaultNotebookResolverService(notebooksService) {
        this.notebooksService = notebooksService;
    }
    DefaultNotebookResolverService.prototype.resolve = function (route, state) {
        return this.notebooksService.getDefaultNotebook();
    };
    DefaultNotebookResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_notebooks_service__WEBPACK_IMPORTED_MODULE_1__["NotebooksService"]])
    ], DefaultNotebookResolverService);
    return DefaultNotebookResolverService;
}());



/***/ }),

/***/ "./Client/app/notebooks/notebooks/notebooks-resolver.service.ts":
/*!**********************************************************************!*\
  !*** ./Client/app/notebooks/notebooks/notebooks-resolver.service.ts ***!
  \**********************************************************************/
/*! exports provided: NotebooksResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebooksResolverService", function() { return NotebooksResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_notebooks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/notebooks.service */ "./Client/app/notebooks/shared/notebooks.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotebooksResolverService = /** @class */ (function () {
    function NotebooksResolverService(notebooksService) {
        this.notebooksService = notebooksService;
    }
    NotebooksResolverService.prototype.resolve = function (route, state) {
        return this.notebooksService.getNotebooks();
    };
    NotebooksResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_notebooks_service__WEBPACK_IMPORTED_MODULE_1__["NotebooksService"]])
    ], NotebooksResolverService);
    return NotebooksResolverService;
}());



/***/ }),

/***/ "./Client/app/notebooks/notebooks/notebooks.component.html":
/*!*****************************************************************!*\
  !*** ./Client/app/notebooks/notebooks/notebooks.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor='let notebook of notebooks'><a [routerLink]=\"['/notes/list', this.notebook.notebookId]\">{{ notebook.title }}</a></li>\n</ul>\n"

/***/ }),

/***/ "./Client/app/notebooks/notebooks/notebooks.component.scss":
/*!*****************************************************************!*\
  !*** ./Client/app/notebooks/notebooks/notebooks.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./Client/app/notebooks/notebooks/notebooks.component.ts":
/*!***************************************************************!*\
  !*** ./Client/app/notebooks/notebooks/notebooks.component.ts ***!
  \***************************************************************/
/*! exports provided: NotebooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebooksComponent", function() { return NotebooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotebooksComponent = /** @class */ (function () {
    function NotebooksComponent(route) {
        this.route = route;
    }
    NotebooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) { return _this.notebooks = data['notebooks']; });
    };
    NotebooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notebooks',
            template: __webpack_require__(/*! ./notebooks.component.html */ "./Client/app/notebooks/notebooks/notebooks.component.html"),
            styles: [__webpack_require__(/*! ./notebooks.component.scss */ "./Client/app/notebooks/notebooks/notebooks.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NotebooksComponent);
    return NotebooksComponent;
}());



/***/ }),

/***/ "./Client/app/notebooks/notes-list/notebook-resolver.service.ts":
/*!**********************************************************************!*\
  !*** ./Client/app/notebooks/notes-list/notebook-resolver.service.ts ***!
  \**********************************************************************/
/*! exports provided: NotebookResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookResolverService", function() { return NotebookResolverService; });
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

var NotebookResolverService = /** @class */ (function () {
    function NotebookResolverService() {
    }
    NotebookResolverService.prototype.resolve = function (route, state) {
        return route.parent.data['defaultNotebook'][0];
    };
    NotebookResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotebookResolverService);
    return NotebookResolverService;
}());



/***/ }),

/***/ "./Client/app/notebooks/notes-list/notes-list.component.html":
/*!*******************************************************************!*\
  !*** ./Client/app/notebooks/notes-list/notes-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex='30%' class='note-list'>\n  <h2 class='notebook-title mat-title' *ngIf='notebook'>{{ notebook.title }}</h2>\n  <div class='note-list-item' *ngFor='let note of notebook?.notes' (click)='selectNote(note)'>\n    <span class='title mat-subheading-1'>{{ note.title }}</span>\n  </div>\n</div>\n\n<div fxFlex='70%' *ngIf='selectedNote'>\n  <quill-editor [style]=\"{height: '40px', overflow: hidden}\" [(ngModel)]=\"selectedNote.title\" [modules]=\"{toolbar: false}\"></quill-editor>\n  <quill-editor [style]=\"{height: '200px'}\" [(ngModel)]='selectedNote.text'></quill-editor>\n</div>\n"

/***/ }),

/***/ "./Client/app/notebooks/notes-list/notes-list.component.scss":
/*!*******************************************************************!*\
  !*** ./Client/app/notebooks/notes-list/notes-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".note-list {\n  background-color: red;\n  margin-right: 2rem; }\n\n.note-list-item:hover {\n  background-color: #ffffff; }\n\n.note-list-item {\n  padding: 1rem; }\n\n.title {\n  display: block; }\n"

/***/ }),

/***/ "./Client/app/notebooks/notes-list/notes-list.component.ts":
/*!*****************************************************************!*\
  !*** ./Client/app/notebooks/notes-list/notes-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_notebooks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/notebooks.service */ "./Client/app/notebooks/shared/notebooks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Quill = quill__WEBPACK_IMPORTED_MODULE_4__;
// override p with div tag
var Parchment = Quill.import('parchment');
var Block = Parchment.query('block');
Block.tagName = 'DIV';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);
var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(route, notebooksService) {
        this.route = route;
        this.notebooksService = notebooksService;
    }
    NotesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.queryParams['defaultNotebook']) {
            this.route.data.subscribe(function (data) {
                _this.notebook = data['defaultNotebook'];
                _this.selectedNote = _this.notebook.notes[0];
            });
        }
        else {
            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return params['notebookId']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (notebookId) { return _this.notebooksService.getNotebook(notebookId); })).subscribe(function (notebook) {
                _this.notebook = notebook;
                _this.selectedNote = _this.notebook.notes[0];
            });
        }
    };
    NotesListComponent.prototype.selectNote = function (note) {
        this.selectedNote = note;
    };
    NotesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes-list',
            template: __webpack_require__(/*! ./notes-list.component.html */ "./Client/app/notebooks/notes-list/notes-list.component.html"),
            styles: [__webpack_require__(/*! ./notes-list.component.scss */ "./Client/app/notebooks/notes-list/notes-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_notebooks_service__WEBPACK_IMPORTED_MODULE_1__["NotebooksService"]])
    ], NotesListComponent);
    return NotesListComponent;
}());



/***/ }),

/***/ "./Client/app/notebooks/notes-routing.module.ts":
/*!******************************************************!*\
  !*** ./Client/app/notebooks/notes-routing.module.ts ***!
  \******************************************************/
/*! exports provided: NotesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesRoutingModule", function() { return NotesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes.component */ "./Client/app/notebooks/notes.component.ts");
/* harmony import */ var _shared_require_authenticated_user_route_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/require-authenticated-user-route-guard.service */ "./Client/app/shared/require-authenticated-user-route-guard.service.ts");
/* harmony import */ var _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes-list/notes-list.component */ "./Client/app/notebooks/notes-list/notes-list.component.ts");
/* harmony import */ var _notebooks_notebooks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notebooks/notebooks.component */ "./Client/app/notebooks/notebooks/notebooks.component.ts");
/* harmony import */ var _notebooks_notebooks_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notebooks/notebooks-resolver.service */ "./Client/app/notebooks/notebooks/notebooks-resolver.service.ts");
/* harmony import */ var _notes_list_notebook_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notes-list/notebook-resolver.service */ "./Client/app/notebooks/notes-list/notebook-resolver.service.ts");
/* harmony import */ var _default_notebook_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default-notebook-resolver.service */ "./Client/app/notebooks/default-notebook-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'notes', component: _notes_component__WEBPACK_IMPORTED_MODULE_2__["NotesComponent"],
        canActivate: [_shared_require_authenticated_user_route_guard_service__WEBPACK_IMPORTED_MODULE_3__["RequireAuthenticatedUserRouteGuardService"]],
        resolve: { defaultNotebook: _default_notebook_resolver_service__WEBPACK_IMPORTED_MODULE_8__["DefaultNotebookResolverService"] },
        children: [
            { path: 'list/:notebookId', component: _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__["NotesListComponent"], resolve: { defaultNotebook: _notes_list_notebook_resolver_service__WEBPACK_IMPORTED_MODULE_7__["NotebookResolverService"] } },
            { path: 'notebooks', component: _notebooks_notebooks_component__WEBPACK_IMPORTED_MODULE_5__["NotebooksComponent"], resolve: { notebooks: _notebooks_notebooks_resolver_service__WEBPACK_IMPORTED_MODULE_6__["NotebooksResolverService"] } }
        ]
    }
];
var NotesRoutingModule = /** @class */ (function () {
    function NotesRoutingModule() {
    }
    NotesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotesRoutingModule);
    return NotesRoutingModule;
}());



/***/ }),

/***/ "./Client/app/notebooks/notes-side-nav/notes-side-nav.component.html":
/*!***************************************************************************!*\
  !*** ./Client/app/notebooks/notes-side-nav/notes-side-nav.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/notes/notebooks']\" routerLinkActive=\"active\" ><mat-icon>book</mat-icon> Notebooks</a>\n"

/***/ }),

/***/ "./Client/app/notebooks/notes-side-nav/notes-side-nav.component.scss":
/*!***************************************************************************!*\
  !*** ./Client/app/notebooks/notes-side-nav/notes-side-nav.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./Client/app/notebooks/notes-side-nav/notes-side-nav.component.ts":
/*!*************************************************************************!*\
  !*** ./Client/app/notebooks/notes-side-nav/notes-side-nav.component.ts ***!
  \*************************************************************************/
/*! exports provided: NotesSideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesSideNavComponent", function() { return NotesSideNavComponent; });
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

var NotesSideNavComponent = /** @class */ (function () {
    function NotesSideNavComponent() {
    }
    NotesSideNavComponent.prototype.ngOnInit = function () {
    };
    NotesSideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes-side-nav',
            template: __webpack_require__(/*! ./notes-side-nav.component.html */ "./Client/app/notebooks/notes-side-nav/notes-side-nav.component.html"),
            styles: [__webpack_require__(/*! ./notes-side-nav.component.scss */ "./Client/app/notebooks/notes-side-nav/notes-side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotesSideNavComponent);
    return NotesSideNavComponent;
}());



/***/ }),

/***/ "./Client/app/notebooks/notes.component.html":
/*!***************************************************!*\
  !*** ./Client/app/notebooks/notes.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mat-typography\" fxLayout='row' fxLayoutGap=\"2rem\">\n\n  <div class=\"notebooks side-nav\" fxFlex='20%'>\n    <app-notes-side-nav></app-notes-side-nav>\n  </div>\n\n  <div fxLayout='row'>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./Client/app/notebooks/notes.component.scss":
/*!***************************************************!*\
  !*** ./Client/app/notebooks/notes.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav {\n  background-color: indigo; }\n"

/***/ }),

/***/ "./Client/app/notebooks/notes.component.ts":
/*!*************************************************!*\
  !*** ./Client/app/notebooks/notes.component.ts ***!
  \*************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesComponent = /** @class */ (function () {
    function NotesComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            var notebookId = data['defaultNotebook'][0].notebookId;
            _this.router.navigate(['/notes/list', notebookId], { queryParams: { defaultNotebook: true } });
        });
    };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./Client/app/notebooks/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.scss */ "./Client/app/notebooks/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./Client/app/notebooks/notes.module.ts":
/*!**********************************************!*\
  !*** ./Client/app/notebooks/notes.module.ts ***!
  \**********************************************/
/*! exports provided: NotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _notes_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes-routing.module */ "./Client/app/notebooks/notes-routing.module.ts");
/* harmony import */ var _notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notes.component */ "./Client/app/notebooks/notes.component.ts");
/* harmony import */ var _shared_notebooks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/notebooks.service */ "./Client/app/notebooks/shared/notebooks.service.ts");
/* harmony import */ var _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notes-list/notes-list.component */ "./Client/app/notebooks/notes-list/notes-list.component.ts");
/* harmony import */ var _notes_side_nav_notes_side_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notes-side-nav/notes-side-nav.component */ "./Client/app/notebooks/notes-side-nav/notes-side-nav.component.ts");
/* harmony import */ var _notebooks_notebooks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notebooks/notebooks.component */ "./Client/app/notebooks/notebooks/notebooks.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var NotesModule = /** @class */ (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _notes_routing_module__WEBPACK_IMPORTED_MODULE_6__["NotesRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_12__["QuillModule"]
            ],
            declarations: [
                _notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"],
                _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_9__["NotesListComponent"],
                _notes_side_nav_notes_side_nav_component__WEBPACK_IMPORTED_MODULE_10__["NotesSideNavComponent"],
                _notebooks_notebooks_component__WEBPACK_IMPORTED_MODULE_11__["NotebooksComponent"]
            ],
            providers: [
                _shared_notebooks_service__WEBPACK_IMPORTED_MODULE_8__["NotebooksService"]
            ]
        })
    ], NotesModule);
    return NotesModule;
}());



/***/ }),

/***/ "./Client/app/notebooks/shared/notebooks.service.ts":
/*!**********************************************************!*\
  !*** ./Client/app/notebooks/shared/notebooks.service.ts ***!
  \**********************************************************/
/*! exports provided: NotebooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebooksService", function() { return NotebooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./Client/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotebooksService = /** @class */ (function () {
    function NotebooksService(httpClient) {
        this.httpClient = httpClient;
        this._apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    NotebooksService.prototype.getNotebooks = function () {
        return this.httpClient.get(this._apiUrl + "/notes/notebooks", this.getHeaders());
    };
    NotebooksService.prototype.getNotebook = function (notebookId) {
        return this.httpClient.get(this._apiUrl + "/notes/notebooks/" + notebookId, this.getHeaders());
    };
    NotebooksService.prototype.getDefaultNotebook = function () {
        return this.httpClient.get(this._apiUrl + "/notes/notebooks?isDefaultNotebook=true", this.getHeaders());
    };
    NotebooksService.prototype.getHeaders = function () {
        return { headers: { 'Accept': 'application/json' } };
    };
    NotebooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotebooksService);
    return NotebooksService;
}());



/***/ }),

/***/ "./Client/app/redirect-silent-renew/redirect-silent-renew.component.html":
/*!*******************************************************************************!*\
  !*** ./Client/app/redirect-silent-renew/redirect-silent-renew.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  redirect-silent-renew works!\n</p>\n"

/***/ }),

/***/ "./Client/app/redirect-silent-renew/redirect-silent-renew.component.scss":
/*!*******************************************************************************!*\
  !*** ./Client/app/redirect-silent-renew/redirect-silent-renew.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./Client/app/redirect-silent-renew/redirect-silent-renew.component.ts":
/*!*****************************************************************************!*\
  !*** ./Client/app/redirect-silent-renew/redirect-silent-renew.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RedirectSilentRenewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectSilentRenewComponent", function() { return RedirectSilentRenewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_open_id_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/open-id-connect.service */ "./Client/app/shared/open-id-connect.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedirectSilentRenewComponent = /** @class */ (function () {
    function RedirectSilentRenewComponent(openIdConnectService) {
        this.openIdConnectService = openIdConnectService;
    }
    RedirectSilentRenewComponent.prototype.ngOnInit = function () {
        this.openIdConnectService.handleSilentCallback();
    };
    RedirectSilentRenewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redirect-silent-renew',
            template: __webpack_require__(/*! ./redirect-silent-renew.component.html */ "./Client/app/redirect-silent-renew/redirect-silent-renew.component.html"),
            styles: [__webpack_require__(/*! ./redirect-silent-renew.component.scss */ "./Client/app/redirect-silent-renew/redirect-silent-renew.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_open_id_connect_service__WEBPACK_IMPORTED_MODULE_1__["OpenIdConnectService"]])
    ], RedirectSilentRenewComponent);
    return RedirectSilentRenewComponent;
}());



/***/ }),

/***/ "./Client/app/shared/add-authorization-header-interceptor.ts":
/*!*******************************************************************!*\
  !*** ./Client/app/shared/add-authorization-header-interceptor.ts ***!
  \*******************************************************************/
/*! exports provided: AddAuthorizationHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAuthorizationHeaderInterceptor", function() { return AddAuthorizationHeaderInterceptor; });
var AddAuthorizationHeaderInterceptor = /** @class */ (function () {
    function AddAuthorizationHeaderInterceptor(openIdConnectService) {
        this.openIdConnectService = openIdConnectService;
    }
    AddAuthorizationHeaderInterceptor.prototype.intercept = function (req, next) {
        var request = req.clone({ setHeaders: { Authorization: this.openIdConnectService.user.token_type
                    + " " + this.openIdConnectService.user.access_token } });
        return next.handle(request);
    };
    return AddAuthorizationHeaderInterceptor;
}());



/***/ }),

/***/ "./Client/app/shared/ensure-accept-header-interceptor.ts":
/*!***************************************************************!*\
  !*** ./Client/app/shared/ensure-accept-header-interceptor.ts ***!
  \***************************************************************/
/*! exports provided: EnsureAcceptHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureAcceptHeaderInterceptor", function() { return EnsureAcceptHeaderInterceptor; });
var EnsureAcceptHeaderInterceptor = /** @class */ (function () {
    function EnsureAcceptHeaderInterceptor() {
    }
    EnsureAcceptHeaderInterceptor.prototype.intercept = function (req, next) {
        if (!req.headers.has('Accept')) {
            req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        }
        return next.handle(req);
    };
    return EnsureAcceptHeaderInterceptor;
}());



/***/ }),

/***/ "./Client/app/shared/open-id-connect.service.ts":
/*!******************************************************!*\
  !*** ./Client/app/shared/open-id-connect.service.ts ***!
  \******************************************************/
/*! exports provided: OpenIdConnectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenIdConnectService", function() { return OpenIdConnectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./Client/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





oidc_client__WEBPACK_IMPORTED_MODULE_1__["Log"].logger = console;
oidc_client__WEBPACK_IMPORTED_MODULE_1__["Log"].level = oidc_client__WEBPACK_IMPORTED_MODULE_1__["Log"].DEBUG;
var OpenIdConnectService = /** @class */ (function () {
    function OpenIdConnectService() {
        var _this = this;
        this.userManager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__["UserManager"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].openIdConnectSettings);
        this.loggedIn = false;
        this.userLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.userManager.clearStaleState();
        this.userManager.getUser().then(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.loggedIn = true;
                _this.userLoaded$.next(true);
            }
            else {
                _this.loggedIn = false;
                _this.userLoaded$.next(false);
            }
        }).catch(function (err) {
            _this.loggedIn = false;
        });
        this.userManager.events.addUserLoaded(function (user) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                console.log('User loaded.', user);
            }
            _this.currentUser = user;
            _this.loggedIn = true;
            _this.userLoaded$.next(true);
        });
        this.userManager.events.addUserUnloaded(function (e) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                console.log('User unloaded');
            }
            _this.currentUser = null;
            _this.loggedIn = false;
            _this.userLoaded$.next(false);
        });
    }
    Object.defineProperty(OpenIdConnectService.prototype, "userAvailable", {
        get: function () {
            return this.currentUser != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpenIdConnectService.prototype, "user", {
        get: function () {
            return this.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    OpenIdConnectService.prototype.isLoggedInObs = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.userManager.getUser())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user) {
                return true;
            }
            else {
                return false;
            }
        }));
    };
    OpenIdConnectService.prototype.triggerSignIn = function () {
        this.userManager.signinRedirect().then(function () {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                console.log('Redirection to signin triggered.');
            }
        });
    };
    OpenIdConnectService.prototype.handleCallback = function () {
        this.userManager.signinRedirectCallback().then(function (user) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                console.log('Callback after signin handled.', user);
            }
        });
    };
    OpenIdConnectService.prototype.handleSilentCallback = function () {
        var _this = this;
        this.userManager.signinSilentCallback().then(function (user) {
            _this.currentUser = user;
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                console.log('Callback after silent signin handled.', user);
            }
        });
    };
    OpenIdConnectService.prototype.triggerSignOut = function () {
        this.userManager.signoutRedirect().then(function (resp) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                console.log('Redirection to sign out triggered.', resp);
            }
        });
    };
    OpenIdConnectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], OpenIdConnectService);
    return OpenIdConnectService;
}());



/***/ }),

/***/ "./Client/app/shared/require-authenticated-user-route-guard.service.ts":
/*!*****************************************************************************!*\
  !*** ./Client/app/shared/require-authenticated-user-route-guard.service.ts ***!
  \*****************************************************************************/
/*! exports provided: RequireAuthenticatedUserRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequireAuthenticatedUserRouteGuardService", function() { return RequireAuthenticatedUserRouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _open_id_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open-id-connect.service */ "./Client/app/shared/open-id-connect.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequireAuthenticatedUserRouteGuardService = /** @class */ (function () {
    function RequireAuthenticatedUserRouteGuardService(openIdConnectService, router) {
        this.openIdConnectService = openIdConnectService;
        this.router = router;
    }
    RequireAuthenticatedUserRouteGuardService.prototype.canActivate = function () {
        var _this = this;
        var isLoggedIn = this.openIdConnectService.isLoggedInObs();
        isLoggedIn.subscribe(function (loggedIn) {
            if (!loggedIn) {
                _this.openIdConnectService.triggerSignIn();
            }
        });
        return isLoggedIn;
    };
    RequireAuthenticatedUserRouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_open_id_connect_service__WEBPACK_IMPORTED_MODULE_2__["OpenIdConnectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequireAuthenticatedUserRouteGuardService);
    return RequireAuthenticatedUserRouteGuardService;
}());



/***/ }),

/***/ "./Client/app/shared/write-out-json-interceptor.ts":
/*!*********************************************************!*\
  !*** ./Client/app/shared/write-out-json-interceptor.ts ***!
  \*********************************************************/
/*! exports provided: WriteOutJsonInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteOutJsonInterceptor", function() { return WriteOutJsonInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

var WriteOutJsonInterceptor = /** @class */ (function () {
    function WriteOutJsonInterceptor() {
    }
    WriteOutJsonInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) { return console.log(JSON.stringify(data, null, '\t')); }));
    };
    return WriteOutJsonInterceptor;
}());



/***/ }),

/***/ "./Client/app/signin-oidc/signin-oidc.component.html":
/*!***********************************************************!*\
  !*** ./Client/app/signin-oidc/signin-oidc.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signin-oidc works!\n</p>\n"

/***/ }),

/***/ "./Client/app/signin-oidc/signin-oidc.component.scss":
/*!***********************************************************!*\
  !*** ./Client/app/signin-oidc/signin-oidc.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./Client/app/signin-oidc/signin-oidc.component.ts":
/*!*********************************************************!*\
  !*** ./Client/app/signin-oidc/signin-oidc.component.ts ***!
  \*********************************************************/
/*! exports provided: SigninOidcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninOidcComponent", function() { return SigninOidcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_open_id_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/open-id-connect.service */ "./Client/app/shared/open-id-connect.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./Client/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninOidcComponent = /** @class */ (function () {
    function SigninOidcComponent(openIdConnectService, router) {
        this.openIdConnectService = openIdConnectService;
        this.router = router;
    }
    SigninOidcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openIdConnectService.userLoaded$.subscribe(function (userLoaded) {
            if (userLoaded) {
                _this.router.navigate(['./']);
            }
            else {
                if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                    console.log("An error happened: user wasn't loaded.");
                }
            }
        });
        this.openIdConnectService.handleCallback();
    };
    SigninOidcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin-oidc',
            template: __webpack_require__(/*! ./signin-oidc.component.html */ "./Client/app/signin-oidc/signin-oidc.component.html"),
            styles: [__webpack_require__(/*! ./signin-oidc.component.scss */ "./Client/app/signin-oidc/signin-oidc.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_open_id_connect_service__WEBPACK_IMPORTED_MODULE_1__["OpenIdConnectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninOidcComponent);
    return SigninOidcComponent;
}());



/***/ }),

/***/ "./Client/app/ui/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./Client/app/ui/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./Client/app/ui/footer/footer.component.scss":
/*!****************************************************!*\
  !*** ./Client/app/ui/footer/footer.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./Client/app/ui/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./Client/app/ui/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./Client/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./Client/app/ui/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./Client/app/ui/header/header.component.html":
/*!****************************************************!*\
  !*** ./Client/app/ui/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./Client/app/ui/header/header.component.scss":
/*!****************************************************!*\
  !*** ./Client/app/ui/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./Client/app/ui/header/header.component.ts":
/*!**************************************************!*\
  !*** ./Client/app/ui/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./Client/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./Client/app/ui/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./Client/app/ui/layout.component.html":
/*!*********************************************!*\
  !*** ./Client/app/ui/layout.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./Client/app/ui/layout.component.scss":
/*!*********************************************!*\
  !*** ./Client/app/ui/layout.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./Client/app/ui/layout.component.ts":
/*!*******************************************!*\
  !*** ./Client/app/ui/layout.component.ts ***!
  \*******************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./Client/app/ui/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./Client/app/ui/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./Client/app/ui/ui.module.ts":
/*!************************************!*\
  !*** ./Client/app/ui/ui.module.ts ***!
  \************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./Client/app/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./Client/app/ui/footer/footer.component.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./Client/app/ui/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
            exports: [
                _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./Client/environments/environment.ts":
/*!********************************************!*\
  !*** ./Client/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5200/api/v1',
    openIdConnectSettings: {
        authority: 'http://localhost:5310/',
        client_id: 'monkeynotewebclient',
        redirect_uri: 'http://localhost:4200/signin-oidc',
        scope: 'openid profile roles monkeynote.notes.api',
        response_type: 'id_token token',
        post_logout_redirect_uri: 'http://localhost:4200/',
        automaticSilentRenew: true,
        silent_redirect_uri: 'http://localhost:4200/silent-renew.html'
    }
};


/***/ }),

/***/ "./Client/main.ts":
/*!************************!*\
  !*** ./Client/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./Client/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./Client/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./Client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\source\projects\Monkeynote\src\Web\WebSpa\Client\main.ts */"./Client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map