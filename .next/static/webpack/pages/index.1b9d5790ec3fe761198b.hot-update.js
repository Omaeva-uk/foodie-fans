webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_common_base_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx");
/* harmony import */ var _auth_index_less__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/index.less */ "./pages/auth/index.less");
/* harmony import */ var _auth_index_less__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_auth_index_less__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_auth_google_login_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @components/auth/google-login-button */ "./src/components/auth/google-login-button.tsx");










var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable camelcase */















var Login = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _PureComponent);

  var _super = _createSuper(Login);

  function Login() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "recaptchaSuccess", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      loginAs: 'user',
      isLoading: true
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.redirectLogin();
                this.callbackTwitter();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "handleLogin",
    value: function () {
      var _handleLogin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
        var handleLogin;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                handleLogin = this.props.login;
                return _context2.abrupt("return", handleLogin(values));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleLogin(_x) {
        return _handleLogin.apply(this, arguments);
      }

      return handleLogin;
    }()
  }, {
    key: "handleVerifyCapcha",
    value: function () {
      var _handleVerifyCapcha = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(resp) {
        var _resp$data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (resp !== null && resp !== void 0 && (_resp$data = resp.data) !== null && _resp$data !== void 0 && _resp$data.success) {
                  this.recaptchaSuccess = true;
                } else {
                  this.recaptchaSuccess = false;
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleVerifyCapcha(_x2) {
        return _handleVerifyCapcha.apply(this, arguments);
      }

      return handleVerifyCapcha;
    }()
  }, {
    key: "onGoogleLogin",
    value: function () {
      var _onGoogleLogin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(resp) {
        var handleLogin, loginAs, payload, response, error;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (resp !== null && resp !== void 0 && resp.credential) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                handleLogin = this.props.loginSocial;
                loginAs = this.state.loginAs;
                payload = {
                  tokenId: resp.credential,
                  role: loginAs
                };
                _context4.prev = 5;
                _context4.next = 8;
                return this.setState({
                  isLoading: true
                });

              case 8:
                _context4.next = 10;
                return _services_index__WEBPACK_IMPORTED_MODULE_15__["authService"].loginGoogle(payload);

              case 10:
                _context4.next = 12;
                return _context4.sent.data;

              case 12:
                response = _context4.sent;
                response.token && handleLogin({
                  token: response.token
                });
                _context4.next = 22;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](5);
                _context4.next = 20;
                return _context4.t0;

              case 20:
                error = _context4.sent;
                antd__WEBPACK_IMPORTED_MODULE_10__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Google authentication login fail');

              case 22:
                _context4.prev = 22;
                this.setState({
                  isLoading: false
                });
                return _context4.finish(22);

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 16, 22, 25]]);
      }));

      function onGoogleLogin(_x3) {
        return _onGoogleLogin.apply(this, arguments);
      }

      return onGoogleLogin;
    }()
  }, {
    key: "redirectLogin",
    value: function () {
      var _redirectLogin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this$props, handleLogin, handleUpdateUser, token, user;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this$props = this.props, handleLogin = _this$props.loginSuccess, handleUpdateUser = _this$props.updateCurrentUser;
                token = _services_index__WEBPACK_IMPORTED_MODULE_15__["authService"].getToken();

                if (!(!token || token === 'null')) {
                  _context5.next = 5;
                  break;
                }

                this.setState({
                  isLoading: false
                });
                return _context5.abrupt("return");

              case 5:
                _services_index__WEBPACK_IMPORTED_MODULE_15__["authService"].setToken(token);
                _context5.prev = 6;
                _context5.next = 9;
                return this.setState({
                  isLoading: true
                });

              case 9:
                _context5.next = 11;
                return _services_index__WEBPACK_IMPORTED_MODULE_15__["userService"].me({
                  Authorization: token
                });

              case 11:
                user = _context5.sent;

                if (!(!user || !user.data || !user.data._id)) {
                  _context5.next = 14;
                  break;
                }

                return _context5.abrupt("return");

              case 14:
                handleLogin();
                handleUpdateUser(user.data);
                user.data.isPerformer ? next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push({
                  pathname: '/model/profile',
                  query: {
                    username: user.data.username || user.data._id
                  }
                }, "/".concat(user.data.username || user.data._id)) : next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push('/home');
                _context5.next = 22;
                break;

              case 19:
                _context5.prev = 19;
                _context5.t0 = _context5["catch"](6);
                this.setState({
                  isLoading: false
                });

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[6, 19]]);
      }));

      function redirectLogin() {
        return _redirectLogin.apply(this, arguments);
      }

      return redirectLogin;
    }()
  }, {
    key: "callbackTwitter",
    value: function () {
      var _callbackTwitter = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this$props2, oauth_verifier, handleLogin, twitterInfo, auth, error;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this$props2 = this.props, oauth_verifier = _this$props2.oauth_verifier, handleLogin = _this$props2.loginSocial;
                twitterInfo = _services_index__WEBPACK_IMPORTED_MODULE_15__["authService"].getTwitterToken();

                if (!(!oauth_verifier || !twitterInfo.oauthToken || !twitterInfo.oauthTokenSecret)) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt("return");

              case 4:
                _context6.prev = 4;
                _context6.next = 7;
                return _services_index__WEBPACK_IMPORTED_MODULE_15__["authService"].callbackLoginTwitter({
                  oauth_verifier: oauth_verifier,
                  oauthToken: twitterInfo.oauthToken,
                  oauthTokenSecret: twitterInfo.oauthTokenSecret,
                  role: twitterInfo.role || 'user'
                });

              case 7:
                auth = _context6.sent;
                auth.data && auth.data.token && handleLogin({
                  token: auth.data.token
                });
                _context6.next = 17;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](4);
                _context6.next = 15;
                return _context6.t0;

              case 15:
                error = _context6.sent;
                antd__WEBPACK_IMPORTED_MODULE_10__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Twitter authentication login fail');

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[4, 11]]);
      }));

      function callbackTwitter() {
        return _callbackTwitter.apply(this, arguments);
      }

      return callbackTwitter;
    }()
  }, {
    key: "loginTwitter",
    value: function () {
      var _loginTwitter = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var loginAs, resp, error;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                loginAs = this.state.loginAs;
                _context7.prev = 1;
                _context7.next = 4;
                return this.setState({
                  isLoading: true
                });

              case 4:
                _context7.next = 6;
                return _services_index__WEBPACK_IMPORTED_MODULE_15__["authService"].loginTwitter();

              case 6:
                _context7.next = 8;
                return _context7.sent.data;

              case 8:
                resp = _context7.sent;

                if (resp && resp.url) {
                  _services_index__WEBPACK_IMPORTED_MODULE_15__["authService"].setTwitterToken({
                    oauthToken: resp.oauthToken,
                    oauthTokenSecret: resp.oauthTokenSecret
                  }, loginAs);
                  window.location.href = resp.url;
                }

                _context7.next = 18;
                break;

              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](1);
                _context7.next = 16;
                return _context7.t0;

              case 16:
                error = _context7.sent;
                antd__WEBPACK_IMPORTED_MODULE_10__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Twitter authentication login fail');

              case 18:
                _context7.prev = 18;
                this.setState({
                  isLoading: false
                });
                return _context7.finish(18);

              case 21:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 12, 18, 21]]);
      }));

      function loginTwitter() {
        return _loginTwitter.apply(this, arguments);
      }

      return loginTwitter;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          ui = _this$props3.ui,
          settings = _this$props3.settings,
          loginAuth = _this$props3.loginAuth;
      var isLoading = this.state.isLoading;
      var Title = antd__WEBPACK_IMPORTED_MODULE_10__["Typography"].Title;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Layout"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, __jsx("title", null, ui && ui.siteName), __jsx("meta", {
        name: "keywords",
        content: settings && settings.metaKeywords
      }), __jsx("meta", {
        name: "description",
        content: settings && settings.metaDescription
      }), __jsx("meta", {
        property: "og:type",
        content: "website"
      }), __jsx("meta", {
        property: "og:title",
        content: ui && ui.siteName
      }), __jsx("meta", {
        property: "og:image",
        content: ui && ui.logo
      }), __jsx("meta", {
        property: "og:description",
        content: settings && settings.metaDescription
      }), __jsx("meta", {
        name: "twitter:card",
        content: "summary"
      }), __jsx("meta", {
        name: "twitter:title",
        content: ui && ui.siteName
      }), __jsx("meta", {
        name: "twitter:image",
        content: ui && ui.logo
      }), __jsx("meta", {
        name: "twitter:description",
        content: settings && settings.metaDescription
      })), __jsx("div", {
        className: "main-container ",
        style: {
          maxWidth: "100%",
          padding: "0"
        }
      }, __jsx("div", {
        style: {
          height: "100vh"
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        style: {
          height: "100vh"
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        span: 12,
        style: {
          padding: "0"
        }
      }, __jsx("div", {
        className: "new-login-left-wrapper"
      }, __jsx("div", {
        className: "new-logo"
      }, __jsx("img", {
        src: "../../static/assets/logo-white.png",
        alt: "Foodie fans Logo"
      })), __jsx("div", null, __jsx("img", {
        src: "../../static/assets/login-page/left-main-img.png",
        alt: "Foodiefans login page"
      })), __jsx("div", {
        className: "new-login-left-content"
      }, __jsx("h1", null, "Your culinary adventure starts here."), __jsx("p", null, "Sign in and let\u2019s cook something extraordinary together!")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        span: 12,
        style: {
          padding: "0"
        }
      }, __jsx("div", {
        style: {
          backgroundColor: "blue",
          height: "100%"
        }
      }, "new")))), __jsx("div", {
        className: "login-box"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12
      }, __jsx("div", {
        className: "login-content left",
        style: ui.loginPlaceholderImage ? {
          backgroundImage: "url(".concat(ui.loginPlaceholderImage, ")")
        } : null
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12
      }, __jsx("div", {
        className: "login-content right"
      }, __jsx("div", {
        className: "login-logo"
      }, __jsx("a", {
        href: "/"
      }, ui.logo ? __jsx("img", {
        alt: "logo",
        src: ui.logo,
        height: "80px"
      }) : ui.siteName)), __jsx("p", {
        className: "text-center"
      }, __jsx("small", null, "Sign up to make money and interact with your fans!")), __jsx("div", {
        className: "social-login"
      }, __jsx("button", {
        type: "button",
        disabled: !settings.twitterClientId,
        onClick: function onClick() {
          return _this2.loginTwitter();
        },
        className: "twitter-button"
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_18__["TwitterOutlined"], null), ' ', "LOG IN / SIGN UP WITH TWITTER"), __jsx(_components_auth_google_login_button__WEBPACK_IMPORTED_MODULE_21__["default"], {
        clientId: settings.googleClientId,
        onSuccess: this.onGoogleLogin.bind(this),
        onFailure: this.onGoogleLogin.bind(this)
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Divider"], null, "Or"), __jsx("div", {
        className: "login-form"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        name: "normal_login",
        className: "login-form",
        initialValues: {
          remember: true
        },
        onFinish: this.handleLogin.bind(this)
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Form"].Item, {
        name: "username",
        validateTrigger: ['onChange', 'onBlur'],
        rules: [{
          required: true,
          message: 'Email or Username is missing'
        }]
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        disabled: loginAuth.requesting || isLoading,
        placeholder: "Email or Username"
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Form"].Item, {
        name: "password",
        validateTrigger: ['onChange', 'onBlur'],
        rules: [{
          required: true,
          message: 'Please enter your password!'
        }]
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Input"].Password, {
        disabled: loginAuth.requesting || isLoading,
        placeholder: "Password"
      })), __jsx("p", {
        style: {
          padding: '0 20px'
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
        href: {
          pathname: '/auth/forgot-password'
        }
      }, __jsx("a", {
        className: "sub-text"
      }, "Forgot password?"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Form"].Item, {
        style: {
          textAlign: 'center'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        disabled: loginAuth.requesting || isLoading,
        loading: loginAuth.requesting || isLoading,
        type: "primary",
        htmlType: "submit",
        className: "login-form-button"
      }, "LOG IN"), __jsx("p", {
        style: {
          fontSize: 11
        }
      }, "Visit", ' ', __jsx("a", {
        href: "/page/help"
      }, "Help Center"), ' ', "for any help if you are not able to login with your existing", ' ', (ui === null || ui === void 0 ? void 0 : ui.siteName) || 'Fanso', ' ', "account"), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
        style: {
          margin: '15px 0'
        }
      }), __jsx("p", {
        style: {
          marginBottom: 5
        }
      }, "Don't have an account yet?"), __jsx("p", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
        href: "/auth/register"
      }, __jsx("a", null, "Sign up for", ' ', ui === null || ui === void 0 ? void 0 : ui.siteName))))))))))), isLoading && __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_19__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(_ref) {
        var ctx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                ctx = _ref.ctx;
                return _context8.abrupt("return", _objectSpread({}, ctx.query));

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getInitialProps(_x4) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Login, "authenticate", false);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Login, "layout", 'blank');

