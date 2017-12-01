webpackJsonp([1,4],{

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(401);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(457),
            styles: [__webpack_require__(455)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(189)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\r\n  <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">\r\n    <span class=\"d-block d-lg-none\">CA Nidhi Meghani</span>\r\n    <span class=\"d-none d-lg-block\">\r\n      <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"https://lh3.googleusercontent.com/-KJqR02rTt1Q/WLk_qgCuFwI/AAAAAAAAAaw/OOCou2dplW4MaJZ_W2XS-SOilm0jnB8AgCEwYBhgL/w140-h139-p/DSC09472.jpg\" alt=\"\">\r\n    </span>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n    <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">\r\n      <span class=\"d-block d-lg-none\">CA Nidhi Meghani</span>\r\n      <span class=\"d-none d-lg-block\">\r\n        <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"https://lh3.googleusercontent.com/-KJqR02rTt1Q/WLk_qgCuFwI/AAAAAAAAAaw/OOCou2dplW4MaJZ_W2XS-SOilm0jnB8AgCEwYBhgL/w140-h139-p/DSC09472.jpg\" alt=\"\">\r\n      </span>\r\n    </a>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" href=\"#about\">About</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" href=\"#CORECOMPETENCIES\">CORE COMPETENCIES</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" href=\"#education\">Education</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" href=\"#experience\">EXPERIENCE</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" href=\"#interests\">Interests</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" href=\"#awards-accolades\">Awards & Accolades</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid p-0\">\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex d-column\" id=\"about\">\r\n    <div class=\"my-auto\">\r\n      <h1 class=\"mb-0\">CA Nidhi\r\n        <span class=\"text-primary\">Meghani</span>\r\n        <h5> Finance & Accounts * Auditing & Taxation  * Budgetary Control </h5>\r\n      </h1>\r\n      <div class=\"subheading mb-5\">11/2 Panna Lal Compound, Near Agrasen Bhawan , Jhansi - (U.P)·\r\n          <a>+91-9628906474</a>\r\n        <a href=\"ca.nidhi.meghani@gmail.com\">ca.nidhi.meghani@gmail.com</a>\r\n\r\n          <li class=\"list-inline-item list-inline list-social-icons mb-0\">\r\n            <a href=\"\">\r\n              <span class=\"fa-stack fa-lg\">\r\n                <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i>\r\n              </span>\r\n            </a>\r\n          </li>\r\n\r\n      </div>\r\n      \r\n      <p class=\"mb-5\">Endeavor to ascent knowledge and practices to retain excellence in the professional domain. Good understanding in formulating projections, implementing systems/procedures, preparing key reports to exercise financial control and enhancing overall efficiency of the organisation. Preparation of financial reports and presentations required by management on monthly basis. A professional who effectively meets goals through strong leadership, interpersonal communication, and analytical abilities </p>\r\n      <ul class=\"list-inline list-social-icons mb-0\">\r\n        <!-- <li class=\"list-inline-item\">\r\n          <a href=\"#\">\r\n            <span class=\"fa-stack fa-lg\">\r\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n              <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <a href=\"#\">\r\n            <span class=\"fa-stack fa-lg\">\r\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n              <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\r\n            </span>\r\n          </a>\r\n        </li> -->\r\n        <!-- <li class=\"list-inline-item\">\r\n          <a href=\"https://www.linkedin.com/in/karan-khilwani-9ba887a3\">\r\n            <span class=\"fa-stack fa-lg\">\r\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n              <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i>\r\n            </span>\r\n          </a>\r\n        </li> -->\r\n        <!-- <li class=\"list-inline-item\">\r\n          <a href=\"#\">\r\n            <span class=\"fa-stack fa-lg\">\r\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n              <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\r\n            </span>\r\n          </a>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"CORECOMPETENCIES\">\r\n    <div class=\"my-auto\">\r\n      <h2 class=\"mb-5\">CORE COMPETENCIES</h2>\r\n\r\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\r\n        <div class=\"resume-content mr-auto\">\r\n          <h3 class=\"mb-0\">Taxation</h3>\r\n          <div class=\"subheading mb-3\">Direct Tax</div>\r\n          <p></p>\r\n\r\n          <ul class=\"fa-ul mb-0\">\r\n              <li>\r\n                <i class=\"fa-li fa fa-check\"></i>\r\n                Preparation of income tax e-returns of Individuals with e-filing. \r\n              </li>\r\n              <li>\r\n                  <i class=\"fa-li fa fa-check\"></i>\r\n                  Preparation of report u/s 10A, 10B and 115JB. \r\n                </li>\r\n                <li>\r\n                    <i class=\"fa-li fa fa-check\"></i>\r\n                    Calculation of individual tax instalments payments. \r\n                  </li>\r\n                  <li>\r\n                      <i class=\"fa-li fa fa-check\"></i>\r\n                      Assisted in Scrutiny cases of Income Tax.\r\n                    </li>\r\n                    <li>\r\n                        <i class=\"fa-li fa fa-check\"></i>\r\n                        Compliance related to TDS matters for Corporate & Non corporate assesses including generation of form 16/16A.\r\n                      </li>\r\n                      <li>\r\n                          <i class=\"fa-li fa fa-check\"></i>\r\n                          EPF Compliances, ECR filings\r\n                        </li>\r\n            </ul>\r\n            <p></p>\r\n            <div class=\"subheading mb-3\">Indirect Tax</div>\r\n            <p></p>\r\n  \r\n            <ul class=\"fa-ul mb-0\">\r\n                <li>\r\n                  <i class=\"fa-li fa fa-check\"></i>\r\n                  GST Fresh registrations, Migration, Cancellation of registration.\r\n                </li>\r\n                <li>\r\n                    <i class=\"fa-li fa fa-check\"></i>\r\n                    GST monthly/quarterly return filing for Proprietorship, Partnership firms.\r\n                  </li>\r\n                  <li>\r\n                      <i class=\"fa-li fa fa-check\"></i>\r\n                      Submissions for Orders/Notices, E-way Bill generation.\r\n                    </li>\r\n                    <li>\r\n                        <i class=\"fa-li fa fa-check\"></i>\r\n                        Preparation of Tax Verification Statement.\r\n                      </li>\r\n                      \r\n              </ul>\r\n\r\n        </div>\r\n        <div class=\"resume-date text-md-right\">\r\n          <span class=\"text-primary\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\r\n        <div class=\"resume-content mr-auto\">\r\n          <h3 class=\"mb-0\">Accounting & Auditing Functions</h3>\r\n          <div class=\"subheading mb-3\"></div>\r\n          <p></p>\r\n          <ul class=\"fa-ul mb-0\">\r\n              <li>\r\n                <i class=\"fa-li fa fa-check\"></i>\r\n                Maintaining MIS reports, evaluating them for facilitating decision-making process.\r\n              </li>\r\n              <li>\r\n                  <i class=\"fa-li fa fa-check\"></i>\r\n                  Preparing & maintaining statutory books of accounts and reconciliation of financial statements in compliance with the norms.\r\n                </li>\r\n                <li>\r\n                    <i class=\"fa-li fa fa-check\"></i>\r\n                    Conducted Statutory Audit, MCA filings.\r\n                  </li>\r\n                  <li>\r\n                      <i class=\"fa-li fa fa-check\"></i>\r\n                      Conducted Tax Audits of Proprietorships, Partnership Firms.\r\n                    </li>\r\n                    <li>\r\n                        <i class=\"fa-li fa fa-check\"></i>\r\n                        Compliance of Accounting Standards, Preparation of annual accounts, handling day-to-day accounting.\r\n                      </li>\r\n                    \r\n            </ul>\r\n        </div>\r\n        <div class=\"resume-date text-md-right\">\r\n          <span class=\"text-primary\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\r\n          <div class=\"resume-content mr-auto\">\r\n            <h3 class=\"mb-0\">Planning & Financial Control</h3>\r\n            <div class=\"subheading mb-3\"></div>\r\n            <p></p>\r\n            <ul class=\"fa-ul mb-0\">\r\n                <li>\r\n                  <i class=\"fa-li fa fa-check\"></i>\r\n                  Creating budgets & conducting variance analysis to determine difference between projected & actual results and implementing corrective actions for the same.\r\n                </li>\r\n                <li>\r\n                    <i class=\"fa-li fa fa-check\"></i>\r\n                    Forecasting company performance and building a detailed operating model with an integrated P & L A/c, Balance Sheet and Cash Flow.\r\n                  </li>\r\n                  <li>\r\n                      <i class=\"fa-li fa fa-check\"></i>\r\n                      Certification for Banks for loans, ITRs.\r\n                    </li>\r\n                    \r\n                    \r\n              </ul>\r\n          </div>\r\n          <div class=\"resume-date text-md-right\">\r\n            <span class=\"text-primary\"></span>\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n  </section>\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"education\">\r\n    <div class=\"my-auto\">\r\n      <h2 class=\"mb-5\">Education</h2>\r\n\r\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\r\n        <div class=\"resume-content mr-auto\">\r\n          <h3 class=\"mb-0\">The Institute Of Chartered Accountants Of India</h3>\r\n          <div class=\"subheading mb-3\"></div>\r\n          <div>CA Finals</div>\r\n          <p>Percent: 51% * Marks : 407/800</p>\r\n          <div>CA IPCC</div>\r\n          <p>Percent: 55% * Marks : 378/700</p>\r\n          <div>CA CPT</div>\r\n          <p>Percent: 72.5% * Marks : 145/200 (Distinction)</p>\r\n        </div>\r\n        <div class=\"resume-date text-md-right\">\r\n          <span class=\"text-primary\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\r\n          <div class=\"resume-content mr-auto\">\r\n            <h3 class=\"mb-0\">Delhi University</h3>\r\n            <div class=\"subheading mb-3\">School Of Open Learning, Delhi</div>\r\n            <div>B.Com (Hons.)</div>\r\n            <p>Percent: 71% * Marks : 391/550</p>\r\n          </div>\r\n          <div class=\"resume-date text-md-right\">\r\n            <span class=\"text-primary\"></span>\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"resume-item d-flex flex-column flex-md-row\">\r\n        <div class=\"resume-content mr-auto\">\r\n          <h3 class=\"mb-0\">Army Public School, JHANSI,(U.P)</h3>\r\n          <div class=\"subheading mb-3\">CBSE Board</div>\r\n          <div>XII (Commerce With Maths)</div>\r\n          <span>Percent: 87% * Marks : 434/500</span>\r\n          <p>Accounts: 96/100 (Distinction)</p>\r\n\r\n          <div>X</div>\r\n          <p>Percent: 81% * Marks : 402/500</p>\r\n        </div>\r\n        <div class=\"resume-date text-md-right\">\r\n          <span class=\"text-primary\">July 2008 - June 2009</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\r\n    <div class=\"my-auto\">\r\n      <h2 class=\"mb-5\">EXPERIENCE</h2>\r\n\r\n      <h3 class=\"mb-0\">WORK EXPERIENCE</h3>\r\n      \r\n      \r\n      <ul class=\"fa-ul mb-0\">\r\n        <li>\r\n          <i class=\"fa-li fa fa-check\"></i>\r\n          Presently Practicing (M/S Nidhi Meghani & Associates)</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-check\"></i>\r\n          Worked for 6 months in Prateek Meghani & Associates (Chartered Accountants)</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-check\"></i>\r\n          Worked with Wolters Kluwer India Pvt.Ltd, Delhi (Top International Book Publishing House) - Headnoting of Direct and Indirect Tax Cases for Book Publishing, Profiling of Direct and Indirect Cases.</li>\r\n       \r\n      </ul>\r\n      <p></p>\r\n      <br />\r\n      <p></p>\r\n      <h3 class=\"mb-0\">Articleship</h3>\r\n      \r\n      \r\n      <ul class=\"fa-ul mb-0\">\r\n        <li>\r\n          <i class=\"fa-li fa fa-check\"></i>\r\n          3 Years in M/s. Nikhera & Company (Chartered Accountants)</li>\r\n        \r\n      </ul>\r\n\r\n    </div>\r\n  </section>\r\n\r\n  \r\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"interests\">\r\n    <div class=\"my-auto\">\r\n      <h2 class=\"mb-5\">Interests</h2>\r\n      <p>Apart from being a Chartered Accountant, I enjoy most of my time being outdoors. I enjoy long driving, music and watching movies. </p>\r\n      <p class=\"mb-0\">When indoors, I love to sketch and play carrom board, whenever i get the chance to play. I am an aspiring chef. I relish socializing and I spend a large amount of my free time exploring the latest amendments and learning new things around the globe.</p>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"awards-accolades\">\r\n    <div class=\"my-auto\">\r\n      <h2 class=\"mb-5\">Awards &amp; ACCOLADES &amp; TRAININGS </h2>\r\n      <ul class=\"fa-ul mb-0\">\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          Actively participated in Debates, Quiz Competition, Dance and Dramatics at School</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          Participated in Badminton, basketball & Sprinting.\r\n        </li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          House Captain in Army School Jhansi.\r\n        </li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          Successfully completed Compulsory Computer Training (100 Hours) prescribed by The ICAI.\r\n        </li>\r\n        \r\n      </ul>\r\n    </div>\r\n  </section>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[472]);
//# sourceMappingURL=main.bundle.js.map