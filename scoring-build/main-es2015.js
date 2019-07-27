(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row style=\"z-index:4;\" class=\"mat-elevation-z4\">\n    <span>Blazing New Paths</span>\n    <div class=\"buttons-right\" style=\"position:absolute; right:0; margin-right:40px;\">\n      <button mat-raised-button (click)=\"clear()\"><mat-icon>refresh</mat-icon></button>\n      <button *ngIf=\" autoMode\" mat-raised-button (click)=\"autoMode=false\">Auto</button>\n      <button *ngIf=\"!autoMode\" mat-raised-button (click)=\"autoMode=true\">Tele</button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div *ngIf=\"autoMode\" class=\"content\">\n  <div class=\"level-row\">\n    <button mat-raised-button class=\"level-indicator L1\" (click)=\"incCity(true,1)\">L1</button>\n    <button mat-raised-button class=\"level-indicator L2\" (click)=\"incCity(true,2)\">L2</button>\n    <button mat-raised-button class=\"level-indicator L3\" (click)=\"incCity(true,3)\">L3</button>\n    <button mat-raised-button class=\"level-indicator L4\" (click)=\"incCity(true,4)\">L4</button>\n    <button mat-raised-button class=\"level-indicator L5\" (click)=\"incCity(true,5)\">L5</button>\n    <button mat-raised-button class=\"level-indicator L6\" (click)=\"incCity(true,6)\">L6</button>\n  </div>\n\n  <div class=\"level-row\">\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(true,1)\">{{score.auto.city[0]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(true,2)\">{{score.auto.city[1]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(true,3)\">{{score.auto.city[2]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(true,4)\">{{score.auto.city[3]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(true,5)\">{{score.auto.city[4]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(true,6)\">{{score.auto.city[5]}}</button>\n  </div>\n\n  <div class=\"incDecContainer\">\n    <span class=\"incDecText\">Turning Junctions</span>\n    <button class=\"incDecButton\" mat-button (click)=\"autoModify('turningJunc', -1)\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n    <div class=\"incDecValue\" mat-raised-button>{{score.auto.turningJunc}}</div>\n    <button class=\"incDecButton\" mat-button (click)=\"autoModify('turningJunc', +1)\"><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n  <div class=\"incDecContainer\">\n    <span class=\"incDecText\">Continuity Junctions</span>\n    <button class=\"incDecButton\" mat-button (click)=\"autoModify('contJunc', -1)\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n    <div class=\"incDecValue\" mat-raised-button>{{score.auto.contJunc}}</div>\n    <button class=\"incDecButton\" mat-button (click)=\"autoModify('contJunc', +1)\"><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n  <hr>\n\n  <div class=\"incDecContainer\">\n    <span class=\"incDecText\">Mountain</span>\n    <button class=\"incDecButton\" mat-button (click)=\"autoModify('mountain', -1)\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n    <div class=\"incDecValue\" mat-raised-button>{{score.auto.mountain}}</div>\n    <button class=\"incDecButton\" mat-button (click)=\"autoModify('mountain', +1)\"><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n  <div class=\"incDecContainer\">\n    <button mat-raised-button style=\"flex: 1 0 auto\" color=\"warn\" (click)=\"teleModify('touch', +1)\">Touch Penalty</button>\n    <div style=\"width: 10px; flex: 0 0 auto\"></div>\n    <button mat-raised-button style=\"flex: 0 0 auto\" (click)=\"teleModify('touch', -1)\">{{score.tele.touch}}</button>\n  </div>\n</div>\n\n<div *ngIf=\"!autoMode\" class=\"content\">\n  <div class=\"level-row\">\n    <button mat-raised-button class=\"level-indicator L1\" (click)=\"incCity(false,1)\">L1</button>\n    <button mat-raised-button class=\"level-indicator L2\" (click)=\"incCity(false,2)\">L2</button>\n    <button mat-raised-button class=\"level-indicator L3\" (click)=\"incCity(false,3)\">L3</button>\n    <button mat-raised-button class=\"level-indicator L4\" (click)=\"incCity(false,4)\">L4</button>\n    <button mat-raised-button class=\"level-indicator L5\" (click)=\"incCity(false,5)\">L5</button>\n    <button mat-raised-button class=\"level-indicator L6\" (click)=\"incCity(false,6)\">L6</button>\n  </div>\n\n  <div class=\"level-row\">\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(false,1)\">{{score.tele.city[0]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(false,2)\">{{score.tele.city[1]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(false,3)\">{{score.tele.city[2]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(false,4)\">{{score.tele.city[3]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(false,5)\">{{score.tele.city[4]}}</button>\n    <button mat-raised-button class=\"level-indicator\" (click)=\"decCity(false,6)\">{{score.tele.city[5]}}</button>\n  </div>\n\n  <div class=\"incDecContainer\">\n    <span class=\"incDecText\">Turning Junctions</span>\n    <button class=\"incDecButton\" mat-button (click)=\"teleModify('turningJunc', -1)\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n    <div class=\"incDecValue\" mat-raised-button>{{score.tele.turningJunc}}</div>\n    <button class=\"incDecButton\" mat-button (click)=\"teleModify('turningJunc', +1)\"><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n  <div class=\"incDecContainer\">\n    <span class=\"incDecText\">Continuity Junctions</span>\n    <button class=\"incDecButton\" mat-button (click)=\"teleModify('contJunc', -1)\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n    <div class=\"incDecValue\" mat-raised-button>{{score.tele.contJunc}}</div>\n    <button class=\"incDecButton\" mat-button (click)=\"teleModify('contJunc', +1)\"><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n  <hr>\n\n  <div class=\"incDecContainer\">\n    <span class=\"incDecText\">Forest</span>\n    <button class=\"incDecButton\" mat-button (click)=\"teleModify('forest', -1)\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n    <div class=\"incDecValue\" mat-raised-button>{{score.tele.forest}}</div>\n    <button class=\"incDecButton\" mat-button (click)=\"teleModify('forest', +1)\"><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n  <div class=\"incDecContainer\">\n    <span class=\"incDecText\">Mountain</span>\n    <button class=\"incDecButton\" mat-button (click)=\"teleModify('mountain', -1)\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n    <div class=\"incDecValue\" mat-raised-button>{{score.tele.mountain}}</div>\n    <button class=\"incDecButton\" mat-button (click)=\"teleModify('mountain', +1)\"><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n  <div class=\"incDecContainer\">\n    <button mat-raised-button style=\"flex: 1 0 auto\" color=\"warn\" (click)=\"teleModify('touch', +1)\">Touch Penalty</button>\n    <div style=\"width: 10px; flex: 0 0 auto\"></div>\n    <button mat-raised-button style=\"flex: 0 0 auto\" (click)=\"teleModify('touch', -1)\">{{score.tele.touch}}</button>\n  </div>\n</div>\n\n<div class=\"content\">\n  <div class=\"incDecContainer\">\n    <span class=\"incDecText\"> Total: {{autoTotal()}} + {{teleTotal()}} - {{score.tele.touch*2}} = {{totalScore()}} </span>\n    <button class=\"incDecButton\" mat-button (click)=\"pushScore()\"><mat-icon>publish</mat-icon></button>\n    <button class=\"incDecButton\" mat-button (click)=\"displayScore()\"><mat-icon>airplay</mat-icon></button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/color-dialog.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/color-dialog.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>What color team is this?</h1>\r\n<div mat-dialog-actions>\r\n  <button mat-button color=\"primary\" mat-dialog-close>Cancel</button>\r\n  <button mat-raised-button style=\"background-color:red\" [mat-dialog-close]=\"'red'\">Red</button>\r\n  <button mat-raised-button style=\"background-color:cornflowerblue\" [mat-dialog-close]=\"'blue'\">Blue</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/display-dialog.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/display-dialog.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Display Scores</h1>\r\n<mat-dialog-content>\r\n  Are you sure you would like to display these scores?<br>\r\n  Blue: {{blue}}<br>\r\n  Red: {{red}}\r\n</mat-dialog-content>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"true\">Yes</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-family: Helvetica;\n}\n\n.content {\n  margin: 20px;\n  width: calc(100% - 40px);\n  overflow: hidden;\n}\n\n.level-row {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.level-indicator {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  text-align: center;\n  margin: 1%;\n  padding: 3%;\n  min-width: 0;\n}\n\n.L1 {\n  background-color: #ff4545;\n}\n\n.L2 {\n  background-color: orange;\n}\n\n.L3 {\n  background-color: #ffee22;\n}\n\n.L4 {\n  background-color: #2fea2f;\n}\n\n.L5 {\n  background-color: #517fff;\n}\n\n.L6 {\n  background-color: #d94af3;\n}\n\n.incDecContainer {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.incDecText {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  padding: 6% 0;\n  font-size: large;\n}\n\n.incDecButton {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  padding: 3%;\n}\n\n.incDecValue {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  padding: 6% 0;\n}\n\n.scoreText {\n  padding: 6%;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhcnN0clxcQ1NQXFw0aFJvYm90aWNzMjAxOVxcc2NvcmluZy1pbnRlcmZhY2UyMDE5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUFNLHlCQUFBO0FDRU47O0FEREE7RUFBTSx3QkFBQTtBQ0tOOztBREpBO0VBQU0seUJBQUE7QUNRTjs7QURQQTtFQUFNLHlCQUFBO0FDV047O0FEVkE7RUFBTSx5QkFBQTtBQ2NOOztBRGJBO0VBQU0seUJBQUE7QUNpQk47O0FEZkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FDa0JGOztBRGZBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDa0JGOztBRGZBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBQ0EsV0FBQTtBQ2tCRjs7QURmQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGFBQUE7QUNrQkY7O0FEZkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNrQkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5sZXZlbC1yb3cge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ubGV2ZWwtaW5kaWNhdG9ye1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbjoxJTtcclxuICBwYWRkaW5nOjMlO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLkwxIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDU0NSB9XHJcbi5MMiB7IGJhY2tncm91bmQtY29sb3I6IG9yYW5nZSB9XHJcbi5MMyB7IGJhY2tncm91bmQtY29sb3I6ICNmZmVlMjIgfVxyXG4uTDQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmZlYTJmIH1cclxuLkw1IHsgYmFja2dyb3VuZC1jb2xvcjogIzUxN2ZmZiB9XHJcbi5MNiB7IGJhY2tncm91bmQtY29sb3I6ICNkOTRhZjMgfVxyXG5cclxuLmluY0RlY0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5pbmNEZWNUZXh0IHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBwYWRkaW5nOiA2JSAwO1xyXG4gIGZvbnQtc2l6ZTpsYXJnZTtcclxufVxyXG5cclxuLmluY0RlY0J1dHRvbiB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgcGFkZGluZzozJTtcclxufVxyXG5cclxuLmluY0RlY1ZhbHVlIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBwYWRkaW5nOjYlIDA7XHJcbn1cclxuXHJcbi5zY29yZVRleHQge1xyXG4gIHBhZGRpbmc6IDYlO1xyXG4gIGZvbnQtc2l6ZTpsYXJnZTtcclxufVxyXG4iLCJoMiB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sZXZlbC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxldmVsLWluZGljYXRvciB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDMlO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5MMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1NDU7XG59XG5cbi5MMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLkwzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWUyMjtcbn1cblxuLkw0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmZWEyZjtcbn1cblxuLkw1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxN2ZmZjtcbn1cblxuLkw2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NGFmMztcbn1cblxuLmluY0RlY0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5jRGVjVGV4dCB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBwYWRkaW5nOiA2JSAwO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uaW5jRGVjQnV0dG9uIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHBhZGRpbmc6IDMlO1xufVxuXG4uaW5jRGVjVmFsdWUge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgcGFkZGluZzogNiUgMDtcbn1cblxuLnNjb3JlVGV4dCB7XG4gIHBhZGRpbmc6IDYlO1xuICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _color_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-dialog */ "./src/app/color-dialog.ts");
/* harmony import */ var _display_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-dialog */ "./src/app/display-dialog.ts");






