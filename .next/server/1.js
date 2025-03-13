exports.ids = [1];
exports.modules = {

/***/ "./src/components/common/base/loader.less":
/*!************************************************!*\
  !*** ./src/components/common/base/loader.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/base/loader.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/base/loader.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.less */ "./src/components/common/base/loader.less");
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loader_less__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-nested-ternary */





class Loader extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      ui,
      customText
    } = this.props;
    return __jsx("div", {
      className: "loading-screen"
    }, __jsx("div", {
      style: {
        textAlign: 'center'
      }
    }, ui.logo ? __jsx("img", {
      alt: "loading-ico",
      src: ui.logo
    }) : ui.siteName ? __jsx("span", null, ui.siteName) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
      size: "large"
    }), customText && __jsx("p", null, customText)));
  }

}

const mapStatesToProps = state => ({
  ui: _objectSpread({}, state.ui)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStatesToProps)(Loader));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vYmFzZS9sb2FkZXIudHN4Il0sIm5hbWVzIjpbIkxvYWRlciIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJ1aSIsImN1c3RvbVRleHQiLCJwcm9wcyIsInRleHRBbGlnbiIsImxvZ28iLCJzaXRlTmFtZSIsIm1hcFN0YXRlc1RvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQU9BLE1BQU1BLE1BQU4sU0FBcUJDLG1EQUFyQixDQUEyQztBQUN6Q0MsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFQyxRQUFGO0FBQU1DO0FBQU4sUUFBcUIsS0FBS0MsS0FBaEM7QUFDQSxXQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWI7QUFBWixPQUNHSCxFQUFFLENBQUNJLElBQUgsR0FBVTtBQUFLLFNBQUcsRUFBQyxhQUFUO0FBQXVCLFNBQUcsRUFBRUosRUFBRSxDQUFDSTtBQUEvQixNQUFWLEdBQW9ESixFQUFFLENBQUNLLFFBQUgsR0FBYyxvQkFBT0wsRUFBRSxDQUFDSyxRQUFWLENBQWQsR0FBMkMsTUFBQyx5Q0FBRDtBQUFNLFVBQUksRUFBQztBQUFYLE1BRGxHLEVBRUdKLFVBQVUsSUFBSSxpQkFBSUEsVUFBSixDQUZqQixDQURGLENBREY7QUFRRDs7QUFYd0M7O0FBYTNDLE1BQU1LLGdCQUFnQixHQUFJQyxLQUFELEtBQVk7QUFDbkNQLElBQUUsb0JBQU9PLEtBQUssQ0FBQ1AsRUFBYjtBQURpQyxDQUFaLENBQXpCOztBQUdlUSwwSEFBTyxDQUFDRixnQkFBRCxDQUFQLENBQTBCVCxNQUExQixDQUFmLEUiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IElVSUNvbmZpZyB9IGZyb20gJ0BpbnRlcmZhY2VzL2luZGV4JztcbmltcG9ydCAnLi9sb2FkZXIubGVzcyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB1aTogSVVJQ29uZmlnLFxuICBjdXN0b21UZXh0Pzogc3RyaW5nO1xufVxuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1aSwgY3VzdG9tVGV4dCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNjcmVlblwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAge3VpLmxvZ28gPyA8aW1nIGFsdD1cImxvYWRpbmctaWNvXCIgc3JjPXt1aS5sb2dvfSAvPiA6IHVpLnNpdGVOYW1lID8gPHNwYW4+e3VpLnNpdGVOYW1lfTwvc3Bhbj4gOiA8U3BpbiBzaXplPVwibGFyZ2VcIiAvPn1cbiAgICAgICAgICB7Y3VzdG9tVGV4dCAmJiA8cD57Y3VzdG9tVGV4dH08L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IG1hcFN0YXRlc1RvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVpOiB7IC4uLnN0YXRlLnVpIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXNUb1Byb3BzKShMb2FkZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==