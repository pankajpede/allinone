function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_home_corporate_blue_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-home/corporate-blue-home.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-home/corporate-blue-home.component.ts");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_about_corporate_blue_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-about/corporate-blue-about.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-about/corporate-blue-about.component.ts");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_pricing_corporate_blue_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-pricing/corporate-blue-pricing.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-pricing/corporate-blue-pricing.component.ts");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_contact_corporate_blue_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-contact/corporate-blue-contact.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-contact/corporate-blue-contact.component.ts");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_features_corporate_blue_features_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-features/corporate-blue-features.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-features/corporate-blue-features.component.ts");
    /* harmony import */


    var _pages_views_bot_station_ai_bot_station_ai_home_bot_station_ai_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/views/bot-station-ai/bot-station-ai-home/bot-station-ai-home.component */
    "./src/app/pages/views/bot-station-ai/bot-station-ai-home/bot-station-ai-home.component.ts");
    /* harmony import */


    var _pages_views_bot_station_ai_bot_station_ai_solution_bot_station_ai_solution_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/views/bot-station-ai/bot-station-ai-solution/bot-station-ai-solution.component */
    "./src/app/pages/views/bot-station-ai/bot-station-ai-solution/bot-station-ai-solution.component.ts");
    /* harmony import */


    var _pages_views_bot_station_ai_bot_station_ai_resources_bot_station_ai_resources_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/views/bot-station-ai/bot-station-ai-resources/bot-station-ai-resources.component */
    "./src/app/pages/views/bot-station-ai/bot-station-ai-resources/bot-station-ai-resources.component.ts");
    /* harmony import */


    var _pages_views_allinone_allinone_home_allinone_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/views/allinone/allinone-home/allinone-home.component */
    "./src/app/pages/views/allinone/allinone-home/allinone-home.component.ts");
    /* harmony import */


    var _pages_views_portfolio_aboutme_portfolio_aboutme_home_portfolio_aboutme_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/views/portfolio-aboutme/portfolio-aboutme-home/portfolio-aboutme-home.component */
    "./src/app/pages/views/portfolio-aboutme/portfolio-aboutme-home/portfolio-aboutme-home.component.ts");
    /* harmony import */


    var _pages_views_portfolio_aboutme_portfolio_aboutme_about_portfolio_aboutme_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/views/portfolio-aboutme/portfolio-aboutme-about/portfolio-aboutme-about.component */
    "./src/app/pages/views/portfolio-aboutme/portfolio-aboutme-about/portfolio-aboutme-about.component.ts");

    var routes = [{
      path: 'allInHome',
      component: _pages_views_allinone_allinone_home_allinone_home_component__WEBPACK_IMPORTED_MODULE_10__["AllinoneHomeComponent"]
    }, {
      path: 'corporate-blue-home',
      component: _pages_views_corporate_blue_corporate_blue_home_corporate_blue_home_component__WEBPACK_IMPORTED_MODULE_2__["CorporateBlueHomeComponent"]
    }, {
      path: 'corporate-blue-about',
      component: _pages_views_corporate_blue_corporate_blue_about_corporate_blue_about_component__WEBPACK_IMPORTED_MODULE_3__["CorporateBlueAboutComponent"]
    }, {
      path: 'corporate-blue-price',
      component: _pages_views_corporate_blue_corporate_blue_pricing_corporate_blue_pricing_component__WEBPACK_IMPORTED_MODULE_4__["CorporateBluePricingComponent"]
    }, {
      path: 'corporate-blue-contact',
      component: _pages_views_corporate_blue_corporate_blue_contact_corporate_blue_contact_component__WEBPACK_IMPORTED_MODULE_5__["CorporateBlueContactComponent"]
    }, {
      path: 'corporate-blue-features',
      component: _pages_views_corporate_blue_corporate_blue_features_corporate_blue_features_component__WEBPACK_IMPORTED_MODULE_6__["CorporateBlueFeaturesComponent"]
    }, {
      path: 'bot-station-ai-home',
      component: _pages_views_bot_station_ai_bot_station_ai_home_bot_station_ai_home_component__WEBPACK_IMPORTED_MODULE_7__["BotStationAiHomeComponent"]
    }, {
      path: 'bot-station-ai-solution',
      component: _pages_views_bot_station_ai_bot_station_ai_solution_bot_station_ai_solution_component__WEBPACK_IMPORTED_MODULE_8__["BotStationAiSolutionComponent"]
    }, {
      path: 'bot-station-ai-resources',
      component: _pages_views_bot_station_ai_bot_station_ai_resources_bot_station_ai_resources_component__WEBPACK_IMPORTED_MODULE_9__["BotStationAiResourcesComponent"]
    }, {
      path: 'portfolio-aboutme-home',
      component: _pages_views_portfolio_aboutme_portfolio_aboutme_home_portfolio_aboutme_home_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioAboutmeHomeComponent"]
    }, {
      path: 'portfolio-aboutme-about',
      component: _pages_views_portfolio_aboutme_portfolio_aboutme_about_portfolio_aboutme_about_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioAboutmeAboutComponent"]
    }, {
      path: '**',
      component: _pages_views_allinone_allinone_home_allinone_home_component__WEBPACK_IMPORTED_MODULE_10__["AllinoneHomeComponent"]
    }, {
      path: '',
      redirectTo: 'allInHome',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'all-in-one';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _pages_common_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/common/header/header1/header1.component */
    "./src/app/pages/common/header/header1/header1.component.ts");
    /* harmony import */


    var _pages_common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/common/header/header2/header2.component */
    "./src/app/pages/common/header/header2/header2.component.ts");
    /* harmony import */


    var _pages_common_header_header3_header3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/common/header/header3/header3.component */
    "./src/app/pages/common/header/header3/header3.component.ts");
    /* harmony import */


    var _pages_common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/common/footer/footer1/footer1.component */
    "./src/app/pages/common/footer/footer1/footer1.component.ts");
    /* harmony import */


    var _pages_common_footer_footer2_footer2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/common/footer/footer2/footer2.component */
    "./src/app/pages/common/footer/footer2/footer2.component.ts");
    /* harmony import */


    var _pages_common_top_banner_top_banner1_top_banner1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/common/top-banner/top-banner1/top-banner1.component */
    "./src/app/pages/common/top-banner/top-banner1/top-banner1.component.ts");
    /* harmony import */


    var _pages_common_top_banner_top_banner2_top_banner2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/common/top-banner/top-banner2/top-banner2.component */
    "./src/app/pages/common/top-banner/top-banner2/top-banner2.component.ts");
    /* harmony import */


    var _pages_common_info_wrapper_info_wrapper1_info_wrapper1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/common/info-wrapper/info-wrapper1/info-wrapper1.component */
    "./src/app/pages/common/info-wrapper/info-wrapper1/info-wrapper1.component.ts");
    /* harmony import */


    var _pages_common_info_wrapper_info_wrapper2_info_wrapper2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/common/info-wrapper/info-wrapper2/info-wrapper2.component */
    "./src/app/pages/common/info-wrapper/info-wrapper2/info-wrapper2.component.ts");
    /* harmony import */


    var _pages_common_image_text_wrapper_image_text_wrapper1_image_text_wrapper1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/common/image-text-wrapper/image-text-wrapper1/image-text-wrapper1.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper1/image-text-wrapper1.component.ts");
    /* harmony import */


    var _pages_common_image_text_wrapper_image_text_wrapper2_image_text_wrapper2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/common/image-text-wrapper/image-text-wrapper2/image-text-wrapper2.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper2/image-text-wrapper2.component.ts");
    /* harmony import */


    var _pages_common_image_text_wrapper_image_text_wrapper3_image_text_wrapper3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/common/image-text-wrapper/image-text-wrapper3/image-text-wrapper3.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper3/image-text-wrapper3.component.ts");
    /* harmony import */


    var _pages_common_image_text_wrapper_image_text_wrapper4_image_text_wrapper4_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/common/image-text-wrapper/image-text-wrapper4/image-text-wrapper4.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper4/image-text-wrapper4.component.ts");
    /* harmony import */


    var _pages_common_image_text_wrapper_image_text_wrapper5_image_text_wrapper5_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/common/image-text-wrapper/image-text-wrapper5/image-text-wrapper5.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper5/image-text-wrapper5.component.ts");
    /* harmony import */


    var _pages_common_image_text_wrapper_image_text_wrapper6_image_text_wrapper6_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/common/image-text-wrapper/image-text-wrapper6/image-text-wrapper6.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper6/image-text-wrapper6.component.ts");
    /* harmony import */


    var _pages_common_carousel_carousel_wrapper1_carousel_wrapper1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/common/carousel/carousel-wrapper1/carousel-wrapper1.component */
    "./src/app/pages/common/carousel/carousel-wrapper1/carousel-wrapper1.component.ts");
    /* harmony import */


    var _pages_common_carousel_carousel_wrapper2_carousel_wrapper2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/common/carousel/carousel-wrapper2/carousel-wrapper2.component */
    "./src/app/pages/common/carousel/carousel-wrapper2/carousel-wrapper2.component.ts");
    /* harmony import */


    var _pages_common_carousel_carousel_wrapper3_carousel_wrapper3_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/common/carousel/carousel-wrapper3/carousel-wrapper3.component */
    "./src/app/pages/common/carousel/carousel-wrapper3/carousel-wrapper3.component.ts");
    /* harmony import */


    var _pages_common_price_plan_price_plan_wrapper1_price_plan_wrapper1_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/common/price-plan/price-plan-wrapper1/price-plan-wrapper1.component */
    "./src/app/pages/common/price-plan/price-plan-wrapper1/price-plan-wrapper1.component.ts");
    /* harmony import */


    var _pages_common_help_help_wrapper1_help_wrapper1_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/common/help/help-wrapper1/help-wrapper1.component */
    "./src/app/pages/common/help/help-wrapper1/help-wrapper1.component.ts");
    /* harmony import */


    var _pages_common_testimonial_testimonial1_testimonial1_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/common/testimonial/testimonial1/testimonial1.component */
    "./src/app/pages/common/testimonial/testimonial1/testimonial1.component.ts");
    /* harmony import */


    var _pages_common_testimonial_testimonial2_testimonial2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/common/testimonial/testimonial2/testimonial2.component */
    "./src/app/pages/common/testimonial/testimonial2/testimonial2.component.ts");
    /* harmony import */


    var _pages_common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/common/go-top/go-top1/go-top1.component */
    "./src/app/pages/common/go-top/go-top1/go-top1.component.ts");
    /* harmony import */


    var _pages_common_faq_faq_wrapper1_faq_wrapper1_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/common/faq/faq-wrapper1/faq-wrapper1.component */
    "./src/app/pages/common/faq/faq-wrapper1/faq-wrapper1.component.ts");
    /* harmony import */


    var _pages_common_tab_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/common/tab/tab1/tab1.component */
    "./src/app/pages/common/tab/tab1/tab1.component.ts");
    /* harmony import */


    var _pages_common_subscribe_subscribe1_subscribe1_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./pages/common/subscribe/subscribe1/subscribe1.component */
    "./src/app/pages/common/subscribe/subscribe1/subscribe1.component.ts");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_home_corporate_blue_home_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-home/corporate-blue-home.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-home/corporate-blue-home.component.ts");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_about_corporate_blue_about_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-about/corporate-blue-about.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-about/corporate-blue-about.component.ts");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_pricing_corporate_blue_pricing_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-pricing/corporate-blue-pricing.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-pricing/corporate-blue-pricing.component.ts");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_contact_corporate_blue_contact_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-contact/corporate-blue-contact.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-contact/corporate-blue-contact.component.ts");
    /* harmony import */


    var _pages_views_corporate_blue_corporate_blue_features_corporate_blue_features_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./pages/views/corporate-blue/corporate-blue-features/corporate-blue-features.component */
    "./src/app/pages/views/corporate-blue/corporate-blue-features/corporate-blue-features.component.ts");
    /* harmony import */


    var _pages_views_bot_station_ai_bot_station_ai_home_bot_station_ai_home_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./pages/views/bot-station-ai/bot-station-ai-home/bot-station-ai-home.component */
    "./src/app/pages/views/bot-station-ai/bot-station-ai-home/bot-station-ai-home.component.ts");
    /* harmony import */


    var _pages_views_bot_station_ai_bot_station_ai_solution_bot_station_ai_solution_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./pages/views/bot-station-ai/bot-station-ai-solution/bot-station-ai-solution.component */
    "./src/app/pages/views/bot-station-ai/bot-station-ai-solution/bot-station-ai-solution.component.ts");
    /* harmony import */


    var _pages_views_bot_station_ai_bot_station_ai_resources_bot_station_ai_resources_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./pages/views/bot-station-ai/bot-station-ai-resources/bot-station-ai-resources.component */
    "./src/app/pages/views/bot-station-ai/bot-station-ai-resources/bot-station-ai-resources.component.ts");
    /* harmony import */


    var _pages_common_why_why_wrapper1_why_wrapper1_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./pages/common/why/why-wrapper1/why-wrapper1.component */
    "./src/app/pages/common/why/why-wrapper1/why-wrapper1.component.ts");
    /* harmony import */


    var _pages_common_testimonial_testimonial3_testimonial3_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./pages/common/testimonial/testimonial3/testimonial3.component */
    "./src/app/pages/common/testimonial/testimonial3/testimonial3.component.ts");
    /* harmony import */


    var _pages_common_schedule_schedule1_schedule1_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./pages/common/schedule/schedule1/schedule1.component */
    "./src/app/pages/common/schedule/schedule1/schedule1.component.ts");
    /* harmony import */


    var _pages_common_blog_blog1_blog1_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./pages/common/blog/blog1/blog1.component */
    "./src/app/pages/common/blog/blog1/blog1.component.ts");
    /* harmony import */


    var _pages_common_top_banner_top_banner3_top_banner3_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./pages/common/top-banner/top-banner3/top-banner3.component */
    "./src/app/pages/common/top-banner/top-banner3/top-banner3.component.ts");
    /* harmony import */


    var _pages_common_carousel_carousel_wrapper4_carousel_wrapper4_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./pages/common/carousel/carousel-wrapper4/carousel-wrapper4.component */
    "./src/app/pages/common/carousel/carousel-wrapper4/carousel-wrapper4.component.ts");
    /* harmony import */


    var _pages_common_video_player_video_player1_video_player1_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./pages/common/video-player/video-player1/video-player1.component */
    "./src/app/pages/common/video-player/video-player1/video-player1.component.ts");
    /* harmony import */


    var _pages_common_accordion_accordion1_accordion1_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./pages/common/accordion/accordion1/accordion1.component */
    "./src/app/pages/common/accordion/accordion1/accordion1.component.ts");
    /* harmony import */


    var _pages_common_modal_modal1_modal1_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./pages/common/modal/modal1/modal1.component */
    "./src/app/pages/common/modal/modal1/modal1.component.ts");
    /* harmony import */


    var _pages_common_modal_modal2_modal2_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./pages/common/modal/modal2/modal2.component */
    "./src/app/pages/common/modal/modal2/modal2.component.ts");
    /* harmony import */


    var _pages_common_sidebar_sidebar1_sidebar1_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./pages/common/sidebar/sidebar1/sidebar1.component */
    "./src/app/pages/common/sidebar/sidebar1/sidebar1.component.ts");
    /* harmony import */


    var _pages_common_footer_footer3_footer3_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./pages/common/footer/footer3/footer3.component */
    "./src/app/pages/common/footer/footer3/footer3.component.ts");
    /* harmony import */


    var _pages_common_info_wrapper_info_wrapper3_info_wrapper3_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./pages/common/info-wrapper/info-wrapper3/info-wrapper3.component */
    "./src/app/pages/common/info-wrapper/info-wrapper3/info-wrapper3.component.ts");
    /* harmony import */


    var _pages_views_allinone_allinone_home_allinone_home_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./pages/views/allinone/allinone-home/allinone-home.component */
    "./src/app/pages/views/allinone/allinone-home/allinone-home.component.ts");
    /* harmony import */


    var _pages_views_portfolio_aboutme_portfolio_aboutme_home_portfolio_aboutme_home_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./pages/views/portfolio-aboutme/portfolio-aboutme-home/portfolio-aboutme-home.component */
    "./src/app/pages/views/portfolio-aboutme/portfolio-aboutme-home/portfolio-aboutme-home.component.ts");
    /* harmony import */


    var _pages_views_portfolio_aboutme_portfolio_aboutme_about_portfolio_aboutme_about_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./pages/views/portfolio-aboutme/portfolio-aboutme-about/portfolio-aboutme-about.component */
    "./src/app/pages/views/portfolio-aboutme/portfolio-aboutme-about/portfolio-aboutme-about.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_common_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_8__["Header1Component"], _pages_common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_9__["Header2Component"], _pages_common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_11__["Footer1Component"], _pages_common_footer_footer2_footer2_component__WEBPACK_IMPORTED_MODULE_12__["Footer2Component"], _pages_common_top_banner_top_banner1_top_banner1_component__WEBPACK_IMPORTED_MODULE_13__["TopBanner1Component"], _pages_common_info_wrapper_info_wrapper1_info_wrapper1_component__WEBPACK_IMPORTED_MODULE_15__["InfoWrapper1Component"], _pages_common_info_wrapper_info_wrapper2_info_wrapper2_component__WEBPACK_IMPORTED_MODULE_16__["InfoWrapper2Component"], _pages_common_image_text_wrapper_image_text_wrapper1_image_text_wrapper1_component__WEBPACK_IMPORTED_MODULE_17__["ImageTextWrapper1Component"], _pages_common_image_text_wrapper_image_text_wrapper2_image_text_wrapper2_component__WEBPACK_IMPORTED_MODULE_18__["ImageTextWrapper2Component"], _pages_common_image_text_wrapper_image_text_wrapper3_image_text_wrapper3_component__WEBPACK_IMPORTED_MODULE_19__["ImageTextWrapper3Component"], _pages_common_image_text_wrapper_image_text_wrapper4_image_text_wrapper4_component__WEBPACK_IMPORTED_MODULE_20__["ImageTextWrapper4Component"], _pages_common_carousel_carousel_wrapper1_carousel_wrapper1_component__WEBPACK_IMPORTED_MODULE_23__["CarouselWrapper1Component"], _pages_common_carousel_carousel_wrapper2_carousel_wrapper2_component__WEBPACK_IMPORTED_MODULE_24__["CarouselWrapper2Component"], _pages_common_price_plan_price_plan_wrapper1_price_plan_wrapper1_component__WEBPACK_IMPORTED_MODULE_26__["PricePlanWrapper1Component"], _pages_common_help_help_wrapper1_help_wrapper1_component__WEBPACK_IMPORTED_MODULE_27__["HelpWrapper1Component"], _pages_common_testimonial_testimonial1_testimonial1_component__WEBPACK_IMPORTED_MODULE_28__["Testimonial1Component"], _pages_common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_30__["GoTop1Component"], _pages_views_corporate_blue_corporate_blue_home_corporate_blue_home_component__WEBPACK_IMPORTED_MODULE_34__["CorporateBlueHomeComponent"], _pages_views_corporate_blue_corporate_blue_about_corporate_blue_about_component__WEBPACK_IMPORTED_MODULE_35__["CorporateBlueAboutComponent"], _pages_views_corporate_blue_corporate_blue_pricing_corporate_blue_pricing_component__WEBPACK_IMPORTED_MODULE_36__["CorporateBluePricingComponent"], _pages_common_faq_faq_wrapper1_faq_wrapper1_component__WEBPACK_IMPORTED_MODULE_31__["FaqWrapper1Component"], _pages_views_corporate_blue_corporate_blue_contact_corporate_blue_contact_component__WEBPACK_IMPORTED_MODULE_37__["CorporateBlueContactComponent"], _pages_common_image_text_wrapper_image_text_wrapper5_image_text_wrapper5_component__WEBPACK_IMPORTED_MODULE_21__["ImageTextWrapper5Component"], _pages_views_corporate_blue_corporate_blue_features_corporate_blue_features_component__WEBPACK_IMPORTED_MODULE_38__["CorporateBlueFeaturesComponent"], _pages_views_bot_station_ai_bot_station_ai_home_bot_station_ai_home_component__WEBPACK_IMPORTED_MODULE_39__["BotStationAiHomeComponent"], _pages_common_header_header3_header3_component__WEBPACK_IMPORTED_MODULE_10__["Header3Component"], _pages_common_top_banner_top_banner2_top_banner2_component__WEBPACK_IMPORTED_MODULE_14__["TopBanner2Component"], _pages_common_image_text_wrapper_image_text_wrapper6_image_text_wrapper6_component__WEBPACK_IMPORTED_MODULE_22__["ImageTextWrapper6Component"], _pages_common_carousel_carousel_wrapper3_carousel_wrapper3_component__WEBPACK_IMPORTED_MODULE_25__["CarouselWrapper3Component"], _pages_common_tab_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_32__["Tab1Component"], _pages_common_testimonial_testimonial2_testimonial2_component__WEBPACK_IMPORTED_MODULE_29__["Testimonial2Component"], _pages_common_subscribe_subscribe1_subscribe1_component__WEBPACK_IMPORTED_MODULE_33__["Subscribe1Component"], _pages_views_bot_station_ai_bot_station_ai_solution_bot_station_ai_solution_component__WEBPACK_IMPORTED_MODULE_40__["BotStationAiSolutionComponent"], _pages_common_why_why_wrapper1_why_wrapper1_component__WEBPACK_IMPORTED_MODULE_42__["WhyWrapper1Component"], _pages_common_testimonial_testimonial3_testimonial3_component__WEBPACK_IMPORTED_MODULE_43__["Testimonial3Component"], _pages_common_schedule_schedule1_schedule1_component__WEBPACK_IMPORTED_MODULE_44__["Schedule1Component"], _pages_common_blog_blog1_blog1_component__WEBPACK_IMPORTED_MODULE_45__["Blog1Component"], _pages_views_bot_station_ai_bot_station_ai_resources_bot_station_ai_resources_component__WEBPACK_IMPORTED_MODULE_41__["BotStationAiResourcesComponent"], _pages_common_top_banner_top_banner3_top_banner3_component__WEBPACK_IMPORTED_MODULE_46__["TopBanner3Component"], _pages_common_carousel_carousel_wrapper4_carousel_wrapper4_component__WEBPACK_IMPORTED_MODULE_47__["CarouselWrapper4Component"], _pages_common_video_player_video_player1_video_player1_component__WEBPACK_IMPORTED_MODULE_48__["VideoPlayer1Component"], _pages_common_accordion_accordion1_accordion1_component__WEBPACK_IMPORTED_MODULE_49__["Accordion1Component"], _pages_common_modal_modal1_modal1_component__WEBPACK_IMPORTED_MODULE_50__["Modal1Component"], _pages_common_modal_modal2_modal2_component__WEBPACK_IMPORTED_MODULE_51__["Modal2Component"], _pages_views_allinone_allinone_home_allinone_home_component__WEBPACK_IMPORTED_MODULE_55__["AllinoneHomeComponent"], _pages_views_portfolio_aboutme_portfolio_aboutme_home_portfolio_aboutme_home_component__WEBPACK_IMPORTED_MODULE_56__["PortfolioAboutmeHomeComponent"], _pages_common_sidebar_sidebar1_sidebar1_component__WEBPACK_IMPORTED_MODULE_52__["Sidebar1Component"], _pages_common_footer_footer3_footer3_component__WEBPACK_IMPORTED_MODULE_53__["Footer3Component"], _pages_common_info_wrapper_info_wrapper3_info_wrapper3_component__WEBPACK_IMPORTED_MODULE_54__["InfoWrapper3Component"], _pages_views_portfolio_aboutme_portfolio_aboutme_about_portfolio_aboutme_about_component__WEBPACK_IMPORTED_MODULE_57__["PortfolioAboutmeAboutComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_common_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_8__["Header1Component"], _pages_common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_9__["Header2Component"], _pages_common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_11__["Footer1Component"], _pages_common_footer_footer2_footer2_component__WEBPACK_IMPORTED_MODULE_12__["Footer2Component"], _pages_common_top_banner_top_banner1_top_banner1_component__WEBPACK_IMPORTED_MODULE_13__["TopBanner1Component"], _pages_common_info_wrapper_info_wrapper1_info_wrapper1_component__WEBPACK_IMPORTED_MODULE_15__["InfoWrapper1Component"], _pages_common_info_wrapper_info_wrapper2_info_wrapper2_component__WEBPACK_IMPORTED_MODULE_16__["InfoWrapper2Component"], _pages_common_image_text_wrapper_image_text_wrapper1_image_text_wrapper1_component__WEBPACK_IMPORTED_MODULE_17__["ImageTextWrapper1Component"], _pages_common_image_text_wrapper_image_text_wrapper2_image_text_wrapper2_component__WEBPACK_IMPORTED_MODULE_18__["ImageTextWrapper2Component"], _pages_common_image_text_wrapper_image_text_wrapper3_image_text_wrapper3_component__WEBPACK_IMPORTED_MODULE_19__["ImageTextWrapper3Component"], _pages_common_image_text_wrapper_image_text_wrapper4_image_text_wrapper4_component__WEBPACK_IMPORTED_MODULE_20__["ImageTextWrapper4Component"], _pages_common_carousel_carousel_wrapper1_carousel_wrapper1_component__WEBPACK_IMPORTED_MODULE_23__["CarouselWrapper1Component"], _pages_common_carousel_carousel_wrapper2_carousel_wrapper2_component__WEBPACK_IMPORTED_MODULE_24__["CarouselWrapper2Component"], _pages_common_price_plan_price_plan_wrapper1_price_plan_wrapper1_component__WEBPACK_IMPORTED_MODULE_26__["PricePlanWrapper1Component"], _pages_common_help_help_wrapper1_help_wrapper1_component__WEBPACK_IMPORTED_MODULE_27__["HelpWrapper1Component"], _pages_common_testimonial_testimonial1_testimonial1_component__WEBPACK_IMPORTED_MODULE_28__["Testimonial1Component"], _pages_common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_30__["GoTop1Component"], _pages_views_corporate_blue_corporate_blue_home_corporate_blue_home_component__WEBPACK_IMPORTED_MODULE_34__["CorporateBlueHomeComponent"], _pages_views_corporate_blue_corporate_blue_about_corporate_blue_about_component__WEBPACK_IMPORTED_MODULE_35__["CorporateBlueAboutComponent"], _pages_views_corporate_blue_corporate_blue_pricing_corporate_blue_pricing_component__WEBPACK_IMPORTED_MODULE_36__["CorporateBluePricingComponent"], _pages_common_faq_faq_wrapper1_faq_wrapper1_component__WEBPACK_IMPORTED_MODULE_31__["FaqWrapper1Component"], _pages_views_corporate_blue_corporate_blue_contact_corporate_blue_contact_component__WEBPACK_IMPORTED_MODULE_37__["CorporateBlueContactComponent"], _pages_common_image_text_wrapper_image_text_wrapper5_image_text_wrapper5_component__WEBPACK_IMPORTED_MODULE_21__["ImageTextWrapper5Component"], _pages_views_corporate_blue_corporate_blue_features_corporate_blue_features_component__WEBPACK_IMPORTED_MODULE_38__["CorporateBlueFeaturesComponent"], _pages_views_bot_station_ai_bot_station_ai_home_bot_station_ai_home_component__WEBPACK_IMPORTED_MODULE_39__["BotStationAiHomeComponent"], _pages_common_header_header3_header3_component__WEBPACK_IMPORTED_MODULE_10__["Header3Component"], _pages_common_top_banner_top_banner2_top_banner2_component__WEBPACK_IMPORTED_MODULE_14__["TopBanner2Component"], _pages_common_image_text_wrapper_image_text_wrapper6_image_text_wrapper6_component__WEBPACK_IMPORTED_MODULE_22__["ImageTextWrapper6Component"], _pages_common_carousel_carousel_wrapper3_carousel_wrapper3_component__WEBPACK_IMPORTED_MODULE_25__["CarouselWrapper3Component"], _pages_common_tab_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_32__["Tab1Component"], _pages_common_testimonial_testimonial2_testimonial2_component__WEBPACK_IMPORTED_MODULE_29__["Testimonial2Component"], _pages_common_subscribe_subscribe1_subscribe1_component__WEBPACK_IMPORTED_MODULE_33__["Subscribe1Component"], _pages_views_bot_station_ai_bot_station_ai_solution_bot_station_ai_solution_component__WEBPACK_IMPORTED_MODULE_40__["BotStationAiSolutionComponent"], _pages_common_why_why_wrapper1_why_wrapper1_component__WEBPACK_IMPORTED_MODULE_42__["WhyWrapper1Component"], _pages_common_testimonial_testimonial3_testimonial3_component__WEBPACK_IMPORTED_MODULE_43__["Testimonial3Component"], _pages_common_schedule_schedule1_schedule1_component__WEBPACK_IMPORTED_MODULE_44__["Schedule1Component"], _pages_common_blog_blog1_blog1_component__WEBPACK_IMPORTED_MODULE_45__["Blog1Component"], _pages_views_bot_station_ai_bot_station_ai_resources_bot_station_ai_resources_component__WEBPACK_IMPORTED_MODULE_41__["BotStationAiResourcesComponent"], _pages_common_top_banner_top_banner3_top_banner3_component__WEBPACK_IMPORTED_MODULE_46__["TopBanner3Component"], _pages_common_carousel_carousel_wrapper4_carousel_wrapper4_component__WEBPACK_IMPORTED_MODULE_47__["CarouselWrapper4Component"], _pages_common_video_player_video_player1_video_player1_component__WEBPACK_IMPORTED_MODULE_48__["VideoPlayer1Component"], _pages_common_accordion_accordion1_accordion1_component__WEBPACK_IMPORTED_MODULE_49__["Accordion1Component"], _pages_common_modal_modal1_modal1_component__WEBPACK_IMPORTED_MODULE_50__["Modal1Component"], _pages_common_modal_modal2_modal2_component__WEBPACK_IMPORTED_MODULE_51__["Modal2Component"], _pages_views_allinone_allinone_home_allinone_home_component__WEBPACK_IMPORTED_MODULE_55__["AllinoneHomeComponent"], _pages_views_portfolio_aboutme_portfolio_aboutme_home_portfolio_aboutme_home_component__WEBPACK_IMPORTED_MODULE_56__["PortfolioAboutmeHomeComponent"], _pages_common_sidebar_sidebar1_sidebar1_component__WEBPACK_IMPORTED_MODULE_52__["Sidebar1Component"], _pages_common_footer_footer3_footer3_component__WEBPACK_IMPORTED_MODULE_53__["Footer3Component"], _pages_common_info_wrapper_info_wrapper3_info_wrapper3_component__WEBPACK_IMPORTED_MODULE_54__["InfoWrapper3Component"], _pages_views_portfolio_aboutme_portfolio_aboutme_about_portfolio_aboutme_about_component__WEBPACK_IMPORTED_MODULE_57__["PortfolioAboutmeAboutComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/accordion/accordion1/accordion1.component.ts": function srcAppPagesCommonAccordionAccordion1Accordion1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Accordion1Component", function () {
      return Accordion1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function Accordion1Component_section_0_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " E-commerce ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
      }
    }

    function Accordion1Component_section_0_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Redefine customer experience with conversational commerce");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "E-commerce companies use Verloop.io\u2019s conversational AI platform to answer customer questions, handle repetitive tasks and remove friction in customer support across channels. Customers can shop and get seamless support without leaving the platform. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Accordion1Component_section_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Banking and FS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
      }
    }

    function Accordion1Component_section_0_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Advance your digital banking with conversational AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Banking and Financial Services are providing digital solutions to their customers through Verloop.io\u2019s conversation AI platform. Customers can now check their EMI details, apply for loans and transfer money from their preferred channel and language on the go. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Accordion1Component_section_0_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Real Estate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
      }
    }

    function Accordion1Component_section_0_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Support customers with conversational AI for real estate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Real Estate companies use Verloop.io to engage with customers on a personalised level using intelligent conversations. Companies can schedule site visits, submit/verify documents, reduce the sales cycle to increase conversion rates, and close more deals..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Accordion1Component_section_0_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Travel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
      }
    }

    function Accordion1Component_section_0_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Up your travel experience game with conversational AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Online Travel companies, with the help of Verloop.io\u2019s AI-powered platform, are conversing with their users in natural language to boost customer engagement. They are providing support through a fast, simple, elegant, and robust experience. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Accordion1Component_section_0_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Insurance ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
      }
    }

    function Accordion1Component_section_0_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Provide premium support with conversational AI in insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Insurance companies use Verloop.io\u2019s customer support automation platform to reduce manual workflows and free up employees to focus on more strategic tasks. Customers can select policy selection and file claims quickly, securely and accurately. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Accordion1Component_section_0_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Food ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
      }
    }

    function Accordion1Component_section_0_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Automate support with conversational AI in foodservice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Foodtech companies that use Verloop.io\u2019s intelligent platform are solving to meet support demand using insights from the intuitive analytics dashboard. They are improving customer experience with real-time answers and notification. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Accordion1Component_section_0_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Logistics ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
      }
    }

    function Accordion1Component_section_0_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ship the best customer support with conversational AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Logistics companies on Verloop.io\u2019s conversational AI platform build support that is scalable and customisable to meet customer needs. From automating low-level questions on order statuses and refund policies to tracking packages, they are simplifying processes.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Accordion1Component_section_0_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Education ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
      }
    }

    function Accordion1Component_section_0_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Make edtech interactive with conversational AI in education");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edtech companies on Verloop.io\u2019s platform automate their interactions with teachers, parents and students through messaging and voice interfaces. Our conversational AI engages with customers on a personalised level on their preferred channel. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Accordion1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-accordion", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-panel", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Accordion1Component_section_0_ng_template_6_Template, 2, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Accordion1Component_section_0_ng_template_7_Template, 8, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-panel", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Accordion1Component_section_0_ng_template_9_Template, 2, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Accordion1Component_section_0_ng_template_10_Template, 8, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-panel", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Accordion1Component_section_0_ng_template_12_Template, 2, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Accordion1Component_section_0_ng_template_13_Template, 8, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngb-panel", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Accordion1Component_section_0_ng_template_15_Template, 2, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Accordion1Component_section_0_ng_template_16_Template, 8, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngb-panel", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, Accordion1Component_section_0_ng_template_18_Template, 2, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Accordion1Component_section_0_ng_template_19_Template, 8, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngb-panel", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, Accordion1Component_section_0_ng_template_21_Template, 2, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Accordion1Component_section_0_ng_template_22_Template, 8, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-panel", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, Accordion1Component_section_0_ng_template_24_Template, 2, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, Accordion1Component_section_0_ng_template_25_Template, 8, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-panel", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Accordion1Component_section_0_ng_template_27_Template, 2, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Accordion1Component_section_0_ng_template_28_Template, 8, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
      }
    }

    var Accordion1Component =
    /*#__PURE__*/
    function () {
      function Accordion1Component() {
        _classCallCheck(this, Accordion1Component);
      }

      _createClass(Accordion1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Accordion1Component;
    }();

    Accordion1Component.ɵfac = function Accordion1Component_Factory(t) {
      return new (t || Accordion1Component)();
    };

    Accordion1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Accordion1Component,
      selectors: [["app-accordion1"]],
      inputs: {
        accordion1Type: "accordion1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid accordion1 section bg-light", 4, "ngIf"], [1, "container-fluid", "accordion1", "section", "bg-light"], [1, "container"], [1, "row"], ["data-aos", "zoom-in", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "1000", "data-aos-delay", "200", 1, "col-lg-12", "left-section"], ["activeIds", "accordion-1", 3, "closeOthers"], ["id", "accordion-1"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "accordion-2"], ["id", "accordion-3"], ["id", "accordion-4"], ["id", "accordion-5"], ["id", "accordion-6"], ["id", "accordion-7"], ["id", "accordion-8"], [1, "ri-arrow-down-s-line"], [1, "float-start", "w-100", "content-wrapper"], [1, "text-wrapper"], [1, "h5"], [1, "text-muted"], [1, "img-wrapper"], ["src", "./assets/images/undraw/web_shopping.svg", 1, "accordion-img"], ["src", "./assets/images/undraw/pay_online.svg", 1, "accordion-img"], ["src", "./assets/images/undraw/buy_house.svg", 1, "accordion-img"], ["src", "./assets/images/undraw/travelers.svg", 1, "accordion-img"], ["src", "./assets/images/undraw/virtual_assistant.svg", 1, "accordion-img"], ["src", "./assets/images/undraw/online_groceries.svg", 1, "accordion-img"], ["src", "./assets/images/undraw/logistics.svg", 1, "accordion-img"], ["src", "./assets/images/undraw/education.svg", 1, "accordion-img"]],
      template: function Accordion1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Accordion1Component_section_0_Template, 29, 1, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accordion1Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9hY2NvcmRpb24vYWNjb3JkaW9uMS9hY2NvcmRpb24xLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Accordion1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-accordion1',
          templateUrl: './accordion1.component.html',
          styleUrls: ['./accordion1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        accordion1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/blog/blog1/blog1.component.ts": function srcAppPagesCommonBlogBlog1Blog1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Blog1Component", function () {
      return Blog1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function Blog1Component_section_0_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Top 5 Examples of Brands Using Website Chatbots for Customer Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Blog1Component_section_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Top 10 Benefits of Adding a Chatbot on Your Website");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Blog1Component_section_0_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "13 Reasons to Add Live Chat on Your Website");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Blog1Component_section_0_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Top 5 Examples of Brands Using Website Chatbots for Customer Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Blog1Component_section_0_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Top 10 Benefits of Adding a Chatbot on Your Website");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Blog1Component_section_0_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "13 Reasons to Add Live Chat on Your Website");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Blog1Component_section_0_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Top 5 Examples of Brands Using Website Chatbots for Customer Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Blog1Component_section_0_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Top 10 Benefits of Adding a Chatbot on Your Website");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Blog1Component_section_0_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "13 Reasons to Add Live Chat on Your Website");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Blog1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Articles and News");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "owl-carousel-o", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Blog1Component_section_0_ng_template_8_Template, 5, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Blog1Component_section_0_ng_template_9_Template, 5, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Blog1Component_section_0_ng_template_10_Template, 5, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Blog1Component_section_0_ng_template_11_Template, 5, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Blog1Component_section_0_ng_template_12_Template, 5, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Blog1Component_section_0_ng_template_13_Template, 5, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Blog1Component_section_0_ng_template_14_Template, 5, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Blog1Component_section_0_ng_template_15_Template, 5, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Blog1Component_section_0_ng_template_16_Template, 5, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r138.customOptions);
      }
    }

    var Blog1Component =
    /*#__PURE__*/
    function () {
      function Blog1Component() {
        _classCallCheck(this, Blog1Component);

        this.customOptions = {
          loop: true,
          autoplay: true,
          center: false,
          dots: false,
          autoHeight: true,
          autoWidth: true,
          nav: true,
          slideTransition: 'linear',
          autoplayTimeout: 0,
          autoplaySpeed: 0,
          autoplayHoverPause: false,
          navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            769: {
              items: 3
            }
          }
        };
      }

      _createClass(Blog1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Blog1Component;
    }();

    Blog1Component.ɵfac = function Blog1Component_Factory(t) {
      return new (t || Blog1Component)();
    };

    Blog1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Blog1Component,
      selectors: [["app-blog1"]],
      inputs: {
        blog1Type: "blog1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid blog-1 section", 4, "ngIf"], [1, "container-fluid", "blog-1", "section"], [1, "container"], [1, "row"], ["data-aos", "fade-left", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "col-12"], [1, "text-center", "h2", "mb-5"], [3, "options"], ["carouselSlide", ""], [1, "carousel-image-wrapper", "w-100", "float-start"], [1, "float-start", "carousel-image-item"], ["src", "./assets/images/undraw/share_opinion.svg", 1, "w-50", "m-auto"], [1, "float-start", "w-100", "fw-bold"], ["src", "./assets/images/undraw/group_chat.svg", 1, "w-50", "m-auto"], ["src", "./assets/images/undraw/chatting_re.svg", 1, "w-50", "m-auto"]],
      template: function Blog1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Blog1Component_section_0_Template, 17, 1, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blog1Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9ibG9nL2Jsb2cxL2Jsb2cxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Blog1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog1',
          templateUrl: './blog1.component.html',
          styleUrls: ['./blog1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        blog1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/carousel/carousel-wrapper1/carousel-wrapper1.component.ts": function srcAppPagesCommonCarouselCarouselWrapper1CarouselWrapper1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselWrapper1Component", function () {
      return CarouselWrapper1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function CarouselWrapper1Component_section_0_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper1Component_section_0_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper1Component_section_0_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper1Component_section_0_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper1Component_section_0_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper1Component_section_0_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " GALLERY ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "App Screenshots");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Recusandae ducimus, sequi, sapiente possimus optio impedit efficient services. Completely promote. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "owl-carousel-o", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CarouselWrapper1Component_section_0_ng_template_14_Template, 2, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CarouselWrapper1Component_section_0_ng_template_15_Template, 2, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CarouselWrapper1Component_section_0_ng_template_16_Template, 2, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CarouselWrapper1Component_section_0_ng_template_17_Template, 2, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CarouselWrapper1Component_section_0_ng_template_18_Template, 2, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CarouselWrapper1Component_section_0_ng_template_19_Template, 2, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r24.customOptions);
      }
    }

    var CarouselWrapper1Component =
    /*#__PURE__*/
    function () {
      function CarouselWrapper1Component() {
        _classCallCheck(this, CarouselWrapper1Component);

        this.limit = 10; // <==== Edit this number to limit API results

        this.customOptions = {
          loop: true,
          autoplay: true,
          center: false,
          dots: false,
          autoHeight: true,
          autoWidth: true,
          nav: true,
          navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 4
            }
          }
        };
      }

      _createClass(CarouselWrapper1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselWrapper1Component;
    }();

    CarouselWrapper1Component.ɵfac = function CarouselWrapper1Component_Factory(t) {
      return new (t || CarouselWrapper1Component)();
    };

    CarouselWrapper1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselWrapper1Component,
      selectors: [["app-carousel-wrapper1"]],
      inputs: {
        carouselWrapper1Type: "carouselWrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid carousel-image-wrapper1 section info-wrapper-1 bg-light-blue", 4, "ngIf"], [1, "container-fluid", "carousel-image-wrapper1", "section", "info-wrapper-1", "bg-light-blue"], [1, "container"], [1, "row"], [1, "col-12"], [1, "max-699", "text-center", "m-auto"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "heading-top", "text-muted", "small", "text-style-semibold", "mb-3"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "500", 1, "heading", "mb-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "900", 1, "text-font1"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "1300", 1, "row", "mt-5", "pt-5"], [3, "options"], ["carouselSlide", ""], [1, "carousel-image-wrapper"], ["src", "./assets/images/devices/carousel-1.png", 1, "m-auto"], ["src", "./assets/images/devices/carousel-2.png", 1, "m-auto"], ["src", "./assets/images/devices/carousel-3.png", 1, "m-auto"], ["src", "./assets/images/devices/carousel-4.png", 1, "m-auto"], ["src", "./assets/images/devices/carousel-5.png", 1, "m-auto"], ["src", "./assets/images/devices/carousel-6.png", 1, "m-auto"]],
      template: function CarouselWrapper1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselWrapper1Component_section_0_Template, 20, 1, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carouselWrapper1Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9jYXJvdXNlbC9jYXJvdXNlbC13cmFwcGVyMS9jYXJvdXNlbC13cmFwcGVyMS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselWrapper1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carousel-wrapper1',
          templateUrl: './carousel-wrapper1.component.html',
          styleUrls: ['./carousel-wrapper1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        carouselWrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/carousel/carousel-wrapper2/carousel-wrapper2.component.ts": function srcAppPagesCommonCarouselCarouselWrapper2CarouselWrapper2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselWrapper2Component", function () {
      return CarouselWrapper2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function CarouselWrapper2Component_section_0_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper2Component_section_0_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper2Component_section_0_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper2Component_section_0_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper2Component_section_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper2Component_section_0_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper2Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "owl-carousel-o", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselWrapper2Component_section_0_ng_template_5_Template, 2, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselWrapper2Component_section_0_ng_template_6_Template, 2, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselWrapper2Component_section_0_ng_template_7_Template, 2, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CarouselWrapper2Component_section_0_ng_template_8_Template, 2, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CarouselWrapper2Component_section_0_ng_template_9_Template, 2, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CarouselWrapper2Component_section_0_ng_template_10_Template, 2, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r31.customOptions);
      }
    }

    var CarouselWrapper2Component =
    /*#__PURE__*/
    function () {
      function CarouselWrapper2Component() {
        _classCallCheck(this, CarouselWrapper2Component);

        this.limit = 10; // <==== Edit this number to limit API results

        this.customOptions = {
          loop: true,
          autoplay: true,
          center: false,
          dots: false,
          autoHeight: true,
          autoWidth: true,
          nav: true,
          navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            769: {
              items: 3
            }
          }
        };
      }

      _createClass(CarouselWrapper2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselWrapper2Component;
    }();

    CarouselWrapper2Component.ɵfac = function CarouselWrapper2Component_Factory(t) {
      return new (t || CarouselWrapper2Component)();
    };

    CarouselWrapper2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselWrapper2Component,
      selectors: [["app-carousel-wrapper2"]],
      inputs: {
        carouselWrapper2Type: "carouselWrapper2Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid carousel-image-wrapper2 section info-wrapper-1 bg-light-blue", "data-aos", "zoom-in", "data-aos-duration", "1000", 4, "ngIf"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "container-fluid", "carousel-image-wrapper2", "section", "info-wrapper-1", "bg-light-blue"], [1, "container"], [1, "row"], [1, "col-12"], [3, "options"], ["carouselSlide", ""], [1, "carousel-image-wrapper", "col"], ["src", "./assets/images/brand-logo/amazon-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/facebook-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/google-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/linkedin-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/netflix-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/tesla-1.svg", 1, "m-auto"]],
      template: function CarouselWrapper2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselWrapper2Component_section_0_Template, 11, 1, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carouselWrapper2Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9jYXJvdXNlbC9jYXJvdXNlbC13cmFwcGVyMi9jYXJvdXNlbC13cmFwcGVyMi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselWrapper2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carousel-wrapper2',
          templateUrl: './carousel-wrapper2.component.html',
          styleUrls: ['./carousel-wrapper2.component.scss']
        }]
      }], function () {
        return [];
      }, {
        carouselWrapper2Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/carousel/carousel-wrapper3/carousel-wrapper3.component.ts": function srcAppPagesCommonCarouselCarouselWrapper3CarouselWrapper3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselWrapper3Component", function () {
      return CarouselWrapper3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function CarouselWrapper3Component_section_0_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper3Component_section_0_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper3Component_section_0_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper3Component_section_0_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper3Component_section_0_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper3Component_section_0_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper3Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our trusted ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "owl-carousel-o", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CarouselWrapper3Component_section_0_ng_template_10_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CarouselWrapper3Component_section_0_ng_template_11_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CarouselWrapper3Component_section_0_ng_template_12_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CarouselWrapper3Component_section_0_ng_template_13_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CarouselWrapper3Component_section_0_ng_template_14_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CarouselWrapper3Component_section_0_ng_template_15_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r38.customOptions);
      }
    }

    var CarouselWrapper3Component =
    /*#__PURE__*/
    function () {
      function CarouselWrapper3Component() {
        _classCallCheck(this, CarouselWrapper3Component);

        this.limit = 10; // <==== Edit this number to limit API results

        this.customOptions = {
          loop: true,
          autoplay: true,
          center: false,
          dots: false,
          autoHeight: true,
          autoWidth: true,
          nav: false,
          navText: ['', ''],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            769: {
              items: 3
            }
          }
        };
      }

      _createClass(CarouselWrapper3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselWrapper3Component;
    }();

    CarouselWrapper3Component.ɵfac = function CarouselWrapper3Component_Factory(t) {
      return new (t || CarouselWrapper3Component)();
    };

    CarouselWrapper3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselWrapper3Component,
      selectors: [["app-carousel-wrapper3"]],
      inputs: {
        carouselWrapper3Type: "carouselWrapper3Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid carousel-image-wrapper3 section info-wrapper-1 bg-light-blue chatbot-wrapper", 4, "ngIf"], [1, "container-fluid", "carousel-image-wrapper3", "section", "info-wrapper-1", "bg-light-blue", "chatbot-wrapper"], [1, "container"], [1, "row"], [1, "col-12"], ["data-aos", "fade-left", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "text-center", "h2", "mb-5"], [1, "chatbot-text-primary"], ["data-aos", "fade-left", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "500", 1, "col-12"], [3, "options"], ["carouselSlide", ""], [1, "carousel-image-wrapper", "col"], ["src", "./assets/images/brand-logo/union-bank-of-india.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/infosys-technologies.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/paypal.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/syngenta.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/netflix-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/tesla-1.svg", 1, "m-auto"]],
      template: function CarouselWrapper3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselWrapper3Component_section_0_Template, 16, 1, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carouselWrapper3Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9jYXJvdXNlbC9jYXJvdXNlbC13cmFwcGVyMy9jYXJvdXNlbC13cmFwcGVyMy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselWrapper3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carousel-wrapper3',
          templateUrl: './carousel-wrapper3.component.html',
          styleUrls: ['./carousel-wrapper3.component.scss']
        }]
      }], function () {
        return [];
      }, {
        carouselWrapper3Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/carousel/carousel-wrapper4/carousel-wrapper4.component.ts": function srcAppPagesCommonCarouselCarouselWrapper4CarouselWrapper4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselWrapper4Component", function () {
      return CarouselWrapper4Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function CarouselWrapper4Component_section_0_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselWrapper4Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You Are in Good, Nah, GREAT Company");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "See how our customers\u2014from best-in-class enterprises to the most progressive startups\u2014use Verloop.io to delight their customers.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "owl-carousel-o", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CarouselWrapper4Component_section_0_ng_template_10_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CarouselWrapper4Component_section_0_ng_template_11_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CarouselWrapper4Component_section_0_ng_template_12_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CarouselWrapper4Component_section_0_ng_template_13_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CarouselWrapper4Component_section_0_ng_template_14_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CarouselWrapper4Component_section_0_ng_template_15_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "owl-carousel-o", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CarouselWrapper4Component_section_0_ng_template_17_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CarouselWrapper4Component_section_0_ng_template_18_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CarouselWrapper4Component_section_0_ng_template_19_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CarouselWrapper4Component_section_0_ng_template_20_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CarouselWrapper4Component_section_0_ng_template_21_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r148.customOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r148.customOptions1);
      }
    }

    var CarouselWrapper4Component =
    /*#__PURE__*/
    function () {
      function CarouselWrapper4Component() {
        _classCallCheck(this, CarouselWrapper4Component);

        this.limit = 10; // <==== Edit this number to limit API results

        this.customOptions = {
          loop: true,
          autoplay: true,
          center: false,
          dots: false,
          autoHeight: true,
          autoWidth: true,
          nav: false,
          navText: ['', ''],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            769: {
              items: 3
            }
          }
        };
        this.customOptions1 = {
          loop: true,
          autoplay: true,
          center: false,
          dots: false,
          autoHeight: true,
          autoWidth: true,
          nav: false,
          navText: ['', ''],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            769: {
              items: 2
            }
          }
        };
      }

      _createClass(CarouselWrapper4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselWrapper4Component;
    }();

    CarouselWrapper4Component.ɵfac = function CarouselWrapper4Component_Factory(t) {
      return new (t || CarouselWrapper4Component)();
    };

    CarouselWrapper4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselWrapper4Component,
      selectors: [["app-carousel-wrapper4"]],
      inputs: {
        carouselWrapper4Type: "carouselWrapper4Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid carousel-image-wrapper4 section info-wrapper-1 chatbot-wrapper mt-5", 4, "ngIf"], [1, "container-fluid", "carousel-image-wrapper4", "section", "info-wrapper-1", "chatbot-wrapper", "mt-5"], [1, "container"], [1, "row"], [1, "col-12"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "text-center", "h2", "mb-3"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "text-center", "text-muted"], ["data-aos", "fade-left", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "col-12"], [3, "options"], ["carouselSlide", ""], [1, "carousel-second", 3, "options"], [1, "carousel-image-wrapper", "col"], ["src", "./assets/images/brand-logo/union-bank-of-india.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/infosys-technologies.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/google-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/syngenta.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/netflix-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/tesla-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/toshiba-leading-innovation.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/linkedin-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/paypal.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/amazon-1.svg", 1, "m-auto"], ["src", "./assets/images/brand-logo/apple.svg", 1, "m-auto"]],
      template: function CarouselWrapper4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselWrapper4Component_section_0_Template, 22, 2, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carouselWrapper4Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9jYXJvdXNlbC9jYXJvdXNlbC13cmFwcGVyNC9jYXJvdXNlbC13cmFwcGVyNC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselWrapper4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carousel-wrapper4',
          templateUrl: './carousel-wrapper4.component.html',
          styleUrls: ['./carousel-wrapper4.component.scss']
        }]
      }], function () {
        return [];
      }, {
        carouselWrapper4Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/faq/faq-wrapper1/faq-wrapper1.component.ts": function srcAppPagesCommonFaqFaqWrapper1FaqWrapper1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqWrapper1Component", function () {
      return FaqWrapper1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FaqWrapper1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Frequently Asked Questions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " How do I become an author? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Helpful Resources for Authors ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " How much money can I make? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Can I offer my items for free on a promotional basis? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " An Introduction to the Marketplaces for Authors ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FaqWrapper1Component =
    /*#__PURE__*/
    function () {
      function FaqWrapper1Component() {
        _classCallCheck(this, FaqWrapper1Component);
      }

      _createClass(FaqWrapper1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqWrapper1Component;
    }();

    FaqWrapper1Component.ɵfac = function FaqWrapper1Component_Factory(t) {
      return new (t || FaqWrapper1Component)();
    };

    FaqWrapper1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaqWrapper1Component,
      selectors: [["app-faq-wrapper1"]],
      inputs: {
        faqwrapper1Type: "faqwrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "faq-wrapper1 bg-dotted-white parallax", 4, "ngIf"], [1, "faq-wrapper1", "bg-dotted-white", "parallax"], [1, "container"], [1, "row"], [1, "col-12"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "h2", "text-center", "text-white", "mb-5", "fw-bold"], [1, "max-699", "m-auto"], ["id", "accordionFlushExample", 1, "accordion", "accordion-flush"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "300", 1, "accordion-item"], ["id", "flush-headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne", 1, "accordion-button", "collapsed"], ["id", "flush-collapseOne", "aria-labelledby", "flush-headingOne", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], [1, "accordion-body"], [1, "small"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "accordion-item"], ["id", "flush-headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseTwo", "aria-expanded", "false", "aria-controls", "flush-collapseTwo", 1, "accordion-button", "collapsed"], ["id", "flush-collapseTwo", "aria-labelledby", "flush-headingTwo", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "900", 1, "accordion-item"], ["id", "flush-headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseThree", "aria-expanded", "false", "aria-controls", "flush-collapseThree", 1, "accordion-button", "collapsed"], ["id", "flush-collapseThree", "aria-labelledby", "flush-headingThree", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1200", 1, "accordion-item"], ["id", "flush-headingFour", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-headingFour", "aria-expanded", "false", "aria-controls", "flush-headingFour", 1, "accordion-button", "collapsed"], ["id", "flush-headingFour", "aria-labelledby", "flush-headingFour", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1500", 1, "accordion-item"], ["id", "flush-headingFive", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-headingFive", "aria-expanded", "false", "aria-controls", "flush-headingFive", 1, "accordion-button", "collapsed"], ["id", "flush-headingFive", "aria-labelledby", "flush-headingFive", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"]],
      template: function FaqWrapper1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FaqWrapper1Component_section_0_Template, 50, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.faqwrapper1Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9mYXEvZmFxLXdyYXBwZXIxL2ZhcS13cmFwcGVyMS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqWrapper1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-faq-wrapper1',
          templateUrl: './faq-wrapper1.component.html',
          styleUrls: ['./faq-wrapper1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        faqwrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/footer/footer1/footer1.component.ts": function srcAppPagesCommonFooterFooter1Footer1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Footer1Component", function () {
      return Footer1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Footer1Component_footer_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Features");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Help Center");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Paid with Moblie");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Changelog");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "About");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "FAQs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Trending");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Portfolio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Blog");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Events");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Forums");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Get to Know us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Corporate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Agency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "eCommerce");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Personal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "OnePage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Conveniently pontificate interdependent mindshare via standards compliant applications. Rapidiously empower effective metrics.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "From the Blog");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "article", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "A Surprising Tool to Help you Lifestyle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Quickly maintain covalent supply chains for multidisciplinary scenarios. Competently visualize. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Copyrights \xA9 2021 All Rights Reserved by AllInOne");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Terms of Use");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " / ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Privacy Policy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "App Store ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Play Store ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var Footer1Component =
    /*#__PURE__*/
    function () {
      function Footer1Component() {
        _classCallCheck(this, Footer1Component);
      }

      _createClass(Footer1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Footer1Component;
    }();

    Footer1Component.ɵfac = function Footer1Component_Factory(t) {
      return new (t || Footer1Component)();
    };

    Footer1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Footer1Component,
      selectors: [["app-footer1"]],
      inputs: {
        footer1Type: "footer1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["id", "footer", "class", "bg-white border-0 footer-1 section pb-0", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 4, "ngIf"], ["id", "footer", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "bg-white", "border-0", "footer-1", "section", "pb-0"], [1, "container"], [1, "footer-widgets-wrap", "pt-2", "pb-3"], [1, "row", "mx-auto"], [1, "col-md-8"], [1, "row"], [1, "col-md-3", "col-6"], [1, "widget", "widget_links"], [1, "mb-3"], ["href", "#"], [1, "col-md-3", "col-6", "mt-4", "mt-md-0"], [1, "row", "align-items-center", "border-top", "mt-4", "pt-4"], [1, "col-12"], [1, "small"], [1, "col-md-4", "mt-4", "mt-md-0"], [1, "widget"], [1, "mb-3", "text-uppercase"], [1, "entry"], [1, "entry-image", "mb-3"], ["src", "./assets/images/blog-img/blog-img.jpeg", "alt", "Image 3"], [1, "entry-title", "title-xs"], [1, "mb-2"], ["href", "#", 1, "fw-bold", "text-dark", "text-uppercase"], [1, "entry-desc"], [1, "text-black-50", "small"], [1, "float-start", "w-100"], [1, "social-btns", "mt-3"], ["href", "#", 1, "btn", "facebook"], [1, "ri", "ri-facebook-fill"], ["href", "#", 1, "btn", "instagram"], [1, "ri", "ri-instagram-line"], ["href", "#", 1, "btn", "twitter"], [1, "ri", "ri-twitter-fill"], ["href", "#", 1, "btn", "appstore"], [1, "ri", "ri-app-store-fill"], ["href", "#", 1, "btn", "googleplay"], [1, "ri", "ri-google-play-fill"], ["id", "copyrights", 1, "bg-blue", "dark", "py-5", "copyrights"], [1, "row", "col-mb-30"], [1, "col-md-6", "text-center", "text-md-start"], [1, "small", "text-white-50"], [1, "copyright-links", "mt-1", "small", "text-white-50"], ["href", "#", 1, "text-white-50", "small"], [1, "col-md-6", "text-center", "text-md-end"], ["href", "#", 1, "btn", "color", "bg-white", "rounded", "px-3", "py-2", "nott", "ls0", "shadow-sm"], [1, "icon-apple1", "me-2"], ["href", "#", 1, "btn", "color", "bg-white", "rounded", "px-3", "py-2", "nott", "ls0", "shadow-sm", "ms-2"], [1, "icon-google-play", "me-2"]],
      template: function Footer1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Footer1Component_footer_0_Template, 136, 0, "footer", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer1Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9mb290ZXIvZm9vdGVyMS9mb290ZXIxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Footer1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer1',
          templateUrl: './footer1.component.html',
          styleUrls: ['./footer1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        footer1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/footer/footer2/footer2.component.ts": function srcAppPagesCommonFooterFooter2Footer2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Footer2Component", function () {
      return Footer2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Footer2Component_footer_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Company");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "What we do");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contacts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Investor Relations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Media Relations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Jobs Opportunities");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Log in or Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Plans and Prices");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Our Blog");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Developer Program");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Agency Program");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Account Program");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Legal notices");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Company information");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Privacy Policy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Cookie Policy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Terms and Conditions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Registered address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "International Tech Park Bangalore(ITPB), Bengaluru, Karnataka 560066");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Contact us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Do you have any queries or ideas in mind? Let's chat! hello@allinone.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var Footer2Component =
    /*#__PURE__*/
    function () {
      function Footer2Component() {
        _classCallCheck(this, Footer2Component);
      }

      _createClass(Footer2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Footer2Component;
    }();

    Footer2Component.ɵfac = function Footer2Component_Factory(t) {
      return new (t || Footer2Component)();
    };

    Footer2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Footer2Component,
      selectors: [["app-footer2"]],
      inputs: {
        footer2Type: "footer2Type"
      },
      decls: 1,
      vars: 1,
      consts: [["id", "footer", "class", "container-fluid section footer-2 chatbot-wrapper", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngIf"], ["id", "footer", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "container-fluid", "section", "footer-2", "chatbot-wrapper"], [1, "container"], [1, "footer-widgets-wrap"], [1, "row"], [1, "col-md-3", "col-12"], [1, "widget", "widget_links"], [1, "text-white", "mb-3"], ["href", "#"], [1, "widget", "widget_links", "mb-5"]],
      template: function Footer2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Footer2Component_footer_0_Template, 82, 0, "footer", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer2Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9mb290ZXIvZm9vdGVyMi9mb290ZXIyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Footer2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer2',
          templateUrl: './footer2.component.html',
          styleUrls: ['./footer2.component.scss']
        }]
      }], function () {
        return [];
      }, {
        footer2Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/footer/footer3/footer3.component.ts": function srcAppPagesCommonFooterFooter3Footer3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Footer3Component", function () {
      return Footer3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["active"];
    };

    var _c1 = function _c1() {
      return ["/portfolio-aboutme-home"];
    };

    var _c2 = function _c2() {
      return ["/portfolio-aboutme-about"];
    };

    var Footer3Component =
    /*#__PURE__*/
    function () {
      function Footer3Component() {
        _classCallCheck(this, Footer3Component);
      }

      _createClass(Footer3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Footer3Component;
    }();

    Footer3Component.ɵfac = function Footer3Component_Factory(t) {
      return new (t || Footer3Component)();
    };

    Footer3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Footer3Component,
      selectors: [["app-footer3"]],
      decls: 32,
      vars: 16,
      consts: [[1, "footer-3"], [1, "float-start", "w-100"], [1, "float-start"], [1, "float-start", 3, "routerLinkActive", "routerLink"], [1, "float-start", "line"], [1, "text"], [1, "float-start", 3, "routerLinkActive"]],
      template: function Footer3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Skill");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9mb290ZXIvZm9vdGVyMy9mb290ZXIzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Footer3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer3',
          templateUrl: './footer3.component.html',
          styleUrls: ['./footer3.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/go-top/go-top1/go-top1.component.ts": function srcAppPagesCommonGoTopGoTop1GoTop1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoTop1Component", function () {
      return GoTop1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GoTop1Component_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoTop1Component_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.gotoTop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var GoTop1Component =
    /*#__PURE__*/
    function () {
      function GoTop1Component() {
        _classCallCheck(this, GoTop1Component);

        this.topPosToStartShowing = 100;
      }

      _createClass(GoTop1Component, [{
        key: "checkScroll",
        value: function checkScroll() {
          var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; // console.log('[scroll]', scrollPosition);

          if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
          } else {
            this.isShow = false;
          }
        } // TODO: Cross browsing

      }, {
        key: "gotoTop",
        value: function gotoTop() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GoTop1Component;
    }();

    GoTop1Component.ɵfac = function GoTop1Component_Factory(t) {
      return new (t || GoTop1Component)();
    };

    GoTop1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GoTop1Component,
      selectors: [["app-go-top1"]],
      hostBindings: function GoTop1Component_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function GoTop1Component_scroll_HostBindingHandler() {
            return ctx.checkScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 1,
      vars: 1,
      consts: [["class", "go-top1 border-0", 3, "click", 4, "ngIf"], [1, "go-top1", "border-0", 3, "click"], [1, "ri-arrow-up-s-line"]],
      template: function GoTop1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GoTop1Component_button_0_Template, 2, 0, "button", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9nby10b3AvZ28tdG9wMS9nby10b3AxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoTop1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-go-top1',
          templateUrl: './go-top1.component.html',
          styleUrls: ['./go-top1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        checkScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/header/header1/header1.component.ts": function srcAppPagesCommonHeaderHeader1Header1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Header1Component", function () {
      return Header1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Header1Component =
    /*#__PURE__*/
    function () {
      function Header1Component() {
        _classCallCheck(this, Header1Component);
      }

      _createClass(Header1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Header1Component;
    }();

    Header1Component.ɵfac = function Header1Component_Factory(t) {
      return new (t || Header1Component)();
    };

    Header1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Header1Component,
      selectors: [["app-header1"]],
      decls: 200,
      vars: 64,
      consts: [["data-aos", "fade-up", "data-aos-once", "true", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-white", "common-header1"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["src", "./assets/images/brand-logo/paypal.svg", "alt", "...", 1, "navbar-brand-img"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse", "animate", "custom-scrollbar"], [1, "fe", "fe-x"], [1, "navbar-nav", "ms-auto"], [1, "nav-item", "dropdown"], ["id", "navbarLandings", "data-bs-toggle", "dropdown", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarLandings", 1, "dropdown-menu", "default-dropdown", "dropdown-menu-xl", "p-0"], [1, "row", "gx-0"], [1, "col-12", "col-lg-6", "text-center", "text-wrapper"], [1, "dropdown-img-start", "h-100"], [1, "dropdown-img-text", "pt-1"], [1, "fw-bold", "text-white", "mb-2", "pt-5"], [1, "fs-sm", "text-white"], ["href", "#", 1, "btn", "btn-white", "shadow-dark", "fonFt-size-sm", "mt-3"], [1, "col-12", "col-lg-6"], [1, "dropdown-body"], [1, "row", "gx-0", "p-4"], [1, "col-6"], [1, "dropdown-header", "text-style-medium"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-header"], [1, "small", "text-uppercase", "text-primary"], ["id", "navbarPages", "data-bs-toggle", "dropdown", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarPages", 1, "dropdown-menu", "dropdown-menu-xl", "default-dropdown", "p-3"], [1, "nav-item", "dropdown", "right-side-dropdown"], ["id", "navbarAccount", "data-bs-toggle", "dropdown", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarAccount", 1, "dropdown-menu", "pt-3", "pb-3"], [1, "dropdown-item", "dropend", "float-left", "w-100"], ["data-bs-toggle", "dropdown", "href", "#", 1, "dropdown-link", "dropdown-toggle", "float-left", "w-100"], [1, "ri-arrow-drop-right-line"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["data-bs-toggle", "modal", "href", "#", 1, "dropdown-item"], ["href", "#", "target", "_blank", 1, "navbar-btn", "btn", "btn-sm", "btn-primary", "lift", "ms-auto"]],
      template: function Header1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Landings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Want to see an overview? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " See all the pages at once. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " View all pages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Services ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Coworking ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Rental ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Job Listing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Apps ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Desktop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Web ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Basic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Startup ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Enterprise ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Service ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Cloud Hosting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Agency ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Framework ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "(new)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Pages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Career ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Listing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Opening ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Pricing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Terms ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Help center ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Overview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Article ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Basic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Cover ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Blog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Rich View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Article ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Showcase ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Portfolio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Masonry ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Grid Rows ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Parallax ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Case Study ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Sidebar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Sidebar: Fluid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Basic Grid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " General ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Security ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Notifications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Plans & Payment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Side Cover ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Illustration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Basic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Modal Horizontal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Modal Vertical ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Side Cover ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Illustration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Basic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Modal Horizontal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Modal Vertical ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Password Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Side Cover ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Illustration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Basic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Error ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Side Cover ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Illustration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Basic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Buy now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](61, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](62, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](63, _c0));
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9oZWFkZXIvaGVhZGVyMS9oZWFkZXIxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Header1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header1',
          templateUrl: './header1.component.html',
          styleUrls: ['./header1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/header/header2/header2.component.ts": function srcAppPagesCommonHeaderHeader2Header2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Header2Component", function () {
      return Header2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/corporate-blue-home"];
    };

    var _c1 = function _c1() {
      return ["/corporate-blue-features"];
    };

    var _c2 = function _c2() {
      return ["/corporate-blue-about"];
    };

    var _c3 = function _c3() {
      return ["/corporate-blue-price"];
    };

    var _c4 = function _c4() {
      return ["/corporate-blue-contact"];
    };

    function Header2Component_nav_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Features ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Products ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Downloads ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Support ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Documentation ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Tutorials ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Solutions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " FAQ's ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "About");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pricing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Contact");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4));
      }
    }

    var Header2Component =
    /*#__PURE__*/
    function () {
      function Header2Component() {
        _classCallCheck(this, Header2Component);
      }

      _createClass(Header2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Header2Component;
    }();

    Header2Component.ɵfac = function Header2Component_Factory(t) {
      return new (t || Header2Component)();
    };

    Header2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Header2Component,
      selectors: [["app-header2"]],
      inputs: {
        header2Type: "header2Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "navbar navbar-expand-lg bg-blue static-top common-header2 pt-4 pb-4", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "bg-blue", "static-top", "common-header2", "pt-4", "pb-4"], [1, "container-fluid"], [1, "navbar-brand", 3, "routerLink"], ["src", "./assets/images/logo-dark-trimmy.png", "alt", "logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "text-white"], [1, "ri-menu-3-line"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", "active", "text-white", 3, "routerLink"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-white"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink"], [1, "ri-bubble-chart-fill", "float-start"], [1, "ri-download-cloud-line", "float-start"], [1, "ri-question-line", "float-start"], [1, "ri-file-copy-2-line", "float-start"], [1, "ri-video-line", "float-start"], [1, "ri-flag-2-line", "float-start"], [1, "ri-search-line", "float-start"]],
      template: function Header2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Header2Component_nav_0_Template, 53, 24, "nav", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header2Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9oZWFkZXIvaGVhZGVyMi9oZWFkZXIyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Header2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header2',
          templateUrl: './header2.component.html',
          styleUrls: ['./header2.component.scss']
        }]
      }], function () {
        return [];
      }, {
        header2Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/header/header3/header3.component.ts": function srcAppPagesCommonHeaderHeader3Header3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Header3Component", function () {
      return Header3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modal_modal1_modal1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../modal/modal1/modal1.component */
    "./src/app/pages/common/modal/modal1/modal1.component.ts");
    /* harmony import */


    var _modal_modal2_modal2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../modal/modal2/modal2.component */
    "./src/app/pages/common/modal/modal2/modal2.component.ts");

    var _c0 = ["appDialog"];

    var _c1 = function _c1() {
      return ["/bot-station-ai-home"];
    };

    var _c2 = function _c2() {
      return ["active"];
    };

    var _c3 = function _c3() {
      return ["/bot-station-ai-solution"];
    };

    var _c4 = function _c4() {
      return ["/bot-station-ai-resources"];
    };

    function Header3Component_nav_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bot Station AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Platform");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Solutions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Website ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Mobile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Whatsapp ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Facebook ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Instagram ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Voice ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Customers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-modal1", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-modal2", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modal1Type", "botStationAi");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modal2Type", "botStationAi");
      }
    }

    var Header3Component =
    /*#__PURE__*/
    function () {
      function Header3Component() {
        _classCallCheck(this, Header3Component);
      }

      _createClass(Header3Component, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
            document.getElementById('header3').classList.remove('scrolled');
            document.getElementById('header3').classList.add('noscrolled');
          }

          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById('header3').classList.remove('noscrolled');
            document.getElementById('header3').classList.add('scrolled');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Header3Component;
    }();

    Header3Component.ɵfac = function Header3Component_Factory(t) {
      return new (t || Header3Component)();
    };

    Header3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Header3Component,
      selectors: [["app-header3"]],
      viewQuery: function Header3Component_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appDialog = _t.first);
        }
      },
      hostBindings: function Header3Component_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function Header3Component_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        header3Type: "header3Type"
      },
      decls: 1,
      vars: 1,
      consts: [["id", "header3", "class", "navbar navbar-expand-lg bg-transparent fixed-top common-header3", "data-aos", "fade-down", "data-aos-duration", "1000", 4, "ngIf"], ["id", "header3", "data-aos", "fade-down", "data-aos-duration", "1000", 1, "navbar", "navbar-expand-lg", "bg-transparent", "fixed-top", "common-header3"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], ["src", "./assets/images/bot-station-ai/logo/Logo1.svg", "width", "50", "alt", "logo", 1, "float-start"], [1, "float-start", "ms-3", "text-white"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "ri-menu-3-line", "text-white"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], [1, "nav-link", "text-white-50", 3, "routerLinkActive", "routerLink"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-white-50", 3, "routerLinkActive", "routerLink"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink"], [1, "ri-global-line"], [1, "ri-smartphone-line"], [1, "ri-whatsapp-line"], [1, "ri-facebook-line"], [1, "ri-twitter-line"], [1, "ri-phone-line"], [3, "modal1Type"], [3, "modal2Type"]],
      template: function Header3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Header3Component_nav_0_Template, 47, 28, "nav", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header3Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _modal_modal1_modal1_component__WEBPACK_IMPORTED_MODULE_4__["Modal1Component"], _modal_modal2_modal2_component__WEBPACK_IMPORTED_MODULE_5__["Modal2Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9oZWFkZXIvaGVhZGVyMy9oZWFkZXIzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Header3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header3',
          templateUrl: './header3.component.html',
          styleUrls: ['./header3.component.scss']
        }]
      }], function () {
        return [];
      }, {
        header3Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appDialog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['appDialog']
        }],
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/help/help-wrapper1/help-wrapper1.component.ts": function srcAppPagesCommonHelpHelpWrapper1HelpWrapper1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpWrapper1Component", function () {
      return HelpWrapper1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HelpWrapper1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Need Help?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Enthusiastically morph unique web-readiness via impactful platforms. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Phone:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "+1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "+44");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+66");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+62");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "+61");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "+852");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "+61");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "+61");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "+49");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Message:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "textarea", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Contact Us ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HelpWrapper1Component =
    /*#__PURE__*/
    function () {
      function HelpWrapper1Component() {
        _classCallCheck(this, HelpWrapper1Component);
      }

      _createClass(HelpWrapper1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpWrapper1Component;
    }();

    HelpWrapper1Component.ɵfac = function HelpWrapper1Component_Factory(t) {
      return new (t || HelpWrapper1Component)();
    };

    HelpWrapper1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpWrapper1Component,
      selectors: [["app-help-wrapper1"]],
      inputs: {
        helpwrapper1Type: "helpwrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid help-wrapper-1 section bg-blue bg-dotted-white", 4, "ngIf"], [1, "container-fluid", "help-wrapper-1", "section", "bg-blue", "bg-dotted-white"], [1, "max-699", "m-auto"], [1, "row"], [1, "col-12", "text-center"], [1, "top-icon-wrapper"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "ri-hand-heart-fill", "text-white"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "500", 1, "heading", "h2", "text-white", "mt-3", "fw-bold"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "900", 1, "text-white", "mt-3"], [1, "row", "mt-5"], [1, "col-12"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1300", 1, "card", "bg-white", "shadow-lg", "border-0"], [1, "card-body", "p-5"], ["data-loader", "button", "data-alert-type", "inline", 1, "form-widget"], ["id", "landing-enquiry", "novalidate", "novalidate", 1, "row", "mb-0", "form-wrapper-1"], [1, "col-12", "form-group", "mb-4"], ["type", "text", "name", "landing-enquiry-name", "id", "landing-enquiry-name", "value", "", "placeholder", "John Doe", 1, "form-control", "required"], ["type", "email", "name", "landing-enquiry-email", "id", "landing-enquiry-email", "value", "", "placeholder", "user@company.com", 1, "form-control", "required"], [1, "input-group", "input-group-lg"], ["name", "landing-enquiry-idd", "id", "landing-enquiry-idd", "aria-invalid", "false", 1, "custom-select", "required", "valid", 2, "max-width", "80px"], ["value", "+1"], ["value", "+44"], ["value", "+66"], ["value", "+62"], ["value", "+61"], ["value", "+852"], ["value", "+65"], ["value", "+33"], ["value", "+49"], ["type", "text", "name", "landing-enquiry-phone", "id", "landing-enquiry-phone", "value", "", "placeholder", "02-232-2424", "autocomplete", "off", 1, "form-control", "required", "valid"], ["name", "landing-enquiry-additional-requirements", "id", "landing-enquiry-additional-requirements", "cols", "30", "rows", "5", "placeholder", "Please let us know how we can help you...", 1, "form-control"], ["type", "submit", "name", "landing-enquiry-submit", 1, "btn", "btn-primary", "btn-hover-moveUp", "w-100", "rounded-3", "py-3", "fw-semibold", "text-uppercase", "mt-2"]],
      template: function HelpWrapper1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HelpWrapper1Component_section_0_Template, 57, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.helpwrapper1Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9oZWxwL2hlbHAtd3JhcHBlcjEvaGVscC13cmFwcGVyMS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpWrapper1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help-wrapper1',
          templateUrl: './help-wrapper1.component.html',
          styleUrls: ['./help-wrapper1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        helpwrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/image-text-wrapper/image-text-wrapper1/image-text-wrapper1.component.ts": function srcAppPagesCommonImageTextWrapperImageTextWrapper1ImageTextWrapper1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageTextWrapper1Component", function () {
      return ImageTextWrapper1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageTextWrapper1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Intrinsicly synergistic benefits ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Enthusiastically morph unique web-readiness via impactful platforms. Intrinsicly matrix premium expertise for diverse expertise. Intrinsicly drive collaborative bandwidth for accurate testing. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Appropriately target customers ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Energistically incentivize front-end web services via enabled collaboration and idea-sharing. Conveniently whiteboard effective niche markets before flexible ROI. Phosfluorescently build turnkey convergence without goal-oriented systems. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Completely exploit focused");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Continually enable leveraged users after functional web-readiness. Interactively conceptualize accurate resources whereas distinctive e-markets. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ImageTextWrapper1Component =
    /*#__PURE__*/
    function () {
      function ImageTextWrapper1Component() {
        _classCallCheck(this, ImageTextWrapper1Component);
      }

      _createClass(ImageTextWrapper1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageTextWrapper1Component;
    }();

    ImageTextWrapper1Component.ɵfac = function ImageTextWrapper1Component_Factory(t) {
      return new (t || ImageTextWrapper1Component)();
    };

    ImageTextWrapper1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageTextWrapper1Component,
      selectors: [["app-image-text-wrapper1"]],
      inputs: {
        imageTextwrapper1Type: "imageTextwrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid image-text-wrapper1 section pt-0", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "200", 4, "ngIf"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "container-fluid", "image-text-wrapper1", "section", "pt-0"], [1, "row"], [1, "col-lg-6", "col-md-12", "order-md-2", "p-0", "right-section"], [1, "col-lg-6", "col-md-12", "order-md-1", "bg-blue", "left-section"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1000", 1, "text-wrapper", "mb-5"], [1, "sub-heading", "text-white", "mb-2"], [1, "text-white", "small"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1300", 1, "text-wrapper", "mb-5"], [1, "sub-heading", "text-white", "mb-3"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1600", 1, "text-wrapper"]],
      template: function ImageTextWrapper1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageTextWrapper1Component_section_0_Template, 19, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper1Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9pbWFnZS10ZXh0LXdyYXBwZXIvaW1hZ2UtdGV4dC13cmFwcGVyMS9pbWFnZS10ZXh0LXdyYXBwZXIxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageTextWrapper1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-text-wrapper1',
          templateUrl: './image-text-wrapper1.component.html',
          styleUrls: ['./image-text-wrapper1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        imageTextwrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/image-text-wrapper/image-text-wrapper2/image-text-wrapper2.component.ts": function srcAppPagesCommonImageTextWrapperImageTextWrapper2ImageTextWrapper2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageTextWrapper2Component", function () {
      return ImageTextWrapper2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageTextWrapper2Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Version 6.0 is now 2x Faster.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Enthusiastically morph unique web-readiness via impactful platforms. Intrinsicly matrix premium expertise for diverse expertise. Intrinsicly drive collaborative bandwidth for accurate testing. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "VERSION 6.0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngb-progressbar", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "60% Optimized");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Learn More ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 500);
      }
    }

    function ImageTextWrapper2Component_section_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "More Scale, More Success, More Smile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Enthusiastically morph unique web-readiness via impactful platforms. Intrinsicly matrix premium expertise for diverse expertise. Intrinsicly drive collaborative bandwidth for accurate testing. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "VERSION 6.0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngb-progressbar", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "60% Optimized");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Schedule a Demo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 500);
      }
    }

    function ImageTextWrapper2Component_section_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Our Story");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " allinone, was founded by Pankaj Pede, who is the epitome of the Indian startup success story. He is a serial entrepreneur (with a successful exit) and is passionate about building technology for Customer Support teams that enables them to deliver delightful support experiences. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Our story has been all about building the operating system of customer support. With Verloop.io, brands have the ability to scale their support, reduce their operational expense and gain completely visibility into their customer support operations. allinone combines the power of agent assist, machine learning model, speech recognition, and Natural Language Processing (NLP) to transform the way support is delivered. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ImageTextWrapper2Component =
    /*#__PURE__*/
    function () {
      function ImageTextWrapper2Component(config) {
        _classCallCheck(this, ImageTextWrapper2Component);

        config.max = 1000;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
        config.height = '20px';
      }

      _createClass(ImageTextWrapper2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageTextWrapper2Component;
    }();

    ImageTextWrapper2Component.ɵfac = function ImageTextWrapper2Component_Factory(t) {
      return new (t || ImageTextWrapper2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]));
    };

    ImageTextWrapper2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageTextWrapper2Component,
      selectors: [["app-image-text-wrapper2"]],
      inputs: {
        imageTextwrapper2Type: "imageTextwrapper2Type"
      },
      decls: 3,
      vars: 3,
      consts: [["class", "container image-text-wrapper2 section", 4, "ngIf"], ["class", "container image-text-wrapper2 section pb-0", 4, "ngIf"], ["class", "container image-text-wrapper2 section resources-page pt-0", 4, "ngIf"], [1, "container", "image-text-wrapper2", "section"], [1, "row"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "col-md-5", "p-0", "right-section", "text-center"], ["src", "./assets/images/devices/mobile-highlist-section.jpeg"], [1, "col-md-6", "left-section", "pt-5", "offset-md-1"], [1, "w-100", "float-start"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "500", 1, "ri-file-text-line", "text-primary", "h1", "mb-3", "float-start"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "900", 1, "float-start", "w-100"], [1, "h2", "fw-bold", "mb-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1300", 1, "mb-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1700", 1, "float-start", "w-100"], [1, "small", "fw-bold"], ["type", "primary", 3, "value"], [1, "progress-content", "text-white", "fw-bold"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "2200", 1, "float-start", "w-100", "mt-5"], ["href", "#", 1, "btn", "btn-primary", "p-3", "btn-hover-moveUp"], [1, "ri-arrow-right-line"], [1, "container", "image-text-wrapper2", "section", "pb-0"], [1, "col-md-5", "p-0", "right-section", "text-center"], ["src", "./assets/images/undraw/firmware.svg", "data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "ri-file-text-line", "text-primary", "h1", "mb-3", "float-start"], [1, "float-start", "w-100"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "h2", "fw-bold", "mb-4"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "mb-4"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "float-start", "w-100"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "float-start", "w-100", "mt-5"], [1, "container", "image-text-wrapper2", "section", "resources-page", "pt-0"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "1000", "data-aos-delay", "200", 1, "col-md-4", "p-0", "right-section", "text-center"], ["src", "./assets/images/bot-station-ai/other/our-story-new-image.png"], [1, "col-md-7", "left-section", "pt-5", "offset-md-1"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "h2", "fw-bold", "mb-4"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "mb-2"]],
      template: function ImageTextWrapper2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageTextWrapper2Component_section_0_Template, 22, 1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageTextWrapper2Component_section_1_Template, 22, 1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageTextWrapper2Component_section_2_Template, 12, 0, "section", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper2Type == "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper2Type == "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper2Type == "botStationAiResources");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9pbWFnZS10ZXh0LXdyYXBwZXIvaW1hZ2UtdGV4dC13cmFwcGVyMi9pbWFnZS10ZXh0LXdyYXBwZXIyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageTextWrapper2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-text-wrapper2',
          templateUrl: './image-text-wrapper2.component.html',
          styleUrls: ['./image-text-wrapper2.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]
        }];
      }, {
        imageTextwrapper2Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/image-text-wrapper/image-text-wrapper3/image-text-wrapper3.component.ts": function srcAppPagesCommonImageTextWrapperImageTextWrapper3ImageTextWrapper3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageTextWrapper3Component", function () {
      return ImageTextWrapper3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageTextWrapper3Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Experienced by ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "46,000+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " People. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Enthusiastically morph unique web-readiness via impactful platforms. Intrinsicly matrix premium expertise for diverse expertise. Intrinsicly drive collaborative bandwidth for accurate testing. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "RESPONSIVE LAYOUT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LIGHT & DARK COLOR SCHEME");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Change your Website's Primary Scheme instantly by simply adding the dark class to the body. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "video", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "source", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ImageTextWrapper3Component =
    /*#__PURE__*/
    function () {
      function ImageTextWrapper3Component() {
        _classCallCheck(this, ImageTextWrapper3Component);
      }

      _createClass(ImageTextWrapper3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageTextWrapper3Component;
    }();

    ImageTextWrapper3Component.ɵfac = function ImageTextWrapper3Component_Factory(t) {
      return new (t || ImageTextWrapper3Component)();
    };

    ImageTextWrapper3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageTextWrapper3Component,
      selectors: [["app-image-text-wrapper3"]],
      inputs: {
        imageTextwrapper3Type: "imageTextwrapper3Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid image-text-wrapper3 section bg-light-blue pb-0", 4, "ngIf"], [1, "container-fluid", "image-text-wrapper3", "section", "bg-light-blue", "pb-0"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-md-12", "left-section", "pt-5"], [1, "float-start", "w-75"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "heading", "fw-bold", "mb-4", "h2"], [1, "text-primary", "fw-bold"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "500", 1, "mb-4", "small", "text-muted"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "900", 1, "float-start", "w-75", "border-bottom", "pb-4", "pt-4"], [1, "icon-wrapper", "float-start", "text-center"], [1, "ri-map-pin-line", "text-primary"], [1, "text-wrapper", "float-start"], [1, "sub-heading", "mt-2", "mb-2"], [1, "small", "text-muted"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1300", 1, "float-start", "w-75", "pb-4", "pt-4"], [1, "ri-bank-card-2-line", "text-danger"], [1, "col-lg-6", "col-md-12", "p-0", "right-section", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "float-start", "w-100", "pt-5", "bg-dotted", "position-relative"], ["src", "./assets/images/devices/iphone-hand.png"], ["preload", "", "loop", "", "autoplay", "", "muted", ""], ["src", "./assets/images/video/form-video.mp4", "type", "video/mp4"]],
      template: function ImageTextWrapper3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageTextWrapper3Component_section_0_Template, 33, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper3Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9pbWFnZS10ZXh0LXdyYXBwZXIvaW1hZ2UtdGV4dC13cmFwcGVyMy9pbWFnZS10ZXh0LXdyYXBwZXIzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageTextWrapper3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-text-wrapper3',
          templateUrl: './image-text-wrapper3.component.html',
          styleUrls: ['./image-text-wrapper3.component.scss']
        }]
      }], function () {
        return [];
      }, {
        imageTextwrapper3Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/image-text-wrapper/image-text-wrapper4/image-text-wrapper4.component.ts": function srcAppPagesCommonImageTextWrapperImageTextWrapper4ImageTextWrapper4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageTextWrapper4Component", function () {
      return ImageTextWrapper4Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageTextWrapper4Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What is canvas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Professionally scale superior vortals and proactive relationships. Progressively network multidisciplinary supply chains vis-a-vis standardized leadership skills. Assertively maximize efficient mindshare via cross-media technologies. Dynamically create viral products for innovative metrics. Continually.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Seamlessly redefine client-focused customer service with extensive infomediaries. Monotonectally brand unique expertise after diverse imperatives. Intrinsicly formulate client-based solutions without excellent imperatives. Globally empower go forward paradigms before effective relationships. Professionally.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Efficiently maximize web-enabled applications rather than visionary internal or \"organic\" sources. Quickly foster extensible experiences vis-a-vis highly efficient technology. Seamlessly repurpose client-based internal or \"organic\" sources through covalent content. Energistically streamline.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ImageTextWrapper4Component =
    /*#__PURE__*/
    function () {
      function ImageTextWrapper4Component() {
        _classCallCheck(this, ImageTextWrapper4Component);
      }

      _createClass(ImageTextWrapper4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageTextWrapper4Component;
    }();

    ImageTextWrapper4Component.ɵfac = function ImageTextWrapper4Component_Factory(t) {
      return new (t || ImageTextWrapper4Component)();
    };

    ImageTextWrapper4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageTextWrapper4Component,
      selectors: [["app-image-text-wrapper4"]],
      inputs: {
        imageTextwrapper4Type: "imageTextwrapper4Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container image-text-wrapper4 section", 4, "ngIf"], [1, "container", "image-text-wrapper4", "section"], [1, "row"], [1, "col-md-5", "p-0", "right-section", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "h2", "mb-4", "fw-bold"], ["src", "./assets/images/devices/mobile-highlist-section.jpeg", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "400"], [1, "col-md-6", "left-section", "pt-5", "offset-md-1"], [1, "text-wrapper"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1200", 1, "pt-4", "pb-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1600", 1, "pt-4", "pb-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "2000", 1, "pt-4", "pb-4"]],
      template: function ImageTextWrapper4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageTextWrapper4Component_section_0_Template, 17, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper4Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9pbWFnZS10ZXh0LXdyYXBwZXIvaW1hZ2UtdGV4dC13cmFwcGVyNC9pbWFnZS10ZXh0LXdyYXBwZXI0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageTextWrapper4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-text-wrapper4',
          templateUrl: './image-text-wrapper4.component.html',
          styleUrls: ['./image-text-wrapper4.component.scss']
        }]
      }], function () {
        return [];
      }, {
        imageTextwrapper4Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/image-text-wrapper/image-text-wrapper5/image-text-wrapper5.component.ts": function srcAppPagesCommonImageTextWrapperImageTextWrapper5ImageTextWrapper5ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageTextWrapper5Component", function () {
      return ImageTextWrapper5Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageTextWrapper5Component_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We're truly Yours");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recusandae ducimus, sequi, sapiente possimus optio impedit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " efficient services. Completely promote.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Headquarters:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 795 Folsom Ave, Suite 600");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " San Francisco, CA 94107");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " (1) 8547 632521");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " info@canvas.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ImageTextWrapper5Component =
    /*#__PURE__*/
    function () {
      function ImageTextWrapper5Component() {
        _classCallCheck(this, ImageTextWrapper5Component);
      }

      _createClass(ImageTextWrapper5Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageTextWrapper5Component;
    }();

    ImageTextWrapper5Component.ɵfac = function ImageTextWrapper5Component_Factory(t) {
      return new (t || ImageTextWrapper5Component)();
    };

    ImageTextWrapper5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageTextWrapper5Component,
      selectors: [["app-image-text-wrapper5"]],
      inputs: {
        imageTextwrapper5Type: "imageTextwrapper5Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "section image-text-wrapper5 bg-transparent mt-0", 4, "ngIf"], [1, "section", "image-text-wrapper5", "bg-transparent", "mt-0"], [1, "container", "mt-5", "pt-5", "mb-5", "pb-5"], [1, "row", "justify-content-between"], [1, "col-lg-5"], [1, "text-nowrap"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "nott", "mb-3", "display-3", "fw-bold"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "small", "text-black-50"], [1, "clear"], [1, "my-5"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "900", 1, "fw-bold"], [1, "mb-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1200", 1, "mb-3"], [1, "fw-bold"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1500"], [1, "d-flex", "mt-4"], ["href", "#", "title", "Facebook", 1, "social-icon", "si-colored", "si-facebook"], [1, "icon-facebook"], ["href", "#", "title", "Instagram", 1, "social-icon", "si-colored", "si-instagram"], [1, "icon-instagram"], ["href", "#", "title", "Twitter", 1, "social-icon", "si-colored", "si-twitter"], [1, "icon-twitter"], ["href", "#", "title", "Apple", 1, "social-icon", "si-colored", "si-appstore"], [1, "icon-apple"], ["href", "#", "title", "Android", 1, "social-icon", "si-colored", "si-android"], [1, "icon-android"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "col-lg-7"], ["src", "./assets/images/co-working/co-working-1.jpeg", "alt", "Office Image", 1, "w-100"]],
      template: function ImageTextWrapper5Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageTextWrapper5Component_div_0_Template, 46, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper5Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9pbWFnZS10ZXh0LXdyYXBwZXIvaW1hZ2UtdGV4dC13cmFwcGVyNS9pbWFnZS10ZXh0LXdyYXBwZXI1LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageTextWrapper5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-text-wrapper5',
          templateUrl: './image-text-wrapper5.component.html',
          styleUrls: ['./image-text-wrapper5.component.scss']
        }]
      }], function () {
        return [];
      }, {
        imageTextwrapper5Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/image-text-wrapper/image-text-wrapper6/image-text-wrapper6.component.ts": function srcAppPagesCommonImageTextWrapperImageTextWrapper6ImageTextWrapper6ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageTextWrapper6Component", function () {
      return ImageTextWrapper6Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageTextWrapper6Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple Platform to");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Build & Deploy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Bot Station AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bot Builder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create your chatbot with ease by moving customizable elements over the scenario. Drag and drop responses and actions to compose the best conversational experience.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "NLP with conversational engine");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Create a bot that fully automates conversations at every stage of your marketing and sales funnel.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Chatbot & voicebot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Build your custom AI chatbot in minutes. No technical skills needed.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ImageTextWrapper6Component_section_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Build your custom ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bot Station AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " in minutes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Real-time analytics");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Engagely\u2019s AI powered bots engage with visitors to understand their requirements and intents quickly. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Security");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Banking grade security which is in line with some of the most stringent regulatory requirements");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Machine learning");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "ML recommendation engines, and omnichannel capabilities deliver a world class engagement. It has transformed the way brands engage with customers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ImageTextWrapper6Component_section_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Modernizing customized");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customer Suport");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " easily");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Middle east dialect");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Be with your customers throughout their journey & deliver a real-time engagement experience. This will not only make the customer experience better but also shorten the sales cycle.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Text to speech");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Based on your customer\u2019s behavior on your website, chatbot ML models understand which product a customer is looking for, this will help in making the product discovery in a few seconds.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Speech to text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Facilitate smooth end to end transition from product/service discovery, buying, to post-purchase support to the customers.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ImageTextWrapper6Component =
    /*#__PURE__*/
    function () {
      function ImageTextWrapper6Component() {
        _classCallCheck(this, ImageTextWrapper6Component);
      }

      _createClass(ImageTextWrapper6Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageTextWrapper6Component;
    }();

    ImageTextWrapper6Component.ɵfac = function ImageTextWrapper6Component_Factory(t) {
      return new (t || ImageTextWrapper6Component)();
    };

    ImageTextWrapper6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageTextWrapper6Component,
      selectors: [["app-image-text-wrapper6"]],
      inputs: {
        imageTextwrapper6Type: "imageTextwrapper6Type",
        imageTextwrapper6aType: "imageTextwrapper6aType",
        imageTextwrapper6bType: "imageTextwrapper6bType"
      },
      decls: 3,
      vars: 3,
      consts: [["class", "image-text-wrapper6 section chatbot-wrapper", 4, "ngIf"], ["class", "image-text-wrapper6 section chatbot-wrapper animate__animated animate__fadeInDown", 4, "ngIf"], [1, "image-text-wrapper6", "section", "chatbot-wrapper"], [1, "container", "content-area"], [1, "row"], [1, "col-12", "col-md-6"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "h2", "mb-4"], [1, "chatbot-text-primary"], [1, "info-list-wrapper"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "info-list-item", "float-start", "w-100"], [1, "icon-wrapper", "float-start"], ["src", "./assets/images/icon/bot-builder.svg"], [1, "text-wrapper", "float-start"], [1, "list-heading", "h5"], [1, "text-muted"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "info-list-item", "float-start", "w-100"], ["src", "./assets/images/icon/NLP-engine.svg"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "info-list-item", "float-start", "w-100"], ["src", "./assets/images/icon/chatbot-voicebot.svg"], [1, "col-12", "col-md-6", "text-center", "bg-shape-1"], ["src", "./assets/images/devices/home_build_deploy.svg", "data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000"], [1, "image-text-wrapper6", "section", "chatbot-wrapper", "animate__animated", "animate__fadeInDown"], [1, "col-12", "col-md-6", "text-center", "bg-shape-2"], ["src", "./assets/images/undraw/home_ai_chat.svg", "data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000"], ["src", "./assets/images/icon/real-time-analytics.svg"], ["src", "./assets/images/icon/security.svg"], ["src", "./assets/images/icon/machineLearning.svg"], ["src", "./assets/images/icon/middle-east-dilect.svg"], ["src", "./assets/images/icon/text-to-speech.svg"], [1, "col-12", "col-md-6", "text-center", "bg-shape-3"], ["src", "./assets/images/undraw/refined.svg", "data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000"]],
      template: function ImageTextWrapper6Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageTextWrapper6Component_section_0_Template, 37, 0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageTextWrapper6Component_section_1_Template, 37, 0, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageTextWrapper6Component_section_2_Template, 37, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper6Type == "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper6aType == "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageTextwrapper6bType == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9pbWFnZS10ZXh0LXdyYXBwZXIvaW1hZ2UtdGV4dC13cmFwcGVyNi9pbWFnZS10ZXh0LXdyYXBwZXI2LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageTextWrapper6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-text-wrapper6',
          templateUrl: './image-text-wrapper6.component.html',
          styleUrls: ['./image-text-wrapper6.component.scss']
        }]
      }], function () {
        return [];
      }, {
        imageTextwrapper6Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageTextwrapper6aType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageTextwrapper6bType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/info-wrapper/info-wrapper1/info-wrapper1.component.ts": function srcAppPagesCommonInfoWrapperInfoWrapper1InfoWrapper1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoWrapper1Component", function () {
      return InfoWrapper1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InfoWrapper1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " WHY YOU CHOOSE US? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Powerful & Best Features for Canvas App");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Dynamically underwhelm end-to-end experiences for premier methodologies. Objectively benchmark front-end bandwidth vis-a-vis flexible e-services. Globally drive business convergence without backward-compatible markets. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Anywhere & Anytime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Appropriately reconceptualize timely convergence through resource maximizing collaboration and idea-sharing. Globally coordinate cross-platform products via interoperable models. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "International Transactions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Rapidiously actualize wireless benefits before resource-leveling quality vectors. Dramatically innovate progressive convergence without tactical schemas. Competently unleash distributed users whereas. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "100% Secured & Trustable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Appropriately redefine market positioning leadership skills whereas client-based \"outside the box\" thinking. Monotonectally engage next-generation leadership skills without one-to-one testing procedures. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Detailed Documentation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Compellingly evisculate impactful e-services for extensible resources. Interactively grow timely e-commerce rather than optimal expertise. Uniquely optimize impactful experiences rather than cooperative. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var InfoWrapper1Component =
    /*#__PURE__*/
    function () {
      function InfoWrapper1Component() {
        _classCallCheck(this, InfoWrapper1Component);
      }

      _createClass(InfoWrapper1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoWrapper1Component;
    }();

    InfoWrapper1Component.ɵfac = function InfoWrapper1Component_Factory(t) {
      return new (t || InfoWrapper1Component)();
    };

    InfoWrapper1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoWrapper1Component,
      selectors: [["app-info-wrapper1"]],
      inputs: {
        infpWrapper1Type: "infpWrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid section info-wrapper-1", 4, "ngIf"], [1, "container-fluid", "section", "info-wrapper-1"], [1, "row"], [1, "col-12"], [1, "max-699", "text-center", "m-auto"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "100", 1, "heading-top", "text-muted", "small", "text-style-semibold", "mb-3"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "300", 1, "heading", "mb-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "text-font125"], [1, "container"], [1, "max-992", "m-auto"], [1, "row", "pt-5"], ["data-aos", "fade-right", "data-aos-duration", "1000", "data-aos-delay", "1000", 1, "col-12", "col-md-6", "info-item"], [1, "icon-wrapper"], [1, "ri-map-pin-line", "text-primary"], [1, "text-wrapper"], [1, "sub-heading", "mt-2", "mb-2"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-delay", "1000", 1, "col-12", "col-md-6", "info-item"], [1, "ri-bank-card-2-line", "text-danger"], [1, "ri-shield-check-line", "text-warning"], [1, "ri-book-mark-line", "text-cyan"]],
      template: function InfoWrapper1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InfoWrapper1Component_section_0_Template, 45, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.infpWrapper1Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9pbmZvLXdyYXBwZXIvaW5mby13cmFwcGVyMS9pbmZvLXdyYXBwZXIxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoWrapper1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-wrapper1',
          templateUrl: './info-wrapper1.component.html',
          styleUrls: ['./info-wrapper1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        infpWrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/info-wrapper/info-wrapper2/info-wrapper2.component.ts": function srcAppPagesCommonInfoWrapperInfoWrapper2InfoWrapper2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoWrapper2Component", function () {
      return InfoWrapper2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InfoWrapper2Component_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start your journey ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " right now ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sequi natus autem non temporibus aperiam, nesciunt iusto, perspiciatis.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " App Store ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Play Store ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var InfoWrapper2Component =
    /*#__PURE__*/
    function () {
      function InfoWrapper2Component() {
        _classCallCheck(this, InfoWrapper2Component);
      }

      _createClass(InfoWrapper2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoWrapper2Component;
    }();

    InfoWrapper2Component.ɵfac = function InfoWrapper2Component_Factory(t) {
      return new (t || InfoWrapper2Component)();
    };

    InfoWrapper2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoWrapper2Component,
      selectors: [["app-info-wrapper2"]],
      inputs: {
        infpWrapper2Type: "infpWrapper2Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "info-wrapper2 section", 4, "ngIf"], [1, "info-wrapper2", "section"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "start-your-journey", "max-699", "m-auto", "text-center", "bg-white", "p-5"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "h1", "fw-bold"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "800", 1, "small", "mt-4", "mb-4", "text-muted"], ["href", "#", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1200", 1, "btn", "me-sm-3", "mt-2", "text-white", "bg-dark", "rounded-3", "px-4", "py-3", "nott", "ls0", "shadow-sm", "btn-hover-moveUp"], [1, "ri-google-play-fill"], ["href", "#", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1200", 1, "ms-0", "mt-2", "btn", "text-white", "bg-dark", "rounded-3", "px-4", "py-3", "nott", "ls0", "shadow-sm", "btn-hover-moveUp"], [1, "ri-apple-fill"]],
      template: function InfoWrapper2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InfoWrapper2Component_div_0_Template, 14, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.infpWrapper2Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9pbmZvLXdyYXBwZXIvaW5mby13cmFwcGVyMi9pbmZvLXdyYXBwZXIyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoWrapper2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-wrapper2',
          templateUrl: './info-wrapper2.component.html',
          styleUrls: ['./info-wrapper2.component.scss']
        }]
      }], function () {
        return [];
      }, {
        infpWrapper2Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/info-wrapper/info-wrapper3/info-wrapper3.component.ts": function srcAppPagesCommonInfoWrapperInfoWrapper3InfoWrapper3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoWrapper3Component", function () {
      return InfoWrapper3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var t_writer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! t-writer.js */
    "./node_modules/t-writer.js/dist/t-writer.js");
    /* harmony import */


    var t_writer_js__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(t_writer_js__WEBPACK_IMPORTED_MODULE_1__);

    var _c0 = ["tw1"];
    var _c1 = ["tw2"];
    var _c2 = ["tw3"];
    var _c3 = ["tw4"];

    var InfoWrapper3Component =
    /*#__PURE__*/
    function () {
      function InfoWrapper3Component() {
        _classCallCheck(this, InfoWrapper3Component);
      }

      _createClass(InfoWrapper3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var target1 = this.typewriterElement1.nativeElement;
          var target2 = this.typewriterElement2.nativeElement;
          var target3 = this.typewriterElement3.nativeElement;
          var target4 = this.typewriterElement4.nativeElement;
          var writer1 = new t_writer_js__WEBPACK_IMPORTED_MODULE_1___default.a(target1, {
            loop: false
          });
          writer1.type("UX Tools").rest(500).start();
          var writer2 = new t_writer_js__WEBPACK_IMPORTED_MODULE_1___default.a(target2, {// typeColor: '#',
          });
          writer2.type('Adobe Photoshop, Adobe Illustrator, Adobe XD, Invision, Figma') // .removeCursor()
          // .then(writer3.start.bind(writer3))
          // .start()
          // .rest(500)
          .start();
          var writer3 = new t_writer_js__WEBPACK_IMPORTED_MODULE_1___default.a(target3, {// typeColor: 'red'
          });
          writer3.type("Development Technologies") // .rest(500)
          .start();
          var writer4 = new t_writer_js__WEBPACK_IMPORTED_MODULE_1___default.a(target4, {// typeColor: 'blue'
          });
          writer4.type("HTML/HTML5, CSS/CSS3/SCSS, JavaScript/Jquery, Angular, GIT").rest(500).start(); // .rest(500)
          // .clear()
          // .changeTypeColor('red')
          // .type("defy user expectations")
          // .rest(500)
          // .clear()
          // .changeTypeColor('blue')
          // .type("generate a custom loop")
          // .rest(500)
          // .clear()
          // .changeTypeColor('black')
          // .then(writer2.start.bind(writer2))
        }
      }]);

      return InfoWrapper3Component;
    }();

    InfoWrapper3Component.ɵfac = function InfoWrapper3Component_Factory(t) {
      return new (t || InfoWrapper3Component)();
    };

    InfoWrapper3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoWrapper3Component,
      selectors: [["app-info-wrapper3"]],
      viewQuery: function InfoWrapper3Component_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typewriterElement1 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typewriterElement2 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typewriterElement3 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typewriterElement4 = _t.first);
        }
      },
      decls: 20,
      vars: 0,
      consts: [[1, "info-wrapper3", "text-center", "section"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "profile-img"], ["src", "./assets/images/profle-pic/pankaj_pede.jpeg"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "mt-4", "text-secondary"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "800", 1, "h2", "fw-bold", "mt-3"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1200", 1, "text-wrapper"], [1, "float-start", "w-100", "text-center", "mt-5"], [1, "tw", "w-100", "heading"], ["tw1", ""], [1, "float-start", "w-100", "text-center", "mt-2"], [1, "w-100", "sub-heading"], ["tw2", ""], ["tw3", ""], [1, "tw", "w-100", "sub-heading"], ["tw4", ""]],
      template: function InfoWrapper3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello There,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I'M PANKAJ PEDE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "h1", 7, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "h1", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9pbmZvLXdyYXBwZXIvaW5mby13cmFwcGVyMy9pbmZvLXdyYXBwZXIzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoWrapper3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-wrapper3',
          templateUrl: './info-wrapper3.component.html',
          styleUrls: ['./info-wrapper3.component.scss']
        }]
      }], function () {
        return [];
      }, {
        typewriterElement1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['tw1', {
            "static": true
          }]
        }],
        typewriterElement2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['tw2', {
            "static": true
          }]
        }],
        typewriterElement3: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['tw3', {
            "static": true
          }]
        }],
        typewriterElement4: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['tw4', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/modal/modal1/modal1.component.ts": function srcAppPagesCommonModalModal1Modal1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Modal1Component", function () {
      return Modal1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Modal1Component_li_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Modal1Component_li_0_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.loginModalStatusClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start 14 day\u2019s trail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var Modal1Component =
    /*#__PURE__*/
    function () {
      function Modal1Component() {
        _classCallCheck(this, Modal1Component);

        this.loginModalStatus = false;
        this.step1Status = true;
        this.step1btnStatus = true;
        this.step2Status = false;
        this.step2btnStatus = false;
        this.step3Status = false;
        this.step3btnStatus = false;
        this.step4Status = false;
        this.step4btnStatus = false;
        this.step5Status = false;
        this.step5btnStatus = false;
        this.step6Status = false;
        this.value1 = '';
        this.value2 = '';
        this.value3 = '';
        this.value4 = '';
        this.value5 = '';
      }

      _createClass(Modal1Component, [{
        key: "loginModalStatusClick",
        value: function loginModalStatusClick() {
          this.loginModalStatus = !this.loginModalStatus;
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, {
        key: "onKey1",
        value: function onKey1(event) {
          this.value1 = event.target.value;
        }
      }, {
        key: "onKey2",
        value: function onKey2(event) {
          this.value2 = event.target.value;
        }
      }, {
        key: "onKey3",
        value: function onKey3(event) {
          this.value3 = event.target.value;
        }
      }, {
        key: "onKey4",
        value: function onKey4(event) {
          this.value4 = event.target.value;
        }
      }, {
        key: "onKey5",
        value: function onKey5(event) {
          this.value4 = event.target.value;
        }
      }, {
        key: "step1",
        value: function step1() {
          this.step1btnStatus = !this.step1btnStatus;
          this.step2btnStatus = !this.step2btnStatus;
          this.step2Status = !this.step2Status;
        }
      }, {
        key: "step2",
        value: function step2() {
          this.step2btnStatus = !this.step2btnStatus;
          this.step3btnStatus = !this.step3btnStatus;
          this.step3Status = !this.step3Status;
        }
      }, {
        key: "step3",
        value: function step3() {
          this.step3btnStatus = !this.step3btnStatus;
          this.step4btnStatus = !this.step4btnStatus;
          this.step4Status = !this.step4Status;
        }
      }, {
        key: "step4",
        value: function step4() {
          this.step4btnStatus = !this.step4btnStatus;
          this.step5btnStatus = !this.step5btnStatus;
          this.step5Status = !this.step5Status;
        }
      }, {
        key: "step5",
        value: function step5() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          this.step1Status = !this.step1Status;
          this.step2Status = !this.step2Status;
          this.step3Status = !this.step3Status;
          this.step4Status = !this.step4Status;
          this.step5Status = !this.step5Status;
          this.step5btnStatus = !this.step5btnStatus;
          this.step6Status = !this.step6Status;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Modal1Component;
    }();

    Modal1Component.ɵfac = function Modal1Component_Factory(t) {
      return new (t || Modal1Component)();
    };

    Modal1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Modal1Component,
      selectors: [["app-modal1"]],
      inputs: {
        modal1Type: "modal1Type"
      },
      decls: 130,
      vars: 26,
      consts: [["class", "nav-item", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "modal1-wrapper", 3, "ngClass"], ["role", "document", "data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "1000", "data-aos-delay", "200", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "header-title", "w-100"], [1, "logo", "float-start", "me-3"], ["src", "./assets/images/bot-station-ai/logo/Logo1.svg"], [1, "text", "float-start"], [1, "main-text", "w-100", "float-start"], [1, "sub-text", "text-primary", "w-100", "float-start", "mt-2"], [1, "close", "cursor-pointer", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "chat-message", "float-start", "w-100", "mb-3", 3, "ngClass"], [1, "message-content", "float-start"], [1, "logo", "float-start"], [1, "message-body", "float-start"], [1, "chat-reply", "float-start", "w-100", "mb-3", 3, "ngClass"], [1, "message-content", "float-end"], [1, "mb-0", "text-capitalize"], [1, "text-capitalize"], [1, "mb-0", "text-lowercase"], [1, "fw-bold", "text-lowercase"], [1, "mb-0"], [1, "float-start", "w-100", "border-top", "pt-3", "btn-wrapper", 3, "ngClass"], ["type", "text", "placeholder", "Type your message here", 1, "float-start", "border-0", 3, "keyup"], ["type", "button", 1, "btn", "btn-primary", "float-end", 3, "click"], [1, "ri-send-plane-line"], [1, "float-start", "w-100", "text-center", "signup-success", 3, "ngClass"], ["src", "./assets/images/undraw/order_confirmed.svg"], [1, "h4", "mt-3", "mb-3", "text-primary"], [1, "mt-3"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", "text-white-50", 3, "click"]],
      template: function Modal1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Modal1Component_li_0_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bot Station AI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Request to start 14 day's trail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Modal1Component_Template_div_click_13_listener() {
            return ctx.loginModalStatusClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "You are doing a good thing today,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "To create your 14 day\u2019s free trial portal will you please provide us few details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "What is you first name?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Hello ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "..!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "What is you last name?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "So you full name is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "..!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "What is you work email address? Which you can user to login to your 14 day\u2019s trail portal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "We will use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " for further notifications..!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Set your password now.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "We recommend a minimum of 8 characters that include at least 1 letter, number and special character.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Confirm password please.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Modal1Component_Template_input_keyup_95_listener($event) {
            return ctx.onKey1($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Modal1Component_Template_button_click_96_listener() {
            return ctx.step1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Modal1Component_Template_input_keyup_101_listener($event) {
            return ctx.onKey2($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Modal1Component_Template_button_click_102_listener() {
            return ctx.step2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Modal1Component_Template_input_keyup_107_listener($event) {
            return ctx.onKey3($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Modal1Component_Template_button_click_108_listener() {
            return ctx.step3();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Modal1Component_Template_input_keyup_113_listener($event) {
            return ctx.onKey4($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Modal1Component_Template_button_click_114_listener() {
            return ctx.step4();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Modal1Component_Template_input_keyup_119_listener($event) {
            return ctx.onKey5($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Modal1Component_Template_button_click_120_listener() {
            return ctx.step5();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "14 Day's trail started successfully..!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Please login to explore more features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal1Type == "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginModalStatus ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step1Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step1Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step2Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step2Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step3Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step3Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.value1, " ", ctx.value2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step4Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step4Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step5Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step5Status ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step1btnStatus ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step2btnStatus ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step3btnStatus ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step4btnStatus ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step5btnStatus ? "show" : "hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step6Status ? "show" : "hide");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9tb2RhbC9tb2RhbDEvbW9kYWwxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Modal1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal1',
          templateUrl: './modal1.component.html',
          styleUrls: ['./modal1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        modal1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/modal/modal2/modal2.component.ts": function srcAppPagesCommonModalModal2Modal2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Modal2Component", function () {
      return Modal2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function Modal2Component_li_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Modal2Component_li_0_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.loginModalStatusClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var Modal2Component =
    /*#__PURE__*/
    function () {
      function Modal2Component() {
        _classCallCheck(this, Modal2Component);

        this.loginModalStatus = false;
      }

      _createClass(Modal2Component, [{
        key: "loginModalStatusClick",
        value: function loginModalStatusClick() {
          this.loginModalStatus = !this.loginModalStatus;
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Modal2Component;
    }();

    Modal2Component.ɵfac = function Modal2Component_Factory(t) {
      return new (t || Modal2Component)();
    };

    Modal2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Modal2Component,
      selectors: [["app-modal2"]],
      inputs: {
        modal2Type: "modal2Type"
      },
      decls: 31,
      vars: 2,
      consts: [["class", "nav-item mt-3 float-end login-btn", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "modal1-wrapper", "modal2-wrapper", 3, "ngClass"], ["role", "document", 1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header", "border-0"], [1, "header-title", "w-100"], [1, "modal-title", "text-center", "w-100", "h4", "mt-3"], [1, "close", "cursor-pointer", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "p-5", "pt-3"], [1, "text-secondary", "text-center", "mb-5"], [1, "text-primary", "text-underline"], [1, "form-group", "mb-4"], [1, "ri-user-line"], ["type", "email", "placeholder", "Enter Username", 1, "form-control"], [1, "ri-lock-line"], ["type", "password", "placeholder", "Enter Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "float-start"], [1, "float-end", "text-primary", "text-underline", "mt-3"], [1, "nav-item", "mt-3", "float-end", "login-btn"], ["aria-current", "page", 1, "btn-sm", "btn-primary", 3, "click"]],
      template: function Modal2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Modal2Component_li_0_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Modal2Component_Template_div_click_8_listener() {
            return ctx.loginModalStatusClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Manage your bussiness with bot station AI Don\u2019t have an account yet? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Start your 14 day\u2019s trail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal2Type == "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginModalStatus ? "show" : "hide");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9tb2RhbC9tb2RhbDIvbW9kYWwyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Modal2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal2',
          templateUrl: './modal2.component.html',
          styleUrls: ['./modal2.component.scss']
        }]
      }], function () {
        return [];
      }, {
        modal2Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/price-plan/price-plan-wrapper1/price-plan-wrapper1.component.ts": function srcAppPagesCommonPricePlanPricePlanWrapper1PricePlanWrapper1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricePlanWrapper1Component", function () {
      return PricePlanWrapper1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PricePlanWrapper1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Hidden Charges. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Choose Your Best Plan. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Credibly target highly efficient niche markets whereas end-to-end results. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " During Free trail you won't be charge and you can freely use this app without ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Terms and Condtions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "STARTUP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Free");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Phosfluorescently negotiate alternative human capital with fully tested leadership skills. Quickly enable. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 7 Days Free Trail ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " App-In-Purchase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " 100% Safe & Secure ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Liecenced Company ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " No Hidden Charges ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Start Now!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pro");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "$29");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Holisticly disintermediate viral results rather than next-generation action items vertical metrics rather. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " One Time Purchase ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " All Bundle Included ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 100% Safe & Secure ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Liecenced Company ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " No Hidden Charges ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Start Now!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PricePlanWrapper1Component =
    /*#__PURE__*/
    function () {
      function PricePlanWrapper1Component() {
        _classCallCheck(this, PricePlanWrapper1Component);
      }

      _createClass(PricePlanWrapper1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PricePlanWrapper1Component;
    }();

    PricePlanWrapper1Component.ɵfac = function PricePlanWrapper1Component_Factory(t) {
      return new (t || PricePlanWrapper1Component)();
    };

    PricePlanWrapper1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PricePlanWrapper1Component,
      selectors: [["app-price-plan-wrapper1"]],
      inputs: {
        priceTableWrapper1Type: "priceTableWrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid image-text-wrapper2 price-plan-wrapper1 section", 4, "ngIf"], [1, "container-fluid", "image-text-wrapper2", "price-plan-wrapper1", "section"], [1, "container"], [1, "row"], [1, "col-lg-4", "left-section", "pt-5", "bg-dotted"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "w-100", "float-start"], [1, "ri-file-text-line", "h1", "mb-3", "float-start"], [1, "float-start", "w-100"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "500", 1, "sub-heading", "fw-bold", "mb-4", "h2"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "900", 1, "mt-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "900", 1, "mt-4", "small", "float-start"], ["href", "#"], [1, "col-lg-7", "offset-lg-1", "right-section", "pt-5", "price-item-wrapper"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-delay", "1300", 1, "col-12", "col-lg-6", "col-md-12"], [1, "price-item", "float-start", "shadow"], [1, "small", "fw-bold"], [1, "h1", "fw-bold", "mt-2", "mb-4"], [1, "small", "text-muted", "float-start", "mb-4"], [1, "iconlist"], [1, "ri-checkbox-circle-fill"], ["href", "#", 1, "btn", "btn-primary", "d-block", "mt-4", "py-3", "btn-hover-moveUp"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-delay", "1700", 1, "col-12", "col-lg-6", "col-md-12"], [1, "small", "fw-bold", "text-white-50"], [1, "h1", "fw-bold", "mt-2", "mb-5", "text-white"], [1, "small", "text-muted", "float-start", "mb-4", "mt-4"]],
      template: function PricePlanWrapper1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PricePlanWrapper1Component_section_0_Template, 72, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.priceTableWrapper1Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9wcmljZS1wbGFuL3ByaWNlLXBsYW4td3JhcHBlcjEvcHJpY2UtcGxhbi13cmFwcGVyMS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricePlanWrapper1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-price-plan-wrapper1',
          templateUrl: './price-plan-wrapper1.component.html',
          styleUrls: ['./price-plan-wrapper1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        priceTableWrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/schedule/schedule1/schedule1.component.ts": function srcAppPagesCommonScheduleSchedule1Schedule1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Schedule1Component", function () {
      return Schedule1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Schedule1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Build Your First Website Chatbot Today");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Schedule a demo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var Schedule1Component =
    /*#__PURE__*/
    function () {
      function Schedule1Component() {
        _classCallCheck(this, Schedule1Component);
      }

      _createClass(Schedule1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Schedule1Component;
    }();

    Schedule1Component.ɵfac = function Schedule1Component_Factory(t) {
      return new (t || Schedule1Component)();
    };

    Schedule1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Schedule1Component,
      selectors: [["app-schedule1"]],
      inputs: {
        scheduleWrapper1Type: "scheduleWrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container schedule-wrapper1 section mb-5 mt-5", "data-aos", "zoom-in", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 4, "ngIf"], ["data-aos", "zoom-in", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "container", "schedule-wrapper1", "section", "mb-5", "mt-5"], [1, "row"], [1, "col-md-7", "col-12", "text-center"], ["src", "./assets/images/undraw/social_ideas.svg"], [1, "col-md-5", "col-12", "mt-5"], [1, "text-white", "h2"], [1, "btn", "btn-primary", "mt-3"]],
      template: function Schedule1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Schedule1Component_section_0_Template, 9, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scheduleWrapper1Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9zY2hlZHVsZS9zY2hlZHVsZTEvc2NoZWR1bGUxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Schedule1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-schedule1',
          templateUrl: './schedule1.component.html',
          styleUrls: ['./schedule1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        scheduleWrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/sidebar/sidebar1/sidebar1.component.ts": function srcAppPagesCommonSidebarSidebar1Sidebar1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sidebar1Component", function () {
      return Sidebar1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Sidebar1Component =
    /*#__PURE__*/
    function () {
      function Sidebar1Component() {
        _classCallCheck(this, Sidebar1Component);
      }

      _createClass(Sidebar1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Sidebar1Component;
    }();

    Sidebar1Component.ɵfac = function Sidebar1Component_Factory(t) {
      return new (t || Sidebar1Component)();
    };

    Sidebar1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Sidebar1Component,
      selectors: [["app-sidebar1"]],
      decls: 18,
      vars: 0,
      consts: [["data-aos", "fade-right", "data-aos-duration", "1000", 1, "sidebar-wrapper-1"], [1, "profile-img"], ["src", "./assets/images/profle-pic/pankaj_pede.jpeg"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "300", 1, "social-icons", "m-0", "p-0"], [1, "float-start", "w-100"], [1, "float-start"], [1, "ri-facebook-fill"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "float-start", "w-100"], [1, "ri-instagram-line"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "900", 1, "float-start", "w-100"], [1, "ri-linkedin-fill"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "1200", 1, "float-start", "w-100"], [1, "ri-pinterest-fill"], [1, "download-icon", "text-center"], [1, "ri-download-2-line", "text-white"]],
      template: function Sidebar1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9zaWRlYmFyL3NpZGViYXIxL3NpZGViYXIxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sidebar1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar1',
          templateUrl: './sidebar1.component.html',
          styleUrls: ['./sidebar1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/subscribe/subscribe1/subscribe1.component.ts": function srcAppPagesCommonSubscribeSubscribe1Subscribe1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Subscribe1Component", function () {
      return Subscribe1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function Subscribe1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Subscribe ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "to our weekly news ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Start a free Bot Station AI trial and build your first chatbot today! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Looks good! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Subscribe Now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var Subscribe1Component =
    /*#__PURE__*/
    function () {
      function Subscribe1Component() {
        _classCallCheck(this, Subscribe1Component);
      }

      _createClass(Subscribe1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Subscribe1Component;
    }();

    Subscribe1Component.ɵfac = function Subscribe1Component_Factory(t) {
      return new (t || Subscribe1Component)();
    };

    Subscribe1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Subscribe1Component,
      selectors: [["app-subscribe1"]],
      inputs: {
        subscribeWrapper1Type: "subscribeWrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container subscribe-wrapper1 chatbot-wrapper", 4, "ngIf"], [1, "container", "subscribe-wrapper1", "chatbot-wrapper"], [1, "row"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "col-12", "col-md-4", "text-center", "device-image"], ["src", "./assets/images/devices/classic.png"], [1, "col-12", "col-md-8", "vertical-center"], ["data-aos", "fade-left", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "w-100", "float-start", "text-wrapper"], [1, "h2", "mb-2"], [1, "chatbot-text-primary"], [1, "text-muted"], ["novalidate", "", 1, "subscribe-form", "mt-3"], [1, "email-field", "float-start"], ["type", "text", "placeholder", "Email Address", "required", "", 1, "form-control"], [1, "valid-feedback"], [1, "btn-wrapper", "float-start"], ["type", "submit", 1, "btn", "btn-primary"]],
      template: function Subscribe1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Subscribe1Component_section_0_Template, 20, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subscribeWrapper1Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9zdWJzY3JpYmUvc3Vic2NyaWJlMS9zdWJzY3JpYmUxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Subscribe1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-subscribe1',
          templateUrl: './subscribe1.component.html',
          styleUrls: ['./subscribe1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        subscribeWrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/tab/tab1/tab1.component.ts": function srcAppPagesCommonTabTab1Tab1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Component", function () {
      return Tab1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function Tab1Component_section_0_ng_template_17_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stand out from the crowd ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Boost engagement with rich messages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions that do magic tricks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create a LiveChat ticket");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer to LiveChat agent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab1Component_section_0_ng_template_17_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return _r61.select(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-accordion", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-panel", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Tab1Component_section_0_ng_template_17_ng_template_14_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Tab1Component_section_0_ng_template_17_ng_template_15_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-panel", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Tab1Component_section_0_ng_template_17_ng_template_17_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, Tab1Component_section_0_ng_template_17_ng_template_18_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngb-panel", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Tab1Component_section_0_ng_template_17_ng_template_20_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, Tab1Component_section_0_ng_template_17_ng_template_21_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngb-panel", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Tab1Component_section_0_ng_template_17_ng_template_23_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, Tab1Component_section_0_ng_template_17_ng_template_24_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngb-panel", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, Tab1Component_section_0_ng_template_17_ng_template_26_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Tab1Component_section_0_ng_template_17_ng_template_27_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r62.active === 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
      }
    }

    function Tab1Component_section_0_ng_template_22_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Marketing can be automated ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_22_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Chat Widget to your website with a few simple clicks and automate communication with potential customers. Use a smart chatbot on your Facebook fanpage and wow users with your swift responses. Support visitors at every stage of their decision making process and dispel their doubts in the blink of an eye. Build better relationships through real-time communication and get more happy customers.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_22_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Turn traffic into growing revenue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_22_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_22_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skyrocket your customer experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_22_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Solutions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab1Component_section_0_ng_template_22_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return _r61.select(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab1Component_section_0_ng_template_22_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return _r61.select(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-accordion", 39, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-panel", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Tab1Component_section_0_ng_template_22_ng_template_16_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Tab1Component_section_0_ng_template_22_ng_template_17_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-panel", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Tab1Component_section_0_ng_template_22_ng_template_19_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Tab1Component_section_0_ng_template_22_ng_template_20_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngb-panel", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Tab1Component_section_0_ng_template_22_ng_template_22_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Tab1Component_section_0_ng_template_22_ng_template_23_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r63.active === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r63.active === 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stand out from the crowd ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Boost engagement with rich messages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions that do magic tricks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create a LiveChat ticket");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer to LiveChat agent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Integrations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab1Component_section_0_ng_template_27_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return _r61.select(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab1Component_section_0_ng_template_27_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return _r61.select(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-accordion", 44, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-panel", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Tab1Component_section_0_ng_template_27_ng_template_16_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Tab1Component_section_0_ng_template_27_ng_template_17_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-panel", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Tab1Component_section_0_ng_template_27_ng_template_19_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Tab1Component_section_0_ng_template_27_ng_template_20_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngb-panel", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Tab1Component_section_0_ng_template_27_ng_template_22_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Tab1Component_section_0_ng_template_27_ng_template_23_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-panel", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, Tab1Component_section_0_ng_template_27_ng_template_25_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, Tab1Component_section_0_ng_template_27_ng_template_26_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngb-panel", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Tab1Component_section_0_ng_template_27_ng_template_28_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, Tab1Component_section_0_ng_template_27_ng_template_29_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r64.active === 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r64.active === 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chatbot ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "73% of customers say that Customer Experience plays an important role in their decision making! Conversational AI helps you in transforming your customer experience to the next level. Engagely.ai\u2019s Conversational Chatbots deliver effective customer experience on any desired platform and in the customer\u2019s preferred language.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "WhatsApp Bot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Bot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Bot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Social Media Bot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Chatbot Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab1Component_section_0_ng_template_32_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return _r61.select(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab1Component_section_0_ng_template_32_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return _r61.select(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-accordion", 51, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-panel", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Tab1Component_section_0_ng_template_32_ng_template_16_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Tab1Component_section_0_ng_template_32_ng_template_17_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-panel", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Tab1Component_section_0_ng_template_32_ng_template_19_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Tab1Component_section_0_ng_template_32_ng_template_20_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngb-panel", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Tab1Component_section_0_ng_template_32_ng_template_22_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Tab1Component_section_0_ng_template_32_ng_template_23_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-panel", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, Tab1Component_section_0_ng_template_32_ng_template_25_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, Tab1Component_section_0_ng_template_32_ng_template_26_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngb-panel", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Tab1Component_section_0_ng_template_32_ng_template_28_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, Tab1Component_section_0_ng_template_32_ng_template_29_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r65.active === 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r65.active === 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
      }
    }

    function Tab1Component_section_0_ng_template_37_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Meet our ChatBot platform ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_37_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To understand what is our platform lets talk for a moment what are chatbots in general and who they are designed for. A chatbot is a technology that simulates human-like conversations in real time. The conversation is analyzed by the AI and advanced algorithms to deliver high-quality experience and smooth communication between human and the computer.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_37_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Meet Your Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_37_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_37_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ask question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_37_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_37_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tag for LiveChat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_37_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Tab1Component_section_0_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Help Center");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab1Component_section_0_ng_template_37_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return _r61.select(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-accordion", 58, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-panel", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Tab1Component_section_0_ng_template_37_ng_template_14_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Tab1Component_section_0_ng_template_37_ng_template_15_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-panel", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Tab1Component_section_0_ng_template_37_ng_template_17_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, Tab1Component_section_0_ng_template_37_ng_template_18_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngb-panel", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Tab1Component_section_0_ng_template_37_ng_template_20_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, Tab1Component_section_0_ng_template_37_ng_template_21_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngb-panel", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Tab1Component_section_0_ng_template_37_ng_template_23_Template, 2, 0, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, Tab1Component_section_0_ng_template_37_ng_template_24_Template, 2, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r66.active === 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
      }
    }

    function Tab1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Package of smart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Bot Station AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Build intelligent virtual assistants for your websites, facebook pages, and messaging apps. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function Tab1Component_section_0_Template_ul_activeIdChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r129.active = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Tab1Component_section_0_ng_template_17_Template, 28, 2, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Solutions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Tab1Component_section_0_ng_template_22_Template, 24, 3, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Integrations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Tab1Component_section_0_ng_template_27_Template, 30, 3, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Chatbot Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, Tab1Component_section_0_ng_template_32_Template, 30, 3, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Help Center");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, Tab1Component_section_0_ng_template_37_Template, 25, 2, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx_r60.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r61);
      }
    }

    var Tab1Component =
    /*#__PURE__*/
    function () {
      function Tab1Component() {
        _classCallCheck(this, Tab1Component);

        this.active = 1;
      }

      _createClass(Tab1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Tab1Component;
    }();

    Tab1Component.ɵfac = function Tab1Component_Factory(t) {
      return new (t || Tab1Component)();
    };

    Tab1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Tab1Component,
      selectors: [["app-tab1"]],
      inputs: {
        tabWrapper1Type: "tabWrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container tab1-wrapper section chatbot-wrapper", "data-aos", "zoom-in-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 4, "ngIf"], ["data-aos", "zoom-in-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "container", "tab1-wrapper", "section", "chatbot-wrapper"], [1, "row", "mb-5"], [1, "col-12", "text-center"], [1, "h2", "mb-3"], [1, "chatbot-text-primary"], [1, "text-muted"], [1, "row", "mt-5"], [1, "col-12"], ["ngbNav", "", 1, "nav-tabs", "d-flex", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [1, "flex-fill", 3, "ngbNavItem"], ["ngbNavLink", "", 1, "text-center"], [1, "tab-label"], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [1, "row", "mobile-tab-title"], [1, "h4", "pb-4", "pt-4"], [1, "tab-arrow-wrapper"], [1, "next-btn", "arrow-btn", 3, "disabled", "click"], [1, "ri-arrow-right-s-line"], [1, "row", "pt-4"], [1, "col-12", "col-md-5", "text-center", "bot-image"], ["src", "./assets/images/bot-station-ai/bot/hi-bot.svg", 1, "w-50"], [1, "col-12", "col-md-7"], ["activeIds", "ngb-panel1-1", 3, "closeOthers"], ["acc", "ngbAccordion"], ["id", "ngb-panel1-1"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "ngb-panel1-2"], ["id", "ngb-panel1-3"], ["id", "ngb-panel1-4"], ["id", "ngb-panel1-5"], [1, "float-start", "w-100"], [1, "text-muted", "small"], [1, "pre-btn", "arrow-btn", 3, "disabled", "click"], [1, "ri-arrow-left-s-line"], ["src", "./assets/images/bot-station-ai/bot/remote-bot.svg", 1, "w-50"], ["activeIds", "ngb-panel2-1", 3, "closeOthers"], ["id", "ngb-panel2-1"], ["id", "ngb-panel2-2"], ["id", "ngb-panel2-3"], ["src", "./assets/images/bot-station-ai/bot/search-bot.svg", 1, "w-50"], ["activeIds", "ngb-panel3-1", 3, "closeOthers"], ["id", "ngb-panel3-1"], ["id", "ngb-panel3-2"], ["id", "ngb-panel3-3"], ["id", "ngb-panel3-4"], ["id", "ngb-panel3-5"], ["src", "./assets/images/bot-station-ai/bot/money-bot.svg", 1, "w-50"], ["activeIds", "ngb-panel4-1", 3, "closeOthers"], ["id", "ngb-panel4-1"], ["id", "ngb-panel4-2"], ["id", "ngb-panel4-3"], ["id", "ngb-panel4-4"], ["id", "ngb-panel4-5"], ["src", "./assets/images/bot-station-ai/bot/envelope-bot.svg", 1, "w-50"], ["activeIds", "ngb-panel5-1", 3, "closeOthers"], ["id", "ngb-panel5-1"], ["id", "ngb-panel5-2"], ["id", "ngb-panel5-3"], ["id", "ngb-panel5-4"]],
      template: function Tab1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tab1Component_section_0_Template, 39, 7, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabWrapper1Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi90YWIvdGFiMS90YWIxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tab1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tab1',
          templateUrl: './tab1.component.html',
          styleUrls: ['./tab1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        tabWrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/testimonial/testimonial1/testimonial1.component.ts": function srcAppPagesCommonTestimonialTestimonial1Testimonial1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Testimonial1Component", function () {
      return Testimonial1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function Testimonial1Component_section_0_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Completely restore optimal human capital with economically sound infomediaries. Authoritatively extend end-to-end content with covalent relationships. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Steve Jobs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Apple Inc.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial1Component_section_0_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dynamically supply cross functional process improvements whereas enterprise-wide ROI. Distinctively streamline cost effective data and multifunctional functionalities. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Collis Ta'eed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Envato Inc.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial1Component_section_0_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Globally implement strategic resources via ethical markets. Interactively drive highly efficient potentialities before economically sound applications communicate solutions. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "John Doe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "XYZ Inc.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "owl-carousel-o", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Testimonial1Component_section_0_ng_template_5_Template, 11, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Testimonial1Component_section_0_ng_template_6_Template, 11, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Testimonial1Component_section_0_ng_template_7_Template, 11, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r47.testimonial1);
      }
    }

    var Testimonial1Component =
    /*#__PURE__*/
    function () {
      function Testimonial1Component() {
        _classCallCheck(this, Testimonial1Component);

        this.testimonial1 = {
          loop: true,
          autoplay: true,
          center: false,
          dots: false,
          autoHeight: true,
          autoWidth: true,
          nav: true,
          navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
          responsive: {
            0: {
              items: 1
            }
          }
        };
      }

      _createClass(Testimonial1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Testimonial1Component;
    }();

    Testimonial1Component.ɵfac = function Testimonial1Component_Factory(t) {
      return new (t || Testimonial1Component)();
    };

    Testimonial1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Testimonial1Component,
      selectors: [["app-testimonial1"]],
      inputs: {
        testimonialWrapper1Type: "testimonialWrapper1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid testimonial-wrapper-1 section bg-blue bg-dotted-white", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "200", 4, "ngIf"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "container-fluid", "testimonial-wrapper-1", "section", "bg-blue", "bg-dotted-white"], [1, "container", "pb-5", "pt-5"], [1, "row"], [1, "col-12", "pb-5"], [3, "options"], ["carouselSlide", ""], [1, "testimonial-item", "text-center", "max-699", "m-auto"], ["src", "./assets/images/brand-logo/skype.svg", 1, "m-auto", 2, "width", "75px"], [1, "w-100"], [1, "text-white"], [1, "testi-meta", "mt-4", "text-white"], [1, "float-start", "w-100", "name", "mb-2"], [1, "float-start", "w-100", "text-white-50"], ["src", "./assets/images/brand-logo/netflix-white.svg", 1, "m-auto", 2, "width", "125px"], ["src", "./assets/images/brand-logo/nat-geo.svg", 1, "m-auto", 2, "width", "125px"]],
      template: function Testimonial1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Testimonial1Component_section_0_Template, 8, 1, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testimonialWrapper1Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbDEvdGVzdGltb25pYWwxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Testimonial1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-testimonial1',
          templateUrl: './testimonial1.component.html',
          styleUrls: ['./testimonial1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        testimonialWrapper1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/testimonial/testimonial2/testimonial2.component.ts": function srcAppPagesCommonTestimonialTestimonial2Testimonial2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Testimonial2Component", function () {
      return Testimonial2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function Testimonial2Component_section_0_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u201CThe most well-known dum text is the 'Lorem Ipsum', which is said to have originated in the 16th century. \". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "- Ana Watson ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Syntel Inc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial2Component_section_0_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. \" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "- Matrik Lee ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Apple Inc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial2Component_section_0_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. \" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "- Jolly Wilson ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "City Bank, India");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial2Component_section_0_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u201CThe most well-known dum text is the 'Lorem Ipsum', which is said to have originated in the 16th century. \". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "- Ana Watson ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Syntel Inc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial2Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Reviews by");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Clients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " We will be happy to organize a 30 minute demo to showcase why the industry leaders prefer all in one for Conversational AI platform. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "owl-carousel-o", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Testimonial2Component_section_0_ng_template_14_Template, 12, 0, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Testimonial2Component_section_0_ng_template_15_Template, 12, 0, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Testimonial2Component_section_0_ng_template_16_Template, 12, 0, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Testimonial2Component_section_0_ng_template_17_Template, 12, 0, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r51.testimonial1);
      }
    }

    var Testimonial2Component =
    /*#__PURE__*/
    function () {
      function Testimonial2Component() {
        _classCallCheck(this, Testimonial2Component);

        this.testimonial1 = {
          loop: true,
          autoplay: true,
          center: false,
          dots: true,
          autoHeight: true,
          autoWidth: true,
          nav: false,
          navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
          responsive: {
            0: {
              items: 1
            },
            991: {
              items: 2
            },
            1024: {
              items: 3
            }
          }
        };
      }

      _createClass(Testimonial2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Testimonial2Component;
    }();

    Testimonial2Component.ɵfac = function Testimonial2Component_Factory(t) {
      return new (t || Testimonial2Component)();
    };

    Testimonial2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Testimonial2Component,
      selectors: [["app-testimonial2"]],
      inputs: {
        testimonialWrapper2Type: "testimonialWrapper2Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid testimonial-wrapper-2 section bg-light-blue chatbot-wrapper mb-5 mt-5", 4, "ngIf"], [1, "container-fluid", "testimonial-wrapper-2", "section", "bg-light-blue", "chatbot-wrapper", "mb-5", "mt-5"], [1, "container"], [1, "row", "mb-5"], [1, "col-12", "text-center", "heading-wrapper", "mb-3"], [1, "w-75", "m-auto"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "h2", "mb-3"], [1, "chatbot-text-primary"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "text-muted"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "500", 1, "row"], [1, "col-12"], [3, "options"], ["carouselSlide", ""], [1, "testimonial-item"], [1, "profile-img", "float-start"], ["src", "./assets/images/users/2.png"], [1, "testominial-text", "float-end"], [1, "testi-meta", "mt-2"], [1, "float-start", "w-100", "mb-2"], ["src", "./assets/images/users/1.png"], ["src", "./assets/images/users/3.png"]],
      template: function Testimonial2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Testimonial2Component_section_0_Template, 18, 1, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testimonialWrapper2Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbDIvdGVzdGltb25pYWwyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Testimonial2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-testimonial2',
          templateUrl: './testimonial2.component.html',
          styleUrls: ['./testimonial2.component.scss']
        }]
      }], function () {
        return [];
      }, {
        testimonialWrapper2Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/testimonial/testimonial3/testimonial3.component.ts": function srcAppPagesCommonTestimonialTestimonial3Testimonial3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Testimonial3Component", function () {
      return Testimonial3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function Testimonial3Component_section_0_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "80%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Open Rate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Your reply and action has been very prompt, and I appreciate your promptness in addressing customer concerns. Keep up the good work! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "- Ana Watson ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Syntel Inc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial3Component_section_0_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chat Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We use Tetrapack.io to send Proactive Messages to which we want users to reply. Because we know Verloop.io has an excellent way to build customer journeys to streamline the communication ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "- John Doe ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Tetrapack");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial3Component_section_0_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "96%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bot Deflection");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We, at Microsoft, have been able to follow the \u201Cless human intervention, more automation\u201D model with a reduction of 33% of our agents\u2019 time over chat. With Verloop.io\u2019s automation in play, we\u2019ve been able to handle the larger volumes of customer queries coming in too. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "- Andrew Lee ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Microsoft");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Testimonial3Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Testimonials by");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Clients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " We will be happy to organize a 30 minute demo to showcase why the industry leaders prefer all in one for Conversational AI platform. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "owl-carousel-o", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Testimonial3Component_section_0_ng_template_14_Template, 18, 0, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Testimonial3Component_section_0_ng_template_15_Template, 18, 0, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Testimonial3Component_section_0_ng_template_16_Template, 18, 0, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r133.testimonial1);
      }
    }

    var Testimonial3Component =
    /*#__PURE__*/
    function () {
      function Testimonial3Component() {
        _classCallCheck(this, Testimonial3Component);

        this.testimonial1 = {
          loop: true,
          autoplay: true,
          center: false,
          dots: false,
          autoHeight: true,
          autoWidth: true,
          nav: true,
          navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
          responsive: {
            0: {
              items: 1
            },
            991: {
              items: 1
            },
            1024: {
              items: 1
            }
          }
        };
      }

      _createClass(Testimonial3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Testimonial3Component;
    }();

    Testimonial3Component.ɵfac = function Testimonial3Component_Factory(t) {
      return new (t || Testimonial3Component)();
    };

    Testimonial3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Testimonial3Component,
      selectors: [["app-testimonial3"]],
      inputs: {
        testimonialWrapper3Type: "testimonialWrapper3Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid section testimonial-wrapper-3", 4, "ngIf"], [1, "container-fluid", "section", "testimonial-wrapper-3"], [1, "container"], [1, "row"], [1, "col-12", "text-center", "heading-wrapper", "mb-3"], [1, "w-75", "m-auto"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "h2", "mb-3"], [1, "chatbot-text-primary"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "text-muted"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "row"], [1, "col-12"], [3, "options"], ["carouselSlide", ""], [1, "testimonial-item"], [1, "testimonial-content", "float-start", "w-100"], [1, "top-bladge", "float-start"], [1, "bold-text", "float-start", "w-100", "text-center", "text-white", "fw-bold"], [1, "support-text", "float-start", "w-100", "text-center", "text-white", "mt-2"], [1, "profile-img", "float-start"], ["src", "./assets/images/users/1.png"], [1, "testominial-text", "float-end"], [1, "testi-meta", "mt-2", "float-start", "w-100"], [1, "float-start", "w-100", "mb-2", "fw-bold"], [1, "chatbot-text-primary", "fw-bold"], ["src", "./assets/images/users/2.png"], ["src", "./assets/images/users/3.png"]],
      template: function Testimonial3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Testimonial3Component_section_0_Template, 17, 1, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testimonialWrapper3Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbDMvdGVzdGltb25pYWwzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Testimonial3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-testimonial3',
          templateUrl: './testimonial3.component.html',
          styleUrls: ['./testimonial3.component.scss']
        }]
      }], function () {
        return [];
      }, {
        testimonialWrapper3Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/top-banner/top-banner1/top-banner1.component.ts": function srcAppPagesCommonTopBannerTopBanner1TopBanner1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBanner1Component", function () {
      return TopBanner1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopBanner1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Our Design Your Bussiness");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Best Wallet App for your upcoming Projects. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Get it on the App Store ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Get it on Play Store ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TopBanner1Component =
    /*#__PURE__*/
    function () {
      function TopBanner1Component() {
        _classCallCheck(this, TopBanner1Component);
      }

      _createClass(TopBanner1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBanner1Component;
    }();

    TopBanner1Component.ɵfac = function TopBanner1Component_Factory(t) {
      return new (t || TopBanner1Component)();
    };

    TopBanner1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBanner1Component,
      selectors: [["app-top-banner1"]],
      inputs: {
        topbanner1Type: "topbanner1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid top-banner1 bg-blue", 4, "ngIf"], [1, "container-fluid", "top-banner1", "bg-blue"], [1, "container"], [1, "row"], [1, "col-12", "col-md-6"], [1, "top-banner-wrapper", "float-start", "w-100"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "300", 1, "display-3", "mb-5", "text-white"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "800", 1, "mb-4", "text-light", "text-font125"], [1, "w-100", "mt-2"], ["href", "#", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1600", 1, "btn", "me-3", "mt-2", "text-dark", "bg-white", "rounded-3", "px-4", "py-3", "nott", "ls0", "shadow-sm", "btn-hover-moveUp"], [1, "ri-google-play-fill"], ["href", "#", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1600", 1, "ms-0", "mt-2", "btn", "text-dark", "bg-white", "rounded-3", "px-4", "py-3", "nott", "ls0", "shadow-sm", "btn-hover-moveUp"], [1, "ri-apple-fill"], [1, "col-lg-1", "d-md-none", "d-lg-block"], [1, "col-lg-5", "col-md-6", "align-self-lg-end"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-delay", "2200", 1, "slide-imgs"], ["src", "./assets/images/devices/top-banner-1.png", "alt", "Image", 1, "card-img"], ["src", "./assets/images/devices/top-banner-2.png", "alt", "Image", 1, "iphone-img"]],
      template: function TopBanner1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TopBanner1Component_section_0_Template, 21, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topbanner1Type == "corporateBlue");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi90b3AtYmFubmVyL3RvcC1iYW5uZXIxL3RvcC1iYW5uZXIxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBanner1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-banner1',
          templateUrl: './top-banner1.component.html',
          styleUrls: ['./top-banner1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        topbanner1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/top-banner/top-banner2/top-banner2.component.ts": function srcAppPagesCommonTopBannerTopBanner2TopBanner2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBanner2Component", function () {
      return TopBanner2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopBanner2Component_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scale your business with service Bot Station AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create your chatbot with ease by moving customizable elements over the scenario. Drag and drop responses and actions to compose the best conversational experience.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Read More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TopBanner2Component =
    /*#__PURE__*/
    function () {
      function TopBanner2Component() {
        _classCallCheck(this, TopBanner2Component);
      }

      _createClass(TopBanner2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBanner2Component;
    }();

    TopBanner2Component.ɵfac = function TopBanner2Component_Factory(t) {
      return new (t || TopBanner2Component)();
    };

    TopBanner2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBanner2Component,
      selectors: [["app-top-banner2"]],
      inputs: {
        topbanner2Type: "topbanner2Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "top-banner2", "data-aos", "zoom-in-up", 4, "ngIf"], ["data-aos", "zoom-in-up", 1, "top-banner2"], [1, "container", "content-area"], [1, "row"], [1, "col-12", "col-md-6"], [1, "w-75", "m-auto"], ["data-aos", "fade-right", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "300", 1, "h2", "text-white", "mb-4"], ["data-aos", "fade-right", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "text-white-50", "mb-4"], ["href", "#", "data-aos", "fade-right", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "500", 1, "btn", "btn-primary", "mt-1"], [1, "col-12", "col-md-6", "text-center"], ["src", "./assets/images/bot-station-ai/bot/full-bot-1.png", "data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "w-100%"]],
      template: function TopBanner2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TopBanner2Component_div_0_Template, 13, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topbanner2Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi90b3AtYmFubmVyL3RvcC1iYW5uZXIyL3RvcC1iYW5uZXIyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBanner2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-banner2',
          templateUrl: './top-banner2.component.html',
          styleUrls: ['./top-banner2.component.scss']
        }]
      }], function () {
        return [];
      }, {
        topbanner2Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/top-banner/top-banner3/top-banner3.component.ts": function srcAppPagesCommonTopBannerTopBanner3TopBanner3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBanner3Component", function () {
      return TopBanner3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TopBanner3Component =
    /*#__PURE__*/
    function () {
      function TopBanner3Component() {
        _classCallCheck(this, TopBanner3Component);
      }

      _createClass(TopBanner3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBanner3Component;
    }();

    TopBanner3Component.ɵfac = function TopBanner3Component_Factory(t) {
      return new (t || TopBanner3Component)();
    };

    TopBanner3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBanner3Component,
      selectors: [["app-top-banner3"]],
      inputs: {
        topbanner3Type: "topbanner3Type"
      },
      decls: 2,
      vars: 0,
      template: function TopBanner3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top banner 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi90b3AtYmFubmVyL3RvcC1iYW5uZXIzL3RvcC1iYW5uZXIzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBanner3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-banner3',
          templateUrl: './top-banner3.component.html',
          styleUrls: ['./top-banner3.component.scss']
        }]
      }], function () {
        return [];
      }, {
        topbanner3Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/video-player/video-player1/video-player1.component.ts": function srcAppPagesCommonVideoPlayerVideoPlayer1VideoPlayer1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPlayer1Component", function () {
      return VideoPlayer1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VideoPlayer1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our customers love us, hear from them");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "iframe", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var VideoPlayer1Component =
    /*#__PURE__*/
    function () {
      function VideoPlayer1Component() {
        _classCallCheck(this, VideoPlayer1Component);

        this.playStatus = false;
      }

      _createClass(VideoPlayer1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VideoPlayer1Component;
    }();

    VideoPlayer1Component.ɵfac = function VideoPlayer1Component_Factory(t) {
      return new (t || VideoPlayer1Component)();
    };

    VideoPlayer1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoPlayer1Component,
      selectors: [["app-video-player1"]],
      inputs: {
        videoPlayer1Type: "videoPlayer1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "image-text-wrapper7 section video-wrapper1 bg-light pt-0 pb-0", 4, "ngIf"], [1, "image-text-wrapper7", "section", "video-wrapper1", "bg-light", "pt-0", "pb-0"], [1, "container-fluid", "content-area", "pt-5", "pb-5"], [1, "row"], [1, "col-12", "col-lg-8", "bg-light", "text-wrapper"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "h2", "mb-4", "text-center", "heading"], [1, "tag-list"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "tag-list-item", "float-start"], ["src", "./assets/images/bot-station-ai/other/Best-Support-2.svg"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "tag-list-item", "float-start"], ["src", "./assets/images/bot-station-ai/other/Easiest-Set-up.svg"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "tag-list-item", "float-start"], ["src", "./assets/images/bot-station-ai/other/High-Performer-1.svg"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "800", 1, "tag-list-item", "float-start"], ["src", "./assets/images/bot-station-ai/other/Leader-1.svg"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "1000", 1, "tag-list-item", "float-start"], ["src", "./assets/images/bot-station-ai/other/users-loves-us.svg"], [1, "clearfix"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "col-12", "col-lg-4", "text-center"], ["id", "instructions", 1, "video-wrapper"], ["height", "300", "width", "100%", "id", "my_video_1", "src", "https://www.youtube.com/embed/O5hShUO6wxs"]],
      template: function VideoPlayer1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoPlayer1Component_section_0_Template, 21, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoPlayer1Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L015IFRlbXBsYXRlL2FsbC1pbi1vbmUvc3JjL2FwcC9wYWdlcy9jb21tb24vdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllcjEvdmlkZW8tcGxheWVyMS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbW9uL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIxL3ZpZGVvLXBsYXllcjEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tb24vdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllcjEvdmlkZW8tcGxheWVyMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iLCIuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlayer1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-player1',
          templateUrl: './video-player1.component.html',
          styleUrls: ['./video-player1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        videoPlayer1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/why/why-wrapper1/why-wrapper1.component.ts": function srcAppPagesCommonWhyWhyWrapper1WhyWrapper1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhyWrapper1Component", function () {
      return WhyWrapper1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WhyWrapper1Component_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Why ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bot Station AI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " for Website? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Experience the power of conversational AI customer support with the best chatbot for Website");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Greet All Visitors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Generate More Leads");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Give Quick Replies");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Provide 24\xD77 Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Increase Interactions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Easy to Install");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Reduce Ops Costs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Customise as per Brand");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var WhyWrapper1Component =
    /*#__PURE__*/
    function () {
      function WhyWrapper1Component() {
        _classCallCheck(this, WhyWrapper1Component);
      }

      _createClass(WhyWrapper1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WhyWrapper1Component;
    }();

    WhyWrapper1Component.ɵfac = function WhyWrapper1Component_Factory(t) {
      return new (t || WhyWrapper1Component)();
    };

    WhyWrapper1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WhyWrapper1Component,
      selectors: [["app-why-wrapper1"]],
      inputs: {
        whyWrappre1Type: "whyWrappre1Type"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid section why-wrapper1", 4, "ngIf"], [1, "container-fluid", "section", "why-wrapper1"], [1, "row"], [1, "col-12", "text-center"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "heading", "fw-bold", "mb-3", "h2", "text-white"], [1, "text-white", "fw-bold"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "text-white"], [1, "container", "pt-5"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "600", 1, "col-md-3", "col-12", "mb-4"], [1, "card", "why-card", "whycard-primarydark", "text-center"], [1, "card-body"], [1, "float-start", "w-100"], [1, "ri-hand-heart-line"], [1, "card", "why-card", "whycard-warning", "text-center"], [1, "ri-user-add-line"], [1, "card", "why-card", "whycard-success", "text-center"], [1, "ri-wechat-2-line"], [1, "card", "why-card", "whycard-cyan", "text-center"], [1, "ri-24-hours-line"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", "data-aos-delay", "800", 1, "col-md-3", "col-12", "mb-4"], [1, "ri-line-chart-line"], [1, "ri-install-line"], [1, "ri-pie-chart-line"], [1, "ri-medal-line"]],
      template: function WhyWrapper1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WhyWrapper1Component_section_0_Template, 68, 0, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.whyWrappre1Type == "botStationAi");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi93aHkvd2h5LXdyYXBwZXIxL3doeS13cmFwcGVyMS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhyWrapper1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-why-wrapper1',
          templateUrl: './why-wrapper1.component.html',
          styleUrls: ['./why-wrapper1.component.scss']
        }]
      }], function () {
        return [];
      }, {
        whyWrappre1Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/allinone/allinone-home/allinone-home.component.ts": function srcAppPagesViewsAllinoneAllinoneHomeAllinoneHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllinoneHomeComponent", function () {
      return AllinoneHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/bot-station-ai-home"];
    };

    var _c1 = function _c1() {
      return ["/corporate-blue-home"];
    };

    var AllinoneHomeComponent =
    /*#__PURE__*/
    function () {
      function AllinoneHomeComponent() {
        _classCallCheck(this, AllinoneHomeComponent);
      }

      _createClass(AllinoneHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AllinoneHomeComponent;
    }();

    AllinoneHomeComponent.ɵfac = function AllinoneHomeComponent_Factory(t) {
      return new (t || AllinoneHomeComponent)();
    };

    AllinoneHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllinoneHomeComponent,
      selectors: [["app-allinone-home"]],
      decls: 65,
      vars: 4,
      consts: [[1, "section", "allinone-home"], [1, "text-center", "h4"], [1, "container", "mt-5"], [1, "row"], [1, "col-md-4", "col-12", "mb-4"], [1, "float-start", "w-100", "content-wrapper"], [1, "img-wrapper"], ["src", "./assets/images/projects/chabot-ai.png", 1, "w-100"], [1, "text-wrapper", "p-3"], [1, "h5", "text-dark", "fw-bold", "mb-3", "text-center"], [1, "links-wrapper", "mt-2"], [1, "links-item", "mb-2"], ["target", "_blank", "href", "https://www.figma.com/proto/RFCtusleNzjiFv7BtAalyI/Bot-Station-AI-New?node-id=0%253A2&scaling=min-zoom"], [1, "ri-arrow-right-line"], [3, "routerLink"], [1, "links-item"], ["target", "_blank", "href", "https://xd.adobe.com/view/99bb237c-4925-4df1-b127-c10235eb08d8-cce8/"], ["src", "./assets/images/projects/canvas.png", 1, "w-100"], ["href", "#", 1, "disabled"], ["src", "./assets/images/projects/online-portfolio.png", 1, "w-100"], ["target", "_blank", "href", "https://xd.adobe.com/view/eec55a90-65a2-4d8d-8a2b-b71c6f0cc6f5-bb96/"], ["href", "https://pankajpede.github.io/aboutme/", "target", "_blank"], ["target", "_blank", "href", "https://www.behance.net/gallery/132134285/Online-Portfolio-Case-Study-Prototype?"]],
      template: function AllinoneHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ChatBot AI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Prototype ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View Live Demo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "View UX Case Study ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Coprporate Blue Canvas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View Prototype ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "View Live Demo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "View UX Case Study ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "View Prototype ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "View Live Demo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "View UX Case Study ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL2FsbGlub25lL2FsbGlub25lLWhvbWUvYWxsaW5vbmUtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllinoneHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-allinone-home',
          templateUrl: './allinone-home.component.html',
          styleUrls: ['./allinone-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/bot-station-ai/bot-station-ai-home/bot-station-ai-home.component.ts": function srcAppPagesViewsBotStationAiBotStationAiHomeBotStationAiHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotStationAiHomeComponent", function () {
      return BotStationAiHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_header_header3_header3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/header/header3/header3.component */
    "./src/app/pages/common/header/header3/header3.component.ts");
    /* harmony import */


    var _common_top_banner_top_banner2_top_banner2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/top-banner/top-banner2/top-banner2.component */
    "./src/app/pages/common/top-banner/top-banner2/top-banner2.component.ts");
    /* harmony import */


    var _common_image_text_wrapper_image_text_wrapper6_image_text_wrapper6_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/image-text-wrapper/image-text-wrapper6/image-text-wrapper6.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper6/image-text-wrapper6.component.ts");
    /* harmony import */


    var _common_carousel_carousel_wrapper3_carousel_wrapper3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../common/carousel/carousel-wrapper3/carousel-wrapper3.component */
    "./src/app/pages/common/carousel/carousel-wrapper3/carousel-wrapper3.component.ts");
    /* harmony import */


    var _common_tab_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../common/tab/tab1/tab1.component */
    "./src/app/pages/common/tab/tab1/tab1.component.ts");
    /* harmony import */


    var _common_testimonial_testimonial2_testimonial2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../common/testimonial/testimonial2/testimonial2.component */
    "./src/app/pages/common/testimonial/testimonial2/testimonial2.component.ts");
    /* harmony import */


    var _common_subscribe_subscribe1_subscribe1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../common/subscribe/subscribe1/subscribe1.component */
    "./src/app/pages/common/subscribe/subscribe1/subscribe1.component.ts");
    /* harmony import */


    var _common_footer_footer2_footer2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../common/footer/footer2/footer2.component */
    "./src/app/pages/common/footer/footer2/footer2.component.ts");
    /* harmony import */


    var _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../common/go-top/go-top1/go-top1.component */
    "./src/app/pages/common/go-top/go-top1/go-top1.component.ts");

    var BotStationAiHomeComponent =
    /*#__PURE__*/
    function () {
      function BotStationAiHomeComponent() {
        _classCallCheck(this, BotStationAiHomeComponent);
      }

      _createClass(BotStationAiHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return BotStationAiHomeComponent;
    }();

    BotStationAiHomeComponent.ɵfac = function BotStationAiHomeComponent_Factory(t) {
      return new (t || BotStationAiHomeComponent)();
    };

    BotStationAiHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BotStationAiHomeComponent,
      selectors: [["app-bot-station-ai-home"]],
      decls: 12,
      vars: 10,
      consts: [[1, "nunito-font-wrapper"], [3, "header3Type"], [3, "topbanner2Type"], [3, "imageTextwrapper6Type"], [3, "imageTextwrapper6aType"], [3, "imageTextwrapper6bType"], [3, "carouselWrapper3Type"], [3, "tabWrapper1Type"], [3, "testimonialWrapper2Type"], [3, "subscribeWrapper1Type"], [3, "footer2Type"]],
      template: function BotStationAiHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-top-banner2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-text-wrapper6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-image-text-wrapper6", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-image-text-wrapper6", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-carousel-wrapper3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-tab1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-testimonial2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-subscribe1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-go-top1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header3Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("topbanner2Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper6Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper6aType", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper6bType", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carouselWrapper3Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabWrapper1Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialWrapper2Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subscribeWrapper1Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer2Type", "botStationAi");
        }
      },
      directives: [_common_header_header3_header3_component__WEBPACK_IMPORTED_MODULE_1__["Header3Component"], _common_top_banner_top_banner2_top_banner2_component__WEBPACK_IMPORTED_MODULE_2__["TopBanner2Component"], _common_image_text_wrapper_image_text_wrapper6_image_text_wrapper6_component__WEBPACK_IMPORTED_MODULE_3__["ImageTextWrapper6Component"], _common_carousel_carousel_wrapper3_carousel_wrapper3_component__WEBPACK_IMPORTED_MODULE_4__["CarouselWrapper3Component"], _common_tab_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_5__["Tab1Component"], _common_testimonial_testimonial2_testimonial2_component__WEBPACK_IMPORTED_MODULE_6__["Testimonial2Component"], _common_subscribe_subscribe1_subscribe1_component__WEBPACK_IMPORTED_MODULE_7__["Subscribe1Component"], _common_footer_footer2_footer2_component__WEBPACK_IMPORTED_MODULE_8__["Footer2Component"], _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_9__["GoTop1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL2JvdC1zdGF0aW9uLWFpL2JvdC1zdGF0aW9uLWFpLWhvbWUvYm90LXN0YXRpb24tYWktaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotStationAiHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bot-station-ai-home',
          templateUrl: './bot-station-ai-home.component.html',
          styleUrls: ['./bot-station-ai-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/bot-station-ai/bot-station-ai-resources/bot-station-ai-resources.component.ts": function srcAppPagesViewsBotStationAiBotStationAiResourcesBotStationAiResourcesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotStationAiResourcesComponent", function () {
      return BotStationAiResourcesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_header_header3_header3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/header/header3/header3.component */
    "./src/app/pages/common/header/header3/header3.component.ts");
    /* harmony import */


    var _common_carousel_carousel_wrapper4_carousel_wrapper4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/carousel/carousel-wrapper4/carousel-wrapper4.component */
    "./src/app/pages/common/carousel/carousel-wrapper4/carousel-wrapper4.component.ts");
    /* harmony import */


    var _common_video_player_video_player1_video_player1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/video-player/video-player1/video-player1.component */
    "./src/app/pages/common/video-player/video-player1/video-player1.component.ts");
    /* harmony import */


    var _common_image_text_wrapper_image_text_wrapper2_image_text_wrapper2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../common/image-text-wrapper/image-text-wrapper2/image-text-wrapper2.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper2/image-text-wrapper2.component.ts");
    /* harmony import */


    var _common_accordion_accordion1_accordion1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../common/accordion/accordion1/accordion1.component */
    "./src/app/pages/common/accordion/accordion1/accordion1.component.ts");
    /* harmony import */


    var _common_footer_footer2_footer2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../common/footer/footer2/footer2.component */
    "./src/app/pages/common/footer/footer2/footer2.component.ts");
    /* harmony import */


    var _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../common/go-top/go-top1/go-top1.component */
    "./src/app/pages/common/go-top/go-top1/go-top1.component.ts");

    var BotStationAiResourcesComponent =
    /*#__PURE__*/
    function () {
      function BotStationAiResourcesComponent() {
        _classCallCheck(this, BotStationAiResourcesComponent);
      }

      _createClass(BotStationAiResourcesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return BotStationAiResourcesComponent;
    }();

    BotStationAiResourcesComponent.ɵfac = function BotStationAiResourcesComponent_Factory(t) {
      return new (t || BotStationAiResourcesComponent)();
    };

    BotStationAiResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BotStationAiResourcesComponent,
      selectors: [["app-bot-station-ai-resources"]],
      decls: 9,
      vars: 6,
      consts: [[1, "chatbot-wrapper"], ["data-aos", "fade-down", "data-aos-easing", "ease-in-sine", "data-aos-duration", "1000", 1, "bg-header-3"], [3, "header3Type"], [3, "carouselWrapper4Type"], [3, "videoPlayer1Type"], [3, "imageTextwrapper2Type"], [3, "accordion1Type"], [3, "footer2Type"]],
      template: function BotStationAiResourcesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-carousel-wrapper4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-video-player1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-image-text-wrapper2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-accordion1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-go-top1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header3Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carouselWrapper4Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoPlayer1Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper2Type", "botStationAiResources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accordion1Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer2Type", "botStationAi");
        }
      },
      directives: [_common_header_header3_header3_component__WEBPACK_IMPORTED_MODULE_1__["Header3Component"], _common_carousel_carousel_wrapper4_carousel_wrapper4_component__WEBPACK_IMPORTED_MODULE_2__["CarouselWrapper4Component"], _common_video_player_video_player1_video_player1_component__WEBPACK_IMPORTED_MODULE_3__["VideoPlayer1Component"], _common_image_text_wrapper_image_text_wrapper2_image_text_wrapper2_component__WEBPACK_IMPORTED_MODULE_4__["ImageTextWrapper2Component"], _common_accordion_accordion1_accordion1_component__WEBPACK_IMPORTED_MODULE_5__["Accordion1Component"], _common_footer_footer2_footer2_component__WEBPACK_IMPORTED_MODULE_6__["Footer2Component"], _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_7__["GoTop1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL2JvdC1zdGF0aW9uLWFpL2JvdC1zdGF0aW9uLWFpLXJlc291cmNlcy9ib3Qtc3RhdGlvbi1haS1yZXNvdXJjZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotStationAiResourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bot-station-ai-resources',
          templateUrl: './bot-station-ai-resources.component.html',
          styleUrls: ['./bot-station-ai-resources.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/bot-station-ai/bot-station-ai-solution/bot-station-ai-solution.component.ts": function srcAppPagesViewsBotStationAiBotStationAiSolutionBotStationAiSolutionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotStationAiSolutionComponent", function () {
      return BotStationAiSolutionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_header_header3_header3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/header/header3/header3.component */
    "./src/app/pages/common/header/header3/header3.component.ts");
    /* harmony import */


    var _common_image_text_wrapper_image_text_wrapper2_image_text_wrapper2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/image-text-wrapper/image-text-wrapper2/image-text-wrapper2.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper2/image-text-wrapper2.component.ts");
    /* harmony import */


    var _common_why_why_wrapper1_why_wrapper1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/why/why-wrapper1/why-wrapper1.component */
    "./src/app/pages/common/why/why-wrapper1/why-wrapper1.component.ts");
    /* harmony import */


    var _common_blog_blog1_blog1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../common/blog/blog1/blog1.component */
    "./src/app/pages/common/blog/blog1/blog1.component.ts");
    /* harmony import */


    var _common_testimonial_testimonial3_testimonial3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../common/testimonial/testimonial3/testimonial3.component */
    "./src/app/pages/common/testimonial/testimonial3/testimonial3.component.ts");
    /* harmony import */


    var _common_schedule_schedule1_schedule1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../common/schedule/schedule1/schedule1.component */
    "./src/app/pages/common/schedule/schedule1/schedule1.component.ts");
    /* harmony import */


    var _common_footer_footer2_footer2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../common/footer/footer2/footer2.component */
    "./src/app/pages/common/footer/footer2/footer2.component.ts");
    /* harmony import */


    var _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../common/go-top/go-top1/go-top1.component */
    "./src/app/pages/common/go-top/go-top1/go-top1.component.ts");

    var BotStationAiSolutionComponent =
    /*#__PURE__*/
    function () {
      function BotStationAiSolutionComponent() {
        _classCallCheck(this, BotStationAiSolutionComponent);
      }

      _createClass(BotStationAiSolutionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return BotStationAiSolutionComponent;
    }();

    BotStationAiSolutionComponent.ɵfac = function BotStationAiSolutionComponent_Factory(t) {
      return new (t || BotStationAiSolutionComponent)();
    };

    BotStationAiSolutionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BotStationAiSolutionComponent,
      selectors: [["app-bot-station-ai-solution"]],
      decls: 12,
      vars: 7,
      consts: [[1, "chatbot-wrapper"], ["data-aos", "fade-down", "data-aos-duration", "1000", 1, "bg-header-3"], [3, "header3Type"], [1, "pt-5", "pb-5"], [3, "imageTextwrapper2Type"], [3, "whyWrappre1Type"], [3, "blog1Type"], [1, "bg-light-blue"], [3, "testimonialWrapper3Type"], [3, "scheduleWrapper1Type"], [3, "footer2Type"]],
      template: function BotStationAiSolutionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-image-text-wrapper2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-why-wrapper1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-blog1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-testimonial3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-schedule1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-go-top1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header3Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper2Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("whyWrappre1Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog1Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialWrapper3Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheduleWrapper1Type", "botStationAi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer2Type", "botStationAi");
        }
      },
      directives: [_common_header_header3_header3_component__WEBPACK_IMPORTED_MODULE_1__["Header3Component"], _common_image_text_wrapper_image_text_wrapper2_image_text_wrapper2_component__WEBPACK_IMPORTED_MODULE_2__["ImageTextWrapper2Component"], _common_why_why_wrapper1_why_wrapper1_component__WEBPACK_IMPORTED_MODULE_3__["WhyWrapper1Component"], _common_blog_blog1_blog1_component__WEBPACK_IMPORTED_MODULE_4__["Blog1Component"], _common_testimonial_testimonial3_testimonial3_component__WEBPACK_IMPORTED_MODULE_5__["Testimonial3Component"], _common_schedule_schedule1_schedule1_component__WEBPACK_IMPORTED_MODULE_6__["Schedule1Component"], _common_footer_footer2_footer2_component__WEBPACK_IMPORTED_MODULE_7__["Footer2Component"], _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_8__["GoTop1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL2JvdC1zdGF0aW9uLWFpL2JvdC1zdGF0aW9uLWFpLXNvbHV0aW9uL2JvdC1zdGF0aW9uLWFpLXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotStationAiSolutionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bot-station-ai-solution',
          templateUrl: './bot-station-ai-solution.component.html',
          styleUrls: ['./bot-station-ai-solution.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/corporate-blue/corporate-blue-about/corporate-blue-about.component.ts": function srcAppPagesViewsCorporateBlueCorporateBlueAboutCorporateBlueAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorporateBlueAboutComponent", function () {
      return CorporateBlueAboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/header/header2/header2.component */
    "./src/app/pages/common/header/header2/header2.component.ts");
    /* harmony import */


    var _common_info_wrapper_info_wrapper1_info_wrapper1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/info-wrapper/info-wrapper1/info-wrapper1.component */
    "./src/app/pages/common/info-wrapper/info-wrapper1/info-wrapper1.component.ts");
    /* harmony import */


    var _common_carousel_carousel_wrapper2_carousel_wrapper2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/carousel/carousel-wrapper2/carousel-wrapper2.component */
    "./src/app/pages/common/carousel/carousel-wrapper2/carousel-wrapper2.component.ts");
    /* harmony import */


    var _common_image_text_wrapper_image_text_wrapper4_image_text_wrapper4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../common/image-text-wrapper/image-text-wrapper4/image-text-wrapper4.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper4/image-text-wrapper4.component.ts");
    /* harmony import */


    var _common_info_wrapper_info_wrapper2_info_wrapper2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../common/info-wrapper/info-wrapper2/info-wrapper2.component */
    "./src/app/pages/common/info-wrapper/info-wrapper2/info-wrapper2.component.ts");
    /* harmony import */


    var _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../common/footer/footer1/footer1.component */
    "./src/app/pages/common/footer/footer1/footer1.component.ts");
    /* harmony import */


    var _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../common/go-top/go-top1/go-top1.component */
    "./src/app/pages/common/go-top/go-top1/go-top1.component.ts");

    var CorporateBlueAboutComponent =
    /*#__PURE__*/
    function () {
      function CorporateBlueAboutComponent() {
        _classCallCheck(this, CorporateBlueAboutComponent);
      }

      _createClass(CorporateBlueAboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return CorporateBlueAboutComponent;
    }();

    CorporateBlueAboutComponent.ɵfac = function CorporateBlueAboutComponent_Factory(t) {
      return new (t || CorporateBlueAboutComponent)();
    };

    CorporateBlueAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CorporateBlueAboutComponent,
      selectors: [["app-corporate-blue-about"]],
      decls: 15,
      vars: 6,
      consts: [[3, "header2Type"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "innerpage-title-wrapper1"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "h2", "fw-bold", "text-white", "mb-3"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "800", 1, "mb-0", "text-white-50", "text-white", "lead"], [3, "infpWrapper1Type"], [3, "carouselWrapper2Type"], [3, "imageTextwrapper4Type"], [3, "infpWrapper2Type"], [3, "footer1Type"]],
      template: function CorporateBlueAboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Best Wallet App for your upcoming Projects.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-info-wrapper1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-carousel-wrapper2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-image-text-wrapper4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-info-wrapper2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-go-top1");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header2Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infpWrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carouselWrapper2Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper4Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infpWrapper2Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer1Type", "corporateBlue");
        }
      },
      directives: [_common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__["Header2Component"], _common_info_wrapper_info_wrapper1_info_wrapper1_component__WEBPACK_IMPORTED_MODULE_2__["InfoWrapper1Component"], _common_carousel_carousel_wrapper2_carousel_wrapper2_component__WEBPACK_IMPORTED_MODULE_3__["CarouselWrapper2Component"], _common_image_text_wrapper_image_text_wrapper4_image_text_wrapper4_component__WEBPACK_IMPORTED_MODULE_4__["ImageTextWrapper4Component"], _common_info_wrapper_info_wrapper2_info_wrapper2_component__WEBPACK_IMPORTED_MODULE_5__["InfoWrapper2Component"], _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_6__["Footer1Component"], _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_7__["GoTop1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL2NvcnBvcmF0ZS1ibHVlL2NvcnBvcmF0ZS1ibHVlLWFib3V0L2NvcnBvcmF0ZS1ibHVlLWFib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorporateBlueAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-corporate-blue-about',
          templateUrl: './corporate-blue-about.component.html',
          styleUrls: ['./corporate-blue-about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/corporate-blue/corporate-blue-contact/corporate-blue-contact.component.ts": function srcAppPagesViewsCorporateBlueCorporateBlueContactCorporateBlueContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorporateBlueContactComponent", function () {
      return CorporateBlueContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/header/header2/header2.component */
    "./src/app/pages/common/header/header2/header2.component.ts");
    /* harmony import */


    var _common_image_text_wrapper_image_text_wrapper5_image_text_wrapper5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/image-text-wrapper/image-text-wrapper5/image-text-wrapper5.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper5/image-text-wrapper5.component.ts");
    /* harmony import */


    var _common_help_help_wrapper1_help_wrapper1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/help/help-wrapper1/help-wrapper1.component */
    "./src/app/pages/common/help/help-wrapper1/help-wrapper1.component.ts");
    /* harmony import */


    var _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../common/footer/footer1/footer1.component */
    "./src/app/pages/common/footer/footer1/footer1.component.ts");
    /* harmony import */


    var _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../common/go-top/go-top1/go-top1.component */
    "./src/app/pages/common/go-top/go-top1/go-top1.component.ts");

    var CorporateBlueContactComponent =
    /*#__PURE__*/
    function () {
      function CorporateBlueContactComponent() {
        _classCallCheck(this, CorporateBlueContactComponent);
      }

      _createClass(CorporateBlueContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return CorporateBlueContactComponent;
    }();

    CorporateBlueContactComponent.ɵfac = function CorporateBlueContactComponent_Factory(t) {
      return new (t || CorporateBlueContactComponent)();
    };

    CorporateBlueContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CorporateBlueContactComponent,
      selectors: [["app-corporate-blue-contact"]],
      decls: 13,
      vars: 4,
      consts: [[3, "header2Type"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "innerpage-title-wrapper1"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "h2", "fw-bold", "text-white", "mb-3"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "800", 1, "mb-0", "text-white-50", "text-white", "lead"], [3, "imageTextwrapper5Type"], [3, "helpwrapper1Type"], [3, "footer1Type"]],
      template: function CorporateBlueContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Best Wallet App for your upcoming Projects.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-image-text-wrapper5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-help-wrapper1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-go-top1");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header2Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper5Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpwrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer1Type", "corporateBlue");
        }
      },
      directives: [_common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__["Header2Component"], _common_image_text_wrapper_image_text_wrapper5_image_text_wrapper5_component__WEBPACK_IMPORTED_MODULE_2__["ImageTextWrapper5Component"], _common_help_help_wrapper1_help_wrapper1_component__WEBPACK_IMPORTED_MODULE_3__["HelpWrapper1Component"], _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_4__["Footer1Component"], _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_5__["GoTop1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL2NvcnBvcmF0ZS1ibHVlL2NvcnBvcmF0ZS1ibHVlLWNvbnRhY3QvY29ycG9yYXRlLWJsdWUtY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorporateBlueContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-corporate-blue-contact',
          templateUrl: './corporate-blue-contact.component.html',
          styleUrls: ['./corporate-blue-contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/corporate-blue/corporate-blue-features/corporate-blue-features.component.ts": function srcAppPagesViewsCorporateBlueCorporateBlueFeaturesCorporateBlueFeaturesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorporateBlueFeaturesComponent", function () {
      return CorporateBlueFeaturesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/header/header2/header2.component */
    "./src/app/pages/common/header/header2/header2.component.ts");
    /* harmony import */


    var _common_image_text_wrapper_image_text_wrapper3_image_text_wrapper3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/image-text-wrapper/image-text-wrapper3/image-text-wrapper3.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper3/image-text-wrapper3.component.ts");
    /* harmony import */


    var _common_info_wrapper_info_wrapper2_info_wrapper2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/info-wrapper/info-wrapper2/info-wrapper2.component */
    "./src/app/pages/common/info-wrapper/info-wrapper2/info-wrapper2.component.ts");
    /* harmony import */


    var _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../common/footer/footer1/footer1.component */
    "./src/app/pages/common/footer/footer1/footer1.component.ts");
    /* harmony import */


    var _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../common/go-top/go-top1/go-top1.component */
    "./src/app/pages/common/go-top/go-top1/go-top1.component.ts");

    var CorporateBlueFeaturesComponent =
    /*#__PURE__*/
    function () {
      function CorporateBlueFeaturesComponent() {
        _classCallCheck(this, CorporateBlueFeaturesComponent);
      }

      _createClass(CorporateBlueFeaturesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return CorporateBlueFeaturesComponent;
    }();

    CorporateBlueFeaturesComponent.ɵfac = function CorporateBlueFeaturesComponent_Factory(t) {
      return new (t || CorporateBlueFeaturesComponent)();
    };

    CorporateBlueFeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CorporateBlueFeaturesComponent,
      selectors: [["app-corporate-blue-features"]],
      decls: 13,
      vars: 4,
      consts: [[3, "header2Type"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "innerpage-title-wrapper1"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "h2", "fw-bold", "text-white", "mb-3"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "800", 1, "mb-0", "text-white-50", "text-white", "lead"], [3, "imageTextwrapper3Type"], [3, "infpWrapper2Type"], [3, "footer1Type"]],
      template: function CorporateBlueFeaturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Best Wallet App for your upcoming Projects.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-image-text-wrapper3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-info-wrapper2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-go-top1");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header2Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper3Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infpWrapper2Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer1Type", "corporateBlue");
        }
      },
      directives: [_common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__["Header2Component"], _common_image_text_wrapper_image_text_wrapper3_image_text_wrapper3_component__WEBPACK_IMPORTED_MODULE_2__["ImageTextWrapper3Component"], _common_info_wrapper_info_wrapper2_info_wrapper2_component__WEBPACK_IMPORTED_MODULE_3__["InfoWrapper2Component"], _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_4__["Footer1Component"], _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_5__["GoTop1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL2NvcnBvcmF0ZS1ibHVlL2NvcnBvcmF0ZS1ibHVlLWZlYXR1cmVzL2NvcnBvcmF0ZS1ibHVlLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorporateBlueFeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-corporate-blue-features',
          templateUrl: './corporate-blue-features.component.html',
          styleUrls: ['./corporate-blue-features.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/corporate-blue/corporate-blue-home/corporate-blue-home.component.ts": function srcAppPagesViewsCorporateBlueCorporateBlueHomeCorporateBlueHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorporateBlueHomeComponent", function () {
      return CorporateBlueHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/header/header2/header2.component */
    "./src/app/pages/common/header/header2/header2.component.ts");
    /* harmony import */


    var _common_top_banner_top_banner1_top_banner1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/top-banner/top-banner1/top-banner1.component */
    "./src/app/pages/common/top-banner/top-banner1/top-banner1.component.ts");
    /* harmony import */


    var _common_info_wrapper_info_wrapper1_info_wrapper1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/info-wrapper/info-wrapper1/info-wrapper1.component */
    "./src/app/pages/common/info-wrapper/info-wrapper1/info-wrapper1.component.ts");
    /* harmony import */


    var _common_image_text_wrapper_image_text_wrapper1_image_text_wrapper1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../common/image-text-wrapper/image-text-wrapper1/image-text-wrapper1.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper1/image-text-wrapper1.component.ts");
    /* harmony import */


    var _common_image_text_wrapper_image_text_wrapper2_image_text_wrapper2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../common/image-text-wrapper/image-text-wrapper2/image-text-wrapper2.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper2/image-text-wrapper2.component.ts");
    /* harmony import */


    var _common_carousel_carousel_wrapper1_carousel_wrapper1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../common/carousel/carousel-wrapper1/carousel-wrapper1.component */
    "./src/app/pages/common/carousel/carousel-wrapper1/carousel-wrapper1.component.ts");
    /* harmony import */


    var _common_price_plan_price_plan_wrapper1_price_plan_wrapper1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../common/price-plan/price-plan-wrapper1/price-plan-wrapper1.component */
    "./src/app/pages/common/price-plan/price-plan-wrapper1/price-plan-wrapper1.component.ts");
    /* harmony import */


    var _common_image_text_wrapper_image_text_wrapper3_image_text_wrapper3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../common/image-text-wrapper/image-text-wrapper3/image-text-wrapper3.component */
    "./src/app/pages/common/image-text-wrapper/image-text-wrapper3/image-text-wrapper3.component.ts");
    /* harmony import */


    var _common_testimonial_testimonial1_testimonial1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../common/testimonial/testimonial1/testimonial1.component */
    "./src/app/pages/common/testimonial/testimonial1/testimonial1.component.ts");
    /* harmony import */


    var _common_help_help_wrapper1_help_wrapper1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../common/help/help-wrapper1/help-wrapper1.component */
    "./src/app/pages/common/help/help-wrapper1/help-wrapper1.component.ts");
    /* harmony import */


    var _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../common/footer/footer1/footer1.component */
    "./src/app/pages/common/footer/footer1/footer1.component.ts");
    /* harmony import */


    var _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../common/go-top/go-top1/go-top1.component */
    "./src/app/pages/common/go-top/go-top1/go-top1.component.ts");

    var CorporateBlueHomeComponent =
    /*#__PURE__*/
    function () {
      function CorporateBlueHomeComponent() {
        _classCallCheck(this, CorporateBlueHomeComponent);
      }

      _createClass(CorporateBlueHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return CorporateBlueHomeComponent;
    }();

    CorporateBlueHomeComponent.ɵfac = function CorporateBlueHomeComponent_Factory(t) {
      return new (t || CorporateBlueHomeComponent)();
    };

    CorporateBlueHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CorporateBlueHomeComponent,
      selectors: [["app-corporate-blue-home"]],
      decls: 24,
      vars: 11,
      consts: [[3, "header2Type"], [3, "topbanner1Type"], ["data-aos", "fade-in", "data-aos-duration", "1000", "data-aos-delay", "2800", 1, "section-clients", "border-bottom", "mb-5"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-md-7", "d-flex", "align-items-lg-center", "flex-row"], [1, "col"], ["src", "./assets/images/brand-logo/amazon.svg", "alt", "Clients"], ["src", "./assets/images/brand-logo/netflix.svg", "alt", "Clients"], ["src", "./assets/images/brand-logo/google.svg", "alt", "Clients"], ["src", "./assets/images/brand-logo/linkedin.svg", "alt", "Clients"], [3, "infpWrapper1Type"], [3, "imageTextwrapper1Type"], [3, "imageTextwrapper2Type"], [3, "carouselWrapper1Type"], [3, "priceTableWrapper1Type"], [3, "imageTextwrapper3Type"], [3, "testimonialWrapper1Type"], [3, "helpwrapper1Type"], [3, "footer1Type"]],
      template: function CorporateBlueHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top-banner1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-info-wrapper1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-image-text-wrapper1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-image-text-wrapper2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-carousel-wrapper1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-price-plan-wrapper1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-image-text-wrapper3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-testimonial1", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-help-wrapper1", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-footer1", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-go-top1");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header2Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("topbanner1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infpWrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper2Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carouselWrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("priceTableWrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageTextwrapper3Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialWrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpwrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer1Type", "corporateBlue");
        }
      },
      directives: [_common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__["Header2Component"], _common_top_banner_top_banner1_top_banner1_component__WEBPACK_IMPORTED_MODULE_2__["TopBanner1Component"], _common_info_wrapper_info_wrapper1_info_wrapper1_component__WEBPACK_IMPORTED_MODULE_3__["InfoWrapper1Component"], _common_image_text_wrapper_image_text_wrapper1_image_text_wrapper1_component__WEBPACK_IMPORTED_MODULE_4__["ImageTextWrapper1Component"], _common_image_text_wrapper_image_text_wrapper2_image_text_wrapper2_component__WEBPACK_IMPORTED_MODULE_5__["ImageTextWrapper2Component"], _common_carousel_carousel_wrapper1_carousel_wrapper1_component__WEBPACK_IMPORTED_MODULE_6__["CarouselWrapper1Component"], _common_price_plan_price_plan_wrapper1_price_plan_wrapper1_component__WEBPACK_IMPORTED_MODULE_7__["PricePlanWrapper1Component"], _common_image_text_wrapper_image_text_wrapper3_image_text_wrapper3_component__WEBPACK_IMPORTED_MODULE_8__["ImageTextWrapper3Component"], _common_testimonial_testimonial1_testimonial1_component__WEBPACK_IMPORTED_MODULE_9__["Testimonial1Component"], _common_help_help_wrapper1_help_wrapper1_component__WEBPACK_IMPORTED_MODULE_10__["HelpWrapper1Component"], _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_11__["Footer1Component"], _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_12__["GoTop1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL2NvcnBvcmF0ZS1ibHVlL2NvcnBvcmF0ZS1ibHVlLWhvbWUvY29ycG9yYXRlLWJsdWUtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorporateBlueHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-corporate-blue-home',
          templateUrl: './corporate-blue-home.component.html',
          styleUrls: ['./corporate-blue-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/corporate-blue/corporate-blue-pricing/corporate-blue-pricing.component.ts": function srcAppPagesViewsCorporateBlueCorporateBluePricingCorporateBluePricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorporateBluePricingComponent", function () {
      return CorporateBluePricingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/header/header2/header2.component */
    "./src/app/pages/common/header/header2/header2.component.ts");
    /* harmony import */


    var _common_price_plan_price_plan_wrapper1_price_plan_wrapper1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/price-plan/price-plan-wrapper1/price-plan-wrapper1.component */
    "./src/app/pages/common/price-plan/price-plan-wrapper1/price-plan-wrapper1.component.ts");
    /* harmony import */


    var _common_faq_faq_wrapper1_faq_wrapper1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/faq/faq-wrapper1/faq-wrapper1.component */
    "./src/app/pages/common/faq/faq-wrapper1/faq-wrapper1.component.ts");
    /* harmony import */


    var _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../common/footer/footer1/footer1.component */
    "./src/app/pages/common/footer/footer1/footer1.component.ts");
    /* harmony import */


    var _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../common/go-top/go-top1/go-top1.component */
    "./src/app/pages/common/go-top/go-top1/go-top1.component.ts");

    var CorporateBluePricingComponent =
    /*#__PURE__*/
    function () {
      function CorporateBluePricingComponent() {
        _classCallCheck(this, CorporateBluePricingComponent);
      }

      _createClass(CorporateBluePricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return CorporateBluePricingComponent;
    }();

    CorporateBluePricingComponent.ɵfac = function CorporateBluePricingComponent_Factory(t) {
      return new (t || CorporateBluePricingComponent)();
    };

    CorporateBluePricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CorporateBluePricingComponent,
      selectors: [["app-corporate-blue-pricing"]],
      decls: 13,
      vars: 4,
      consts: [[3, "header2Type"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "innerpage-title-wrapper1", "section"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "400", 1, "h2", "fw-bold", "text-white", "mb-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "800", 1, "mb-0", "text-white-50", "text-white", "lead"], [3, "priceTableWrapper1Type"], [3, "faqwrapper1Type"], [3, "footer1Type"]],
      template: function CorporateBluePricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Best Wallet App for your upcoming Projects.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-price-plan-wrapper1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-faq-wrapper1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-go-top1");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header2Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("priceTableWrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("faqwrapper1Type", "corporateBlue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer1Type", "corporateBlue");
        }
      },
      directives: [_common_header_header2_header2_component__WEBPACK_IMPORTED_MODULE_1__["Header2Component"], _common_price_plan_price_plan_wrapper1_price_plan_wrapper1_component__WEBPACK_IMPORTED_MODULE_2__["PricePlanWrapper1Component"], _common_faq_faq_wrapper1_faq_wrapper1_component__WEBPACK_IMPORTED_MODULE_3__["FaqWrapper1Component"], _common_footer_footer1_footer1_component__WEBPACK_IMPORTED_MODULE_4__["Footer1Component"], _common_go_top_go_top1_go_top1_component__WEBPACK_IMPORTED_MODULE_5__["GoTop1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL2NvcnBvcmF0ZS1ibHVlL2NvcnBvcmF0ZS1ibHVlLXByaWNpbmcvY29ycG9yYXRlLWJsdWUtcHJpY2luZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorporateBluePricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-corporate-blue-pricing',
          templateUrl: './corporate-blue-pricing.component.html',
          styleUrls: ['./corporate-blue-pricing.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/portfolio-aboutme/portfolio-aboutme-about/portfolio-aboutme-about.component.ts": function srcAppPagesViewsPortfolioAboutmePortfolioAboutmeAboutPortfolioAboutmeAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioAboutmeAboutComponent", function () {
      return PortfolioAboutmeAboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_sidebar_sidebar1_sidebar1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/sidebar/sidebar1/sidebar1.component */
    "./src/app/pages/common/sidebar/sidebar1/sidebar1.component.ts");
    /* harmony import */


    var _common_info_wrapper_info_wrapper3_info_wrapper3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/info-wrapper/info-wrapper3/info-wrapper3.component */
    "./src/app/pages/common/info-wrapper/info-wrapper3/info-wrapper3.component.ts");
    /* harmony import */


    var _common_footer_footer3_footer3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/footer/footer3/footer3.component */
    "./src/app/pages/common/footer/footer3/footer3.component.ts");

    var PortfolioAboutmeAboutComponent =
    /*#__PURE__*/
    function () {
      function PortfolioAboutmeAboutComponent() {
        _classCallCheck(this, PortfolioAboutmeAboutComponent);
      }

      _createClass(PortfolioAboutmeAboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioAboutmeAboutComponent;
    }();

    PortfolioAboutmeAboutComponent.ɵfac = function PortfolioAboutmeAboutComponent_Factory(t) {
      return new (t || PortfolioAboutmeAboutComponent)();
    };

    PortfolioAboutmeAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioAboutmeAboutComponent,
      selectors: [["app-portfolio-aboutme-about"]],
      decls: 3,
      vars: 0,
      template: function PortfolioAboutmeAboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-info-wrapper3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer3");
        }
      },
      directives: [_common_sidebar_sidebar1_sidebar1_component__WEBPACK_IMPORTED_MODULE_1__["Sidebar1Component"], _common_info_wrapper_info_wrapper3_info_wrapper3_component__WEBPACK_IMPORTED_MODULE_2__["InfoWrapper3Component"], _common_footer_footer3_footer3_component__WEBPACK_IMPORTED_MODULE_3__["Footer3Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL3BvcnRmb2xpby1hYm91dG1lL3BvcnRmb2xpby1hYm91dG1lLWFib3V0L3BvcnRmb2xpby1hYm91dG1lLWFib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioAboutmeAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio-aboutme-about',
          templateUrl: './portfolio-aboutme-about.component.html',
          styleUrls: ['./portfolio-aboutme-about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/views/portfolio-aboutme/portfolio-aboutme-home/portfolio-aboutme-home.component.ts": function srcAppPagesViewsPortfolioAboutmePortfolioAboutmeHomePortfolioAboutmeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioAboutmeHomeComponent", function () {
      return PortfolioAboutmeHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_sidebar_sidebar1_sidebar1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../common/sidebar/sidebar1/sidebar1.component */
    "./src/app/pages/common/sidebar/sidebar1/sidebar1.component.ts");
    /* harmony import */


    var _common_info_wrapper_info_wrapper3_info_wrapper3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/info-wrapper/info-wrapper3/info-wrapper3.component */
    "./src/app/pages/common/info-wrapper/info-wrapper3/info-wrapper3.component.ts");
    /* harmony import */


    var _common_footer_footer3_footer3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/footer/footer3/footer3.component */
    "./src/app/pages/common/footer/footer3/footer3.component.ts");

    var PortfolioAboutmeHomeComponent =
    /*#__PURE__*/
    function () {
      function PortfolioAboutmeHomeComponent() {
        _classCallCheck(this, PortfolioAboutmeHomeComponent);
      }

      _createClass(PortfolioAboutmeHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioAboutmeHomeComponent;
    }();

    PortfolioAboutmeHomeComponent.ɵfac = function PortfolioAboutmeHomeComponent_Factory(t) {
      return new (t || PortfolioAboutmeHomeComponent)();
    };

    PortfolioAboutmeHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioAboutmeHomeComponent,
      selectors: [["app-portfolio-aboutme-home"]],
      decls: 3,
      vars: 0,
      template: function PortfolioAboutmeHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-info-wrapper3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer3");
        }
      },
      directives: [_common_sidebar_sidebar1_sidebar1_component__WEBPACK_IMPORTED_MODULE_1__["Sidebar1Component"], _common_info_wrapper_info_wrapper3_info_wrapper3_component__WEBPACK_IMPORTED_MODULE_2__["InfoWrapper3Component"], _common_footer_footer3_footer3_component__WEBPACK_IMPORTED_MODULE_3__["Footer3Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdzL3BvcnRmb2xpby1hYm91dG1lL3BvcnRmb2xpby1hYm91dG1lLWhvbWUvcG9ydGZvbGlvLWFib3V0bWUtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioAboutmeHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio-aboutme-home',
          templateUrl: './portfolio-aboutme-home.component.html',
          styleUrls: ['./portfolio-aboutme-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/pankajpede/Documents/Project/My Template/all-in-one/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map