var mapStatesToProps = function mapStatesToProps(state) {
  return {
    ui: _objectSpread({}, state.ui),
    settings: _objectSpread({}, state.settings),
    loginAuth: _objectSpread({}, state.auth.loginAuth)
  };
};

var mapDispatchToProps = {
  login: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_13__["login"],
  loginSocial: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_13__["loginSocial"],
  loginSuccess: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_13__["loginSuccess"],
  updateCurrentUser: _redux_user_actions__WEBPACK_IMPORTED_MODULE_14__["updateCurrentUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStatesToProps, mapDispatchToProps)(Login));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luIiwibG9naW5BcyIsImlzTG9hZGluZyIsInJlZGlyZWN0TG9naW4iLCJjYWxsYmFja1R3aXR0ZXIiLCJ2YWx1ZXMiLCJoYW5kbGVMb2dpbiIsInByb3BzIiwibG9naW4iLCJyZXNwIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZWNhcHRjaGFTdWNjZXNzIiwiY3JlZGVudGlhbCIsImxvZ2luU29jaWFsIiwic3RhdGUiLCJwYXlsb2FkIiwidG9rZW5JZCIsInJvbGUiLCJzZXRTdGF0ZSIsImF1dGhTZXJ2aWNlIiwibG9naW5Hb29nbGUiLCJyZXNwb25zZSIsInRva2VuIiwiZXJyb3IiLCJtZXNzYWdlIiwibG9naW5TdWNjZXNzIiwiaGFuZGxlVXBkYXRlVXNlciIsInVwZGF0ZUN1cnJlbnRVc2VyIiwiZ2V0VG9rZW4iLCJzZXRUb2tlbiIsInVzZXJTZXJ2aWNlIiwibWUiLCJBdXRob3JpemF0aW9uIiwidXNlciIsIl9pZCIsImlzUGVyZm9ybWVyIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJ1c2VybmFtZSIsIm9hdXRoX3ZlcmlmaWVyIiwidHdpdHRlckluZm8iLCJnZXRUd2l0dGVyVG9rZW4iLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsImNhbGxiYWNrTG9naW5Ud2l0dGVyIiwiYXV0aCIsImxvZ2luVHdpdHRlciIsInVybCIsInNldFR3aXR0ZXJUb2tlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVpIiwic2V0dGluZ3MiLCJsb2dpbkF1dGgiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJzaXRlTmFtZSIsIm1ldGFLZXl3b3JkcyIsIm1ldGFEZXNjcmlwdGlvbiIsImxvZ28iLCJtYXhXaWR0aCIsInBhZGRpbmciLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dpblBsYWNlaG9sZGVySW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0d2l0dGVyQ2xpZW50SWQiLCJnb29nbGVDbGllbnRJZCIsIm9uR29vZ2xlTG9naW4iLCJiaW5kIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsInJlcXVlc3RpbmciLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsImN0eCIsIlB1cmVDb21wb25lbnQiLCJtYXBTdGF0ZXNUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBaUJNQSxLOzs7Ozs7Ozs7Ozs7Ozs7OzJOQUtlLEs7O2dOQVFYO0FBQ05DLGFBQU8sRUFBRSxNQURIO0FBRU5DLGVBQVMsRUFBRTtBQUZMLEs7Ozs7Ozs7O2dOQUtSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxxQkFBS0MsYUFBTDtBQUNBLHFCQUFLQyxlQUFMOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzBNQUtBLGtCQUFrQkMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2lCQywyQkFEakIsR0FDaUMsS0FBS0MsS0FEdEMsQ0FDVUMsS0FEVjtBQUFBLGtEQUVTRixXQUFXLENBQUNELE1BQUQsQ0FGcEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7aU5BS0Esa0JBQXlCSSxJQUF6QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Usb0JBQUlBLElBQUosYUFBSUEsSUFBSiw2QkFBSUEsSUFBSSxDQUFFQyxJQUFWLHVDQUFJLFdBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCLHVCQUFLQyxnQkFBTCxHQUF3QixJQUF4QjtBQUNELGlCQUZELE1BRU87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QUZYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7O0VBUGtCMEMsbUQ7OzBGQUFkbEYsSyxrQkFDa0IsSzs7MEZBRGxCQSxLLFlBR1ksTzs7QUFnUmxCLElBQU1tRixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNwRSxLQUFEO0FBQUEsU0FBaUI7QUFDeEN3QyxNQUFFLG9CQUFPeEMsS0FBSyxDQUFDd0MsRUFBYixDQURzQztBQUV4Q0MsWUFBUSxvQkFBT3pDLEtBQUssQ0FBQ3lDLFFBQWIsQ0FGZ0M7QUFHeENDLGFBQVMsb0JBQU8xQyxLQUFLLENBQUNpQyxJQUFOLENBQVdTLFNBQWxCO0FBSCtCLEdBQWpCO0FBQUEsQ0FBekI7O0FBTUEsSUFBTTJCLGtCQUFrQixHQUFHO0FBQ3pCNUUsT0FBSyxFQUFMQSwwREFEeUI7QUFFekJNLGFBQVcsRUFBWEEsZ0VBRnlCO0FBR3pCWSxjQUFZLEVBQVpBLGlFQUh5QjtBQUl6QkUsbUJBQWlCLEVBQWpCQSxzRUFBaUJBO0FBSlEsQ0FBM0I7QUFNZXlELDJIQUFPLENBQUNGLGdCQUFELEVBQW1CQyxrQkFBbkIsQ0FBUCxDQUE4Q3BGLEtBQTlDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWI5ZDU3OTBlYzNmZTc2MTE5OGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHtcbiAgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgUm93LCBDb2wsIERpdmlkZXIsIExheW91dCwgbWVzc2FnZSwgR3JpZFxufSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGxvZ2luLCBsb2dpblN1Y2Nlc3MsIGxvZ2luU29jaWFsIH0gZnJvbSAnQHJlZHV4L2F1dGgvYWN0aW9ucyc7XG5pbXBvcnQgeyB1cGRhdGVDdXJyZW50VXNlciB9IGZyb20gJ0ByZWR1eC91c2VyL2FjdGlvbnMnO1xuaW1wb3J0IHsgYXV0aFNlcnZpY2UsIHVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNlcnZpY2VzL2luZGV4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBJU2V0dGluZ3MsIElVSUNvbmZpZyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgVHdpdHRlck91dGxpbmVkLCBHb29nbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL2Jhc2UvbG9hZGVyJztcbmltcG9ydCAnLi9hdXRoL2luZGV4Lmxlc3MnO1xuaW1wb3J0IEdvb2dsZUxvZ2luQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL2F1dGgvZ29vZ2xlLWxvZ2luLWJ1dHRvbic7XG5pbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gJ2FudGQnO1xuXG5cbmltcG9ydCB7IHVybCB9IGZyb20gJ2luc3BlY3Rvcic7XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGxvZ2luQXV0aDogYW55O1xuICBsb2dpbjogRnVuY3Rpb247XG4gIHVwZGF0ZUN1cnJlbnRVc2VyOiBGdW5jdGlvbjtcbiAgbG9naW5TdWNjZXNzOiBGdW5jdGlvbjtcbiAgbG9naW5Tb2NpYWw6IEZ1bmN0aW9uO1xuICB1aTogSVVJQ29uZmlnO1xuICBzZXR0aW5nczogSVNldHRpbmdzO1xuICBvYXV0aF92ZXJpZmllcjogc3RyaW5nO1xufVxuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFB1cmVDb21wb25lbnQ8SVByb3BzPiB7XG4gIHN0YXRpYyBhdXRoZW50aWNhdGUgPSBmYWxzZTtcblxuICBzdGF0aWMgbGF5b3V0ID0gJ2JsYW5rJztcblxuICByZWNhcHRjaGFTdWNjZXNzID0gZmFsc2U7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IGN0eCB9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmN0eC5xdWVyeVxuICAgIH07XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBsb2dpbkFzOiAndXNlcicsXG4gICAgaXNMb2FkaW5nOiB0cnVlXG4gIH07XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWRpcmVjdExvZ2luKCk7XG4gICAgdGhpcy5jYWxsYmFja1R3aXR0ZXIoKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUxvZ2luKHZhbHVlczogYW55KSB7XG4gICAgY29uc3QgeyBsb2dpbjogaGFuZGxlTG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGhhbmRsZUxvZ2luKHZhbHVlcyk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVWZXJpZnlDYXBjaGEocmVzcDogYW55KSB7XG4gICAgaWYgKHJlc3A/LmRhdGE/LnN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMucmVjYXB0Y2hhU3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjYXB0Y2hhU3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uR29vZ2xlTG9naW4ocmVzcDogYW55KSB7XG4gICAgaWYgKCFyZXNwPy5jcmVkZW50aWFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbG9naW5Tb2NpYWw6IGhhbmRsZUxvZ2luIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbG9naW5BcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwYXlsb2FkID0geyB0b2tlbklkOiByZXNwLmNyZWRlbnRpYWwsIHJvbGU6IGxvZ2luQXMgfTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKGF3YWl0IGF1dGhTZXJ2aWNlLmxvZ2luR29vZ2xlKHBheWxvYWQpKS5kYXRhO1xuICAgICAgcmVzcG9uc2UudG9rZW4gJiYgaGFuZGxlTG9naW4oeyB0b2tlbjogcmVzcG9uc2UudG9rZW4gfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBlO1xuICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcj8ubWVzc2FnZSB8fCAnR29vZ2xlIGF1dGhlbnRpY2F0aW9uIGxvZ2luIGZhaWwnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVkaXJlY3RMb2dpbigpIHtcbiAgICBjb25zdCB7IGxvZ2luU3VjY2VzczogaGFuZGxlTG9naW4sIHVwZGF0ZUN1cnJlbnRVc2VyOiBoYW5kbGVVcGRhdGVVc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRva2VuID0gYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICBpZiAoIXRva2VuIHx8IHRva2VuID09PSAnbnVsbCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhdXRoU2VydmljZS5zZXRUb2tlbih0b2tlbik7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UubWUoe1xuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxuICAgICAgfSk7XG4gICAgICBpZiAoIXVzZXIgfHwgIXVzZXIuZGF0YSB8fCAhdXNlci5kYXRhLl9pZCkgcmV0dXJuO1xuICAgICAgaGFuZGxlTG9naW4oKTtcbiAgICAgIGhhbmRsZVVwZGF0ZVVzZXIodXNlci5kYXRhKTtcbiAgICAgIHVzZXIuZGF0YS5pc1BlcmZvcm1lclxuICAgICAgICA/IFJvdXRlci5wdXNoKFxuICAgICAgICAgIHsgcGF0aG5hbWU6ICcvbW9kZWwvcHJvZmlsZScsIHF1ZXJ5OiB7IHVzZXJuYW1lOiB1c2VyLmRhdGEudXNlcm5hbWUgfHwgdXNlci5kYXRhLl9pZCB9IH0sXG4gICAgICAgICAgYC8ke3VzZXIuZGF0YS51c2VybmFtZSB8fCB1c2VyLmRhdGEuX2lkfWBcbiAgICAgICAgKVxuICAgICAgICA6IFJvdXRlci5wdXNoKCcvaG9tZScpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2FsbGJhY2tUd2l0dGVyKCkge1xuICAgIGNvbnN0IHsgb2F1dGhfdmVyaWZpZXIsIGxvZ2luU29jaWFsOiBoYW5kbGVMb2dpbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0d2l0dGVySW5mbyA9IGF1dGhTZXJ2aWNlLmdldFR3aXR0ZXJUb2tlbigpO1xuICAgIGlmICghb2F1dGhfdmVyaWZpZXIgfHwgIXR3aXR0ZXJJbmZvLm9hdXRoVG9rZW4gfHwgIXR3aXR0ZXJJbmZvLm9hdXRoVG9rZW5TZWNyZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGF1dGggPSBhd2FpdCBhdXRoU2VydmljZS5jYWxsYmFja0xvZ2luVHdpdHRlcih7XG4gICAgICAgIG9hdXRoX3ZlcmlmaWVyLFxuICAgICAgICBvYXV0aFRva2VuOiB0d2l0dGVySW5mby5vYXV0aFRva2VuLFxuICAgICAgICBvYXV0aFRva2VuU2VjcmV0OiB0d2l0dGVySW5mby5vYXV0aFRva2VuU2VjcmV0LFxuICAgICAgICByb2xlOiB0d2l0dGVySW5mby5yb2xlIHx8ICd1c2VyJ1xuICAgICAgfSk7XG4gICAgICBhdXRoLmRhdGEgJiYgYXV0aC5kYXRhLnRva2VuICYmIGhhbmRsZUxvZ2luKHsgdG9rZW46IGF1dGguZGF0YS50b2tlbiB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IGU7XG4gICAgICBtZXNzYWdlLmVycm9yKGVycm9yPy5tZXNzYWdlIHx8ICdUd2l0dGVyIGF1dGhlbnRpY2F0aW9uIGxvZ2luIGZhaWwnKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2dpblR3aXR0ZXIoKSB7XG4gICAgY29uc3QgeyBsb2dpbkFzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IChhd2FpdCBhdXRoU2VydmljZS5sb2dpblR3aXR0ZXIoKSkuZGF0YTtcbiAgICAgIGlmIChyZXNwICYmIHJlc3AudXJsKSB7XG4gICAgICAgIGF1dGhTZXJ2aWNlLnNldFR3aXR0ZXJUb2tlbih7IG9hdXRoVG9rZW46IHJlc3Aub2F1dGhUb2tlbiwgb2F1dGhUb2tlblNlY3JldDogcmVzcC5vYXV0aFRva2VuU2VjcmV0IH0sIGxvZ2luQXMpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3AudXJsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgZTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3I/Lm1lc3NhZ2UgfHwgJ1R3aXR0ZXIgYXV0aGVudGljYXRpb24gbG9naW4gZmFpbCcpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1aSwgc2V0dGluZ3MsIGxvZ2luQXV0aCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3VpICYmIHVpLnNpdGVOYW1lfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17c2V0dGluZ3MgJiYgc2V0dGluZ3MubWV0YUtleXdvcmRzfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3NldHRpbmdzICYmIHNldHRpbmdzLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICB7LyogT0cgdGFncyAqL31cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3VpICYmIHVpLnNpdGVOYW1lfSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXt1aSAmJiB1aS5sb2dvfSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtzZXR0aW5ncyAmJiBzZXR0aW5ncy5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgey8qIFR3aXR0ZXIgdGFncyAqL31cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dWkgJiYgdWkuc2l0ZU5hbWV9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXt1aSAmJiB1aS5sb2dvfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17c2V0dGluZ3MgJiYgc2V0dGluZ3MubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXIgXCIgc3R5bGU9e3ttYXhXaWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiMFwifX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCIxMDB2aFwifX0+XG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7aGVpZ2h0OiBcIjEwMHZoXCJ9fT5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IHN0eWxlPXt7cGFkZGluZzogXCIwXCJ9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldy1sb2dpbi1sZWZ0LXdyYXBwZXInPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldy1sb2dvJz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9hc3NldHMvbG9nby13aGl0ZS5wbmdcIiBhbHQ9XCJGb29kaWUgZmFucyBMb2dvXCIgLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9hc3NldHMvbG9naW4tcGFnZS9sZWZ0LW1haW4taW1nLnBuZ1wiIGFsdD1cIkZvb2RpZWZhbnMgbG9naW4gcGFnZVwiIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXctbG9naW4tbGVmdC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8aDE+WW91ciBjdWxpbmFyeSBhZHZlbnR1cmUgc3RhcnRzIGhlcmUuPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5TaWduIGluIGFuZCBsZXTigJlzIGNvb2sgc29tZXRoaW5nIGV4dHJhb3JkaW5hcnkgdG9nZXRoZXIhPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3BhZGRpbmc6IFwiMFwifX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5uZXc8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYm94XCI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tY29udGVudCBsZWZ0XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt1aS5sb2dpblBsYWNlaG9sZGVySW1hZ2UgPyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3VpLmxvZ2luUGxhY2Vob2xkZXJJbWFnZX0pYCB9IDogbnVsbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IHNtPXsyNH0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGVudCByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+e3VpLmxvZ28gPyA8aW1nIGFsdD1cImxvZ29cIiBzcmM9e3VpLmxvZ299IGhlaWdodD1cIjgwcHhcIiAvPiA6IHVpLnNpdGVOYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlNpZ24gdXAgdG8gbWFrZSBtb25leSBhbmQgaW50ZXJhY3Qgd2l0aCB5b3VyIGZhbnMhPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNldHRpbmdzLnR3aXR0ZXJDbGllbnRJZH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvZ2luVHdpdHRlcigpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR3aXR0ZXItYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUd2l0dGVyT3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgIExPRyBJTiAvIFNJR04gVVAgV0lUSCBUV0lUVEVSXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD17c2V0dGluZ3MuZ29vZ2xlQ2xpZW50SWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXt0aGlzLm9uR29vZ2xlTG9naW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3RoaXMub25Hb29nbGVMb2dpbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RGl2aWRlcj5PcjwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub3JtYWxfbG9naW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaD17dGhpcy5oYW5kbGVMb2dpbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlVHJpZ2dlcj17WydvbkNoYW5nZScsICdvbkJsdXInXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ0VtYWlsIG9yIFVzZXJuYW1lIGlzIG1pc3NpbmcnIH1dfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBkaXNhYmxlZD17bG9naW5BdXRoLnJlcXVlc3RpbmcgfHwgaXNMb2FkaW5nfSBwbGFjZWhvbGRlcj1cIkVtYWlsIG9yIFVzZXJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyPXtbJ29uQ2hhbmdlJywgJ29uQmx1ciddfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgcGFzc3dvcmQhJyB9XX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgZGlzYWJsZWQ9e2xvZ2luQXV0aC5yZXF1ZXN0aW5nIHx8IGlzTG9hZGluZ30gcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZzogJzAgMjBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInN1Yi10ZXh0XCI+Rm9yZ290IHBhc3N3b3JkPzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxHb29nbGVSZUNhcHRjaGEgdWk9e3VpfSBoYW5kbGVWZXJpZnk9e3RoaXMuaGFuZGxlVmVyaWZ5Q2FwY2hhLmJpbmQodGhpcyl9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvZ2luQXV0aC5yZXF1ZXN0aW5nIHx8IGlzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9naW5BdXRoLnJlcXVlc3RpbmcgfHwgaXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBMT0cgSU5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDExIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3BhZ2UvaGVscFwiPkhlbHAgQ2VudGVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgYW55IGhlbHAgaWYgeW91IGFyZSBub3QgYWJsZSB0byBsb2dpbiB3aXRoIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3VpPy5zaXRlTmFtZSB8fCAnRmFuc28nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW46ICcxNXB4IDAnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDUgfX0+RG9uJmFwb3M7dCBoYXZlIGFuIGFjY291bnQgeWV0PzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gdXAgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VpPy5zaXRlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIgLz59XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlc1RvUHJvcHMgPSAoc3RhdGU6IGFueSkgPT4gKHtcbiAgdWk6IHsgLi4uc3RhdGUudWkgfSxcbiAgc2V0dGluZ3M6IHsgLi4uc3RhdGUuc2V0dGluZ3MgfSxcbiAgbG9naW5BdXRoOiB7IC4uLnN0YXRlLmF1dGgubG9naW5BdXRoIH1cbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvZ2luLFxuICBsb2dpblNvY2lhbCxcbiAgbG9naW5TdWNjZXNzLFxuICB1cGRhdGVDdXJyZW50VXNlclxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVzVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbik7XG4iXSwic291cmNlUm9vdCI6IiJ9