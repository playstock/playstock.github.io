webpackJsonp([0],{

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompNewsPageModule", function() { return CompNewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_news__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompNewsPageModule = /** @class */ (function () {
    function CompNewsPageModule() {
    }
    CompNewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comp_news__["a" /* CompNewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comp_news__["a" /* CompNewsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__comp_news__["a" /* CompNewsPage */]
            ]
        })
    ], CompNewsPageModule);
    return CompNewsPageModule;
}());

//# sourceMappingURL=comp-news.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CompNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompNewsPage = /** @class */ (function () {
    function CompNewsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.compNews = [];
    }
    CompNewsPage.prototype.ionViewDidLoad = function () {
        this.symbol = this.navParams.get('symbol');
        this.getCompanyNews();
        console.log('ionViewDidLoad CompNewsPage');
    };
    CompNewsPage.prototype.getCompanyNews = function () {
        var _this = this;
        this.http.jsonp('https://api.iextrading.com/1.0/stock/' + this.symbol + '/news', 'callback').subscribe(function (data) {
            data.forEach(function (value) {
                _this.compNews.push(value);
            });
        });
    };
    CompNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comp-news',template:/*ion-inline-start:"/Users/ggangal/Documents/Personal – DO NOT BACKUP/playstock/src/pages/comp-news/comp-news.html"*/'<!--\n  Generated template for the CompNewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>{{ symbol }} News</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n<ion-list *ngFor="let company of compNews">\n  <ion-card>\n    <ion-card-header>\n     <a href="{{ company.url}}"> {{ company.headline }}</a>\n    </ion-card-header>\n    <ion-card-content>\n      {{ company.summary }}\n      <p>{{company.source}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ggangal/Documents/Personal – DO NOT BACKUP/playstock/src/pages/comp-news/comp-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CompNewsPage);
    return CompNewsPage;
}());

//# sourceMappingURL=comp-news.js.map

/***/ })

});
//# sourceMappingURL=0.js.map