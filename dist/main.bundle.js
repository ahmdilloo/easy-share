webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui fluid-container\">\n  <app-calculator></app-calculator>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  color: red;\n  font-size: 28px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calculator_calculator_component__ = __webpack_require__("../../../../../src/app/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calculator_setup_calculator_setup_component__ = __webpack_require__("../../../../../src/app/calculator-setup/calculator-setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calculator_view_calculator_view_component__ = __webpack_require__("../../../../../src/app/calculator-view/calculator-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calculator_service__ = __webpack_require__("../../../../../src/app/calculator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__calculator_calculator_component__["a" /* CalculatorComponent */],
            __WEBPACK_IMPORTED_MODULE_5__calculator_setup_calculator_setup_component__["a" /* CalculatorSetupComponent */],
            __WEBPACK_IMPORTED_MODULE_6__calculator_view_calculator_view_component__["a" /* CalculatorViewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__calculator_service__["a" /* CalculatorService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/calculator-setup/calculator-setup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui two column computer one column mobile grid\" *ngIf=\"!setup.complete\">\n\t<div class=\"ui centered aligned row\">\n\t\t<div class=\"six wide column\">\n\t\t\t<div class=\"ui left labeled fluid input\">\n\t\t\t\t<div class=\"ui inverted green label\">واحد</div>\n\t\t\t\t<input [(ngModel)]=\"setup.units\" type=\"number\" placeholder=\"تعداد کل واحد های ساختمان\"/>\n\t\t\t</div> \n\t\t</div>\n\t</div>\n\t<div class=\"ui centered aligned row\">\n\t\t<div class=\"six wide column\">\n\t\t\t<div class=\"ui left labeled fluid input\">\n\t\t\t\t<div class=\"ui inverted green label\">تومان</div>\n\t\t\t\t<input [(ngModel)]=\"setup.price\" type=\"number\" placeholder=\"مبلغ قبض\"/>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"ui centered aligned row\">\n\t\t<div class=\"ui buttons\">\n\t      <button \n\t      \tclass=\"ui brown inverted button\"\n\t      \t[class.active]=\"setup.type === 'charge'\"\n\t      \t(click)=\"setType('charge')\">شارژ</button>\n\t      <button\n\t      \tclass=\"ui green inverted button\"\n\t      \t[class.active]=\"setup.type === 'gas'\"\n\t      \t(click)=\"setType('gas')\">قبض گاز</button>\n\t      <button\n\t      \tclass=\"ui blue inverted button\"\n\t      \t[class.active]=\"setup.type === 'water'\"\n\t      \t(click)=\"setType('water')\">قبض آب</button>\n\t    </div>\n\t</div>\n\t<div class=\"ui centered aligned row\">\n\t\t<button class=\"ui primary button\" (click)=\"toggleView()\">ثبت</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/calculator-setup/calculator-setup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator-setup/calculator-setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorSetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator_service__ = __webpack_require__("../../../../../src/app/calculator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorSetupComponent = (function () {
    function CalculatorSetupComponent(_calculatorService) {
        this._calculatorService = _calculatorService;
    }
    CalculatorSetupComponent.prototype.ngOnInit = function () {
        this.setup = this._calculatorService.getSetup();
    };
    CalculatorSetupComponent.prototype.toggleView = function () {
        this._calculatorService.toglgeSetupView();
        this._calculatorService.calculateResult();
    };
    CalculatorSetupComponent.prototype.setType = function (type) {
        this._calculatorService.setType(type);
    };
    return CalculatorSetupComponent;
}());
CalculatorSetupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-calculator-setup',
        template: __webpack_require__("../../../../../src/app/calculator-setup/calculator-setup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calculator-setup/calculator-setup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calculator_service__["a" /* CalculatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calculator_service__["a" /* CalculatorService */]) === "function" && _a || Object])
], CalculatorSetupComponent);

var _a;
//# sourceMappingURL=calculator-setup.component.js.map

/***/ }),

/***/ "../../../../../src/app/calculator-view/calculator-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"setup.complete\">\n\t<!-- Back button -->\n\t<div class=\"ui grid\">\n\t\t<div class=\"ui row\">\n\t\t\t<div class=\"ui right aligned column\">\n\t\t\t\t<div class=\"ui button\" (click)=\"toggleView()\">\n\t\t\t\t\tبازگشت\n\t\t\t\t\t<i class=\"ui right arrow icon\"></i> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t\n\t</div>\n\n\t<!-- Table View -->\n\t<br>\n\t<div class=\"ui fluid-container\">\n\t\t<div class=\"ui right aligned bordered green segment\">\n\t\t\t<textarea class=\"desc\" [(ngModel)]=\"setup.text\"></textarea>\n\t\t</div>\n\t</div>\n\t<table class=\"ui celled table\">\n\t\t\n\t\t<thead>\n\t\t\t<tr class=\"ui center aligned\">\n\t\t\t\t<th>مبلغ سهم</th>\n\t\t\t\t<th>تعداد نفرات</th>\n\t\t\t\t<th>شماره واحد</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody class=\"ui center aligned\">\n\t\t\t<tr *ngFor=\"let unit of result\">\n\t\t\t\t<td>{{unit.payAmount}}</td>\n\t\t\t\t<td>\n\t\t\t\t\t<div class=\"ui input\">\n\t\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"unit.persons\" (keyup)=\"calculateResult()\">\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td>{{unit.unitNo + 1}}</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/calculator-view/calculator-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".desc {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 10px;\n  border: none;\n  outline: none;\n  direction: rtl;\n  resize: vertical; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator-view/calculator-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator_service__ = __webpack_require__("../../../../../src/app/calculator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorViewComponent = (function () {
    function CalculatorViewComponent(_calculatorService) {
        this._calculatorService = _calculatorService;
    }
    CalculatorViewComponent.prototype.ngOnInit = function () {
        this.setup = this._calculatorService.getSetup();
        this.result = this._calculatorService.getResult();
        this._calculatorService.calculateResult();
    };
    CalculatorViewComponent.prototype.toggleView = function () {
        this._calculatorService.toglgeSetupView();
    };
    CalculatorViewComponent.prototype.calculateResult = function () {
        this._calculatorService.calculateResult();
    };
    return CalculatorViewComponent;
}());
CalculatorViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-calculator-view',
        template: __webpack_require__("../../../../../src/app/calculator-view/calculator-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calculator-view/calculator-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calculator_service__["a" /* CalculatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calculator_service__["a" /* CalculatorService */]) === "function" && _a || Object])
], CalculatorViewComponent);

