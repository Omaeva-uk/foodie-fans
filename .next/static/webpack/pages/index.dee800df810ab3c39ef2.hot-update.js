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
      }, __jsx(Title, null, "Your culinary adventure starts here."), __jsx("p", null, "Sign in and let\u2019s cook something extraordinary together!")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luIiwibG9naW5BcyIsImlzTG9hZGluZyIsInJlZGlyZWN0TG9naW4iLCJjYWxsYmFja1R3aXR0ZXIiLCJ2YWx1ZXMiLCJoYW5kbGVMb2dpbiIsInByb3BzIiwibG9naW4iLCJyZXNwIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZWNhcHRjaGFTdWNjZXNzIiwiY3JlZGVudGlhbCIsImxvZ2luU29jaWFsIiwic3RhdGUiLCJwYXlsb2FkIiwidG9rZW5JZCIsInJvbGUiLCJzZXRTdGF0ZSIsImF1dGhTZXJ2aWNlIiwibG9naW5Hb29nbGUiLCJyZXNwb25zZSIsInRva2VuIiwiZXJyb3IiLCJtZXNzYWdlIiwibG9naW5TdWNjZXNzIiwiaGFuZGxlVXBkYXRlVXNlciIsInVwZGF0ZUN1cnJlbnRVc2VyIiwiZ2V0VG9rZW4iLCJzZXRUb2tlbiIsInVzZXJTZXJ2aWNlIiwibWUiLCJBdXRob3JpemF0aW9uIiwidXNlciIsIl9pZCIsImlzUGVyZm9ybWVyIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJ1c2VybmFtZSIsIm9hdXRoX3ZlcmlmaWVyIiwidHdpdHRlckluZm8iLCJnZXRUd2l0dGVyVG9rZW4iLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsImNhbGxiYWNrTG9naW5Ud2l0dGVyIiwiYXV0aCIsImxvZ2luVHdpdHRlciIsInVybCIsInNldFR3aXR0ZXJUb2tlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVpIiwic2V0dGluZ3MiLCJsb2dpbkF1dGgiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJzaXRlTmFtZSIsIm1ldGFLZXl3b3JkcyIsIm1ldGFEZXNjcmlwdGlvbiIsImxvZ28iLCJtYXhXaWR0aCIsInBhZGRpbmciLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dpblBsYWNlaG9sZGVySW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0d2l0dGVyQ2xpZW50SWQiLCJnb29nbGVDbGllbnRJZCIsIm9uR29vZ2xlTG9naW4iLCJiaW5kIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsInJlcXVlc3RpbmciLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsImN0eCIsIlB1cmVDb21wb25lbnQiLCJtYXBTdGF0ZXNUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBaUJNQSxLOzs7Ozs7Ozs7Ozs7Ozs7OzJOQUtlLEs7O2dOQVFYO0FBQ05DLGFBQU8sRUFBRSxNQURIO0FBRU5DLGVBQVMsRUFBRTtBQUZMLEs7Ozs7Ozs7O2dOQUtSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxxQkFBS0MsYUFBTDtBQUNBLHFCQUFLQyxlQUFMOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzBNQUtBLGtCQUFrQkMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2lCQywyQkFEakIsR0FDaUMsS0FBS0MsS0FEdEMsQ0FDVUMsS0FEVjtBQUFBLGtEQUVTRixXQUFXLENBQUNELE1BQUQsQ0FGcEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7aU5BS0Esa0JBQXlCSSxJQUF6QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Usb0JBQUlBLElBQUosYUFBSUEsSUFBSiw2QkFBSUEsSUFBSSxDQUFFQyxJQUFWLHVDQUFJLFdBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCLHVCQUFLQyxnQkFBTCxHQUF3QixJQUF4QjtBQUNELGlCQUZELE1BRU87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RyxDQUFDekMsS0FGWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7OztFQVBrQjBDLG1EOzswRkFBZGxGLEssa0JBQ2tCLEs7OzBGQURsQkEsSyxZQUdZLE87O0FBZ1JsQixJQUFNbUYsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDcEUsS0FBRDtBQUFBLFNBQWlCO0FBQ3hDd0MsTUFBRSxvQkFBT3hDLEtBQUssQ0FBQ3dDLEVBQWIsQ0FEc0M7QUFFeENDLFlBQVEsb0JBQU96QyxLQUFLLENBQUN5QyxRQUFiLENBRmdDO0FBR3hDQyxhQUFTLG9CQUFPMUMsS0FBSyxDQUFDaUMsSUFBTixDQUFXUyxTQUFsQjtBQUgrQixHQUFqQjtBQUFBLENBQXpCOztBQU1BLElBQU0yQixrQkFBa0IsR0FBRztBQUN6QjVFLE9BQUssRUFBTEEsMERBRHlCO0FBRXpCTSxhQUFXLEVBQVhBLGdFQUZ5QjtBQUd6QlksY0FBWSxFQUFaQSxpRUFIeUI7QUFJekJFLG1CQUFpQixFQUFqQkEsc0VBQWlCQTtBQUpRLENBQTNCO0FBTWV5RCwySEFBTyxDQUFDRixnQkFBRCxFQUFtQkMsa0JBQW5CLENBQVAsQ0FBOENwRixLQUE5QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRlZTgwMGRmODEwYWIzYzM5ZWYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCB7XG4gIEZvcm0sIElucHV0LCBCdXR0b24sIFJvdywgQ29sLCBEaXZpZGVyLCBMYXlvdXQsIG1lc3NhZ2UsIEdyaWRcbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBsb2dpbiwgbG9naW5TdWNjZXNzLCBsb2dpblNvY2lhbCB9IGZyb20gJ0ByZWR1eC9hdXRoL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXBkYXRlQ3VycmVudFVzZXIgfSBmcm9tICdAcmVkdXgvdXNlci9hY3Rpb25zJztcbmltcG9ydCB7IGF1dGhTZXJ2aWNlLCB1c2VyU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgSVNldHRpbmdzLCBJVUlDb25maWcgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFR3aXR0ZXJPdXRsaW5lZCwgR29vZ2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9iYXNlL2xvYWRlcic7XG5pbXBvcnQgJy4vYXV0aC9pbmRleC5sZXNzJztcbmltcG9ydCBHb29nbGVMb2dpbkJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9hdXRoL2dvb2dsZS1sb2dpbi1idXR0b24nO1xuaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdhbnRkJztcblxuXG5pbXBvcnQgeyB1cmwgfSBmcm9tICdpbnNwZWN0b3InO1xuXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBsb2dpbkF1dGg6IGFueTtcbiAgbG9naW46IEZ1bmN0aW9uO1xuICB1cGRhdGVDdXJyZW50VXNlcjogRnVuY3Rpb247XG4gIGxvZ2luU3VjY2VzczogRnVuY3Rpb247XG4gIGxvZ2luU29jaWFsOiBGdW5jdGlvbjtcbiAgdWk6IElVSUNvbmZpZztcbiAgc2V0dGluZ3M6IElTZXR0aW5ncztcbiAgb2F1dGhfdmVyaWZpZXI6IHN0cmluZztcbn1cblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcz4ge1xuICBzdGF0aWMgYXV0aGVudGljYXRlID0gZmFsc2U7XG5cbiAgc3RhdGljIGxheW91dCA9ICdibGFuayc7XG5cbiAgcmVjYXB0Y2hhU3VjY2VzcyA9IGZhbHNlO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBjdHggfSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jdHgucXVlcnlcbiAgICB9O1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgbG9naW5BczogJ3VzZXInLFxuICAgIGlzTG9hZGluZzogdHJ1ZVxuICB9O1xuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVkaXJlY3RMb2dpbigpO1xuICAgIHRoaXMuY2FsbGJhY2tUd2l0dGVyKCk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVMb2dpbih2YWx1ZXM6IGFueSkge1xuICAgIGNvbnN0IHsgbG9naW46IGhhbmRsZUxvZ2luIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBoYW5kbGVMb2dpbih2YWx1ZXMpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlVmVyaWZ5Q2FwY2hhKHJlc3A6IGFueSkge1xuICAgIGlmIChyZXNwPy5kYXRhPy5zdWNjZXNzKSB7XG4gICAgICB0aGlzLnJlY2FwdGNoYVN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY2FwdGNoYVN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkdvb2dsZUxvZ2luKHJlc3A6IGFueSkge1xuICAgIGlmICghcmVzcD8uY3JlZGVudGlhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGxvZ2luU29jaWFsOiBoYW5kbGVMb2dpbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxvZ2luQXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgdG9rZW5JZDogcmVzcC5jcmVkZW50aWFsLCByb2xlOiBsb2dpbkFzIH07XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChhd2FpdCBhdXRoU2VydmljZS5sb2dpbkdvb2dsZShwYXlsb2FkKSkuZGF0YTtcbiAgICAgIHJlc3BvbnNlLnRva2VuICYmIGhhbmRsZUxvZ2luKHsgdG9rZW46IHJlc3BvbnNlLnRva2VuIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgZTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3I/Lm1lc3NhZ2UgfHwgJ0dvb2dsZSBhdXRoZW50aWNhdGlvbiBsb2dpbiBmYWlsJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlZGlyZWN0TG9naW4oKSB7XG4gICAgY29uc3QgeyBsb2dpblN1Y2Nlc3M6IGhhbmRsZUxvZ2luLCB1cGRhdGVDdXJyZW50VXNlcjogaGFuZGxlVXBkYXRlVXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b2tlbiA9IGF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgaWYgKCF0b2tlbiB8fCB0b2tlbiA9PT0gJ251bGwnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXV0aFNlcnZpY2Uuc2V0VG9rZW4odG9rZW4pO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLm1lKHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgIH0pO1xuICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmRhdGEgfHwgIXVzZXIuZGF0YS5faWQpIHJldHVybjtcbiAgICAgIGhhbmRsZUxvZ2luKCk7XG4gICAgICBoYW5kbGVVcGRhdGVVc2VyKHVzZXIuZGF0YSk7XG4gICAgICB1c2VyLmRhdGEuaXNQZXJmb3JtZXJcbiAgICAgICAgPyBSb3V0ZXIucHVzaChcbiAgICAgICAgICB7IHBhdGhuYW1lOiAnL21vZGVsL3Byb2ZpbGUnLCBxdWVyeTogeyB1c2VybmFtZTogdXNlci5kYXRhLnVzZXJuYW1lIHx8IHVzZXIuZGF0YS5faWQgfSB9LFxuICAgICAgICAgIGAvJHt1c2VyLmRhdGEudXNlcm5hbWUgfHwgdXNlci5kYXRhLl9pZH1gXG4gICAgICAgIClcbiAgICAgICAgOiBSb3V0ZXIucHVzaCgnL2hvbWUnKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNhbGxiYWNrVHdpdHRlcigpIHtcbiAgICBjb25zdCB7IG9hdXRoX3ZlcmlmaWVyLCBsb2dpblNvY2lhbDogaGFuZGxlTG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHdpdHRlckluZm8gPSBhdXRoU2VydmljZS5nZXRUd2l0dGVyVG9rZW4oKTtcbiAgICBpZiAoIW9hdXRoX3ZlcmlmaWVyIHx8ICF0d2l0dGVySW5mby5vYXV0aFRva2VuIHx8ICF0d2l0dGVySW5mby5vYXV0aFRva2VuU2VjcmV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhdXRoID0gYXdhaXQgYXV0aFNlcnZpY2UuY2FsbGJhY2tMb2dpblR3aXR0ZXIoe1xuICAgICAgICBvYXV0aF92ZXJpZmllcixcbiAgICAgICAgb2F1dGhUb2tlbjogdHdpdHRlckluZm8ub2F1dGhUb2tlbixcbiAgICAgICAgb2F1dGhUb2tlblNlY3JldDogdHdpdHRlckluZm8ub2F1dGhUb2tlblNlY3JldCxcbiAgICAgICAgcm9sZTogdHdpdHRlckluZm8ucm9sZSB8fCAndXNlcidcbiAgICAgIH0pO1xuICAgICAgYXV0aC5kYXRhICYmIGF1dGguZGF0YS50b2tlbiAmJiBoYW5kbGVMb2dpbih7IHRva2VuOiBhdXRoLmRhdGEudG9rZW4gfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBlO1xuICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcj8ubWVzc2FnZSB8fCAnVHdpdHRlciBhdXRoZW50aWNhdGlvbiBsb2dpbiBmYWlsJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9naW5Ud2l0dGVyKCkge1xuICAgIGNvbnN0IHsgbG9naW5BcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAoYXdhaXQgYXV0aFNlcnZpY2UubG9naW5Ud2l0dGVyKCkpLmRhdGE7XG4gICAgICBpZiAocmVzcCAmJiByZXNwLnVybCkge1xuICAgICAgICBhdXRoU2VydmljZS5zZXRUd2l0dGVyVG9rZW4oeyBvYXV0aFRva2VuOiByZXNwLm9hdXRoVG9rZW4sIG9hdXRoVG9rZW5TZWNyZXQ6IHJlc3Aub2F1dGhUb2tlblNlY3JldCB9LCBsb2dpbkFzKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwLnVybDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IGU7XG4gICAgICBtZXNzYWdlLmVycm9yKGVycm9yPy5tZXNzYWdlIHx8ICdUd2l0dGVyIGF1dGhlbnRpY2F0aW9uIGxvZ2luIGZhaWwnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdWksIHNldHRpbmdzLCBsb2dpbkF1dGggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnt1aSAmJiB1aS5zaXRlTmFtZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e3NldHRpbmdzICYmIHNldHRpbmdzLm1ldGFLZXl3b3Jkc30gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtzZXR0aW5ncyAmJiBzZXR0aW5ncy5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgey8qIE9HIHRhZ3MgKi99XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt1aSAmJiB1aS5zaXRlTmFtZX0gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17dWkgJiYgdWkubG9nb30gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17c2V0dGluZ3MgJiYgc2V0dGluZ3MubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIHsvKiBUd2l0dGVyIHRhZ3MgKi99XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3VpICYmIHVpLnNpdGVOYW1lfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17dWkgJiYgdWkubG9nb30gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3NldHRpbmdzICYmIHNldHRpbmdzLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIFwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjBcIn19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMTAwdmhcIn19PlxuICAgICAgICAgICAgPFJvdyBzdHlsZT17e2hlaWdodDogXCIxMDB2aFwifX0+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3BhZGRpbmc6IFwiMFwifX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXctbG9naW4tbGVmdC13cmFwcGVyJz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXctbG9nbyc+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2xvZ28td2hpdGUucG5nXCIgYWx0PVwiRm9vZGllIGZhbnMgTG9nb1wiIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2xvZ2luLXBhZ2UvbGVmdC1tYWluLWltZy5wbmdcIiBhbHQ9XCJGb29kaWVmYW5zIGxvZ2luIHBhZ2VcIiAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWxvZ2luLWxlZnQtY29udGVudCc+XG4gICAgICAgICAgICAgICAgPFRpdGxlPllvdXIgY3VsaW5hcnkgYWR2ZW50dXJlIHN0YXJ0cyBoZXJlLjwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPHA+U2lnbiBpbiBhbmQgbGV04oCZcyBjb29rIHNvbWV0aGluZyBleHRyYW9yZGluYXJ5IHRvZ2V0aGVyITwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3twYWRkaW5nOiBcIjBcIn19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+bmV3PC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJveFwiPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IHNtPXsyNH0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnQgbGVmdFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17dWkubG9naW5QbGFjZWhvbGRlckltYWdlID8geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1aS5sb2dpblBsYWNlaG9sZGVySW1hZ2V9KWAgfSA6IG51bGx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnQgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPnt1aS5sb2dvID8gPGltZyBhbHQ9XCJsb2dvXCIgc3JjPXt1aS5sb2dvfSBoZWlnaHQ9XCI4MHB4XCIgLz4gOiB1aS5zaXRlTmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5TaWduIHVwIHRvIG1ha2UgbW9uZXkgYW5kIGludGVyYWN0IHdpdGggeW91ciBmYW5zITwvc21hbGw+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZXR0aW5ncy50d2l0dGVyQ2xpZW50SWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5sb2dpblR3aXR0ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0d2l0dGVyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHdpdHRlck91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICBMT0cgSU4gLyBTSUdOIFVQIFdJVEggVFdJVFRFUlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9e3NldHRpbmdzLmdvb2dsZUNsaWVudElkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17dGhpcy5vbkdvb2dsZUxvZ2luLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXt0aGlzLm9uR29vZ2xlTG9naW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXI+T3I8L0RpdmlkZXI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9ybWFsX2xvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e3RoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXI9e1snb25DaGFuZ2UnLCAnb25CbHVyJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdFbWFpbCBvciBVc2VybmFtZSBpcyBtaXNzaW5nJyB9XX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgZGlzYWJsZWQ9e2xvZ2luQXV0aC5yZXF1ZXN0aW5nIHx8IGlzTG9hZGluZ30gcGxhY2Vob2xkZXI9XCJFbWFpbCBvciBVc2VybmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlVHJpZ2dlcj17WydvbkNoYW5nZScsICdvbkJsdXInXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIHBhc3N3b3JkIScgfV19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIGRpc2FibGVkPXtsb2dpbkF1dGgucmVxdWVzdGluZyB8fCBpc0xvYWRpbmd9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDIwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2F1dGgvZm9yZ290LXBhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzdWItdGV4dFwiPkZvcmdvdCBwYXNzd29yZD88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8R29vZ2xlUmVDYXB0Y2hhIHVpPXt1aX0gaGFuZGxlVmVyaWZ5PXt0aGlzLmhhbmRsZVZlcmlmeUNhcGNoYS5iaW5kKHRoaXMpfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2dpbkF1dGgucmVxdWVzdGluZyB8fCBpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvZ2luQXV0aC5yZXF1ZXN0aW5nIHx8IGlzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTE9HIElOXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wYWdlL2hlbHBcIj5IZWxwIENlbnRlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGFueSBoZWxwIGlmIHlvdSBhcmUgbm90IGFibGUgdG8gbG9naW4gd2l0aCB5b3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt1aT8uc2l0ZU5hbWUgfHwgJ0ZhbnNvJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgc3R5bGU9e3sgbWFyZ2luOiAnMTVweCAwJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA1IH19PkRvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50IHlldD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIHVwIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1aT8uc2l0ZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGVyIC8+fVxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZXNUb1Byb3BzID0gKHN0YXRlOiBhbnkpID0+ICh7XG4gIHVpOiB7IC4uLnN0YXRlLnVpIH0sXG4gIHNldHRpbmdzOiB7IC4uLnN0YXRlLnNldHRpbmdzIH0sXG4gIGxvZ2luQXV0aDogeyAuLi5zdGF0ZS5hdXRoLmxvZ2luQXV0aCB9XG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2dpbixcbiAgbG9naW5Tb2NpYWwsXG4gIGxvZ2luU3VjY2VzcyxcbiAgdXBkYXRlQ3VycmVudFVzZXJcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlc1RvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==