const initialScore = {
    auto: {
        city: [0, 0, 0, 0, 0, 0],
        turningJunc: 0,
        contJunc: 0,
        mountain: 0
    },
    tele: {
        city: [0, 0, 0, 0, 0, 0],
        turningJunc: 0,
        contJunc: 0,
        mountain: 0,
        forest: 0,
        touch: 0
    }
};
let AppComponent = class AppComponent {
    constructor(http, dialog, snack) {
        this.http = http;
        this.dialog = dialog;
        this.snack = snack;
        this.title = 'scoring-interface2019';
        this.autoMode = true;
        this.score = JSON.parse(JSON.stringify(initialScore));
    }
    clear() {
        if (window.confirm("Are you sure you would like to clear?")) {
            this.score = JSON.parse(JSON.stringify(initialScore));
            this.autoMode = true;
        }
    }
    decCity(isAuto, level) {
        let city = this.score[isAuto ? "auto" : "tele"].city;
        if (city[level - 1] <= 0) {
            return;
        }
        city[level - 1]--;
    }
    incCity(isAuto, level) {
        this.score[isAuto ? "auto" : "tele"].city[level - 1]++;
    }
    autoModify(propertyName, amount) {
        this.score.auto[propertyName] += amount;
        if (this.score.auto[propertyName] < 0) {
            this.score.auto[propertyName] = 0;
        }
    }
    teleModify(propertyName, amount) {
        this.score.tele[propertyName] += amount;
        if (this.score.tele[propertyName] < 0) {
            this.score.tele[propertyName] = 0;
        }
    }
    cityTotal(auto) {
        let total = 0;
        let city = this.score[auto ? "auto" : "tele"].city;
        for (let i = 0; i < city.length; i++) {
            total += city[i] * (i + 1); //level 1 gives one point, level 2 gives 2 points... etc
        }
        return total;
    }
    autoTotal() {
        return this.cityTotal(true) + this.score.auto.turningJunc * 4 + this.score.auto.contJunc * 3 +
            this.score.auto.mountain * 2;
    }
    teleTotal() {
        return this.cityTotal(false) + this.score.tele.turningJunc * 4 + this.score.tele.contJunc * 3 +
            this.score.tele.forest * 3 + this.score.tele.mountain * 2;
    }
    totalScore() {
        return this.autoTotal() + this.teleTotal() - this.score.tele.touch * 2;
    }
    pushScore() {
        let dialogRef = this.dialog.open(_color_dialog__WEBPACK_IMPORTED_MODULE_4__["ColorDialogComponent"]);
        dialogRef.afterClosed().subscribe(color => {
            if (color) {
                this.http.get("/updateScores?color=" + color + "&score=" + this.totalScore()).subscribe(() => {
                    this.snack.open("Score updated for " + color, "Close", { duration: 3000 });
                }, (err) => {
                    console.error(err);
                    this.snack.open("Failed to update score!", "Close", { duration: 5000 });
                });
            }
        });
    }
    displayScore() {
        let dialogRef = this.dialog.open(_display_dialog__WEBPACK_IMPORTED_MODULE_5__["DisplayDialogComponent"]);
        dialogRef.afterClosed().subscribe(shouldSubmit => {
            if (shouldSubmit) {
                this.http.get("/publish").subscribe(() => {
                    this.snack.open("Scores published", "Close", { duration: 3000 });
                }, (err) => {
                    console.error(err);
                    this.snack.open("Failed to publish scores!", "Close", { duration: 5000 });
                });
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _color_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-dialog */ "./src/app/color-dialog.ts");
/* harmony import */ var _display_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-dialog */ "./src/app/display-dialog.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _color_dialog__WEBPACK_IMPORTED_MODULE_6__["ColorDialogComponent"],
            _display_dialog__WEBPACK_IMPORTED_MODULE_7__["DisplayDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]
        ],
        entryComponents: [
            _color_dialog__WEBPACK_IMPORTED_MODULE_6__["ColorDialogComponent"],
            _display_dialog__WEBPACK_IMPORTED_MODULE_7__["DisplayDialogComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/color-dialog.ts":
/*!*********************************!*\
  !*** ./src/app/color-dialog.ts ***!
  \*********************************/
/*! exports provided: ColorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDialogComponent", function() { return ColorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ColorDialogComponent = class ColorDialogComponent {
};
ColorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'color-dialog',
        template: __webpack_require__(/*! raw-loader!./color-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/color-dialog.html")
    })
], ColorDialogComponent);



/***/ }),

/***/ "./src/app/display-dialog.ts":
/*!***********************************!*\
  !*** ./src/app/display-dialog.ts ***!
  \***********************************/
/*! exports provided: DisplayDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDialogComponent", function() { return DisplayDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let DisplayDialogComponent = class DisplayDialogComponent {
    constructor(http, dialogRef, snack) {
        this.http = http;
        this.dialogRef = dialogRef;
        this.snack = snack;
        this.http.get("/currentScores").subscribe((res) => {
            let data = res;
            this.blue = data.blue;
            this.red = data.red;
        }, (err) => {
            console.error(err);
            this.snack.open("Failed to load scores!", "Close", { duration: 5000 });
            this.dialogRef.close();
        });
    }
};
DisplayDialogComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
DisplayDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'display-dialog',
        template: __webpack_require__(/*! raw-loader!./display-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/display-dialog.html")
    })
], DisplayDialogComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arstr\CSP\4hRobotics2019\scoring-interface2019\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map