var _a;
//# sourceMappingURL=calculator-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/calculator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var billTypes = {
    water: {
        rule: "perPerson"
    },
    gas: {
        rule: "perUnit"
    },
    charge: {
        rule: "perUnit"
    }
};
;
;
;
var rules = {
    perPerson: function (config) {
        console.log('pp', config);
        var personShare = (config.price / config.totalPersons);
        var unitShare = config.unitPersons * personShare;
        return unitShare;
    },
    perUnit: function (config) {
        console.log('pu', config);
        var unitShare = (config.price / config.units);
        return unitShare;
    }
};
var DEFAULT_UNIT_PERSONS = 1;
var CalculatorService = (function () {
    function CalculatorService() {
        this.setup = {
            units: 5,
            price: 10000,
            type: 'water',
            complete: false,
            text: "جدول مبلغ پرداختی برای هر واحد"
        };
        this.rulesCalculatorSetting = {
            perPerson: this.makePerPersonCalculatorSetting,
            perUnit: this.makePerUnitCalculatorSetting
        };
        this.result = [];
    }
    CalculatorService.prototype.getSetup = function () {
        return this.setup;
    };
    CalculatorService.prototype.getResult = function () {
        return this.result;
    };
    CalculatorService.prototype.setType = function (type) {
        this.setup.type = type;
    };
    CalculatorService.prototype.toglgeSetupView = function () {
        this.setup.complete = !this.setup.complete;
    };
    //
    CalculatorService.prototype.updateUnitPerson = function (unit, persons) {
        var hasPermission = !isNaN(persons);
        if (hasPermission) {
            this.result[unit].persons = persons;
            this.calculateResult();
        }
    };
    CalculatorService.prototype.calculateResult = function () {
        for (var counter = 0; counter < this.setup.units; counter++) {
            var newResult = this.result[counter] || this.makeDetaultResultItem();
            // set unit number
            newResult.unitNo = counter;
            // set persons for each unit
            var isFirstResultSet = counter in this.result;
            var persons = newResult.persons;
            newResult.persons = persons;
            // rule for price calculation
            var rule = this.getRule();
            var config = this.rulesCalculatorSetting[rule](this.setup, this.result, counter);
            var payAmount = rules[rule](config);
            newResult.payAmount = payAmount;
            //
            this.result[counter] = newResult;
        }
        console.log(this.result);
    };
    CalculatorService.prototype.getRule = function () {
        return billTypes[this.setup.type].rule;
    };
    CalculatorService.prototype.makePerPersonCalculatorSetting = function (setup, result, unitNo) {
        var totalPersons = result.reduce(function (counter, item) { return counter += item.persons; }, 0);
        var unitPersons = result[unitNo].persons;
        return {
            price: setup.price,
            totalPersons: totalPersons,
            unitPersons: unitPersons
        };
    };
    CalculatorService.prototype.makePerUnitCalculatorSetting = function (setup) {
        return {
            units: setup.units,
            price: setup.price
        };
    };
    CalculatorService.prototype.makeDetaultResultItem = function () {
        return {
            unitNo: 0,
            persons: DEFAULT_UNIT_PERSONS,
            payAmount: 0
        };
    };
    return CalculatorService;
}());
CalculatorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CalculatorService);

//# sourceMappingURL=calculator.service.js.map

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"root-calculator\">\n\t<app-calculator-setup></app-calculator-setup>\n\t<app-calculator-view></app-calculator-view>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".root-calculator {\n  margin-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator_service__ = __webpack_require__("../../../../../src/app/calculator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorComponent = (function () {
    function CalculatorComponent(_calculatorService) {
        this._calculatorService = _calculatorService;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    return CalculatorComponent;
}());
CalculatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-calculator',
        template: __webpack_require__("../../../../../src/app/calculator/calculator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calculator/calculator.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calculator_service__["a" /* CalculatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calculator_service__["a" /* CalculatorService */]) === "function" && _a || Object])
], CalculatorComponent);

var _a;
//# sourceMappingURL=calculator.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map