module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/auth/index.less":
/*!*******************************!*\
  !*** ./pages/auth/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_common_base_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx");
/* harmony import */ var _auth_index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/index.less */ "./pages/auth/index.less");
/* harmony import */ var _auth_index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_auth_index_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_auth_google_login_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/auth/google-login-button */ "./src/components/auth/google-login-button.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable camelcase */















class Login extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "recaptchaSuccess", false);

    _defineProperty(this, "state", {
      loginAs: 'user',
      isLoading: true
    });
  }

  static async getInitialProps({
    ctx
  }) {
    return _objectSpread({}, ctx.query);
  }

  async componentDidMount() {
    this.redirectLogin();
    this.callbackTwitter();
  }

  async handleLogin(values) {
    const {
      login: handleLogin
    } = this.props;
    return handleLogin(values);
  }

  async handleVerifyCapcha(resp) {
    var _resp$data;

    if (resp !== null && resp !== void 0 && (_resp$data = resp.data) !== null && _resp$data !== void 0 && _resp$data.success) {
      this.recaptchaSuccess = true;
    } else {
      this.recaptchaSuccess = false;
    }
  }

  async onGoogleLogin(resp) {
    if (!(resp !== null && resp !== void 0 && resp.credential)) {
      return;
    }

    const {
      loginSocial: handleLogin
    } = this.props;
    const {
      loginAs
    } = this.state;
    const payload = {
      tokenId: resp.credential,
      role: loginAs
    };

    try {
      await this.setState({
        isLoading: true
      });
      const response = await (await _services_index__WEBPACK_IMPORTED_MODULE_6__["authService"].loginGoogle(payload)).data;
      response.token && handleLogin({
        token: response.token
      });
    } catch (e) {
      const error = await e;
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Google authentication login fail');
    } finally {
      this.setState({
        isLoading: false
      });
    }
  }

  async redirectLogin() {
    const {
      loginSuccess: handleLogin,
      updateCurrentUser: handleUpdateUser
    } = this.props;
    const token = _services_index__WEBPACK_IMPORTED_MODULE_6__["authService"].getToken();

    if (!token || token === 'null') {
      this.setState({
        isLoading: false
      });
      return;
    }

    _services_index__WEBPACK_IMPORTED_MODULE_6__["authService"].setToken(token);

    try {
      await this.setState({
        isLoading: true
      });
      const user = await _services_index__WEBPACK_IMPORTED_MODULE_6__["userService"].me({
        Authorization: token
      });
      if (!user || !user.data || !user.data._id) return;
      handleLogin();
      handleUpdateUser(user.data);
      user.data.isPerformer ? next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
        pathname: '/model/profile',
        query: {
          username: user.data.username || user.data._id
        }
      }, `/${user.data.username || user.data._id}`) : next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/home');
    } catch {
      this.setState({
        isLoading: false
      });
    }
  }

  async callbackTwitter() {
    const {
      oauth_verifier,
      loginSocial: handleLogin
    } = this.props;
    const twitterInfo = _services_index__WEBPACK_IMPORTED_MODULE_6__["authService"].getTwitterToken();

    if (!oauth_verifier || !twitterInfo.oauthToken || !twitterInfo.oauthTokenSecret) {
      return;
    }

    try {
      const auth = await _services_index__WEBPACK_IMPORTED_MODULE_6__["authService"].callbackLoginTwitter({
        oauth_verifier,
        oauthToken: twitterInfo.oauthToken,
        oauthTokenSecret: twitterInfo.oauthTokenSecret,
        role: twitterInfo.role || 'user'
      });
      auth.data && auth.data.token && handleLogin({
        token: auth.data.token
      });
    } catch (e) {
      const error = await e;
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Twitter authentication login fail');
    }
  }

  async loginTwitter() {
    const {
      loginAs
    } = this.state;

    try {
      await this.setState({
        isLoading: true
      });
      const resp = await (await _services_index__WEBPACK_IMPORTED_MODULE_6__["authService"].loginTwitter()).data;

      if (resp && resp.url) {
        _services_index__WEBPACK_IMPORTED_MODULE_6__["authService"].setTwitterToken({
          oauthToken: resp.oauthToken,
          oauthTokenSecret: resp.oauthTokenSecret
        }, loginAs);
        window.location.href = resp.url;
      }
    } catch (e) {
      const error = await e;
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error((error === null || error === void 0 ? void 0 : error.message) || 'Twitter authentication login fail');
    } finally {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    const {
      ui,
      settings,
      loginAuth
    } = this.props;
    const {
      isLoading
    } = this.state;
    const {
      Title
    } = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, ui && ui.siteName), __jsx("meta", {
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
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      style: {
        height: "100vh"
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
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
    }, __jsx("h1", null, "Your culinary adventure", __jsx("span", {
      style: {
        color: "black"
      }
    }, " starts here.")), __jsx("p", null, "Sign in and let\u2019s cook something extraordinary together!")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 12,
      style: {
        padding: "0"
      }
    }, __jsx("div", {
      style: {
        backgroundColor: "blue",
        height: "100%"
      }
    }, "Login form")))), __jsx("div", {
      className: "login-box"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12
    }, __jsx("div", {
      className: "login-content left",
      style: ui.loginPlaceholderImage ? {
        backgroundImage: `url(${ui.loginPlaceholderImage})`
      } : null
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
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
      onClick: () => this.loginTwitter(),
      className: "twitter-button"
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["TwitterOutlined"], null), ' ', "LOG IN / SIGN UP WITH TWITTER"), __jsx(_components_auth_google_login_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      clientId: settings.googleClientId,
      onSuccess: this.onGoogleLogin.bind(this),
      onFailure: this.onGoogleLogin.bind(this)
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null, "Or"), __jsx("div", {
      className: "login-form"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      name: "normal_login",
      className: "login-form",
      initialValues: {
        remember: true
      },
      onFinish: this.handleLogin.bind(this)
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "username",
      validateTrigger: ['onChange', 'onBlur'],
      rules: [{
        required: true,
        message: 'Email or Username is missing'
      }]
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      disabled: loginAuth.requesting || isLoading,
      placeholder: "Email or Username"
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "password",
      validateTrigger: ['onChange', 'onBlur'],
      rules: [{
        required: true,
        message: 'Please enter your password!'
      }]
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      disabled: loginAuth.requesting || isLoading,
      placeholder: "Password"
    })), __jsx("p", {
      style: {
        padding: '0 20px'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: '/auth/forgot-password'
      }
    }, __jsx("a", {
      className: "sub-text"
    }, "Forgot password?"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      style: {
        textAlign: 'center'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
    }, "Help Center"), ' ', "for any help if you are not able to login with your existing", ' ', (ui === null || ui === void 0 ? void 0 : ui.siteName) || 'Fanso', ' ', "account"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: {
        margin: '15px 0'
      }
    }), __jsx("p", {
      style: {
        marginBottom: 5
      }
    }, "Don't have an account yet?"), __jsx("p", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/auth/register"
    }, __jsx("a", null, "Sign up for", ' ', ui === null || ui === void 0 ? void 0 : ui.siteName))))))))))), isLoading && __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_10__["default"], null));
  }

}

_defineProperty(Login, "authenticate", false);

_defineProperty(Login, "layout", 'blank');

const mapStatesToProps = state => ({
  ui: _objectSpread({}, state.ui),
  settings: _objectSpread({}, state.settings),
  loginAuth: _objectSpread({}, state.auth.loginAuth)
});

const mapDispatchToProps = {
  login: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__["login"],
  loginSocial: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginSocial"],
  loginSuccess: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginSuccess"],
  updateCurrentUser: _redux_user_actions__WEBPACK_IMPORTED_MODULE_5__["updateCurrentUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStatesToProps, mapDispatchToProps)(Login));

/***/ }),

/***/ "./src/components/auth/google-login-button.less":
/*!******************************************************!*\
  !*** ./src/components/auth/google-login-button.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/auth/google-login-button.tsx":
/*!*****************************************************!*\
  !*** ./src/components/auth/google-login-button.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hook_use_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/hook/use-google-login */ "./src/lib/hook/use-google-login.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _google_login_button_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-login-button.less */ "./src/components/auth/google-login-button.less");
/* harmony import */ var _google_login_button_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_google_login_button_less__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  Text
} = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"];

const GoogleLoginButton = ({
  clientId,
  onSuccess,
  onFailure
}) => {
  const {
    signIn,
    loaded,
    renderButtonSignIn
  } = Object(_lib_hook_use_google_login__WEBPACK_IMPORTED_MODULE_2__["default"])({
    clientId,
    onSuccess,
    onFailure,
    onScriptLoadFailure: onFailure
  });
  const {
    0: clickedOnGoogleLoginButton,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const loginWithGoogle = () => {
    setClicked(true);
    signIn();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (clickedOnGoogleLoginButton) {
      renderButtonSignIn();
    }
  }, [clickedOnGoogleLoginButton]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    type: "button",
    disabled: !clientId || !loaded,
    onClick: () => loginWithGoogle(),
    className: "google-button"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["GoogleOutlined"], null), ' ', "LOG IN / SIGN UP WITH GOOGLE"), clickedOnGoogleLoginButton && __jsx("div", {
    className: "btn-google-login-box"
  }, __jsx(Text, {
    type: "secondary"
  }, "If no prompt appears just click the button bellow to start the authentication flow:"), __jsx("div", {
    id: "btnLoginWithGoogle",
    className: "btn-google-login"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleLoginButton);

/***/ }),

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

/***/ }),

/***/ "./src/lib/hook/use-google-login.ts":
/*!******************************************!*\
  !*** ./src/lib/hook/use-google-login.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var static_lib_load_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! static/lib/load-script */ "./static/lib/load-script.js");
/* harmony import */ var static_lib_remove_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! static/lib/remove-script */ "./static/lib/remove-script.js");




const useGoogleLogin = ({
  onSuccess = Function,
  onFailure = Function,
  onScriptLoadFailure,
  clientId,
  autoLoad,
  jsSrc = 'https://accounts.google.com/gsi/client'
}) => {
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function handleSigninSuccess(res) {
    onSuccess(res);
  }

  function signIn(e = null) {
    if (e) {
      e.preventDefault();
    }

    if (loaded) {
      const google = window.google;
      google.accounts.id.prompt();
    }
  }

  function renderButtonSignIn(e = null) {
    if (e) {
      e.preventDefault();
    }

    if (loaded) {
      const google = window.google;
      google.accounts.id.renderButton(document.getElementById('btnLoginWithGoogle'), // Ensure the element exist and it is a div to display correcctly
      {
        theme: 'outline',
        size: 'large'
      } // Customization attributes
      );
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let unmounted = false;
    const onLoadFailure = onScriptLoadFailure || onFailure;
    Object(static_lib_load_script__WEBPACK_IMPORTED_MODULE_1__["loadScript"])(document, 'script', 'google-login', jsSrc, () => {
      const google = window.google;
      google.accounts.id.initialize({
        client_id: clientId,
        callback: data => {
          handleSigninSuccess(data);
        }
      });

      if (!unmounted) {
        setLoaded(true);
      }
    }, err => {
      onLoadFailure(err);
    });
    return () => {
      unmounted = true;
      Object(static_lib_remove_script__WEBPACK_IMPORTED_MODULE_2__["removeScript"])(document, 'google-login');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (autoLoad) {
      signIn();
    }
  }, [loaded]);
  return {
    signIn,
    loaded,
    renderButtonSignIn
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useGoogleLogin);

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

/***/ "./static/lib/load-script.js":
/*!***********************************!*\
  !*** ./static/lib/load-script.js ***!
  \***********************************/
/*! exports provided: loadScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScript", function() { return loadScript; });
function loadScript(d, s, id, jsSrc, cb, onError) {
  const element = d.getElementsByTagName(s)[0];
  const fjs = element;
  let js = element;
  js = d.createElement(s);
  js.id = id;
  js.src = jsSrc;

  if (fjs && fjs.parentNode) {
    fjs.parentNode.insertBefore(js, fjs);
  } else {
    d.head.appendChild(js);
  }

  js.onerror = onError;
  js.onload = cb;
}

/***/ }),

/***/ "./static/lib/remove-script.js":
/*!*************************************!*\
  !*** ./static/lib/remove-script.js ***!
  \*************************************/
