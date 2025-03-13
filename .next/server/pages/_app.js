module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_withReduxSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/withReduxSaga */ "./src/redux/withReduxSaga.ts");
/* harmony import */ var _layouts_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @layouts/base-layout */ "./src/layouts/base-layout.tsx");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _redux_ui_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redux_streaming_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redux/streaming/actions */ "./src/redux/streaming/actions.ts");
/* harmony import */ var _redux_settings_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redux/settings/actions */ "./src/redux/settings/actions.ts");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../style/index.less */ "./style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/config */ "./src/services/config.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import withReduxSaga from "../src/redux/withReduxSaga";
















function redirectLogin(ctx) {
  if (false) {} // fix for production build


  ctx.res.clearCookie && ctx.res.clearCookie('token');
  ctx.res.clearCookie && ctx.res.clearCookie('role');
  ctx.res.writeHead && ctx.res.writeHead(302, {
    Location: '/'
  });
  ctx.res.end && ctx.res.end();
}

async function auth(ctx, noredirect, onlyPerformer) {
  try {
    const {
      store
    } = ctx;
    const state = store.getState();
    const {
      token
    } = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx);

    if (state.auth && state.auth.loggedIn) {
      return;
    }

    if (token) {
      _services_index__WEBPACK_IMPORTED_MODULE_6__["authService"].setToken(token);
      const user = await _services_index__WEBPACK_IMPORTED_MODULE_6__["userService"].me({
        Authorization: token
      });

      if (!user.data || !user.data._id) {
        redirectLogin(ctx);
        return;
      }

      if (!user.data.isPerformer && onlyPerformer) {
        redirectLogin(ctx);
        return;
      }

      store.dispatch(Object(_redux_auth_actions__WEBPACK_IMPORTED_MODULE_8__["loginSuccess"])());
      store.dispatch(Object(_redux_user_actions__WEBPACK_IMPORTED_MODULE_9__["updateCurrentUser"])(user.data));
      return;
    }

    !noredirect && redirectLogin(ctx);
  } catch (e) {
    redirectLogin(ctx);
  }
}

async function updateSettingsStore(ctx, settings) {
  const {
    store
  } = ctx;
  store.dispatch(Object(_redux_ui_actions__WEBPACK_IMPORTED_MODULE_10__["updateUIValue"])({
    logo: settings.logoUrl || '',
    siteName: settings.siteName || '',
    favicon: settings.favicon || '',
    loginPlaceholderImage: settings.loginPlaceholderImage || '',
    menus: settings.menus || [],
    footerContent: settings.footerContent || '',
    countries: settings.countries || [],
    userBenefit: settings.userBenefit || '',
    modelBenefit: settings.modelBenefit || ''
  }));
  store.dispatch(Object(_redux_streaming_actions__WEBPACK_IMPORTED_MODULE_15__["updateLiveStreamSettings"])(Object(lodash__WEBPACK_IMPORTED_MODULE_14__["pick"])(settings, [src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].VIEWER_URL, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].PUBLISHER_URL, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].SUBSCRIBER_URL, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].OPTION_FOR_BROADCAST, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].OPTION_FOR_PRIVATE, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].SECURE_OPTION, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].ANT_MEDIA_APPNAME, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].AGORA_APPID, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].AGORA_ENABLE])));
  store.dispatch(Object(_redux_settings_actions__WEBPACK_IMPORTED_MODULE_16__["updateSettings"])(Object(lodash__WEBPACK_IMPORTED_MODULE_14__["pick"])(settings, [src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].REQUIRE_EMAIL_VERIFICATION, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].TOKEN_CONVERSION_RATE, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].STRIPE_PUBLISHABLE_KEY, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].GOOGLE_RECAPTCHA_SITE_KEY, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].ENABLE_GOOGLE_RECAPTCHA, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].GOOGLE_CLIENT_ID, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].TWITTER_CLIENT_ID, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].PAYMENT_GATEWAY, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].META_KEYWORDS, src_constants__WEBPACK_IMPORTED_MODULE_13__["SETTING_KEYS"].META_DESCRIPTION])));
}

const publicConfig = {};

class Application extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  // TODO - consider if we need to use get static props in children component instead?
  // or check in render?
  static async getInitialProps({
    Component,
    ctx
  }) {
    // load configuration from ENV and put to config
    if (true) {
      // eslint-disable-next-line global-require
      const dotenv = __webpack_require__(/*! dotenv */ "dotenv");

      const myEnv = dotenv.config().parsed; // publish to server config with app

      Object(_services_config__WEBPACK_IMPORTED_MODULE_18__["setGlobalConfig"])(myEnv); // load public config and api-endpoint?

      Object.keys(myEnv).forEach(key => {
        if (key.indexOf('NEXT_PUBLIC_') === 0) {
          publicConfig[key] = myEnv[key];
        }
      });
    } // won't check auth for un-authenticated page such as login, register
    // use static field in the component


    const {
      noredirect,
      onlyPerformer,
      authenticate
    } = Component;

    if (authenticate !== false) {
      await auth(ctx, noredirect, onlyPerformer);
    }

    const {
      token
    } = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx);
    ctx.token = token || ''; // server side to load settings, once time only

    let settings = {};

    if (true) {
      const [setting] = await Promise.all([_services_index__WEBPACK_IMPORTED_MODULE_6__["settingService"].all('all', true)]);
      settings = _objectSpread({}, setting.data);
      await updateSettingsStore(ctx, settings);
    }

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    }

    return {
      settings,
      pageProps,
      layout: Component.layout,
      config: publicConfig
    };
  }

  constructor(props) {
    super(props);
    Object(_services_config__WEBPACK_IMPORTED_MODULE_18__["setGlobalConfig"])(this.props.config);
  }

  render() {
    const {
      Component,
      pageProps,
      store,
      settings
    } = this.props;
    const {
      layout
    } = Component;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, __jsx("title", null, settings === null || settings === void 0 ? void 0 : settings.siteName), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1"
    }), settings && settings.gaCode && [__jsx("script", {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${settings.gaCode}`
    }), __jsx("script", {
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML: {
        __html: `
                 window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());
                 gtag('config', '${settings.gaCode}');
             `
      }
    })], settings && settings.headerScript && // eslint-disable-next-line react/no-danger
    __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: settings.headerScript
      }
    })), __jsx(src_socket__WEBPACK_IMPORTED_MODULE_11__["Socket"], null, __jsx(_layouts_base_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      layout: layout,
      maintenance: settings.maintenanceMode
    }, __jsx(Component, pageProps))), settings && settings.afterBodyScript && // eslint-disable-next-line react/no-danger
    __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: settings.afterBodyScript
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_withReduxSaga__WEBPACK_IMPORTED_MODULE_4__["default"])(Application));

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: SETTING_CHANNEL, SETTING_KEYS, MENU_SECTION, RECEIVED_PAID_TOKEN_EVENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTING_CHANNEL", function() { return SETTING_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTING_KEYS", function() { return SETTING_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_SECTION", function() { return MENU_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVED_PAID_TOKEN_EVENT", function() { return RECEIVED_PAID_TOKEN_EVENT; });
const SETTING_CHANNEL = 'SETTINGS';
const SETTING_KEYS = {
  SITE_NAME: 'siteName',
  LOGO_URL: 'logoUrl',
  FAVICON: 'favicon',
  LOGIN_PLACEHOLDER_IMAGE: 'loginPlaceholderImage',
  REQUIRE_EMAIL_VERIFICATION: 'requireEmailVerification',
  ADMIN_EMAIL: 'adminEmail',
  SENDER_EMAIL: 'senderEmail',
  META_KEYWORDS: 'metaKeywords',
  META_DESCRIPTION: 'metaDescription',
  HEADER_SCRIPT: 'headerScript',
  AFTER_BODY_SCRIPT: 'afterBodyScript',
  MONTHLY_SUBSCRIPTION_COMMISSION: 'monthlySubscriptionCommission',
  YEARLY_SUBSCRIPTION_COMMISSION: 'yearlySubscriptionCommission',
  VIDEO_SALE_COMMISSION: 'videoSaleCommission',
  GALLERY_SALE_COMMISSION: 'gallerySaleCommission',
  PRODUCT_SALE_COMMISSION: 'productSaleCommission',
  FEED_SALE_COMMISSION: 'feedSaleCommission',
  TIP_COMMISSION: 'tipCommission',
  STREAM_COMMISSION: 'streamCommission',
  MESSAGE_COMMISSION: 'messageCommission',
  CCBILL_CLIENT_ACCOUNT_NUMBER: 'ccbillClientAccountNumber',
  CCBILL_DATALINK_USERNAME: 'ccbillDatalinkUsername',
  CCBILL_DATALINK_PASSWORD: 'ccbillDatalinkPassword',
  CCBILL_SUB_ACCOUNT_NUMBER: 'ccbillSubAccountNumber',
  CCBILL_FLEXFORM_ID: 'ccbillFlexformId',
  CCBILL_SALT: 'ccbillSalt',
  CCBILL_CURRENCY_CODE: 'ccbilCurrencyCode',
  USE_SENDGRID_TRANSPORTER: 'useSengridTransporter',
  SMTP_TRANSPORTER: 'smtpTransporter',
  GOOGLE_ANALYTICS_CODE: 'gaCode',
  MAINTENANCE_MODE: 'maintenanceMode',
  PERFORMER_VERIFY_NUMBER: 'performerVerifyNumber',
  TWITTER_CLIENT_ID: 'twitterClientId',
  TWITTER_CLIENT_SECRET: 'twitterClientSecret',
  GOOGLE_CLIENT_ID: 'googleClientId',
  GOOGLE_CLIENT_SECRET: 'googleClientSecret',
  VIEWER_URL: 'viewerURL',
  PUBLISHER_URL: 'publisherURL',
  SUBSCRIBER_URL: 'subscriberUrl',
  OPTION_FOR_BROADCAST: 'optionForBroadcast',
  OPTION_FOR_PRIVATE: 'optionForPrivate',
  OPTION_FOR_GROUP: 'optionForGroup',
  SECURE_OPTION: 'secureOption',
  ANT_MEDIA_API_ENDPOINT: 'AntMediaApiEndpoint',
  ANT_MEDIA_APPNAME: 'AntMediaAppname',
  ANT_MEDIA_ENTERPRISE: 'AntMediaEnterprise',
  FOOTER_CONTENT: 'footerContent',
  USER_BENEFIT: 'userBenefit',
  MODEL_BENEFIT: 'modelBenefit',
  GOOGLE_RECAPTCHA_SITE_KEY: 'googleReCaptchaSiteKey',
  GOOGLE_RECAPTCHA_SECRET_KEY: 'googleReCaptchaSecretKey',
  ENABLE_GOOGLE_RECAPTCHA: 'enableGoogleReCaptcha',
  BITPAY_PRODUCTION_MODE: 'bitpayProductionMode',
  BITPAY_API_TOKEN: 'bitpayApiToken',
  TOKEN_CONVERSION_RATE: 'tokenConversionRate',
  STRIPE_PUBLISHABLE_KEY: 'stripePublishableKey',
  STRIPE_SECRET_KEY: 'stripeSecretKey',
  AGORA_APPID: 'agoraAppId',
  AGORA_ENABLE: 'agoraEnable',
  PAYMENT_GATEWAY: 'paymentGateway'
};
const MENU_SECTION = {
  MAIN: 'main',
  HEADER: 'header',
  FOOTER: 'footer'
};
const RECEIVED_PAID_TOKEN_EVENT = 'RECEIVED_PAID_TOKEN_EVENT';

/***/ }),

/***/ "./src/layouts/base-layout.tsx":
/*!*************************************!*\
  !*** ./src/layouts/base-layout.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var _blank_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-layout */ "./src/layouts/blank-layout.tsx");
/* harmony import */ var _primary_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./primary-layout */ "./src/layouts/primary-layout.tsx");
/* harmony import */ var _maintenance_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maintenance-layout */ "./src/layouts/maintenance-layout.tsx");
/* harmony import */ var _geoBlocked_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geoBlocked-layout */ "./src/layouts/geoBlocked-layout.tsx");
/* harmony import */ var _public_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public-layout */ "./src/layouts/public-layout.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const LayoutMap = {
  geoBlock: _geoBlocked_layout__WEBPACK_IMPORTED_MODULE_5__["default"],
  maintenance: _maintenance_layout__WEBPACK_IMPORTED_MODULE_4__["default"],
  primary: _primary_layout__WEBPACK_IMPORTED_MODULE_3__["default"],
  public: _public_layout__WEBPACK_IMPORTED_MODULE_6__["default"],
  blank: _blank_layout__WEBPACK_IMPORTED_MODULE_2__["default"]
};
class BaseLayout extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      geoBlocked: false
    });
  }

  componentDidMount() {
     false && false;
    this.clientCheckBlockByIp();
  }

  componentWillUnmount() {
     false && false;
  }

  async clientCheckBlockByIp() {
    var _checkBlock$data;

    const checkBlock = await _services_index__WEBPACK_IMPORTED_MODULE_1__["blockService"].checkCountryBlock();

    if (checkBlock !== null && checkBlock !== void 0 && (_checkBlock$data = checkBlock.data) !== null && _checkBlock$data !== void 0 && _checkBlock$data.blocked) {
      this.setState({
        geoBlocked: true
      });
    }
  }

  render() {
    const {
      children,
      layout,
      maintenance = false
    } = this.props;
    const {
      geoBlocked
    } = this.state; // eslint-disable-next-line no-nested-ternary

    const Container = maintenance ? LayoutMap.maintenance : geoBlocked ? LayoutMap.geoBlock : layout && LayoutMap[layout] ? LayoutMap[layout] : LayoutMap.primary;
    return __jsx(Container, null, children);
  }

}

/***/ }),

/***/ "./src/layouts/blank-layout.tsx":
/*!**************************************!*\
  !*** ./src/layouts/blank-layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _primary_layout_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./primary-layout.less */ "./src/layouts/primary-layout.less");
/* harmony import */ var _primary_layout_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_primary_layout_less__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @components/common/layout/footer */ "./src/components/common/layout/footer.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @components/common/layout/footer */ "./src/components/common/layout/footer.tsx")],
    modules: ['@components/common/layout/footer']
  }
});
const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @components/common/base/loader */ "./src/components/common/base/loader.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx")],
    modules: ['@components/common/base/loader']
  }
});

class BlankLayout extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      routerChange: false
    });
  }

  componentDidMount() {
    const {
      loadUIValue: handleLoadUI
    } = this.props;
     false && false;
     false && false;
  }

  handleStateChange() {
    next_router__WEBPACK_IMPORTED_MODULE_4__["Router"].events.on('routeChangeStart', async () => this.setState({
      routerChange: true
    }));
    next_router__WEBPACK_IMPORTED_MODULE_4__["Router"].events.on('routeChangeComplete', async () => this.setState({
      routerChange: false
    }));
  }

  render() {
    const {
      children,
      ui
    } = this.props;
    const {
      routerChange
    } = this.state;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, __jsx("div", {
      className: (ui === null || ui === void 0 ? void 0 : ui.theme) === 'dark' ? 'container dark' : 'container',
      id: "primaryLayout"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      className: "content",
      style: {
        position: 'relative'
      }
    }, routerChange && __jsx(Loader, null), children, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
      className: "backTop"
    }), __jsx(Footer, null))));
  }

}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = {
  loadUIValue: _redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__["loadUIValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(BlankLayout));

/***/ }),

/***/ "./src/layouts/geoBlocked-layout.tsx":
/*!*******************************************!*\
  !*** ./src/layouts/geoBlocked-layout.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/no-unescaped-entities */
const GEOLayout = () => __jsx("main", {
  role: "main"
}, __jsx("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: `radial-gradient(ellipse at top, #e66465, transparent),
            radial-gradient(ellipse at bottom, #4d9f0c, transparent)`
  }
}, __jsx("h1", {
  style: {
    fontSize: '30px'
  }
}, "We've sorry."), __jsx("h3", {
  style: {
    fontSize: '27px'
  }
}, "Website is not allowed in your country")));

/* harmony default export */ __webpack_exports__["default"] = (GEOLayout);

/***/ }),

/***/ "./src/layouts/maintenance-layout.tsx":
/*!********************************************!*\
  !*** ./src/layouts/maintenance-layout.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MaintenaceLayout = () => __jsx("main", {
  role: "main"
}, __jsx("img", {
  alt: "",
  src: "/static/under-construction.jpg",
  width: "100%"
}));

/* harmony default export */ __webpack_exports__["default"] = (MaintenaceLayout);

/***/ }),

/***/ "./src/layouts/primary-layout.less":
/*!*****************************************!*\
  !*** ./src/layouts/primary-layout.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/layouts/primary-layout.tsx":
/*!****************************************!*\
  !*** ./src/layouts/primary-layout.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _primary_layout_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./primary-layout.less */ "./src/layouts/primary-layout.less");
/* harmony import */ var _primary_layout_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_primary_layout_less__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Header = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @components/common/layout/header */ "./src/components/common/layout/header.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @components/common/layout/header */ "./src/components/common/layout/header.tsx")],
    modules: ['@components/common/layout/header']
  }
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @components/common/layout/footer */ "./src/components/common/layout/footer.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @components/common/layout/footer */ "./src/components/common/layout/footer.tsx")],
    modules: ['@components/common/layout/footer']
  }
});
const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @components/common/base/loader */ "./src/components/common/base/loader.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx")],
    modules: ['@components/common/base/loader']
  }
});

class PrimaryLayout extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      routerChange: false
    });
  }

  componentDidMount() {
    const {
      loadUIValue: handleLoadUI
    } = this.props;
     false && false;
     false && false;
  }

  handleStateChange() {
    next_router__WEBPACK_IMPORTED_MODULE_4__["Router"].events.on('routeChangeStart', async () => this.setState({
      routerChange: true
    }));
    next_router__WEBPACK_IMPORTED_MODULE_4__["Router"].events.on('routeChangeComplete', async () => this.setState({
      routerChange: false
    }));
  }

  render() {
    const {
      children,
      ui
    } = this.props;
    const {
      routerChange
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, __jsx("div", {
      className: (ui === null || ui === void 0 ? void 0 : ui.theme) === 'dark' ? 'container dark' : 'container',
      id: "primaryLayout"
    }, __jsx(Header, null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content, {
      className: "content",
      style: {
        position: 'relative'
      }
    }, routerChange && __jsx(Loader, null), children), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
      className: "backTop"
    }), __jsx(Footer, null))));
  }

}

const mapStateToProps = state => ({
  ui: _objectSpread({}, state.ui)
});

const mapDispatchToProps = {
  loadUIValue: _redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__["loadUIValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(PrimaryLayout));

/***/ }),

/***/ "./src/layouts/public-layout.tsx":
/*!***************************************!*\
  !*** ./src/layouts/public-layout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => children);

/***/ }),

/***/ "./src/lib/redux.ts":
/*!**************************!*\
  !*** ./src/lib/redux.ts ***!
  \**************************/
/*! exports provided: createSagas, createAction, createAsyncAction, createAsyncActions, createSelectorsA, handleActions, createReducers, createSelectors, createSelector, createJSSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSagas", function() { return createSagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncAction", function() { return createAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncActions", function() { return createAsyncActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorsA", function() { return createSelectorsA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return handleActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducers", function() { return createReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return createSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJSSelectors", function() { return createJSSelectors; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });

/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable no-param-reassign */

/* eslint-disable func-names */





function createAction(type) {
  const action = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])(type);

  action.is = aType => action.toString() === aType;

  return action;
}
/* tslint:disable-next-line */


function createAsyncAction(action, type) {
  return {
    [action]: createAction(type),
    [`${action}Success`]: createAction(`${type}_SUCCESS`),
    [`${action}Fail`]: createAction(`${type}_FAIL`)
  };
}

function createAsyncActions(type) {
  return [createAction(type), createAction(`${type}_SUCCESS`), createAction(`${type}_FAIL`)];
}
/* tslint:disable */


function handleActions(actions, initialState) {
  return Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(actions, (reducer, handler, action) => {
    reducer[action] = (state, act) => handler(state.set('action', action), act);

    return reducer;
  }, {}), initialState);
}

function createReducers(stateContext, reducers, initialState, preventResetting = false) {
  return {
    [stateContext]: Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(reducers), (reducer, action) => {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(action.on)) {
        action.on.forEach(act => {
          reducer[act] = action.reducer;
        });
      } else reducer[action.on] = action.reducer;

      return reducer;
    }, preventResetting ? {} : {
      APP_STATE_RESET: () => initialState
    }), initialState)
  };
}

function createSagas(sagas) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(sagas).map(saga => {
    const {
      on,
      effect = redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"],
      worker
    } = saga;
    return function* () {
      yield effect(on, function* (action) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(0);
        yield worker(action);
      });
    };
  });
}

function createSelectorsA(context, keys = []) {
  const stateSelector = state => state[context];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(keys)) return stateSelector;
  return keys.map(key => state => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(key) ? stateSelector(state).getIn(key) : stateSelector(state).get(key));
}

function createSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state).get(key);

    return selectors;
  }, {});
}

function createJSSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state)[key];

    return selectors;
  }, {});
}



/***/ }),

/***/ "./src/lib/storeHolder.ts":
/*!********************************!*\
  !*** ./src/lib/storeHolder.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let store = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  getStore: () => store,
  setStore: s => {
    store = s;
  }
});

/***/ }),

/***/ "./src/lib/string.ts":
/*!***************************!*\
  !*** ./src/lib/string.ts ***!
  \***************************/
/*! exports provided: isUrl, capitalizeFirstLetter, isEmail, generateUuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUuid", function() { return generateUuid; });
/* eslint-disable no-useless-escape */
function isUrl(url) {
  const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  return regex.test(url);
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}
const generateUuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  /* eslint-disable */
  const r = Math.random() * 16 | 0;
  const v = c === 'x' ? r : r & 0x3 | 0x8;
  return v.toString(16);
});

/***/ }),

/***/ "./src/redux/auth/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/auth/actions.ts ***!
  \***********************************/
/*! exports provided: login, loginSuccess, loginFail, loginPerformer, loginSocial, registerFan, registerFanSuccess, registerFanFail, registerPerformer, registerPerformerSuccess, registerPerformerFail, forgot, forgotSuccess, forgotFail, logout, getCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPerformer", function() { return loginPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSocial", function() { return loginSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFan", function() { return registerFan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFanSuccess", function() { return registerFanSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFanFail", function() { return registerFanFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPerformer", function() { return registerPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPerformerSuccess", function() { return registerPerformerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPerformerFail", function() { return registerPerformerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgot", function() { return forgot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotSuccess", function() { return forgotSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotFail", function() { return forgotFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  login,
  loginSuccess,
  loginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('login', 'LOGIN');
const {
  loginPerformer
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loginPerformer', 'LOGINPERFORMER');
const {
  loginSocial
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loginSocial', 'LOGINSOCIAL');
const {
  registerFan,
  registerFanSuccess,
  registerFanFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('registerFan', 'REGISTERFAN');
const {
  registerPerformer,
  registerPerformerSuccess,
  registerPerformerFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('registerPerformer', 'REGISTERPERFORMER');
const {
  forgot,
  forgotSuccess,
  forgotFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('forgot', 'FORGOT');
const logout = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('logout');
const getCurrentUser = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('getCurrentUser');

/***/ }),

/***/ "./src/redux/auth/reducers.ts":
/*!************************************!*\
  !*** ./src/redux/auth/reducers.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/auth/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  loggedIn: false,
  authUser: null,
  loginAuth: {
    requesting: false,
    error: null,
    data: null,
    success: false
  },
  registerFanData: {
    requesting: false,
    error: null,
    data: null,
    success: false
  },
  registerPerformerData: {
    requesting: false,
    error: null,
    data: null,
    success: false
  },
  forgotData: {
    requesting: false,
    error: null,
    data: null,
    success: false
  }
};
const authReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["login"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loginAuth: {
        requesting: true,
        error: null,
        data: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loginPerformer"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loginAuth: {
        requesting: true,
        error: null,
        data: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loggedIn: true,
      loginAuth: {
        requesting: false,
        error: null,
        data: data.payload,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loginFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loggedIn: false,
      loginAuth: {
        requesting: false,
        error: data.payload,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["registerFan"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      registerFanData: {
        requesting: true,
        error: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["registerFanSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      registerFanData: {
        requesting: false,
        error: null,
        data: data.payload,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["registerFanFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      registerFanData: {
        requesting: false,
        error: data.payload,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["registerPerformer"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      registerPerformerData: {
        requesting: true,
        error: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["registerPerformerSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      registerPerformerData: {
        requesting: false,
        error: null,
        data: data.payload,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["registerPerformerFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      registerPerformerData: {
        requesting: false,
        error: data.payload,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["forgotSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      registerFanData: {
        requesting: false,
        data: data.payload,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["forgotFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      registerFanData: {
        requesting: false,
        data: data.payload,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["logout"],

  reducer() {
    return _objectSpread({}, initialState);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('auth', [authReducers], initialState)));

/***/ }),

/***/ "./src/redux/auth/sagas.ts":
/*!*********************************!*\
  !*** ./src/redux/auth/sagas.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./src/redux/auth/actions.ts");








const authSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_7__["login"],

  *worker(data) {
    try {
      var _userResp$data, _userResp$data2;

      const payload = data.payload;
      const resp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].login(payload)).data; // store token, update store and redirect to dashboard page

      yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].setToken(resp.token, payload === null || payload === void 0 ? void 0 : payload.remember);
      const userResp = yield src_services__WEBPACK_IMPORTED_MODULE_4__["userService"].me();
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_6__["updateCurrentUser"])(userResp.data));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["loginSuccess"])());

      if (!(userResp !== null && userResp !== void 0 && (_userResp$data = userResp.data) !== null && _userResp$data !== void 0 && _userResp$data.isPerformer)) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(!userResp.data.email || !userResp.data.username ? '/user/account' : '/home');
      }

      if (userResp !== null && userResp !== void 0 && (_userResp$data2 = userResp.data) !== null && _userResp$data2 !== void 0 && _userResp$data2.isPerformer) {
        !userResp.data.email || !userResp.data.username ? next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/model/account') : next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: '/model/profile',
          query: {
            username: userResp.data.username || userResp.data._id
          }
        }, `/${userResp.data.username || userResp.data._id}`);
      }
    } catch (e) {
      const error = yield Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Incorrect credentials!');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["loginFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_7__["loginSocial"],

  *worker(data) {
    try {
      var _userResp$data3, _userResp$data4;

      const payload = data.payload;
      const {
        token
      } = payload;
      yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].setToken(token);
      const userResp = yield src_services__WEBPACK_IMPORTED_MODULE_4__["userService"].me();
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_6__["updateCurrentUser"])(userResp.data));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["loginSuccess"])());

      if (!(userResp !== null && userResp !== void 0 && (_userResp$data3 = userResp.data) !== null && _userResp$data3 !== void 0 && _userResp$data3.isPerformer)) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(!userResp.data.email || !userResp.data.username ? '/user/account' : '/home');
      }

      if (userResp !== null && userResp !== void 0 && (_userResp$data4 = userResp.data) !== null && _userResp$data4 !== void 0 && _userResp$data4.isPerformer) {
        !userResp.data.email || !userResp.data.username ? next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/model/account') : next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: '/model/profile',
          query: {
            username: userResp.data.username || userResp.data._id
          }
        }, `/${userResp.data.username || userResp.data._id}`);
      }
    } catch (e) {
      const error = yield Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Incorrect credentials!');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["loginFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_7__["registerFan"],

  *worker(data) {
    try {
      const payload = data.payload;
      const resp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].register(payload)).data;
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].success((resp === null || resp === void 0 ? void 0 : resp.message) || 'Sign up success!', 10);
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["registerFanSuccess"])(resp));
    } catch (e) {
      const error = yield Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'This Username or email address has been already taken.', 5);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["registerFanFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_7__["registerPerformer"],

  *worker(data) {
    try {
      const verificationFiles = [{
        fieldname: 'idVerification',
        file: data.payload.idVerificationFile
      }, {
        fieldname: 'documentVerification',
        file: data.payload.documentVerificationFile
      }];
      const payload = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["pick"])(data.payload, ['name', 'username', 'password', 'gender', 'email', 'firstName', 'lastName', 'country', 'dateOfBirth']);
      const resp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].registerPerformer(verificationFiles, payload, () => {})).data;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["registerPerformerSuccess"])(resp));
    } catch (e) {
      const error = yield Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(error.message || 'An error occured, please try again later');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["registerPerformerFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_7__["logout"],

  *worker() {
    yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].removeToken();
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_7__["forgot"],

  *worker(data) {
    try {
      const payload = data.payload;
      const resp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].resetPassword(payload)).data;
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].success('We\'ve sent an email to reset your password, please check your inbox.', 10);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["forgotSuccess"])(resp));
    } catch (e) {
      const error = yield Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(error && error.message || 'Something went wrong. Please try again later', 5);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["forgotFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_7__["getCurrentUser"],

  *worker() {
    try {
      const userResp = yield src_services__WEBPACK_IMPORTED_MODULE_4__["userService"].me();
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_6__["updateCurrentUser"])(userResp.data));
    } catch (e) {
      const error = yield Promise.resolve(e); // eslint-disable-next-line no-console

      console.log(error);
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(authSagas)]));

/***/ }),

/***/ "./src/redux/cart/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/cart/actions.ts ***!
  \***********************************/
/*! exports provided: addCart, removeCart, clearCart, updateItemCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCart", function() { return addCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCart", function() { return removeCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItemCart", function() { return updateItemCart; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  addCart
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('addCart', 'ADD_CART');
const {
  removeCart
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('removeCart', 'REMOVE_CART');
const {
  clearCart
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('clearCart', 'CLEAR_CART');
const {
  updateItemCart
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updateItemCart', 'UPDATE_ITEM_CART');

/***/ }),

/***/ "./src/redux/cart/reducers.ts":
/*!************************************!*\
  !*** ./src/redux/cart/reducers.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/cart/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  total: 0,
  items: []
};
const cartReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["addCart"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      total: state.total + data.payload.length,
      items: [...state.items, ...data.payload]
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["removeCart"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      total: state.total - data.payload.length,
      items: [...state.items.filter(item => data.payload.indexOf(item) > -1)]
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["clearCart"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      total: 0,
      items: []
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updateItemCart"],

  reducer(state, data) {
    const index = state.items.findIndex(element => element._id === data.payload.data._id);
    const newArray = [...state.items];

    if (index > -1) {
      newArray[index] = _objectSpread(_objectSpread({}, newArray[index]), {}, {
        quantity: data.payload.quantity || 1
      });
    }

    return _objectSpread(_objectSpread({}, state), {}, {
      items: newArray
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('cart', [cartReducers], initialState)));

/***/ }),

/***/ "./src/redux/comment/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/comment/actions.ts ***!
  \**************************************/
/*! exports provided: getComments, getCommentsSuccess, getCommentsFail, moreComment, moreCommentSuccess, moreCommentFail, createComment, createCommentSuccess, createCommentFail, deleteComment, deleteCommentSuccess, deleteCommentFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentsSuccess", function() { return getCommentsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentsFail", function() { return getCommentsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreComment", function() { return moreComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreCommentSuccess", function() { return moreCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreCommentFail", function() { return moreCommentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentSuccess", function() { return createCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentFail", function() { return createCommentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentSuccess", function() { return deleteCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentFail", function() { return deleteCommentFail; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getComments,
  getCommentsSuccess,
  getCommentsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getComments', 'GET_THE_COMMENTS');
const {
  moreComment,
  moreCommentSuccess,
  moreCommentFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('moreComment', 'MORE_COMMENT');
const {
  createComment,
  createCommentSuccess,
  createCommentFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('createComment', 'CREATE_COMMENT');
const {
  deleteComment,
  deleteCommentSuccess,
  deleteCommentFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('deleteComment', 'DELETE_COMMENT');

/***/ }),

/***/ "./src/redux/comment/reducers.ts":
/*!***************************************!*\
  !*** ./src/redux/comment/reducers.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/comment/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  activeObject: {},
  commentMapping: {},
  comment: {
    requesting: false,
    error: null,
    success: false,
    data: null
  }
};
const commentReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getComments"],

  reducer(state, data) {
    const {
      objectId
    } = data.payload;

    const nextState = _objectSpread({}, state);

    nextState.activeObject._id = objectId;
    nextState.commentMapping[objectId] = {
      requesting: true,
      items: [],
      total: 0
    };
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getCommentsSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const objectId = data.payload.data && data.payload.data.length ? data.payload.data[0].objectId : nextState.activeObject._id;

    if (objectId) {
      nextState.commentMapping[objectId] = {
        items: data.payload.data,
        total: data.payload.total,
        requesting: false
      };
    }

    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getCommentsFail"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const objectId = data.payload.data && data.payload.data.length ? data.payload.data[0].objectId : nextState.activeObject._id;

    if (objectId) {
      nextState.commentMapping[objectId] = {
        items: [],
        total: 0,
        requesting: false
      };
    }

    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreComment"],

  reducer(state, data) {
    const {
      objectId
    } = data.payload;

    const nextState = _objectSpread({}, state);

    nextState.commentMapping[objectId].requesting = true;
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreCommentSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const objectId = data.payload.data && data.payload.data.length ? data.payload.data[0].objectId : null;

    if (objectId) {
      nextState.commentMapping[objectId] = {
        items: [...nextState.commentMapping[objectId].items, ...data.payload.data],
        total: data.payload.total,
        requesting: false
      };
    }

    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreCommentFail"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const objectId = data.payload.data && data.payload.data.length ? data.payload.data[0].objectId : null;

    if (objectId) {
      nextState.commentMapping[objectId] = {
        items: [],
        total: 0,
        requesting: false
      };
    }

    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["createComment"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      comment: _objectSpread(_objectSpread({}, state.comment), {}, {
        requesting: true,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["createCommentSuccess"],

  reducer(state, data) {
    var _nextState$commentMap;

    const nextState = _objectSpread({}, state);

    const {
      objectId
    } = data.payload;

    if (!(nextState !== null && nextState !== void 0 && (_nextState$commentMap = nextState.commentMapping[objectId]) !== null && _nextState$commentMap !== void 0 && _nextState$commentMap.items)) {
      nextState.commentMapping[objectId].items = [];
      nextState.commentMapping[objectId].total = 0;
    }

    nextState.commentMapping[objectId].items.unshift(data.payload);
    nextState.commentMapping[objectId].total += 1;
    return _objectSpread(_objectSpread({}, nextState), {}, {
      comment: {
        requesting: false,
        data: data.payload,
        error: null,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["createCommentFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      comment: {
        requesting: false,
        data: null,
        error: data.payload,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["deleteCommentSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      objectId,
      _id
    } = data.payload;
    nextState.commentMapping[objectId].items.splice(nextState.commentMapping[objectId].items.findIndex(item => item._id === _id), 1);
    nextState.commentMapping[objectId].total -= 1;
    return _objectSpread({}, nextState);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('comment', [commentReducers], initialState)));

/***/ }),

/***/ "./src/redux/comment/sagas.ts":
/*!************************************!*\
  !*** ./src/redux/comment/sagas.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/comment/actions.ts");






const commentSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getComments"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["commentService"].search(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getCommentsSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getCommentsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["moreComment"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["commentService"].search(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["moreCommentSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["moreCommentFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["createComment"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["commentService"].create(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["createCommentSuccess"])(resp.data));
      yield antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Commented successfully');
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["createCommentFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["deleteComment"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["commentService"].delete(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCommentSuccess"])(resp.data));
      yield antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Removed successfully!');
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCommentFail"])(error));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(commentSagas)]));

/***/ }),

/***/ "./src/redux/feed/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/feed/actions.ts ***!
  \***********************************/
/*! exports provided: getFeeds, getFeedsSuccess, getFeedsFail, moreFeeds, moreFeedsSuccess, moreFeedsFail, getVideoFeeds, getVideoFeedsSuccess, getVideoFeedsFail, moreVideoFeeds, moreVideoFeedsSuccess, moreVideoFeedsFail, getPhotoFeeds, getPhotoFeedsSuccess, getPhotoFeedsFail, morePhotoFeeds, morePhotoFeedsSuccess, morePhotoFeedsFail, removeFeedSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeeds", function() { return getFeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedsSuccess", function() { return getFeedsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedsFail", function() { return getFeedsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreFeeds", function() { return moreFeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreFeedsSuccess", function() { return moreFeedsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreFeedsFail", function() { return moreFeedsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoFeeds", function() { return getVideoFeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoFeedsSuccess", function() { return getVideoFeedsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoFeedsFail", function() { return getVideoFeedsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreVideoFeeds", function() { return moreVideoFeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreVideoFeedsSuccess", function() { return moreVideoFeedsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreVideoFeedsFail", function() { return moreVideoFeedsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhotoFeeds", function() { return getPhotoFeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhotoFeedsSuccess", function() { return getPhotoFeedsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhotoFeedsFail", function() { return getPhotoFeedsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "morePhotoFeeds", function() { return morePhotoFeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "morePhotoFeedsSuccess", function() { return morePhotoFeedsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "morePhotoFeedsFail", function() { return morePhotoFeedsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFeedSuccess", function() { return removeFeedSuccess; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getFeeds,
  getFeedsSuccess,
  getFeedsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getFeeds', 'GET_FEEDS');
const {
  moreFeeds,
  moreFeedsSuccess,
  moreFeedsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('moreFeeds', 'GET_MODE_FEEDS');
const {
  getVideoFeeds,
  getVideoFeedsSuccess,
  getVideoFeedsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getVideoFeeds', 'GET_VIDEO_FEEDS');
const {
  moreVideoFeeds,
  moreVideoFeedsSuccess,
  moreVideoFeedsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('moreVideoFeeds', 'GET_MODE_VIDEO_FEEDS');
const {
  getPhotoFeeds,
  getPhotoFeedsSuccess,
  getPhotoFeedsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPhotoFeeds', 'GET_PHOTO_FEEDS');
const {
  morePhotoFeeds,
  morePhotoFeedsSuccess,
  morePhotoFeedsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('morePhotoFeeds', 'GET_MODE_PHOTO_FEEDS');
const removeFeedSuccess = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeFeedSuccess');

/***/ }),

/***/ "./src/redux/feed/reducers.ts":
/*!************************************!*\
  !*** ./src/redux/feed/reducers.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/feed/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  feeds: {
    requesting: false,
    error: null,
    data: null,
    success: false
  },
  videoFeeds: {
    requesting: false,
    error: null,
    data: null,
    success: false
  },
  photoFeeds: {
    requesting: false,
    error: null,
    data: null,
    success: false
  }
};
const feedReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getFeeds"],

  reducer(prevState) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      feeds: _objectSpread(_objectSpread({}, initialState.feeds), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getFeedsSuccess"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      feeds: _objectSpread(_objectSpread({}, prevState.feeds), {}, {
        requesting: false,
        items: data.payload.data,
        total: data.payload.total,
        success: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getFeedsFail"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      feeds: _objectSpread(_objectSpread({}, prevState.feeds), {}, {
        requesting: false,
        error: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreFeeds"],

  reducer(prevState) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      feeds: _objectSpread(_objectSpread({}, prevState.feeds), {}, {
        requesting: true,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreFeedsSuccess"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      feeds: _objectSpread(_objectSpread({}, prevState.feeds), {}, {
        requesting: false,
        total: data.payload.total,
        items: [...prevState.feeds.items, ...data.payload.data],
        success: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreFeedsFail"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      feeds: _objectSpread(_objectSpread({}, prevState.feeds), {}, {
        requesting: false,
        error: data.payload,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getVideoFeeds"],

  reducer(prevState) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      videoFeeds: _objectSpread(_objectSpread({}, initialState.videoFeeds), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getVideoFeedsSuccess"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      videoFeeds: _objectSpread(_objectSpread({}, prevState.videoFeeds), {}, {
        requesting: false,
        items: data.payload.data,
        total: data.payload.total,
        success: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getVideoFeedsFail"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      videoFeeds: _objectSpread(_objectSpread({}, prevState.videoFeeds), {}, {
        requesting: false,
        error: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreVideoFeeds"],

  reducer(prevState) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      videoFeeds: _objectSpread(_objectSpread({}, prevState.videoFeeds), {}, {
        requesting: true,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreVideoFeedsSuccess"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      videoFeeds: _objectSpread(_objectSpread({}, prevState.videoFeed), {}, {
        requesting: false,
        total: data.payload.total,
        items: [...prevState.videoFeeds.items, ...data.payload.data],
        success: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreVideoFeedsFail"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      videoFeeds: _objectSpread(_objectSpread({}, prevState.videoFeeds), {}, {
        requesting: false,
        error: data.payload,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPhotoFeeds"],

  reducer(prevState) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      photoFeeds: _objectSpread(_objectSpread({}, initialState.photoFeeds), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPhotoFeedsSuccess"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      photoFeeds: _objectSpread(_objectSpread({}, prevState.photoFeeds), {}, {
        requesting: false,
        items: data.payload.data,
        total: data.payload.total,
        success: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPhotoFeedsFail"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      photoFeeds: _objectSpread(_objectSpread({}, prevState.photoFeeds), {}, {
        requesting: false,
        error: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["morePhotoFeeds"],

  reducer(prevState) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      photoFeeds: _objectSpread(_objectSpread({}, prevState.photoFeeds), {}, {
        requesting: true,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["morePhotoFeedsSuccess"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      photoFeeds: _objectSpread(_objectSpread({}, prevState.photoFeeds), {}, {
        requesting: false,
        total: data.payload.total,
        items: [...prevState.photoFeeds.items, ...data.payload.data],
        success: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["morePhotoFeedsFail"],

  reducer(prevState, data) {
    return _objectSpread(_objectSpread({}, prevState), {}, {
      photoFeeds: _objectSpread(_objectSpread({}, prevState.photoFeeds), {}, {
        requesting: false,
        error: data.payload,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["removeFeedSuccess"],

  reducer(prevState, data) {
    const {
      feed
    } = data.payload;
    const {
      items
    } = prevState.feeds || [];
    items.splice(items.findIndex(f => f._id === feed._id), 1);
    return _objectSpread(_objectSpread({}, prevState), {}, {
      feeds: {
        total: prevState.total - 1,
        items
      }
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('feed', [feedReducers], initialState)));

/***/ }),

/***/ "./src/redux/feed/sagas.ts":
/*!*********************************!*\
  !*** ./src/redux/feed/sagas.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/feed/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const performerSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getFeeds"],

  *worker(data) {
    try {
      const resp = data.payload.isHome ? yield _services_index__WEBPACK_IMPORTED_MODULE_3__["feedService"].userHomeFeeds(data.payload) : yield _services_index__WEBPACK_IMPORTED_MODULE_3__["feedService"].userSearch(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getFeedsSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getFeedsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["moreFeeds"],

  *worker(data) {
    try {
      const resp = data.payload.isHome ? yield _services_index__WEBPACK_IMPORTED_MODULE_3__["feedService"].userHomeFeeds(data.payload) : yield _services_index__WEBPACK_IMPORTED_MODULE_3__["feedService"].userSearch(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreFeedsSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreFeedsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getVideoFeeds"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["feedService"].userSearch(_objectSpread(_objectSpread({}, data.payload), {}, {
        postType: 'video'
      }));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getVideoFeedsSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getVideoFeedsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["moreVideoFeeds"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["feedService"].userSearch(_objectSpread(_objectSpread({}, data.payload), {}, {
        postType: 'video'
      }));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreFeedsSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreFeedsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getPhotoFeeds"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["feedService"].userSearch(_objectSpread(_objectSpread({}, data.payload), {}, {
        postType: 'photo'
      }));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getPhotoFeedsSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getPhotoFeedsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["morePhotoFeeds"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["feedService"].userSearch(_objectSpread(_objectSpread({}, data.payload), {}, {
        postType: 'photo'
      }));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["morePhotoFeedsSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["morePhotoFeedsFail"])(error));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(performerSagas)]));

/***/ }),

/***/ "./src/redux/gallery/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/gallery/actions.ts ***!
  \**************************************/
/*! exports provided: getGalleries, getGalleriesSuccess, getGalleriesFail, moreGalleries, moreGalleriesSuccess, moreGalleriesFail, getRelatedGalleries, getRelatedGalleriesSuccess, getRelatedGalleriesFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGalleries", function() { return getGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGalleriesSuccess", function() { return getGalleriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGalleriesFail", function() { return getGalleriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreGalleries", function() { return moreGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreGalleriesSuccess", function() { return moreGalleriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreGalleriesFail", function() { return moreGalleriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedGalleries", function() { return getRelatedGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedGalleriesSuccess", function() { return getRelatedGalleriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedGalleriesFail", function() { return getRelatedGalleriesFail; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getGalleries,
  getGalleriesSuccess,
  getGalleriesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getGalleries', 'GET_GALLERIES');
const {
  moreGalleries,
  moreGalleriesSuccess,
  moreGalleriesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('moreGalleries', 'MORE_GALLERIES');
const {
  getRelatedGalleries,
  getRelatedGalleriesSuccess,
  getRelatedGalleriesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getRelatedGalleries', 'GET_RELATED_GALLERIES');

/***/ }),

/***/ "./src/redux/gallery/reducers.ts":
/*!***************************************!*\
  !*** ./src/redux/gallery/reducers.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/gallery/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  galleries: {
    requesting: false,
    items: [],
    total: 0,
    error: null,
    success: false
  },
  relatedGalleries: {
    requesting: false,
    error: null,
    success: false,
    items: [],
    total: 0
  }
};
const galleryReducer = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getGalleries"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      galleries: _objectSpread(_objectSpread({}, state.galleries), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getGalleriesSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      galleries: {
        requesting: false,
        items: data.payload.data,
        total: data.payload.total,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getGalleriesFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      galleries: _objectSpread(_objectSpread({}, state.galleries), {}, {
        requesting: false,
        error: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreGalleries"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      galleries: _objectSpread(_objectSpread({}, state.galleries), {}, {
        requesting: true,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreGalleriesSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      galleries: {
        requesting: false,
        total: data.payload.total,
        items: [...state.galleries.items, ...data.payload.data],
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreGalleriesFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      galleries: _objectSpread(_objectSpread({}, state.galleries), {}, {
        requesting: false,
        error: data.payload,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getRelatedGalleries"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      related: _objectSpread(_objectSpread({}, state.videos), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getRelatedGalleriesSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      relatedGalleries: {
        requesting: false,
        items: data.payload.data,
        total: data.payload.total,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getRelatedGalleriesFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      relatedGalleries: _objectSpread(_objectSpread({}, state.galleries), {}, {
        requesting: false,
        error: data.payload
      })
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createReducers"])('gallery', [galleryReducer], initialState)));

/***/ }),

/***/ "./src/redux/gallery/sagas.ts":
/*!************************************!*\
  !*** ./src/redux/gallery/sagas.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/gallery/actions.ts");





const gallerySagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getGalleries"],

  *worker(data) {
    try {
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_0__["galleryService"].userSearch(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getGalleriesSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getGalleriesFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["moreGalleries"],

  *worker(data) {
    try {
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_0__["galleryService"].userSearch(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreGalleriesSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreGalleriesFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getRelatedGalleries"],

  *worker(data) {
    try {
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_0__["galleryService"].userSearch(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getRelatedGalleriesSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getRelatedGalleriesFail"])(error));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_3__["createSagas"])(gallerySagas)]));

/***/ }),

/***/ "./src/redux/message/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/message/actions.ts ***!
  \**************************************/
/*! exports provided: getConversations, getConversationsSuccess, getConversationsFail, searchConversations, searchConversationsSuccess, searchConversationsFail, readMessages, sendMessage, sendMessageSuccess, sendMessageFail, receiveMessageSuccess, sentFileSuccess, deactiveConversation, setActiveConversation, setActiveConversationSuccess, setActiveConversationFail, loadMessages, loadMessagesSuccess, loadMessagesFail, loadMoreMessages, loadMoreMessagesSuccess, loadMoreMessagesFail, fetchingMessage, resetMessageState, getConversationDetail, getConversationDetailSuccess, getConversationDetailFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversations", function() { return getConversations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationsSuccess", function() { return getConversationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationsFail", function() { return getConversationsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchConversations", function() { return searchConversations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchConversationsSuccess", function() { return searchConversationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchConversationsFail", function() { return searchConversationsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readMessages", function() { return readMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageSuccess", function() { return sendMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageFail", function() { return sendMessageFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveMessageSuccess", function() { return receiveMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentFileSuccess", function() { return sentFileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactiveConversation", function() { return deactiveConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveConversation", function() { return setActiveConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveConversationSuccess", function() { return setActiveConversationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveConversationFail", function() { return setActiveConversationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessages", function() { return loadMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesSuccess", function() { return loadMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesFail", function() { return loadMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreMessages", function() { return loadMoreMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreMessagesSuccess", function() { return loadMoreMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreMessagesFail", function() { return loadMoreMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchingMessage", function() { return fetchingMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMessageState", function() { return resetMessageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetail", function() { return getConversationDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetailSuccess", function() { return getConversationDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetailFail", function() { return getConversationDetailFail; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getConversations,
  getConversationsSuccess,
  getConversationsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getConversations', 'LOAD_CONVERSATIONS');
const {
  searchConversations,
  searchConversationsSuccess,
  searchConversationsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('searchConversations', 'SEARCH_CONVERSATIONS');
const {
  readMessages
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('readMessages', 'READ_MESSAGES');
const {
  sendMessage,
  sendMessageSuccess,
  sendMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('sendMessage', 'SEND_MESSAGE');
const {
  receiveMessageSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('receiveMessageSuccess', 'RECEIVE_MESSAGE_SUCCESS');
const {
  sentFileSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('sentFileSuccess', 'SENT_FILE_SUCCESS');
const {
  deactiveConversation
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('deactiveConversation', 'DEACTIVE_CONVERSATION');
const {
  setActiveConversation,
  setActiveConversationSuccess,
  setActiveConversationFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('setActiveConversation', 'SET_ACTIVE_CONVERSATION_RECEIVER');
const {
  loadMessages,
  loadMessagesSuccess,
  loadMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadMessages', 'LOAD_MESSAGES');
const {
  loadMoreMessages,
  loadMoreMessagesSuccess,
  loadMoreMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadMoreMessages', 'LOAD_MORE_MESSAGES');
const fetchingMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('fetchingMessage');
const resetMessageState = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetMessageState');
const {
  getConversationDetail,
  getConversationDetailSuccess,
  getConversationDetailFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getConversationDetail', 'LOAD_CONVERSATION_ITEM');

/***/ }),

/***/ "./src/redux/message/reducers.ts":
/*!***************************************!*\
  !*** ./src/redux/message/reducers.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/message/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialConversationState = {
  list: {
    requesting: false,
    error: null,
    data: [],
    total: 0,
    success: false
  },
  mapping: {},
  activeConversation: {}
};
const initialMessageState = {
  // conversationId => { fetching: boolean, items: [] }
  conversationMap: {},
  sendMessage: {},
  receiveMessage: {}
};
const conversationReducer = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["resetMessageState"],

  reducer(state) {
    let {
      list,
      mapping,
      activeConversation
    } = state;
    list = {
      requesting: false,
      error: null,
      data: [],
      total: 0,
      success: false
    };
    mapping = {};
    activeConversation = {};
    return _objectSpread(_objectSpread({}, state), {}, {
      list,
      mapping,
      activeConversation
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getConversations"],

  reducer(state) {
    const nextState = _objectSpread({}, state);

    nextState.list.requesting = true;
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getConversationsSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      list,
      mapping
    } = nextState;
    const {
      data: items,
      total
    } = data.payload;
    const Ids = items.map(c => c._id);
    list.data = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(list.data.concat(Ids));
    list.total = total;
    list.success = true;
    list.requesting = false;
    list.error = false;
    items.forEach(c => {
      mapping[c._id] = c;
    });
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getConversationsFail"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      list: {
        requesting: false,
        error: data.payload,
        data: [],
        total: 0,
        success: false
      },
      mapping: {},
      activeConversation: {}
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["searchConversations"],

  reducer(state) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      list: {
        requesting: true,
        error: null,
        data: [],
        total: 0,
        success: false
      },
      mapping: {},
      activeConversation: {}
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["searchConversationsSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      list,
      mapping
    } = nextState;
    const {
      data: items,
      total
    } = data.payload;
    const Ids = items.map(c => c._id);
    list.data = Ids;
    list.total = total;
    list.success = true;
    list.requesting = false;
    list.error = false;
    items.forEach(c => {
      mapping[c._id] = c;
    });
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["searchConversationsFail"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      list: {
        requesting: false,
        error: data.payload,
        data: [],
        total: 0,
        success: false
      },
      mapping: {},
      activeConversation: {}
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["setActiveConversationSuccess"],

  reducer(state, data) {
    const conversation = data.payload;
    const list = state.list.data;
    const {
      mapping
    } = state;
    const check = list.find(c => c === conversation._id);

    if (!check) {
      list.unshift(conversation._id);
      mapping[conversation._id] = conversation;
    }

    return _objectSpread(_objectSpread({}, state), {}, {
      activeConversation: conversation
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getConversationDetailSuccess"],

  reducer(state, data) {
    const {
      list,
      mapping
    } = state;
    const conversation = data.payload;

    if (!list.data.includes(conversation._id)) {
      list.data.unshift(conversation._id);
      mapping[conversation._id] = conversation;
    }

    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["readMessages"],

  reducer(state, data) {
    const conversationId = data.payload;
    const {
      mapping
    } = state;
    mapping[conversationId].totalNotSeenMessages = 0;
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["deactiveConversation"],

  reducer(state) {
    const nextState = _objectSpread({}, state);

    nextState.activeConversation = {};
    return _objectSpread({}, nextState);
  }

}];
const messageReducer = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchingMessage"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId
    } = data.payload;
    conversationMap[conversationId] = _objectSpread(_objectSpread({}, conversationMap[conversationId]), {}, {
      fetching: true
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadMessagesSuccess"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId,
      items,
      total
    } = data.payload;
    conversationMap[conversationId] = {
      items: [...items.reverse()],
      total,
      fetching: false
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadMoreMessagesSuccess"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId,
      items,
      total
    } = data.payload;
    conversationMap[conversationId] = {
      items: [...items.reverse(), ...(conversationMap[conversationId].items || [])],
      total,
      fetching: false
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendMessage"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      sendMessage: {
        sending: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    if (!nextState.conversationMap[data.payload.conversationId] || !nextState.conversationMap[data.payload.conversationId].items) {
      nextState.conversationMap[data.payload.conversationId].items = [];
    }

    nextState.conversationMap[data.payload.conversationId].items.push(data.payload);
    return _objectSpread(_objectSpread({}, nextState), {}, {
      sendMessage: {
        sending: false,
        success: true,
        data: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendMessageFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      sendMessage: {
        sending: false,
        success: false,
        error: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["receiveMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    if (!nextState.conversationMap[data.payload.conversationId]) {
      return _objectSpread({}, nextState);
    }

    nextState.conversationMap[data.payload.conversationId].items.push(data.payload);
    return _objectSpread(_objectSpread({}, nextState), {}, {
      receiveMessage: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sentFileSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    if (!nextState.conversationMap[data.payload.conversationId] || !nextState.conversationMap[data.payload.conversationId].items) {
      nextState.conversationMap[data.payload.conversationId].items = [];
    }

    nextState.conversationMap[data.payload.conversationId].items.push(data.payload);
    return _objectSpread(_objectSpread({}, nextState), {}, {
      sendMessage: {
        sending: false,
        success: true,
        data: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["deactiveConversation"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const conversationId = data.payload;

    if (conversationId && nextState.conversationMap[conversationId]) {
      nextState.conversationMap[conversationId] = {
        items: [],
        total: 0,
        requesting: false
      };
    }

    return _objectSpread({}, nextState);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('conversation', [conversationReducer], initialConversationState), Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('message', [messageReducer], initialMessageState)));

/***/ }),

/***/ "./src/redux/message/sagas.ts":
/*!************************************!*\
  !*** ./src/redux/message/sagas.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/message.service */ "./src/services/message.service.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/message/actions.ts");






const conversationSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getConversations"],

  *worker(data) {
    try {
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getConversations(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getConversationsSuccess"])(resp.data));
    } catch (e) {
      // TODO - alert error
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getConversationsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["searchConversations"],

  *worker(data) {
    try {
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getConversations(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["searchConversationsSuccess"])(resp.data));
    } catch (e) {
      // TODO - alert error
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["searchConversationsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["setActiveConversation"],

  *worker(data) {
    try {
      const {
        source,
        sourceId,
        conversationId
      } = data.payload;
      const conversationMapping = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(state => state.conversation.mapping);

      if (conversationId) {
        if (conversationMapping[conversationId]) {
          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setActiveConversationSuccess"])(conversationMapping[conversationId]));
          const readAllMessages = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].readAllInConversation(conversationId);

          if (readAllMessages) {
            yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["readMessages"])(conversationId));
          }

          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMessages"])({
            conversationId,
            limit: 25,
            offset: 0
          }));
        }
      } else {
        const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].createConversation({
          source,
          sourceId
        });
        const conversation = resp.data;

        if (conversationMapping[conversation._id]) {
          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setActiveConversationSuccess"])(conversationMapping[conversation._id]));
        } else {
          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setActiveConversationSuccess"])(conversation));
        }

        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMessages"])({
          conversationId: conversation._id,
          limit: 25,
          offset: 0
        }));
      }
    } catch (e) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later');
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getConversationDetail"],

  *worker(data) {
    try {
      const conversation = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getConversationDetail(data.payload.id);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getConversationDetailSuccess"])(conversation.data));
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getConversationsFail"])(e));
    }
  }

}];
const messageSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["loadMessages"],

  *worker(data) {
    try {
      const messageMap = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(state => state.message.mapping);
      const {
        conversationId,
        offset,
        limit
      } = data.payload;

      if (messageMap[conversationId] && messageMap[conversationId].fetching) {
        // do nothing if it is fetching
        return;
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchingMessage"])({
        conversationId
      }));
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getMessages(conversationId, {
        offset,
        limit
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMessagesSuccess"])({
        conversationId,
        items: resp.data.data,
        total: resp.data.total
      }));
    } catch (e) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later');
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["loadMoreMessages"],

  *worker(data) {
    try {
      const messageMap = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(state => state.message.mapping);
      const {
        conversationId,
        offset,
        limit
      } = data.payload;

      if (messageMap[conversationId] && messageMap[conversationId].fetching) {
        // do nothing if it is fetching
        return;
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchingMessage"])({
        conversationId
      }));
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getMessages(conversationId, {
        offset,
        limit
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMoreMessagesSuccess"])({
        conversationId,
        items: resp.data.data,
        total: resp.data.total
      }));
    } catch (e) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later'); // console.log('err', e);
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["sendMessage"],

  *worker(req) {
    try {
      const {
        conversationId,
        data
      } = req.payload;
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].sendMessage(conversationId, data);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["sendMessageSuccess"])(resp.data));
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["sendMessageFail"])(e));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(conversationSagas), Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(messageSagas)]));

/***/ }),

/***/ "./src/redux/performer/actions.ts":
/*!****************************************!*\
  !*** ./src/redux/performer/actions.ts ***!
  \****************************************/
/*! exports provided: getList, getListSuccess, getListFail, getProfile, getProfileSuccess, getProfileFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListSuccess", function() { return getListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListFail", function() { return getListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileSuccess", function() { return getProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileFail", function() { return getProfileFail; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getList,
  getListSuccess,
  getListFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getList', 'GET_LIST');
const {
  getProfile,
  getProfileSuccess,
  getProfileFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getProfile', 'GET_PROFILE');

/***/ }),

/***/ "./src/redux/performer/reducers.ts":
/*!*****************************************!*\
  !*** ./src/redux/performer/reducers.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/performer/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  performerListing: {
    requesting: false,
    error: null,
    data: null,
    success: false
  },
  performerProfile: {
    requesting: false,
    error: null,
    data: null,
    success: false
  }
};
const performerReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getList"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerListing: {
        requesting: true,
        error: null,
        data: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getListSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerListing: {
        requesting: false,
        error: null,
        data: data.payload,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getListFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerListing: {
        requesting: false,
        error: data.payload,
        data: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getProfile"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerProfile: {
        requesting: true,
        error: null,
        data: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getProfileSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerProfile: {
        requesting: false,
        error: null,
        data: data.payload,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getProfileFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerProfile: {
        requesting: false,
        error: data.payload,
        data: null,
        success: false
      }
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('performer', [performerReducers], initialState)));

/***/ }),

/***/ "./src/redux/performer/sagas.ts":
/*!**************************************!*\
  !*** ./src/redux/performer/sagas.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/performer/actions.ts");





const performerSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getList"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["performerService"].search(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getListSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getListFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getProfile"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["performerService"].findOne(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getProfileSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getProfileFail"])(error));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(performerSagas)]));

/***/ }),

/***/ "./src/redux/product/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/product/actions.ts ***!
  \**************************************/
/*! exports provided: listProducts, listProductsSuccess, listProductsFail, moreProduct, moreProductSuccess, moreProductFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listProducts", function() { return listProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listProductsSuccess", function() { return listProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listProductsFail", function() { return listProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreProduct", function() { return moreProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreProductSuccess", function() { return moreProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreProductFail", function() { return moreProductFail; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  listProducts,
  listProductsSuccess,
  listProductsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('listProducts', 'LIST_PRODUCT');
const {
  moreProduct,
  moreProductSuccess,
  moreProductFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('moreProduct', 'MORE_PRODUCT');

/***/ }),

/***/ "./src/redux/product/reducers.ts":
/*!***************************************!*\
  !*** ./src/redux/product/reducers.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/product/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  products: {
    requesting: false,
    error: null,
    success: false,
    items: [],
    total: 0
  }
};
const productReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["listProducts"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      products: _objectSpread(_objectSpread({}, state.products), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["listProductsSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      products: {
        requesting: false,
        items: data.payload.data,
        total: data.payload.total,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["listProductsFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      products: _objectSpread(_objectSpread({}, state.products), {}, {
        requesting: false,
        error: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreProduct"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      products: _objectSpread(_objectSpread({}, state.products), {}, {
        requesting: true,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreProductSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      products: {
        requesting: false,
        total: data.payload.total,
        items: [...state.products.items, ...data.payload.data],
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreProductFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      products: _objectSpread(_objectSpread({}, state.products), {}, {
        requesting: false,
        error: data.payload,
        success: false
      })
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('product', [productReducers], initialState)));

/***/ }),

/***/ "./src/redux/product/sagas.ts":
/*!************************************!*\
  !*** ./src/redux/product/sagas.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/product/actions.ts");





const productSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["listProducts"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["productService"].userSearch(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["listProductsSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["listProductsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["moreProduct"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["productService"].userSearch(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreProductSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreProductFail"])(error));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(productSagas)]));

/***/ }),

/***/ "./src/redux/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/redux/rootReducer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/reducers */ "./src/redux/settings/reducers.ts");
/* harmony import */ var _ui_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/reducers */ "./src/redux/ui/reducers.ts");
/* harmony import */ var _user_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/reducers */ "./src/redux/user/reducers.ts");
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/reducers */ "./src/redux/auth/reducers.ts");
/* harmony import */ var _performer_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./performer/reducers */ "./src/redux/performer/reducers.ts");
/* harmony import */ var _video_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video/reducers */ "./src/redux/video/reducers.ts");
/* harmony import */ var _gallery_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/reducers */ "./src/redux/gallery/reducers.ts");
/* harmony import */ var _product_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/reducers */ "./src/redux/product/reducers.ts");
/* harmony import */ var _comment_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comment/reducers */ "./src/redux/comment/reducers.ts");
/* harmony import */ var _cart_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/reducers */ "./src/redux/cart/reducers.ts");
/* harmony import */ var _message_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./message/reducers */ "./src/redux/message/reducers.ts");
/* harmony import */ var _feed_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feed/reducers */ "./src/redux/feed/reducers.ts");
/* harmony import */ var _streaming_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./streaming/reducers */ "./src/redux/streaming/reducers.ts");
/* harmony import */ var _stream_chat_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stream-chat/reducers */ "./src/redux/stream-chat/reducers.ts");
/* harmony import */ var _subscription_reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subscription/reducers */ "./src/redux/subscription/reducers.ts");

 // load reducer here
















const reducers = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])(_settings_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], _ui_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], _user_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], _auth_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], _performer_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], _gallery_reducers__WEBPACK_IMPORTED_MODULE_8__["default"], _video_reducers__WEBPACK_IMPORTED_MODULE_7__["default"], _product_reducers__WEBPACK_IMPORTED_MODULE_9__["default"], _comment_reducers__WEBPACK_IMPORTED_MODULE_10__["default"], _cart_reducers__WEBPACK_IMPORTED_MODULE_11__["default"], _message_reducers__WEBPACK_IMPORTED_MODULE_12__["default"], _feed_reducers__WEBPACK_IMPORTED_MODULE_13__["default"], _streaming_reducers__WEBPACK_IMPORTED_MODULE_14__["default"], _stream_chat_reducers__WEBPACK_IMPORTED_MODULE_15__["default"], _subscription_reducers__WEBPACK_IMPORTED_MODULE_16__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(reducers));

/***/ }),

/***/ "./src/redux/rootSaga.ts":
/*!*******************************!*\
  !*** ./src/redux/rootSaga.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/sagas */ "./src/redux/user/sagas.ts");
/* harmony import */ var _auth_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/sagas */ "./src/redux/auth/sagas.ts");
/* harmony import */ var _performer_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./performer/sagas */ "./src/redux/performer/sagas.ts");
/* harmony import */ var _video_sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video/sagas */ "./src/redux/video/sagas.ts");
/* harmony import */ var _product_sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/sagas */ "./src/redux/product/sagas.ts");
/* harmony import */ var _comment_sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment/sagas */ "./src/redux/comment/sagas.ts");
/* harmony import */ var _gallery_sagas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/sagas */ "./src/redux/gallery/sagas.ts");
/* harmony import */ var _message_sagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/sagas */ "./src/redux/message/sagas.ts");
/* harmony import */ var _feed_sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feed/sagas */ "./src/redux/feed/sagas.ts");
/* harmony import */ var _stream_chat_sagas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stream-chat/sagas */ "./src/redux/stream-chat/sagas.ts");












function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([..._auth_sagas__WEBPACK_IMPORTED_MODULE_2__["default"], ..._user_sagas__WEBPACK_IMPORTED_MODULE_1__["default"], ..._performer_sagas__WEBPACK_IMPORTED_MODULE_3__["default"], ..._video_sagas__WEBPACK_IMPORTED_MODULE_4__["default"], ..._product_sagas__WEBPACK_IMPORTED_MODULE_5__["default"], ..._comment_sagas__WEBPACK_IMPORTED_MODULE_6__["default"], ..._gallery_sagas__WEBPACK_IMPORTED_MODULE_7__["default"], ..._message_sagas__WEBPACK_IMPORTED_MODULE_8__["default"], ..._feed_sagas__WEBPACK_IMPORTED_MODULE_9__["default"], ..._stream_chat_sagas__WEBPACK_IMPORTED_MODULE_10__["default"]].map(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["spawn"]));
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./src/redux/settings/actions.ts":
/*!***************************************!*\
  !*** ./src/redux/settings/actions.ts ***!
  \***************************************/
/*! exports provided: updateSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSettings", function() { return updateSettings; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateSettings = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateSettings');

/***/ }),

/***/ "./src/redux/settings/reducers.ts":
/*!****************************************!*\
  !*** ./src/redux/settings/reducers.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/settings/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // TODO -

const initialState = {
  requireEmailVerification: false,
  googleReCaptchaSiteKey: '',
  enableGoogleReCaptcha: false,
  googleClientId: '',
  tokenConversionRate: 1,
  stripePublishableKey: '',
  paymentGateway: 'stripe'
};
const settingReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updateSettings"],

  reducer(state, data) {
    return _objectSpread({}, data.payload);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('settings', [settingReducers], initialState)));

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_storeHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/storeHolder */ "./src/lib/storeHolder.ts");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./src/redux/rootReducer.ts");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootSaga */ "./src/redux/rootSaga.ts");






const bindMiddleware = middleware => Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);

function configureStore(initialState) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_4__["default"]);
  _lib_storeHolder__WEBPACK_IMPORTED_MODULE_2__["default"].setStore(store);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/redux/stream-chat/actions.ts":
/*!******************************************!*\
  !*** ./src/redux/stream-chat/actions.ts ***!
  \******************************************/
/*! exports provided: getStreamConversation, getStreamConversationSuccess, getStreamConversationFail, sendStreamMessage, sendStreamMessageSuccess, sendStreamMessageFail, receiveStreamMessageSuccess, loadStreamMessages, loadStreamMessagesSuccess, loadStreamMessagesFail, loadMoreStreamMessages, loadMoreStreamMessagesSuccess, loadMoreStreamMessagesFail, fetchingStreamMessage, resetStreamMessage, resetAllStreamMessage, deleteMessage, deleteMessageSuccess, deleteMessageFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreamConversation", function() { return getStreamConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreamConversationSuccess", function() { return getStreamConversationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreamConversationFail", function() { return getStreamConversationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendStreamMessage", function() { return sendStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendStreamMessageSuccess", function() { return sendStreamMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendStreamMessageFail", function() { return sendStreamMessageFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveStreamMessageSuccess", function() { return receiveStreamMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStreamMessages", function() { return loadStreamMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStreamMessagesSuccess", function() { return loadStreamMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStreamMessagesFail", function() { return loadStreamMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreStreamMessages", function() { return loadMoreStreamMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreStreamMessagesSuccess", function() { return loadMoreStreamMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreStreamMessagesFail", function() { return loadMoreStreamMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchingStreamMessage", function() { return fetchingStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStreamMessage", function() { return resetStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAllStreamMessage", function() { return resetAllStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMessage", function() { return deleteMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMessageSuccess", function() { return deleteMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMessageFail", function() { return deleteMessageFail; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getStreamConversation,
  getStreamConversationSuccess,
  getStreamConversationFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStreamConversation', 'GET_STREAM_CONVERSATION');
const {
  sendStreamMessage,
  sendStreamMessageSuccess,
  sendStreamMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('sendStreamMessage', 'SEND_STREAM_MESSAGE');
const {
  receiveStreamMessageSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('receiveStreamMessageSuccess', 'RECEIVE_STREAM_MESSAGE_SUCCESS');
const {
  loadStreamMessages,
  loadStreamMessagesSuccess,
  loadStreamMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadStreamMessages', 'LOAD_STREAM_MESSAGES');
const {
  loadMoreStreamMessages,
  loadMoreStreamMessagesSuccess,
  loadMoreStreamMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadMoreStreamMessages', 'LOAD_MORE_STREAM_MESSAGES');
const fetchingStreamMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('fetchingStreamMessage');
const resetStreamMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetStreamMessage');
const resetAllStreamMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetAllStreamMessage');
const {
  deleteMessage,
  deleteMessageSuccess,
  deleteMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('deleteMessage', 'DELETE_MESSAGE');

/***/ }),

/***/ "./src/redux/stream-chat/reducers.ts":
/*!*******************************************!*\
  !*** ./src/redux/stream-chat/reducers.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/stream-chat/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialMessageState = {
  activeConversation: {},
  sendMessage: {
    sending: false
  },
  receiveMessage: {},
  conversationMap: {}
};
const streamMessageReducer = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getStreamConversation"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      activeConversation: _objectSpread(_objectSpread({}, state.activeConversation), {}, {
        fetching: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getStreamConversationSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      activeConversation: {
        fetching: false,
        data: data.payload.data
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchingStreamMessage"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId
    } = data.payload;
    conversationMap[conversationId] = _objectSpread(_objectSpread({}, conversationMap[conversationId]), {}, {
      fetching: true
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadStreamMessagesSuccess"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId,
      items,
      total
    } = data.payload;
    conversationMap[conversationId] = {
      items: [...items.reverse()],
      total,
      fetching: false
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadMoreStreamMessagesSuccess"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId,
      items,
      total
    } = data.payload;
    conversationMap[conversationId] = {
      items: [...items.reverse(), ...(conversationMap[conversationId].items || [])],
      total,
      fetching: false
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendStreamMessage"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      sendMessage: {
        sending: true,
        success: false,
        data: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendStreamMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      sendMessage: {
        sending: false,
        success: true,
        data: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendStreamMessageFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      sendMessage: {
        sending: false,
        success: false,
        error: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["receiveStreamMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      conversationId
    } = data.payload;

    if (!nextState.conversationMap[conversationId] || !nextState.conversationMap[conversationId].items) {
      nextState.conversationMap[conversationId] = {
        items: []
      };
    }

    nextState.conversationMap[conversationId] = _objectSpread(_objectSpread({}, nextState.conversationMap[conversationId]), {}, {
      items: [...nextState.conversationMap[conversationId].items, data.payload],
      fetching: false
    });
    return _objectSpread(_objectSpread({}, nextState), {}, {
      receiveMessage: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["resetStreamMessage"],

  reducer(state) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      activeConversation: {},
      sendMessage: {
        sending: false
      },
      receiveMessage: {},
      conversationMap: {}
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["resetAllStreamMessage"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      conversationId
    } = data.payload;
    nextState.conversationMap[conversationId] = {
      items: []
    };
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["deleteMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      conversationId,
      _id
    } = data.payload;

    if (nextState.conversationMap[conversationId] && nextState.conversationMap[conversationId].items) {
      const i = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"])(nextState.conversationMap[conversationId].items, item => item && item._id === _id);
      nextState.conversationMap[conversationId].items[i].text = 'Message deleted';
      nextState.conversationMap[conversationId].items[i].isDeleted = true;
    }

    return _objectSpread({}, nextState);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('streamMessage', [streamMessageReducer], initialMessageState)));

/***/ }),

/***/ "./src/redux/stream-chat/sagas.ts":
/*!****************************************!*\
  !*** ./src/redux/stream-chat/sagas.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/message.service */ "./src/services/message.service.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/stream-chat/actions.ts");
/* eslint-disable no-console */






const streamMessageSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getStreamConversation"],

  *worker(data) {
    try {
      const {
        conversation
      } = data.payload;
      const {
        type
      } = conversation;
      const resp = type === 'stream_public' ? yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].findPublicConversationPerformer(conversation.performerId) : yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getConversationByStreamId(conversation.streamId);

      if (resp && resp.data) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getStreamConversationSuccess"])({
          data: resp.data
        }));
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadStreamMessages"])({
          conversationId: resp.data._id,
          limit: 25,
          offset: 0,
          type
        }));
      }
    } catch (e) {
      // load error
      console.log('err-get-conversation', e);
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["loadStreamMessages"],

  *worker(data) {
    try {
      const {
        conversationId,
        offset,
        limit
      } = data.payload;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchingStreamMessage"])({
        conversationId
      }));
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getPublicMessages(conversationId, {
        offset,
        limit
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadStreamMessagesSuccess"])({
        conversationId,
        items: resp.data.data,
        total: resp.data.total
      }));
    } catch (e) {
      // load error
      console.log('err', e);
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["loadMoreStreamMessages"],

  *worker(data) {
    try {
      const messageMap = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(state => state.streamMessage.messages);
      const {
        conversationId,
        offset,
        limit
      } = data.payload;

      if (messageMap && messageMap.fetching) {
        return;
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchingStreamMessage"])({
        conversationId
      }));
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getPublicMessages(conversationId, {
        offset,
        limit
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMoreStreamMessagesSuccess"])({
        conversationId,
        items: resp.data.data,
        total: resp.data.total
      }));
    } catch (e) {
      // load error
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later');
      console.log('err', e);
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["sendStreamMessage"],

  *worker(req) {
    try {
      const {
        conversationId,
        data
      } = req.payload;
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].sendStreamMessage(conversationId, data);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["sendStreamMessageSuccess"])(resp.data));
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["sendStreamMessageSuccess"])(e));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["deleteMessage"],

  *worker(req) {
    try {
      const {
        messageId
      } = req.payload;
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].deleteMessage(messageId);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMessageSuccess"])(resp.data));
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMessageFail"])(e));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(streamMessageSagas)]));

/***/ }),

/***/ "./src/redux/streaming/actions.ts":
/*!****************************************!*\
  !*** ./src/redux/streaming/actions.ts ***!
  \****************************************/
/*! exports provided: addPrivateRequest, accessPrivateRequest, updateLiveStreamSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPrivateRequest", function() { return addPrivateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessPrivateRequest", function() { return accessPrivateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLiveStreamSettings", function() { return updateLiveStreamSettings; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const addPrivateRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_PRIVATE_REQUEST');
const accessPrivateRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACCESS_PRIVATE_REQUSET');
const updateLiveStreamSettings = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_LIVE_STREAM_SETTINGS');

/***/ }),

/***/ "./src/redux/streaming/reducers.ts":
/*!*****************************************!*\
  !*** ./src/redux/streaming/reducers.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/streaming/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  privateRequests: [],
  settings: {
    viewerURL: '',
    publisherURL: '',
    optionForBroadcast: 'hls',
    optionForGroup: 'hls',
    optionForPrivate: 'hls',
    secureOption: false,
    agoraEnable: false
  }
};
const reducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["addPrivateRequest"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      privateRequests: [...state.privateRequests, action.payload]
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["accessPrivateRequest"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      privateRequests: state.privateRequests.filter(p => p.conversationId !== action.payload)
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updateLiveStreamSettings"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      settings: _objectSpread(_objectSpread({}, state.settings), action.payload)
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('streaming', [reducers], initialState)));

/***/ }),

/***/ "./src/redux/subscription/actions.ts":
/*!*******************************************!*\
  !*** ./src/redux/subscription/actions.ts ***!
  \*******************************************/
/*! exports provided: showSubscribePerformerModal, hideSubscribePerformerModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubscribePerformerModal", function() { return showSubscribePerformerModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideSubscribePerformerModal", function() { return hideSubscribePerformerModal; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const showSubscribePerformerModal = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SHOW_SUBSCRIBE_PERFORMER_MODAL');
const hideSubscribePerformerModal = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('HIDE_SUBSCRIBE_PERFORMER_MODAL');

/***/ }),

/***/ "./src/redux/subscription/reducers.ts":
/*!********************************************!*\
  !*** ./src/redux/subscription/reducers.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/subscription/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  showModal: false,
  subscribingPerformerId: null
};
const reducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["showSubscribePerformerModal"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      showModal: true,
      subscribingPerformerId: action.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["hideSubscribePerformerModal"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      showModal: false,
      subscribingPerformerId: null
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('subscription', [reducers], initialState)));

/***/ }),

/***/ "./src/redux/ui/actions.ts":
/*!*********************************!*\
  !*** ./src/redux/ui/actions.ts ***!
  \*********************************/
/*! exports provided: updateUIValue, loadUIValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUIValue", function() { return updateUIValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUIValue", function() { return loadUIValue; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateUIValue = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateUIValue');
const loadUIValue = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('loadUIValue');

/***/ }),

/***/ "./src/redux/ui/reducers.ts":
/*!**********************************!*\
  !*** ./src/redux/ui/reducers.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/ui/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  theme: 'light',
  siteName: '',
  logo: '',
  menus: [],
  favicon: '/static/favicon.ico',
  loginPlaceholderImage: '',
  footerContent: '',
  modelBenefit: '',
  userBenefit: ''
};
const uiReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updateUIValue"],

  reducer(state, data) {
    if (false) {}

    return _objectSpread(_objectSpread({}, state), data.payload);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadUIValue"],

  reducer(state) {
    const newVal = {};

    if (false) {}

    return _objectSpread(_objectSpread({}, state), newVal);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('ui', [uiReducers], initialState)));

/***/ }),

/***/ "./src/redux/user/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/user/actions.ts ***!
  \***********************************/
/*! exports provided: updateCurrentUser, updateCurrentUserAvatar, updateCurrentUserCover, updateUser, updateUserSuccess, updateUserFail, updatePerformer, setUpdating, updatePassword, updatePasswordSuccess, updatePasswordFail, updateBalance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUser", function() { return updateCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserAvatar", function() { return updateCurrentUserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserCover", function() { return updateCurrentUserCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserSuccess", function() { return updateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserFail", function() { return updateUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformer", function() { return updatePerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdating", function() { return setUpdating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePassword", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordSuccess", function() { return updatePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordFail", function() { return updatePasswordFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBalance", function() { return updateBalance; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateCurrentUser = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUser');
const updateCurrentUserAvatar = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUserAvatar');
const updateCurrentUserCover = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUserCover');
const {
  updateUser,
  updateUserSuccess,
  updateUserFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updateUser', 'UPDATE_USER');
const {
  updatePerformer
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updatePerformer', 'UPDATE_PERFORMER');
const setUpdating = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingUser');
const {
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updatePassword', 'UPDATE_PASSWORD');
const updateBalance = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateBalance');

/***/ }),

/***/ "./src/redux/user/reducers.ts":
/*!************************************!*\
  !*** ./src/redux/user/reducers.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/redux/user/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {
  current: {
    _id: null,
    avatar: '/static/no-avatar.png',
    cover: null,
    name: '',
    email: ''
  },
  error: null,
  updateSuccess: false,
  updating: false
};
const userReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentUser"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentUserAvatar"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: _objectSpread(_objectSpread({}, state.current), {}, {
        avatar: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentUserCover"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: _objectSpread(_objectSpread({}, state.current), {}, {
        cover: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateUserSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: data.payload,
      updateSuccess: true,
      error: null
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateUserFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updateUser: null,
      updateSuccess: false,
      error: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setUpdating"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updating: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updatePasswordSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updateSuccess: true,
      updatedPassword: data.payload,
      error: null
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updatePasswordFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updateSuccess: false,
      updatedPassword: null,
      error: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateBalance"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      token
    } = data.payload;
    nextState.current.balance += token;
    return _objectSpread({}, nextState);
  }

}, {
  on: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"],

  reducer() {
    return _objectSpread({}, initialState);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('user', [userReducers], initialState)));

/***/ }),

/***/ "./src/redux/user/sagas.ts":
/*!*********************************!*\
  !*** ./src/redux/user/sagas.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/user/actions.ts");






const userSagas = [// TODO - defind update current user or get from auth user info to reload current user data if needed
{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updateUser"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setUpdating"])(true));
      const updated = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["userService"].updateMe(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updateUserSuccess"])(updated.data));
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Changes saved');
    } catch (e) {
      // TODO - alert error
      const error = yield Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Error occured, please try again later');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updateUserFail"])(error));
    } finally {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setUpdating"])(false));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformer"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setUpdating"])(true));
      const updated = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["performerService"].updateMe(data.payload._id, data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updateUserSuccess"])(updated.data));
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Changes saved');
    } catch (e) {
      // TODO - alert error
      const error = yield Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Error occured, please try again later');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updateUserFail"])(error));
    } finally {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setUpdating"])(false));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updatePassword"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setUpdating"])(true));
      const updated = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["authService"].updatePassword(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePasswordSuccess"])(updated.data));
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Changes saved');
    } catch (e) {
      // TODO - alert error
      const error = yield Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Error occured, please try again later');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePasswordFail"])(error));
    } finally {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setUpdating"])(false));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(userSagas)]));

/***/ }),

/***/ "./src/redux/video/actions.ts":
/*!************************************!*\
  !*** ./src/redux/video/actions.ts ***!
  \************************************/
/*! exports provided: getVideos, getVideosSuccess, getVideosFail, getVods, getVodsSuccess, getVodsFail, moreVideo, moreVideoSuccess, moreVideoFail, moreVod, moreVodSuccess, moreVodFail, getRelated, getRelatedSuccess, getRelatedFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideos", function() { return getVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideosSuccess", function() { return getVideosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideosFail", function() { return getVideosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVods", function() { return getVods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVodsSuccess", function() { return getVodsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVodsFail", function() { return getVodsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreVideo", function() { return moreVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreVideoSuccess", function() { return moreVideoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreVideoFail", function() { return moreVideoFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreVod", function() { return moreVod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreVodSuccess", function() { return moreVodSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreVodFail", function() { return moreVodFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelated", function() { return getRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedSuccess", function() { return getRelatedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedFail", function() { return getRelatedFail; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getVideos,
  getVideosSuccess,
  getVideosFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getVideos', 'GET_VIDEOS');
const {
  getVods,
  getVodsSuccess,
  getVodsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getVods', 'GET_VODS');
const {
  moreVideo,
  moreVideoSuccess,
  moreVideoFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('moreVideo', 'LOAD_MORE');
const {
  moreVod,
  moreVodSuccess,
  moreVodFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('moreVod', 'MORE_VOD');
const {
  getRelated,
  getRelatedSuccess,
  getRelatedFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getRelated', 'GET_RELATED');

/***/ }),

/***/ "./src/redux/video/reducers.ts":
/*!*************************************!*\
  !*** ./src/redux/video/reducers.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/video/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  videos: {
    requesting: false,
    error: null,
    success: false,
    items: [],
    total: 0
  },
  saleVideos: {
    requesting: false,
    error: null,
    success: false,
    items: [],
    total: 0
  },
  relatedVideos: {
    requesting: false,
    error: null,
    success: false,
    items: [],
    total: 0
  }
};
const videoReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getVideos"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      videos: _objectSpread(_objectSpread({}, state.videos), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getVideosSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      videos: {
        requesting: false,
        items: data.payload.data,
        total: data.payload.total,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getVideosFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      videos: _objectSpread(_objectSpread({}, state.videos), {}, {
        requesting: false,
        error: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreVideo"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      videos: _objectSpread(_objectSpread({}, state.videos), {}, {
        requesting: true,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreVideoSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      videos: {
        requesting: false,
        total: data.payload.total,
        items: [...state.videos.items, ...data.payload.data],
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreVideoFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      videos: _objectSpread(_objectSpread({}, state.videos), {}, {
        requesting: false,
        error: data.payload,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getVods"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      saleVideos: _objectSpread(_objectSpread({}, state.saleVideos), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getVodsSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      saleVideos: {
        requesting: false,
        items: data.payload.data,
        total: data.payload.total,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getVodsFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      saleVideos: _objectSpread(_objectSpread({}, state.saleVideos), {}, {
        requesting: false,
        error: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreVod"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      saleVideos: _objectSpread(_objectSpread({}, state.saleVideos), {}, {
        requesting: true,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreVodSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      saleVideos: {
        requesting: false,
        total: data.payload.total,
        items: [...state.saleVideos.items, ...data.payload.data],
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["moreVodFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      saleVideos: _objectSpread(_objectSpread({}, state.saleVideos), {}, {
        requesting: false,
        error: data.payload,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getRelated"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      relatedVideos: _objectSpread(_objectSpread({}, state.videos), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getRelatedSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      relatedVideos: {
        requesting: false,
        items: data.payload.data,
        total: data.payload.total,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getRelatedFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      relatedVideos: _objectSpread(_objectSpread({}, state.videos), {}, {
        requesting: false,
        error: data.payload
      })
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('video', [videoReducers], initialState)));

/***/ }),

/***/ "./src/redux/video/sagas.ts":
/*!**********************************!*\
  !*** ./src/redux/video/sagas.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/video/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const videoSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getVideos"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["videoService"].userSearch(_objectSpread({}, data.payload));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getVideosSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getVideosFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["moreVideo"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["videoService"].userSearch(_objectSpread({}, data.payload));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreVideoSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["moreVideoFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getRelated"],

  *worker(data) {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["videoService"].userSearch(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getRelatedSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getRelatedFail"])(error));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(videoSagas)]));

/***/ }),

/***/ "./src/redux/withReduxSaga.ts":
/*!************************************!*\
  !*** ./src/redux/withReduxSaga.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/redux/store.ts");
/* eslint-disable func-names */



/* harmony default export */ __webpack_exports__["default"] = (function (BaseComponent) {
  return next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default()(_store__WEBPACK_IMPORTED_MODULE_2__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent));
});

/***/ }),

/***/ "./src/services/api-request.ts":
/*!*************************************!*\
  !*** ./src/services/api-request.ts ***!
  \*************************************/
/*! exports provided: TOKEN, APIRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIRequest", function() { return APIRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const TOKEN = "token";
class APIRequest {
  setAuthHeaderToken(token) {
    APIRequest.token = token;
  }
  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON from the request
   */


  parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }

    return response.json();
  }
  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */


  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    if (response.status === 401) {
      if (false) {}

      throw new Error("Please login!");
    } // const error = new Error(response.statusText) as any;
    // error.response = response;
    // throw error;


    throw response.clone().json();
  }

  request(url, method, body, headers) {
    const verb = (method || "get").toUpperCase();

    const updatedHeader = _objectSpread({
      "Content-Type": "application/json",
      Authorization: APIRequest.token || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN) || null
    }, headers || {});

    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    const baseUrl = config.API_ENDPOINT || config.NEXT_PUBLIC_API_ENDPOINT || "https://api.my.foodiefans.io";
    const apiUrl = Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${baseUrl}${url.startsWith("/") ? url : `/${url}`}`;
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(apiUrl, {
      method: verb,
      headers: updatedHeader,
      body: body ? JSON.stringify(body) : null
    }).then(this.checkStatus).then(this.parseJSON);
  }

  buildUrl(baseUrl, params) {
    if (!params) {
      return baseUrl;
    }

    const queryString = Object.keys(params).map(k => {
      if (Array.isArray(params[k])) {
        return params[k].map(param => `${encodeURIComponent(k)}=${encodeURIComponent(param)}`).join("&");
      }

      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
    }).join("&");
    return `${baseUrl}?${queryString}`;
  }

  get(url, headers) {
    return this.request(url, "get", null, headers);
  }

  post(url, data, headers) {
    return this.request(url, "post", data, headers);
  }

  put(url, data, headers) {
    return this.request(url, "put", data, headers);
  }

  del(url, data, headers) {
    return this.request(url, "delete", data, headers);
  }

  upload(url, files, options = {
    onProgress() {},

    method: "POST"
  }) {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    const uploadUrl = Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${config.API_ENDPOINT || config.NEXT_PUBLIC_API_ENDPOINT}${url}`;
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener("load", () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener("error", () => {
        reject(req.response);
      });
      const formData = new FormData();
      files.forEach(f => formData.append(f.fieldname, f.file, f.file.name));
      options.customData && Object.keys(options.customData).forEach(fieldname => {
        if (typeof options.customData[fieldname] !== "undefined" && !Array.isArray(options.customData[fieldname])) formData.append(fieldname, options.customData[fieldname]);

        if (typeof options.customData[fieldname] !== "undefined" && Array.isArray(options.customData[fieldname])) {
          if (options.customData[fieldname].length) {
            for (let i = 0; i < options.customData[fieldname].length; i += 1) {
              formData.append(fieldname, options.customData[fieldname][i]);
            }
          }
        }
      });
      req.responseType = "json";
      req.open(options.method || "POST", uploadUrl);
      const token = APIRequest.token || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);
      req.setRequestHeader("Authorization", token || "");
      req.send(formData);
    });
  }

}

_defineProperty(APIRequest, "token", "");

/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService, authService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return authService; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class AuthService extends _api_request__WEBPACK_IMPORTED_MODULE_1__["APIRequest"] {
  async login(data) {
    return this.post('/auth/login', data);
  }

  async loginTwitter() {
    return this.get(this.buildUrl('/auth/twitter/login'));
  }

  async loginGoogle(data) {
    return this.post('/auth/google/login', data);
  }

  async callbackLoginTwitter(data) {
    return this.get(this.buildUrl('/auth/twitter/callback', data));
  }

  async verifyEmail(data) {
    return this.post('/auth/email-verification', data);
  }

  setToken(token, remember = true) {
    const expired = {
      expires: !remember ? 1 : 365
    };
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"], token, expired);
    this.setAuthHeaderToken(token);
  }

  getToken() {
    return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
  }

  setTwitterToken(data, role) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('oauthToken', data.oauthToken, {
      expires: 1
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('oauthTokenSecret', data.oauthTokenSecret, {
      expires: 1
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('role', role, {
      expires: 1
    });
  }

  getTwitterToken() {
    const oauthToken = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('oauthToken');
    const oauthTokenSecret = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('oauthTokenSecret');
    const role = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('role');
    return {
      oauthToken,
      oauthTokenSecret,
      role
    };
  }

  removeToken() {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
  }

  updatePassword(password, source) {
    return this.put('/auth/users/me/password', {
      password,
      source
    });
  }

  resetPassword(data) {
    return this.post('/auth/users/forgot', data);
  }

  register(data) {
    return this.post('/auth/users/register', data);
  }

  registerPerformer(documents, data, onProgress) {
    return this.upload('/auth/performers/register', documents, {
      onProgress,
      customData: data
    });
  }

  userSwitchToPerformer(userId) {
    return this.post(`/auth/users/${userId}/switch-to-performer`);
  }

}
const authService = new AuthService();

/***/ }),

/***/ "./src/services/banner.service.ts":
/*!****************************************!*\
  !*** ./src/services/banner.service.ts ***!
  \****************************************/
/*! exports provided: BannerService, bannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerService", function() { return bannerService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class BannerService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/site-promo/search', query));
  }

}
const bannerService = new BannerService();

/***/ }),

/***/ "./src/services/block.service.ts":
/*!***************************************!*\
  !*** ./src/services/block.service.ts ***!
  \***************************************/
/*! exports provided: BlockService, blockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockService", function() { return BlockService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockService", function() { return blockService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class BlockService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  blockCountries(payload) {
    return this.post('/performer-blocks/countries', payload);
  }

  blockUser(payload) {
    return this.post('/performer-blocks/user', payload);
  }

  unBlockUser(id) {
    this.del(`/performer-blocks/user/${id}`);
  }

  getBlockListUsers(query) {
    return this.get(this.buildUrl('/performer-blocks/users', query));
  }

  checkCountryBlock() {
    return this.get('/country-block/check');
  }

}
const blockService = new BlockService();

/***/ }),

/***/ "./src/services/cart.service.ts":
/*!**************************************!*\
  !*** ./src/services/cart.service.ts ***!
  \**************************************/
/*! exports provided: CartService, cartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartService", function() { return cartService; });
class CartService {
  getCartByUser(userId) {
    let existCart = localStorage.getItem(`cart_${userId}`);
    existCart = existCart && existCart.length ? JSON.parse(existCart) : [];
    return existCart;
  }

}
const cartService = new CartService();

/***/ }),

/***/ "./src/services/comment.service.ts":
/*!*****************************************!*\
  !*** ./src/services/comment.service.ts ***!
  \*****************************************/
/*! exports provided: CommentService, commentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentService", function() { return commentService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class CommentService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(payload) {
    return this.post('/comments', payload);
  }

  update(id, payload) {
    return this.upload(`/comments/${id}`, payload);
  }

  search(query) {
    return this.get(this.buildUrl('/comments/search', query));
  }

  delete(id) {
    return this.del(`/comments/${id}`);
  }

}
const commentService = new CommentService();

/***/ }),

/***/ "./src/services/config.ts":
/*!********************************!*\
  !*** ./src/services/config.ts ***!
  \********************************/
/*! exports provided: setGlobalConfig, getGlobalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalConfig", function() { return setGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalConfig", function() { return getGlobalConfig; });
let globalConfig = {};
const setGlobalConfig = config => {
  globalConfig = config;
};
const getGlobalConfig = () => globalConfig;

/***/ }),

/***/ "./src/services/cookies.service.ts":
/*!*****************************************!*\
  !*** ./src/services/cookies.service.ts ***!
  \*****************************************/
/*! exports provided: CookieService, cookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookieService", function() { return cookieService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class CookieService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  setCookie(cname, cvalue, exTime) {
    const d = new Date();
    d.setTime(d.getTime() + exTime * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }

    return '';
  }

}
const cookieService = new CookieService();

/***/ }),

/***/ "./src/services/earning.service.ts":
/*!*****************************************!*\
  !*** ./src/services/earning.service.ts ***!
  \*****************************************/
/*! exports provided: EarningService, earningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningService", function() { return EarningService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earningService", function() { return earningService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class EarningService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  performerStarts(param) {
    return this.get(this.buildUrl('/earning/performer/stats', param));
  }

  performerSearch(param) {
    return this.get(this.buildUrl('/earning/performer/search', param));
  }

}
const earningService = new EarningService();

/***/ }),

/***/ "./src/services/feed.service.ts":
/*!**************************************!*\
  !*** ./src/services/feed.service.ts ***!
  \**************************************/
/*! exports provided: FeedService, feedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedService", function() { return feedService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class FeedService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/feeds/performers', query));
  }

  userSearch(query) {
    return this.get(this.buildUrl('/feeds/users', query));
  }

  userHomeFeeds(query) {
    return this.get(this.buildUrl('/feeds/users/home-feeds', query));
  }

  delete(id) {
    return this.del(`/feeds/performers/${id}`);
  }

  findById(id, headers) {
    return this.get(`/feeds/performers/${id}`, headers);
  }

  findOne(id, headers) {
    return this.get(`/feeds/users/${id}`, headers);
  }

  update(id, payload) {
    return this.put(`/feeds/performers/${id}`, payload);
  }

  create(data) {
    return this.post('/feeds/performers', data);
  }

  uploadPhoto(file, payload, onProgress) {
    return this.upload('/feeds/performers/photo/upload', [{
      fieldname: 'file',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

  uploadThumbnail(file, payload, onProgress) {
    return this.upload('/feeds/performers/thumbnail/upload', [{
      fieldname: 'file',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

  uploadVideo(file, payload, onProgress) {
    return this.upload('/feeds/performers/video/upload', [{
      fieldname: 'file',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

  uploadTeaser(file, payload, onProgress) {
    return this.upload('/feeds/performers/teaser/upload', [{
      fieldname: 'file',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

  addPoll(payload) {
    return this.post('/feeds/performers/polls', payload);
  }

  votePoll(pollId) {
    return this.post(`/feeds/users/vote/${pollId}`);
  }

  getBookmark(payload) {
    return this.get(this.buildUrl('/reactions/feeds/bookmark', payload));
  }

}
const feedService = new FeedService();

/***/ }),

/***/ "./src/services/follow.service.ts":
/*!****************************************!*\
  !*** ./src/services/follow.service.ts ***!
  \****************************************/
/*! exports provided: followService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followService", function() { return followService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class FollowService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(id) {
    return this.post(`/follows/${id}`);
  }

  delete(id) {
    return this.del(`/follows/${id}`);
  }

  getFollowers(req) {
    return this.get(this.buildUrl('/follows/followers', req));
  }

  getFollowing(req) {
    return this.get(this.buildUrl('/follows/following', req));
  }

}

const followService = new FollowService();

/***/ }),

/***/ "./src/services/gallery.service.ts":
/*!*****************************************!*\
  !*** ./src/services/gallery.service.ts ***!
  \*****************************************/
/*! exports provided: galleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryService", function() { return galleryService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class GalleryService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(payload) {
    return this.post('/performer/performer-assets/galleries', payload);
  }

  search(param) {
    return this.get(this.buildUrl('/performer/performer-assets/galleries/search', param));
  }

  userSearch(param) {
    return this.get(this.buildUrl('/user/performer-assets/galleries/search', param));
  }

  update(id, payload) {
    return this.put(`/performer/performer-assets/galleries/${id}`, payload);
  }

  findById(id) {
    return this.get(`/performer/performer-assets/galleries/${id}/view`);
  }

  userViewDetails(id, headers) {
    return this.get(`/user/performer-assets/galleries/${id}/view`, headers);
  }

  delete(id) {
    return this.del(`/performer/performer-assets/galleries/${id}`);
  }

  getBookmarks(payload) {
    return this.get(this.buildUrl('/reactions/galleries/bookmark', payload));
  }

}

const galleryService = new GalleryService();

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: AuthService, authService, UserService, userService, FeedService, feedService, PerformerService, performerService, ProductService, productService, CommentService, commentService, ReactionService, reactionService, PaymentService, paymentService, UtilsService, utilsService, BannerService, bannerService, EarningService, earningService, CartService, cartService, MessageService, messageService, subscriptionService, OrderService, orderService, SettingService, settingService, PostService, postService, streamService, SearchService, searchService, VideoService, videoService, galleryService, TokenPackageService, tokenPackageService, PhotoService, photoService, TokenTransctionService, tokenTransctionService, payoutRequestService, BlockService, blockService, ReportService, reportService, CookieService, cookieService, ShippingAddressService, shippingAddressService, followService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["authService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["userService"]; });

/* harmony import */ var _feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed.service */ "./src/services/feed.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return _feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedService", function() { return _feed_service__WEBPACK_IMPORTED_MODULE_2__["feedService"]; });

/* harmony import */ var _performer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./performer.service */ "./src/services/performer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformerService", function() { return _performer_service__WEBPACK_IMPORTED_MODULE_3__["PerformerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performerService", function() { return _performer_service__WEBPACK_IMPORTED_MODULE_3__["performerService"]; });

/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.service */ "./src/services/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_4__["productService"]; });

/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment.service */ "./src/services/comment.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return _comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commentService", function() { return _comment_service__WEBPACK_IMPORTED_MODULE_5__["commentService"]; });

/* harmony import */ var _reaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reaction.service */ "./src/services/reaction.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactionService", function() { return _reaction_service__WEBPACK_IMPORTED_MODULE_6__["ReactionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactionService", function() { return _reaction_service__WEBPACK_IMPORTED_MODULE_6__["reactionService"]; });

/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment.service */ "./src/services/payment.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return _payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentService", function() { return _payment_service__WEBPACK_IMPORTED_MODULE_7__["paymentService"]; });

/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.service */ "./src/services/utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_8__["utilsService"]; });

/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner.service */ "./src/services/banner.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_9__["BannerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_9__["bannerService"]; });

/* harmony import */ var _earning_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./earning.service */ "./src/services/earning.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EarningService", function() { return _earning_service__WEBPACK_IMPORTED_MODULE_10__["EarningService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "earningService", function() { return _earning_service__WEBPACK_IMPORTED_MODULE_10__["earningService"]; });

/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart.service */ "./src/services/cart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return _cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cartService", function() { return _cart_service__WEBPACK_IMPORTED_MODULE_11__["cartService"]; });

/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./message.service */ "./src/services/message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_12__["messageService"]; });

/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subscription.service */ "./src/services/subscription.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscriptionService", function() { return _subscription_service__WEBPACK_IMPORTED_MODULE_13__["subscriptionService"]; });

/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order.service */ "./src/services/order.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_14__["OrderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_14__["orderService"]; });

/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./setting.service */ "./src/services/setting.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return _setting_service__WEBPACK_IMPORTED_MODULE_15__["SettingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return _setting_service__WEBPACK_IMPORTED_MODULE_15__["settingService"]; });

/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post.service */ "./src/services/post.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return _post_service__WEBPACK_IMPORTED_MODULE_16__["PostService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postService", function() { return _post_service__WEBPACK_IMPORTED_MODULE_16__["postService"]; });

/* harmony import */ var _stream_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stream.service */ "./src/services/stream.service.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "streamService", function() { return _stream_service__WEBPACK_IMPORTED_MODULE_17__["streamService"]; });

/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search.service */ "./src/services/search.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return _search_service__WEBPACK_IMPORTED_MODULE_18__["SearchService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchService", function() { return _search_service__WEBPACK_IMPORTED_MODULE_18__["searchService"]; });

/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./video.service */ "./src/services/video.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return _video_service__WEBPACK_IMPORTED_MODULE_19__["VideoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "videoService", function() { return _video_service__WEBPACK_IMPORTED_MODULE_19__["videoService"]; });

/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gallery.service */ "./src/services/gallery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "galleryService", function() { return _gallery_service__WEBPACK_IMPORTED_MODULE_20__["galleryService"]; });

/* harmony import */ var _token_package_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./token-package.service */ "./src/services/token-package.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenPackageService", function() { return _token_package_service__WEBPACK_IMPORTED_MODULE_21__["TokenPackageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenPackageService", function() { return _token_package_service__WEBPACK_IMPORTED_MODULE_21__["tokenPackageService"]; });

/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./photo.service */ "./src/services/photo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return _photo_service__WEBPACK_IMPORTED_MODULE_22__["PhotoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "photoService", function() { return _photo_service__WEBPACK_IMPORTED_MODULE_22__["photoService"]; });

/* harmony import */ var _token_transaction_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./token-transaction.service */ "./src/services/token-transaction.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenTransctionService", function() { return _token_transaction_service__WEBPACK_IMPORTED_MODULE_23__["TokenTransctionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenTransctionService", function() { return _token_transaction_service__WEBPACK_IMPORTED_MODULE_23__["tokenTransctionService"]; });

/* harmony import */ var _payout_request_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./payout-request.service */ "./src/services/payout-request.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "payoutRequestService", function() { return _payout_request_service__WEBPACK_IMPORTED_MODULE_24__["payoutRequestService"]; });

/* harmony import */ var _block_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./block.service */ "./src/services/block.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockService", function() { return _block_service__WEBPACK_IMPORTED_MODULE_25__["BlockService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockService", function() { return _block_service__WEBPACK_IMPORTED_MODULE_25__["blockService"]; });

/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./report.service */ "./src/services/report.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return _report_service__WEBPACK_IMPORTED_MODULE_26__["ReportService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportService", function() { return _report_service__WEBPACK_IMPORTED_MODULE_26__["reportService"]; });

/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cookies.service */ "./src/services/cookies.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return _cookies_service__WEBPACK_IMPORTED_MODULE_27__["CookieService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cookieService", function() { return _cookies_service__WEBPACK_IMPORTED_MODULE_27__["cookieService"]; });

/* harmony import */ var _shipping_address_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shipping-address.service */ "./src/services/shipping-address.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressService", function() { return _shipping_address_service__WEBPACK_IMPORTED_MODULE_28__["ShippingAddressService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shippingAddressService", function() { return _shipping_address_service__WEBPACK_IMPORTED_MODULE_28__["shippingAddressService"]; });

/* harmony import */ var _follow_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./follow.service */ "./src/services/follow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followService", function() { return _follow_service__WEBPACK_IMPORTED_MODULE_29__["followService"]; });
































/***/ }),

/***/ "./src/services/message.service.ts":
/*!*****************************************!*\
  !*** ./src/services/message.service.ts ***!
  \*****************************************/
/*! exports provided: MessageService, messageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageService", function() { return messageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");


class MessageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  getConversations(query) {
    return this.get(this.buildUrl('/conversations', query));
  }

  searchConversations(query) {
    return this.get(this.buildUrl('/conversations/search', query));
  }

  createConversation(data) {
    return this.post('/conversations', data);
  }

  getConversationDetail(id) {
    return this.get(`/conversations/${id}`);
  }

  getMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/${conversationId}`, query));
  }

  sendMessage(conversationId, data) {
    return this.post(`/messages/conversations/${conversationId}`, data);
  }

  countTotalNotRead() {
    return this.get('/messages/counting-not-read-messages');
  }

  readAllInConversation(conversationId) {
    return this.post(`/messages/read-all/${conversationId}`);
  }

  getMessageUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/messages/private/file`;
  }

  getConversationByStreamId(streamId) {
    return this.get(`/conversations/stream/${streamId}`);
  }

  getPublicMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/public/${conversationId}`, query));
  }

  sendStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/conversations/${conversationId}`, data);
  }

  sendPublicStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/public/conversations/${conversationId}`, data);
  }

  findPublicConversationPerformer(performerId) {
    return this.get(`/conversations/stream/public/${performerId}`);
  }

  deleteMessage(id) {
    return this.del(`/messages/${id}`);
  }

  deleteAllMessageInConversation(conversationId) {
    return this.del(`/messages/${conversationId}/remove-all-message`);
  }

  updateConversationName(conversationId, data) {
    return this.put(`/conversations/${conversationId}/update`, data);
  }

}
const messageService = new MessageService();

/***/ }),

/***/ "./src/services/order.service.ts":
/*!***************************************!*\
  !*** ./src/services/order.service.ts ***!
  \***************************************/
/*! exports provided: OrderService, orderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderService", function() { return orderService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class OrderService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  performerSearch(payload) {
    return this.get(this.buildUrl('/orders/search', payload));
  }

  userSearch(payload) {
    return this.get(this.buildUrl('/orders/users/search', payload));
  }

  findById(id) {
    return this.get(`/orders/${id}`);
  }

  update(id, data) {
    return this.put(`/orders/${id}/update`, data);
  }

  updateDeliveryAddress(id, data) {
    return this.put(`/orders/${id}/update/delivery-address`, data);
  }

  getDownloadLinkDigital(productId) {
    return this.get(`/user/performer-assets/products/${productId}/download-link`);
  }

}
const orderService = new OrderService();

/***/ }),

/***/ "./src/services/payment.service.ts":
/*!*****************************************!*\
  !*** ./src/services/payment.service.ts ***!
  \*****************************************/
/*! exports provided: PaymentService, paymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentService", function() { return paymentService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PaymentService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  subscribePerformer(payload) {
    return this.post('/payment/subscribe/performers', payload);
  }

  userSearch(payload) {
    return this.get(this.buildUrl('/transactions/user/search', payload));
  }

  addFunds(payload) {
    return this.post('/payment/wallet/top-up', payload);
  }

  applyCoupon(code) {
    return this.post(`/coupons/${code}/apply-coupon`);
  }

  connectStripeAccount() {
    return this.post('/stripe/accounts');
  }

  getStripeCards() {
    return this.get('/stripe/user/cards');
  }

  addStripeCard(payload) {
    return this.post('/stripe/user/cards', payload);
  }

  removeStripeCard(id) {
    return this.del(`/stripe/user/cards/${id}`);
  }

  retrieveStripeAccount() {
    return this.get('/stripe/accounts/me');
  }

  loginLink() {
    return this.get('/stripe/accounts/me/login-link');
  }

}
const paymentService = new PaymentService();

/***/ }),

/***/ "./src/services/payout-request.service.ts":
/*!************************************************!*\
  !*** ./src/services/payout-request.service.ts ***!
  \************************************************/
/*! exports provided: payoutRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payoutRequestService", function() { return payoutRequestService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class PayoutRequestService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  calculate() {
    return this.post('/payout-requests/performer/calculate');
  }

  search(query) {
    return this.get(this.buildUrl('/payout-requests/performer/search', query));
  }

  create(body) {
    return this.post('/payout-requests/performer', body);
  }

  update(id, body) {
    return this.put(`/payout-requests/performer/${id}`, body);
  }

  detail(id, headers) {
    return this.get(`/payout-requests/performer/${id}/view`, headers);
  }

}

const payoutRequestService = new PayoutRequestService();

/***/ }),

/***/ "./src/services/performer.service.ts":
/*!*******************************************!*\
  !*** ./src/services/performer.service.ts ***!
  \*******************************************/
/*! exports provided: PerformerService, performerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformerService", function() { return PerformerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerService", function() { return performerService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");


class PerformerService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/performers/user/search', query));
  }

  randomSearch(query) {
    return this.get(this.buildUrl('/performers/search/random', query));
  }

  me(headers) {
    return this.get('/performers/me', headers);
  }

  findOne(id, headers) {
    return this.get(`/performers/${id}`, headers);
  }

  getAvatarUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/avatar/upload`;
  }

  getCoverUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/cover/upload`;
  }

  getVideoUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/welcome-video/upload`;
  }

  getDocumentUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/documents/upload`;
  }

  updateMe(id, payload) {
    return this.put(`/performers/${id}`, payload);
  }

  getTopPerformer(query) {
    return this.get(this.buildUrl('/performers/top', query));
  }

  updateBanking(id, payload) {
    return this.put(`/performers/${id}/banking-settings`, payload);
  }

  updatePaymentGateway(id, payload) {
    return this.put(`/performers/${id}/payment-gateway-settings`, payload);
  }

  getBookmarked(payload) {
    return this.get(this.buildUrl('/reactions/performers/bookmark', payload));
  }

  uploadDocuments(documents, onProgress) {
    return this.upload('/performers/documents/upload', documents, {
      onProgress
    });
  }

}
const performerService = new PerformerService();

/***/ }),

/***/ "./src/services/photo.service.ts":
/*!***************************************!*\
  !*** ./src/services/photo.service.ts ***!
  \***************************************/
/*! exports provided: PhotoService, photoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photoService", function() { return photoService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PhotoService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  searchByUser(query) {
    const {
      performerId
    } = query;
    return this.get(this.buildUrl(`/user/performer-assets/photos/${performerId}`, query));
  }

  searchByPerformer(query) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', query));
  }

  update(id, payload) {
    return this.put(`/performer/performer-assets/photos/${id}`, payload);
  }

  setCoverGallery(id) {
    return this.post(`/performer/performer-assets/photos/set-cover/${id}`);
  }

  delete(id) {
    return this.del(`/performer/performer-assets/photos/${id}`);
  }

  uploadImages(file, payload, onProgress) {
    return this.upload('/performer/performer-assets/photos/upload', [{
      fieldname: 'photo',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

  searchPhotosInGallery(payload) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', payload));
  }

  userSearch(payload) {
    return this.get(this.buildUrl('/user/performer-assets/photos', payload));
  }

}
const photoService = new PhotoService();

/***/ }),

/***/ "./src/services/post.service.ts":
/*!**************************************!*\
  !*** ./src/services/post.service.ts ***!
  \**************************************/
/*! exports provided: PostService, postService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postService", function() { return postService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PostService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/posts/search', query));
  }

  findById(id) {
    return this.get(`/posts/${id}`);
  }

}
const postService = new PostService();

/***/ }),

/***/ "./src/services/product.service.ts":
/*!*****************************************!*\
  !*** ./src/services/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProductService, productService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return productService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class ProductService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  createProduct(files, payload, onProgress) {
    return this.upload('/performer/performer-assets/products', files, {
      onProgress,
      customData: payload
    });
  }

  update(id, files, payload, onProgress) {
    return this.upload(`/performer/performer-assets/products/${id}`, files, {
      onProgress,
      customData: payload,
      method: 'PUT'
    });
  }

  search(query) {
    return this.get(this.buildUrl('/performer/performer-assets/products/search', query));
  }

  userSearch(query) {
    return this.get(this.buildUrl('/user/performer-assets/products/search', query));
  }

  userView(productId, headers) {
    return this.get(`/user/performer-assets/products/${productId}`, headers);
  }

  findById(id) {
    return this.get(`/performer/performer-assets/products/${id}/view`);
  }

  delete(id) {
    return this.del(`/performer/performer-assets/products/${id}`);
  }

  getBookmarked(payload) {
    return this.get(this.buildUrl('/reactions/products/bookmark', payload));
  }

}
const productService = new ProductService();

/***/ }),

/***/ "./src/services/reaction.service.ts":
/*!******************************************!*\
  !*** ./src/services/reaction.service.ts ***!
  \******************************************/
/*! exports provided: ReactionService, reactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactionService", function() { return ReactionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactionService", function() { return reactionService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class ReactionService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(payload) {
    return this.post('/reactions', payload);
  }

  delete(payload) {
    return this.del('/reactions', payload);
  }

  search(query) {
    return this.get(this.buildUrl('/reactions/search', query));
  }

}
const reactionService = new ReactionService();

/***/ }),

/***/ "./src/services/report.service.ts":
/*!****************************************!*\
  !*** ./src/services/report.service.ts ***!
  \****************************************/
/*! exports provided: ReportService, reportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportService", function() { return reportService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class ReportService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(payload) {
    return this.post('/reports', payload);
  }

}
const reportService = new ReportService();

/***/ }),

/***/ "./src/services/search.service.ts":
/*!****************************************!*\
  !*** ./src/services/search.service.ts ***!
  \****************************************/
/*! exports provided: SearchService, searchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchService", function() { return searchService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class SearchService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  searchByKeyword(payload) {
    return this.post('/search/keywords', payload);
  }

  listByKeyword(query) {
    return this.get(this.buildUrl('/search/list/keywords', query));
  }

}
const searchService = new SearchService();

/***/ }),

/***/ "./src/services/setting.service.ts":
/*!*****************************************!*\
  !*** ./src/services/setting.service.ts ***!
  \*****************************************/
/*! exports provided: SettingService, settingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return settingService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class SettingService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_settings", {});
  }

  async all(group = '', forceReload = false) {
    const settingGroup = group || 'all';

    if (this._settings[settingGroup] && !forceReload) {
      return this._settings[settingGroup];
    }

    const resp = await this.get(this.buildUrl('/settings/public', {
      group
    }));
    this._settings[settingGroup] = resp;
    return resp;
  }

  contact(data) {
    return this.post('/contact', data);
  }

}
const settingService = new SettingService();

/***/ }),

/***/ "./src/services/shipping-address.service.ts":
/*!**************************************************!*\
  !*** ./src/services/shipping-address.service.ts ***!
  \**************************************************/
/*! exports provided: ShippingAddressService, shippingAddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressService", function() { return ShippingAddressService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shippingAddressService", function() { return shippingAddressService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class ShippingAddressService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(payload) {
    return this.post('/addresses/create', payload);
  }

  update(id, payload) {
    return this.upload(`/addresses/${id}`, payload);
  }

  search(query) {
    return this.get(this.buildUrl('/addresses/search', query));
  }

  delete(id) {
    return this.del(`/addresses/${id}`);
  }

}
const shippingAddressService = new ShippingAddressService();

/***/ }),

/***/ "./src/services/stream.service.tsx":
/*!*****************************************!*\
  !*** ./src/services/stream.service.tsx ***!
  \*****************************************/
/*! exports provided: streamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "streamService", function() { return streamService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class StreamService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  updateStreamInfo(payload) {
    return this.put('/streaming/update', payload);
  }

  updateStreamDuration(payload) {
    return this.put('/streaming/set-duration', payload);
  }

  goLive(data) {
    return this.post('/streaming/live', data);
  }

  editLive(id, data) {
    return this.put(`/streaming/live/${id}`, data);
  }

  joinPublicChat(performerId, headers) {
    return this.post(`/streaming/join/${performerId}`, headers);
  }

  fetchAgoraAppToken(data) {
    return this.post('/streaming/agora/token', data);
  }

  search(query) {
    return this.get(this.buildUrl('/streaming/user/search', query));
  }

}

const streamService = new StreamService();

/***/ }),

/***/ "./src/services/subscription.service.ts":
/*!**********************************************!*\
  !*** ./src/services/subscription.service.ts ***!
  \**********************************************/
/*! exports provided: subscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionService", function() { return subscriptionService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class SubscriptionService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/subscriptions/performer/search', query));
  }

  userSearch(query) {
    return this.get(this.buildUrl('/subscriptions/user/search', query));
  }

  cancelSubscription(id, gateway) {
    return this.post(`/payment/${gateway}/cancel-subscription/${id}`);
  }

}

const subscriptionService = new SubscriptionService();

/***/ }),

/***/ "./src/services/token-package.service.ts":
/*!***********************************************!*\
  !*** ./src/services/token-package.service.ts ***!
  \***********************************************/
/*! exports provided: TokenPackageService, tokenPackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPackageService", function() { return TokenPackageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenPackageService", function() { return tokenPackageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* eslint-disable linebreak-style */

/* eslint-disable indent */

class TokenPackageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/package/token/search', query));
  }

}
const tokenPackageService = new TokenPackageService();

/***/ }),

/***/ "./src/services/token-transaction.service.ts":
/*!***************************************************!*\
  !*** ./src/services/token-transaction.service.ts ***!
  \***************************************************/
/*! exports provided: TokenTransctionService, tokenTransctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenTransctionService", function() { return TokenTransctionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenTransctionService", function() { return tokenTransctionService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class TokenTransctionService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  sendTip(performerId, payload) {
    return this.post(`/wallet/charges/tip/${performerId}`, payload);
  }

  purchaseFeed(id, payload) {
    return this.post(`/wallet/charges/feed/${id}`, payload);
  }

  purchaseProduct(id, payload) {
    return this.post(`/wallet/charges/product/${id}`, payload);
  }

  purchaseVideo(id, payload) {
    return this.post(`/wallet/charges/video/${id}`, payload);
  }

  purchaseGallery(id, payload) {
    return this.post(`/wallet/charges/gallery/${id}`, payload);
  }

  purchaseMessage(id, payload) {
    return this.post(`/wallet/charges/message/${id}`, payload);
  }

  purchaseStream(id) {
    return this.post(`/wallet/charges/stream/${id}`);
  }

  userSearch(query) {
    return this.get(this.buildUrl('/wallet/charges/user/search', query));
  }

}
const tokenTransctionService = new TokenTransctionService();

/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService, userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return userService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");


class UserService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  me(headers) {
    return this.get('/users/me', headers);
  }

  updateMe(payload) {
    return this.put('/users', payload);
  }

  getAvatarUploadUrl(userId) {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();

    if (userId) {
      return `${config.NEXT_PUBLIC_API_ENDPOINT}/users/${userId}/avatar/upload`;
    }

    return `${config.NEXT_PUBLIC_API_ENDPOINT}/users/avatar/upload`;
  }

  search(query) {
    return this.get(this.buildUrl('/users/search', query));
  }

  findById(id) {
    return this.get(`/users/view/${id}`);
  }

}
const userService = new UserService();

/***/ }),

/***/ "./src/services/utils.service.ts":
/*!***************************************!*\
  !*** ./src/services/utils.service.ts ***!
  \***************************************/
/*! exports provided: UtilsService, utilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utilsService", function() { return utilsService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class UtilsService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_countries", []);
  }

  async countriesList() {
    if (this._countries.length) {
      return this._countries;
    }

    const resp = await this.get('/countries/list');
    this._countries = resp;
    return resp;
  }

  async statesList(countryCode) {
    return this.get(`/states/${countryCode}`);
  }

  async citiesList(countryCode, state) {
    return this.get(`/cities/${countryCode}/${state}`);
  }

  languagesList() {
    return this.get('/languages/list');
  }

  phoneCodesList() {
    return this.get('/phone-codes/list');
  }

  bodyInfo() {
    return this.get('/user-additional');
  }

  verifyRecaptcha(token) {
    return this.post('/re-captcha/verify', {
      token
    });
  }

}
const utilsService = new UtilsService();

/***/ }),

/***/ "./src/services/video.service.ts":
/*!***************************************!*\
  !*** ./src/services/video.service.ts ***!
  \***************************************/
/*! exports provided: VideoService, videoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoService", function() { return videoService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class VideoService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/performer/performer-assets/videos/search', query));
  }

  userSearch(query) {
    return this.get(this.buildUrl('/user/performer-assets/videos/search', query));
  }

  delete(id) {
    return this.del(`/performer/performer-assets/videos/${id}`);
  }

  findById(id, headers) {
    return this.get(`/performer/performer-assets/videos/${id}/view`, headers);
  }

  findOne(id, headers) {
    return this.get(`/user/performer-assets/videos/${id}`, headers);
  }

  update(id, files, payload, onProgress) {
    return this.upload(`/performer/performer-assets/videos/edit/${id}`, files, {
      onProgress,
      customData: payload,
      method: 'PUT'
    });
  }

  deleteFile(id, type) {
    return this.del(`/performer/performer-assets/videos/remove-file/${id}`, {
      type
    });
  }

  uploadVideo(files, payload, onProgress) {
    return this.upload('/performer/performer-assets/videos/upload', files, {
      onProgress,
      customData: payload
    });
  }

  getBookmarks(payload) {
    return this.get(this.buildUrl('/reactions/videos/bookmark', payload));
  }

}
const videoService = new VideoService();

/***/ }),

/***/ "./src/socket/Event.tsx":
/*!******************************!*\
  !*** ./src/socket/Event.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/socket/utils.ts");




class Event extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      event,
      handler
    } = this.props;
    const socket = this.context;

    if (!socket) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["warning"])('Socket IO connection has not been established.');
      return;
    }

    socket.on(event, handler);
  }

  componentWillUnmount() {
    const {
      event
    } = this.props;
    const socket = this.context;

    if (!socket) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["warning"])('Socket IO connection has not been established.');
      return;
    }

    socket.off(event);
  }

  render() {
    return false;
  }

}

Event.contextType = _SocketContext__WEBPACK_IMPORTED_MODULE_1__["SocketContext"];
/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/socket/Socket.tsx":
/*!*******************************!*\
  !*** ./src/socket/Socket.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/config */ "./src/services/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/socket/utils.ts");
/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Socket extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    this.connect();
  }

  shouldComponentUpdate(nextProps) {
    const {
      loggedIn
    } = this.props;

    if (nextProps.loggedIn !== loggedIn) {
      this.connect();
    }

    return true;
  }

  componentWillUnmount() {
    this.socket && this.socket.close();
  }

  login() {
    if (!this.socket) {
      return false;
    }

    const token = _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"].getToken();
    return this.socket.emit('auth/login', {
      token
    });
  }

  connect() {
    const token = _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"].getToken();

    if (true) {
      return;
    }

    const config = Object(_services_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    const {
      uri = config.NEXT_PUBLIC_SOCKET_ENDPOINT
    } = this.props;
    const options = {
      transports: ['websocket', 'polling', 'long-polling'],
      query: token ? `token=${token}` : ''
    };
    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(uri, this.mergeOptions(options));
    this.socket.status = 'initialized';
    this.socket.on('connect', () => {
      this.socket.status = 'connected';

      if (token) {
        this.login();
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('connected');
    });
    this.socket.on('disconnect', () => {
      this.socket.status = 'disconnected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('disconnect');
    });
    this.socket.on('error', err => {
      this.socket.status = 'failed';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["warning"])('error', err);
    });
    this.socket.on('reconnect', data => {
      this.socket.status = 'connected';

      if (token) {
        this.login();
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('reconnect', data);
    });
    this.socket.on('reconnect_attempt', () => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('reconnect_attempt');
    });
    this.socket.on('reconnecting', () => {
      this.socket.status = 'reconnecting';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('reconnecting');
    });
    this.socket.on('reconnect_failed', error => {
      this.socket.status = 'failed';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["warning"])('reconnect_failed', error);
    });
  }

  mergeOptions(options = {}) {
    const defaultOptions = {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1 * 1000,
      reconnectionDelayMax: 10 * 1000,
      autoConnect: true,
      transports: ['websocket', 'polling', 'long-polling'],
      rejectUnauthorized: true
    };
    return _objectSpread(_objectSpread({}, defaultOptions), options);
  }

  render() {
    const {
      children
    } = this.props;
    return __jsx(_SocketContext__WEBPACK_IMPORTED_MODULE_6__["SocketContext"].Provider, {
      value: this.socket
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children));
  }

}

const mapStates = state => ({
  loggedIn: state.auth.loggedIn
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStates, null)(Socket));

/***/ }),

/***/ "./src/socket/SocketContext.tsx":
/*!**************************************!*\
  !*** ./src/socket/SocketContext.tsx ***!
  \**************************************/
/*! exports provided: SocketContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketContext", function() { return SocketContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SocketContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])('socket');

/***/ }),

/***/ "./src/socket/index.ts":
/*!*****************************!*\
  !*** ./src/socket/index.ts ***!
  \*****************************/
/*! exports provided: Socket, Event, SocketContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socket */ "./src/socket/Socket.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return _Socket__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "./src/socket/Event.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _Event__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketContext", function() { return _SocketContext__WEBPACK_IMPORTED_MODULE_2__["SocketContext"]; });





if (false) {}



/***/ }),

/***/ "./src/socket/utils.ts":
/*!*****************************!*\
  !*** ./src/socket/utils.ts ***!
  \*****************************/
/*! exports provided: warning, debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* eslint-disable func-names */

/* eslint-disable prefer-spread */

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
const warning = function (...args) {
  // debug on development and staging.
  if (false) {}
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error.apply(console, args);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(args.join(' '));
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

};
const debug = function (...args) {
  // debug on development and staging.
  if (false) {}
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.debug === 'function') {
    console.debug.apply(console, args);
  }
};

/***/ }),

/***/ "./style/index.less":
/*!**************************!*\
  !*** ./style/index.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path-to-regexp":
/*!*********************************!*\
  !*** external "path-to-regexp" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Jhc2UtbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9ibGFuay1sYXlvdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2dlb0Jsb2NrZWQtbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9tYWludGVuYW5jZS1sYXlvdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3ByaW1hcnktbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9wdWJsaWMtbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlZHV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RvcmVIb2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2F1dGgvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aC9yZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aC9zYWdhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY2FydC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9jYXJ0L3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9jb21tZW50L2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2NvbW1lbnQvcmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2NvbW1lbnQvc2FnYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2ZlZWQvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvZmVlZC9yZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvZmVlZC9zYWdhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvZ2FsbGVyeS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9nYWxsZXJ5L3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9nYWxsZXJ5L3NhZ2FzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9tZXNzYWdlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L21lc3NhZ2UvcmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L21lc3NhZ2Uvc2FnYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3BlcmZvcm1lci9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9wZXJmb3JtZXIvcmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3BlcmZvcm1lci9zYWdhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcHJvZHVjdC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9wcm9kdWN0L3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9wcm9kdWN0L3NhZ2FzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yb290UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcm9vdFNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3NldHRpbmdzL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3NldHRpbmdzL3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RyZWFtLWNoYXQvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RyZWFtLWNoYXQvcmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0cmVhbS1jaGF0L3NhZ2FzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdHJlYW1pbmcvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RyZWFtaW5nL3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdWJzY3JpcHRpb24vYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3Vic2NyaXB0aW9uL3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91aS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91aS9yZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdXNlci9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91c2VyL3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91c2VyL3NhZ2FzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC92aWRlby9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC92aWRlby9yZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdmlkZW8vc2FnYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3dpdGhSZWR1eFNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Jhbm5lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9ibG9jay5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb29raWVzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Vhcm5pbmcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZmVlZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9mb2xsb3cuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2FsbGVyeS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9vcmRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wYXltZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BheW91dC1yZXF1ZXN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BlcmZvcm1lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9waG90by5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wb3N0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVhY3Rpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVwb3J0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3NoaXBwaW5nLWFkZHJlc3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RyZWFtLnNlcnZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdWJzY3JpcHRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdG9rZW4tcGFja2FnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy90b2tlbi10cmFuc2FjdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3ZpZGVvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC9FdmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC9Tb2NrZXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvU29ja2V0Q29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L3V0aWxzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aC10by1yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWFjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVzZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiXSwibmFtZXMiOlsicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJyZWRpcmVjdExvZ2luIiwiY3R4IiwicmVzIiwiY2xlYXJDb29raWUiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsImF1dGgiLCJub3JlZGlyZWN0Iiwib25seVBlcmZvcm1lciIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsInRva2VuIiwibmV4dENvb2tpZSIsImxvZ2dlZEluIiwiYXV0aFNlcnZpY2UiLCJzZXRUb2tlbiIsInVzZXIiLCJ1c2VyU2VydmljZSIsIm1lIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJfaWQiLCJpc1BlcmZvcm1lciIsImRpc3BhdGNoIiwibG9naW5TdWNjZXNzIiwidXBkYXRlQ3VycmVudFVzZXIiLCJlIiwidXBkYXRlU2V0dGluZ3NTdG9yZSIsInNldHRpbmdzIiwidXBkYXRlVUlWYWx1ZSIsImxvZ28iLCJsb2dvVXJsIiwic2l0ZU5hbWUiLCJmYXZpY29uIiwibG9naW5QbGFjZWhvbGRlckltYWdlIiwibWVudXMiLCJmb290ZXJDb250ZW50IiwiY291bnRyaWVzIiwidXNlckJlbmVmaXQiLCJtb2RlbEJlbmVmaXQiLCJ1cGRhdGVMaXZlU3RyZWFtU2V0dGluZ3MiLCJwaWNrIiwiU0VUVElOR19LRVlTIiwiVklFV0VSX1VSTCIsIlBVQkxJU0hFUl9VUkwiLCJTVUJTQ1JJQkVSX1VSTCIsIk9QVElPTl9GT1JfQlJPQURDQVNUIiwiT1BUSU9OX0ZPUl9QUklWQVRFIiwiU0VDVVJFX09QVElPTiIsIkFOVF9NRURJQV9BUFBOQU1FIiwiQUdPUkFfQVBQSUQiLCJBR09SQV9FTkFCTEUiLCJ1cGRhdGVTZXR0aW5ncyIsIlJFUVVJUkVfRU1BSUxfVkVSSUZJQ0FUSU9OIiwiVE9LRU5fQ09OVkVSU0lPTl9SQVRFIiwiU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSIsIkdPT0dMRV9SRUNBUFRDSEFfU0lURV9LRVkiLCJFTkFCTEVfR09PR0xFX1JFQ0FQVENIQSIsIkdPT0dMRV9DTElFTlRfSUQiLCJUV0lUVEVSX0NMSUVOVF9JRCIsIlBBWU1FTlRfR0FURVdBWSIsIk1FVEFfS0VZV09SRFMiLCJNRVRBX0RFU0NSSVBUSU9OIiwicHVibGljQ29uZmlnIiwiQXBwbGljYXRpb24iLCJkb3RlbnYiLCJyZXF1aXJlIiwibXlFbnYiLCJjb25maWciLCJwYXJzZWQiLCJzZXRHbG9iYWxDb25maWciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImluZGV4T2YiLCJhdXRoZW50aWNhdGUiLCJzZXR0aW5nIiwiUHJvbWlzZSIsImFsbCIsInNldHRpbmdTZXJ2aWNlIiwibGF5b3V0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImdhQ29kZSIsIl9faHRtbCIsImhlYWRlclNjcmlwdCIsIm1haW50ZW5hbmNlTW9kZSIsImFmdGVyQm9keVNjcmlwdCIsIndpdGhSZWR1eFNhZ2EiLCJTRVRUSU5HX0NIQU5ORUwiLCJTSVRFX05BTUUiLCJMT0dPX1VSTCIsIkZBVklDT04iLCJMT0dJTl9QTEFDRUhPTERFUl9JTUFHRSIsIkFETUlOX0VNQUlMIiwiU0VOREVSX0VNQUlMIiwiSEVBREVSX1NDUklQVCIsIkFGVEVSX0JPRFlfU0NSSVBUIiwiTU9OVEhMWV9TVUJTQ1JJUFRJT05fQ09NTUlTU0lPTiIsIllFQVJMWV9TVUJTQ1JJUFRJT05fQ09NTUlTU0lPTiIsIlZJREVPX1NBTEVfQ09NTUlTU0lPTiIsIkdBTExFUllfU0FMRV9DT01NSVNTSU9OIiwiUFJPRFVDVF9TQUxFX0NPTU1JU1NJT04iLCJGRUVEX1NBTEVfQ09NTUlTU0lPTiIsIlRJUF9DT01NSVNTSU9OIiwiU1RSRUFNX0NPTU1JU1NJT04iLCJNRVNTQUdFX0NPTU1JU1NJT04iLCJDQ0JJTExfQ0xJRU5UX0FDQ09VTlRfTlVNQkVSIiwiQ0NCSUxMX0RBVEFMSU5LX1VTRVJOQU1FIiwiQ0NCSUxMX0RBVEFMSU5LX1BBU1NXT1JEIiwiQ0NCSUxMX1NVQl9BQ0NPVU5UX05VTUJFUiIsIkNDQklMTF9GTEVYRk9STV9JRCIsIkNDQklMTF9TQUxUIiwiQ0NCSUxMX0NVUlJFTkNZX0NPREUiLCJVU0VfU0VOREdSSURfVFJBTlNQT1JURVIiLCJTTVRQX1RSQU5TUE9SVEVSIiwiR09PR0xFX0FOQUxZVElDU19DT0RFIiwiTUFJTlRFTkFOQ0VfTU9ERSIsIlBFUkZPUk1FUl9WRVJJRllfTlVNQkVSIiwiVFdJVFRFUl9DTElFTlRfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJPUFRJT05fRk9SX0dST1VQIiwiQU5UX01FRElBX0FQSV9FTkRQT0lOVCIsIkFOVF9NRURJQV9FTlRFUlBSSVNFIiwiRk9PVEVSX0NPTlRFTlQiLCJVU0VSX0JFTkVGSVQiLCJNT0RFTF9CRU5FRklUIiwiR09PR0xFX1JFQ0FQVENIQV9TRUNSRVRfS0VZIiwiQklUUEFZX1BST0RVQ1RJT05fTU9ERSIsIkJJVFBBWV9BUElfVE9LRU4iLCJTVFJJUEVfU0VDUkVUX0tFWSIsIk1FTlVfU0VDVElPTiIsIk1BSU4iLCJIRUFERVIiLCJGT09URVIiLCJSRUNFSVZFRF9QQUlEX1RPS0VOX0VWRU5UIiwiTGF5b3V0TWFwIiwiZ2VvQmxvY2siLCJHRU9MYXlvdXQiLCJtYWludGVuYW5jZSIsIk1haW50ZW5hY2VMYXlvdXQiLCJwcmltYXJ5IiwiUHJpbWFyeUxheW91dCIsInB1YmxpYyIsIlB1YmxpY0xheW91dCIsImJsYW5rIiwiQmxhbmtMYXlvdXQiLCJCYXNlTGF5b3V0IiwiUHVyZUNvbXBvbmVudCIsImdlb0Jsb2NrZWQiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwiY2xpZW50Q2hlY2tCbG9ja0J5SXAiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNoZWNrQmxvY2siLCJibG9ja1NlcnZpY2UiLCJjaGVja0NvdW50cnlCbG9jayIsImJsb2NrZWQiLCJzZXRTdGF0ZSIsImNoaWxkcmVuIiwiQ29udGFpbmVyIiwiRm9vdGVyIiwiZHluYW1pYyIsIkxvYWRlciIsInJvdXRlckNoYW5nZSIsImxvYWRVSVZhbHVlIiwiaGFuZGxlTG9hZFVJIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsInVpIiwidGhlbWUiLCJwb3NpdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1pbkhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmQiLCJmb250U2l6ZSIsIkhlYWRlciIsImNyZWF0ZUFjdGlvbiIsInR5cGUiLCJhY3Rpb24iLCJSZWR1eENyZWF0ZUFjdGlvbiIsImlzIiwiYVR5cGUiLCJ0b1N0cmluZyIsImNyZWF0ZUFzeW5jQWN0aW9uIiwiY3JlYXRlQXN5bmNBY3Rpb25zIiwiaGFuZGxlQWN0aW9ucyIsImFjdGlvbnMiLCJpbml0aWFsU3RhdGUiLCJoYW5kbGVSZWR1eEFjdGlvbnMiLCJyZWR1Y2UiLCJyZWR1Y2VyIiwiaGFuZGxlciIsImFjdCIsInNldCIsImNyZWF0ZVJlZHVjZXJzIiwic3RhdGVDb250ZXh0IiwicmVkdWNlcnMiLCJwcmV2ZW50UmVzZXR0aW5nIiwiZmxhdHRlbiIsImlzQXJyYXkiLCJBUFBfU1RBVEVfUkVTRVQiLCJjcmVhdGVTYWdhcyIsInNhZ2FzIiwibWFwIiwic2FnYSIsImVmZmVjdCIsInRha2VMYXRlc3QiLCJ3b3JrZXIiLCJkZWxheSIsImNyZWF0ZVNlbGVjdG9yc0EiLCJjb250ZXh0Iiwic3RhdGVTZWxlY3RvciIsImlzRW1wdHkiLCJnZXRJbiIsImdldCIsImNyZWF0ZVNlbGVjdG9ycyIsInNlbGVjdG9ycyIsImNyZWF0ZUpTU2VsZWN0b3JzIiwiZ2V0U3RvcmUiLCJzZXRTdG9yZSIsInMiLCJpc1VybCIsInJlZ2V4IiwidGVzdCIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpc0VtYWlsIiwiZW1haWwiLCJnZW5lcmF0ZVV1aWQiLCJjIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ2IiwibG9naW4iLCJsb2dpbkZhaWwiLCJsb2dpblBlcmZvcm1lciIsImxvZ2luU29jaWFsIiwicmVnaXN0ZXJGYW4iLCJyZWdpc3RlckZhblN1Y2Nlc3MiLCJyZWdpc3RlckZhbkZhaWwiLCJyZWdpc3RlclBlcmZvcm1lciIsInJlZ2lzdGVyUGVyZm9ybWVyU3VjY2VzcyIsInJlZ2lzdGVyUGVyZm9ybWVyRmFpbCIsImZvcmdvdCIsImZvcmdvdFN1Y2Nlc3MiLCJmb3Jnb3RGYWlsIiwibG9nb3V0IiwiZ2V0Q3VycmVudFVzZXIiLCJhdXRoVXNlciIsImxvZ2luQXV0aCIsInJlcXVlc3RpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJyZWdpc3RlckZhbkRhdGEiLCJyZWdpc3RlclBlcmZvcm1lckRhdGEiLCJmb3Jnb3REYXRhIiwiYXV0aFJlZHVjZXJzIiwicGF5bG9hZCIsIm1lcmdlIiwiYXV0aFNhZ2FzIiwicmVzcCIsInJlbWVtYmVyIiwidXNlclJlc3AiLCJwdXQiLCJ1c2VybmFtZSIsInBhdGhuYW1lIiwicXVlcnkiLCJyZXNvbHZlIiwibWVzc2FnZSIsInJlZ2lzdGVyIiwidmVyaWZpY2F0aW9uRmlsZXMiLCJmaWVsZG5hbWUiLCJmaWxlIiwiaWRWZXJpZmljYXRpb25GaWxlIiwiZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlIiwicmVtb3ZlVG9rZW4iLCJyZXNldFBhc3N3b3JkIiwibG9nIiwiYWRkQ2FydCIsInJlbW92ZUNhcnQiLCJjbGVhckNhcnQiLCJ1cGRhdGVJdGVtQ2FydCIsInRvdGFsIiwiaXRlbXMiLCJjYXJ0UmVkdWNlcnMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJlbGVtZW50IiwibmV3QXJyYXkiLCJxdWFudGl0eSIsImdldENvbW1lbnRzIiwiZ2V0Q29tbWVudHNTdWNjZXNzIiwiZ2V0Q29tbWVudHNGYWlsIiwibW9yZUNvbW1lbnQiLCJtb3JlQ29tbWVudFN1Y2Nlc3MiLCJtb3JlQ29tbWVudEZhaWwiLCJjcmVhdGVDb21tZW50IiwiY3JlYXRlQ29tbWVudFN1Y2Nlc3MiLCJjcmVhdGVDb21tZW50RmFpbCIsImRlbGV0ZUNvbW1lbnQiLCJkZWxldGVDb21tZW50U3VjY2VzcyIsImRlbGV0ZUNvbW1lbnRGYWlsIiwiYWN0aXZlT2JqZWN0IiwiY29tbWVudE1hcHBpbmciLCJjb21tZW50IiwiY29tbWVudFJlZHVjZXJzIiwib2JqZWN0SWQiLCJuZXh0U3RhdGUiLCJ1bnNoaWZ0Iiwic3BsaWNlIiwiY29tbWVudFNhZ2FzIiwiY29tbWVudFNlcnZpY2UiLCJzZWFyY2giLCJjcmVhdGUiLCJkZWxldGUiLCJnZXRGZWVkcyIsImdldEZlZWRzU3VjY2VzcyIsImdldEZlZWRzRmFpbCIsIm1vcmVGZWVkcyIsIm1vcmVGZWVkc1N1Y2Nlc3MiLCJtb3JlRmVlZHNGYWlsIiwiZ2V0VmlkZW9GZWVkcyIsImdldFZpZGVvRmVlZHNTdWNjZXNzIiwiZ2V0VmlkZW9GZWVkc0ZhaWwiLCJtb3JlVmlkZW9GZWVkcyIsIm1vcmVWaWRlb0ZlZWRzU3VjY2VzcyIsIm1vcmVWaWRlb0ZlZWRzRmFpbCIsImdldFBob3RvRmVlZHMiLCJnZXRQaG90b0ZlZWRzU3VjY2VzcyIsImdldFBob3RvRmVlZHNGYWlsIiwibW9yZVBob3RvRmVlZHMiLCJtb3JlUGhvdG9GZWVkc1N1Y2Nlc3MiLCJtb3JlUGhvdG9GZWVkc0ZhaWwiLCJyZW1vdmVGZWVkU3VjY2VzcyIsImZlZWRzIiwidmlkZW9GZWVkcyIsInBob3RvRmVlZHMiLCJmZWVkUmVkdWNlcnMiLCJwcmV2U3RhdGUiLCJ2aWRlb0ZlZWQiLCJmZWVkIiwiZiIsInBlcmZvcm1lclNhZ2FzIiwiaXNIb21lIiwiZmVlZFNlcnZpY2UiLCJ1c2VySG9tZUZlZWRzIiwidXNlclNlYXJjaCIsInBvc3RUeXBlIiwiZ2V0R2FsbGVyaWVzIiwiZ2V0R2FsbGVyaWVzU3VjY2VzcyIsImdldEdhbGxlcmllc0ZhaWwiLCJtb3JlR2FsbGVyaWVzIiwibW9yZUdhbGxlcmllc1N1Y2Nlc3MiLCJtb3JlR2FsbGVyaWVzRmFpbCIsImdldFJlbGF0ZWRHYWxsZXJpZXMiLCJnZXRSZWxhdGVkR2FsbGVyaWVzU3VjY2VzcyIsImdldFJlbGF0ZWRHYWxsZXJpZXNGYWlsIiwiZ2FsbGVyaWVzIiwicmVsYXRlZEdhbGxlcmllcyIsImdhbGxlcnlSZWR1Y2VyIiwicmVsYXRlZCIsInZpZGVvcyIsImdhbGxlcnlTYWdhcyIsImdhbGxlcnlTZXJ2aWNlIiwiZ2V0Q29udmVyc2F0aW9ucyIsImdldENvbnZlcnNhdGlvbnNTdWNjZXNzIiwiZ2V0Q29udmVyc2F0aW9uc0ZhaWwiLCJzZWFyY2hDb252ZXJzYXRpb25zIiwic2VhcmNoQ29udmVyc2F0aW9uc1N1Y2Nlc3MiLCJzZWFyY2hDb252ZXJzYXRpb25zRmFpbCIsInJlYWRNZXNzYWdlcyIsInNlbmRNZXNzYWdlIiwic2VuZE1lc3NhZ2VTdWNjZXNzIiwic2VuZE1lc3NhZ2VGYWlsIiwicmVjZWl2ZU1lc3NhZ2VTdWNjZXNzIiwic2VudEZpbGVTdWNjZXNzIiwiZGVhY3RpdmVDb252ZXJzYXRpb24iLCJzZXRBY3RpdmVDb252ZXJzYXRpb24iLCJzZXRBY3RpdmVDb252ZXJzYXRpb25TdWNjZXNzIiwic2V0QWN0aXZlQ29udmVyc2F0aW9uRmFpbCIsImxvYWRNZXNzYWdlcyIsImxvYWRNZXNzYWdlc1N1Y2Nlc3MiLCJsb2FkTWVzc2FnZXNGYWlsIiwibG9hZE1vcmVNZXNzYWdlcyIsImxvYWRNb3JlTWVzc2FnZXNTdWNjZXNzIiwibG9hZE1vcmVNZXNzYWdlc0ZhaWwiLCJmZXRjaGluZ01lc3NhZ2UiLCJyZXNldE1lc3NhZ2VTdGF0ZSIsImdldENvbnZlcnNhdGlvbkRldGFpbCIsImdldENvbnZlcnNhdGlvbkRldGFpbFN1Y2Nlc3MiLCJnZXRDb252ZXJzYXRpb25EZXRhaWxGYWlsIiwiaW5pdGlhbENvbnZlcnNhdGlvblN0YXRlIiwibGlzdCIsIm1hcHBpbmciLCJhY3RpdmVDb252ZXJzYXRpb24iLCJpbml0aWFsTWVzc2FnZVN0YXRlIiwiY29udmVyc2F0aW9uTWFwIiwicmVjZWl2ZU1lc3NhZ2UiLCJjb252ZXJzYXRpb25SZWR1Y2VyIiwiSWRzIiwidW5pcSIsImNvbmNhdCIsImNvbnZlcnNhdGlvbiIsImNoZWNrIiwiZmluZCIsImluY2x1ZGVzIiwiY29udmVyc2F0aW9uSWQiLCJ0b3RhbE5vdFNlZW5NZXNzYWdlcyIsIm1lc3NhZ2VSZWR1Y2VyIiwiZmV0Y2hpbmciLCJyZXZlcnNlIiwic2VuZGluZyIsImNvbnZlcnNhdGlvblNhZ2FzIiwibWVzc2FnZVNlcnZpY2UiLCJzb3VyY2UiLCJzb3VyY2VJZCIsImNvbnZlcnNhdGlvbk1hcHBpbmciLCJzZWxlY3QiLCJyZWFkQWxsTWVzc2FnZXMiLCJyZWFkQWxsSW5Db252ZXJzYXRpb24iLCJsaW1pdCIsIm9mZnNldCIsImNyZWF0ZUNvbnZlcnNhdGlvbiIsImlkIiwibWVzc2FnZVNhZ2FzIiwibWVzc2FnZU1hcCIsImdldE1lc3NhZ2VzIiwicmVxIiwiZ2V0TGlzdCIsImdldExpc3RTdWNjZXNzIiwiZ2V0TGlzdEZhaWwiLCJnZXRQcm9maWxlIiwiZ2V0UHJvZmlsZVN1Y2Nlc3MiLCJnZXRQcm9maWxlRmFpbCIsInBlcmZvcm1lckxpc3RpbmciLCJwZXJmb3JtZXJQcm9maWxlIiwicGVyZm9ybWVyUmVkdWNlcnMiLCJwZXJmb3JtZXJTZXJ2aWNlIiwiZmluZE9uZSIsImxpc3RQcm9kdWN0cyIsImxpc3RQcm9kdWN0c1N1Y2Nlc3MiLCJsaXN0UHJvZHVjdHNGYWlsIiwibW9yZVByb2R1Y3QiLCJtb3JlUHJvZHVjdFN1Y2Nlc3MiLCJtb3JlUHJvZHVjdEZhaWwiLCJwcm9kdWN0cyIsInByb2R1Y3RSZWR1Y2VycyIsInByb2R1Y3RTYWdhcyIsInByb2R1Y3RTZXJ2aWNlIiwicGVyZm9ybWVyIiwiZ2FsbGVyeSIsInZpZGVvIiwicHJvZHVjdCIsImNhcnQiLCJzdHJlYW1pbmciLCJzdWJzY3JpcHRpb24iLCJjb21iaW5lUmVkdWNlcnMiLCJyb290U2FnYSIsInVzZXJTYWdhcyIsInZpZGVvU2FnYXMiLCJmZWVkU2FnYXMiLCJzdHJlYW1DaGF0U2FnYXMiLCJzcGF3biIsInJlcXVpcmVFbWFpbFZlcmlmaWNhdGlvbiIsImdvb2dsZVJlQ2FwdGNoYVNpdGVLZXkiLCJlbmFibGVHb29nbGVSZUNhcHRjaGEiLCJnb29nbGVDbGllbnRJZCIsInRva2VuQ29udmVyc2lvblJhdGUiLCJzdHJpcGVQdWJsaXNoYWJsZUtleSIsInBheW1lbnRHYXRld2F5Iiwic2V0dGluZ1JlZHVjZXJzIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwic3RvcmVIb2xkZXIiLCJnZXRTdHJlYW1Db252ZXJzYXRpb24iLCJnZXRTdHJlYW1Db252ZXJzYXRpb25TdWNjZXNzIiwiZ2V0U3RyZWFtQ29udmVyc2F0aW9uRmFpbCIsInNlbmRTdHJlYW1NZXNzYWdlIiwic2VuZFN0cmVhbU1lc3NhZ2VTdWNjZXNzIiwic2VuZFN0cmVhbU1lc3NhZ2VGYWlsIiwicmVjZWl2ZVN0cmVhbU1lc3NhZ2VTdWNjZXNzIiwibG9hZFN0cmVhbU1lc3NhZ2VzIiwibG9hZFN0cmVhbU1lc3NhZ2VzU3VjY2VzcyIsImxvYWRTdHJlYW1NZXNzYWdlc0ZhaWwiLCJsb2FkTW9yZVN0cmVhbU1lc3NhZ2VzIiwibG9hZE1vcmVTdHJlYW1NZXNzYWdlc1N1Y2Nlc3MiLCJsb2FkTW9yZVN0cmVhbU1lc3NhZ2VzRmFpbCIsImZldGNoaW5nU3RyZWFtTWVzc2FnZSIsInJlc2V0U3RyZWFtTWVzc2FnZSIsInJlc2V0QWxsU3RyZWFtTWVzc2FnZSIsImRlbGV0ZU1lc3NhZ2UiLCJkZWxldGVNZXNzYWdlU3VjY2VzcyIsImRlbGV0ZU1lc3NhZ2VGYWlsIiwic3RyZWFtTWVzc2FnZVJlZHVjZXIiLCJpIiwidGV4dCIsImlzRGVsZXRlZCIsInN0cmVhbU1lc3NhZ2VTYWdhcyIsImZpbmRQdWJsaWNDb252ZXJzYXRpb25QZXJmb3JtZXIiLCJwZXJmb3JtZXJJZCIsImdldENvbnZlcnNhdGlvbkJ5U3RyZWFtSWQiLCJzdHJlYW1JZCIsImdldFB1YmxpY01lc3NhZ2VzIiwic3RyZWFtTWVzc2FnZSIsIm1lc3NhZ2VzIiwibWVzc2FnZUlkIiwiYWRkUHJpdmF0ZVJlcXVlc3QiLCJhY2Nlc3NQcml2YXRlUmVxdWVzdCIsInByaXZhdGVSZXF1ZXN0cyIsInZpZXdlclVSTCIsInB1Ymxpc2hlclVSTCIsIm9wdGlvbkZvckJyb2FkY2FzdCIsIm9wdGlvbkZvckdyb3VwIiwib3B0aW9uRm9yUHJpdmF0ZSIsInNlY3VyZU9wdGlvbiIsImFnb3JhRW5hYmxlIiwic2hvd1N1YnNjcmliZVBlcmZvcm1lck1vZGFsIiwiaGlkZVN1YnNjcmliZVBlcmZvcm1lck1vZGFsIiwic2hvd01vZGFsIiwic3Vic2NyaWJpbmdQZXJmb3JtZXJJZCIsInVpUmVkdWNlcnMiLCJuZXdWYWwiLCJ1cGRhdGVDdXJyZW50VXNlckF2YXRhciIsInVwZGF0ZUN1cnJlbnRVc2VyQ292ZXIiLCJ1cGRhdGVVc2VyIiwidXBkYXRlVXNlclN1Y2Nlc3MiLCJ1cGRhdGVVc2VyRmFpbCIsInVwZGF0ZVBlcmZvcm1lciIsInNldFVwZGF0aW5nIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQYXNzd29yZFN1Y2Nlc3MiLCJ1cGRhdGVQYXNzd29yZEZhaWwiLCJ1cGRhdGVCYWxhbmNlIiwiY3VycmVudCIsImF2YXRhciIsImNvdmVyIiwibmFtZSIsInVwZGF0ZVN1Y2Nlc3MiLCJ1cGRhdGluZyIsInVzZXJSZWR1Y2VycyIsInVwZGF0ZWRQYXNzd29yZCIsImJhbGFuY2UiLCJ1cGRhdGVkIiwidXBkYXRlTWUiLCJnZXRWaWRlb3MiLCJnZXRWaWRlb3NTdWNjZXNzIiwiZ2V0VmlkZW9zRmFpbCIsImdldFZvZHMiLCJnZXRWb2RzU3VjY2VzcyIsImdldFZvZHNGYWlsIiwibW9yZVZpZGVvIiwibW9yZVZpZGVvU3VjY2VzcyIsIm1vcmVWaWRlb0ZhaWwiLCJtb3JlVm9kIiwibW9yZVZvZFN1Y2Nlc3MiLCJtb3JlVm9kRmFpbCIsImdldFJlbGF0ZWQiLCJnZXRSZWxhdGVkU3VjY2VzcyIsImdldFJlbGF0ZWRGYWlsIiwic2FsZVZpZGVvcyIsInJlbGF0ZWRWaWRlb3MiLCJ2aWRlb1JlZHVjZXJzIiwidmlkZW9TZXJ2aWNlIiwiQmFzZUNvbXBvbmVudCIsIm5leHRSZWR1eFdyYXBwZXIiLCJuZXh0UmVkdXhTYWdhIiwiVE9LRU4iLCJBUElSZXF1ZXN0Iiwic2V0QXV0aEhlYWRlclRva2VuIiwicGFyc2VKU09OIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiY2hlY2tTdGF0dXMiLCJFcnJvciIsImNsb25lIiwicmVxdWVzdCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwidmVyYiIsInVwZGF0ZWRIZWFkZXIiLCJjb29raWUiLCJnZXRHbG9iYWxDb25maWciLCJiYXNlVXJsIiwiQVBJX0VORFBPSU5UIiwiTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UIiwicHJvY2VzcyIsImFwaVVybCIsInN0YXJ0c1dpdGgiLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiYnVpbGRVcmwiLCJwYXJhbXMiLCJxdWVyeVN0cmluZyIsImsiLCJBcnJheSIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInBvc3QiLCJkZWwiLCJ1cGxvYWQiLCJmaWxlcyIsIm9wdGlvbnMiLCJvblByb2dyZXNzIiwidXBsb2FkVXJsIiwicmVqZWN0IiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudGFnZSIsImxvYWRlZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJjdXN0b21EYXRhIiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiQXV0aFNlcnZpY2UiLCJsb2dpblR3aXR0ZXIiLCJsb2dpbkdvb2dsZSIsImNhbGxiYWNrTG9naW5Ud2l0dGVyIiwidmVyaWZ5RW1haWwiLCJleHBpcmVkIiwiZXhwaXJlcyIsImdldFRva2VuIiwic2V0VHdpdHRlclRva2VuIiwicm9sZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0IiwiZ2V0VHdpdHRlclRva2VuIiwicmVtb3ZlIiwicGFzc3dvcmQiLCJkb2N1bWVudHMiLCJ1c2VyU3dpdGNoVG9QZXJmb3JtZXIiLCJ1c2VySWQiLCJCYW5uZXJTZXJ2aWNlIiwiYmFubmVyU2VydmljZSIsIkJsb2NrU2VydmljZSIsImJsb2NrQ291bnRyaWVzIiwiYmxvY2tVc2VyIiwidW5CbG9ja1VzZXIiLCJnZXRCbG9ja0xpc3RVc2VycyIsIkNhcnRTZXJ2aWNlIiwiZ2V0Q2FydEJ5VXNlciIsImV4aXN0Q2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsImNhcnRTZXJ2aWNlIiwiQ29tbWVudFNlcnZpY2UiLCJ1cGRhdGUiLCJnbG9iYWxDb25maWciLCJDb29raWVTZXJ2aWNlIiwic2V0Q29va2llIiwiY25hbWUiLCJjdmFsdWUiLCJleFRpbWUiLCJkIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJnZXRDb29raWUiLCJkZWNvZGVkQ29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2EiLCJzcGxpdCIsInN1YnN0cmluZyIsImNvb2tpZVNlcnZpY2UiLCJFYXJuaW5nU2VydmljZSIsInBlcmZvcm1lclN0YXJ0cyIsInBlcmZvcm1lclNlYXJjaCIsImVhcm5pbmdTZXJ2aWNlIiwiRmVlZFNlcnZpY2UiLCJmaW5kQnlJZCIsInVwbG9hZFBob3RvIiwidXBsb2FkVGh1bWJuYWlsIiwidXBsb2FkVmlkZW8iLCJ1cGxvYWRUZWFzZXIiLCJhZGRQb2xsIiwidm90ZVBvbGwiLCJwb2xsSWQiLCJnZXRCb29rbWFyayIsIkZvbGxvd1NlcnZpY2UiLCJnZXRGb2xsb3dlcnMiLCJnZXRGb2xsb3dpbmciLCJmb2xsb3dTZXJ2aWNlIiwiR2FsbGVyeVNlcnZpY2UiLCJ1c2VyVmlld0RldGFpbHMiLCJnZXRCb29rbWFya3MiLCJNZXNzYWdlU2VydmljZSIsImNvdW50VG90YWxOb3RSZWFkIiwiZ2V0TWVzc2FnZVVwbG9hZFVybCIsInNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlIiwiZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uIiwidXBkYXRlQ29udmVyc2F0aW9uTmFtZSIsIk9yZGVyU2VydmljZSIsInVwZGF0ZURlbGl2ZXJ5QWRkcmVzcyIsImdldERvd25sb2FkTGlua0RpZ2l0YWwiLCJwcm9kdWN0SWQiLCJvcmRlclNlcnZpY2UiLCJQYXltZW50U2VydmljZSIsInN1YnNjcmliZVBlcmZvcm1lciIsImFkZEZ1bmRzIiwiYXBwbHlDb3Vwb24iLCJjb2RlIiwiY29ubmVjdFN0cmlwZUFjY291bnQiLCJnZXRTdHJpcGVDYXJkcyIsImFkZFN0cmlwZUNhcmQiLCJyZW1vdmVTdHJpcGVDYXJkIiwicmV0cmlldmVTdHJpcGVBY2NvdW50IiwibG9naW5MaW5rIiwicGF5bWVudFNlcnZpY2UiLCJQYXlvdXRSZXF1ZXN0U2VydmljZSIsImNhbGN1bGF0ZSIsImRldGFpbCIsInBheW91dFJlcXVlc3RTZXJ2aWNlIiwiUGVyZm9ybWVyU2VydmljZSIsInJhbmRvbVNlYXJjaCIsImdldEF2YXRhclVwbG9hZFVybCIsImdldENvdmVyVXBsb2FkVXJsIiwiZ2V0VmlkZW9VcGxvYWRVcmwiLCJnZXREb2N1bWVudFVwbG9hZFVybCIsImdldFRvcFBlcmZvcm1lciIsInVwZGF0ZUJhbmtpbmciLCJ1cGRhdGVQYXltZW50R2F0ZXdheSIsImdldEJvb2ttYXJrZWQiLCJ1cGxvYWREb2N1bWVudHMiLCJQaG90b1NlcnZpY2UiLCJzZWFyY2hCeVVzZXIiLCJzZWFyY2hCeVBlcmZvcm1lciIsInNldENvdmVyR2FsbGVyeSIsInVwbG9hZEltYWdlcyIsInNlYXJjaFBob3Rvc0luR2FsbGVyeSIsInBob3RvU2VydmljZSIsIlBvc3RTZXJ2aWNlIiwicG9zdFNlcnZpY2UiLCJQcm9kdWN0U2VydmljZSIsImNyZWF0ZVByb2R1Y3QiLCJ1c2VyVmlldyIsIlJlYWN0aW9uU2VydmljZSIsInJlYWN0aW9uU2VydmljZSIsIlJlcG9ydFNlcnZpY2UiLCJyZXBvcnRTZXJ2aWNlIiwiU2VhcmNoU2VydmljZSIsInNlYXJjaEJ5S2V5d29yZCIsImxpc3RCeUtleXdvcmQiLCJzZWFyY2hTZXJ2aWNlIiwiU2V0dGluZ1NlcnZpY2UiLCJncm91cCIsImZvcmNlUmVsb2FkIiwic2V0dGluZ0dyb3VwIiwiX3NldHRpbmdzIiwiY29udGFjdCIsIlNoaXBwaW5nQWRkcmVzc1NlcnZpY2UiLCJzaGlwcGluZ0FkZHJlc3NTZXJ2aWNlIiwiU3RyZWFtU2VydmljZSIsInVwZGF0ZVN0cmVhbUluZm8iLCJ1cGRhdGVTdHJlYW1EdXJhdGlvbiIsImdvTGl2ZSIsImVkaXRMaXZlIiwiam9pblB1YmxpY0NoYXQiLCJmZXRjaEFnb3JhQXBwVG9rZW4iLCJzdHJlYW1TZXJ2aWNlIiwiU3Vic2NyaXB0aW9uU2VydmljZSIsImNhbmNlbFN1YnNjcmlwdGlvbiIsImdhdGV3YXkiLCJzdWJzY3JpcHRpb25TZXJ2aWNlIiwiVG9rZW5QYWNrYWdlU2VydmljZSIsInRva2VuUGFja2FnZVNlcnZpY2UiLCJUb2tlblRyYW5zY3Rpb25TZXJ2aWNlIiwic2VuZFRpcCIsInB1cmNoYXNlRmVlZCIsInB1cmNoYXNlUHJvZHVjdCIsInB1cmNoYXNlVmlkZW8iLCJwdXJjaGFzZUdhbGxlcnkiLCJwdXJjaGFzZU1lc3NhZ2UiLCJwdXJjaGFzZVN0cmVhbSIsInRva2VuVHJhbnNjdGlvblNlcnZpY2UiLCJVc2VyU2VydmljZSIsIlV0aWxzU2VydmljZSIsImNvdW50cmllc0xpc3QiLCJfY291bnRyaWVzIiwic3RhdGVzTGlzdCIsImNvdW50cnlDb2RlIiwiY2l0aWVzTGlzdCIsImxhbmd1YWdlc0xpc3QiLCJwaG9uZUNvZGVzTGlzdCIsImJvZHlJbmZvIiwidmVyaWZ5UmVjYXB0Y2hhIiwidXRpbHNTZXJ2aWNlIiwiVmlkZW9TZXJ2aWNlIiwiZGVsZXRlRmlsZSIsIkV2ZW50Iiwic29ja2V0Iiwid2FybmluZyIsIm9mZiIsImNvbnRleHRUeXBlIiwiU29ja2V0Q29udGV4dCIsIlNvY2tldCIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsImNsb3NlIiwiZW1pdCIsInVyaSIsIk5FWFRfUFVCTElDX1NPQ0tFVF9FTkRQT0lOVCIsInRyYW5zcG9ydHMiLCJTb2NrZXRJTyIsIm1lcmdlT3B0aW9ucyIsImRlYnVnIiwiZXJyIiwiZGVmYXVsdE9wdGlvbnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsImF1dG9Db25uZWN0IiwicmVqZWN0VW5hdXRob3JpemVkIiwiQ2hpbGRyZW4iLCJvbmx5IiwibWFwU3RhdGVzIiwiY3JlYXRlQ29udGV4dCIsImFyZ3MiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxtQ0FBbUM7UUFDbkM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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bEJNO0FBb0JBLE1BQU0reUIsS0FBSyxHQUFHLFVBQVUsR0FBR2MsSUFBYixFQUFtQjtBQUN0QztBQUNBLGFBQTJDLEVBQU87QUFFbEQ7O0FBQ0EsTUFBSSxPQUFPdjJCLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsT0FBT0EsT0FBTyxDQUFDeTFCLEtBQWYsS0FBeUIsVUFBL0QsRUFBMkU7QUFDekV6MUIsV0FBTyxDQUFDeTFCLEtBQVIsQ0FBY2UsS0FBZCxDQUFvQngyQixPQUFwQixFQUE2QnUyQixJQUE3QjtBQUNEO0FBQ0YsQ0FSTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9fYXBwXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnO1xuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnQHJlZHV4L3dpdGhSZWR1eFNhZ2EnO1xuLy8gaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSBcIi4uL3NyYy9yZWR1eC93aXRoUmVkdXhTYWdhXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBCYXNlTGF5b3V0IGZyb20gJ0BsYXlvdXRzL2Jhc2UtbGF5b3V0JztcbmltcG9ydCB7XG4gIGF1dGhTZXJ2aWNlLCB1c2VyU2VydmljZSwgc2V0dGluZ1NlcnZpY2Vcbn0gZnJvbSAnQHNlcnZpY2VzL2luZGV4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBsb2dpblN1Y2Nlc3MgfSBmcm9tICdAcmVkdXgvYXV0aC9hY3Rpb25zJztcbmltcG9ydCB7IHVwZGF0ZUN1cnJlbnRVc2VyIH0gZnJvbSAnQHJlZHV4L3VzZXIvYWN0aW9ucyc7XG5pbXBvcnQgeyB1cGRhdGVVSVZhbHVlIH0gZnJvbSAnQHJlZHV4L3VpL2FjdGlvbnMnO1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSAnc3JjL3NvY2tldCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgU0VUVElOR19LRVlTIH0gZnJvbSAnc3JjL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBwaWNrIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHVwZGF0ZUxpdmVTdHJlYW1TZXR0aW5ncyB9IGZyb20gJ0ByZWR1eC9zdHJlYW1pbmcvYWN0aW9ucyc7XG5pbXBvcnQgeyB1cGRhdGVTZXR0aW5ncyB9IGZyb20gJ0ByZWR1eC9zZXR0aW5ncy9hY3Rpb25zJztcbmltcG9ydCAnLi4vc3R5bGUvaW5kZXgubGVzcyc7XG5pbXBvcnQgeyBzZXRHbG9iYWxDb25maWcgfSBmcm9tICdAc2VydmljZXMvY29uZmlnJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBSZWFjdFNvY2tldElPOiBhbnk7XG4gICAgX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFXzogYW55O1xuICAgIGlmcmFtZWx5OiBhbnk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkaXJlY3RMb2dpbihjdHg6IGFueSkge1xuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgYXV0aFNlcnZpY2UucmVtb3ZlVG9rZW4oKTtcbiAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGZpeCBmb3IgcHJvZHVjdGlvbiBidWlsZFxuICBjdHgucmVzLmNsZWFyQ29va2llICYmIGN0eC5yZXMuY2xlYXJDb29raWUoJ3Rva2VuJyk7XG4gIGN0eC5yZXMuY2xlYXJDb29raWUgJiYgY3R4LnJlcy5jbGVhckNvb2tpZSgncm9sZScpO1xuICBjdHgucmVzLndyaXRlSGVhZCAmJiBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246ICcvJyB9KTtcbiAgY3R4LnJlcy5lbmQgJiYgY3R4LnJlcy5lbmQoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXV0aChcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHQsXG4gIG5vcmVkaXJlY3Q6IGJvb2xlYW4sXG4gIG9ubHlQZXJmb3JtZXI6IGJvb2xlYW5cbikge1xuICB0cnkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IGN0eDtcbiAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgY29uc3QgeyB0b2tlbiB9ID0gbmV4dENvb2tpZShjdHgpO1xuICAgIGlmIChzdGF0ZS5hdXRoICYmIHN0YXRlLmF1dGgubG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBhdXRoU2VydmljZS5zZXRUb2tlbih0b2tlbik7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UubWUoe1xuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxuICAgICAgfSk7XG4gICAgICBpZiAoIXVzZXIuZGF0YSB8fCAhdXNlci5kYXRhLl9pZCkge1xuICAgICAgICByZWRpcmVjdExvZ2luKGN0eCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdXNlci5kYXRhLmlzUGVyZm9ybWVyICYmIG9ubHlQZXJmb3JtZXIpIHtcbiAgICAgICAgcmVkaXJlY3RMb2dpbihjdHgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdG9yZS5kaXNwYXRjaChsb2dpblN1Y2Nlc3MoKSk7XG4gICAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVDdXJyZW50VXNlcih1c2VyLmRhdGEpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAhbm9yZWRpcmVjdCAmJiByZWRpcmVjdExvZ2luKGN0eCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWRpcmVjdExvZ2luKGN0eCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3NTdG9yZShjdHg6IE5leHRQYWdlQ29udGV4dCwgc2V0dGluZ3MpIHtcbiAgY29uc3QgeyBzdG9yZSB9ID0gY3R4O1xuICBzdG9yZS5kaXNwYXRjaChcbiAgICB1cGRhdGVVSVZhbHVlKHtcbiAgICAgIGxvZ286IHNldHRpbmdzLmxvZ29VcmwgfHwgJycsXG4gICAgICBzaXRlTmFtZTogc2V0dGluZ3Muc2l0ZU5hbWUgfHwgJycsXG4gICAgICBmYXZpY29uOiBzZXR0aW5ncy5mYXZpY29uIHx8ICcnLFxuICAgICAgbG9naW5QbGFjZWhvbGRlckltYWdlOiBzZXR0aW5ncy5sb2dpblBsYWNlaG9sZGVySW1hZ2UgfHwgJycsXG4gICAgICBtZW51czogc2V0dGluZ3MubWVudXMgfHwgW10sXG4gICAgICBmb290ZXJDb250ZW50OiBzZXR0aW5ncy5mb290ZXJDb250ZW50IHx8ICcnLFxuICAgICAgY291bnRyaWVzOiBzZXR0aW5ncy5jb3VudHJpZXMgfHwgW10sXG4gICAgICB1c2VyQmVuZWZpdDogc2V0dGluZ3MudXNlckJlbmVmaXQgfHwgJycsXG4gICAgICBtb2RlbEJlbmVmaXQ6IHNldHRpbmdzLm1vZGVsQmVuZWZpdCB8fCAnJ1xuICAgIH0pXG4gICk7XG4gIHN0b3JlLmRpc3BhdGNoKFxuICAgIHVwZGF0ZUxpdmVTdHJlYW1TZXR0aW5ncyhcbiAgICAgIHBpY2soc2V0dGluZ3MsIFtcbiAgICAgICAgU0VUVElOR19LRVlTLlZJRVdFUl9VUkwsXG4gICAgICAgIFNFVFRJTkdfS0VZUy5QVUJMSVNIRVJfVVJMLFxuICAgICAgICBTRVRUSU5HX0tFWVMuU1VCU0NSSUJFUl9VUkwsXG4gICAgICAgIFNFVFRJTkdfS0VZUy5PUFRJT05fRk9SX0JST0FEQ0FTVCxcbiAgICAgICAgU0VUVElOR19LRVlTLk9QVElPTl9GT1JfUFJJVkFURSxcbiAgICAgICAgU0VUVElOR19LRVlTLlNFQ1VSRV9PUFRJT04sXG4gICAgICAgIFNFVFRJTkdfS0VZUy5BTlRfTUVESUFfQVBQTkFNRSxcbiAgICAgICAgU0VUVElOR19LRVlTLkFHT1JBX0FQUElELFxuICAgICAgICBTRVRUSU5HX0tFWVMuQUdPUkFfRU5BQkxFXG4gICAgICBdKVxuICAgIClcbiAgKTtcblxuICBzdG9yZS5kaXNwYXRjaChcbiAgICB1cGRhdGVTZXR0aW5ncyhcbiAgICAgIHBpY2soc2V0dGluZ3MsIFtcbiAgICAgICAgU0VUVElOR19LRVlTLlJFUVVJUkVfRU1BSUxfVkVSSUZJQ0FUSU9OLFxuICAgICAgICBTRVRUSU5HX0tFWVMuVE9LRU5fQ09OVkVSU0lPTl9SQVRFLFxuICAgICAgICBTRVRUSU5HX0tFWVMuU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSxcbiAgICAgICAgU0VUVElOR19LRVlTLkdPT0dMRV9SRUNBUFRDSEFfU0lURV9LRVksXG4gICAgICAgIFNFVFRJTkdfS0VZUy5FTkFCTEVfR09PR0xFX1JFQ0FQVENIQSxcbiAgICAgICAgU0VUVElOR19LRVlTLkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICAgIFNFVFRJTkdfS0VZUy5UV0lUVEVSX0NMSUVOVF9JRCxcbiAgICAgICAgU0VUVElOR19LRVlTLlBBWU1FTlRfR0FURVdBWSxcbiAgICAgICAgU0VUVElOR19LRVlTLk1FVEFfS0VZV09SRFMsXG4gICAgICAgIFNFVFRJTkdfS0VZUy5NRVRBX0RFU0NSSVBUSU9OXG4gICAgICBdKVxuICAgIClcbiAgKTtcbn1cblxuaW50ZXJmYWNlIEFwcENvbXBvbmVudCBleHRlbmRzIE5leHRQYWdlQ29udGV4dCB7XG4gIGxheW91dDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSUFwcCB7XG4gIHN0b3JlOiBTdG9yZTtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIENvbXBvbmVudDogQXBwQ29tcG9uZW50O1xuICBzZXR0aW5nczogYW55O1xuICBjb25maWc6IGFueTtcbn1cblxuY29uc3QgcHVibGljQ29uZmlnID0ge30gYXMgYW55O1xuY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBBcHA8SUFwcD4ge1xuICAvLyBUT0RPIC0gY29uc2lkZXIgaWYgd2UgbmVlZCB0byB1c2UgZ2V0IHN0YXRpYyBwcm9wcyBpbiBjaGlsZHJlbiBjb21wb25lbnQgaW5zdGVhZD9cbiAgLy8gb3IgY2hlY2sgaW4gcmVuZGVyP1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICAgIC8vIGxvYWQgY29uZmlndXJhdGlvbiBmcm9tIEVOViBhbmQgcHV0IHRvIGNvbmZpZ1xuICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2xvYmFsLXJlcXVpcmVcbiAgICAgIGNvbnN0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xuICAgICAgY29uc3QgbXlFbnYgPSBkb3RlbnYuY29uZmlnKCkucGFyc2VkO1xuXG4gICAgICAvLyBwdWJsaXNoIHRvIHNlcnZlciBjb25maWcgd2l0aCBhcHBcbiAgICAgIHNldEdsb2JhbENvbmZpZyhteUVudik7XG5cbiAgICAgIC8vIGxvYWQgcHVibGljIGNvbmZpZyBhbmQgYXBpLWVuZHBvaW50P1xuICAgICAgT2JqZWN0LmtleXMobXlFbnYpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ05FWFRfUFVCTElDXycpID09PSAwKSB7XG4gICAgICAgICAgcHVibGljQ29uZmlnW2tleV0gPSBteUVudltrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB3b24ndCBjaGVjayBhdXRoIGZvciB1bi1hdXRoZW50aWNhdGVkIHBhZ2Ugc3VjaCBhcyBsb2dpbiwgcmVnaXN0ZXJcbiAgICAvLyB1c2Ugc3RhdGljIGZpZWxkIGluIHRoZSBjb21wb25lbnRcbiAgICBjb25zdCB7IG5vcmVkaXJlY3QsIG9ubHlQZXJmb3JtZXIsIGF1dGhlbnRpY2F0ZSB9ID0gQ29tcG9uZW50O1xuICAgIGlmIChhdXRoZW50aWNhdGUgIT09IGZhbHNlKSB7XG4gICAgICBhd2FpdCBhdXRoKGN0eCwgbm9yZWRpcmVjdCwgb25seVBlcmZvcm1lcik7XG4gICAgfVxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IG5leHRDb29raWUoY3R4KTtcbiAgICBjdHgudG9rZW4gPSB0b2tlbiB8fCAnJztcbiAgICAvLyBzZXJ2ZXIgc2lkZSB0byBsb2FkIHNldHRpbmdzLCBvbmNlIHRpbWUgb25seVxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xuICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBjb25zdCBbc2V0dGluZ10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHNldHRpbmdTZXJ2aWNlLmFsbCgnYWxsJywgdHJ1ZSlcbiAgICAgIF0pO1xuICAgICAgc2V0dGluZ3MgPSB7IC4uLnNldHRpbmcuZGF0YSB9O1xuICAgICAgYXdhaXQgdXBkYXRlU2V0dGluZ3NTdG9yZShjdHgsIHNldHRpbmdzKTtcbiAgICB9XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKHsgY3R4IH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc2V0dGluZ3MsXG4gICAgICBwYWdlUHJvcHMsXG4gICAgICBsYXlvdXQ6IENvbXBvbmVudC5sYXlvdXQsXG4gICAgICBjb25maWc6IHB1YmxpY0NvbmZpZ1xuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzZXRHbG9iYWxDb25maWcodGhpcy5wcm9wcy5jb25maWcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSwgc2V0dGluZ3NcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxheW91dCB9ID0gQ29tcG9uZW50O1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPntzZXR0aW5ncz8uc2l0ZU5hbWV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MVwiIC8+XG4gICAgICAgICAgey8qIEdBIGNvZGUgKi99XG4gICAgICAgICAge3NldHRpbmdzICYmIHNldHRpbmdzLmdhQ29kZSAmJiBbXG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtzZXR0aW5ncy5nYUNvZGV9YH0gLz4sXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7c2V0dGluZ3MuZ2FDb2RlfScpO1xuICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgXX1cbiAgICAgICAgICB7LyogZXh0cmEgc2NyaXB0ICovfVxuICAgICAgICAgIHtzZXR0aW5ncyAmJiBzZXR0aW5ncy5oZWFkZXJTY3JpcHQgJiYgKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNldHRpbmdzLmhlYWRlclNjcmlwdCB9fSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFNvY2tldD5cbiAgICAgICAgICA8QmFzZUxheW91dCBsYXlvdXQ9e2xheW91dH0gbWFpbnRlbmFuY2U9e3NldHRpbmdzLm1haW50ZW5hbmNlTW9kZX0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9CYXNlTGF5b3V0PlxuICAgICAgICA8L1NvY2tldD5cbiAgICAgICAge3NldHRpbmdzICYmIHNldHRpbmdzLmFmdGVyQm9keVNjcmlwdCAmJiAoXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZXR0aW5ncy5hZnRlckJvZHlTY3JpcHQgfX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTYWdhKEFwcGxpY2F0aW9uKTsiLCJleHBvcnQgY29uc3QgU0VUVElOR19DSEFOTkVMID0gJ1NFVFRJTkdTJztcblxuZXhwb3J0IGNvbnN0IFNFVFRJTkdfS0VZUyA9IHtcbiAgU0lURV9OQU1FOiAnc2l0ZU5hbWUnLFxuICBMT0dPX1VSTDogJ2xvZ29VcmwnLFxuICBGQVZJQ09OOiAnZmF2aWNvbicsXG4gIExPR0lOX1BMQUNFSE9MREVSX0lNQUdFOiAnbG9naW5QbGFjZWhvbGRlckltYWdlJyxcbiAgUkVRVUlSRV9FTUFJTF9WRVJJRklDQVRJT046ICdyZXF1aXJlRW1haWxWZXJpZmljYXRpb24nLFxuICBBRE1JTl9FTUFJTDogJ2FkbWluRW1haWwnLFxuICBTRU5ERVJfRU1BSUw6ICdzZW5kZXJFbWFpbCcsXG4gIE1FVEFfS0VZV09SRFM6ICdtZXRhS2V5d29yZHMnLFxuICBNRVRBX0RFU0NSSVBUSU9OOiAnbWV0YURlc2NyaXB0aW9uJyxcbiAgSEVBREVSX1NDUklQVDogJ2hlYWRlclNjcmlwdCcsXG4gIEFGVEVSX0JPRFlfU0NSSVBUOiAnYWZ0ZXJCb2R5U2NyaXB0JyxcbiAgTU9OVEhMWV9TVUJTQ1JJUFRJT05fQ09NTUlTU0lPTjogJ21vbnRobHlTdWJzY3JpcHRpb25Db21taXNzaW9uJyxcbiAgWUVBUkxZX1NVQlNDUklQVElPTl9DT01NSVNTSU9OOiAneWVhcmx5U3Vic2NyaXB0aW9uQ29tbWlzc2lvbicsXG4gIFZJREVPX1NBTEVfQ09NTUlTU0lPTjogJ3ZpZGVvU2FsZUNvbW1pc3Npb24nLFxuICBHQUxMRVJZX1NBTEVfQ09NTUlTU0lPTjogJ2dhbGxlcnlTYWxlQ29tbWlzc2lvbicsXG4gIFBST0RVQ1RfU0FMRV9DT01NSVNTSU9OOiAncHJvZHVjdFNhbGVDb21taXNzaW9uJyxcbiAgRkVFRF9TQUxFX0NPTU1JU1NJT046ICdmZWVkU2FsZUNvbW1pc3Npb24nLFxuICBUSVBfQ09NTUlTU0lPTjogJ3RpcENvbW1pc3Npb24nLFxuICBTVFJFQU1fQ09NTUlTU0lPTjogJ3N0cmVhbUNvbW1pc3Npb24nLFxuICBNRVNTQUdFX0NPTU1JU1NJT046ICdtZXNzYWdlQ29tbWlzc2lvbicsXG4gIENDQklMTF9DTElFTlRfQUNDT1VOVF9OVU1CRVI6ICdjY2JpbGxDbGllbnRBY2NvdW50TnVtYmVyJyxcbiAgQ0NCSUxMX0RBVEFMSU5LX1VTRVJOQU1FOiAnY2NiaWxsRGF0YWxpbmtVc2VybmFtZScsXG4gIENDQklMTF9EQVRBTElOS19QQVNTV09SRDogJ2NjYmlsbERhdGFsaW5rUGFzc3dvcmQnLFxuICBDQ0JJTExfU1VCX0FDQ09VTlRfTlVNQkVSOiAnY2NiaWxsU3ViQWNjb3VudE51bWJlcicsXG4gIENDQklMTF9GTEVYRk9STV9JRDogJ2NjYmlsbEZsZXhmb3JtSWQnLFxuICBDQ0JJTExfU0FMVDogJ2NjYmlsbFNhbHQnLFxuICBDQ0JJTExfQ1VSUkVOQ1lfQ09ERTogJ2NjYmlsQ3VycmVuY3lDb2RlJyxcbiAgVVNFX1NFTkRHUklEX1RSQU5TUE9SVEVSOiAndXNlU2VuZ3JpZFRyYW5zcG9ydGVyJyxcbiAgU01UUF9UUkFOU1BPUlRFUjogJ3NtdHBUcmFuc3BvcnRlcicsXG4gIEdPT0dMRV9BTkFMWVRJQ1NfQ09ERTogJ2dhQ29kZScsXG4gIE1BSU5URU5BTkNFX01PREU6ICdtYWludGVuYW5jZU1vZGUnLFxuICBQRVJGT1JNRVJfVkVSSUZZX05VTUJFUjogJ3BlcmZvcm1lclZlcmlmeU51bWJlcicsXG4gIFRXSVRURVJfQ0xJRU5UX0lEOiAndHdpdHRlckNsaWVudElkJyxcbiAgVFdJVFRFUl9DTElFTlRfU0VDUkVUOiAndHdpdHRlckNsaWVudFNlY3JldCcsXG4gIEdPT0dMRV9DTElFTlRfSUQ6ICdnb29nbGVDbGllbnRJZCcsXG4gIEdPT0dMRV9DTElFTlRfU0VDUkVUOiAnZ29vZ2xlQ2xpZW50U2VjcmV0JyxcbiAgVklFV0VSX1VSTDogJ3ZpZXdlclVSTCcsXG4gIFBVQkxJU0hFUl9VUkw6ICdwdWJsaXNoZXJVUkwnLFxuICBTVUJTQ1JJQkVSX1VSTDogJ3N1YnNjcmliZXJVcmwnLFxuICBPUFRJT05fRk9SX0JST0FEQ0FTVDogJ29wdGlvbkZvckJyb2FkY2FzdCcsXG4gIE9QVElPTl9GT1JfUFJJVkFURTogJ29wdGlvbkZvclByaXZhdGUnLFxuICBPUFRJT05fRk9SX0dST1VQOiAnb3B0aW9uRm9yR3JvdXAnLFxuICBTRUNVUkVfT1BUSU9OOiAnc2VjdXJlT3B0aW9uJyxcbiAgQU5UX01FRElBX0FQSV9FTkRQT0lOVDogJ0FudE1lZGlhQXBpRW5kcG9pbnQnLFxuICBBTlRfTUVESUFfQVBQTkFNRTogJ0FudE1lZGlhQXBwbmFtZScsXG4gIEFOVF9NRURJQV9FTlRFUlBSSVNFOiAnQW50TWVkaWFFbnRlcnByaXNlJyxcbiAgRk9PVEVSX0NPTlRFTlQ6ICdmb290ZXJDb250ZW50JyxcbiAgVVNFUl9CRU5FRklUOiAndXNlckJlbmVmaXQnLFxuICBNT0RFTF9CRU5FRklUOiAnbW9kZWxCZW5lZml0JyxcbiAgR09PR0xFX1JFQ0FQVENIQV9TSVRFX0tFWTogJ2dvb2dsZVJlQ2FwdGNoYVNpdGVLZXknLFxuICBHT09HTEVfUkVDQVBUQ0hBX1NFQ1JFVF9LRVk6ICdnb29nbGVSZUNhcHRjaGFTZWNyZXRLZXknLFxuICBFTkFCTEVfR09PR0xFX1JFQ0FQVENIQTogJ2VuYWJsZUdvb2dsZVJlQ2FwdGNoYScsXG4gIEJJVFBBWV9QUk9EVUNUSU9OX01PREU6ICdiaXRwYXlQcm9kdWN0aW9uTW9kZScsXG4gIEJJVFBBWV9BUElfVE9LRU46ICdiaXRwYXlBcGlUb2tlbicsXG4gIFRPS0VOX0NPTlZFUlNJT05fUkFURTogJ3Rva2VuQ29udmVyc2lvblJhdGUnLFxuICBTVFJJUEVfUFVCTElTSEFCTEVfS0VZOiAnc3RyaXBlUHVibGlzaGFibGVLZXknLFxuICBTVFJJUEVfU0VDUkVUX0tFWTogJ3N0cmlwZVNlY3JldEtleScsXG4gIEFHT1JBX0FQUElEOiAnYWdvcmFBcHBJZCcsXG4gIEFHT1JBX0VOQUJMRTogJ2Fnb3JhRW5hYmxlJyxcbiAgUEFZTUVOVF9HQVRFV0FZOiAncGF5bWVudEdhdGV3YXknXG59O1xuXG5leHBvcnQgY29uc3QgTUVOVV9TRUNUSU9OID0ge1xuICBNQUlOOiAnbWFpbicsXG4gIEhFQURFUjogJ2hlYWRlcicsXG4gIEZPT1RFUjogJ2Zvb3Rlcidcbn07XG5cbmV4cG9ydCBjb25zdCBSRUNFSVZFRF9QQUlEX1RPS0VOX0VWRU5UID0gJ1JFQ0VJVkVEX1BBSURfVE9LRU5fRVZFTlQnO1xuIiwiaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJsb2NrU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgQmxhbmtMYXlvdXQgZnJvbSAnLi9ibGFuay1sYXlvdXQnO1xuaW1wb3J0IFByaW1hcnlMYXlvdXQgZnJvbSAnLi9wcmltYXJ5LWxheW91dCc7XG5pbXBvcnQgTWFpbnRlbmFjZUxheW91dCBmcm9tICcuL21haW50ZW5hbmNlLWxheW91dCc7XG5pbXBvcnQgR0VPTGF5b3V0IGZyb20gJy4vZ2VvQmxvY2tlZC1sYXlvdXQnO1xuaW1wb3J0IFB1YmxpY0xheW91dCBmcm9tICcuL3B1YmxpYy1sYXlvdXQnO1xuXG5pbnRlcmZhY2UgRGVmYXVsdFByb3BzIHtcbiAgY2hpbGRyZW46IGFueTtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIG1haW50ZW5hbmNlOiBib29sZWFuO1xufVxuXG5jb25zdCBMYXlvdXRNYXAgPSB7XG4gIGdlb0Jsb2NrOiBHRU9MYXlvdXQsXG4gIG1haW50ZW5hbmNlOiBNYWludGVuYWNlTGF5b3V0LFxuICBwcmltYXJ5OiBQcmltYXJ5TGF5b3V0LFxuICBwdWJsaWM6IFB1YmxpY0xheW91dCxcbiAgYmxhbms6IEJsYW5rTGF5b3V0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTGF5b3V0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxEZWZhdWx0UHJvcHM+IHtcbiAgc3RhdGUgPSB7XG4gICAgZ2VvQmxvY2tlZDogZmFsc2VcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICAgIHRoaXMuY2xpZW50Q2hlY2tCbG9ja0J5SXAoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICB9XG5cbiAgYXN5bmMgY2xpZW50Q2hlY2tCbG9ja0J5SXAoKSB7XG4gICAgY29uc3QgY2hlY2tCbG9jayA9IGF3YWl0IGJsb2NrU2VydmljZS5jaGVja0NvdW50cnlCbG9jaygpO1xuICAgIGlmIChjaGVja0Jsb2NrPy5kYXRhPy5ibG9ja2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VvQmxvY2tlZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGxheW91dCwgbWFpbnRlbmFuY2UgPSBmYWxzZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZ2VvQmxvY2tlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICBjb25zdCBDb250YWluZXIgPSBtYWludGVuYW5jZSA/IExheW91dE1hcC5tYWludGVuYW5jZSA6IGdlb0Jsb2NrZWQgPyBMYXlvdXRNYXAuZ2VvQmxvY2sgOiBsYXlvdXQgJiYgTGF5b3V0TWFwW2xheW91dF0gPyBMYXlvdXRNYXBbbGF5b3V0XSA6IExheW91dE1hcC5wcmltYXJ5O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IExheW91dCwgQmFja1RvcCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IElVSUNvbmZpZyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzL3VpLWNvbmZpZyc7XG5pbXBvcnQgeyBsb2FkVUlWYWx1ZSB9IGZyb20gJ0ByZWR1eC91aS9hY3Rpb25zJztcbmltcG9ydCAnLi9wcmltYXJ5LWxheW91dC5sZXNzJztcblxuY29uc3QgRm9vdGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvZm9vdGVyJykpO1xuY29uc3QgTG9hZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bjb21wb25lbnRzL2NvbW1vbi9iYXNlL2xvYWRlcicpKTtcblxuaW50ZXJmYWNlIERlZmF1bHRQcm9wcyB7XG4gIGNoaWxkcmVuOiBhbnk7XG4gIHVpOiBJVUlDb25maWc7XG4gIGxvYWRVSVZhbHVlOiBGdW5jdGlvbjtcbn1cblxuY2xhc3MgQmxhbmtMYXlvdXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PERlZmF1bHRQcm9wcz4ge1xuICBzdGF0ZSA9IHtcbiAgICByb3V0ZXJDaGFuZ2U6IGZhbHNlXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBsb2FkVUlWYWx1ZTogaGFuZGxlTG9hZFVJIH0gPSB0aGlzLnByb3BzO1xuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBoYW5kbGVMb2FkVUkoKTtcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZSgpO1xuICB9XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2UoKSB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihcbiAgICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAgIGFzeW5jICgpID0+IHRoaXMuc2V0U3RhdGUoeyByb3V0ZXJDaGFuZ2U6IHRydWUgfSlcbiAgICApO1xuICAgIFJvdXRlci5ldmVudHMub24oXG4gICAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgICBhc3luYyAoKSA9PiB0aGlzLnNldFN0YXRlKHsgcm91dGVyQ2hhbmdlOiBmYWxzZSB9KVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIHVpXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyByb3V0ZXJDaGFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1aT8udGhlbWUgPT09ICdkYXJrJyA/ICdjb250YWluZXIgZGFyaycgOiAnY29udGFpbmVyJ30gaWQ9XCJwcmltYXJ5TGF5b3V0XCI+XG4gICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJjb250ZW50XCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICB7cm91dGVyQ2hhbmdlICYmIDxMb2FkZXIgLz59XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8QmFja1RvcCBjbGFzc05hbWU9XCJiYWNrVG9wXCIgLz5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogYW55KSA9PiAoe1xuICB1aTogc3RhdGUudWlcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IGxvYWRVSVZhbHVlIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJsYW5rTGF5b3V0KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdFT0xheW91dDogRnVuY3Rpb25Db21wb25lbnQ8YW55PiA9ICgpID0+IChcbiAgPG1haW4gcm9sZT1cIm1haW5cIj5cbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZDogYHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IHRvcCwgI2U2NjQ2NSwgdHJhbnNwYXJlbnQpLFxuICAgICAgICAgICAgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAjNGQ5ZjBjLCB0cmFuc3BhcmVudClgXG4gICAgfX1cbiAgICA+XG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6ICczMHB4JyB9fT5XZSd2ZSBzb3JyeS48L2gxPlxuICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMjdweCcgfX0+V2Vic2l0ZSBpcyBub3QgYWxsb3dlZCBpbiB5b3VyIGNvdW50cnk8L2gzPlxuICAgIDwvZGl2PlxuICA8L21haW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHRU9MYXlvdXQ7XG4iLCJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTWFpbnRlbmFjZUxheW91dDogRnVuY3Rpb25Db21wb25lbnQ8YW55PiA9ICgpID0+IChcbiAgPG1haW4gcm9sZT1cIm1haW5cIj5cbiAgICA8aW1nIGFsdD1cIlwiIHNyYz1cIi9zdGF0aWMvdW5kZXItY29uc3RydWN0aW9uLmpwZ1wiIHdpZHRoPVwiMTAwJVwiIC8+XG4gIDwvbWFpbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW50ZW5hY2VMYXlvdXQ7XG4iLCJpbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IExheW91dCwgQmFja1RvcCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IElVSUNvbmZpZyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzL3VpLWNvbmZpZyc7XG5pbXBvcnQgeyBsb2FkVUlWYWx1ZSB9IGZyb20gJ0ByZWR1eC91aS9hY3Rpb25zJztcbmltcG9ydCAnLi9wcmltYXJ5LWxheW91dC5sZXNzJztcblxuY29uc3QgSGVhZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvaGVhZGVyJykpO1xuY29uc3QgRm9vdGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvZm9vdGVyJykpO1xuY29uc3QgTG9hZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bjb21wb25lbnRzL2NvbW1vbi9iYXNlL2xvYWRlcicpKTtcblxuaW50ZXJmYWNlIERlZmF1bHRQcm9wcyB7XG4gIGxvYWRVSVZhbHVlOiBGdW5jdGlvbjtcbiAgY2hpbGRyZW46IGFueTtcbiAgdWk6IElVSUNvbmZpZ1xufVxuXG5jbGFzcyBQcmltYXJ5TGF5b3V0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxEZWZhdWx0UHJvcHM+IHtcbiAgc3RhdGUgPSB7XG4gICAgcm91dGVyQ2hhbmdlOiBmYWxzZVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbG9hZFVJVmFsdWU6IGhhbmRsZUxvYWRVSSB9ID0gdGhpcy5wcm9wcztcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgaGFuZGxlTG9hZFVJKCk7XG4gICAgcHJvY2Vzcy5icm93c2VyICYmIHRoaXMuaGFuZGxlU3RhdGVDaGFuZ2UoKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXRlQ2hhbmdlKCkge1xuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhc3luYyAoKSA9PiB0aGlzLnNldFN0YXRlKHsgcm91dGVyQ2hhbmdlOiB0cnVlIH0pKTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXN5bmMgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJvdXRlckNoYW5nZTogZmFsc2UgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCB1aVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcm91dGVyQ2hhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dWk/LnRoZW1lID09PSAnZGFyaycgPyAnY29udGFpbmVyIGRhcmsnIDogJ2NvbnRhaW5lcid9XG4gICAgICAgICAgICBpZD1cInByaW1hcnlMYXlvdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxMYXlvdXQuQ29udGVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3JvdXRlckNoYW5nZSAmJiA8TG9hZGVyIC8+fVxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0xheW91dC5Db250ZW50PlxuICAgICAgICAgICAgPEJhY2tUb3AgY2xhc3NOYW1lPVwiYmFja1RvcFwiIC8+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IGFueSkgPT4gKHtcbiAgdWk6IHsgLi4uc3RhdGUudWkgfVxufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IGxvYWRVSVZhbHVlIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByaW1hcnlMYXlvdXQpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gY2hpbGRyZW47XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuaW1wb3J0IHtcbiAgcmVkdWNlLCBpc0FycmF5LCBpc0VtcHR5LCBmbGF0dGVuXG59IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7IHRha2VMYXRlc3QsIGRlbGF5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUFjdGlvbiBhcyBSZWR1eENyZWF0ZUFjdGlvbixcbiAgaGFuZGxlQWN0aW9ucyBhcyBoYW5kbGVSZWR1eEFjdGlvbnMsXG4gIEFjdGlvblxufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcblxuZXhwb3J0IHR5cGUgQWN0aW9uRnVuY3Rpb24xPFQxLCBSPiA9ICh0MT86IFQxKSA9PiBSO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkZ1bmN0aW9uPFBheWxvYWQ+XG4gIGV4dGVuZHMgQWN0aW9uRnVuY3Rpb24xPFBheWxvYWQsIEFjdGlvbjxQYXlsb2FkPj4ge1xuICBpczogKHR5cGU6IHN0cmluZykgPT4gYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uPFBheWxvYWQgPSBhbnk+KHR5cGU6IHN0cmluZyk6IEFjdGlvbkZ1bmN0aW9uPFBheWxvYWQ+IHtcbiAgY29uc3QgYWN0aW9uID0gUmVkdXhDcmVhdGVBY3Rpb248UGF5bG9hZD4odHlwZSkgYXMgQWN0aW9uRnVuY3Rpb248UGF5bG9hZD47XG4gIGFjdGlvbi5pcyA9IChhVHlwZTogc3RyaW5nKSA9PiBhY3Rpb24udG9TdHJpbmcoKSA9PT0gYVR5cGU7XG4gIHJldHVybiBhY3Rpb247XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZnVuY3Rpb24gY3JlYXRlQXN5bmNBY3Rpb24oYWN0aW9uOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IGFueSB7XG4gIHJldHVybiB7XG4gICAgW2FjdGlvbl06IGNyZWF0ZUFjdGlvbih0eXBlKSxcbiAgICBbYCR7YWN0aW9ufVN1Y2Nlc3NgXTogY3JlYXRlQWN0aW9uKGAke3R5cGV9X1NVQ0NFU1NgKSxcbiAgICBbYCR7YWN0aW9ufUZhaWxgXTogY3JlYXRlQWN0aW9uKGAke3R5cGV9X0ZBSUxgKVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBc3luY0FjdGlvbnM8XG4gIEFjdGlvbkRhdGEgPSBhbnksXG4gIFN1Y2Nlc3NEYXRhID0gYW55LFxuICBFcnJvckRhdGEgPSBFcnJvclxuPihcbiAgdHlwZTogc3RyaW5nXG4pOiBbXG4gIEFjdGlvbkZ1bmN0aW9uPEFjdGlvbkRhdGE+LFxuICBBY3Rpb25GdW5jdGlvbjxTdWNjZXNzRGF0YT4sXG4gIEFjdGlvbkZ1bmN0aW9uPEVycm9yRGF0YT5cbl0ge1xuICByZXR1cm4gW1xuICAgIGNyZWF0ZUFjdGlvbjxBY3Rpb25EYXRhPih0eXBlKSxcbiAgICBjcmVhdGVBY3Rpb248U3VjY2Vzc0RhdGE+KGAke3R5cGV9X1NVQ0NFU1NgKSxcbiAgICBjcmVhdGVBY3Rpb248RXJyb3JEYXRhPihgJHt0eXBlfV9GQUlMYClcbiAgXTtcbn1cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmZ1bmN0aW9uIGhhbmRsZUFjdGlvbnMoYWN0aW9uczogYW55LCBpbml0aWFsU3RhdGU6IGFueSkge1xuICByZXR1cm4gaGFuZGxlUmVkdXhBY3Rpb25zKFxuICAgIHJlZHVjZShcbiAgICAgIGFjdGlvbnMsXG4gICAgICAocmVkdWNlcjogYW55LCBoYW5kbGVyLCBhY3Rpb24pID0+IHtcbiAgICAgICAgcmVkdWNlclthY3Rpb25dID0gKHN0YXRlOiBhbnksIGFjdDogYW55KSA9PiBoYW5kbGVyKHN0YXRlLnNldCgnYWN0aW9uJywgYWN0aW9uKSwgYWN0KTtcbiAgICAgICAgcmV0dXJuIHJlZHVjZXI7XG4gICAgICB9LFxuICAgICAge31cbiAgICApLFxuICAgIGluaXRpYWxTdGF0ZVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWR1Y2VycyhcbiAgc3RhdGVDb250ZXh0OiBzdHJpbmcsXG4gIHJlZHVjZXJzOiBhbnlbXSxcbiAgaW5pdGlhbFN0YXRlOiBhbnksXG4gIHByZXZlbnRSZXNldHRpbmc6IGJvb2xlYW4gPSBmYWxzZVxuKTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBbc3RhdGVDb250ZXh0XTogaGFuZGxlUmVkdXhBY3Rpb25zKFxuICAgICAgcmVkdWNlKFxuICAgICAgICBmbGF0dGVuKHJlZHVjZXJzKSxcbiAgICAgICAgKHJlZHVjZXI6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXNBcnJheShhY3Rpb24ub24pKSB7XG4gICAgICAgICAgICBhY3Rpb24ub24uZm9yRWFjaCgoYWN0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmVkdWNlclthY3RdID0gYWN0aW9uLnJlZHVjZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgcmVkdWNlclthY3Rpb24ub25dID0gYWN0aW9uLnJlZHVjZXI7XG4gICAgICAgICAgcmV0dXJuIHJlZHVjZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnRSZXNldHRpbmdcbiAgICAgICAgICA/IHt9XG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICBBUFBfU1RBVEVfUkVTRVQ6ICgpID0+IGluaXRpYWxTdGF0ZVxuICAgICAgICAgIH1cbiAgICAgICksXG4gICAgICBpbml0aWFsU3RhdGVcbiAgICApXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTYWdhcyhzYWdhczogYW55W10pOiBhbnlbXSB7XG4gIHJldHVybiBmbGF0dGVuKHNhZ2FzKS5tYXAoKHNhZ2E6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgb24sIGVmZmVjdCA9IHRha2VMYXRlc3QsIHdvcmtlciB9ID0gc2FnYTtcbiAgICByZXR1cm4gZnVuY3Rpb24qICgpIHtcbiAgICAgIHlpZWxkIGVmZmVjdChvbiwgZnVuY3Rpb24qIChhY3Rpb246IGFueSkge1xuICAgICAgICB5aWVsZCBkZWxheSgwKTtcbiAgICAgICAgeWllbGQgd29ya2VyKGFjdGlvbik7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzQShjb250ZXh0OiBzdHJpbmcsIGtleXM6IGFueVtdID0gW10pOiBhbnkge1xuICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlW2NvbnRleHRdO1xuXG4gIGlmIChpc0VtcHR5KGtleXMpKSByZXR1cm4gc3RhdGVTZWxlY3RvcjtcblxuICByZXR1cm4ga2V5cy5tYXAoKGtleTogYW55KSA9PiAoc3RhdGU6IGFueSkgPT4gKGlzQXJyYXkoa2V5KVxuICAgID8gc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0SW4oa2V5KVxuICAgIDogc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0KGtleSkpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzKGNvbnRleHQ6IHN0cmluZywga2V5czogc3RyaW5nW10pOiBhbnkge1xuICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlW2NvbnRleHRdO1xuXG4gIHJldHVybiByZWR1Y2UoXG4gICAga2V5cyxcbiAgICAoc2VsZWN0b3JzOiBhbnksIGtleSkgPT4ge1xuICAgICAgc2VsZWN0b3JzW2Ake2tleX1TZWxlY3RvcmBdID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldChrZXkpO1xuICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICB9LFxuICAgIHt9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUpTU2VsZWN0b3JzKGNvbnRleHQ6IHN0cmluZywga2V5czogc3RyaW5nW10pOiBhbnkge1xuICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlW2NvbnRleHRdO1xuXG4gIHJldHVybiByZWR1Y2UoXG4gICAga2V5cyxcbiAgICAoc2VsZWN0b3JzOiBhbnksIGtleSkgPT4ge1xuICAgICAgc2VsZWN0b3JzW2Ake2tleX1TZWxlY3RvcmBdID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlU2VsZWN0b3Ioc3RhdGUpW2tleV07XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvbixcbiAgY3JlYXRlQXN5bmNBY3Rpb25zLFxuICBjcmVhdGVTZWxlY3RvcnNBLFxuICBoYW5kbGVBY3Rpb25zLFxuICBjcmVhdGVSZWR1Y2VycyxcbiAgY3JlYXRlU2VsZWN0b3JzLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgY3JlYXRlSlNTZWxlY3RvcnNcbn07XG4iLCJpbXBvcnQgeyBTdG9yZSBhcyBSRFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuXG5leHBvcnQgdHlwZSBTdG9yZSA9IFJEU3RvcmU8e30+O1xuXG5sZXQgc3RvcmU6IFN0b3JlIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0U3RvcmU6ICgpID0+IHN0b3JlLFxuICBzZXRTdG9yZTogKHM6IFN0b3JlKSA9PiB7XG4gICAgc3RvcmUgPSBzO1xuICB9XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCByZWdleCA9IC8oaHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJSFcXC1cXC9dKSk/LztcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbChlbWFpbDogc3RyaW5nKSB7XG4gIHJldHVybiAvXlthLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLy50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVXVpZCA9ICgpID0+ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwO1xuICAgIGNvbnN0IHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbn0pIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24sIGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWwgfSA9IGNyZWF0ZUFzeW5jQWN0aW9uKFxuICAnbG9naW4nLFxuICAnTE9HSU4nXG4pO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpblBlcmZvcm1lciB9ID0gY3JlYXRlQXN5bmNBY3Rpb24oXG4gICdsb2dpblBlcmZvcm1lcicsXG4gICdMT0dJTlBFUkZPUk1FUidcbik7XG5cbmV4cG9ydCBjb25zdCB7IGxvZ2luU29jaWFsIH0gPSBjcmVhdGVBc3luY0FjdGlvbihcbiAgJ2xvZ2luU29jaWFsJyxcbiAgJ0xPR0lOU09DSUFMJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHsgcmVnaXN0ZXJGYW4sIHJlZ2lzdGVyRmFuU3VjY2VzcywgcmVnaXN0ZXJGYW5GYWlsIH0gPSBjcmVhdGVBc3luY0FjdGlvbihcbiAgJ3JlZ2lzdGVyRmFuJyxcbiAgJ1JFR0lTVEVSRkFOJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHsgcmVnaXN0ZXJQZXJmb3JtZXIsIHJlZ2lzdGVyUGVyZm9ybWVyU3VjY2VzcywgcmVnaXN0ZXJQZXJmb3JtZXJGYWlsIH0gPSBjcmVhdGVBc3luY0FjdGlvbihcbiAgJ3JlZ2lzdGVyUGVyZm9ybWVyJyxcbiAgJ1JFR0lTVEVSUEVSRk9STUVSJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHsgZm9yZ290LCBmb3Jnb3RTdWNjZXNzLCBmb3Jnb3RGYWlsIH0gPSBjcmVhdGVBc3luY0FjdGlvbihcbiAgJ2ZvcmdvdCcsXG4gICdGT1JHT1QnXG4pO1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gY3JlYXRlQWN0aW9uKCdsb2dvdXQnKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gY3JlYXRlQWN0aW9uKCdnZXRDdXJyZW50VXNlcicpO1xuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlcnMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7XG4gIGxvZ2luLFxuICBsb2dpblN1Y2Nlc3MsXG4gIGxvZ2luRmFpbCxcbiAgcmVnaXN0ZXJGYW5TdWNjZXNzLFxuICByZWdpc3RlckZhbkZhaWwsXG4gIHJlZ2lzdGVyRmFuLFxuICByZWdpc3RlclBlcmZvcm1lclN1Y2Nlc3MsXG4gIHJlZ2lzdGVyUGVyZm9ybWVyLFxuICByZWdpc3RlclBlcmZvcm1lckZhaWwsXG4gIGxvZ2luUGVyZm9ybWVyLFxuICBmb3Jnb3RTdWNjZXNzLFxuICBmb3Jnb3RGYWlsLFxuICBsb2dvdXRcbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2dnZWRJbjogZmFsc2UsXG4gIGF1dGhVc2VyOiBudWxsLFxuICBsb2dpbkF1dGg6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBkYXRhOiBudWxsLFxuICAgIHN1Y2Nlc3M6IGZhbHNlXG4gIH0sXG4gIHJlZ2lzdGVyRmFuRGF0YToge1xuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGRhdGE6IG51bGwsXG4gICAgc3VjY2VzczogZmFsc2VcbiAgfSxcbiAgcmVnaXN0ZXJQZXJmb3JtZXJEYXRhOiB7XG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgZGF0YTogbnVsbCxcbiAgICBzdWNjZXNzOiBmYWxzZVxuICB9LFxuICBmb3Jnb3REYXRhOiB7XG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgZGF0YTogbnVsbCxcbiAgICBzdWNjZXNzOiBmYWxzZVxuICB9XG59O1xuXG5jb25zdCBhdXRoUmVkdWNlcnMgPSBbXG4gIHtcbiAgICBvbjogbG9naW4sXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9naW5BdXRoOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogdHJ1ZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGxvZ2luUGVyZm9ybWVyLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvZ2luQXV0aDoge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWUsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBsb2dpblN1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgbG9naW5BdXRoOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgZGF0YTogZGF0YS5wYXlsb2FkLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbG9naW5GYWlsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICBsb2dpbkF1dGg6IHtcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZGF0YS5wYXlsb2FkLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlZ2lzdGVyRmFuLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZ2lzdGVyRmFuRGF0YToge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWUsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogcmVnaXN0ZXJGYW5TdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVnaXN0ZXJGYW5EYXRhOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgZGF0YTogZGF0YS5wYXlsb2FkLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogcmVnaXN0ZXJGYW5GYWlsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVnaXN0ZXJGYW5EYXRhOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiByZWdpc3RlclBlcmZvcm1lcixcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWdpc3RlclBlcmZvcm1lckRhdGE6IHtcbiAgICAgICAgICByZXF1ZXN0aW5nOiB0cnVlLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlZ2lzdGVyUGVyZm9ybWVyU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZ2lzdGVyUGVyZm9ybWVyRGF0YToge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIGRhdGE6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlZ2lzdGVyUGVyZm9ybWVyRmFpbCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZ2lzdGVyUGVyZm9ybWVyRGF0YToge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBkYXRhLnBheWxvYWQsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZm9yZ290U3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZ2lzdGVyRmFuRGF0YToge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBmb3Jnb3RGYWlsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVnaXN0ZXJGYW5EYXRhOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogZGF0YS5wYXlsb2FkLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGxvZ291dCxcbiAgICByZWR1Y2VyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2Uoe30sIGNyZWF0ZVJlZHVjZXJzKCdhdXRoJywgW2F1dGhSZWR1Y2Vyc10sIGluaXRpYWxTdGF0ZSkpO1xuIiwiaW1wb3J0IHsgZmxhdHRlbiwgcGljayB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgY3JlYXRlU2FnYXMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgYXV0aFNlcnZpY2UsIHVzZXJTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2VzJztcbmltcG9ydCB7XG4gIElMb2dpbiwgSUZhblJlZ2lzdGVyLCBJRm9yZ290XG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVwZGF0ZUN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vdXNlci9hY3Rpb25zJztcbmltcG9ydCB7XG4gIGxvZ2luU29jaWFsLFxuICBsb2dpbixcbiAgbG9naW5TdWNjZXNzLFxuICBsb2dvdXQsXG4gIGxvZ2luRmFpbCxcbiAgcmVnaXN0ZXJGYW5GYWlsLFxuICByZWdpc3RlckZhbixcbiAgcmVnaXN0ZXJGYW5TdWNjZXNzLFxuICByZWdpc3RlclBlcmZvcm1lckZhaWwsXG4gIHJlZ2lzdGVyUGVyZm9ybWVyLFxuICByZWdpc3RlclBlcmZvcm1lclN1Y2Nlc3MsXG4gIGZvcmdvdCxcbiAgZm9yZ290U3VjY2VzcyxcbiAgZm9yZ290RmFpbCxcbiAgZ2V0Q3VycmVudFVzZXJcbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgYXV0aFNhZ2FzID0gW1xuICB7XG4gICAgb246IGxvZ2luLFxuICAgICogd29ya2VyKGRhdGE6IGFueSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGRhdGEucGF5bG9hZCBhcyBJTG9naW47XG4gICAgICAgIGNvbnN0IHJlc3AgPSAoeWllbGQgYXV0aFNlcnZpY2UubG9naW4ocGF5bG9hZCkpLmRhdGE7XG4gICAgICAgIC8vIHN0b3JlIHRva2VuLCB1cGRhdGUgc3RvcmUgYW5kIHJlZGlyZWN0IHRvIGRhc2hib2FyZCBwYWdlXG4gICAgICAgIHlpZWxkIGF1dGhTZXJ2aWNlLnNldFRva2VuKHJlc3AudG9rZW4sIHBheWxvYWQ/LnJlbWVtYmVyKTtcbiAgICAgICAgY29uc3QgdXNlclJlc3AgPSB5aWVsZCB1c2VyU2VydmljZS5tZSgpO1xuICAgICAgICB5aWVsZCBwdXQodXBkYXRlQ3VycmVudFVzZXIodXNlclJlc3AuZGF0YSkpO1xuICAgICAgICB5aWVsZCBwdXQobG9naW5TdWNjZXNzKCkpO1xuICAgICAgICBpZiAoIXVzZXJSZXNwPy5kYXRhPy5pc1BlcmZvcm1lcikge1xuICAgICAgICAgIFJvdXRlci5wdXNoKCghdXNlclJlc3AuZGF0YS5lbWFpbCB8fCAhdXNlclJlc3AuZGF0YS51c2VybmFtZSkgPyAnL3VzZXIvYWNjb3VudCcgOiAnL2hvbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlclJlc3A/LmRhdGE/LmlzUGVyZm9ybWVyKSB7XG4gICAgICAgICAgKCF1c2VyUmVzcC5kYXRhLmVtYWlsIHx8ICF1c2VyUmVzcC5kYXRhLnVzZXJuYW1lKSA/IFJvdXRlci5wdXNoKCcvbW9kZWwvYWNjb3VudCcpIDogUm91dGVyLnB1c2goeyBwYXRobmFtZTogJy9tb2RlbC9wcm9maWxlJywgcXVlcnk6IHsgdXNlcm5hbWU6IHVzZXJSZXNwLmRhdGEudXNlcm5hbWUgfHwgdXNlclJlc3AuZGF0YS5faWQgfSB9LCBgLyR7dXNlclJlc3AuZGF0YS51c2VybmFtZSB8fCB1c2VyUmVzcC5kYXRhLl9pZH1gKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcj8ubWVzc2FnZSB8fCAnSW5jb3JyZWN0IGNyZWRlbnRpYWxzIScpO1xuICAgICAgICB5aWVsZCBwdXQobG9naW5GYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGxvZ2luU29jaWFsLFxuICAgICogd29ya2VyKGRhdGE6IGFueSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGRhdGEucGF5bG9hZCBhcyBhbnk7XG4gICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBheWxvYWQ7XG4gICAgICAgIHlpZWxkIGF1dGhTZXJ2aWNlLnNldFRva2VuKHRva2VuKTtcbiAgICAgICAgY29uc3QgdXNlclJlc3AgPSB5aWVsZCB1c2VyU2VydmljZS5tZSgpO1xuICAgICAgICB5aWVsZCBwdXQodXBkYXRlQ3VycmVudFVzZXIodXNlclJlc3AuZGF0YSkpO1xuICAgICAgICB5aWVsZCBwdXQobG9naW5TdWNjZXNzKCkpO1xuICAgICAgICBpZiAoIXVzZXJSZXNwPy5kYXRhPy5pc1BlcmZvcm1lcikge1xuICAgICAgICAgIFJvdXRlci5wdXNoKCghdXNlclJlc3AuZGF0YS5lbWFpbCB8fCAhdXNlclJlc3AuZGF0YS51c2VybmFtZSkgPyAnL3VzZXIvYWNjb3VudCcgOiAnL2hvbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlclJlc3A/LmRhdGE/LmlzUGVyZm9ybWVyKSB7XG4gICAgICAgICAgKCF1c2VyUmVzcC5kYXRhLmVtYWlsIHx8ICF1c2VyUmVzcC5kYXRhLnVzZXJuYW1lKSA/IFJvdXRlci5wdXNoKCcvbW9kZWwvYWNjb3VudCcpIDogUm91dGVyLnB1c2goeyBwYXRobmFtZTogJy9tb2RlbC9wcm9maWxlJywgcXVlcnk6IHsgdXNlcm5hbWU6IHVzZXJSZXNwLmRhdGEudXNlcm5hbWUgfHwgdXNlclJlc3AuZGF0YS5faWQgfSB9LCBgLyR7dXNlclJlc3AuZGF0YS51c2VybmFtZSB8fCB1c2VyUmVzcC5kYXRhLl9pZH1gKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcj8ubWVzc2FnZSB8fCAnSW5jb3JyZWN0IGNyZWRlbnRpYWxzIScpO1xuICAgICAgICB5aWVsZCBwdXQobG9naW5GYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlZ2lzdGVyRmFuLFxuICAgICogd29ya2VyKGRhdGE6IGFueSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGRhdGEucGF5bG9hZCBhcyBJRmFuUmVnaXN0ZXI7XG4gICAgICAgIGNvbnN0IHJlc3AgPSAoeWllbGQgYXV0aFNlcnZpY2UucmVnaXN0ZXIocGF5bG9hZCkpLmRhdGE7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhyZXNwPy5tZXNzYWdlIHx8ICdTaWduIHVwIHN1Y2Nlc3MhJywgMTApO1xuICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICB5aWVsZCBwdXQocmVnaXN0ZXJGYW5TdWNjZXNzKHJlc3ApKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3I/Lm1lc3NhZ2UgfHwgJ1RoaXMgVXNlcm5hbWUgb3IgZW1haWwgYWRkcmVzcyBoYXMgYmVlbiBhbHJlYWR5IHRha2VuLicsIDUpO1xuICAgICAgICB5aWVsZCBwdXQocmVnaXN0ZXJGYW5GYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlZ2lzdGVyUGVyZm9ybWVyLFxuICAgICogd29ya2VyKGRhdGE6IGFueSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uRmlsZXMgPSBbe1xuICAgICAgICAgIGZpZWxkbmFtZTogJ2lkVmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICBmaWxlOiBkYXRhLnBheWxvYWQuaWRWZXJpZmljYXRpb25GaWxlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBmaWVsZG5hbWU6ICdkb2N1bWVudFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgZmlsZTogZGF0YS5wYXlsb2FkLmRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZVxuICAgICAgICB9XTtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHBpY2soZGF0YS5wYXlsb2FkLCBbJ25hbWUnLCAndXNlcm5hbWUnLCAncGFzc3dvcmQnLFxuICAgICAgICAgICdnZW5kZXInLCAnZW1haWwnLCAnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ2NvdW50cnknLCAnZGF0ZU9mQmlydGgnXSk7XG4gICAgICAgIGNvbnN0IHJlc3AgPSAoeWllbGQgYXV0aFNlcnZpY2UucmVnaXN0ZXJQZXJmb3JtZXIodmVyaWZpY2F0aW9uRmlsZXMsIHBheWxvYWQsICgpID0+IHt9KSkuZGF0YTtcbiAgICAgICAgeWllbGQgcHV0KHJlZ2lzdGVyUGVyZm9ybWVyU3VjY2VzcyhyZXNwKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0geWllbGQgUHJvbWlzZS5yZXNvbHZlKGUpO1xuICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ0FuIGVycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInKTtcbiAgICAgICAgeWllbGQgcHV0KHJlZ2lzdGVyUGVyZm9ybWVyRmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBsb2dvdXQsXG4gICAgKiB3b3JrZXIoKSB7XG4gICAgICB5aWVsZCBhdXRoU2VydmljZS5yZW1vdmVUb2tlbigpO1xuICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZm9yZ290LFxuICAgICogd29ya2VyKGRhdGE6IGFueSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGRhdGEucGF5bG9hZCBhcyBJRm9yZ290O1xuICAgICAgICBjb25zdCByZXNwID0gKHlpZWxkIGF1dGhTZXJ2aWNlLnJlc2V0UGFzc3dvcmQocGF5bG9hZCkpLmRhdGE7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcbiAgICAgICAgICAnV2VcXCd2ZSBzZW50IGFuIGVtYWlsIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQsIHBsZWFzZSBjaGVjayB5b3VyIGluYm94LicsXG4gICAgICAgICAgMTBcbiAgICAgICAgKTtcbiAgICAgICAgeWllbGQgcHV0KGZvcmdvdFN1Y2Nlc3MocmVzcCkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgbWVzc2FnZS5lcnJvcigoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSkgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyJywgNSk7XG4gICAgICAgIHlpZWxkIHB1dChmb3Jnb3RGYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldEN1cnJlbnRVc2VyLFxuICAgICogd29ya2VyKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlclJlc3AgPSB5aWVsZCB1c2VyU2VydmljZS5tZSgpO1xuICAgICAgICB5aWVsZCBwdXQodXBkYXRlQ3VycmVudFVzZXIodXNlclJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZmxhdHRlbihbY3JlYXRlU2FnYXMoYXV0aFNhZ2FzKV0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24gfSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHsgYWRkQ2FydCB9ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2FkZENhcnQnLCAnQUREX0NBUlQnKTtcblxuZXhwb3J0IGNvbnN0IHsgcmVtb3ZlQ2FydCB9ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3JlbW92ZUNhcnQnLCAnUkVNT1ZFX0NBUlQnKTtcbmV4cG9ydCBjb25zdCB7IGNsZWFyQ2FydCB9ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2NsZWFyQ2FydCcsICdDTEVBUl9DQVJUJyk7XG5leHBvcnQgY29uc3QgeyB1cGRhdGVJdGVtQ2FydCB9ID0gY3JlYXRlQXN5bmNBY3Rpb24oXG4gICd1cGRhdGVJdGVtQ2FydCcsXG4gICdVUERBVEVfSVRFTV9DQVJUJ1xuKTtcbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXJzIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xuaW1wb3J0IHtcbiAgYWRkQ2FydCwgcmVtb3ZlQ2FydCwgdXBkYXRlSXRlbUNhcnQsIGNsZWFyQ2FydFxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRvdGFsOiAwLFxuICBpdGVtczogW11cbn07XG5cbmNvbnN0IGNhcnRSZWR1Y2VycyA9IFtcbiAge1xuICAgIG9uOiBhZGRDYXJ0LFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgZGF0YS5wYXlsb2FkLmxlbmd0aCxcbiAgICAgICAgaXRlbXM6IFsuLi5zdGF0ZS5pdGVtcywgLi4uZGF0YS5wYXlsb2FkXVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogcmVtb3ZlQ2FydCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCAtIGRhdGEucGF5bG9hZC5sZW5ndGgsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgLi4uc3RhdGUuaXRlbXMuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW06IElQcm9kdWN0KSA9PiBkYXRhLnBheWxvYWQuaW5kZXhPZihpdGVtKSA+IC0xXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBjbGVhckNhcnQsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogdXBkYXRlSXRlbUNhcnQsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuaXRlbXMuZmluZEluZGV4KFxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5faWQgPT09IGRhdGEucGF5bG9hZC5kYXRhLl9pZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLnN0YXRlLml0ZW1zXTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIG5ld0FycmF5W2luZGV4XSA9IHtcbiAgICAgICAgICAuLi5uZXdBcnJheVtpbmRleF0sXG4gICAgICAgICAgcXVhbnRpdHk6IGRhdGEucGF5bG9hZC5xdWFudGl0eSB8fCAxXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IG5ld0FycmF5XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2Uoe30sIGNyZWF0ZVJlZHVjZXJzKCdjYXJ0JywgW2NhcnRSZWR1Y2Vyc10sIGluaXRpYWxTdGF0ZSkpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24gfSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0Q29tbWVudHMsXG4gIGdldENvbW1lbnRzU3VjY2VzcyxcbiAgZ2V0Q29tbWVudHNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldENvbW1lbnRzJywgJ0dFVF9USEVfQ09NTUVOVFMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgbW9yZUNvbW1lbnQsIG1vcmVDb21tZW50U3VjY2VzcywgbW9yZUNvbW1lbnRGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ21vcmVDb21tZW50JywgJ01PUkVfQ09NTUVOVCcpO1xuXG5leHBvcnQgY29uc3Qge1xuICBjcmVhdGVDb21tZW50LCBjcmVhdGVDb21tZW50U3VjY2VzcywgY3JlYXRlQ29tbWVudEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignY3JlYXRlQ29tbWVudCcsICdDUkVBVEVfQ09NTUVOVCcpO1xuXG5leHBvcnQgY29uc3Qge1xuICBkZWxldGVDb21tZW50LCBkZWxldGVDb21tZW50U3VjY2VzcywgZGVsZXRlQ29tbWVudEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZGVsZXRlQ29tbWVudCcsICdERUxFVEVfQ09NTUVOVCcpO1xuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlcnMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7IElSZWR1eEFjdGlvbiB9IGZyb20gJ0BpbnRlcmZhY2VzL3JlZHV4JztcbmltcG9ydCB7XG4gIGdldENvbW1lbnRzLCBnZXRDb21tZW50c1N1Y2Nlc3MsIGdldENvbW1lbnRzRmFpbCxcbiAgbW9yZUNvbW1lbnQsIG1vcmVDb21tZW50U3VjY2VzcywgbW9yZUNvbW1lbnRGYWlsLFxuICBjcmVhdGVDb21tZW50LCBjcmVhdGVDb21tZW50RmFpbCwgY3JlYXRlQ29tbWVudFN1Y2Nlc3MsXG4gIGRlbGV0ZUNvbW1lbnRTdWNjZXNzXG59IGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWN0aXZlT2JqZWN0OiB7fSxcbiAgY29tbWVudE1hcHBpbmc6IHt9LFxuICBjb21tZW50OiB7XG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgZGF0YTogbnVsbFxuICB9XG59O1xuXG5jb25zdCBjb21tZW50UmVkdWNlcnMgPSBbXG4gIHtcbiAgICBvbjogZ2V0Q29tbWVudHMsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgY29uc3QgeyBvYmplY3RJZCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgY29uc3QgbmV4dFN0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgICAgbmV4dFN0YXRlLmFjdGl2ZU9iamVjdC5faWQgPSBvYmplY3RJZDtcbiAgICAgIG5leHRTdGF0ZS5jb21tZW50TWFwcGluZ1tvYmplY3RJZF0gPSB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgdG90YWw6IDBcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXh0U3RhdGVcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldENvbW1lbnRzU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgY29uc3QgbmV4dFN0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgICAgY29uc3Qgb2JqZWN0SWQgPSBkYXRhLnBheWxvYWQuZGF0YSAmJiBkYXRhLnBheWxvYWQuZGF0YS5sZW5ndGggPyBkYXRhLnBheWxvYWQuZGF0YVswXS5vYmplY3RJZCA6IG5leHRTdGF0ZS5hY3RpdmVPYmplY3QuX2lkO1xuICAgICAgaWYgKG9iamVjdElkKSB7XG4gICAgICAgIG5leHRTdGF0ZS5jb21tZW50TWFwcGluZ1tvYmplY3RJZF0gPSB7XG4gICAgICAgICAgaXRlbXM6IGRhdGEucGF5bG9hZC5kYXRhLFxuICAgICAgICAgIHRvdGFsOiBkYXRhLnBheWxvYWQudG90YWwsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5leHRTdGF0ZVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0Q29tbWVudHNGYWlsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgICBjb25zdCBvYmplY3RJZCA9IGRhdGEucGF5bG9hZC5kYXRhICYmIGRhdGEucGF5bG9hZC5kYXRhLmxlbmd0aCA/IGRhdGEucGF5bG9hZC5kYXRhWzBdLm9iamVjdElkIDogbmV4dFN0YXRlLmFjdGl2ZU9iamVjdC5faWQ7XG4gICAgICBpZiAob2JqZWN0SWQpIHtcbiAgICAgICAgbmV4dFN0YXRlLmNvbW1lbnRNYXBwaW5nW29iamVjdElkXSA9IHtcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5leHRTdGF0ZVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbW9yZUNvbW1lbnQsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgY29uc3QgeyBvYmplY3RJZCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgY29uc3QgbmV4dFN0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgICAgbmV4dFN0YXRlLmNvbW1lbnRNYXBwaW5nW29iamVjdElkXS5yZXF1ZXN0aW5nID0gdHJ1ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlQ29tbWVudFN1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIGNvbnN0IG9iamVjdElkID0gZGF0YS5wYXlsb2FkLmRhdGEgJiYgZGF0YS5wYXlsb2FkLmRhdGEubGVuZ3RoID8gZGF0YS5wYXlsb2FkLmRhdGFbMF0ub2JqZWN0SWQgOiBudWxsO1xuICAgICAgaWYgKG9iamVjdElkKSB7XG4gICAgICAgIG5leHRTdGF0ZS5jb21tZW50TWFwcGluZ1tvYmplY3RJZF0gPSB7XG4gICAgICAgICAgaXRlbXM6IFsuLi5uZXh0U3RhdGUuY29tbWVudE1hcHBpbmdbb2JqZWN0SWRdLml0ZW1zLCAuLi5kYXRhLnBheWxvYWQuZGF0YV0sXG4gICAgICAgICAgdG90YWw6IGRhdGEucGF5bG9hZC50b3RhbCxcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV4dFN0YXRlXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlQ29tbWVudEZhaWwsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIGNvbnN0IG9iamVjdElkID0gZGF0YS5wYXlsb2FkLmRhdGEgJiYgZGF0YS5wYXlsb2FkLmRhdGEubGVuZ3RoID8gZGF0YS5wYXlsb2FkLmRhdGFbMF0ub2JqZWN0SWQgOiBudWxsO1xuICAgICAgaWYgKG9iamVjdElkKSB7XG4gICAgICAgIG5leHRTdGF0ZS5jb21tZW50TWFwcGluZ1tvYmplY3RJZF0gPSB7XG4gICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXh0U3RhdGVcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGNyZWF0ZUNvbW1lbnQsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tbWVudDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNvbW1lbnQsXG4gICAgICAgICAgcmVxdWVzdGluZzogdHJ1ZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBjcmVhdGVDb21tZW50U3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgY29uc3QgbmV4dFN0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgICAgY29uc3QgeyBvYmplY3RJZCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgaWYgKCFuZXh0U3RhdGU/LmNvbW1lbnRNYXBwaW5nW29iamVjdElkXT8uaXRlbXMpIHtcbiAgICAgICAgbmV4dFN0YXRlLmNvbW1lbnRNYXBwaW5nW29iamVjdElkXS5pdGVtcyA9IFtdO1xuICAgICAgICBuZXh0U3RhdGUuY29tbWVudE1hcHBpbmdbb2JqZWN0SWRdLnRvdGFsID0gMDtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZS5jb21tZW50TWFwcGluZ1tvYmplY3RJZF0uaXRlbXMudW5zaGlmdChkYXRhLnBheWxvYWQpO1xuICAgICAgbmV4dFN0YXRlLmNvbW1lbnRNYXBwaW5nW29iamVjdElkXS50b3RhbCArPSAxO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV4dFN0YXRlLFxuICAgICAgICBjb21tZW50OiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogZGF0YS5wYXlsb2FkLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogY3JlYXRlQ29tbWVudEZhaWwsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21tZW50OiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICBlcnJvcjogZGF0YS5wYXlsb2FkLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGRlbGV0ZUNvbW1lbnRTdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgICBjb25zdCB7IG9iamVjdElkLCBfaWQgfSA9IGRhdGEucGF5bG9hZDtcbiAgICAgIG5leHRTdGF0ZS5jb21tZW50TWFwcGluZ1tvYmplY3RJZF0uaXRlbXMuc3BsaWNlKFxuICAgICAgICBuZXh0U3RhdGUuY29tbWVudE1hcHBpbmdbb2JqZWN0SWRdLml0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IF9pZCksXG4gICAgICAgIDFcbiAgICAgICk7XG4gICAgICBuZXh0U3RhdGUuY29tbWVudE1hcHBpbmdbb2JqZWN0SWRdLnRvdGFsIC09IDE7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXh0U3RhdGVcbiAgICAgIH07XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZSh7fSwgY3JlYXRlUmVkdWNlcnMoJ2NvbW1lbnQnLCBbY29tbWVudFJlZHVjZXJzXSwgaW5pdGlhbFN0YXRlKSk7XG4iLCJpbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBjcmVhdGVTYWdhcyB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuaW1wb3J0IHsgY29tbWVudFNlcnZpY2UgfSBmcm9tICdAc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgSVJlZHV4QWN0aW9uIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtcbiAgZ2V0Q29tbWVudHMsIGdldENvbW1lbnRzU3VjY2VzcywgbW9yZUNvbW1lbnRTdWNjZXNzLCBtb3JlQ29tbWVudCwgZ2V0Q29tbWVudHNGYWlsLCBtb3JlQ29tbWVudEZhaWwsXG4gIGNyZWF0ZUNvbW1lbnQsIGNyZWF0ZUNvbW1lbnRTdWNjZXNzLCBjcmVhdGVDb21tZW50RmFpbCwgZGVsZXRlQ29tbWVudCwgZGVsZXRlQ29tbWVudEZhaWwsIGRlbGV0ZUNvbW1lbnRTdWNjZXNzXG59IGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IGNvbW1lbnRTYWdhcyA9IFtcbiAge1xuICAgIG9uOiBnZXRDb21tZW50cyxcbiAgICAqIHdvcmtlcihkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNvbW1lbnRTZXJ2aWNlLnNlYXJjaChkYXRhLnBheWxvYWQpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0Q29tbWVudHNTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgeWllbGQgcHV0KGdldENvbW1lbnRzRmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlQ29tbWVudCxcbiAgICAqIHdvcmtlcihkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNvbW1lbnRTZXJ2aWNlLnNlYXJjaChkYXRhLnBheWxvYWQpO1xuICAgICAgICB5aWVsZCBwdXQobW9yZUNvbW1lbnRTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgeWllbGQgcHV0KG1vcmVDb21tZW50RmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBjcmVhdGVDb21tZW50LFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgY29tbWVudFNlcnZpY2UuY3JlYXRlKGRhdGEucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dChjcmVhdGVDb21tZW50U3VjY2VzcyhyZXNwLmRhdGEpKTtcbiAgICAgICAgeWllbGQgbWVzc2FnZS5zdWNjZXNzKCdDb21tZW50ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0geWllbGQgUHJvbWlzZS5yZXNvbHZlKGUpO1xuICAgICAgICB5aWVsZCBtZXNzYWdlLmVycm9yKCdFcnJvciBvY2N1cmVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyJyk7XG4gICAgICAgIHlpZWxkIHB1dChjcmVhdGVDb21tZW50RmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBkZWxldGVDb21tZW50LFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgY29tbWVudFNlcnZpY2UuZGVsZXRlKGRhdGEucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dChkZWxldGVDb21tZW50U3VjY2VzcyhyZXNwLmRhdGEpKTtcbiAgICAgICAgeWllbGQgbWVzc2FnZS5zdWNjZXNzKCdSZW1vdmVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIHlpZWxkIG1lc3NhZ2UuZXJyb3IoJ0Vycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInKTtcbiAgICAgICAgeWllbGQgcHV0KGRlbGV0ZUNvbW1lbnRGYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmbGF0dGVuKFtjcmVhdGVTYWdhcyhjb21tZW50U2FnYXMpXSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZUFzeW5jQWN0aW9uIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldEZlZWRzLFxuICBnZXRGZWVkc1N1Y2Nlc3MsXG4gIGdldEZlZWRzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRGZWVkcycsICdHRVRfRkVFRFMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgbW9yZUZlZWRzLFxuICBtb3JlRmVlZHNTdWNjZXNzLFxuICBtb3JlRmVlZHNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ21vcmVGZWVkcycsICdHRVRfTU9ERV9GRUVEUycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRWaWRlb0ZlZWRzLFxuICBnZXRWaWRlb0ZlZWRzU3VjY2VzcyxcbiAgZ2V0VmlkZW9GZWVkc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0VmlkZW9GZWVkcycsICdHRVRfVklERU9fRkVFRFMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgbW9yZVZpZGVvRmVlZHMsXG4gIG1vcmVWaWRlb0ZlZWRzU3VjY2VzcyxcbiAgbW9yZVZpZGVvRmVlZHNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ21vcmVWaWRlb0ZlZWRzJywgJ0dFVF9NT0RFX1ZJREVPX0ZFRURTJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBob3RvRmVlZHMsXG4gIGdldFBob3RvRmVlZHNTdWNjZXNzLFxuICBnZXRQaG90b0ZlZWRzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQaG90b0ZlZWRzJywgJ0dFVF9QSE9UT19GRUVEUycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBtb3JlUGhvdG9GZWVkcyxcbiAgbW9yZVBob3RvRmVlZHNTdWNjZXNzLFxuICBtb3JlUGhvdG9GZWVkc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignbW9yZVBob3RvRmVlZHMnLCAnR0VUX01PREVfUEhPVE9fRkVFRFMnKTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZlZWRTdWNjZXNzID0gY3JlYXRlQWN0aW9uKCdyZW1vdmVGZWVkU3VjY2VzcycpO1xuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlcnMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7XG4gIGdldEZlZWRzLCBnZXRGZWVkc1N1Y2Nlc3MsIGdldEZlZWRzRmFpbCxcbiAgbW9yZUZlZWRzLCBtb3JlRmVlZHNGYWlsLCBtb3JlRmVlZHNTdWNjZXNzLFxuICByZW1vdmVGZWVkU3VjY2VzcyxcbiAgZ2V0VmlkZW9GZWVkcyxcbiAgZ2V0VmlkZW9GZWVkc1N1Y2Nlc3MsXG4gIGdldFZpZGVvRmVlZHNGYWlsLFxuICBtb3JlVmlkZW9GZWVkcyxcbiAgbW9yZVZpZGVvRmVlZHNTdWNjZXNzLFxuICBtb3JlVmlkZW9GZWVkc0ZhaWwsXG4gIGdldFBob3RvRmVlZHMsXG4gIGdldFBob3RvRmVlZHNGYWlsLFxuICBtb3JlUGhvdG9GZWVkcyxcbiAgbW9yZVBob3RvRmVlZHNGYWlsLFxuICBtb3JlUGhvdG9GZWVkc1N1Y2Nlc3MsXG4gIGdldFBob3RvRmVlZHNTdWNjZXNzXG59IGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZmVlZHM6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBkYXRhOiBudWxsLFxuICAgIHN1Y2Nlc3M6IGZhbHNlXG4gIH0sXG4gIHZpZGVvRmVlZHM6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBkYXRhOiBudWxsLFxuICAgIHN1Y2Nlc3M6IGZhbHNlXG4gIH0sXG4gIHBob3RvRmVlZHM6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBkYXRhOiBudWxsLFxuICAgIHN1Y2Nlc3M6IGZhbHNlXG4gIH1cbn07XG5cbmNvbnN0IGZlZWRSZWR1Y2VycyA9IFtcbiAge1xuICAgIG9uOiBnZXRGZWVkcyxcbiAgICByZWR1Y2VyKHByZXZTdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGZlZWRzOiB7XG4gICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLmZlZWRzLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0RmVlZHNTdWNjZXNzLFxuICAgIHJlZHVjZXIocHJldlN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBmZWVkczoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5mZWVkcyxcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogZGF0YS5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgdG90YWw6IGRhdGEucGF5bG9hZC50b3RhbCxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldEZlZWRzRmFpbCxcbiAgICByZWR1Y2VyKHByZXZTdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZmVlZHM6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZmVlZHMsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlRmVlZHMsXG4gICAgcmVkdWNlcihwcmV2U3RhdGU6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBmZWVkczoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5mZWVkcyxcbiAgICAgICAgICByZXF1ZXN0aW5nOiB0cnVlLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVGZWVkc1N1Y2Nlc3MsXG4gICAgcmVkdWNlcihwcmV2U3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGZlZWRzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmZlZWRzLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIHRvdGFsOiBkYXRhLnBheWxvYWQudG90YWwsXG4gICAgICAgICAgaXRlbXM6IFsuLi5wcmV2U3RhdGUuZmVlZHMuaXRlbXMsIC4uLmRhdGEucGF5bG9hZC5kYXRhXSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVGZWVkc0ZhaWwsXG4gICAgcmVkdWNlcihwcmV2U3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGZlZWRzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmZlZWRzLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBkYXRhLnBheWxvYWQsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0VmlkZW9GZWVkcyxcbiAgICByZWR1Y2VyKHByZXZTdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHZpZGVvRmVlZHM6IHtcbiAgICAgICAgICAuLi5pbml0aWFsU3RhdGUudmlkZW9GZWVkcyxcbiAgICAgICAgICByZXF1ZXN0aW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFZpZGVvRmVlZHNTdWNjZXNzLFxuICAgIHJlZHVjZXIocHJldlN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICB2aWRlb0ZlZWRzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLnZpZGVvRmVlZHMsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IGRhdGEucGF5bG9hZC5kYXRhLFxuICAgICAgICAgIHRvdGFsOiBkYXRhLnBheWxvYWQudG90YWwsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRWaWRlb0ZlZWRzRmFpbCxcbiAgICByZWR1Y2VyKHByZXZTdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgdmlkZW9GZWVkczoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS52aWRlb0ZlZWRzLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBkYXRhLnBheWxvYWRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbW9yZVZpZGVvRmVlZHMsXG4gICAgcmVkdWNlcihwcmV2U3RhdGU6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICB2aWRlb0ZlZWRzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLnZpZGVvRmVlZHMsXG4gICAgICAgICAgcmVxdWVzdGluZzogdHJ1ZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlVmlkZW9GZWVkc1N1Y2Nlc3MsXG4gICAgcmVkdWNlcihwcmV2U3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHZpZGVvRmVlZHM6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUudmlkZW9GZWVkLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIHRvdGFsOiBkYXRhLnBheWxvYWQudG90YWwsXG4gICAgICAgICAgaXRlbXM6IFsuLi5wcmV2U3RhdGUudmlkZW9GZWVkcy5pdGVtcywgLi4uZGF0YS5wYXlsb2FkLmRhdGFdLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbW9yZVZpZGVvRmVlZHNGYWlsLFxuICAgIHJlZHVjZXIocHJldlN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICB2aWRlb0ZlZWRzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLnZpZGVvRmVlZHMsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRQaG90b0ZlZWRzLFxuICAgIHJlZHVjZXIocHJldlN0YXRlOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgcGhvdG9GZWVkczoge1xuICAgICAgICAgIC4uLmluaXRpYWxTdGF0ZS5waG90b0ZlZWRzLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0UGhvdG9GZWVkc1N1Y2Nlc3MsXG4gICAgcmVkdWNlcihwcmV2U3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHBob3RvRmVlZHM6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUucGhvdG9GZWVkcyxcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogZGF0YS5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgdG90YWw6IGRhdGEucGF5bG9hZC50b3RhbCxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFBob3RvRmVlZHNGYWlsLFxuICAgIHJlZHVjZXIocHJldlN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBwaG90b0ZlZWRzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLnBob3RvRmVlZHMsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlUGhvdG9GZWVkcyxcbiAgICByZWR1Y2VyKHByZXZTdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHBob3RvRmVlZHM6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUucGhvdG9GZWVkcyxcbiAgICAgICAgICByZXF1ZXN0aW5nOiB0cnVlLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVQaG90b0ZlZWRzU3VjY2VzcyxcbiAgICByZWR1Y2VyKHByZXZTdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgcGhvdG9GZWVkczoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5waG90b0ZlZWRzLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIHRvdGFsOiBkYXRhLnBheWxvYWQudG90YWwsXG4gICAgICAgICAgaXRlbXM6IFsuLi5wcmV2U3RhdGUucGhvdG9GZWVkcy5pdGVtcywgLi4uZGF0YS5wYXlsb2FkLmRhdGFdLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbW9yZVBob3RvRmVlZHNGYWlsLFxuICAgIHJlZHVjZXIocHJldlN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBwaG90b0ZlZWRzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLnBob3RvRmVlZHMsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiByZW1vdmVGZWVkU3VjY2VzcyxcbiAgICByZWR1Y2VyKHByZXZTdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIGNvbnN0IHsgZmVlZCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgY29uc3QgeyBpdGVtcyB9ID0gcHJldlN0YXRlLmZlZWRzIHx8IFtdO1xuICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmZpbmRJbmRleCgoZikgPT4gZi5faWQgPT09IGZlZWQuX2lkKSwgMSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGZlZWRzOiB7XG4gICAgICAgICAgdG90YWw6IHByZXZTdGF0ZS50b3RhbCAtIDEsXG4gICAgICAgICAgaXRlbXNcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlKHt9LCBjcmVhdGVSZWR1Y2VycygnZmVlZCcsIFtmZWVkUmVkdWNlcnNdLCBpbml0aWFsU3RhdGUpKTtcbiIsImltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IGNyZWF0ZVNhZ2FzIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5pbXBvcnQgeyBmZWVkU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJUmVkdXhBY3Rpb24gfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBnZXRGZWVkcywgZ2V0RmVlZHNTdWNjZXNzLCBnZXRGZWVkc0ZhaWwsXG4gIG1vcmVGZWVkcywgbW9yZUZlZWRzU3VjY2VzcywgbW9yZUZlZWRzRmFpbCxcbiAgZ2V0VmlkZW9GZWVkcywgZ2V0VmlkZW9GZWVkc0ZhaWwsIGdldFZpZGVvRmVlZHNTdWNjZXNzLFxuICBnZXRQaG90b0ZlZWRzLCBnZXRQaG90b0ZlZWRzRmFpbCwgZ2V0UGhvdG9GZWVkc1N1Y2Nlc3MsIG1vcmVWaWRlb0ZlZWRzLCBtb3JlUGhvdG9GZWVkcywgbW9yZVBob3RvRmVlZHNTdWNjZXNzLCBtb3JlUGhvdG9GZWVkc0ZhaWxcbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgcGVyZm9ybWVyU2FnYXMgPSBbXG4gIHtcbiAgICBvbjogZ2V0RmVlZHMsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBkYXRhLnBheWxvYWQuaXNIb21lID8geWllbGQgZmVlZFNlcnZpY2UudXNlckhvbWVGZWVkcyhkYXRhLnBheWxvYWQpIDogeWllbGQgZmVlZFNlcnZpY2UudXNlclNlYXJjaChkYXRhLnBheWxvYWQpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0RmVlZHNTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgeWllbGQgcHV0KGdldEZlZWRzRmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlRmVlZHMsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBkYXRhLnBheWxvYWQuaXNIb21lID8geWllbGQgZmVlZFNlcnZpY2UudXNlckhvbWVGZWVkcyhkYXRhLnBheWxvYWQpIDogeWllbGQgZmVlZFNlcnZpY2UudXNlclNlYXJjaChkYXRhLnBheWxvYWQpO1xuICAgICAgICB5aWVsZCBwdXQobW9yZUZlZWRzU3VjY2VzcyhyZXNwLmRhdGEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIHlpZWxkIHB1dChtb3JlRmVlZHNGYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFZpZGVvRmVlZHMsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBmZWVkU2VydmljZS51c2VyU2VhcmNoKHsgLi4uZGF0YS5wYXlsb2FkLCBwb3N0VHlwZTogJ3ZpZGVvJyB9KTtcbiAgICAgICAgeWllbGQgcHV0KGdldFZpZGVvRmVlZHNTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgeWllbGQgcHV0KGdldFZpZGVvRmVlZHNGYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVWaWRlb0ZlZWRzLFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgZmVlZFNlcnZpY2UudXNlclNlYXJjaCh7IC4uLmRhdGEucGF5bG9hZCwgcG9zdFR5cGU6ICd2aWRlbycgfSk7XG4gICAgICAgIHlpZWxkIHB1dChtb3JlRmVlZHNTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgeWllbGQgcHV0KG1vcmVGZWVkc0ZhaWwoZXJyb3IpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAge1xuICAgIG9uOiBnZXRQaG90b0ZlZWRzLFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgZmVlZFNlcnZpY2UudXNlclNlYXJjaCh7IC4uLmRhdGEucGF5bG9hZCwgcG9zdFR5cGU6ICdwaG90bycgfSk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRQaG90b0ZlZWRzU3VjY2VzcyhyZXNwLmRhdGEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRQaG90b0ZlZWRzRmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlUGhvdG9GZWVkcyxcbiAgICAqIHdvcmtlcihkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGZlZWRTZXJ2aWNlLnVzZXJTZWFyY2goeyAuLi5kYXRhLnBheWxvYWQsIHBvc3RUeXBlOiAncGhvdG8nIH0pO1xuICAgICAgICB5aWVsZCBwdXQobW9yZVBob3RvRmVlZHNTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgeWllbGQgcHV0KG1vcmVQaG90b0ZlZWRzRmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZmxhdHRlbihbY3JlYXRlU2FnYXMocGVyZm9ybWVyU2FnYXMpXSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY0FjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRHYWxsZXJpZXMsXG4gIGdldEdhbGxlcmllc1N1Y2Nlc3MsXG4gIGdldEdhbGxlcmllc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0R2FsbGVyaWVzJywgJ0dFVF9HQUxMRVJJRVMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgbW9yZUdhbGxlcmllcywgbW9yZUdhbGxlcmllc1N1Y2Nlc3MsIG1vcmVHYWxsZXJpZXNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ21vcmVHYWxsZXJpZXMnLCAnTU9SRV9HQUxMRVJJRVMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UmVsYXRlZEdhbGxlcmllcywgZ2V0UmVsYXRlZEdhbGxlcmllc1N1Y2Nlc3MsIGdldFJlbGF0ZWRHYWxsZXJpZXNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFJlbGF0ZWRHYWxsZXJpZXMnLCAnR0VUX1JFTEFURURfR0FMTEVSSUVTJyk7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VycyB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtcbiAgZ2V0R2FsbGVyaWVzLCBnZXRHYWxsZXJpZXNTdWNjZXNzLCBnZXRHYWxsZXJpZXNGYWlsLFxuICBtb3JlR2FsbGVyaWVzLCBtb3JlR2FsbGVyaWVzRmFpbCwgbW9yZUdhbGxlcmllc1N1Y2Nlc3MsXG4gIGdldFJlbGF0ZWRHYWxsZXJpZXMsIGdldFJlbGF0ZWRHYWxsZXJpZXNGYWlsLCBnZXRSZWxhdGVkR2FsbGVyaWVzU3VjY2Vzc1xufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGdhbGxlcmllczoge1xuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICB0b3RhbDogMCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBzdWNjZXNzOiBmYWxzZVxuICB9LFxuICByZWxhdGVkR2FsbGVyaWVzOiB7XG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgaXRlbXM6IFtdLFxuICAgIHRvdGFsOiAwXG4gIH1cbn07XG5cbmNvbnN0IGdhbGxlcnlSZWR1Y2VyID0gW1xuICB7XG4gICAgb246IGdldEdhbGxlcmllcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBnYWxsZXJpZXM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5nYWxsZXJpZXMsXG4gICAgICAgICAgcmVxdWVzdGluZzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRHYWxsZXJpZXNTdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZ2FsbGVyaWVzOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IGRhdGEucGF5bG9hZC5kYXRhLFxuICAgICAgICAgIHRvdGFsOiBkYXRhLnBheWxvYWQudG90YWwsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRHYWxsZXJpZXNGYWlsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZ2FsbGVyaWVzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZ2FsbGVyaWVzLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBkYXRhLnBheWxvYWRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbW9yZUdhbGxlcmllcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBnYWxsZXJpZXM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5nYWxsZXJpZXMsXG4gICAgICAgICAgcmVxdWVzdGluZzogdHJ1ZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlR2FsbGVyaWVzU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGdhbGxlcmllczoge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIHRvdGFsOiBkYXRhLnBheWxvYWQudG90YWwsXG4gICAgICAgICAgaXRlbXM6IFsuLi5zdGF0ZS5nYWxsZXJpZXMuaXRlbXMsIC4uLmRhdGEucGF5bG9hZC5kYXRhXSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVHYWxsZXJpZXNGYWlsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZ2FsbGVyaWVzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZ2FsbGVyaWVzLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBkYXRhLnBheWxvYWQsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0UmVsYXRlZEdhbGxlcmllcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWxhdGVkOiB7XG4gICAgICAgICAgLi4uc3RhdGUudmlkZW9zLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0UmVsYXRlZEdhbGxlcmllc1N1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWxhdGVkR2FsbGVyaWVzOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IGRhdGEucGF5bG9hZC5kYXRhLFxuICAgICAgICAgIHRvdGFsOiBkYXRhLnBheWxvYWQudG90YWwsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRSZWxhdGVkR2FsbGVyaWVzRmFpbCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlbGF0ZWRHYWxsZXJpZXM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5nYWxsZXJpZXMsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2Uoe30sIGNyZWF0ZVJlZHVjZXJzKCdnYWxsZXJ5JywgW2dhbGxlcnlSZWR1Y2VyXSwgaW5pdGlhbFN0YXRlKSk7XG4iLCJpbXBvcnQgeyBnYWxsZXJ5U2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBjcmVhdGVTYWdhcyB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuaW1wb3J0IHsgSVJlZHV4QWN0aW9uIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgZ2V0R2FsbGVyaWVzLCBnZXRHYWxsZXJpZXNTdWNjZXNzLCBnZXRHYWxsZXJpZXNGYWlsLFxuICBtb3JlR2FsbGVyaWVzLCBtb3JlR2FsbGVyaWVzRmFpbCwgbW9yZUdhbGxlcmllc1N1Y2Nlc3MsXG4gIGdldFJlbGF0ZWRHYWxsZXJpZXMsIGdldFJlbGF0ZWRHYWxsZXJpZXNGYWlsLCBnZXRSZWxhdGVkR2FsbGVyaWVzU3VjY2Vzc1xufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBnYWxsZXJ5U2FnYXMgPSBbXG4gIHtcbiAgICBvbjogZ2V0R2FsbGVyaWVzLFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgZ2FsbGVyeVNlcnZpY2UudXNlclNlYXJjaChkYXRhLnBheWxvYWQpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0R2FsbGVyaWVzU3VjY2VzcyhyZXNwLmRhdGEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRHYWxsZXJpZXNGYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVHYWxsZXJpZXMsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBnYWxsZXJ5U2VydmljZS51c2VyU2VhcmNoKGRhdGEucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dChtb3JlR2FsbGVyaWVzU3VjY2VzcyhyZXNwLmRhdGEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIHlpZWxkIHB1dChtb3JlR2FsbGVyaWVzRmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRSZWxhdGVkR2FsbGVyaWVzLFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgZ2FsbGVyeVNlcnZpY2UudXNlclNlYXJjaChkYXRhLnBheWxvYWQpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UmVsYXRlZEdhbGxlcmllc1N1Y2Nlc3MocmVzcC5kYXRhKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0geWllbGQgUHJvbWlzZS5yZXNvbHZlKGUpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UmVsYXRlZEdhbGxlcmllc0ZhaWwoZXJyb3IpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXR0ZW4oW2NyZWF0ZVNhZ2FzKGdhbGxlcnlTYWdhcyldKTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgY3JlYXRlQXN5bmNBY3Rpb24gfSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0Q29udmVyc2F0aW9ucyxcbiAgZ2V0Q29udmVyc2F0aW9uc1N1Y2Nlc3MsXG4gIGdldENvbnZlcnNhdGlvbnNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldENvbnZlcnNhdGlvbnMnLCAnTE9BRF9DT05WRVJTQVRJT05TJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHNlYXJjaENvbnZlcnNhdGlvbnMsXG4gIHNlYXJjaENvbnZlcnNhdGlvbnNTdWNjZXNzLFxuICBzZWFyY2hDb252ZXJzYXRpb25zRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdzZWFyY2hDb252ZXJzYXRpb25zJywgJ1NFQVJDSF9DT05WRVJTQVRJT05TJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHJlYWRNZXNzYWdlc1xufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdyZWFkTWVzc2FnZXMnLCAnUkVBRF9NRVNTQUdFUycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBzZW5kTWVzc2FnZSxcbiAgc2VuZE1lc3NhZ2VTdWNjZXNzLFxuICBzZW5kTWVzc2FnZUZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignc2VuZE1lc3NhZ2UnLCAnU0VORF9NRVNTQUdFJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHJlY2VpdmVNZXNzYWdlU3VjY2Vzc1xufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdyZWNlaXZlTWVzc2FnZVN1Y2Nlc3MnLCAnUkVDRUlWRV9NRVNTQUdFX1NVQ0NFU1MnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2VudEZpbGVTdWNjZXNzXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3NlbnRGaWxlU3VjY2VzcycsICdTRU5UX0ZJTEVfU1VDQ0VTUycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBkZWFjdGl2ZUNvbnZlcnNhdGlvblxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdkZWFjdGl2ZUNvbnZlcnNhdGlvbicsICdERUFDVElWRV9DT05WRVJTQVRJT04nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2V0QWN0aXZlQ29udmVyc2F0aW9uLFxuICBzZXRBY3RpdmVDb252ZXJzYXRpb25TdWNjZXNzLFxuICBzZXRBY3RpdmVDb252ZXJzYXRpb25GYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oXG4gICdzZXRBY3RpdmVDb252ZXJzYXRpb24nLFxuICAnU0VUX0FDVElWRV9DT05WRVJTQVRJT05fUkVDRUlWRVInXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICBsb2FkTWVzc2FnZXMsXG4gIGxvYWRNZXNzYWdlc1N1Y2Nlc3MsXG4gIGxvYWRNZXNzYWdlc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignbG9hZE1lc3NhZ2VzJywgJ0xPQURfTUVTU0FHRVMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgbG9hZE1vcmVNZXNzYWdlcyxcbiAgbG9hZE1vcmVNZXNzYWdlc1N1Y2Nlc3MsXG4gIGxvYWRNb3JlTWVzc2FnZXNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2xvYWRNb3JlTWVzc2FnZXMnLCAnTE9BRF9NT1JFX01FU1NBR0VTJyk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaGluZ01lc3NhZ2UgPSBjcmVhdGVBY3Rpb24oJ2ZldGNoaW5nTWVzc2FnZScpO1xuXG5leHBvcnQgY29uc3QgcmVzZXRNZXNzYWdlU3RhdGUgPSBjcmVhdGVBY3Rpb24oJ3Jlc2V0TWVzc2FnZVN0YXRlJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldENvbnZlcnNhdGlvbkRldGFpbCxcbiAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsU3VjY2VzcyxcbiAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRDb252ZXJzYXRpb25EZXRhaWwnLCAnTE9BRF9DT05WRVJTQVRJT05fSVRFTScpO1xuIiwiaW1wb3J0IHsgbWVyZ2UsIHVuaXEgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlcnMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7IElSZWR1eEFjdGlvbiB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7XG4gIGdldENvbnZlcnNhdGlvbnMsXG4gIGdldENvbnZlcnNhdGlvbnNTdWNjZXNzLFxuICBnZXRDb252ZXJzYXRpb25zRmFpbCxcbiAgc2VhcmNoQ29udmVyc2F0aW9ucyxcbiAgc2VhcmNoQ29udmVyc2F0aW9uc1N1Y2Nlc3MsXG4gIHNlYXJjaENvbnZlcnNhdGlvbnNGYWlsLFxuICBzZXRBY3RpdmVDb252ZXJzYXRpb25TdWNjZXNzLFxuICBmZXRjaGluZ01lc3NhZ2UsXG4gIGxvYWRNZXNzYWdlc1N1Y2Nlc3MsXG4gIHNlbmRNZXNzYWdlLFxuICBzZW5kTWVzc2FnZVN1Y2Nlc3MsXG4gIHNlbmRNZXNzYWdlRmFpbCxcbiAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsU3VjY2VzcyxcbiAgcmVjZWl2ZU1lc3NhZ2VTdWNjZXNzLFxuICByZWFkTWVzc2FnZXMsXG4gIHNlbnRGaWxlU3VjY2VzcyxcbiAgbG9hZE1vcmVNZXNzYWdlc1N1Y2Nlc3MsXG4gIGRlYWN0aXZlQ29udmVyc2F0aW9uLFxuICByZXNldE1lc3NhZ2VTdGF0ZVxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsQ29udmVyc2F0aW9uU3RhdGUgPSB7XG4gIGxpc3Q6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBkYXRhOiBbXSxcbiAgICB0b3RhbDogMCxcbiAgICBzdWNjZXNzOiBmYWxzZVxuICB9LFxuICBtYXBwaW5nOiB7fSxcbiAgYWN0aXZlQ29udmVyc2F0aW9uOiB7fVxufTtcblxuY29uc3QgaW5pdGlhbE1lc3NhZ2VTdGF0ZSA9IHtcbiAgLy8gY29udmVyc2F0aW9uSWQgPT4geyBmZXRjaGluZzogYm9vbGVhbiwgaXRlbXM6IFtdIH1cbiAgY29udmVyc2F0aW9uTWFwOiB7fSxcbiAgc2VuZE1lc3NhZ2U6IHt9LFxuICByZWNlaXZlTWVzc2FnZToge31cbn07XG5cbmNvbnN0IGNvbnZlcnNhdGlvblJlZHVjZXIgPSBbXG4gIHtcbiAgICBvbjogcmVzZXRNZXNzYWdlU3RhdGUsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICBsZXQgeyBsaXN0LCBtYXBwaW5nLCBhY3RpdmVDb252ZXJzYXRpb24gfSA9IHN0YXRlO1xuICAgICAgbGlzdCA9IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICB9O1xuICAgICAgbWFwcGluZyA9IHt9O1xuICAgICAgYWN0aXZlQ29udmVyc2F0aW9uID0ge307XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbGlzdCxcbiAgICAgICAgbWFwcGluZyxcbiAgICAgICAgYWN0aXZlQ29udmVyc2F0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRDb252ZXJzYXRpb25zLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSkge1xuICAgICAgY29uc3QgbmV4dFN0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgICAgbmV4dFN0YXRlLmxpc3QucmVxdWVzdGluZyA9IHRydWU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXh0U3RhdGVcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldENvbnZlcnNhdGlvbnNTdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIGNvbnN0IHsgbGlzdCwgbWFwcGluZyB9ID0gbmV4dFN0YXRlO1xuICAgICAgY29uc3QgeyBkYXRhOiBpdGVtcywgdG90YWwgfSA9IGRhdGEucGF5bG9hZDtcbiAgICAgIGNvbnN0IElkcyA9IGl0ZW1zLm1hcCgoYykgPT4gYy5faWQpO1xuICAgICAgbGlzdC5kYXRhID0gdW5pcShsaXN0LmRhdGEuY29uY2F0KElkcykpO1xuICAgICAgbGlzdC50b3RhbCA9IHRvdGFsO1xuICAgICAgbGlzdC5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgIGxpc3QucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgbGlzdC5lcnJvciA9IGZhbHNlO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBtYXBwaW5nW2MuX2lkXSA9IGM7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5leHRTdGF0ZVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0Q29udmVyc2F0aW9uc0ZhaWwsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgY29uc3QgbmV4dFN0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV4dFN0YXRlLFxuICAgICAgICBsaXN0OiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtYXBwaW5nOiB7fSxcbiAgICAgICAgYWN0aXZlQ29udmVyc2F0aW9uOiB7fVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogc2VhcmNoQ29udmVyc2F0aW9ucyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5leHRTdGF0ZSxcbiAgICAgICAgbGlzdDoge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWUsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbWFwcGluZzoge30sXG4gICAgICAgIGFjdGl2ZUNvbnZlcnNhdGlvbjoge31cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHNlYXJjaENvbnZlcnNhdGlvbnNTdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIGNvbnN0IHsgbGlzdCwgbWFwcGluZyB9ID0gbmV4dFN0YXRlO1xuICAgICAgY29uc3QgeyBkYXRhOiBpdGVtcywgdG90YWwgfSA9IGRhdGEucGF5bG9hZDtcbiAgICAgIGNvbnN0IElkcyA9IGl0ZW1zLm1hcCgoYykgPT4gYy5faWQpO1xuICAgICAgbGlzdC5kYXRhID0gSWRzO1xuICAgICAgbGlzdC50b3RhbCA9IHRvdGFsO1xuICAgICAgbGlzdC5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgIGxpc3QucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgbGlzdC5lcnJvciA9IGZhbHNlO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBtYXBwaW5nW2MuX2lkXSA9IGM7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5leHRTdGF0ZVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogc2VhcmNoQ29udmVyc2F0aW9uc0ZhaWwsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgY29uc3QgbmV4dFN0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV4dFN0YXRlLFxuICAgICAgICBsaXN0OiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtYXBwaW5nOiB7fSxcbiAgICAgICAgYWN0aXZlQ29udmVyc2F0aW9uOiB7fVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogc2V0QWN0aXZlQ29udmVyc2F0aW9uU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICBjb25zdCBjb252ZXJzYXRpb24gPSBkYXRhLnBheWxvYWQ7XG4gICAgICBjb25zdCBsaXN0ID0gc3RhdGUubGlzdC5kYXRhO1xuICAgICAgY29uc3QgeyBtYXBwaW5nIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IGNoZWNrID0gbGlzdC5maW5kKChjKSA9PiBjID09PSBjb252ZXJzYXRpb24uX2lkKTtcbiAgICAgIGlmICghY2hlY2spIHtcbiAgICAgICAgbGlzdC51bnNoaWZ0KGNvbnZlcnNhdGlvbi5faWQpO1xuICAgICAgICBtYXBwaW5nW2NvbnZlcnNhdGlvbi5faWRdID0gY29udmVyc2F0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUNvbnZlcnNhdGlvbjogY29udmVyc2F0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRDb252ZXJzYXRpb25EZXRhaWxTdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIGNvbnN0IHsgbGlzdCwgbWFwcGluZyB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBjb252ZXJzYXRpb24gPSBkYXRhLnBheWxvYWQ7XG4gICAgICBpZiAoIWxpc3QuZGF0YS5pbmNsdWRlcyhjb252ZXJzYXRpb24uX2lkKSkge1xuICAgICAgICBsaXN0LmRhdGEudW5zaGlmdChjb252ZXJzYXRpb24uX2lkKTtcbiAgICAgICAgbWFwcGluZ1tjb252ZXJzYXRpb24uX2lkXSA9IGNvbnZlcnNhdGlvbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlYWRNZXNzYWdlcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICBjb25zdCBjb252ZXJzYXRpb25JZCA9IGRhdGEucGF5bG9hZDtcbiAgICAgIGNvbnN0IHsgbWFwcGluZyB9ID0gc3RhdGU7XG4gICAgICBtYXBwaW5nW2NvbnZlcnNhdGlvbklkXS50b3RhbE5vdFNlZW5NZXNzYWdlcyA9IDA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZGVhY3RpdmVDb252ZXJzYXRpb24sXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgICBuZXh0U3RhdGUuYWN0aXZlQ29udmVyc2F0aW9uID0ge307XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXh0U3RhdGVcbiAgICAgIH07XG4gICAgfVxuICB9XG5dO1xuXG5jb25zdCBtZXNzYWdlUmVkdWNlciA9IFtcbiAge1xuICAgIG9uOiBmZXRjaGluZ01lc3NhZ2UsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25NYXAgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25JZCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSA9IHtcbiAgICAgICAgLi4uY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSxcbiAgICAgICAgZmV0Y2hpbmc6IHRydWVcbiAgICAgIH07XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBsb2FkTWVzc2FnZXNTdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIGNvbnN0IHsgY29udmVyc2F0aW9uTWFwIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IHsgY29udmVyc2F0aW9uSWQsIGl0ZW1zLCB0b3RhbCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSA9IHtcbiAgICAgICAgaXRlbXM6IFsuLi5pdGVtcy5yZXZlcnNlKCldLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgZmV0Y2hpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbG9hZE1vcmVNZXNzYWdlc1N1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25NYXAgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25JZCwgaXRlbXMsIHRvdGFsIH0gPSBkYXRhLnBheWxvYWQ7XG4gICAgICBjb252ZXJzYXRpb25NYXBbY29udmVyc2F0aW9uSWRdID0ge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIC4uLml0ZW1zLnJldmVyc2UoKSxcbiAgICAgICAgICAuLi5jb252ZXJzYXRpb25NYXBbY29udmVyc2F0aW9uSWRdLml0ZW1zIHx8IFtdXG4gICAgICAgIF0sXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBmZXRjaGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBzZW5kTWVzc2FnZSxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZW5kTWVzc2FnZToge1xuICAgICAgICAgIHNlbmRpbmc6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogc2VuZE1lc3NhZ2VTdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIGlmICghbmV4dFN0YXRlLmNvbnZlcnNhdGlvbk1hcFtkYXRhLnBheWxvYWQuY29udmVyc2F0aW9uSWRdIHx8ICFuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2RhdGEucGF5bG9hZC5jb252ZXJzYXRpb25JZF0uaXRlbXMpIHtcbiAgICAgICAgbmV4dFN0YXRlLmNvbnZlcnNhdGlvbk1hcFtkYXRhLnBheWxvYWQuY29udmVyc2F0aW9uSWRdLml0ZW1zID0gW107XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2RhdGEucGF5bG9hZC5jb252ZXJzYXRpb25JZF0uaXRlbXMucHVzaChcbiAgICAgICAgZGF0YS5wYXlsb2FkXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV4dFN0YXRlLFxuICAgICAgICBzZW5kTWVzc2FnZToge1xuICAgICAgICAgIHNlbmRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YTogZGF0YS5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHNlbmRNZXNzYWdlRmFpbCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHtcbiAgICAgICAgICBzZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZGF0YS5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlY2VpdmVNZXNzYWdlU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgICBpZiAoIW5leHRTdGF0ZS5jb252ZXJzYXRpb25NYXBbZGF0YS5wYXlsb2FkLmNvbnZlcnNhdGlvbklkXSkge1xuICAgICAgICByZXR1cm4geyAuLi5uZXh0U3RhdGUgfTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZS5jb252ZXJzYXRpb25NYXBbZGF0YS5wYXlsb2FkLmNvbnZlcnNhdGlvbklkXS5pdGVtcy5wdXNoKFxuICAgICAgICBkYXRhLnBheWxvYWRcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXh0U3RhdGUsXG4gICAgICAgIHJlY2VpdmVNZXNzYWdlOiBkYXRhLnBheWxvYWRcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHNlbnRGaWxlU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgICBpZiAoIW5leHRTdGF0ZS5jb252ZXJzYXRpb25NYXBbZGF0YS5wYXlsb2FkLmNvbnZlcnNhdGlvbklkXSB8fCAhbmV4dFN0YXRlLmNvbnZlcnNhdGlvbk1hcFtkYXRhLnBheWxvYWQuY29udmVyc2F0aW9uSWRdLml0ZW1zKSB7XG4gICAgICAgIG5leHRTdGF0ZS5jb252ZXJzYXRpb25NYXBbZGF0YS5wYXlsb2FkLmNvbnZlcnNhdGlvbklkXS5pdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgbmV4dFN0YXRlLmNvbnZlcnNhdGlvbk1hcFtkYXRhLnBheWxvYWQuY29udmVyc2F0aW9uSWRdLml0ZW1zLnB1c2goXG4gICAgICAgIGRhdGEucGF5bG9hZFxuICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5leHRTdGF0ZSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHtcbiAgICAgICAgICBzZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgIGRhdGE6IGRhdGEucGF5bG9hZFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBkZWFjdGl2ZUNvbnZlcnNhdGlvbixcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgICBjb25zdCBjb252ZXJzYXRpb25JZCA9IGRhdGEucGF5bG9hZDtcbiAgICAgIGlmIChjb252ZXJzYXRpb25JZCAmJiBuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSkge1xuICAgICAgICBuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSA9IHtcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5leHRTdGF0ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlKFxuICB7fSxcbiAgY3JlYXRlUmVkdWNlcnMoXG4gICAgJ2NvbnZlcnNhdGlvbicsXG4gICAgW2NvbnZlcnNhdGlvblJlZHVjZXJdLFxuICAgIGluaXRpYWxDb252ZXJzYXRpb25TdGF0ZVxuICApLFxuICBjcmVhdGVSZWR1Y2VycygnbWVzc2FnZScsIFttZXNzYWdlUmVkdWNlcl0sIGluaXRpYWxNZXNzYWdlU3RhdGUpXG4pO1xuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBwdXQsIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBjcmVhdGVTYWdhcyB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuaW1wb3J0IHsgbWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IElSZWR1eEFjdGlvbiB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIGdldENvbnZlcnNhdGlvbnMsXG4gIGdldENvbnZlcnNhdGlvbnNTdWNjZXNzLFxuICBnZXRDb252ZXJzYXRpb25zRmFpbCxcbiAgc2V0QWN0aXZlQ29udmVyc2F0aW9uLFxuICBzZXRBY3RpdmVDb252ZXJzYXRpb25TdWNjZXNzLFxuICBsb2FkTWVzc2FnZXMsXG4gIGZldGNoaW5nTWVzc2FnZSxcbiAgbG9hZE1lc3NhZ2VzU3VjY2VzcyxcbiAgc2VuZE1lc3NhZ2UsXG4gIHNlbmRNZXNzYWdlRmFpbCxcbiAgc2VuZE1lc3NhZ2VTdWNjZXNzLFxuICBnZXRDb252ZXJzYXRpb25EZXRhaWwsXG4gIGdldENvbnZlcnNhdGlvbkRldGFpbFN1Y2Nlc3MsXG4gIHJlYWRNZXNzYWdlcyxcbiAgbG9hZE1vcmVNZXNzYWdlcyxcbiAgbG9hZE1vcmVNZXNzYWdlc1N1Y2Nlc3MsXG4gIHNlYXJjaENvbnZlcnNhdGlvbnMsXG4gIHNlYXJjaENvbnZlcnNhdGlvbnNGYWlsLFxuICBzZWFyY2hDb252ZXJzYXRpb25zU3VjY2Vzc1xufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBjb252ZXJzYXRpb25TYWdhcyA9IFtcbiAge1xuICAgIG9uOiBnZXRDb252ZXJzYXRpb25zLFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIG1lc3NhZ2VTZXJ2aWNlLmdldENvbnZlcnNhdGlvbnMoZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgeWllbGQgcHV0KGdldENvbnZlcnNhdGlvbnNTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBUT0RPIC0gYWxlcnQgZXJyb3JcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRDb252ZXJzYXRpb25zRmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBzZWFyY2hDb252ZXJzYXRpb25zLFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIG1lc3NhZ2VTZXJ2aWNlLmdldENvbnZlcnNhdGlvbnMoZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgeWllbGQgcHV0KHNlYXJjaENvbnZlcnNhdGlvbnNTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBUT0RPIC0gYWxlcnQgZXJyb3JcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIHlpZWxkIHB1dChzZWFyY2hDb252ZXJzYXRpb25zRmFpbChlcnJvcikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBzZXRBY3RpdmVDb252ZXJzYXRpb24sXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc291cmNlLCBzb3VyY2VJZCwgY29udmVyc2F0aW9uSWRcbiAgICAgICAgfSA9IGRhdGEucGF5bG9hZDtcbiAgICAgICAgY29uc3QgY29udmVyc2F0aW9uTWFwcGluZyA9IHlpZWxkIHNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLmNvbnZlcnNhdGlvbi5tYXBwaW5nKTtcbiAgICAgICAgaWYgKGNvbnZlcnNhdGlvbklkKSB7XG4gICAgICAgICAgaWYgKGNvbnZlcnNhdGlvbk1hcHBpbmdbY29udmVyc2F0aW9uSWRdKSB7XG4gICAgICAgICAgICB5aWVsZCBwdXQoXG4gICAgICAgICAgICAgIHNldEFjdGl2ZUNvbnZlcnNhdGlvblN1Y2Nlc3MoY29udmVyc2F0aW9uTWFwcGluZ1tjb252ZXJzYXRpb25JZF0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCByZWFkQWxsTWVzc2FnZXMgPSB5aWVsZCBtZXNzYWdlU2VydmljZS5yZWFkQWxsSW5Db252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQpO1xuICAgICAgICAgICAgaWYgKHJlYWRBbGxNZXNzYWdlcykge1xuICAgICAgICAgICAgICB5aWVsZCBwdXQocmVhZE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5aWVsZCBwdXQobG9hZE1lc3NhZ2VzKHsgY29udmVyc2F0aW9uSWQsIGxpbWl0OiAyNSwgb2Zmc2V0OiAwIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIG1lc3NhZ2VTZXJ2aWNlLmNyZWF0ZUNvbnZlcnNhdGlvbih7XG4gICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICBzb3VyY2VJZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IHJlc3AuZGF0YTtcbiAgICAgICAgICBpZiAoY29udmVyc2F0aW9uTWFwcGluZ1tjb252ZXJzYXRpb24uX2lkXSkge1xuICAgICAgICAgICAgeWllbGQgcHV0KHNldEFjdGl2ZUNvbnZlcnNhdGlvblN1Y2Nlc3MoY29udmVyc2F0aW9uTWFwcGluZ1tjb252ZXJzYXRpb24uX2lkXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBwdXQoc2V0QWN0aXZlQ29udmVyc2F0aW9uU3VjY2Vzcyhjb252ZXJzYXRpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgeWllbGQgcHV0KGxvYWRNZXNzYWdlcyh7IGNvbnZlcnNhdGlvbklkOiBjb252ZXJzYXRpb24uX2lkLCBsaW1pdDogMjUsIG9mZnNldDogMCB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbWVzc2FnZS5lcnJvcignRXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRDb252ZXJzYXRpb25EZXRhaWwsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb252ZXJzYXRpb24gPSB5aWVsZCBtZXNzYWdlU2VydmljZS5nZXRDb252ZXJzYXRpb25EZXRhaWwoZGF0YS5wYXlsb2FkLmlkKTtcbiAgICAgICAgeWllbGQgcHV0KGdldENvbnZlcnNhdGlvbkRldGFpbFN1Y2Nlc3MoY29udmVyc2F0aW9uLmRhdGEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldENvbnZlcnNhdGlvbnNGYWlsKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbl07XG5cbmNvbnN0IG1lc3NhZ2VTYWdhcyA9IFtcbiAge1xuICAgIG9uOiBsb2FkTWVzc2FnZXMsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPFJlY29yZDxzdHJpbmcsIGFueT4+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBtZXNzYWdlTWFwID0gc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUubWVzc2FnZS5tYXBwaW5nKTtcbiAgICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25JZCwgb2Zmc2V0LCBsaW1pdCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgICBpZiAobWVzc2FnZU1hcFtjb252ZXJzYXRpb25JZF0gJiYgbWVzc2FnZU1hcFtjb252ZXJzYXRpb25JZF0uZmV0Y2hpbmcpIHtcbiAgICAgICAgICAvLyBkbyBub3RoaW5nIGlmIGl0IGlzIGZldGNoaW5nXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkIHB1dChmZXRjaGluZ01lc3NhZ2UoeyBjb252ZXJzYXRpb25JZCB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBtZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlcyhjb252ZXJzYXRpb25JZCwgeyBvZmZzZXQsIGxpbWl0IH0pO1xuICAgICAgICB5aWVsZCBwdXQoXG4gICAgICAgICAgbG9hZE1lc3NhZ2VzU3VjY2Vzcyh7XG4gICAgICAgICAgICBjb252ZXJzYXRpb25JZCxcbiAgICAgICAgICAgIGl0ZW1zOiByZXNwLmRhdGEuZGF0YSxcbiAgICAgICAgICAgIHRvdGFsOiByZXNwLmRhdGEudG90YWxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBtZXNzYWdlLmVycm9yKCdFcnJvciBvY2N1cmVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGxvYWRNb3JlTWVzc2FnZXMsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPFJlY29yZDxzdHJpbmcsIGFueT4+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBtZXNzYWdlTWFwID0gc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUubWVzc2FnZS5tYXBwaW5nKTtcbiAgICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25JZCwgb2Zmc2V0LCBsaW1pdCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgICBpZiAobWVzc2FnZU1hcFtjb252ZXJzYXRpb25JZF0gJiYgbWVzc2FnZU1hcFtjb252ZXJzYXRpb25JZF0uZmV0Y2hpbmcpIHtcbiAgICAgICAgICAvLyBkbyBub3RoaW5nIGlmIGl0IGlzIGZldGNoaW5nXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkIHB1dChmZXRjaGluZ01lc3NhZ2UoeyBjb252ZXJzYXRpb25JZCB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBtZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlcyhjb252ZXJzYXRpb25JZCwgeyBvZmZzZXQsIGxpbWl0IH0pO1xuICAgICAgICB5aWVsZCBwdXQoXG4gICAgICAgICAgbG9hZE1vcmVNZXNzYWdlc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBpdGVtczogcmVzcC5kYXRhLmRhdGEsXG4gICAgICAgICAgICB0b3RhbDogcmVzcC5kYXRhLnRvdGFsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbWVzc2FnZS5lcnJvcignRXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZXJyJywgZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHNlbmRNZXNzYWdlLFxuICAgICogd29ya2VyKHJlcTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgY29udmVyc2F0aW9uSWQsIGRhdGEgfSA9IHJlcS5wYXlsb2FkO1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgbWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoY29udmVyc2F0aW9uSWQsIGRhdGEpO1xuICAgICAgICB5aWVsZCBwdXQoc2VuZE1lc3NhZ2VTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB5aWVsZCBwdXQoc2VuZE1lc3NhZ2VGYWlsKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXR0ZW4oW1xuICBjcmVhdGVTYWdhcyhjb252ZXJzYXRpb25TYWdhcyksXG4gIGNyZWF0ZVNhZ2FzKG1lc3NhZ2VTYWdhcylcbl0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24gfSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TGlzdCxcbiAgZ2V0TGlzdFN1Y2Nlc3MsXG4gIGdldExpc3RGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldExpc3QnLCAnR0VUX0xJU1QnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UHJvZmlsZSxcbiAgZ2V0UHJvZmlsZVN1Y2Nlc3MsXG4gIGdldFByb2ZpbGVGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFByb2ZpbGUnLCAnR0VUX1BST0ZJTEUnKTtcbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXJzIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5pbXBvcnQge1xuICBnZXRMaXN0LCBnZXRMaXN0RmFpbCwgZ2V0TGlzdFN1Y2Nlc3MsIGdldFByb2ZpbGUsIGdldFByb2ZpbGVTdWNjZXNzLCBnZXRQcm9maWxlRmFpbFxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHBlcmZvcm1lckxpc3Rpbmc6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBkYXRhOiBudWxsLFxuICAgIHN1Y2Nlc3M6IGZhbHNlXG4gIH0sXG4gIHBlcmZvcm1lclByb2ZpbGU6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBkYXRhOiBudWxsLFxuICAgIHN1Y2Nlc3M6IGZhbHNlXG4gIH1cbn07XG5cbmNvbnN0IHBlcmZvcm1lclJlZHVjZXJzID0gW1xuICB7XG4gICAgb246IGdldExpc3QsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGVyZm9ybWVyTGlzdGluZzoge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWUsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRMaXN0U3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBlcmZvcm1lckxpc3Rpbmc6IHtcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBkYXRhOiBkYXRhLnBheWxvYWQsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0TGlzdEZhaWwsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwZXJmb3JtZXJMaXN0aW5nOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFByb2ZpbGUsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGVyZm9ybWVyUHJvZmlsZToge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWUsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRQcm9maWxlU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBlcmZvcm1lclByb2ZpbGU6IHtcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBkYXRhOiBkYXRhLnBheWxvYWQsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRQcm9maWxlRmFpbCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBlcmZvcm1lclByb2ZpbGU6IHtcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZGF0YS5wYXlsb2FkLFxuICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlKHt9LCBjcmVhdGVSZWR1Y2VycygncGVyZm9ybWVyJywgW3BlcmZvcm1lclJlZHVjZXJzXSwgaW5pdGlhbFN0YXRlKSk7XG4iLCJpbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBjcmVhdGVTYWdhcyB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuaW1wb3J0IHsgcGVyZm9ybWVyU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJUmVkdXhBY3Rpb24gfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBnZXRMaXN0LFxuICBnZXRMaXN0RmFpbCxcbiAgZ2V0TGlzdFN1Y2Nlc3MsXG4gIGdldFByb2ZpbGUsXG4gIGdldFByb2ZpbGVGYWlsLFxuICBnZXRQcm9maWxlU3VjY2Vzc1xufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBwZXJmb3JtZXJTYWdhcyA9IFtcbiAge1xuICAgIG9uOiBnZXRMaXN0LFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgcGVyZm9ybWVyU2VydmljZS5zZWFyY2goZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgeWllbGQgcHV0KGdldExpc3RTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgeWllbGQgcHV0KGdldExpc3RGYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFByb2ZpbGUsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBwZXJmb3JtZXJTZXJ2aWNlLmZpbmRPbmUoZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2ZpbGVTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2ZpbGVGYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmbGF0dGVuKFtjcmVhdGVTYWdhcyhwZXJmb3JtZXJTYWdhcyldKTtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jQWN0aW9uIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGxpc3RQcm9kdWN0cyxcbiAgbGlzdFByb2R1Y3RzU3VjY2VzcyxcbiAgbGlzdFByb2R1Y3RzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdsaXN0UHJvZHVjdHMnLCAnTElTVF9QUk9EVUNUJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIG1vcmVQcm9kdWN0LCBtb3JlUHJvZHVjdFN1Y2Nlc3MsIG1vcmVQcm9kdWN0RmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdtb3JlUHJvZHVjdCcsICdNT1JFX1BST0RVQ1QnKTtcbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXJzIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5pbXBvcnQge1xuICBsaXN0UHJvZHVjdHMsIGxpc3RQcm9kdWN0c0ZhaWwsIGxpc3RQcm9kdWN0c1N1Y2Nlc3MsIG1vcmVQcm9kdWN0LCBtb3JlUHJvZHVjdEZhaWwsIG1vcmVQcm9kdWN0U3VjY2Vzc1xufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb2R1Y3RzOiB7XG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgaXRlbXM6IFtdLFxuICAgIHRvdGFsOiAwXG4gIH1cbn07XG5cbmNvbnN0IHByb2R1Y3RSZWR1Y2VycyA9IFtcbiAge1xuICAgIG9uOiBsaXN0UHJvZHVjdHMsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0cyxcbiAgICAgICAgICByZXF1ZXN0aW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGxpc3RQcm9kdWN0c1N1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBkYXRhLnBheWxvYWQuZGF0YSxcbiAgICAgICAgICB0b3RhbDogZGF0YS5wYXlsb2FkLnRvdGFsLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbGlzdFByb2R1Y3RzRmFpbCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlUHJvZHVjdCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RzLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWUsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbW9yZVByb2R1Y3RTdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICB0b3RhbDogZGF0YS5wYXlsb2FkLnRvdGFsLFxuICAgICAgICAgIGl0ZW1zOiBbLi4uc3RhdGUucHJvZHVjdHMuaXRlbXMsIC4uLmRhdGEucGF5bG9hZC5kYXRhXSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVQcm9kdWN0RmFpbCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2Uoe30sIGNyZWF0ZVJlZHVjZXJzKCdwcm9kdWN0JywgW3Byb2R1Y3RSZWR1Y2Vyc10sIGluaXRpYWxTdGF0ZSkpO1xuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgY3JlYXRlU2FnYXMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7IHByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnQHNlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IElSZWR1eEFjdGlvbiB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7XG4gIGxpc3RQcm9kdWN0cywgbGlzdFByb2R1Y3RzRmFpbCwgbGlzdFByb2R1Y3RzU3VjY2VzcywgbW9yZVByb2R1Y3RGYWlsLCBtb3JlUHJvZHVjdFN1Y2Nlc3MsIG1vcmVQcm9kdWN0XG59IGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IHByb2R1Y3RTYWdhcyA9IFtcbiAge1xuICAgIG9uOiBsaXN0UHJvZHVjdHMsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBwcm9kdWN0U2VydmljZS51c2VyU2VhcmNoKGRhdGEucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dChsaXN0UHJvZHVjdHNTdWNjZXNzKHJlc3AuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgeWllbGQgcHV0KGxpc3RQcm9kdWN0c0ZhaWwoZXJyb3IpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbW9yZVByb2R1Y3QsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBwcm9kdWN0U2VydmljZS51c2VyU2VhcmNoKGRhdGEucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dChtb3JlUHJvZHVjdFN1Y2Nlc3MocmVzcC5kYXRhKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0geWllbGQgUHJvbWlzZS5yZXNvbHZlKGUpO1xuICAgICAgICB5aWVsZCBwdXQobW9yZVByb2R1Y3RGYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmbGF0dGVuKFtjcmVhdGVTYWdhcyhwcm9kdWN0U2FnYXMpXSk7XG4iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbi8vIGxvYWQgcmVkdWNlciBoZXJlXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncy9yZWR1Y2Vycyc7XG5pbXBvcnQgdWkgZnJvbSAnLi91aS9yZWR1Y2Vycyc7XG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXIvcmVkdWNlcnMnO1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoL3JlZHVjZXJzJztcbmltcG9ydCBwZXJmb3JtZXIgZnJvbSAnLi9wZXJmb3JtZXIvcmVkdWNlcnMnO1xuaW1wb3J0IHZpZGVvIGZyb20gJy4vdmlkZW8vcmVkdWNlcnMnO1xuaW1wb3J0IGdhbGxlcnkgZnJvbSAnLi9nYWxsZXJ5L3JlZHVjZXJzJztcbmltcG9ydCBwcm9kdWN0IGZyb20gJy4vcHJvZHVjdC9yZWR1Y2Vycyc7XG5pbXBvcnQgY29tbWVudCBmcm9tICcuL2NvbW1lbnQvcmVkdWNlcnMnO1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9jYXJ0L3JlZHVjZXJzJztcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4vbWVzc2FnZS9yZWR1Y2Vycyc7XG5pbXBvcnQgZmVlZCBmcm9tICcuL2ZlZWQvcmVkdWNlcnMnO1xuaW1wb3J0IHN0cmVhbWluZyBmcm9tICcuL3N0cmVhbWluZy9yZWR1Y2Vycyc7XG5pbXBvcnQgY29udmVyc2F0aW9uIGZyb20gJy4vc3RyZWFtLWNoYXQvcmVkdWNlcnMnO1xuaW1wb3J0IHN1YnNjcmlwdGlvbiBmcm9tICcuL3N1YnNjcmlwdGlvbi9yZWR1Y2Vycyc7XG5cbmNvbnN0IHJlZHVjZXJzID0gbWVyZ2UoXG4gIHNldHRpbmdzLFxuICB1aSxcbiAgdXNlcixcbiAgYXV0aCxcbiAgcGVyZm9ybWVyLFxuICBnYWxsZXJ5LFxuICB2aWRlbyxcbiAgcHJvZHVjdCxcbiAgY29tbWVudCxcbiAgY2FydCxcbiAgbWVzc2FnZSxcbiAgZmVlZCxcbiAgc3RyZWFtaW5nLFxuICBjb252ZXJzYXRpb24sXG4gIHN1YnNjcmlwdGlvblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKTtcbiIsImltcG9ydCB7IGFsbCwgc3Bhd24gfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgdXNlclNhZ2FzIGZyb20gJy4vdXNlci9zYWdhcyc7XG5pbXBvcnQgYXV0aFNhZ2FzIGZyb20gJy4vYXV0aC9zYWdhcyc7XG5pbXBvcnQgcGVyZm9ybWVyU2FnYXMgZnJvbSAnLi9wZXJmb3JtZXIvc2FnYXMnO1xuaW1wb3J0IHZpZGVvU2FnYXMgZnJvbSAnLi92aWRlby9zYWdhcyc7XG5pbXBvcnQgcHJvZHVjdFNhZ2FzIGZyb20gJy4vcHJvZHVjdC9zYWdhcyc7XG5pbXBvcnQgY29tbWVudFNhZ2FzIGZyb20gJy4vY29tbWVudC9zYWdhcyc7XG5pbXBvcnQgZ2FsbGVyeVNhZ2FzIGZyb20gJy4vZ2FsbGVyeS9zYWdhcyc7XG5pbXBvcnQgbWVzc2FnZVNhZ2FzIGZyb20gJy4vbWVzc2FnZS9zYWdhcyc7XG5pbXBvcnQgZmVlZFNhZ2FzIGZyb20gJy4vZmVlZC9zYWdhcyc7XG5pbXBvcnQgc3RyZWFtQ2hhdFNhZ2FzIGZyb20gJy4vc3RyZWFtLWNoYXQvc2FnYXMnO1xuXG5mdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChcbiAgICBbXG4gICAgICAuLi5hdXRoU2FnYXMsXG4gICAgICAuLi51c2VyU2FnYXMsXG4gICAgICAuLi5wZXJmb3JtZXJTYWdhcyxcbiAgICAgIC4uLnZpZGVvU2FnYXMsXG4gICAgICAuLi5wcm9kdWN0U2FnYXMsXG4gICAgICAuLi5jb21tZW50U2FnYXMsXG4gICAgICAuLi5nYWxsZXJ5U2FnYXMsXG4gICAgICAuLi5tZXNzYWdlU2FnYXMsXG4gICAgICAuLi5mZWVkU2FnYXMsXG4gICAgICAuLi5zdHJlYW1DaGF0U2FnYXNcbiAgICBdLm1hcChzcGF3bilcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdFNhZ2E7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNldHRpbmdzID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVTZXR0aW5ncycpO1xuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlcnMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7IHVwZGF0ZVNldHRpbmdzIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuLy8gVE9ETyAtXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHJlcXVpcmVFbWFpbFZlcmlmaWNhdGlvbjogZmFsc2UsXG4gIGdvb2dsZVJlQ2FwdGNoYVNpdGVLZXk6ICcnLFxuICBlbmFibGVHb29nbGVSZUNhcHRjaGE6IGZhbHNlLFxuICBnb29nbGVDbGllbnRJZDogJycsXG4gIHRva2VuQ29udmVyc2lvblJhdGU6IDEsXG4gIHN0cmlwZVB1Ymxpc2hhYmxlS2V5OiAnJyxcbiAgcGF5bWVudEdhdGV3YXk6ICdzdHJpcGUnXG59O1xuXG5jb25zdCBzZXR0aW5nUmVkdWNlcnMgPSBbXG4gIHtcbiAgICBvbjogdXBkYXRlU2V0dGluZ3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRhdGEucGF5bG9hZFxuICAgICAgfTtcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlKHt9LCBjcmVhdGVSZWR1Y2Vycygnc2V0dGluZ3MnLCBbc2V0dGluZ1JlZHVjZXJzXSwgaW5pdGlhbFN0YXRlKSk7XG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuXG5pbXBvcnQgc3RvcmVIb2xkZXIgZnJvbSAnQGxpYi9zdG9yZUhvbGRlcic7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcic7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9yb290U2FnYSc7XG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmU6IGFueSkgPT4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xuXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU6IGFueSkge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYmluZE1pZGRsZXdhcmUoW3NhZ2FNaWRkbGV3YXJlXSkpIGFzIGFueTtcblxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG5cbiAgc3RvcmVIb2xkZXIuc2V0U3RvcmUoc3RvcmUpO1xuXG4gIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmU7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZUFzeW5jQWN0aW9uIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFN0cmVhbUNvbnZlcnNhdGlvbixcbiAgZ2V0U3RyZWFtQ29udmVyc2F0aW9uU3VjY2VzcyxcbiAgZ2V0U3RyZWFtQ29udmVyc2F0aW9uRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRTdHJlYW1Db252ZXJzYXRpb24nLCAnR0VUX1NUUkVBTV9DT05WRVJTQVRJT04nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2VuZFN0cmVhbU1lc3NhZ2UsXG4gIHNlbmRTdHJlYW1NZXNzYWdlU3VjY2VzcyxcbiAgc2VuZFN0cmVhbU1lc3NhZ2VGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3NlbmRTdHJlYW1NZXNzYWdlJywgJ1NFTkRfU1RSRUFNX01FU1NBR0UnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgcmVjZWl2ZVN0cmVhbU1lc3NhZ2VTdWNjZXNzXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3JlY2VpdmVTdHJlYW1NZXNzYWdlU3VjY2VzcycsICdSRUNFSVZFX1NUUkVBTV9NRVNTQUdFX1NVQ0NFU1MnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgbG9hZFN0cmVhbU1lc3NhZ2VzLFxuICBsb2FkU3RyZWFtTWVzc2FnZXNTdWNjZXNzLFxuICBsb2FkU3RyZWFtTWVzc2FnZXNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2xvYWRTdHJlYW1NZXNzYWdlcycsICdMT0FEX1NUUkVBTV9NRVNTQUdFUycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBsb2FkTW9yZVN0cmVhbU1lc3NhZ2VzLFxuICBsb2FkTW9yZVN0cmVhbU1lc3NhZ2VzU3VjY2VzcyxcbiAgbG9hZE1vcmVTdHJlYW1NZXNzYWdlc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignbG9hZE1vcmVTdHJlYW1NZXNzYWdlcycsICdMT0FEX01PUkVfU1RSRUFNX01FU1NBR0VTJyk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaGluZ1N0cmVhbU1lc3NhZ2UgPSBjcmVhdGVBY3Rpb24oJ2ZldGNoaW5nU3RyZWFtTWVzc2FnZScpO1xuXG5leHBvcnQgY29uc3QgcmVzZXRTdHJlYW1NZXNzYWdlID0gY3JlYXRlQWN0aW9uKCdyZXNldFN0cmVhbU1lc3NhZ2UnKTtcbmV4cG9ydCBjb25zdCByZXNldEFsbFN0cmVhbU1lc3NhZ2UgPSBjcmVhdGVBY3Rpb24oJ3Jlc2V0QWxsU3RyZWFtTWVzc2FnZScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBkZWxldGVNZXNzYWdlLFxuICBkZWxldGVNZXNzYWdlU3VjY2VzcyxcbiAgZGVsZXRlTWVzc2FnZUZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZGVsZXRlTWVzc2FnZScsICdERUxFVEVfTUVTU0FHRScpO1xuIiwiaW1wb3J0IHsgbWVyZ2UsIGZpbmRJbmRleCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VycyB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuaW1wb3J0IHsgSVJlZHV4QWN0aW9uIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgZ2V0U3RyZWFtQ29udmVyc2F0aW9uLFxuICBnZXRTdHJlYW1Db252ZXJzYXRpb25TdWNjZXNzLFxuICBmZXRjaGluZ1N0cmVhbU1lc3NhZ2UsXG4gIHNlbmRTdHJlYW1NZXNzYWdlLFxuICBzZW5kU3RyZWFtTWVzc2FnZVN1Y2Nlc3MsXG4gIHNlbmRTdHJlYW1NZXNzYWdlRmFpbCxcbiAgcmVjZWl2ZVN0cmVhbU1lc3NhZ2VTdWNjZXNzLFxuICBsb2FkTW9yZVN0cmVhbU1lc3NhZ2VzU3VjY2VzcyxcbiAgbG9hZFN0cmVhbU1lc3NhZ2VzU3VjY2VzcyxcbiAgcmVzZXRTdHJlYW1NZXNzYWdlLFxuICByZXNldEFsbFN0cmVhbU1lc3NhZ2UsXG4gIGRlbGV0ZU1lc3NhZ2VTdWNjZXNzXG59IGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxNZXNzYWdlU3RhdGUgPSB7XG4gIGFjdGl2ZUNvbnZlcnNhdGlvbjoge1xuICB9LFxuICBzZW5kTWVzc2FnZToge1xuICAgIHNlbmRpbmc6IGZhbHNlXG4gIH0sXG4gIHJlY2VpdmVNZXNzYWdlOiB7fSxcbiAgY29udmVyc2F0aW9uTWFwOiB7fVxufTtcblxuY29uc3Qgc3RyZWFtTWVzc2FnZVJlZHVjZXIgPSBbXG4gIHtcbiAgICBvbjogZ2V0U3RyZWFtQ29udmVyc2F0aW9uLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUNvbnZlcnNhdGlvbjogeyAuLi5zdGF0ZS5hY3RpdmVDb252ZXJzYXRpb24sIGZldGNoaW5nOiB0cnVlIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFN0cmVhbUNvbnZlcnNhdGlvblN1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUNvbnZlcnNhdGlvbjoge1xuICAgICAgICAgIGZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBkYXRhLnBheWxvYWQuZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBmZXRjaGluZ1N0cmVhbU1lc3NhZ2UsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25NYXAgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25JZCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSA9IHtcbiAgICAgICAgLi4uY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSxcbiAgICAgICAgZmV0Y2hpbmc6IHRydWVcbiAgICAgIH07XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBsb2FkU3RyZWFtTWVzc2FnZXNTdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIGNvbnN0IHsgY29udmVyc2F0aW9uTWFwIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IHsgY29udmVyc2F0aW9uSWQsIGl0ZW1zLCB0b3RhbCB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSA9IHtcbiAgICAgICAgaXRlbXM6IFsuLi5pdGVtcy5yZXZlcnNlKCldLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgZmV0Y2hpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbG9hZE1vcmVTdHJlYW1NZXNzYWdlc1N1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25NYXAgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25JZCwgaXRlbXMsIHRvdGFsIH0gPSBkYXRhLnBheWxvYWQ7XG4gICAgICBjb252ZXJzYXRpb25NYXBbY29udmVyc2F0aW9uSWRdID0ge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIC4uLml0ZW1zLnJldmVyc2UoKSxcbiAgICAgICAgICAuLi5jb252ZXJzYXRpb25NYXBbY29udmVyc2F0aW9uSWRdLml0ZW1zIHx8IFtdXG4gICAgICAgIF0sXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBmZXRjaGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBzZW5kU3RyZWFtTWVzc2FnZSxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZW5kTWVzc2FnZToge1xuICAgICAgICAgIHNlbmRpbmc6IHRydWUsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgZGF0YTogbnVsbFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBzZW5kU3RyZWFtTWVzc2FnZVN1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgY29uc3QgbmV4dFN0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV4dFN0YXRlLFxuICAgICAgICBzZW5kTWVzc2FnZToge1xuICAgICAgICAgIHNlbmRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YTogZGF0YS5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHNlbmRTdHJlYW1NZXNzYWdlRmFpbCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHtcbiAgICAgICAgICBzZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZGF0YS5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlY2VpdmVTdHJlYW1NZXNzYWdlU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgICBjb25zdCB7IGNvbnZlcnNhdGlvbklkIH0gPSBkYXRhLnBheWxvYWQ7XG4gICAgICBpZiAoIW5leHRTdGF0ZS5jb252ZXJzYXRpb25NYXBbY29udmVyc2F0aW9uSWRdIHx8ICFuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXS5pdGVtcykge1xuICAgICAgICBuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSA9IHtcbiAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlLmNvbnZlcnNhdGlvbk1hcFtjb252ZXJzYXRpb25JZF0gPSB7XG4gICAgICAgIC4uLm5leHRTdGF0ZS5jb252ZXJzYXRpb25NYXBbY29udmVyc2F0aW9uSWRdLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIC4uLm5leHRTdGF0ZS5jb252ZXJzYXRpb25NYXBbY29udmVyc2F0aW9uSWRdLml0ZW1zLFxuICAgICAgICAgIGRhdGEucGF5bG9hZFxuICAgICAgICBdLFxuICAgICAgICBmZXRjaGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXh0U3RhdGUsXG4gICAgICAgIHJlY2VpdmVNZXNzYWdlOiBkYXRhLnBheWxvYWRcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlc2V0U3RyZWFtTWVzc2FnZSxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5leHRTdGF0ZSxcbiAgICAgICAgYWN0aXZlQ29udmVyc2F0aW9uOiB7fSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHtcbiAgICAgICAgICBzZW5kaW5nOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlTWVzc2FnZToge30sXG4gICAgICAgIGNvbnZlcnNhdGlvbk1hcDoge31cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHJlc2V0QWxsU3RyZWFtTWVzc2FnZSxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgICBjb25zdCB7IGNvbnZlcnNhdGlvbklkIH0gPSBkYXRhLnBheWxvYWQ7XG4gICAgICBuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSA9IHtcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV4dFN0YXRlXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBkZWxldGVNZXNzYWdlU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgICBjb25zdCB7IGNvbnZlcnNhdGlvbklkLCBfaWQgfSA9IGRhdGEucGF5bG9hZDtcbiAgICAgIGlmIChuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXSAmJiBuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXS5pdGVtcykge1xuICAgICAgICBjb25zdCBpID0gZmluZEluZGV4KG5leHRTdGF0ZS5jb252ZXJzYXRpb25NYXBbY29udmVyc2F0aW9uSWRdLml0ZW1zLCAoaXRlbTogYW55KSA9PiBpdGVtICYmIGl0ZW0uX2lkID09PSBfaWQpO1xuICAgICAgICBuZXh0U3RhdGUuY29udmVyc2F0aW9uTWFwW2NvbnZlcnNhdGlvbklkXS5pdGVtc1tpXS50ZXh0ID0gJ01lc3NhZ2UgZGVsZXRlZCc7XG4gICAgICAgIG5leHRTdGF0ZS5jb252ZXJzYXRpb25NYXBbY29udmVyc2F0aW9uSWRdLml0ZW1zW2ldLmlzRGVsZXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXh0U3RhdGVcbiAgICAgIH07XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZShcbiAge30sXG4gIGNyZWF0ZVJlZHVjZXJzKCdzdHJlYW1NZXNzYWdlJywgW3N0cmVhbU1lc3NhZ2VSZWR1Y2VyXSwgaW5pdGlhbE1lc3NhZ2VTdGF0ZSlcbik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IGNyZWF0ZVNhZ2FzIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5pbXBvcnQgeyBtZXNzYWdlU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVJlZHV4QWN0aW9uIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtcbiAgZ2V0U3RyZWFtQ29udmVyc2F0aW9uLFxuICBnZXRTdHJlYW1Db252ZXJzYXRpb25TdWNjZXNzLFxuICBmZXRjaGluZ1N0cmVhbU1lc3NhZ2UsXG4gIGxvYWRNb3JlU3RyZWFtTWVzc2FnZXMsXG4gIGxvYWRNb3JlU3RyZWFtTWVzc2FnZXNTdWNjZXNzLFxuICBsb2FkU3RyZWFtTWVzc2FnZXMsXG4gIGxvYWRTdHJlYW1NZXNzYWdlc1N1Y2Nlc3MsXG4gIHNlbmRTdHJlYW1NZXNzYWdlLFxuICBzZW5kU3RyZWFtTWVzc2FnZVN1Y2Nlc3MsXG4gIGRlbGV0ZU1lc3NhZ2UsXG4gIGRlbGV0ZU1lc3NhZ2VTdWNjZXNzLFxuICBkZWxldGVNZXNzYWdlRmFpbFxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBzdHJlYW1NZXNzYWdlU2FnYXMgPSBbXG4gIHtcbiAgICBvbjogZ2V0U3RyZWFtQ29udmVyc2F0aW9uLFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxSZWNvcmQ8c3RyaW5nLCBhbnk+Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBjb252ZXJzYXRpb24gfSA9IGRhdGEucGF5bG9hZDtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBjb252ZXJzYXRpb247XG4gICAgICAgIGNvbnN0IHJlc3AgPSB0eXBlID09PSAnc3RyZWFtX3B1YmxpYydcbiAgICAgICAgICA/IHlpZWxkIG1lc3NhZ2VTZXJ2aWNlLmZpbmRQdWJsaWNDb252ZXJzYXRpb25QZXJmb3JtZXIoXG4gICAgICAgICAgICBjb252ZXJzYXRpb24ucGVyZm9ybWVySWRcbiAgICAgICAgICApXG4gICAgICAgICAgOiB5aWVsZCBtZXNzYWdlU2VydmljZS5nZXRDb252ZXJzYXRpb25CeVN0cmVhbUlkKFxuICAgICAgICAgICAgY29udmVyc2F0aW9uLnN0cmVhbUlkXG4gICAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlc3AgJiYgcmVzcC5kYXRhKSB7XG4gICAgICAgICAgeWllbGQgcHV0KGdldFN0cmVhbUNvbnZlcnNhdGlvblN1Y2Nlc3MoeyBkYXRhOiByZXNwLmRhdGEgfSkpO1xuICAgICAgICAgIHlpZWxkIHB1dChcbiAgICAgICAgICAgIGxvYWRTdHJlYW1NZXNzYWdlcyh7XG4gICAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkOiByZXNwLmRhdGEuX2lkLFxuICAgICAgICAgICAgICBsaW1pdDogMjUsXG4gICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGxvYWQgZXJyb3JcbiAgICAgICAgY29uc29sZS5sb2coJ2Vyci1nZXQtY29udmVyc2F0aW9uJywgZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGxvYWRTdHJlYW1NZXNzYWdlcyxcbiAgICAqIHdvcmtlcihkYXRhOiBJUmVkdXhBY3Rpb248UmVjb3JkPHN0cmluZywgYW55Pj4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjb252ZXJzYXRpb25JZCwgb2Zmc2V0LCBsaW1pdFxuICAgICAgICB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgICB5aWVsZCBwdXQoZmV0Y2hpbmdTdHJlYW1NZXNzYWdlKHsgY29udmVyc2F0aW9uSWQgfSkpO1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgbWVzc2FnZVNlcnZpY2UuZ2V0UHVibGljTWVzc2FnZXMoY29udmVyc2F0aW9uSWQsIHtcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgbGltaXRcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIHB1dChcbiAgICAgICAgICBsb2FkU3RyZWFtTWVzc2FnZXNTdWNjZXNzKHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgICAgaXRlbXM6IHJlc3AuZGF0YS5kYXRhLFxuICAgICAgICAgICAgdG90YWw6IHJlc3AuZGF0YS50b3RhbFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGxvYWQgZXJyb3JcbiAgICAgICAgY29uc29sZS5sb2coJ2VycicsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBsb2FkTW9yZVN0cmVhbU1lc3NhZ2VzLFxuICAgICogd29ya2VyKGRhdGE6IElSZWR1eEFjdGlvbjxSZWNvcmQ8c3RyaW5nLCBhbnk+Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZU1hcCA9IHNlbGVjdChcbiAgICAgICAgICAoc3RhdGUpID0+IHN0YXRlLnN0cmVhbU1lc3NhZ2UubWVzc2FnZXNcbiAgICAgICAgKSBhcyBhbnk7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjb252ZXJzYXRpb25JZCwgb2Zmc2V0LCBsaW1pdFxuICAgICAgICB9ID0gZGF0YS5wYXlsb2FkO1xuICAgICAgICBpZiAobWVzc2FnZU1hcCAmJiBtZXNzYWdlTWFwLmZldGNoaW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgeWllbGQgcHV0KGZldGNoaW5nU3RyZWFtTWVzc2FnZSh7IGNvbnZlcnNhdGlvbklkIH0pKTtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIG1lc3NhZ2VTZXJ2aWNlLmdldFB1YmxpY01lc3NhZ2VzKGNvbnZlcnNhdGlvbklkLCB7XG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIGxpbWl0XG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBwdXQoXG4gICAgICAgICAgbG9hZE1vcmVTdHJlYW1NZXNzYWdlc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBpdGVtczogcmVzcC5kYXRhLmRhdGEsXG4gICAgICAgICAgICB0b3RhbDogcmVzcC5kYXRhLnRvdGFsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gbG9hZCBlcnJvclxuICAgICAgICBtZXNzYWdlLmVycm9yKCdFcnJvciBvY2N1cmVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogc2VuZFN0cmVhbU1lc3NhZ2UsXG4gICAgKiB3b3JrZXIocmVxOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBjb252ZXJzYXRpb25JZCwgZGF0YSB9ID0gcmVxLnBheWxvYWQ7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBtZXNzYWdlU2VydmljZS5zZW5kU3RyZWFtTWVzc2FnZShjb252ZXJzYXRpb25JZCwgZGF0YSk7XG5cbiAgICAgICAgeWllbGQgcHV0KHNlbmRTdHJlYW1NZXNzYWdlU3VjY2VzcyhyZXNwLmRhdGEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgeWllbGQgcHV0KHNlbmRTdHJlYW1NZXNzYWdlU3VjY2VzcyhlKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGRlbGV0ZU1lc3NhZ2UsXG4gICAgKiB3b3JrZXIocmVxOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlSWQgfSA9IHJlcS5wYXlsb2FkO1xuICAgICAgICBjb25zdCByZXNwID0geWllbGQgbWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc2FnZShtZXNzYWdlSWQpO1xuICAgICAgICB5aWVsZCBwdXQoZGVsZXRlTWVzc2FnZVN1Y2Nlc3MocmVzcC5kYXRhKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHlpZWxkIHB1dChkZWxldGVNZXNzYWdlRmFpbChlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmbGF0dGVuKFtjcmVhdGVTYWdhcyhzdHJlYW1NZXNzYWdlU2FnYXMpXSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IGFkZFByaXZhdGVSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKCdBRERfUFJJVkFURV9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3QgYWNjZXNzUHJpdmF0ZVJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oJ0FDQ0VTU19QUklWQVRFX1JFUVVTRVQnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVMaXZlU3RyZWFtU2V0dGluZ3MgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9MSVZFX1NUUkVBTV9TRVRUSU5HUycpO1xuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlcnMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7IElSZWR1eEFjdGlvbiB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGFkZFByaXZhdGVSZXF1ZXN0LCBhY2Nlc3NQcml2YXRlUmVxdWVzdCwgdXBkYXRlTGl2ZVN0cmVhbVNldHRpbmdzIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcml2YXRlUmVxdWVzdHM6IFtdLFxuICBzZXR0aW5nczoge1xuICAgIHZpZXdlclVSTDogJycsXG4gICAgcHVibGlzaGVyVVJMOiAnJyxcbiAgICBvcHRpb25Gb3JCcm9hZGNhc3Q6ICdobHMnLFxuICAgIG9wdGlvbkZvckdyb3VwOiAnaGxzJyxcbiAgICBvcHRpb25Gb3JQcml2YXRlOiAnaGxzJyxcbiAgICBzZWN1cmVPcHRpb246IGZhbHNlLFxuICAgIGFnb3JhRW5hYmxlOiBmYWxzZVxuICB9XG59O1xuXG5jb25zdCByZWR1Y2VycyA9IFtcbiAge1xuICAgIG9uOiBhZGRQcml2YXRlUmVxdWVzdCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGFjdGlvbjogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcml2YXRlUmVxdWVzdHM6IFsuLi5zdGF0ZS5wcml2YXRlUmVxdWVzdHMsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogYWNjZXNzUHJpdmF0ZVJlcXVlc3QsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBhY3Rpb246IElSZWR1eEFjdGlvbjxzdHJpbmc+KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJpdmF0ZVJlcXVlc3RzOiBzdGF0ZS5wcml2YXRlUmVxdWVzdHMuZmlsdGVyKChwKSA9PiBwLmNvbnZlcnNhdGlvbklkICE9PSBhY3Rpb24ucGF5bG9hZClcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHVwZGF0ZUxpdmVTdHJlYW1TZXR0aW5ncyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGFjdGlvbjogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIC4uLnN0YXRlLnNldHRpbmdzLFxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5dO1xuZXhwb3J0IGRlZmF1bHQgbWVyZ2Uoe30sIGNyZWF0ZVJlZHVjZXJzKCdzdHJlYW1pbmcnLCBbcmVkdWNlcnNdLCBpbml0aWFsU3RhdGUpKTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3Qgc2hvd1N1YnNjcmliZVBlcmZvcm1lck1vZGFsID0gY3JlYXRlQWN0aW9uKCdTSE9XX1NVQlNDUklCRV9QRVJGT1JNRVJfTU9EQUwnKTtcbmV4cG9ydCBjb25zdCBoaWRlU3Vic2NyaWJlUGVyZm9ybWVyTW9kYWwgPSBjcmVhdGVBY3Rpb24oJ0hJREVfU1VCU0NSSUJFX1BFUkZPUk1FUl9NT0RBTCcpO1xuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlcnMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7IElSZWR1eEFjdGlvbiB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHNob3dTdWJzY3JpYmVQZXJmb3JtZXJNb2RhbCwgaGlkZVN1YnNjcmliZVBlcmZvcm1lck1vZGFsIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzaG93TW9kYWw6IGZhbHNlLFxuICBzdWJzY3JpYmluZ1BlcmZvcm1lcklkOiBudWxsXG59O1xuXG5jb25zdCByZWR1Y2VycyA9IFtcbiAge1xuICAgIG9uOiBzaG93U3Vic2NyaWJlUGVyZm9ybWVyTW9kYWwsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBhY3Rpb246IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvd01vZGFsOiB0cnVlLFxuICAgICAgICBzdWJzY3JpYmluZ1BlcmZvcm1lcklkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogaGlkZVN1YnNjcmliZVBlcmZvcm1lck1vZGFsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgIHN1YnNjcmliaW5nUGVyZm9ybWVySWQ6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICB9XG5dO1xuZXhwb3J0IGRlZmF1bHQgbWVyZ2Uoe30sIGNyZWF0ZVJlZHVjZXJzKCdzdWJzY3JpcHRpb24nLCBbcmVkdWNlcnNdLCBpbml0aWFsU3RhdGUpKTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVUlWYWx1ZSA9IGNyZWF0ZUFjdGlvbigndXBkYXRlVUlWYWx1ZScpO1xuZXhwb3J0IGNvbnN0IGxvYWRVSVZhbHVlID0gY3JlYXRlQWN0aW9uKCdsb2FkVUlWYWx1ZScpO1xuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlcnMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7IHVwZGF0ZVVJVmFsdWUsIGxvYWRVSVZhbHVlIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0aGVtZTogJ2xpZ2h0JyxcbiAgc2l0ZU5hbWU6ICcnLFxuICBsb2dvOiAnJyxcbiAgbWVudXM6IFtdLFxuICBmYXZpY29uOiAnL3N0YXRpYy9mYXZpY29uLmljbycsXG4gIGxvZ2luUGxhY2Vob2xkZXJJbWFnZTogJycsXG4gIGZvb3RlckNvbnRlbnQ6ICcnLFxuICBtb2RlbEJlbmVmaXQ6ICcnLFxuICB1c2VyQmVuZWZpdDogJydcbn07XG5cbmNvbnN0IHVpUmVkdWNlcnMgPSBbXG4gIHtcbiAgICBvbjogdXBkYXRlVUlWYWx1ZSxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnBheWxvYWQpLmZvckVhY2goXG4gICAgICAgICAgKGtleSkgPT4gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YS5wYXlsb2FkW2tleV0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uZGF0YS5wYXlsb2FkXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBsb2FkVUlWYWx1ZSxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbCA9IHt9O1xuICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBPYmplY3Qua2V5cyhpbml0aWFsU3RhdGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgbmV3VmFsW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5uZXdWYWxcbiAgICAgIH07XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZSh7fSwgY3JlYXRlUmVkdWNlcnMoJ3VpJywgW3VpUmVkdWNlcnNdLCBpbml0aWFsU3RhdGUpKTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgY3JlYXRlQXN5bmNBY3Rpb24gfSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRVc2VyID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVDdXJyZW50VXNlcicpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRVc2VyQXZhdGFyID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVDdXJyZW50VXNlckF2YXRhcicpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRVc2VyQ292ZXIgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRVc2VyQ292ZXInKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXBkYXRlVXNlcixcbiAgdXBkYXRlVXNlclN1Y2Nlc3MsXG4gIHVwZGF0ZVVzZXJGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VwZGF0ZVVzZXInLCAnVVBEQVRFX1VTRVInKTtcblxuZXhwb3J0IGNvbnN0IHsgdXBkYXRlUGVyZm9ybWVyIH0gPSBjcmVhdGVBc3luY0FjdGlvbihcbiAgJ3VwZGF0ZVBlcmZvcm1lcicsXG4gICdVUERBVEVfUEVSRk9STUVSJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHNldFVwZGF0aW5nID0gY3JlYXRlQWN0aW9uKCd1cGRhdGluZ1VzZXInKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXBkYXRlUGFzc3dvcmQsXG4gIHVwZGF0ZVBhc3N3b3JkU3VjY2VzcyxcbiAgdXBkYXRlUGFzc3dvcmRGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VwZGF0ZVBhc3N3b3JkJywgJ1VQREFURV9QQVNTV09SRCcpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQmFsYW5jZSA9IGNyZWF0ZUFjdGlvbigndXBkYXRlQmFsYW5jZScpO1xuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlcnMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7IElSZWR1eEFjdGlvbiwgSVVzZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICdAcmVkdXgvYXV0aC9hY3Rpb25zJztcbmltcG9ydCB7XG4gIHVwZGF0ZUN1cnJlbnRVc2VyLFxuICB1cGRhdGVVc2VyU3VjY2VzcyxcbiAgc2V0VXBkYXRpbmcsXG4gIHVwZGF0ZUN1cnJlbnRVc2VyQXZhdGFyLFxuICB1cGRhdGVVc2VyRmFpbCxcbiAgdXBkYXRlUGFzc3dvcmRTdWNjZXNzLFxuICB1cGRhdGVQYXNzd29yZEZhaWwsXG4gIHVwZGF0ZUN1cnJlbnRVc2VyQ292ZXIsXG4gIHVwZGF0ZUJhbGFuY2Vcbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjdXJyZW50OiB7XG4gICAgX2lkOiBudWxsLFxuICAgIGF2YXRhcjogJy9zdGF0aWMvbm8tYXZhdGFyLnBuZycsXG4gICAgY292ZXI6IG51bGwsXG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnXG4gIH0sXG4gIGVycm9yOiBudWxsLFxuICB1cGRhdGVTdWNjZXNzOiBmYWxzZSxcbiAgdXBkYXRpbmc6IGZhbHNlXG59O1xuXG5jb25zdCB1c2VyUmVkdWNlcnMgPSBbXG4gIHtcbiAgICBvbjogdXBkYXRlQ3VycmVudFVzZXIsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50OiBkYXRhLnBheWxvYWRcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHVwZGF0ZUN1cnJlbnRVc2VyQXZhdGFyLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgIC4uLnN0YXRlLmN1cnJlbnQsXG4gICAgICAgICAgYXZhdGFyOiBkYXRhLnBheWxvYWRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogdXBkYXRlQ3VycmVudFVzZXJDb3ZlcixcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJyZW50LFxuICAgICAgICAgIGNvdmVyOiBkYXRhLnBheWxvYWRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogdXBkYXRlVXNlclN1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248SVVzZXI+KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudDogZGF0YS5wYXlsb2FkLFxuICAgICAgICB1cGRhdGVTdWNjZXNzOiB0cnVlLFxuICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogdXBkYXRlVXNlckZhaWwsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVwZGF0ZVVzZXI6IG51bGwsXG4gICAgICAgIHVwZGF0ZVN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZGF0YS5wYXlsb2FkXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBzZXRVcGRhdGluZyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxib29sZWFuPikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVwZGF0aW5nOiBkYXRhLnBheWxvYWRcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHVwZGF0ZVBhc3N3b3JkU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IElSZWR1eEFjdGlvbjxhbnk+KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXBkYXRlU3VjY2VzczogdHJ1ZSxcbiAgICAgICAgdXBkYXRlZFBhc3N3b3JkOiBkYXRhLnBheWxvYWQsXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiB1cGRhdGVQYXNzd29yZEZhaWwsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVwZGF0ZVN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB1cGRhdGVkUGFzc3dvcmQ6IG51bGwsXG4gICAgICAgIGVycm9yOiBkYXRhLnBheWxvYWRcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IHVwZGF0ZUJhbGFuY2UsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGEucGF5bG9hZDtcbiAgICAgIG5leHRTdGF0ZS5jdXJyZW50LmJhbGFuY2UgKz0gdG9rZW47XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXh0U3RhdGVcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGxvZ291dCxcbiAgICByZWR1Y2VyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2Uoe30sIGNyZWF0ZVJlZHVjZXJzKCd1c2VyJywgW3VzZXJSZWR1Y2Vyc10sIGluaXRpYWxTdGF0ZSkpO1xuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgY3JlYXRlU2FnYXMgfSBmcm9tICdAbGliL3JlZHV4JztcbmltcG9ydCB7IHVzZXJTZXJ2aWNlLCBhdXRoU2VydmljZSwgcGVyZm9ybWVyU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJUmVkdXhBY3Rpb24gfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1xuICB1cGRhdGVVc2VyLFxuICB1cGRhdGVVc2VyU3VjY2VzcyxcbiAgdXBkYXRlVXNlckZhaWwsXG4gIHNldFVwZGF0aW5nLFxuICB1cGRhdGVQYXNzd29yZCxcbiAgdXBkYXRlUGFzc3dvcmRTdWNjZXNzLFxuICB1cGRhdGVQYXNzd29yZEZhaWwsXG4gIHVwZGF0ZVBlcmZvcm1lclxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCB1c2VyU2FnYXMgPSBbXG4gIC8vIFRPRE8gLSBkZWZpbmQgdXBkYXRlIGN1cnJlbnQgdXNlciBvciBnZXQgZnJvbSBhdXRoIHVzZXIgaW5mbyB0byByZWxvYWQgY3VycmVudCB1c2VyIGRhdGEgaWYgbmVlZGVkXG4gIHtcbiAgICBvbjogdXBkYXRlVXNlcixcbiAgICAqIHdvcmtlcihkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeWllbGQgcHV0KHNldFVwZGF0aW5nKHRydWUpKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZCA9IHlpZWxkIHVzZXJTZXJ2aWNlLnVwZGF0ZU1lKGRhdGEucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVVc2VyU3VjY2Vzcyh1cGRhdGVkLmRhdGEpKTtcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdDaGFuZ2VzIHNhdmVkJyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFRPRE8gLSBhbGVydCBlcnJvclxuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcj8ubWVzc2FnZSB8fCAnRXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicpO1xuICAgICAgICB5aWVsZCBwdXQodXBkYXRlVXNlckZhaWwoZXJyb3IpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHlpZWxkIHB1dChzZXRVcGRhdGluZyhmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiB1cGRhdGVQZXJmb3JtZXIsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dChzZXRVcGRhdGluZyh0cnVlKSk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSB5aWVsZCBwZXJmb3JtZXJTZXJ2aWNlLnVwZGF0ZU1lKGRhdGEucGF5bG9hZC5faWQsIGRhdGEucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVVc2VyU3VjY2Vzcyh1cGRhdGVkLmRhdGEpKTtcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdDaGFuZ2VzIHNhdmVkJyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFRPRE8gLSBhbGVydCBlcnJvclxuICAgICAgICBjb25zdCBlcnJvciA9IHlpZWxkIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcj8ubWVzc2FnZSB8fCAnRXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicpO1xuICAgICAgICB5aWVsZCBwdXQodXBkYXRlVXNlckZhaWwoZXJyb3IpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHlpZWxkIHB1dChzZXRVcGRhdGluZyhmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiB1cGRhdGVQYXNzd29yZCxcbiAgICAqIHdvcmtlcihkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeWllbGQgcHV0KHNldFVwZGF0aW5nKHRydWUpKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZCA9IHlpZWxkIGF1dGhTZXJ2aWNlLnVwZGF0ZVBhc3N3b3JkKGRhdGEucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVQYXNzd29yZFN1Y2Nlc3ModXBkYXRlZC5kYXRhKSk7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnQ2hhbmdlcyBzYXZlZCcpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBUT0RPIC0gYWxlcnQgZXJyb3JcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3I/Lm1lc3NhZ2UgfHwgJ0Vycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInKTtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZVBhc3N3b3JkRmFpbChlcnJvcikpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgeWllbGQgcHV0KHNldFVwZGF0aW5nKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmbGF0dGVuKFtjcmVhdGVTYWdhcyh1c2VyU2FnYXMpXSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY0FjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRWaWRlb3MsXG4gIGdldFZpZGVvc1N1Y2Nlc3MsXG4gIGdldFZpZGVvc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0VmlkZW9zJywgJ0dFVF9WSURFT1MnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0Vm9kcyxcbiAgZ2V0Vm9kc1N1Y2Nlc3MsXG4gIGdldFZvZHNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFZvZHMnLCAnR0VUX1ZPRFMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgbW9yZVZpZGVvLCBtb3JlVmlkZW9TdWNjZXNzLCBtb3JlVmlkZW9GYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ21vcmVWaWRlbycsICdMT0FEX01PUkUnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgbW9yZVZvZCwgbW9yZVZvZFN1Y2Nlc3MsIG1vcmVWb2RGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ21vcmVWb2QnLCAnTU9SRV9WT0QnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UmVsYXRlZCwgZ2V0UmVsYXRlZFN1Y2Nlc3MsIGdldFJlbGF0ZWRGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFJlbGF0ZWQnLCAnR0VUX1JFTEFURUQnKTtcbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXJzIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5pbXBvcnQge1xuICBnZXRWaWRlb3MsIGdldFZpZGVvc0ZhaWwsIGdldFZpZGVvc1N1Y2Nlc3MsIG1vcmVWaWRlbywgbW9yZVZpZGVvU3VjY2VzcywgbW9yZVZpZGVvRmFpbCxcbiAgZ2V0UmVsYXRlZCwgZ2V0UmVsYXRlZFN1Y2Nlc3MsIGdldFJlbGF0ZWRGYWlsLCBnZXRWb2RzLCBnZXRWb2RzU3VjY2VzcywgZ2V0Vm9kc0ZhaWwsXG4gIG1vcmVWb2QsIG1vcmVWb2RTdWNjZXNzLCBtb3JlVm9kRmFpbFxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZpZGVvczoge1xuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIGVycm9yOiBudWxsLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICB0b3RhbDogMFxuICB9LFxuICBzYWxlVmlkZW9zOiB7XG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgaXRlbXM6IFtdLFxuICAgIHRvdGFsOiAwXG4gIH0sXG4gIHJlbGF0ZWRWaWRlb3M6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBpdGVtczogW10sXG4gICAgdG90YWw6IDBcbiAgfVxufTtcblxuY29uc3QgdmlkZW9SZWR1Y2VycyA9IFtcbiAge1xuICAgIG9uOiBnZXRWaWRlb3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlkZW9zOiB7XG4gICAgICAgICAgLi4uc3RhdGUudmlkZW9zLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0VmlkZW9zU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpZGVvczoge1xuICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBkYXRhLnBheWxvYWQuZGF0YSxcbiAgICAgICAgICB0b3RhbDogZGF0YS5wYXlsb2FkLnRvdGFsLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogZ2V0VmlkZW9zRmFpbCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpZGVvczoge1xuICAgICAgICAgIC4uLnN0YXRlLnZpZGVvcyxcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZGF0YS5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVWaWRlbyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aWRlb3M6IHtcbiAgICAgICAgICAuLi5zdGF0ZS52aWRlb3MsXG4gICAgICAgICAgcmVxdWVzdGluZzogdHJ1ZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlVmlkZW9TdWNjZXNzLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlkZW9zOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgdG90YWw6IGRhdGEucGF5bG9hZC50b3RhbCxcbiAgICAgICAgICBpdGVtczogWy4uLnN0YXRlLnZpZGVvcy5pdGVtcywgLi4uZGF0YS5wYXlsb2FkLmRhdGFdLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbW9yZVZpZGVvRmFpbCxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpZGVvczoge1xuICAgICAgICAgIC4uLnN0YXRlLnZpZGVvcyxcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZGF0YS5wYXlsb2FkLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFZvZHMsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZVZpZGVvczoge1xuICAgICAgICAgIC4uLnN0YXRlLnNhbGVWaWRlb3MsXG4gICAgICAgICAgcmVxdWVzdGluZzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRWb2RzU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVWaWRlb3M6IHtcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogZGF0YS5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgdG90YWw6IGRhdGEucGF5bG9hZC50b3RhbCxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFZvZHNGYWlsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZVZpZGVvczoge1xuICAgICAgICAgIC4uLnN0YXRlLnNhbGVWaWRlb3MsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBtb3JlVm9kLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVWaWRlb3M6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5zYWxlVmlkZW9zLFxuICAgICAgICAgIHJlcXVlc3Rpbmc6IHRydWUsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBvbjogbW9yZVZvZFN1Y2Nlc3MsXG4gICAgcmVkdWNlcihzdGF0ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlVmlkZW9zOiB7XG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgdG90YWw6IGRhdGEucGF5bG9hZC50b3RhbCxcbiAgICAgICAgICBpdGVtczogWy4uLnN0YXRlLnNhbGVWaWRlb3MuaXRlbXMsIC4uLmRhdGEucGF5bG9hZC5kYXRhXSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVWb2RGYWlsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZVZpZGVvczoge1xuICAgICAgICAgIC4uLnN0YXRlLnNhbGVWaWRlb3MsXG4gICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGRhdGEucGF5bG9hZCxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRSZWxhdGVkLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlbGF0ZWRWaWRlb3M6IHtcbiAgICAgICAgICAuLi5zdGF0ZS52aWRlb3MsXG4gICAgICAgICAgcmVxdWVzdGluZzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG9uOiBnZXRSZWxhdGVkU3VjY2VzcyxcbiAgICByZWR1Y2VyKHN0YXRlOiBhbnksIGRhdGE6IGFueSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlbGF0ZWRWaWRlb3M6IHtcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogZGF0YS5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgdG90YWw6IGRhdGEucGF5bG9hZC50b3RhbCxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFJlbGF0ZWRGYWlsLFxuICAgIHJlZHVjZXIoc3RhdGU6IGFueSwgZGF0YTogYW55KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVsYXRlZFZpZGVvczoge1xuICAgICAgICAgIC4uLnN0YXRlLnZpZGVvcyxcbiAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZGF0YS5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZSh7fSwgY3JlYXRlUmVkdWNlcnMoJ3ZpZGVvJywgW3ZpZGVvUmVkdWNlcnNdLCBpbml0aWFsU3RhdGUpKTtcbiIsImltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IGNyZWF0ZVNhZ2FzIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5pbXBvcnQgeyB2aWRlb1NlcnZpY2UgfSBmcm9tICdAc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgSVJlZHV4QWN0aW9uIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgZ2V0VmlkZW9zLCBnZXRWaWRlb3NGYWlsLCBnZXRWaWRlb3NTdWNjZXNzLFxuICBtb3JlVmlkZW8sIG1vcmVWaWRlb0ZhaWwsIG1vcmVWaWRlb1N1Y2Nlc3MsXG4gIGdldFJlbGF0ZWQsIGdldFJlbGF0ZWRTdWNjZXNzLCBnZXRSZWxhdGVkRmFpbFxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCB2aWRlb1NhZ2FzID0gW1xuICB7XG4gICAgb246IGdldFZpZGVvcyxcbiAgICAqIHdvcmtlcihkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIHZpZGVvU2VydmljZS51c2VyU2VhcmNoKHsgLi4uZGF0YS5wYXlsb2FkIH0pO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0VmlkZW9zU3VjY2VzcyhyZXNwLmRhdGEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRWaWRlb3NGYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IG1vcmVWaWRlbyxcbiAgICAqIHdvcmtlcihkYXRhOiBJUmVkdXhBY3Rpb248YW55Pikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIHZpZGVvU2VydmljZS51c2VyU2VhcmNoKHsgLi4uZGF0YS5wYXlsb2FkIH0pO1xuICAgICAgICB5aWVsZCBwdXQobW9yZVZpZGVvU3VjY2VzcyhyZXNwLmRhdGEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICAgIHlpZWxkIHB1dChtb3JlVmlkZW9GYWlsKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgb246IGdldFJlbGF0ZWQsXG4gICAgKiB3b3JrZXIoZGF0YTogSVJlZHV4QWN0aW9uPGFueT4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCB2aWRlb1NlcnZpY2UudXNlclNlYXJjaChkYXRhLnBheWxvYWQpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UmVsYXRlZFN1Y2Nlc3MocmVzcC5kYXRhKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0geWllbGQgUHJvbWlzZS5yZXNvbHZlKGUpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UmVsYXRlZEZhaWwoZXJyb3IpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXR0ZW4oW2NyZWF0ZVNhZ2FzKHZpZGVvU2FnYXMpXSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5pbXBvcnQgbmV4dFJlZHV4V3JhcHBlciBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IG5leHRSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKEJhc2VDb21wb25lbnQ6IGFueSkge1xuICByZXR1cm4gbmV4dFJlZHV4V3JhcHBlcihzdG9yZSBhcyBhbnkpKG5leHRSZWR1eFNhZ2EoQmFzZUNvbXBvbmVudCkpO1xufVxuIiwiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSBcIkBsaWIvc3RyaW5nXCI7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUmVzcG9uc2U8VD4ge1xuICBzdGF0dXM6IG51bWJlcjtcbiAgZGF0YTogVDtcbn1cblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gXCJ0b2tlblwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQVBJUmVxdWVzdCB7XG4gIHN0YXRpYyB0b2tlbjogc3RyaW5nID0gXCJcIjtcblxuICBzZXRBdXRoSGVhZGVyVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIEFQSVJlcXVlc3QudG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIEpTT04gcmV0dXJuZWQgYnkgYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSBBIHJlc3BvbnNlIGZyb20gYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICBUaGUgcGFyc2VkIEpTT04gZnJvbSB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZUpTT04ocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0IHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA1KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBuZXR3b3JrIHJlcXVlc3QgY2FtZSBiYWNrIGZpbmUsIGFuZCB0aHJvd3MgYW4gZXJyb3IgaWYgbm90XG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gcmVzcG9uc2UgICBBIHJlc3BvbnNlIGZyb20gYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fHVuZGVmaW5lZH0gUmV0dXJucyBlaXRoZXIgdGhlIHJlc3BvbnNlLCBvciB0aHJvd3MgYW4gZXJyb3JcbiAgICovXG4gIHByaXZhdGUgY2hlY2tTdGF0dXMocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgbG9naW4hXCIpO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpIGFzIGFueTtcbiAgICAvLyBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIC8vIHRocm93IGVycm9yO1xuICAgIHRocm93IHJlc3BvbnNlLmNsb25lKCkuanNvbigpO1xuICB9XG5cbiAgcmVxdWVzdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q/OiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgdmVyYiA9IChtZXRob2QgfHwgXCJnZXRcIikudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCB1cGRhdGVkSGVhZGVyID0ge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOiBBUElSZXF1ZXN0LnRva2VuIHx8IGNvb2tpZS5nZXQoVE9LRU4pIHx8IG51bGwsXG4gICAgICAuLi4oaGVhZGVycyB8fCB7fSksXG4gICAgfTtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBjb25zdCBiYXNlVXJsID1cbiAgICAgIGNvbmZpZy5BUElfRU5EUE9JTlQgfHxcbiAgICAgIGNvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQgfHxcbiAgICAgIHByb2Nlc3MuZW52LkFQSV9FTkRQT0lOVDtcbiAgICBjb25zdCBhcGlVcmwgPSBpc1VybCh1cmwpXG4gICAgICA/IHVybFxuICAgICAgOiBgJHtiYXNlVXJsfSR7dXJsLnN0YXJ0c1dpdGgoXCIvXCIpID8gdXJsIDogYC8ke3VybH1gfWA7XG5cbiAgICByZXR1cm4gZmV0Y2goYXBpVXJsLCB7XG4gICAgICBtZXRob2Q6IHZlcmIsXG4gICAgICBoZWFkZXJzOiB1cGRhdGVkSGVhZGVyLFxuICAgICAgYm9keTogYm9keSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogbnVsbCxcbiAgICB9KVxuICAgICAgLnRoZW4odGhpcy5jaGVja1N0YXR1cylcbiAgICAgIC50aGVuKHRoaXMucGFyc2VKU09OKTtcbiAgfVxuXG4gIGJ1aWxkVXJsKGJhc2VVcmw6IHN0cmluZywgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICByZXR1cm4gYmFzZVVybDtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC5tYXAoKGspID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW2tdKSkge1xuICAgICAgICAgIHJldHVybiBwYXJhbXNba11cbiAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgIChwYXJhbSkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbSl9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmpvaW4oXCImXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trXSl9YDtcbiAgICAgIH0pXG4gICAgICAuam9pbihcIiZcIik7XG4gICAgcmV0dXJuIGAke2Jhc2VVcmx9PyR7cXVlcnlTdHJpbmd9YDtcbiAgfVxuXG4gIGdldCh1cmw6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgXCJnZXRcIiwgbnVsbCwgaGVhZGVycyk7XG4gIH1cblxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBcInBvc3RcIiwgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIFwicHV0XCIsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgZGVsKHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBcImRlbGV0ZVwiLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwbG9hZChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBmaWxlczoge1xuICAgICAgZmlsZTogRmlsZTtcbiAgICAgIGZpZWxkbmFtZTogc3RyaW5nO1xuICAgIH1bXSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvblByb2dyZXNzOiBGdW5jdGlvbjtcbiAgICAgIGN1c3RvbURhdGE/OiBSZWNvcmQ8YW55LCBhbnk+O1xuICAgICAgbWV0aG9kPzogc3RyaW5nO1xuICAgIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge30sXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgY29uc3QgdXBsb2FkVXJsID0gaXNVcmwodXJsKVxuICAgICAgPyB1cmxcbiAgICAgIDogYCR7Y29uZmlnLkFQSV9FTkRQT0lOVCB8fCBjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmaWxlcy5mb3JFYWNoKChmKSA9PiBmb3JtRGF0YS5hcHBlbmQoZi5maWVsZG5hbWUsIGYuZmlsZSwgZi5maWxlLm5hbWUpKTtcbiAgICAgIG9wdGlvbnMuY3VzdG9tRGF0YSAmJlxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmN1c3RvbURhdGEpLmZvckVhY2goKGZpZWxkbmFtZSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgIUFycmF5LmlzQXJyYXkob3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0pXG4gICAgICAgICAgKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGZpZWxkbmFtZSwgb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0pO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheShvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgaSA8IG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpICs9IDFcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGZpZWxkbmFtZSwgb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV1baV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9IFwianNvblwiO1xuICAgICAgcmVxLm9wZW4ob3B0aW9ucy5tZXRob2QgfHwgXCJQT1NUXCIsIHVwbG9hZFVybCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBBUElSZXF1ZXN0LnRva2VuIHx8IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIHRva2VuIHx8IFwiXCIpO1xuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQge1xuICBJTG9naW4sIElGYW5SZWdpc3RlciwgSUZvcmdvdCwgSVZlcmlmeUVtYWlsXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIFRPS0VOIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBwdWJsaWMgYXN5bmMgbG9naW4oZGF0YTogSUxvZ2luKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsb2dpblR3aXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL2F1dGgvdHdpdHRlci9sb2dpbicpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsb2dpbkdvb2dsZShkYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9nb29nbGUvbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjYWxsYmFja0xvZ2luVHdpdHRlcihkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL2F1dGgvdHdpdHRlci9jYWxsYmFjaycsIGRhdGEpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB2ZXJpZnlFbWFpbChkYXRhOiBJVmVyaWZ5RW1haWwpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9lbWFpbC12ZXJpZmljYXRpb24nLCBkYXRhKTtcbiAgfVxuXG4gIHNldFRva2VuKHRva2VuOiBzdHJpbmcsIHJlbWVtYmVyID0gdHJ1ZSk6IHZvaWQge1xuICAgIGNvbnN0IGV4cGlyZWQgPSB7IGV4cGlyZXM6ICFyZW1lbWJlciA/IDEgOiAzNjUgfTtcbiAgICBjb29raWUuc2V0KFRPS0VOLCB0b2tlbiwgZXhwaXJlZCk7XG4gICAgdGhpcy5zZXRBdXRoSGVhZGVyVG9rZW4odG9rZW4pO1xuICB9XG5cbiAgZ2V0VG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY29va2llLmdldChUT0tFTik7XG4gIH1cblxuICBzZXRUd2l0dGVyVG9rZW4oZGF0YTogYW55LCByb2xlOiBzdHJpbmcpIHtcbiAgICBjb29raWUuc2V0KCdvYXV0aFRva2VuJywgZGF0YS5vYXV0aFRva2VuLCB7IGV4cGlyZXM6IDEgfSk7XG4gICAgY29va2llLnNldCgnb2F1dGhUb2tlblNlY3JldCcsIGRhdGEub2F1dGhUb2tlblNlY3JldCwgeyBleHBpcmVzOiAxIH0pO1xuICAgIGNvb2tpZS5zZXQoJ3JvbGUnLCByb2xlLCB7IGV4cGlyZXM6IDEgfSk7XG4gIH1cblxuICBnZXRUd2l0dGVyVG9rZW4oKSB7XG4gICAgY29uc3Qgb2F1dGhUb2tlbiA9IGNvb2tpZS5nZXQoJ29hdXRoVG9rZW4nKTtcbiAgICBjb25zdCBvYXV0aFRva2VuU2VjcmV0ID0gY29va2llLmdldCgnb2F1dGhUb2tlblNlY3JldCcpO1xuICAgIGNvbnN0IHJvbGUgPSBjb29raWUuZ2V0KCdyb2xlJyk7XG4gICAgcmV0dXJuIHsgb2F1dGhUb2tlbiwgb2F1dGhUb2tlblNlY3JldCwgcm9sZSB9O1xuICB9XG5cbiAgcmVtb3ZlVG9rZW4oKTogdm9pZCB7XG4gICAgY29va2llLnJlbW92ZShUT0tFTik7XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChwYXNzd29yZDogc3RyaW5nLCBzb3VyY2U/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy9hdXRoL3VzZXJzL21lL3Bhc3N3b3JkJywgeyBwYXNzd29yZCwgc291cmNlIH0pO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZChkYXRhOiBJRm9yZ290KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvdXNlcnMvZm9yZ290JywgZGF0YSk7XG4gIH1cblxuICByZWdpc3RlcihkYXRhOiBJRmFuUmVnaXN0ZXIpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC91c2Vycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgcmVnaXN0ZXJQZXJmb3JtZXIoZG9jdW1lbnRzOiB7XG4gICAgZmlsZTogRmlsZTtcbiAgICBmaWVsZG5hbWU6IHN0cmluZztcbiAgfVtdLCBkYXRhOiBhbnksIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbikge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZCgnL2F1dGgvcGVyZm9ybWVycy9yZWdpc3RlcicsIGRvY3VtZW50cywge1xuICAgICAgb25Qcm9ncmVzcyxcbiAgICAgIGN1c3RvbURhdGE6IGRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHVzZXJTd2l0Y2hUb1BlcmZvcm1lcih1c2VySWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9hdXRoL3VzZXJzLyR7dXNlcklkfS9zd2l0Y2gtdG8tcGVyZm9ybWVyYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0gbmV3IEF1dGhTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJQmFubmVyU2VhcmNoIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgQmFubmVyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocXVlcnk6IElCYW5uZXJTZWFyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3NpdGUtcHJvbW8vc2VhcmNoJywgcXVlcnkgYXMgYW55KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJhbm5lclNlcnZpY2UgPSBuZXcgQmFubmVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgQmxvY2tTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGJsb2NrQ291bnRyaWVzKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXItYmxvY2tzL2NvdW50cmllcycsIHBheWxvYWQpO1xuICB9XG5cbiAgYmxvY2tVc2VyKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXItYmxvY2tzL3VzZXInLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVuQmxvY2tVc2VyKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlbChgL3BlcmZvcm1lci1ibG9ja3MvdXNlci8ke2lkfWApO1xuICB9XG5cbiAgZ2V0QmxvY2tMaXN0VXNlcnMocXVlcnk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyLWJsb2Nrcy91c2VycycsIHF1ZXJ5KSk7XG4gIH1cblxuICBjaGVja0NvdW50cnlCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9jb3VudHJ5LWJsb2NrL2NoZWNrJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJsb2NrU2VydmljZSA9IG5ldyBCbG9ja1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBnZXRDYXJ0QnlVc2VyKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgZXhpc3RDYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNhcnRfJHt1c2VySWR9YCkgYXMgYW55O1xuICAgIGV4aXN0Q2FydCA9IGV4aXN0Q2FydCAmJiBleGlzdENhcnQubGVuZ3RoID8gKEpTT04ucGFyc2UoZXhpc3RDYXJ0KSBhcyBJUHJvZHVjdCkgOiBbXTtcbiAgICByZXR1cm4gZXhpc3RDYXJ0O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0U2VydmljZSA9IG5ldyBDYXJ0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgQ29tbWVudFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKFxuICAgIHBheWxvYWQ6IGFueVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvY29tbWVudHMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZShpZDogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoYC9jb21tZW50cy8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9jb21tZW50cy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9jb21tZW50cy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb21tZW50U2VydmljZSA9IG5ldyBDb21tZW50U2VydmljZSgpO1xuIiwibGV0IGdsb2JhbENvbmZpZyA9IHt9IGFzIGFueTtcblxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbENvbmZpZyA9IChjb25maWc6IGFueSkgPT4ge1xuICBnbG9iYWxDb25maWcgPSBjb25maWc7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2xvYmFsQ29uZmlnID0gKCkgPT4gZ2xvYmFsQ29uZmlnO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgQ29va2llU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZXRDb29raWUoY25hbWUsIGN2YWx1ZSwgZXhUaW1lKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKGV4VGltZSAqIDYwICogMTAwMCkpO1xuICAgIGNvbnN0IGV4cGlyZXMgPSBgZXhwaXJlcz0ke2QudG9VVENTdHJpbmcoKX1gO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke2NuYW1lfT0ke2N2YWx1ZX07JHtleHBpcmVzfTtwYXRoPS9gO1xuICB9XG5cbiAgZ2V0Q29va2llKGNuYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGAke2NuYW1lfT1gO1xuICAgIGNvbnN0IGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcbiAgICBjb25zdCBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgYyA9IGNhW2ldO1xuICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgICAgfVxuICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb29raWVTZXJ2aWNlID0gbmV3IENvb2tpZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEVhcm5pbmdTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHBlcmZvcm1lclN0YXJ0cyhwYXJhbT86IGFueSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvZWFybmluZy9wZXJmb3JtZXIvc3RhdHMnLCBwYXJhbSkpO1xuICB9XG5cbiAgcGVyZm9ybWVyU2VhcmNoKHBhcmFtPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9lYXJuaW5nL3BlcmZvcm1lci9zZWFyY2gnLCBwYXJhbSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlYXJuaW5nU2VydmljZSA9IG5ldyBFYXJuaW5nU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgRmVlZFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9mZWVkcy9wZXJmb3JtZXJzJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL2ZlZWRzL3VzZXJzJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHVzZXJIb21lRmVlZHMocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL2ZlZWRzL3VzZXJzL2hvbWUtZmVlZHMnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9mZWVkcy9wZXJmb3JtZXJzLyR7aWR9YCk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL2ZlZWRzL3BlcmZvcm1lcnMvJHtpZH1gLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGZpbmRPbmUoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9mZWVkcy91c2Vycy8ke2lkfWAsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL2ZlZWRzL3BlcmZvcm1lcnMvJHtpZH1gLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2ZlZWRzL3BlcmZvcm1lcnMnLCBkYXRhKTtcbiAgfVxuXG4gIHVwbG9hZFBob3RvKGZpbGU6IEZpbGUsIHBheWxvYWQ6IGFueSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKFxuICAgICAgJy9mZWVkcy9wZXJmb3JtZXJzL3Bob3RvL3VwbG9hZCcsXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICBmaWxlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIGN1c3RvbURhdGE6IHBheWxvYWRcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgdXBsb2FkVGh1bWJuYWlsKGZpbGU6IEZpbGUsIHBheWxvYWQ6IGFueSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKFxuICAgICAgJy9mZWVkcy9wZXJmb3JtZXJzL3RodW1ibmFpbC91cGxvYWQnLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGRuYW1lOiAnZmlsZScsXG4gICAgICAgICAgZmlsZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAge1xuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBjdXN0b21EYXRhOiBwYXlsb2FkXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHVwbG9hZFZpZGVvKGZpbGU6IEZpbGUsIHBheWxvYWQ6IGFueSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKFxuICAgICAgJy9mZWVkcy9wZXJmb3JtZXJzL3ZpZGVvL3VwbG9hZCcsXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICBmaWxlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIGN1c3RvbURhdGE6IHBheWxvYWRcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgdXBsb2FkVGVhc2VyKGZpbGU6IEZpbGUsIHBheWxvYWQ6IGFueSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKFxuICAgICAgJy9mZWVkcy9wZXJmb3JtZXJzL3RlYXNlci91cGxvYWQnLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGRuYW1lOiAnZmlsZScsXG4gICAgICAgICAgZmlsZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAge1xuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBjdXN0b21EYXRhOiBwYXlsb2FkXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGFkZFBvbGwocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9mZWVkcy9wZXJmb3JtZXJzL3BvbGxzJywgcGF5bG9hZCk7XG4gIH1cblxuICB2b3RlUG9sbChwb2xsSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mZWVkcy91c2Vycy92b3RlLyR7cG9sbElkfWApO1xuICB9XG5cbiAgZ2V0Qm9va21hcmsocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcmVhY3Rpb25zL2ZlZWRzL2Jvb2ttYXJrJywgcGF5bG9hZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZWVkU2VydmljZSA9IG5ldyBGZWVkU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBGb2xsb3dTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2ZvbGxvd3MvJHtpZH1gKTtcbiAgfVxuXG4gIGRlbGV0ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvZm9sbG93cy8ke2lkfWApO1xuICB9XG5cbiAgZ2V0Rm9sbG93ZXJzKHJlcSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvZm9sbG93cy9mb2xsb3dlcnMnLCByZXEpKTtcbiAgfVxuXG4gIGdldEZvbGxvd2luZyhyZXEpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2ZvbGxvd3MvZm9sbG93aW5nJywgcmVxKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZvbGxvd1NlcnZpY2UgPSBuZXcgRm9sbG93U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBHYWxsZXJ5U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjcmVhdGUocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHNlYXJjaChwYXJhbT86IGFueSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzL3NlYXJjaCcsIHBhcmFtKSk7XG4gIH1cblxuICB1c2VyU2VhcmNoKHBhcmFtPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy91c2VyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzL3NlYXJjaCcsIHBhcmFtKSk7XG4gIH1cblxuICB1cGRhdGUoaWQ6IHN0cmluZywgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfS92aWV3YCk7XG4gIH1cblxuICB1c2VyVmlld0RldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IGFueSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldEJvb2ttYXJrcyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9yZWFjdGlvbnMvZ2FsbGVyaWVzL2Jvb2ttYXJrJywgcGF5bG9hZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5U2VydmljZSA9IG5ldyBHYWxsZXJ5U2VydmljZSgpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWVkLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wZXJmb3JtZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2R1Y3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3JlYWN0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYmFubmVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9lYXJuaW5nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYXJ0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdWJzY3JpcHRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL29yZGVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlYXJjaC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdmlkZW8uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2dhbGxlcnkuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Rva2VuLXBhY2thZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bob3RvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90b2tlbi10cmFuc2FjdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGF5b3V0LXJlcXVlc3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2Jsb2NrLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXBvcnQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2Nvb2tpZXMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoaXBwaW5nLWFkZHJlc3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZvbGxvdy5zZXJ2aWNlJztcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zJywgcXVlcnkpKTtcbiAgfVxuXG4gIHNlYXJjaENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBjcmVhdGVDb252ZXJzYXRpb24oZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9jb252ZXJzYXRpb25zJywgZGF0YSk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25EZXRhaWwoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvbWVzc2FnZXMvY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIHF1ZXJ5KSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIGNvdW50VG90YWxOb3RSZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL21lc3NhZ2VzL2NvdW50aW5nLW5vdC1yZWFkLW1lc3NhZ2VzJyk7XG4gIH1cblxuICByZWFkQWxsSW5Db252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZXNzYWdlcy9yZWFkLWFsbC8ke2NvbnZlcnNhdGlvbklkfWApO1xuICB9XG5cbiAgZ2V0TWVzc2FnZVVwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vbWVzc2FnZXMvcHJpdmF0ZS9maWxlYDtcbiAgfVxuXG4gIGdldENvbnZlcnNhdGlvbkJ5U3RyZWFtSWQoc3RyZWFtSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvc3RyZWFtLyR7c3RyZWFtSWR9YCk7XG4gIH1cblxuICBnZXRQdWJsaWNNZXNzYWdlcyhjb252ZXJzYXRpb25JZDogc3RyaW5nLCBxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvcHVibGljLyR7Y29udmVyc2F0aW9uSWR9YCwgcXVlcnkpKTtcbiAgfVxuXG4gIHNlbmRTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL3B1YmxpYy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBmaW5kUHVibGljQ29udmVyc2F0aW9uUGVyZm9ybWVyKHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zL3N0cmVhbS9wdWJsaWMvJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIGRlbGV0ZU1lc3NhZ2UoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9tZXNzYWdlcy8ke2lkfWApO1xuICB9XG5cbiAgZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH0vcmVtb3ZlLWFsbC1tZXNzYWdlYCk7XG4gIH1cblxuICB1cGRhdGVDb252ZXJzYXRpb25OYW1lKGNvbnZlcnNhdGlvbklkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfS91cGRhdGVgLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWVzc2FnZVNlcnZpY2UgPSBuZXcgTWVzc2FnZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBwZXJmb3JtZXJTZWFyY2gocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3NlYXJjaCcsIHBheWxvYWQpKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3VzZXJzL3NlYXJjaCcsIHBheWxvYWQpKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvb3JkZXJzLyR7aWR9YCk7XG4gIH1cblxuICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9vcmRlcnMvJHtpZH0vdXBkYXRlYCwgZGF0YSk7XG4gIH1cblxuICB1cGRhdGVEZWxpdmVyeUFkZHJlc3MoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9vcmRlcnMvJHtpZH0vdXBkYXRlL2RlbGl2ZXJ5LWFkZHJlc3NgLCBkYXRhKTtcbiAgfVxuXG4gIGdldERvd25sb2FkTGlua0RpZ2l0YWwocHJvZHVjdElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtwcm9kdWN0SWR9L2Rvd25sb2FkLWxpbmtgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JkZXJTZXJ2aWNlID0gbmV3IE9yZGVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUGF5bWVudFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc3Vic2NyaWJlUGVyZm9ybWVyKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wYXltZW50L3N1YnNjcmliZS9wZXJmb3JtZXJzJywgcGF5bG9hZCk7XG4gIH1cblxuICB1c2VyU2VhcmNoKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3RyYW5zYWN0aW9ucy91c2VyL3NlYXJjaCcsIHBheWxvYWQpKTtcbiAgfVxuXG4gIGFkZEZ1bmRzKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wYXltZW50L3dhbGxldC90b3AtdXAnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGFwcGx5Q291cG9uKGNvZGU6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9jb3Vwb25zLyR7Y29kZX0vYXBwbHktY291cG9uYCk7XG4gIH1cblxuICBjb25uZWN0U3RyaXBlQWNjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyaXBlL2FjY291bnRzJyk7XG4gIH1cblxuICBnZXRTdHJpcGVDYXJkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zdHJpcGUvdXNlci9jYXJkcycpO1xuICB9XG5cbiAgYWRkU3RyaXBlQ2FyZChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmlwZS91c2VyL2NhcmRzJywgcGF5bG9hZCk7XG4gIH1cblxuICByZW1vdmVTdHJpcGVDYXJkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvc3RyaXBlL3VzZXIvY2FyZHMvJHtpZH1gKTtcbiAgfVxuXG4gIHJldHJpZXZlU3RyaXBlQWNjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zdHJpcGUvYWNjb3VudHMvbWUnKTtcbiAgfVxuXG4gIGxvZ2luTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zdHJpcGUvYWNjb3VudHMvbWUvbG9naW4tbGluaycpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwYXltZW50U2VydmljZSA9IG5ldyBQYXltZW50U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBQYXlvdXRSZXF1ZXN0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjYWxjdWxhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BheW91dC1yZXF1ZXN0cy9wZXJmb3JtZXIvY2FsY3VsYXRlJyk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9wZXJmb3JtZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGNyZWF0ZShib2R5OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGF5b3V0LXJlcXVlc3RzL3BlcmZvcm1lcicsIGJvZHkpO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIGJvZHk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BheW91dC1yZXF1ZXN0cy9wZXJmb3JtZXIvJHtpZH1gLCBib2R5KTtcbiAgfVxuXG4gIGRldGFpbChcbiAgICBpZDogc3RyaW5nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGF5b3V0LXJlcXVlc3RzL3BlcmZvcm1lci8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBheW91dFJlcXVlc3RTZXJ2aWNlID0gbmV3IFBheW91dFJlcXVlc3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUGVyZm9ybWVyIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BlcmZvcm1lcnMvdXNlci9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgcmFuZG9tU2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVycy9zZWFyY2gvcmFuZG9tJywgcXVlcnkpKTtcbiAgfVxuXG4gIG1lKGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9wZXJmb3JtZXJzL21lJywgaGVhZGVycyk7XG4gIH1cblxuICBmaW5kT25lKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVycy8ke2lkfWAsIGhlYWRlcnMpO1xuICB9XG5cbiAgZ2V0QXZhdGFyVXBsb2FkVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL2F2YXRhci91cGxvYWRgO1xuICB9XG5cbiAgZ2V0Q292ZXJVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvY292ZXIvdXBsb2FkYDtcbiAgfVxuXG4gIGdldFZpZGVvVXBsb2FkVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL3dlbGNvbWUtdmlkZW8vdXBsb2FkYDtcbiAgfVxuXG4gIGdldERvY3VtZW50VXBsb2FkVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL2RvY3VtZW50cy91cGxvYWRgO1xuICB9XG5cbiAgdXBkYXRlTWUoaWQ6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGVyZm9ybWVycy8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0VG9wUGVyZm9ybWVyKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVycy90b3AnLCBxdWVyeSkpO1xuICB9XG5cbiAgdXBkYXRlQmFua2luZyhpZDogc3RyaW5nLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGVyZm9ybWVycy8ke2lkfS9iYW5raW5nLXNldHRpbmdzYCwgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXltZW50R2F0ZXdheShpZCwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BlcmZvcm1lcnMvJHtpZH0vcGF5bWVudC1nYXRld2F5LXNldHRpbmdzYCwgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRCb29rbWFya2VkKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3JlYWN0aW9ucy9wZXJmb3JtZXJzL2Jvb2ttYXJrJywgcGF5bG9hZCkpO1xuICB9XG5cbiAgdXBsb2FkRG9jdW1lbnRzKGRvY3VtZW50czoge1xuICAgIGZpbGU6IEZpbGU7XG4gICAgZmllbGRuYW1lOiBzdHJpbmc7XG4gIH1bXSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKCcvcGVyZm9ybWVycy9kb2N1bWVudHMvdXBsb2FkJywgZG9jdW1lbnRzLCB7XG4gICAgICBvblByb2dyZXNzXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBlcmZvcm1lclNlcnZpY2UgPSBuZXcgUGVyZm9ybWVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUGhvdG9TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaEJ5VXNlcihxdWVyeT86IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgY29uc3QgeyBwZXJmb3JtZXJJZCB9ID0gcXVlcnk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtwZXJmb3JtZXJJZH1gLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoQnlQZXJmb3JtZXIocXVlcnk/OiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShpZDogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtpZH1gLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHNldENvdmVyR2FsbGVyeShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy9zZXQtY292ZXIvJHtpZH1gKTtcbiAgfVxuXG4gIGRlbGV0ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7aWR9YCk7XG4gIH1cblxuICB1cGxvYWRJbWFnZXMoZmlsZTogRmlsZSwgcGF5bG9hZDogYW55LCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoXG4gICAgICAnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy91cGxvYWQnLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGRuYW1lOiAncGhvdG8nLFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHtcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzZWFyY2hQaG90b3NJbkdhbGxlcnkocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3NlYXJjaCcsIHBheWxvYWQpKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Bob3RvcycsIHBheWxvYWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGhvdG9TZXJ2aWNlID0gbmV3IFBob3RvU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVBvc3RTZWFyY2ggfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocXVlcnk6IElQb3N0U2VhcmNoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wb3N0cy9zZWFyY2gnLCBxdWVyeSBhcyBhbnkpKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wb3N0cy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwb3N0U2VydmljZSA9IG5ldyBQb3N0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlUHJvZHVjdChcbiAgICBmaWxlczogW3sgZmllbGRuYW1lOiBzdHJpbmc7IGZpbGU6IEZpbGUgfV0sXG4gICAgcGF5bG9hZDogYW55LFxuICAgIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvblxuICApIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cycsIGZpbGVzLCB7XG4gICAgICBvblByb2dyZXNzLFxuICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgZmlsZXM6IFt7IGZpZWxkbmFtZTogc3RyaW5nOyBmaWxlOiBGaWxlIH1dLFxuICAgIHBheWxvYWQ6IGFueSxcbiAgICBvblByb2dyZXNzPzogRnVuY3Rpb25cbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH1gLCBmaWxlcywge1xuICAgICAgb25Qcm9ncmVzcyxcbiAgICAgIGN1c3RvbURhdGE6IHBheWxvYWQsXG4gICAgICBtZXRob2Q6ICdQVVQnXG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzL3NlYXJjaCcsIHF1ZXJ5KVxuICAgICk7XG4gIH1cblxuICB1c2VyU2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy91c2VyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHVzZXJWaWV3KHByb2R1Y3RJZDogc3RyaW5nLCBoZWFkZXJzPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAsIGhlYWRlcnMpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzLyR7aWR9L3ZpZXdgKTtcbiAgfVxuXG4gIGRlbGV0ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldEJvb2ttYXJrZWQocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcmVhY3Rpb25zL3Byb2R1Y3RzL2Jvb2ttYXJrJywgcGF5bG9hZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0U2VydmljZSA9IG5ldyBQcm9kdWN0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUmVhY3Rpb25TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmVhY3Rpb25zJywgcGF5bG9hZCk7XG4gIH1cblxuICBkZWxldGUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKCcvcmVhY3Rpb25zJywgcGF5bG9hZCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3JlYWN0aW9ucy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWFjdGlvblNlcnZpY2UgPSBuZXcgUmVhY3Rpb25TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmVwb3J0cycsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXBvcnRTZXJ2aWNlID0gbmV3IFJlcG9ydFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoQnlLZXl3b3JkKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc2VhcmNoL2tleXdvcmRzJywgcGF5bG9hZCk7XG4gIH1cblxuICBsaXN0QnlLZXl3b3JkKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9zZWFyY2gvbGlzdC9rZXl3b3JkcycsIHF1ZXJ5KVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaFNlcnZpY2UgPSBuZXcgU2VhcmNoU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgcHJpdmF0ZSBfc2V0dGluZ3MgPSB7fSBhcyBhbnk7XG5cbiAgYXN5bmMgYWxsKGdyb3VwID0gJycsIGZvcmNlUmVsb2FkID0gZmFsc2UpIHtcbiAgICBjb25zdCBzZXR0aW5nR3JvdXAgPSBncm91cCB8fCAnYWxsJztcbiAgICBpZiAodGhpcy5fc2V0dGluZ3Nbc2V0dGluZ0dyb3VwXSAmJiAhZm9yY2VSZWxvYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc1tzZXR0aW5nR3JvdXBdO1xuICAgIH1cbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3NldHRpbmdzL3B1YmxpYycsIHsgZ3JvdXAgfSkpO1xuICAgIHRoaXMuX3NldHRpbmdzW3NldHRpbmdHcm91cF0gPSByZXNwO1xuICAgIHJldHVybiByZXNwO1xuICB9XG5cbiAgY29udGFjdChkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2NvbnRhY3QnLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0dGluZ1NlcnZpY2UgPSBuZXcgU2V0dGluZ1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKFxuICAgIHBheWxvYWQ6IGFueVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYWRkcmVzc2VzL2NyZWF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZChgL2FkZHJlc3Nlcy8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9hZGRyZXNzZXMvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvYWRkcmVzc2VzLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNoaXBwaW5nQWRkcmVzc1NlcnZpY2UgPSBuZXcgU2hpcHBpbmdBZGRyZXNzU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBTdHJlYW1TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHVwZGF0ZVN0cmVhbUluZm8ocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3N0cmVhbWluZy91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVN0cmVhbUR1cmF0aW9uKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy9zdHJlYW1pbmcvc2V0LWR1cmF0aW9uJywgcGF5bG9hZCk7XG4gIH1cblxuICBnb0xpdmUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHJlYW1pbmcvbGl2ZScsIGRhdGEpO1xuICB9XG5cbiAgZWRpdExpdmUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9zdHJlYW1pbmcvbGl2ZS8ke2lkfWAsIGRhdGEpO1xuICB9XG5cbiAgam9pblB1YmxpY0NoYXQocGVyZm9ybWVySWQ6IHN0cmluZywgaGVhZGVycz86IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9zdHJlYW1pbmcvam9pbi8ke3BlcmZvcm1lcklkfWAsIGhlYWRlcnMpO1xuICB9XG5cbiAgZmV0Y2hBZ29yYUFwcFRva2VuKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL2Fnb3JhL3Rva2VuJywgZGF0YSk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3N0cmVhbWluZy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0cmVhbVNlcnZpY2UgPSBuZXcgU3RyZWFtU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBTdWJzY3JpcHRpb25TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3N1YnNjcmlwdGlvbnMvcGVyZm9ybWVyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICB1c2VyU2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3Vic2NyaXB0aW9ucy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBjYW5jZWxTdWJzY3JpcHRpb24oaWQ6IHN0cmluZywgZ2F0ZXdheTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BheW1lbnQvJHtnYXRld2F5fS9jYW5jZWwtc3Vic2NyaXB0aW9uLyR7aWR9YCk7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBzdWJzY3JpcHRpb25TZXJ2aWNlID0gbmV3IFN1YnNjcmlwdGlvblNlcnZpY2UoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlblBhY2thZ2VTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gICAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGFja2FnZS90b2tlbi9zZWFyY2gnLCBxdWVyeSBhcyBhbnkpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlblBhY2thZ2VTZXJ2aWNlID0gbmV3IFRva2VuUGFja2FnZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRva2VuVHJhbnNjdGlvblNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VuZFRpcChwZXJmb3JtZXJJZDogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvd2FsbGV0L2NoYXJnZXMvdGlwLyR7cGVyZm9ybWVySWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBwdXJjaGFzZUZlZWQoaWQsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvd2FsbGV0L2NoYXJnZXMvZmVlZC8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgcHVyY2hhc2VQcm9kdWN0KGlkLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3dhbGxldC9jaGFyZ2VzL3Byb2R1Y3QvJHtpZH1gLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHB1cmNoYXNlVmlkZW8oaWQsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvd2FsbGV0L2NoYXJnZXMvdmlkZW8vJHtpZH1gLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHB1cmNoYXNlR2FsbGVyeShpZCwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC93YWxsZXQvY2hhcmdlcy9nYWxsZXJ5LyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBwdXJjaGFzZU1lc3NhZ2UoaWQsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvd2FsbGV0L2NoYXJnZXMvbWVzc2FnZS8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgcHVyY2hhc2VTdHJlYW0oaWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvd2FsbGV0L2NoYXJnZXMvc3RyZWFtLyR7aWR9YCk7XG4gIH1cblxuICB1c2VyU2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvd2FsbGV0L2NoYXJnZXMvdXNlci9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlblRyYW5zY3Rpb25TZXJ2aWNlID0gbmV3IFRva2VuVHJhbnNjdGlvblNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIG1lKGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy91c2Vycy9tZScsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlTWUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvdXNlcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldEF2YXRhclVwbG9hZFVybCh1c2VySWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vdXNlcnMvJHt1c2VySWR9L2F2YXRhci91cGxvYWRgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vdXNlcnMvYXZhdGFyL3VwbG9hZGA7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy91c2Vycy9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXJzL3ZpZXcvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElDb3VudHJ5LCBJTGFuZ2d1Z2VzLCBJUGhvbmVDb2RlcyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHByaXZhdGUgX2NvdW50cmllcyA9IFtdIGFzIGFueTtcblxuICBhc3luYyBjb3VudHJpZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElDb3VudHJ5Pj4ge1xuICAgIGlmICh0aGlzLl9jb3VudHJpZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY291bnRyaWVzO1xuICAgIH1cbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZXQoJy9jb3VudHJpZXMvbGlzdCcpO1xuICAgIHRoaXMuX2NvdW50cmllcyA9IHJlc3A7XG4gICAgcmV0dXJuIHJlc3A7XG4gIH1cblxuICBhc3luYyBzdGF0ZXNMaXN0KGNvdW50cnlDb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdGF0ZXMvJHtjb3VudHJ5Q29kZX1gKTtcbiAgfVxuXG4gIGFzeW5jIGNpdGllc0xpc3QoY291bnRyeUNvZGU6IHN0cmluZywgc3RhdGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NpdGllcy8ke2NvdW50cnlDb2RlfS8ke3N0YXRlfWApO1xuICB9XG5cbiAgbGFuZ3VhZ2VzTGlzdCgpOiBQcm9taXNlPElSZXNwb25zZTxJTGFuZ2d1Z2VzPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2xhbmd1YWdlcy9saXN0Jyk7XG4gIH1cblxuICBwaG9uZUNvZGVzTGlzdCgpOiBQcm9taXNlPElSZXNwb25zZTxJUGhvbmVDb2Rlcz4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9waG9uZS1jb2Rlcy9saXN0Jyk7XG4gIH1cblxuICBib2R5SW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy91c2VyLWFkZGl0aW9uYWwnKTtcbiAgfVxuXG4gIHZlcmlmeVJlY2FwdGNoYSh0b2tlbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3JlLWNhcHRjaGEvdmVyaWZ5JywgeyB0b2tlbiB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXRpbHNTZXJ2aWNlID0gbmV3IFV0aWxzU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgVmlkZW9TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL3NlYXJjaCcsIHF1ZXJ5KVxuICAgICk7XG4gIH1cblxuICB1c2VyU2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL3NlYXJjaCcsIHF1ZXJ5KVxuICAgICk7XG4gIH1cblxuICBkZWxldGUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfWApO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgZmluZE9uZShpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH1gLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwZGF0ZShpZDogc3RyaW5nLCBmaWxlczogW3sgZmllbGRuYW1lOiBzdHJpbmc7IGZpbGU6IEZpbGUgfV0sIHBheWxvYWQ6IGFueSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL2VkaXQvJHtpZH1gLCBmaWxlcywge1xuICAgICAgb25Qcm9ncmVzcyxcbiAgICAgIGN1c3RvbURhdGE6IHBheWxvYWQsXG4gICAgICBtZXRob2Q6ICdQVVQnXG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVGaWxlKGlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy9yZW1vdmUtZmlsZS8ke2lkfWAsIHsgdHlwZSB9KTtcbiAgfVxuXG4gIHVwbG9hZFZpZGVvKFxuICAgIGZpbGVzOiBbeyBmaWVsZG5hbWU6IHN0cmluZzsgZmlsZTogRmlsZSB9XSxcbiAgICBwYXlsb2FkOiBhbnksXG4gICAgb25Qcm9ncmVzcz86IEZ1bmN0aW9uXG4gICkge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy91cGxvYWQnLCBmaWxlcywge1xuICAgICAgb25Qcm9ncmVzcyxcbiAgICAgIGN1c3RvbURhdGE6IHBheWxvYWRcbiAgICB9KTtcbiAgfVxuXG4gIGdldEJvb2ttYXJrcyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9yZWFjdGlvbnMvdmlkZW9zL2Jvb2ttYXJrJywgcGF5bG9hZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB2aWRlb1NlcnZpY2UgPSBuZXcgVmlkZW9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBJRXZlbnRQcm9wcyB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIGhhbmRsZXI6IEZ1bmN0aW9uO1xufVxuXG5jbGFzcyBFdmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQ8SUV2ZW50UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGV2ZW50LCBoYW5kbGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuY29udGV4dDtcblxuICAgIGlmICghc29ja2V0KSB7XG4gICAgICB3YXJuaW5nKCdTb2NrZXQgSU8gY29ubmVjdGlvbiBoYXMgbm90IGJlZW4gZXN0YWJsaXNoZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc29ja2V0Lm9uKGV2ZW50LCBoYW5kbGVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZXZlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc29ja2V0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgIHdhcm5pbmcoJ1NvY2tldCBJTyBjb25uZWN0aW9uIGhhcyBub3QgYmVlbiBlc3RhYmxpc2hlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzb2NrZXQub2ZmKGV2ZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuRXZlbnQuY29udGV4dFR5cGUgPSBTb2NrZXRDb250ZXh0O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU29ja2V0SU8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJ0BzZXJ2aWNlcy9jb25maWcnO1xuaW1wb3J0IHsgd2FybmluZywgZGVidWcgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICcuL1NvY2tldENvbnRleHQnO1xuXG5pbnRlcmZhY2UgSVNvY2tldFByb3BzIHtcbiAgdXJpPzogc3RyaW5nO1xuICBjaGlsZHJlbjogYW55O1xuICBsb2dnZWRJbjogYm9vbGVhbjtcbn1cblxuY2xhc3MgU29ja2V0IGV4dGVuZHMgQ29tcG9uZW50PElTb2NrZXRQcm9wcz4ge1xuICBzb2NrZXQ7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBhbnkpIHtcbiAgICBjb25zdCB7IGxvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChuZXh0UHJvcHMubG9nZ2VkSW4gIT09IGxvZ2dlZEluKSB7XG4gICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgaWYgKCF0aGlzLnNvY2tldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuID0gYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICByZXR1cm4gdGhpcy5zb2NrZXQuZW1pdCgnYXV0aC9sb2dpbicsIHtcbiAgICAgIHRva2VuXG4gICAgfSk7XG4gIH1cblxuICBjb25uZWN0KCkge1xuICAgIGNvbnN0IHRva2VuID0gYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICBpZiAoIXByb2Nlc3MuYnJvd3NlciB8fCAhdG9rZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgY29uc3QgeyB1cmkgPSBjb25maWcuTkVYVF9QVUJMSUNfU09DS0VUX0VORFBPSU5UIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCcsICdwb2xsaW5nJywgJ2xvbmctcG9sbGluZyddLFxuICAgICAgcXVlcnk6IHRva2VuID8gYHRva2VuPSR7dG9rZW59YCA6ICcnXG4gICAgfTtcbiAgICB0aGlzLnNvY2tldCA9IFNvY2tldElPKHVyaSwgdGhpcy5tZXJnZU9wdGlvbnMob3B0aW9ucykpO1xuXG4gICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2luaXRpYWxpemVkJztcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2Nvbm5lY3RlZCc7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgfVxuICAgICAgZGVidWcoJ2Nvbm5lY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZGlzY29ubmVjdGVkJztcbiAgICAgIGRlYnVnKCdkaXNjb25uZWN0Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgIHdhcm5pbmcoJ2Vycm9yJywgZXJyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2Nvbm5lY3RlZCc7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgfVxuICAgICAgZGVidWcoJ3JlY29ubmVjdCcsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdF9hdHRlbXB0JywgKCkgPT4ge1xuICAgICAgZGVidWcoJ3JlY29ubmVjdF9hdHRlbXB0Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0aW5nJywgKCkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ3JlY29ubmVjdGluZyc7XG4gICAgICBkZWJ1ZygncmVjb25uZWN0aW5nJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0X2ZhaWxlZCcsIChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICB3YXJuaW5nKCdyZWNvbm5lY3RfZmFpbGVkJywgZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWVyZ2VPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcmVjb25uZWN0aW9uOiB0cnVlLFxuICAgICAgcmVjb25uZWN0aW9uQXR0ZW1wdHM6IEluZmluaXR5LFxuICAgICAgcmVjb25uZWN0aW9uRGVsYXk6IDEgKiAxMDAwLFxuICAgICAgcmVjb25uZWN0aW9uRGVsYXlNYXg6IDEwICogMTAwMCxcbiAgICAgIGF1dG9Db25uZWN0OiB0cnVlLFxuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnLCAncG9sbGluZycsICdsb25nLXBvbGxpbmcnXSxcbiAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhpcy5zb2NrZXR9PlxuICAgICAgICB7Q2hpbGRyZW4ub25seShjaGlsZHJlbil9XG4gICAgICA8L1NvY2tldENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZXMgPSAoc3RhdGU6IGFueSkgPT4gKHtcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlcywgbnVsbCkoU29ja2V0KTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBTb2NrZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KCdzb2NrZXQnKTtcbiIsImltcG9ydCBTb2NrZXQgZnJvbSAnLi9Tb2NrZXQnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5cbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgaWYgKHdpbmRvdykgd2luZG93LlJlYWN0U29ja2V0SU8gPSB7IFNvY2tldCwgRXZlbnQsIFNvY2tldENvbnRleHQgfTtcbn1cblxuZXhwb3J0IHsgU29ja2V0LCBFdmVudCwgU29ja2V0Q29udGV4dCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXNwcmVhZCAqL1xuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAvLyBkZWJ1ZyBvbiBkZXZlbG9wbWVudCBhbmQgc3RhZ2luZy5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHJldHVybjtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYXJncy5qb2luKCcgJykpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn07XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIC8vIGRlYnVnIG9uIGRldmVsb3BtZW50IGFuZCBzdGFnaW5nLlxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykgcmV0dXJuO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGgtdG8tcmVnZXhwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9