/*! exports provided: removeScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScript", function() { return removeScript; });
function removeScript(d, id) {
  const element = d.getElementById(id);

  if (element) {
    element.parentNode.removeChild(element);
  }
}

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

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoL2dvb2dsZS1sb2dpbi1idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9iYXNlL2xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ob29rL3VzZS1nb29nbGUtbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yZWR1eC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91c2VyL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Jhbm5lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9ibG9jay5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb29raWVzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Vhcm5pbmcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZmVlZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9mb2xsb3cuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2FsbGVyeS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9vcmRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wYXltZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BheW91dC1yZXF1ZXN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BlcmZvcm1lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9waG90by5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wb3N0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVhY3Rpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVwb3J0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3NoaXBwaW5nLWFkZHJlc3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RyZWFtLnNlcnZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdWJzY3JpcHRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdG9rZW4tcGFja2FnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy90b2tlbi10cmFuc2FjdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3ZpZGVvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2xpYi9sb2FkLXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbGliL3JlbW92ZS1zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVzZWxlY3RcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkxvZ2luIiwiUHVyZUNvbXBvbmVudCIsImxvZ2luQXMiLCJpc0xvYWRpbmciLCJjb21wb25lbnREaWRNb3VudCIsInJlZGlyZWN0TG9naW4iLCJjYWxsYmFja1R3aXR0ZXIiLCJoYW5kbGVMb2dpbiIsInZhbHVlcyIsImxvZ2luIiwiaGFuZGxlVmVyaWZ5Q2FwY2hhIiwicmVzcCIsInJlY2FwdGNoYVN1Y2Nlc3MiLCJvbkdvb2dsZUxvZ2luIiwiY3JlZGVudGlhbCIsImxvZ2luU29jaWFsIiwicGF5bG9hZCIsInRva2VuSWQiLCJyb2xlIiwic2V0U3RhdGUiLCJyZXNwb25zZSIsImF1dGhTZXJ2aWNlIiwibG9naW5Hb29nbGUiLCJ0b2tlbiIsImxvZ2luU3VjY2VzcyIsInVwZGF0ZUN1cnJlbnRVc2VyIiwiaGFuZGxlVXBkYXRlVXNlciIsImdldFRva2VuIiwic2V0VG9rZW4iLCJ1c2VyIiwidXNlclNlcnZpY2UiLCJtZSIsIkF1dGhvcml6YXRpb24iLCJfaWQiLCJpc1BlcmZvcm1lciIsInVzZXJuYW1lIiwib2F1dGhfdmVyaWZpZXIiLCJ0d2l0dGVySW5mbyIsImdldFR3aXR0ZXJUb2tlbiIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0IiwiY2FsbGJhY2tMb2dpblR3aXR0ZXIiLCJsb2dpblR3aXR0ZXIiLCJzZXRUd2l0dGVyVG9rZW4iLCJsb2NhdGlvbiIsInJlbmRlciIsInVpIiwic2V0dGluZ3MiLCJsb2dpbkF1dGgiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJzaXRlTmFtZSIsIm1ldGFLZXl3b3JkcyIsIm1ldGFEZXNjcmlwdGlvbiIsImxvZ28iLCJtYXhXaWR0aCIsInBhZGRpbmciLCJoZWlnaHQiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImxvZ2luUGxhY2Vob2xkZXJJbWFnZSIsImJhY2tncm91bmRJbWFnZSIsInR3aXR0ZXJDbGllbnRJZCIsImdvb2dsZUNsaWVudElkIiwiYmluZCIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJyZXF1ZXN0aW5nIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iLCJtYXBTdGF0ZXNUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCIsIlRleHQiLCJHb29nbGVMb2dpbkJ1dHRvbiIsImNsaWVudElkIiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwic2lnbkluIiwibG9hZGVkIiwicmVuZGVyQnV0dG9uU2lnbkluIiwidXNlR29vZ2xlTG9naW4iLCJvblNjcmlwdExvYWRGYWlsdXJlIiwiY2xpY2tlZE9uR29vZ2xlTG9naW5CdXR0b24iLCJzZXRDbGlja2VkIiwidXNlU3RhdGUiLCJsb2dpbldpdGhHb29nbGUiLCJ1c2VFZmZlY3QiLCJMb2FkZXIiLCJjdXN0b21UZXh0IiwiRnVuY3Rpb24iLCJhdXRvTG9hZCIsImpzU3JjIiwic2V0TG9hZGVkIiwiaGFuZGxlU2lnbmluU3VjY2VzcyIsInByZXZlbnREZWZhdWx0IiwiZ29vZ2xlIiwiYWNjb3VudHMiLCJpZCIsInByb21wdCIsInJlbmRlckJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwidGhlbWUiLCJzaXplIiwidW5tb3VudGVkIiwib25Mb2FkRmFpbHVyZSIsImxvYWRTY3JpcHQiLCJpbml0aWFsaXplIiwiY2xpZW50X2lkIiwiY2FsbGJhY2siLCJyZW1vdmVTY3JpcHQiLCJjcmVhdGVBY3Rpb24iLCJ0eXBlIiwiYWN0aW9uIiwiUmVkdXhDcmVhdGVBY3Rpb24iLCJpcyIsImFUeXBlIiwidG9TdHJpbmciLCJjcmVhdGVBc3luY0FjdGlvbiIsImNyZWF0ZUFzeW5jQWN0aW9ucyIsImhhbmRsZUFjdGlvbnMiLCJhY3Rpb25zIiwiaW5pdGlhbFN0YXRlIiwiaGFuZGxlUmVkdXhBY3Rpb25zIiwicmVkdWNlIiwicmVkdWNlciIsImFjdCIsImNyZWF0ZVJlZHVjZXJzIiwic3RhdGVDb250ZXh0IiwicmVkdWNlcnMiLCJwcmV2ZW50UmVzZXR0aW5nIiwiZmxhdHRlbiIsImlzQXJyYXkiLCJmb3JFYWNoIiwiQVBQX1NUQVRFX1JFU0VUIiwiY3JlYXRlU2FnYXMiLCJzYWdhcyIsIm1hcCIsInNhZ2EiLCJlZmZlY3QiLCJ0YWtlTGF0ZXN0Iiwid29ya2VyIiwiZGVsYXkiLCJjcmVhdGVTZWxlY3RvcnNBIiwiY29udGV4dCIsInN0YXRlU2VsZWN0b3IiLCJpc0VtcHR5IiwiZ2V0SW4iLCJjcmVhdGVTZWxlY3RvcnMiLCJzZWxlY3RvcnMiLCJjcmVhdGVKU1NlbGVjdG9ycyIsImlzVXJsIiwicmVnZXgiLCJ0ZXN0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImlzRW1haWwiLCJlbWFpbCIsImdlbmVyYXRlVXVpZCIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsInYiLCJsb2dpbkZhaWwiLCJsb2dpblBlcmZvcm1lciIsInJlZ2lzdGVyRmFuIiwicmVnaXN0ZXJGYW5TdWNjZXNzIiwicmVnaXN0ZXJGYW5GYWlsIiwicmVnaXN0ZXJQZXJmb3JtZXIiLCJyZWdpc3RlclBlcmZvcm1lclN1Y2Nlc3MiLCJyZWdpc3RlclBlcmZvcm1lckZhaWwiLCJmb3Jnb3QiLCJmb3Jnb3RTdWNjZXNzIiwiZm9yZ290RmFpbCIsImxvZ291dCIsImdldEN1cnJlbnRVc2VyIiwidXBkYXRlQ3VycmVudFVzZXJBdmF0YXIiLCJ1cGRhdGVDdXJyZW50VXNlckNvdmVyIiwidXBkYXRlVXNlciIsInVwZGF0ZVVzZXJTdWNjZXNzIiwidXBkYXRlVXNlckZhaWwiLCJ1cGRhdGVQZXJmb3JtZXIiLCJzZXRVcGRhdGluZyIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmRTdWNjZXNzIiwidXBkYXRlUGFzc3dvcmRGYWlsIiwidXBkYXRlQmFsYW5jZSIsIlRPS0VOIiwiQVBJUmVxdWVzdCIsInNldEF1dGhIZWFkZXJUb2tlbiIsInBhcnNlSlNPTiIsInN0YXR1cyIsImpzb24iLCJjaGVja1N0YXR1cyIsIkVycm9yIiwiY2xvbmUiLCJyZXF1ZXN0IiwiYm9keSIsImhlYWRlcnMiLCJ2ZXJiIiwidXBkYXRlZEhlYWRlciIsImNvb2tpZSIsImNvbmZpZyIsImdldEdsb2JhbENvbmZpZyIsImJhc2VVcmwiLCJBUElfRU5EUE9JTlQiLCJORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQiLCJhcGlVcmwiLCJzdGFydHNXaXRoIiwiZmV0Y2giLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImJ1aWxkVXJsIiwicXVlcnlTdHJpbmciLCJrIiwiam9pbiIsInBvc3QiLCJwdXQiLCJkZWwiLCJ1cGxvYWQiLCJmaWxlcyIsIm9uUHJvZ3Jlc3MiLCJ1cGxvYWRVcmwiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRhZ2UiLCJ0b3RhbCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmIiwiYXBwZW5kIiwiZmllbGRuYW1lIiwiZmlsZSIsImN1c3RvbURhdGEiLCJsZW5ndGgiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJBdXRoU2VydmljZSIsInZlcmlmeUVtYWlsIiwiZXhwaXJlZCIsImV4cGlyZXMiLCJyZW1vdmVUb2tlbiIsInJlbW92ZSIsInBhc3N3b3JkIiwic291cmNlIiwicmVzZXRQYXNzd29yZCIsInJlZ2lzdGVyIiwiZG9jdW1lbnRzIiwidXNlclN3aXRjaFRvUGVyZm9ybWVyIiwidXNlcklkIiwiQmFubmVyU2VydmljZSIsImJhbm5lclNlcnZpY2UiLCJCbG9ja1NlcnZpY2UiLCJibG9ja0NvdW50cmllcyIsImJsb2NrVXNlciIsInVuQmxvY2tVc2VyIiwiZ2V0QmxvY2tMaXN0VXNlcnMiLCJjaGVja0NvdW50cnlCbG9jayIsImJsb2NrU2VydmljZSIsIkNhcnRTZXJ2aWNlIiwiZ2V0Q2FydEJ5VXNlciIsImV4aXN0Q2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsImNhcnRTZXJ2aWNlIiwiQ29tbWVudFNlcnZpY2UiLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiLCJjb21tZW50U2VydmljZSIsImdsb2JhbENvbmZpZyIsInNldEdsb2JhbENvbmZpZyIsIkNvb2tpZVNlcnZpY2UiLCJzZXRDb29raWUiLCJjbmFtZSIsImN2YWx1ZSIsImV4VGltZSIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImdldENvb2tpZSIsImRlY29kZWRDb29raWUiLCJjYSIsInNwbGl0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNvb2tpZVNlcnZpY2UiLCJFYXJuaW5nU2VydmljZSIsInBlcmZvcm1lclN0YXJ0cyIsInBlcmZvcm1lclNlYXJjaCIsImVhcm5pbmdTZXJ2aWNlIiwiRmVlZFNlcnZpY2UiLCJ1c2VyU2VhcmNoIiwidXNlckhvbWVGZWVkcyIsImZpbmRCeUlkIiwiZmluZE9uZSIsInVwbG9hZFBob3RvIiwidXBsb2FkVGh1bWJuYWlsIiwidXBsb2FkVmlkZW8iLCJ1cGxvYWRUZWFzZXIiLCJhZGRQb2xsIiwidm90ZVBvbGwiLCJwb2xsSWQiLCJnZXRCb29rbWFyayIsImZlZWRTZXJ2aWNlIiwiRm9sbG93U2VydmljZSIsImdldEZvbGxvd2VycyIsImdldEZvbGxvd2luZyIsImZvbGxvd1NlcnZpY2UiLCJHYWxsZXJ5U2VydmljZSIsInVzZXJWaWV3RGV0YWlscyIsImdldEJvb2ttYXJrcyIsImdhbGxlcnlTZXJ2aWNlIiwiTWVzc2FnZVNlcnZpY2UiLCJnZXRDb252ZXJzYXRpb25zIiwic2VhcmNoQ29udmVyc2F0aW9ucyIsImNyZWF0ZUNvbnZlcnNhdGlvbiIsImdldENvbnZlcnNhdGlvbkRldGFpbCIsImdldE1lc3NhZ2VzIiwiY29udmVyc2F0aW9uSWQiLCJzZW5kTWVzc2FnZSIsImNvdW50VG90YWxOb3RSZWFkIiwicmVhZEFsbEluQ29udmVyc2F0aW9uIiwiZ2V0TWVzc2FnZVVwbG9hZFVybCIsImdldENvbnZlcnNhdGlvbkJ5U3RyZWFtSWQiLCJzdHJlYW1JZCIsImdldFB1YmxpY01lc3NhZ2VzIiwic2VuZFN0cmVhbU1lc3NhZ2UiLCJzZW5kUHVibGljU3RyZWFtTWVzc2FnZSIsImZpbmRQdWJsaWNDb252ZXJzYXRpb25QZXJmb3JtZXIiLCJwZXJmb3JtZXJJZCIsImRlbGV0ZU1lc3NhZ2UiLCJkZWxldGVBbGxNZXNzYWdlSW5Db252ZXJzYXRpb24iLCJ1cGRhdGVDb252ZXJzYXRpb25OYW1lIiwibWVzc2FnZVNlcnZpY2UiLCJPcmRlclNlcnZpY2UiLCJ1cGRhdGVEZWxpdmVyeUFkZHJlc3MiLCJnZXREb3dubG9hZExpbmtEaWdpdGFsIiwicHJvZHVjdElkIiwib3JkZXJTZXJ2aWNlIiwiUGF5bWVudFNlcnZpY2UiLCJzdWJzY3JpYmVQZXJmb3JtZXIiLCJhZGRGdW5kcyIsImFwcGx5Q291cG9uIiwiY29kZSIsImNvbm5lY3RTdHJpcGVBY2NvdW50IiwiZ2V0U3RyaXBlQ2FyZHMiLCJhZGRTdHJpcGVDYXJkIiwicmVtb3ZlU3RyaXBlQ2FyZCIsInJldHJpZXZlU3RyaXBlQWNjb3VudCIsImxvZ2luTGluayIsInBheW1lbnRTZXJ2aWNlIiwiUGF5b3V0UmVxdWVzdFNlcnZpY2UiLCJjYWxjdWxhdGUiLCJkZXRhaWwiLCJwYXlvdXRSZXF1ZXN0U2VydmljZSIsIlBlcmZvcm1lclNlcnZpY2UiLCJyYW5kb21TZWFyY2giLCJnZXRBdmF0YXJVcGxvYWRVcmwiLCJnZXRDb3ZlclVwbG9hZFVybCIsImdldFZpZGVvVXBsb2FkVXJsIiwiZ2V0RG9jdW1lbnRVcGxvYWRVcmwiLCJ1cGRhdGVNZSIsImdldFRvcFBlcmZvcm1lciIsInVwZGF0ZUJhbmtpbmciLCJ1cGRhdGVQYXltZW50R2F0ZXdheSIsImdldEJvb2ttYXJrZWQiLCJ1cGxvYWREb2N1bWVudHMiLCJwZXJmb3JtZXJTZXJ2aWNlIiwiUGhvdG9TZXJ2aWNlIiwic2VhcmNoQnlVc2VyIiwic2VhcmNoQnlQZXJmb3JtZXIiLCJzZXRDb3ZlckdhbGxlcnkiLCJ1cGxvYWRJbWFnZXMiLCJzZWFyY2hQaG90b3NJbkdhbGxlcnkiLCJwaG90b1NlcnZpY2UiLCJQb3N0U2VydmljZSIsInBvc3RTZXJ2aWNlIiwiUHJvZHVjdFNlcnZpY2UiLCJjcmVhdGVQcm9kdWN0IiwidXNlclZpZXciLCJwcm9kdWN0U2VydmljZSIsIlJlYWN0aW9uU2VydmljZSIsInJlYWN0aW9uU2VydmljZSIsIlJlcG9ydFNlcnZpY2UiLCJyZXBvcnRTZXJ2aWNlIiwiU2VhcmNoU2VydmljZSIsInNlYXJjaEJ5S2V5d29yZCIsImxpc3RCeUtleXdvcmQiLCJzZWFyY2hTZXJ2aWNlIiwiU2V0dGluZ1NlcnZpY2UiLCJncm91cCIsImZvcmNlUmVsb2FkIiwic2V0dGluZ0dyb3VwIiwiX3NldHRpbmdzIiwiY29udGFjdCIsInNldHRpbmdTZXJ2aWNlIiwiU2hpcHBpbmdBZGRyZXNzU2VydmljZSIsInNoaXBwaW5nQWRkcmVzc1NlcnZpY2UiLCJTdHJlYW1TZXJ2aWNlIiwidXBkYXRlU3RyZWFtSW5mbyIsInVwZGF0ZVN0cmVhbUR1cmF0aW9uIiwiZ29MaXZlIiwiZWRpdExpdmUiLCJqb2luUHVibGljQ2hhdCIsImZldGNoQWdvcmFBcHBUb2tlbiIsInN0cmVhbVNlcnZpY2UiLCJTdWJzY3JpcHRpb25TZXJ2aWNlIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwiZ2F0ZXdheSIsInN1YnNjcmlwdGlvblNlcnZpY2UiLCJUb2tlblBhY2thZ2VTZXJ2aWNlIiwidG9rZW5QYWNrYWdlU2VydmljZSIsIlRva2VuVHJhbnNjdGlvblNlcnZpY2UiLCJzZW5kVGlwIiwicHVyY2hhc2VGZWVkIiwicHVyY2hhc2VQcm9kdWN0IiwicHVyY2hhc2VWaWRlbyIsInB1cmNoYXNlR2FsbGVyeSIsInB1cmNoYXNlTWVzc2FnZSIsInB1cmNoYXNlU3RyZWFtIiwidG9rZW5UcmFuc2N0aW9uU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwiVXRpbHNTZXJ2aWNlIiwiY291bnRyaWVzTGlzdCIsIl9jb3VudHJpZXMiLCJzdGF0ZXNMaXN0IiwiY291bnRyeUNvZGUiLCJjaXRpZXNMaXN0IiwibGFuZ3VhZ2VzTGlzdCIsInBob25lQ29kZXNMaXN0IiwiYm9keUluZm8iLCJ2ZXJpZnlSZWNhcHRjaGEiLCJ1dGlsc1NlcnZpY2UiLCJWaWRlb1NlcnZpY2UiLCJkZWxldGVGaWxlIiwidmlkZW9TZXJ2aWNlIiwicyIsIm9uRXJyb3IiLCJlbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmanMiLCJqcyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaGVh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OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCB7XG4gIEZvcm0sIElucHV0LCBCdXR0b24sIFJvdywgQ29sLCBEaXZpZGVyLCBMYXlvdXQsIG1lc3NhZ2UsIEdyaWRcbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBsb2dpbiwgbG9naW5TdWNjZXNzLCBsb2dpblNvY2lhbCB9IGZyb20gJ0ByZWR1eC9hdXRoL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXBkYXRlQ3VycmVudFVzZXIgfSBmcm9tICdAcmVkdXgvdXNlci9hY3Rpb25zJztcbmltcG9ydCB7IGF1dGhTZXJ2aWNlLCB1c2VyU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgSVNldHRpbmdzLCBJVUlDb25maWcgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFR3aXR0ZXJPdXRsaW5lZCwgR29vZ2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9iYXNlL2xvYWRlcic7XG5pbXBvcnQgJy4vYXV0aC9pbmRleC5sZXNzJztcbmltcG9ydCBHb29nbGVMb2dpbkJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9hdXRoL2dvb2dsZS1sb2dpbi1idXR0b24nO1xuaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdhbnRkJztcblxuXG5pbXBvcnQgeyB1cmwgfSBmcm9tICdpbnNwZWN0b3InO1xuXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBsb2dpbkF1dGg6IGFueTtcbiAgbG9naW46IEZ1bmN0aW9uO1xuICB1cGRhdGVDdXJyZW50VXNlcjogRnVuY3Rpb247XG4gIGxvZ2luU3VjY2VzczogRnVuY3Rpb247XG4gIGxvZ2luU29jaWFsOiBGdW5jdGlvbjtcbiAgdWk6IElVSUNvbmZpZztcbiAgc2V0dGluZ3M6IElTZXR0aW5ncztcbiAgb2F1dGhfdmVyaWZpZXI6IHN0cmluZztcbn1cblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcz4ge1xuICBzdGF0aWMgYXV0aGVudGljYXRlID0gZmFsc2U7XG5cbiAgc3RhdGljIGxheW91dCA9ICdibGFuayc7XG5cbiAgcmVjYXB0Y2hhU3VjY2VzcyA9IGZhbHNlO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBjdHggfSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jdHgucXVlcnlcbiAgICB9O1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgbG9naW5BczogJ3VzZXInLFxuICAgIGlzTG9hZGluZzogdHJ1ZVxuICB9O1xuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVkaXJlY3RMb2dpbigpO1xuICAgIHRoaXMuY2FsbGJhY2tUd2l0dGVyKCk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVMb2dpbih2YWx1ZXM6IGFueSkge1xuICAgIGNvbnN0IHsgbG9naW46IGhhbmRsZUxvZ2luIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBoYW5kbGVMb2dpbih2YWx1ZXMpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlVmVyaWZ5Q2FwY2hhKHJlc3A6IGFueSkge1xuICAgIGlmIChyZXNwPy5kYXRhPy5zdWNjZXNzKSB7XG4gICAgICB0aGlzLnJlY2FwdGNoYVN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY2FwdGNoYVN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkdvb2dsZUxvZ2luKHJlc3A6IGFueSkge1xuICAgIGlmICghcmVzcD8uY3JlZGVudGlhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGxvZ2luU29jaWFsOiBoYW5kbGVMb2dpbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxvZ2luQXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgdG9rZW5JZDogcmVzcC5jcmVkZW50aWFsLCByb2xlOiBsb2dpbkFzIH07XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChhd2FpdCBhdXRoU2VydmljZS5sb2dpbkdvb2dsZShwYXlsb2FkKSkuZGF0YTtcbiAgICAgIHJlc3BvbnNlLnRva2VuICYmIGhhbmRsZUxvZ2luKHsgdG9rZW46IHJlc3BvbnNlLnRva2VuIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgZTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3I/Lm1lc3NhZ2UgfHwgJ0dvb2dsZSBhdXRoZW50aWNhdGlvbiBsb2dpbiBmYWlsJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlZGlyZWN0TG9naW4oKSB7XG4gICAgY29uc3QgeyBsb2dpblN1Y2Nlc3M6IGhhbmRsZUxvZ2luLCB1cGRhdGVDdXJyZW50VXNlcjogaGFuZGxlVXBkYXRlVXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b2tlbiA9IGF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgaWYgKCF0b2tlbiB8fCB0b2tlbiA9PT0gJ251bGwnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXV0aFNlcnZpY2Uuc2V0VG9rZW4odG9rZW4pO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLm1lKHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgIH0pO1xuICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmRhdGEgfHwgIXVzZXIuZGF0YS5faWQpIHJldHVybjtcbiAgICAgIGhhbmRsZUxvZ2luKCk7XG4gICAgICBoYW5kbGVVcGRhdGVVc2VyKHVzZXIuZGF0YSk7XG4gICAgICB1c2VyLmRhdGEuaXNQZXJmb3JtZXJcbiAgICAgICAgPyBSb3V0ZXIucHVzaChcbiAgICAgICAgICB7IHBhdGhuYW1lOiAnL21vZGVsL3Byb2ZpbGUnLCBxdWVyeTogeyB1c2VybmFtZTogdXNlci5kYXRhLnVzZXJuYW1lIHx8IHVzZXIuZGF0YS5faWQgfSB9LFxuICAgICAgICAgIGAvJHt1c2VyLmRhdGEudXNlcm5hbWUgfHwgdXNlci5kYXRhLl9pZH1gXG4gICAgICAgIClcbiAgICAgICAgOiBSb3V0ZXIucHVzaCgnL2hvbWUnKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNhbGxiYWNrVHdpdHRlcigpIHtcbiAgICBjb25zdCB7IG9hdXRoX3ZlcmlmaWVyLCBsb2dpblNvY2lhbDogaGFuZGxlTG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHdpdHRlckluZm8gPSBhdXRoU2VydmljZS5nZXRUd2l0dGVyVG9rZW4oKTtcbiAgICBpZiAoIW9hdXRoX3ZlcmlmaWVyIHx8ICF0d2l0dGVySW5mby5vYXV0aFRva2VuIHx8ICF0d2l0dGVySW5mby5vYXV0aFRva2VuU2VjcmV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhdXRoID0gYXdhaXQgYXV0aFNlcnZpY2UuY2FsbGJhY2tMb2dpblR3aXR0ZXIoe1xuICAgICAgICBvYXV0aF92ZXJpZmllcixcbiAgICAgICAgb2F1dGhUb2tlbjogdHdpdHRlckluZm8ub2F1dGhUb2tlbixcbiAgICAgICAgb2F1dGhUb2tlblNlY3JldDogdHdpdHRlckluZm8ub2F1dGhUb2tlblNlY3JldCxcbiAgICAgICAgcm9sZTogdHdpdHRlckluZm8ucm9sZSB8fCAndXNlcidcbiAgICAgIH0pO1xuICAgICAgYXV0aC5kYXRhICYmIGF1dGguZGF0YS50b2tlbiAmJiBoYW5kbGVMb2dpbih7IHRva2VuOiBhdXRoLmRhdGEudG9rZW4gfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBlO1xuICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcj8ubWVzc2FnZSB8fCAnVHdpdHRlciBhdXRoZW50aWNhdGlvbiBsb2dpbiBmYWlsJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9naW5Ud2l0dGVyKCkge1xuICAgIGNvbnN0IHsgbG9naW5BcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAoYXdhaXQgYXV0aFNlcnZpY2UubG9naW5Ud2l0dGVyKCkpLmRhdGE7XG4gICAgICBpZiAocmVzcCAmJiByZXNwLnVybCkge1xuICAgICAgICBhdXRoU2VydmljZS5zZXRUd2l0dGVyVG9rZW4oeyBvYXV0aFRva2VuOiByZXNwLm9hdXRoVG9rZW4sIG9hdXRoVG9rZW5TZWNyZXQ6IHJlc3Aub2F1dGhUb2tlblNlY3JldCB9LCBsb2dpbkFzKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwLnVybDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IGU7XG4gICAgICBtZXNzYWdlLmVycm9yKGVycm9yPy5tZXNzYWdlIHx8ICdUd2l0dGVyIGF1dGhlbnRpY2F0aW9uIGxvZ2luIGZhaWwnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdWksIHNldHRpbmdzLCBsb2dpbkF1dGggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnt1aSAmJiB1aS5zaXRlTmFtZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e3NldHRpbmdzICYmIHNldHRpbmdzLm1ldGFLZXl3b3Jkc30gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtzZXR0aW5ncyAmJiBzZXR0aW5ncy5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgey8qIE9HIHRhZ3MgKi99XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt1aSAmJiB1aS5zaXRlTmFtZX0gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17dWkgJiYgdWkubG9nb30gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17c2V0dGluZ3MgJiYgc2V0dGluZ3MubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIHsvKiBUd2l0dGVyIHRhZ3MgKi99XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3VpICYmIHVpLnNpdGVOYW1lfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17dWkgJiYgdWkubG9nb30gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3NldHRpbmdzICYmIHNldHRpbmdzLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIFwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjBcIn19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMTAwdmhcIn19PlxuICAgICAgICAgICAgPFJvdyBzdHlsZT17e2hlaWdodDogXCIxMDB2aFwifX0+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3BhZGRpbmc6IFwiMFwifX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXctbG9naW4tbGVmdC13cmFwcGVyJz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXctbG9nbyc+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2xvZ28td2hpdGUucG5nXCIgYWx0PVwiRm9vZGllIGZhbnMgTG9nb1wiIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2xvZ2luLXBhZ2UvbGVmdC1tYWluLWltZy5wbmdcIiBhbHQ9XCJGb29kaWVmYW5zIGxvZ2luIHBhZ2VcIiAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWxvZ2luLWxlZnQtY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGgxPllvdXIgY3VsaW5hcnkgYWR2ZW50dXJlPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT4gc3RhcnRzIGhlcmUuPC9zcGFuPjwvaDE+XG4gICAgICAgICAgICAgICAgPHA+U2lnbiBpbiBhbmQgbGV04oCZcyBjb29rIHNvbWV0aGluZyBleHRyYW9yZGluYXJ5IHRvZ2V0aGVyITwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3twYWRkaW5nOiBcIjBcIn19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+TG9naW4gZm9ybTwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1ib3hcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1jb250ZW50IGxlZnRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3VpLmxvZ2luUGxhY2Vob2xkZXJJbWFnZSA/IHsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dWkubG9naW5QbGFjZWhvbGRlckltYWdlfSlgIH0gOiBudWxsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250ZW50IHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj57dWkubG9nbyA/IDxpbWcgYWx0PVwibG9nb1wiIHNyYz17dWkubG9nb30gaGVpZ2h0PVwiODBweFwiIC8+IDogdWkuc2l0ZU5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+U2lnbiB1cCB0byBtYWtlIG1vbmV5IGFuZCBpbnRlcmFjdCB3aXRoIHlvdXIgZmFucyE8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshc2V0dGluZ3MudHdpdHRlckNsaWVudElkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMubG9naW5Ud2l0dGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHdpdHRlci1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgTE9HIElOIC8gU0lHTiBVUCBXSVRIIFRXSVRURVJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkPXtzZXR0aW5ncy5nb29nbGVDbGllbnRJZH1cbiAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3RoaXMub25Hb29nbGVMb2dpbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5vbkdvb2dsZUxvZ2luLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyPk9yPC9EaXZpZGVyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vcm1hbF9sb2dpblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXt0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyPXtbJ29uQ2hhbmdlJywgJ29uQmx1ciddfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnRW1haWwgb3IgVXNlcm5hbWUgaXMgbWlzc2luZycgfV19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVkPXtsb2dpbkF1dGgucmVxdWVzdGluZyB8fCBpc0xvYWRpbmd9IHBsYWNlaG9sZGVyPVwiRW1haWwgb3IgVXNlcm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXI9e1snb25DaGFuZ2UnLCAnb25CbHVyJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZCEnIH1dfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBkaXNhYmxlZD17bG9naW5BdXRoLnJlcXVlc3RpbmcgfHwgaXNMb2FkaW5nfSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBwYWRkaW5nOiAnMCAyMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9hdXRoL2ZvcmdvdC1wYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic3ViLXRleHRcIj5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogPEdvb2dsZVJlQ2FwdGNoYSB1aT17dWl9IGhhbmRsZVZlcmlmeT17dGhpcy5oYW5kbGVWZXJpZnlDYXBjaGEuYmluZCh0aGlzKX0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9naW5BdXRoLnJlcXVlc3RpbmcgfHwgaXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2dpbkF1dGgucmVxdWVzdGluZyB8fCBpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIExPRyBJTlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFZpc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGFnZS9oZWxwXCI+SGVscCBDZW50ZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBhbnkgaGVscCBpZiB5b3UgYXJlIG5vdCBhYmxlIHRvIGxvZ2luIHdpdGggeW91clxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dWk/LnNpdGVOYW1lIHx8ICdGYW5zbyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN0eWxlPXt7IG1hcmdpbjogJzE1cHggMCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fT5Eb24mYXBvczt0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiB1cCBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dWk/LnNpdGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRlciAvPn1cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVzVG9Qcm9wcyA9IChzdGF0ZTogYW55KSA9PiAoe1xuICB1aTogeyAuLi5zdGF0ZS51aSB9LFxuICBzZXR0aW5nczogeyAuLi5zdGF0ZS5zZXR0aW5ncyB9LFxuICBsb2dpbkF1dGg6IHsgLi4uc3RhdGUuYXV0aC5sb2dpbkF1dGggfVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9naW4sXG4gIGxvZ2luU29jaWFsLFxuICBsb2dpblN1Y2Nlc3MsXG4gIHVwZGF0ZUN1cnJlbnRVc2VyXG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXNUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR29vZ2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgdXNlR29vZ2xlTG9naW4gZnJvbSAnQGxpYi9ob29rL3VzZS1nb29nbGUtbG9naW4nO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0ICcuL2dvb2dsZS1sb2dpbi1idXR0b24ubGVzcyc7XG5cbmNvbnN0IHsgVGV4dCB9ID0gVHlwb2dyYXBoeTtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIG9uU3VjY2VzczogRnVuY3Rpb247XG4gIG9uRmFpbHVyZTogRnVuY3Rpb247XG59XG5jb25zdCBHb29nbGVMb2dpbkJ1dHRvbiA9ICh7IGNsaWVudElkLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSB9OiBJUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaWduSW4sIGxvYWRlZCwgcmVuZGVyQnV0dG9uU2lnbkluIH0gPSB1c2VHb29nbGVMb2dpbih7XG4gICAgY2xpZW50SWQsXG4gICAgb25TdWNjZXNzLFxuICAgIG9uRmFpbHVyZSxcbiAgICBvblNjcmlwdExvYWRGYWlsdXJlOiBvbkZhaWx1cmVcbiAgfSk7XG5cbiAgY29uc3QgW2NsaWNrZWRPbkdvb2dsZUxvZ2luQnV0dG9uLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBsb2dpbldpdGhHb29nbGUgPSAoKSA9PiB7XG4gICAgc2V0Q2xpY2tlZCh0cnVlKTtcbiAgICBzaWduSW4oKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjbGlja2VkT25Hb29nbGVMb2dpbkJ1dHRvbikge1xuICAgICAgcmVuZGVyQnV0dG9uU2lnbkluKCk7XG4gICAgfVxuICB9LCBbY2xpY2tlZE9uR29vZ2xlTG9naW5CdXR0b25dKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWNsaWVudElkIHx8ICFsb2FkZWR9IG9uQ2xpY2s9eygpID0+IGxvZ2luV2l0aEdvb2dsZSgpfSBjbGFzc05hbWU9XCJnb29nbGUtYnV0dG9uXCI+XG4gICAgICAgIDxHb29nbGVPdXRsaW5lZCAvPlxuICAgICAgICB7JyAnfVxuICAgICAgICBMT0cgSU4gLyBTSUdOIFVQIFdJVEggR09PR0xFXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtjbGlja2VkT25Hb29nbGVMb2dpbkJ1dHRvbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdvb2dsZS1sb2dpbi1ib3hcIj5cbiAgICAgICAgICA8VGV4dCB0eXBlPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBJZiBubyBwcm9tcHQgYXBwZWFycyBqdXN0IGNsaWNrIHRoZSBidXR0b24gYmVsbG93IHRvIHN0YXJ0IHRoZSBhdXRoZW50aWNhdGlvbiBmbG93OlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8ZGl2IGlkPVwiYnRuTG9naW5XaXRoR29vZ2xlXCIgY2xhc3NOYW1lPVwiYnRuLWdvb2dsZS1sb2dpblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUxvZ2luQnV0dG9uO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgSVVJQ29uZmlnIH0gZnJvbSAnQGludGVyZmFjZXMvaW5kZXgnO1xuaW1wb3J0ICcuL2xvYWRlci5sZXNzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHVpOiBJVUlDb25maWcsXG4gIGN1c3RvbVRleHQ/OiBzdHJpbmc7XG59XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFB1cmVDb21wb25lbnQ8SVByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVpLCBjdXN0b21UZXh0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICB7dWkubG9nbyA/IDxpbWcgYWx0PVwibG9hZGluZy1pY29cIiBzcmM9e3VpLmxvZ299IC8+IDogdWkuc2l0ZU5hbWUgPyA8c3Bhbj57dWkuc2l0ZU5hbWV9PC9zcGFuPiA6IDxTcGluIHNpemU9XCJsYXJnZVwiIC8+fVxuICAgICAgICAgIHtjdXN0b21UZXh0ICYmIDxwPntjdXN0b21UZXh0fTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgbWFwU3RhdGVzVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdWk6IHsgLi4uc3RhdGUudWkgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlc1RvUHJvcHMpKExvYWRlcik7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9hZFNjcmlwdCB9IGZyb20gJ3N0YXRpYy9saWIvbG9hZC1zY3JpcHQnO1xuaW1wb3J0IHsgcmVtb3ZlU2NyaXB0IH0gZnJvbSAnc3RhdGljL2xpYi9yZW1vdmUtc2NyaXB0JztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIG9uU3VjY2VzczogRnVuY3Rpb247XG4gIG9uRmFpbHVyZTogRnVuY3Rpb247XG4gIG9uU2NyaXB0TG9hZEZhaWx1cmU/OiBGdW5jdGlvbjtcbiAgYXV0b0xvYWQ/OiBib29sZWFuO1xuICBqc1NyYz86IHN0cmluZztcbn1cblxuY29uc3QgdXNlR29vZ2xlTG9naW4gPSAoe1xuICBvblN1Y2Nlc3MgPSBGdW5jdGlvbixcbiAgb25GYWlsdXJlID0gRnVuY3Rpb24sXG4gIG9uU2NyaXB0TG9hZEZhaWx1cmUsXG4gIGNsaWVudElkLFxuICBhdXRvTG9hZCxcbiAganNTcmMgPSAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnQnXG59OiBJUHJvcHMpID0+IHtcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTaWduaW5TdWNjZXNzKHJlcykge1xuICAgIG9uU3VjY2VzcyhyZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lnbkluKGUgPSBudWxsKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGxvYWRlZCkge1xuICAgICAgY29uc3QgZ29vZ2xlID0gKHdpbmRvdyBhcyBhbnkpLmdvb2dsZTtcbiAgICAgIGdvb2dsZS5hY2NvdW50cy5pZC5wcm9tcHQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJCdXR0b25TaWduSW4oZSA9IG51bGwpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAobG9hZGVkKSB7XG4gICAgICBjb25zdCBnb29nbGUgPSAod2luZG93IGFzIGFueSkuZ29vZ2xlO1xuICAgICAgZ29vZ2xlLmFjY291bnRzLmlkLnJlbmRlckJ1dHRvbihcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkxvZ2luV2l0aEdvb2dsZScpLCAvLyBFbnN1cmUgdGhlIGVsZW1lbnQgZXhpc3QgYW5kIGl0IGlzIGEgZGl2IHRvIGRpc3BsYXkgY29ycmVjY3RseVxuICAgICAgICB7IHRoZW1lOiAnb3V0bGluZScsIHNpemU6ICdsYXJnZScgfSAvLyBDdXN0b21pemF0aW9uIGF0dHJpYnV0ZXNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdW5tb3VudGVkID0gZmFsc2U7XG4gICAgY29uc3Qgb25Mb2FkRmFpbHVyZSA9IG9uU2NyaXB0TG9hZEZhaWx1cmUgfHwgb25GYWlsdXJlO1xuICAgIGxvYWRTY3JpcHQoXG4gICAgICBkb2N1bWVudCxcbiAgICAgICdzY3JpcHQnLFxuICAgICAgJ2dvb2dsZS1sb2dpbicsXG4gICAgICBqc1NyYyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgZ29vZ2xlID0gKHdpbmRvdyBhcyBhbnkpLmdvb2dsZTtcbiAgICAgICAgZ29vZ2xlLmFjY291bnRzLmlkLmluaXRpYWxpemUoe1xuICAgICAgICAgIGNsaWVudF9pZDogY2xpZW50SWQsXG4gICAgICAgICAgY2FsbGJhY2s6IGRhdGEgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU2lnbmluU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXVubW91bnRlZCkge1xuICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIG9uTG9hZEZhaWx1cmUoZXJyKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHVubW91bnRlZCA9IHRydWU7XG4gICAgICByZW1vdmVTY3JpcHQoZG9jdW1lbnQsICdnb29nbGUtbG9naW4nKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0b0xvYWQpIHtcbiAgICAgIHNpZ25JbigpO1xuICAgIH1cbiAgfSwgW2xvYWRlZF0pO1xuXG4gIHJldHVybiB7IHNpZ25JbiwgbG9hZGVkLCByZW5kZXJCdXR0b25TaWduSW4gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUdvb2dsZUxvZ2luO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbmltcG9ydCB7XG4gIHJlZHVjZSwgaXNBcnJheSwgaXNFbXB0eSwgZmxhdHRlblxufSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyB0YWtlTGF0ZXN0LCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBjcmVhdGVBY3Rpb24gYXMgUmVkdXhDcmVhdGVBY3Rpb24sXG4gIGhhbmRsZUFjdGlvbnMgYXMgaGFuZGxlUmVkdXhBY3Rpb25zLFxuICBBY3Rpb25cbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkZ1bmN0aW9uMTxUMSwgUj4gPSAodDE/OiBUMSkgPT4gUjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPlxuICBleHRlbmRzIEFjdGlvbkZ1bmN0aW9uMTxQYXlsb2FkLCBBY3Rpb248UGF5bG9hZD4+IHtcbiAgaXM6ICh0eXBlOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxQYXlsb2FkID0gYW55Pih0eXBlOiBzdHJpbmcpOiBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPiB7XG4gIGNvbnN0IGFjdGlvbiA9IFJlZHV4Q3JlYXRlQWN0aW9uPFBheWxvYWQ+KHR5cGUpIGFzIEFjdGlvbkZ1bmN0aW9uPFBheWxvYWQ+O1xuICBhY3Rpb24uaXMgPSAoYVR5cGU6IHN0cmluZykgPT4gYWN0aW9uLnRvU3RyaW5nKCkgPT09IGFUeXBlO1xuICByZXR1cm4gYWN0aW9uO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uKGFjdGlvbjogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFthY3Rpb25dOiBjcmVhdGVBY3Rpb24odHlwZSksXG4gICAgW2Ake2FjdGlvbn1TdWNjZXNzYF06IGNyZWF0ZUFjdGlvbihgJHt0eXBlfV9TVUNDRVNTYCksXG4gICAgW2Ake2FjdGlvbn1GYWlsYF06IGNyZWF0ZUFjdGlvbihgJHt0eXBlfV9GQUlMYClcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNBY3Rpb25zPFxuICBBY3Rpb25EYXRhID0gYW55LFxuICBTdWNjZXNzRGF0YSA9IGFueSxcbiAgRXJyb3JEYXRhID0gRXJyb3Jcbj4oXG4gIHR5cGU6IHN0cmluZ1xuKTogW1xuICBBY3Rpb25GdW5jdGlvbjxBY3Rpb25EYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248U3VjY2Vzc0RhdGE+LFxuICBBY3Rpb25GdW5jdGlvbjxFcnJvckRhdGE+XG5dIHtcbiAgcmV0dXJuIFtcbiAgICBjcmVhdGVBY3Rpb248QWN0aW9uRGF0YT4odHlwZSksXG4gICAgY3JlYXRlQWN0aW9uPFN1Y2Nlc3NEYXRhPihgJHt0eXBlfV9TVUNDRVNTYCksXG4gICAgY3JlYXRlQWN0aW9uPEVycm9yRGF0YT4oYCR7dHlwZX1fRkFJTGApXG4gIF07XG59XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5mdW5jdGlvbiBoYW5kbGVBY3Rpb25zKGFjdGlvbnM6IGFueSwgaW5pdGlhbFN0YXRlOiBhbnkpIHtcbiAgcmV0dXJuIGhhbmRsZVJlZHV4QWN0aW9ucyhcbiAgICByZWR1Y2UoXG4gICAgICBhY3Rpb25zLFxuICAgICAgKHJlZHVjZXI6IGFueSwgaGFuZGxlciwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHJlZHVjZXJbYWN0aW9uXSA9IChzdGF0ZTogYW55LCBhY3Q6IGFueSkgPT4gaGFuZGxlcihzdGF0ZS5zZXQoJ2FjdGlvbicsIGFjdGlvbiksIGFjdCk7XG4gICAgICAgIHJldHVybiByZWR1Y2VyO1xuICAgICAgfSxcbiAgICAgIHt9XG4gICAgKSxcbiAgICBpbml0aWFsU3RhdGVcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVkdWNlcnMoXG4gIHN0YXRlQ29udGV4dDogc3RyaW5nLFxuICByZWR1Y2VyczogYW55W10sXG4gIGluaXRpYWxTdGF0ZTogYW55LFxuICBwcmV2ZW50UmVzZXR0aW5nOiBib29sZWFuID0gZmFsc2Vcbik6IGFueSB7XG4gIHJldHVybiB7XG4gICAgW3N0YXRlQ29udGV4dF06IGhhbmRsZVJlZHV4QWN0aW9ucyhcbiAgICAgIHJlZHVjZShcbiAgICAgICAgZmxhdHRlbihyZWR1Y2VycyksXG4gICAgICAgIChyZWR1Y2VyOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoYWN0aW9uLm9uKSkge1xuICAgICAgICAgICAgYWN0aW9uLm9uLmZvckVhY2goKGFjdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJlZHVjZXJbYWN0XSA9IGFjdGlvbi5yZWR1Y2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHJlZHVjZXJbYWN0aW9uLm9uXSA9IGFjdGlvbi5yZWR1Y2VyO1xuICAgICAgICAgIHJldHVybiByZWR1Y2VyO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50UmVzZXR0aW5nXG4gICAgICAgICAgPyB7fVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgQVBQX1NUQVRFX1JFU0VUOiAoKSA9PiBpbml0aWFsU3RhdGVcbiAgICAgICAgICB9XG4gICAgICApLFxuICAgICAgaW5pdGlhbFN0YXRlXG4gICAgKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2FnYXMoc2FnYXM6IGFueVtdKTogYW55W10ge1xuICByZXR1cm4gZmxhdHRlbihzYWdhcykubWFwKChzYWdhOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uLCBlZmZlY3QgPSB0YWtlTGF0ZXN0LCB3b3JrZXIgfSA9IHNhZ2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKiAoKSB7XG4gICAgICB5aWVsZCBlZmZlY3Qob24sIGZ1bmN0aW9uKiAoYWN0aW9uOiBhbnkpIHtcbiAgICAgICAgeWllbGQgZGVsYXkoMCk7XG4gICAgICAgIHlpZWxkIHdvcmtlcihhY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yc0EoY29udGV4dDogc3RyaW5nLCBrZXlzOiBhbnlbXSA9IFtdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICBpZiAoaXNFbXB0eShrZXlzKSkgcmV0dXJuIHN0YXRlU2VsZWN0b3I7XG5cbiAgcmV0dXJuIGtleXMubWFwKChrZXk6IGFueSkgPT4gKHN0YXRlOiBhbnkpID0+IChpc0FycmF5KGtleSlcbiAgICA/IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldEluKGtleSlcbiAgICA6IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldChrZXkpKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ycyhjb250ZXh0OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICByZXR1cm4gcmVkdWNlKFxuICAgIGtleXMsXG4gICAgKHNlbGVjdG9yczogYW55LCBrZXkpID0+IHtcbiAgICAgIHNlbGVjdG9yc1tgJHtrZXl9U2VsZWN0b3JgXSA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVKU1NlbGVjdG9ycyhjb250ZXh0OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICByZXR1cm4gcmVkdWNlKFxuICAgIGtleXMsXG4gICAgKHNlbGVjdG9yczogYW55LCBrZXkpID0+IHtcbiAgICAgIHNlbGVjdG9yc1tgJHtrZXl9U2VsZWN0b3JgXSA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVNlbGVjdG9yKHN0YXRlKVtrZXldO1xuICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICB9LFxuICAgIHt9XG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFjdGlvbixcbiAgY3JlYXRlQXN5bmNBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9ucyxcbiAgY3JlYXRlU2VsZWN0b3JzQSxcbiAgaGFuZGxlQWN0aW9ucyxcbiAgY3JlYXRlUmVkdWNlcnMsXG4gIGNyZWF0ZVNlbGVjdG9ycyxcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNyZWF0ZUpTU2VsZWN0b3JzXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCByZWdleCA9IC8oaHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJSFcXC1cXC9dKSk/LztcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbChlbWFpbDogc3RyaW5nKSB7XG4gIHJldHVybiAvXlthLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLy50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVXVpZCA9ICgpID0+ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwO1xuICAgIGNvbnN0IHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbn0pIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24sIGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWwgfSA9IGNyZWF0ZUFzeW5jQWN0aW9uKFxuICAnbG9naW4nLFxuICAnTE9HSU4nXG4pO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpblBlcmZvcm1lciB9ID0gY3JlYXRlQXN5bmNBY3Rpb24oXG4gICdsb2dpblBlcmZvcm1lcicsXG4gICdMT0dJTlBFUkZPUk1FUidcbik7XG5cbmV4cG9ydCBjb25zdCB7IGxvZ2luU29jaWFsIH0gPSBjcmVhdGVBc3luY0FjdGlvbihcbiAgJ2xvZ2luU29jaWFsJyxcbiAgJ0xPR0lOU09DSUFMJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHsgcmVnaXN0ZXJGYW4sIHJlZ2lzdGVyRmFuU3VjY2VzcywgcmVnaXN0ZXJGYW5GYWlsIH0gPSBjcmVhdGVBc3luY0FjdGlvbihcbiAgJ3JlZ2lzdGVyRmFuJyxcbiAgJ1JFR0lTVEVSRkFOJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHsgcmVnaXN0ZXJQZXJmb3JtZXIsIHJlZ2lzdGVyUGVyZm9ybWVyU3VjY2VzcywgcmVnaXN0ZXJQZXJmb3JtZXJGYWlsIH0gPSBjcmVhdGVBc3luY0FjdGlvbihcbiAgJ3JlZ2lzdGVyUGVyZm9ybWVyJyxcbiAgJ1JFR0lTVEVSUEVSRk9STUVSJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHsgZm9yZ290LCBmb3Jnb3RTdWNjZXNzLCBmb3Jnb3RGYWlsIH0gPSBjcmVhdGVBc3luY0FjdGlvbihcbiAgJ2ZvcmdvdCcsXG4gICdGT1JHT1QnXG4pO1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gY3JlYXRlQWN0aW9uKCdsb2dvdXQnKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gY3JlYXRlQWN0aW9uKCdnZXRDdXJyZW50VXNlcicpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBjcmVhdGVBc3luY0FjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFVzZXIgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRVc2VyJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFVzZXJBdmF0YXIgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRVc2VyQXZhdGFyJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFVzZXJDb3ZlciA9IGNyZWF0ZUFjdGlvbigndXBkYXRlQ3VycmVudFVzZXJDb3ZlcicpO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVVc2VyLFxuICB1cGRhdGVVc2VyU3VjY2VzcyxcbiAgdXBkYXRlVXNlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlVXNlcicsICdVUERBVEVfVVNFUicpO1xuXG5leHBvcnQgY29uc3QgeyB1cGRhdGVQZXJmb3JtZXIgfSA9IGNyZWF0ZUFzeW5jQWN0aW9uKFxuICAndXBkYXRlUGVyZm9ybWVyJyxcbiAgJ1VQREFURV9QRVJGT1JNRVInXG4pO1xuXG5leHBvcnQgY29uc3Qgc2V0VXBkYXRpbmcgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0aW5nVXNlcicpO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVQYXNzd29yZCxcbiAgdXBkYXRlUGFzc3dvcmRTdWNjZXNzLFxuICB1cGRhdGVQYXNzd29yZEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlUGFzc3dvcmQnLCAnVVBEQVRFX1BBU1NXT1JEJyk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCYWxhbmNlID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVCYWxhbmNlJyk7XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgaXNVcmwgfSBmcm9tIFwiQGxpYi9zdHJpbmdcIjtcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNwb25zZTxUPiB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBkYXRhOiBUO1xufVxuXG5leHBvcnQgY29uc3QgVE9LRU4gPSBcInRva2VuXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBUElSZXF1ZXN0IHtcbiAgc3RhdGljIHRva2VuOiBzdHJpbmcgPSBcIlwiO1xuXG4gIHNldEF1dGhIZWFkZXJUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgQVBJUmVxdWVzdC50b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgSlNPTiByZXR1cm5lZCBieSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgIFRoZSBwYXJzZWQgSlNPTiBmcm9tIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwcml2YXRlIHBhcnNlSlNPTihyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIG5ldHdvcmsgcmVxdWVzdCBjYW1lIGJhY2sgZmluZSwgYW5kIHRocm93cyBhbiBlcnJvciBpZiBub3RcbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSAgIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R8dW5kZWZpbmVkfSBSZXR1cm5zIGVpdGhlciB0aGUgcmVzcG9uc2UsIG9yIHRocm93cyBhbiBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja1N0YXR1cyhyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBsb2dpbiFcIik7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkgYXMgYW55O1xuICAgIC8vIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgLy8gdGhyb3cgZXJyb3I7XG4gICAgdGhyb3cgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCk7XG4gIH1cblxuICByZXF1ZXN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZD86IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCB2ZXJiID0gKG1ldGhvZCB8fCBcImdldFwiKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHVwZGF0ZWRIZWFkZXIgPSB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IEFQSVJlcXVlc3QudG9rZW4gfHwgY29va2llLmdldChUT0tFTikgfHwgbnVsbCxcbiAgICAgIC4uLihoZWFkZXJzIHx8IHt9KSxcbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGNvbnN0IGJhc2VVcmwgPVxuICAgICAgY29uZmlnLkFQSV9FTkRQT0lOVCB8fFxuICAgICAgY29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCB8fFxuICAgICAgcHJvY2Vzcy5lbnYuQVBJX0VORFBPSU5UO1xuICAgIGNvbnN0IGFwaVVybCA9IGlzVXJsKHVybClcbiAgICAgID8gdXJsXG4gICAgICA6IGAke2Jhc2VVcmx9JHt1cmwuc3RhcnRzV2l0aChcIi9cIikgPyB1cmwgOiBgLyR7dXJsfWB9YDtcblxuICAgIHJldHVybiBmZXRjaChhcGlVcmwsIHtcbiAgICAgIG1ldGhvZDogdmVyYixcbiAgICAgIGhlYWRlcnM6IHVwZGF0ZWRIZWFkZXIsXG4gICAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBudWxsLFxuICAgIH0pXG4gICAgICAudGhlbih0aGlzLmNoZWNrU3RhdHVzKVxuICAgICAgLnRoZW4odGhpcy5wYXJzZUpTT04pO1xuICB9XG5cbiAgYnVpbGRVcmwoYmFzZVVybDogc3RyaW5nLCBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHJldHVybiBiYXNlVXJsO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgLm1hcCgoaykgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNba10pKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmFtc1trXVxuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgKHBhcmFtKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtKX1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuam9pbihcIiZcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tdKX1gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKFwiJlwiKTtcbiAgICByZXR1cm4gYCR7YmFzZVVybH0/JHtxdWVyeVN0cmluZ31gO1xuICB9XG5cbiAgZ2V0KHVybDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBcImdldFwiLCBudWxsLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIFwicG9zdFwiLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHB1dCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgXCJwdXRcIiwgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBkZWwodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIFwiZGVsZXRlXCIsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBsb2FkKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGZpbGVzOiB7XG4gICAgICBmaWxlOiBGaWxlO1xuICAgICAgZmllbGRuYW1lOiBzdHJpbmc7XG4gICAgfVtdLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uO1xuICAgICAgY3VzdG9tRGF0YT86IFJlY29yZDxhbnksIGFueT47XG4gICAgICBtZXRob2Q/OiBzdHJpbmc7XG4gICAgfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fSxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfVxuICApIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBjb25zdCB1cGxvYWRVcmwgPSBpc1VybCh1cmwpXG4gICAgICA/IHVybFxuICAgICAgOiBgJHtjb25maWcuQVBJX0VORFBPSU5UIHx8IGNvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZpbGVzLmZvckVhY2goKGYpID0+IGZvcm1EYXRhLmFwcGVuZChmLmZpZWxkbmFtZSwgZi5maWxlLCBmLmZpbGUubmFtZSkpO1xuICAgICAgb3B0aW9ucy5jdXN0b21EYXRhICYmXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuY3VzdG9tRGF0YSkuZm9yRWFjaCgoZmllbGRuYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICAhQXJyYXkuaXNBcnJheShvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSlcbiAgICAgICAgICApXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoZmllbGRuYW1lLCBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdLmxlbmd0aCkge1xuICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICBpIDwgb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGkgKz0gMVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoZmllbGRuYW1lLCBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXVtpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gXCJqc29uXCI7XG4gICAgICByZXEub3BlbihvcHRpb25zLm1ldGhvZCB8fCBcIlBPU1RcIiwgdXBsb2FkVXJsKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IEFQSVJlcXVlc3QudG9rZW4gfHwgY29va2llLmdldChUT0tFTik7XG4gICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgdG9rZW4gfHwgXCJcIik7XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7XG4gIElMb2dpbiwgSUZhblJlZ2lzdGVyLCBJRm9yZ290LCBJVmVyaWZ5RW1haWxcbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgVE9LRU4gfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHB1YmxpYyBhc3luYyBsb2dpbihkYXRhOiBJTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9sb2dpbicsIGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGxvZ2luVHdpdHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvYXV0aC90d2l0dGVyL2xvZ2luJylcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGxvZ2luR29vZ2xlKGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL2dvb2dsZS9sb2dpbicsIGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNhbGxiYWNrTG9naW5Ud2l0dGVyKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvYXV0aC90d2l0dGVyL2NhbGxiYWNrJywgZGF0YSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHZlcmlmeUVtYWlsKGRhdGE6IElWZXJpZnlFbWFpbCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL2VtYWlsLXZlcmlmaWNhdGlvbicsIGRhdGEpO1xuICB9XG5cbiAgc2V0VG9rZW4odG9rZW46IHN0cmluZywgcmVtZW1iZXIgPSB0cnVlKTogdm9pZCB7XG4gICAgY29uc3QgZXhwaXJlZCA9IHsgZXhwaXJlczogIXJlbWVtYmVyID8gMSA6IDM2NSB9O1xuICAgIGNvb2tpZS5zZXQoVE9LRU4sIHRva2VuLCBleHBpcmVkKTtcbiAgICB0aGlzLnNldEF1dGhIZWFkZXJUb2tlbih0b2tlbik7XG4gIH1cblxuICBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb29raWUuZ2V0KFRPS0VOKTtcbiAgfVxuXG4gIHNldFR3aXR0ZXJUb2tlbihkYXRhOiBhbnksIHJvbGU6IHN0cmluZykge1xuICAgIGNvb2tpZS5zZXQoJ29hdXRoVG9rZW4nLCBkYXRhLm9hdXRoVG9rZW4sIHsgZXhwaXJlczogMSB9KTtcbiAgICBjb29raWUuc2V0KCdvYXV0aFRva2VuU2VjcmV0JywgZGF0YS5vYXV0aFRva2VuU2VjcmV0LCB7IGV4cGlyZXM6IDEgfSk7XG4gICAgY29va2llLnNldCgncm9sZScsIHJvbGUsIHsgZXhwaXJlczogMSB9KTtcbiAgfVxuXG4gIGdldFR3aXR0ZXJUb2tlbigpIHtcbiAgICBjb25zdCBvYXV0aFRva2VuID0gY29va2llLmdldCgnb2F1dGhUb2tlbicpO1xuICAgIGNvbnN0IG9hdXRoVG9rZW5TZWNyZXQgPSBjb29raWUuZ2V0KCdvYXV0aFRva2VuU2VjcmV0Jyk7XG4gICAgY29uc3Qgcm9sZSA9IGNvb2tpZS5nZXQoJ3JvbGUnKTtcbiAgICByZXR1cm4geyBvYXV0aFRva2VuLCBvYXV0aFRva2VuU2VjcmV0LCByb2xlIH07XG4gIH1cblxuICByZW1vdmVUb2tlbigpOiB2b2lkIHtcbiAgICBjb29raWUucmVtb3ZlKFRPS0VOKTtcbiAgfVxuXG4gIHVwZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcsIHNvdXJjZT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL2F1dGgvdXNlcnMvbWUvcGFzc3dvcmQnLCB7IHBhc3N3b3JkLCBzb3VyY2UgfSk7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKGRhdGE6IElGb3Jnb3QpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC91c2Vycy9mb3Jnb3QnLCBkYXRhKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKGRhdGE6IElGYW5SZWdpc3Rlcikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL3JlZ2lzdGVyJywgZGF0YSk7XG4gIH1cblxuICByZWdpc3RlclBlcmZvcm1lcihkb2N1bWVudHM6IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIGZpZWxkbmFtZTogc3RyaW5nO1xuICB9W10sIGRhdGE6IGFueSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKCcvYXV0aC9wZXJmb3JtZXJzL3JlZ2lzdGVyJywgZG9jdW1lbnRzLCB7XG4gICAgICBvblByb2dyZXNzLFxuICAgICAgY3VzdG9tRGF0YTogZGF0YVxuICAgIH0pO1xuICB9XG5cbiAgdXNlclN3aXRjaFRvUGVyZm9ybWVyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2F1dGgvdXNlcnMvJHt1c2VySWR9L3N3aXRjaC10by1wZXJmb3JtZXJgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElCYW5uZXJTZWFyY2ggfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBCYW5uZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeTogSUJhbm5lclNlYXJjaCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc2l0ZS1wcm9tby9zZWFyY2gnLCBxdWVyeSBhcyBhbnkpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYmFubmVyU2VydmljZSA9IG5ldyBCYW5uZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgYmxvY2tDb3VudHJpZXMocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lci1ibG9ja3MvY291bnRyaWVzJywgcGF5bG9hZCk7XG4gIH1cblxuICBibG9ja1VzZXIocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lci1ibG9ja3MvdXNlcicsIHBheWxvYWQpO1xuICB9XG5cbiAgdW5CbG9ja1VzZXIoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuZGVsKGAvcGVyZm9ybWVyLWJsb2Nrcy91c2VyLyR7aWR9YCk7XG4gIH1cblxuICBnZXRCbG9ja0xpc3RVc2VycyhxdWVyeTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXItYmxvY2tzL3VzZXJzJywgcXVlcnkpKTtcbiAgfVxuXG4gIGNoZWNrQ291bnRyeUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2NvdW50cnktYmxvY2svY2hlY2snKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYmxvY2tTZXJ2aWNlID0gbmV3IEJsb2NrU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIGdldENhcnRCeVVzZXIodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBleGlzdENhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY2FydF8ke3VzZXJJZH1gKSBhcyBhbnk7XG4gICAgZXhpc3RDYXJ0ID0gZXhpc3RDYXJ0ICYmIGV4aXN0Q2FydC5sZW5ndGggPyAoSlNPTi5wYXJzZShleGlzdENhcnQpIGFzIElQcm9kdWN0KSA6IFtdO1xuICAgIHJldHVybiBleGlzdENhcnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcnRTZXJ2aWNlID0gbmV3IENhcnRTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjcmVhdGUoXG4gICAgcGF5bG9hZDogYW55XG4gICkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9jb21tZW50cycsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZChgL2NvbW1lbnRzLyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL2NvbW1lbnRzL3NlYXJjaCcsIHF1ZXJ5KVxuICAgICk7XG4gIH1cblxuICBkZWxldGUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL2NvbW1lbnRzLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRTZXJ2aWNlID0gbmV3IENvbW1lbnRTZXJ2aWNlKCk7XG4iLCJsZXQgZ2xvYmFsQ29uZmlnID0ge30gYXMgYW55O1xuXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ29uZmlnID0gKGNvbmZpZzogYW55KSA9PiB7XG4gIGdsb2JhbENvbmZpZyA9IGNvbmZpZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxDb25maWcgPSAoKSA9PiBnbG9iYWxDb25maWc7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBDb29raWVTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNldENvb2tpZShjbmFtZSwgY3ZhbHVlLCBleFRpbWUpIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhUaW1lICogNjAgKiAxMDAwKSk7XG4gICAgY29uc3QgZXhwaXJlcyA9IGBleHBpcmVzPSR7ZC50b1VUQ1N0cmluZygpfWA7XG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7Y25hbWV9PSR7Y3ZhbHVlfTske2V4cGlyZXN9O3BhdGg9L2A7XG4gIH1cblxuICBnZXRDb29raWUoY25hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gYCR7Y25hbWV9PWA7XG4gICAgY29uc3QgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xuICAgIGNvbnN0IGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBjID0gY2FbaV07XG4gICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09ICcgJykge1xuICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgICB9XG4gICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvb2tpZVNlcnZpY2UgPSBuZXcgQ29va2llU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgRWFybmluZ1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgcGVyZm9ybWVyU3RhcnRzKHBhcmFtPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9lYXJuaW5nL3BlcmZvcm1lci9zdGF0cycsIHBhcmFtKSk7XG4gIH1cblxuICBwZXJmb3JtZXJTZWFyY2gocGFyYW0/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2Vhcm5pbmcvcGVyZm9ybWVyL3NlYXJjaCcsIHBhcmFtKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVhcm5pbmdTZXJ2aWNlID0gbmV3IEVhcm5pbmdTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBGZWVkU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL2ZlZWRzL3BlcmZvcm1lcnMnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgdXNlclNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvZmVlZHMvdXNlcnMnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgdXNlckhvbWVGZWVkcyhxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvZmVlZHMvdXNlcnMvaG9tZS1mZWVkcycsIHF1ZXJ5KVxuICAgICk7XG4gIH1cblxuICBkZWxldGUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL2ZlZWRzL3BlcmZvcm1lcnMvJHtpZH1gKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvZmVlZHMvcGVyZm9ybWVycy8ke2lkfWAsIGhlYWRlcnMpO1xuICB9XG5cbiAgZmluZE9uZShpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL2ZlZWRzL3VzZXJzLyR7aWR9YCwgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGUoaWQ6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvZmVlZHMvcGVyZm9ybWVycy8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvZmVlZHMvcGVyZm9ybWVycycsIGRhdGEpO1xuICB9XG5cbiAgdXBsb2FkUGhvdG8oZmlsZTogRmlsZSwgcGF5bG9hZDogYW55LCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoXG4gICAgICAnL2ZlZWRzL3BlcmZvcm1lcnMvcGhvdG8vdXBsb2FkJyxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHtcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICB1cGxvYWRUaHVtYm5haWwoZmlsZTogRmlsZSwgcGF5bG9hZDogYW55LCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoXG4gICAgICAnL2ZlZWRzL3BlcmZvcm1lcnMvdGh1bWJuYWlsL3VwbG9hZCcsXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICBmaWxlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIGN1c3RvbURhdGE6IHBheWxvYWRcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgdXBsb2FkVmlkZW8oZmlsZTogRmlsZSwgcGF5bG9hZDogYW55LCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoXG4gICAgICAnL2ZlZWRzL3BlcmZvcm1lcnMvdmlkZW8vdXBsb2FkJyxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHtcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICB1cGxvYWRUZWFzZXIoZmlsZTogRmlsZSwgcGF5bG9hZDogYW55LCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoXG4gICAgICAnL2ZlZWRzL3BlcmZvcm1lcnMvdGVhc2VyL3VwbG9hZCcsXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICBmaWxlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIGN1c3RvbURhdGE6IHBheWxvYWRcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgYWRkUG9sbChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2ZlZWRzL3BlcmZvcm1lcnMvcG9sbHMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHZvdGVQb2xsKHBvbGxJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2ZlZWRzL3VzZXJzL3ZvdGUvJHtwb2xsSWR9YCk7XG4gIH1cblxuICBnZXRCb29rbWFyayhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9yZWFjdGlvbnMvZmVlZHMvYm9va21hcmsnLCBwYXlsb2FkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZlZWRTZXJ2aWNlID0gbmV3IEZlZWRTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEZvbGxvd1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvZm9sbG93cy8ke2lkfWApO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9mb2xsb3dzLyR7aWR9YCk7XG4gIH1cblxuICBnZXRGb2xsb3dlcnMocmVxKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9mb2xsb3dzL2ZvbGxvd2VycycsIHJlcSkpO1xuICB9XG5cbiAgZ2V0Rm9sbG93aW5nKHJlcSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvZm9sbG93cy9mb2xsb3dpbmcnLCByZXEpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZm9sbG93U2VydmljZSA9IG5ldyBGb2xsb3dTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEdhbGxlcnlTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcycsIHBheWxvYWQpO1xuICB9XG5cbiAgc2VhcmNoKHBhcmFtPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvc2VhcmNoJywgcGFyYW0pKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocGFyYW0/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvc2VhcmNoJywgcGFyYW0pKTtcbiAgfVxuXG4gIHVwZGF0ZShpZDogc3RyaW5nLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzLyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzLyR7aWR9L3ZpZXdgKTtcbiAgfVxuXG4gIHVzZXJWaWV3RGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBkZWxldGUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfWApO1xuICB9XG5cbiAgZ2V0Qm9va21hcmtzKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3JlYWN0aW9ucy9nYWxsZXJpZXMvYm9va21hcmsnLCBwYXlsb2FkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdhbGxlcnlTZXJ2aWNlID0gbmV3IEdhbGxlcnlTZXJ2aWNlKCk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2F1dGguc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlZWQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3BlcmZvcm1lci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvZHVjdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbWVudC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVhY3Rpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9iYW5uZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2Vhcm5pbmcuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhcnQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N1YnNjcmlwdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vb3JkZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NldHRpbmcuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bvc3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmVhbS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VhcmNoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi92aWRlby5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZ2FsbGVyeS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdG9rZW4tcGFja2FnZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGhvdG8uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Rva2VuLXRyYW5zYWN0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXlvdXQtcmVxdWVzdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYmxvY2suc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3JlcG9ydC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY29va2llcy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9sbG93LnNlcnZpY2UnO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZ2V0Q29udmVyc2F0aW9ucyhxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2NvbnZlcnNhdGlvbnMnLCBxdWVyeSkpO1xuICB9XG5cbiAgc2VhcmNoQ29udmVyc2F0aW9ucyhxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2NvbnZlcnNhdGlvbnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnZlcnNhdGlvbihkYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2NvbnZlcnNhdGlvbnMnLCBkYXRhKTtcbiAgfVxuXG4gIGdldENvbnZlcnNhdGlvbkRldGFpbChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvY29udmVyc2F0aW9ucy8ke2lkfWApO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgcXVlcnkpKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIGRhdGEpO1xuICB9XG5cbiAgY291bnRUb3RhbE5vdFJlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvbWVzc2FnZXMvY291bnRpbmctbm90LXJlYWQtbWVzc2FnZXMnKTtcbiAgfVxuXG4gIHJlYWRBbGxJbkNvbnZlcnNhdGlvbihjb252ZXJzYXRpb25JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL3JlYWQtYWxsLyR7Y29udmVyc2F0aW9uSWR9YCk7XG4gIH1cblxuICBnZXRNZXNzYWdlVXBsb2FkVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9tZXNzYWdlcy9wcml2YXRlL2ZpbGVgO1xuICB9XG5cbiAgZ2V0Q29udmVyc2F0aW9uQnlTdHJlYW1JZChzdHJlYW1JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvY29udmVyc2F0aW9ucy9zdHJlYW0vJHtzdHJlYW1JZH1gKTtcbiAgfVxuXG4gIGdldFB1YmxpY01lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvbWVzc2FnZXMvY29udmVyc2F0aW9ucy9wdWJsaWMvJHtjb252ZXJzYXRpb25JZH1gLCBxdWVyeSkpO1xuICB9XG5cbiAgc2VuZFN0cmVhbU1lc3NhZ2UoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZXNzYWdlcy9zdHJlYW0vY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIGRhdGEpO1xuICB9XG5cbiAgc2VuZFB1YmxpY1N0cmVhbU1lc3NhZ2UoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZXNzYWdlcy9zdHJlYW0vcHVibGljL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIGZpbmRQdWJsaWNDb252ZXJzYXRpb25QZXJmb3JtZXIocGVyZm9ybWVySWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvc3RyZWFtL3B1YmxpYy8ke3BlcmZvcm1lcklkfWApO1xuICB9XG5cbiAgZGVsZXRlTWVzc2FnZShpZCkge1xuICAgIHJldHVybiB0aGlzLmRlbChgL21lc3NhZ2VzLyR7aWR9YCk7XG4gIH1cblxuICBkZWxldGVBbGxNZXNzYWdlSW5Db252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9tZXNzYWdlcy8ke2NvbnZlcnNhdGlvbklkfS9yZW1vdmUtYWxsLW1lc3NhZ2VgKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnZlcnNhdGlvbk5hbWUoY29udmVyc2F0aW9uSWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9L3VwZGF0ZWAsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlU2VydmljZSA9IG5ldyBNZXNzYWdlU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgT3JkZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHBlcmZvcm1lclNlYXJjaChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9vcmRlcnMvc2VhcmNoJywgcGF5bG9hZCkpO1xuICB9XG5cbiAgdXNlclNlYXJjaChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9vcmRlcnMvdXNlcnMvc2VhcmNoJywgcGF5bG9hZCkpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9vcmRlcnMvJHtpZH1gKTtcbiAgfVxuXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL29yZGVycy8ke2lkfS91cGRhdGVgLCBkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZURlbGl2ZXJ5QWRkcmVzcyhpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL29yZGVycy8ke2lkfS91cGRhdGUvZGVsaXZlcnktYWRkcmVzc2AsIGRhdGEpO1xuICB9XG5cbiAgZ2V0RG93bmxvYWRMaW5rRGlnaXRhbChwcm9kdWN0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke3Byb2R1Y3RJZH0vZG93bmxvYWQtbGlua2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvcmRlclNlcnZpY2UgPSBuZXcgT3JkZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzdWJzY3JpYmVQZXJmb3JtZXIocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BheW1lbnQvc3Vic2NyaWJlL3BlcmZvcm1lcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdHJhbnNhY3Rpb25zL3VzZXIvc2VhcmNoJywgcGF5bG9hZCkpO1xuICB9XG5cbiAgYWRkRnVuZHMocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BheW1lbnQvd2FsbGV0L3RvcC11cCcsIHBheWxvYWQpO1xuICB9XG5cbiAgYXBwbHlDb3Vwb24oY29kZTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2NvdXBvbnMvJHtjb2RlfS9hcHBseS1jb3Vwb25gKTtcbiAgfVxuXG4gIGNvbm5lY3RTdHJpcGVBY2NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHJpcGUvYWNjb3VudHMnKTtcbiAgfVxuXG4gIGdldFN0cmlwZUNhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0cmlwZS91c2VyL2NhcmRzJyk7XG4gIH1cblxuICBhZGRTdHJpcGVDYXJkKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyaXBlL3VzZXIvY2FyZHMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHJlbW92ZVN0cmlwZUNhcmQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9zdHJpcGUvdXNlci9jYXJkcy8ke2lkfWApO1xuICB9XG5cbiAgcmV0cmlldmVTdHJpcGVBY2NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0cmlwZS9hY2NvdW50cy9tZScpO1xuICB9XG5cbiAgbG9naW5MaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0cmlwZS9hY2NvdW50cy9tZS9sb2dpbi1saW5rJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBheW1lbnRTZXJ2aWNlID0gbmV3IFBheW1lbnRTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFBheW91dFJlcXVlc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNhbGN1bGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGF5b3V0LXJlcXVlc3RzL3BlcmZvcm1lci9jYWxjdWxhdGUnKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5b3V0LXJlcXVlc3RzL3BlcmZvcm1lci9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgY3JlYXRlKGJvZHk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wYXlvdXQtcmVxdWVzdHMvcGVyZm9ybWVyJywgYm9keSk7XG4gIH1cblxuICB1cGRhdGUoaWQ6IHN0cmluZywgYm9keTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGF5b3V0LXJlcXVlc3RzL3BlcmZvcm1lci8ke2lkfWAsIGJvZHkpO1xuICB9XG5cbiAgZGV0YWlsKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgaGVhZGVyczoge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH1cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wYXlvdXQtcmVxdWVzdHMvcGVyZm9ybWVyLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF5b3V0UmVxdWVzdFNlcnZpY2UgPSBuZXcgUGF5b3V0UmVxdWVzdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElQZXJmb3JtZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1lclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVycy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICByYW5kb21TZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXJzL3NlYXJjaC9yYW5kb20nLCBxdWVyeSkpO1xuICB9XG5cbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3BlcmZvcm1lcnMvbWUnLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGZpbmRPbmUoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXJzLyR7aWR9YCwgaGVhZGVycyk7XG4gIH1cblxuICBnZXRBdmF0YXJVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvYXZhdGFyL3VwbG9hZGA7XG4gIH1cblxuICBnZXRDb3ZlclVwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9jb3Zlci91cGxvYWRgO1xuICB9XG5cbiAgZ2V0VmlkZW9VcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvd2VsY29tZS12aWRlby91cGxvYWRgO1xuICB9XG5cbiAgZ2V0RG9jdW1lbnRVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvZG9jdW1lbnRzL3VwbG9hZGA7XG4gIH1cblxuICB1cGRhdGVNZShpZDogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wZXJmb3JtZXJzLyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRUb3BQZXJmb3JtZXIocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXJzL3RvcCcsIHF1ZXJ5KSk7XG4gIH1cblxuICB1cGRhdGVCYW5raW5nKGlkOiBzdHJpbmcsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wZXJmb3JtZXJzLyR7aWR9L2Jhbmtpbmctc2V0dGluZ3NgLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVBheW1lbnRHYXRld2F5KGlkLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGVyZm9ybWVycy8ke2lkfS9wYXltZW50LWdhdGV3YXktc2V0dGluZ3NgLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldEJvb2ttYXJrZWQocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcmVhY3Rpb25zL3BlcmZvcm1lcnMvYm9va21hcmsnLCBwYXlsb2FkKSk7XG4gIH1cblxuICB1cGxvYWREb2N1bWVudHMoZG9jdW1lbnRzOiB7XG4gICAgZmlsZTogRmlsZTtcbiAgICBmaWVsZG5hbWU6IHN0cmluZztcbiAgfVtdLCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoJy9wZXJmb3JtZXJzL2RvY3VtZW50cy91cGxvYWQnLCBkb2N1bWVudHMsIHtcbiAgICAgIG9uUHJvZ3Jlc3NcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGVyZm9ybWVyU2VydmljZSA9IG5ldyBQZXJmb3JtZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQaG90b1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoQnlVc2VyKHF1ZXJ5Pzoge1trZXk6IHN0cmluZ106IGFueX0pIHtcbiAgICBjb25zdCB7IHBlcmZvcm1lcklkIH0gPSBxdWVyeTtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy8ke3BlcmZvcm1lcklkfWAsIHF1ZXJ5KVxuICAgICk7XG4gIH1cblxuICBzZWFyY2hCeVBlcmZvcm1lcihxdWVyeT86IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgc2V0Q292ZXJHYWxsZXJ5KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3NldC1jb3Zlci8ke2lkfWApO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtpZH1gKTtcbiAgfVxuXG4gIHVwbG9hZEltYWdlcyhmaWxlOiBGaWxlLCBwYXlsb2FkOiBhbnksIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbikge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZChcbiAgICAgICcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3VwbG9hZCcsXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZG5hbWU6ICdwaG90bycsXG4gICAgICAgICAgZmlsZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAge1xuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBjdXN0b21EYXRhOiBwYXlsb2FkXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHNlYXJjaFBob3Rvc0luR2FsbGVyeShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3Mvc2VhcmNoJywgcGF5bG9hZCkpO1xuICB9XG5cbiAgdXNlclNlYXJjaChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy91c2VyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zJywgcGF5bG9hZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwaG90b1NlcnZpY2UgPSBuZXcgUGhvdG9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUG9zdFNlYXJjaCB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeTogSVBvc3RTZWFyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3Bvc3RzL3NlYXJjaCcsIHF1ZXJ5IGFzIGFueSkpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3Bvc3RzLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBvc3RTZXJ2aWNlID0gbmV3IFBvc3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjcmVhdGVQcm9kdWN0KFxuICAgIGZpbGVzOiBbeyBmaWVsZG5hbWU6IHN0cmluZzsgZmlsZTogRmlsZSB9XSxcbiAgICBwYXlsb2FkOiBhbnksXG4gICAgb25Qcm9ncmVzcz86IEZ1bmN0aW9uXG4gICkge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzJywgZmlsZXMsIHtcbiAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICBjdXN0b21EYXRhOiBwYXlsb2FkXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoXG4gICAgaWQ6IHN0cmluZyxcbiAgICBmaWxlczogW3sgZmllbGRuYW1lOiBzdHJpbmc7IGZpbGU6IEZpbGUgfV0sXG4gICAgcGF5bG9hZDogYW55LFxuICAgIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvblxuICApIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfWAsIGZpbGVzLCB7XG4gICAgICBvblByb2dyZXNzLFxuICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZCxcbiAgICAgIG1ldGhvZDogJ1BVVCdcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgdXNlclZpZXcocHJvZHVjdElkOiBzdHJpbmcsIGhlYWRlcnM/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtwcm9kdWN0SWR9YCwgaGVhZGVycyk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH0vdmlld2ApO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfWApO1xuICB9XG5cbiAgZ2V0Qm9va21hcmtlZChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9yZWFjdGlvbnMvcHJvZHVjdHMvYm9va21hcmsnLCBwYXlsb2FkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTZXJ2aWNlID0gbmV3IFByb2R1Y3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBSZWFjdGlvblNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9yZWFjdGlvbnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGRlbGV0ZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoJy9yZWFjdGlvbnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcmVhY3Rpb25zL3NlYXJjaCcsIHF1ZXJ5KVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlYWN0aW9uU2VydmljZSA9IG5ldyBSZWFjdGlvblNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFJlcG9ydFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9yZXBvcnRzJywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcG9ydFNlcnZpY2UgPSBuZXcgUmVwb3J0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2hCeUtleXdvcmQocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zZWFyY2gva2V5d29yZHMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGxpc3RCeUtleXdvcmQocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3NlYXJjaC9saXN0L2tleXdvcmRzJywgcXVlcnkpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoU2VydmljZSA9IG5ldyBTZWFyY2hTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBwcml2YXRlIF9zZXR0aW5ncyA9IHt9IGFzIGFueTtcblxuICBhc3luYyBhbGwoZ3JvdXAgPSAnJywgZm9yY2VSZWxvYWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHNldHRpbmdHcm91cCA9IGdyb3VwIHx8ICdhbGwnO1xuICAgIGlmICh0aGlzLl9zZXR0aW5nc1tzZXR0aW5nR3JvdXBdICYmICFmb3JjZVJlbG9hZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzW3NldHRpbmdHcm91cF07XG4gICAgfVxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc2V0dGluZ3MvcHVibGljJywgeyBncm91cCB9KSk7XG4gICAgdGhpcy5fc2V0dGluZ3Nbc2V0dGluZ0dyb3VwXSA9IHJlc3A7XG4gICAgcmV0dXJuIHJlc3A7XG4gIH1cblxuICBjb250YWN0KGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvY29udGFjdCcsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nU2VydmljZSA9IG5ldyBTZXR0aW5nU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjcmVhdGUoXG4gICAgcGF5bG9hZDogYW55XG4gICkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hZGRyZXNzZXMvY3JlYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGUoaWQ6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKGAvYWRkcmVzc2VzLyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL2FkZHJlc3Nlcy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9hZGRyZXNzZXMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hpcHBpbmdBZGRyZXNzU2VydmljZSA9IG5ldyBTaGlwcGluZ0FkZHJlc3NTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFN0cmVhbVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgdXBkYXRlU3RyZWFtSW5mbyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvc3RyZWFtaW5nL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlU3RyZWFtRHVyYXRpb24ocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3N0cmVhbWluZy9zZXQtZHVyYXRpb24nLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdvTGl2ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy9saXZlJywgZGF0YSk7XG4gIH1cblxuICBlZGl0TGl2ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3N0cmVhbWluZy9saXZlLyR7aWR9YCwgZGF0YSk7XG4gIH1cblxuICBqb2luUHVibGljQ2hhdChwZXJmb3JtZXJJZDogc3RyaW5nLCBoZWFkZXJzPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0cmVhbWluZy9qb2luLyR7cGVyZm9ybWVySWR9YCwgaGVhZGVycyk7XG4gIH1cblxuICBmZXRjaEFnb3JhQXBwVG9rZW4oZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHJlYW1pbmcvYWdvcmEvdG9rZW4nLCBkYXRhKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3RyZWFtaW5nL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RyZWFtU2VydmljZSA9IG5ldyBTdHJlYW1TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFN1YnNjcmlwdGlvblNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3Vic2NyaXB0aW9ucy9wZXJmb3JtZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zdWJzY3JpcHRpb25zL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGNhbmNlbFN1YnNjcmlwdGlvbihpZDogc3RyaW5nLCBnYXRld2F5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcGF5bWVudC8ke2dhdGV3YXl9L2NhbmNlbC1zdWJzY3JpcHRpb24vJHtpZH1gKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHN1YnNjcmlwdGlvblNlcnZpY2UgPSBuZXcgU3Vic2NyaXB0aW9uU2VydmljZSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRva2VuUGFja2FnZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgICBzZWFyY2gocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wYWNrYWdlL3Rva2VuL3NlYXJjaCcsIHF1ZXJ5IGFzIGFueSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRva2VuUGFja2FnZVNlcnZpY2UgPSBuZXcgVG9rZW5QYWNrYWdlU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5UcmFuc2N0aW9uU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZW5kVGlwKHBlcmZvcm1lcklkOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC93YWxsZXQvY2hhcmdlcy90aXAvJHtwZXJmb3JtZXJJZH1gLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHB1cmNoYXNlRmVlZChpZCwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC93YWxsZXQvY2hhcmdlcy9mZWVkLyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBwdXJjaGFzZVByb2R1Y3QoaWQsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvd2FsbGV0L2NoYXJnZXMvcHJvZHVjdC8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgcHVyY2hhc2VWaWRlbyhpZCwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC93YWxsZXQvY2hhcmdlcy92aWRlby8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgcHVyY2hhc2VHYWxsZXJ5KGlkLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3dhbGxldC9jaGFyZ2VzL2dhbGxlcnkvJHtpZH1gLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHB1cmNoYXNlTWVzc2FnZShpZCwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC93YWxsZXQvY2hhcmdlcy9tZXNzYWdlLyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBwdXJjaGFzZVN0cmVhbShpZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC93YWxsZXQvY2hhcmdlcy9zdHJlYW0vJHtpZH1gKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy93YWxsZXQvY2hhcmdlcy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRva2VuVHJhbnNjdGlvblNlcnZpY2UgPSBuZXcgVG9rZW5UcmFuc2N0aW9uU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3VzZXJzL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGVNZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy91c2VycycsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0QXZhdGFyVXBsb2FkVXJsKHVzZXJJZD86IHN0cmluZykge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS91c2Vycy8ke3VzZXJJZH0vYXZhdGFyL3VwbG9hZGA7XG4gICAgfVxuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS91c2Vycy9hdmF0YXIvdXBsb2FkYDtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3VzZXJzL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlcnMvdmlldy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSUNvdW50cnksIElMYW5nZ3VnZXMsIElQaG9uZUNvZGVzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgcHJpdmF0ZSBfY291bnRyaWVzID0gW10gYXMgYW55O1xuXG4gIGFzeW5jIGNvdW50cmllc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUNvdW50cnk+PiB7XG4gICAgaWYgKHRoaXMuX2NvdW50cmllcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb3VudHJpZXM7XG4gICAgfVxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdldCgnL2NvdW50cmllcy9saXN0Jyk7XG4gICAgdGhpcy5fY291bnRyaWVzID0gcmVzcDtcbiAgICByZXR1cm4gcmVzcDtcbiAgfVxuXG4gIGFzeW5jIHN0YXRlc0xpc3QoY291bnRyeUNvZGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0YXRlcy8ke2NvdW50cnlDb2RlfWApO1xuICB9XG5cbiAgYXN5bmMgY2l0aWVzTGlzdChjb3VudHJ5Q29kZTogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvY2l0aWVzLyR7Y291bnRyeUNvZGV9LyR7c3RhdGV9YCk7XG4gIH1cblxuICBsYW5ndWFnZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElMYW5nZ3VnZXM+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvbGFuZ3VhZ2VzL2xpc3QnKTtcbiAgfVxuXG4gIHBob25lQ29kZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElQaG9uZUNvZGVzPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3Bob25lLWNvZGVzL2xpc3QnKTtcbiAgfVxuXG4gIGJvZHlJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3VzZXItYWRkaXRpb25hbCcpO1xuICB9XG5cbiAgdmVyaWZ5UmVjYXB0Y2hhKHRva2VuOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmUtY2FwdGNoYS92ZXJpZnknLCB7IHRva2VuIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1dGlsc1NlcnZpY2UgPSBuZXcgVXRpbHNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9YCk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBmaW5kT25lKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfWAsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIGZpbGVzOiBbeyBmaWVsZG5hbWU6IHN0cmluZzsgZmlsZTogRmlsZSB9XSwgcGF5bG9hZDogYW55LCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvZWRpdC8ke2lkfWAsIGZpbGVzLCB7XG4gICAgICBvblByb2dyZXNzLFxuICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZCxcbiAgICAgIG1ldGhvZDogJ1BVVCdcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUZpbGUoaWQ6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL3JlbW92ZS1maWxlLyR7aWR9YCwgeyB0eXBlIH0pO1xuICB9XG5cbiAgdXBsb2FkVmlkZW8oXG4gICAgZmlsZXM6IFt7IGZpZWxkbmFtZTogc3RyaW5nOyBmaWxlOiBGaWxlIH1dLFxuICAgIHBheWxvYWQ6IGFueSxcbiAgICBvblByb2dyZXNzPzogRnVuY3Rpb25cbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL3VwbG9hZCcsIGZpbGVzLCB7XG4gICAgICBvblByb2dyZXNzLFxuICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Qm9va21hcmtzKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3JlYWN0aW9ucy92aWRlb3MvYm9va21hcmsnLCBwYXlsb2FkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZpZGVvU2VydmljZSA9IG5ldyBWaWRlb1NlcnZpY2UoKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkU2NyaXB0KGQsIHMsIGlkLCBqc1NyYywgY2IsIG9uRXJyb3IpIHtcbiAgY29uc3QgZWxlbWVudCA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG4gIGNvbnN0IGZqcyA9IGVsZW1lbnQ7XG4gIGxldCBqcyA9IGVsZW1lbnQ7XG4gIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpO1xuICBqcy5pZCA9IGlkO1xuICBqcy5zcmMgPSBqc1NyYztcbiAgaWYgKGZqcyAmJiBmanMucGFyZW50Tm9kZSkge1xuICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcbiAgfSBlbHNlIHtcbiAgICBkLmhlYWQuYXBwZW5kQ2hpbGQoanMpO1xuICB9XG4gIGpzLm9uZXJyb3IgPSBvbkVycm9yO1xuICBqcy5vbmxvYWQgPSBjYjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByZW1vdmVTY3JpcHQoZCwgaWQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIGlmIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1hY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9