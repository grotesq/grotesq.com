module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/unk/works/v2.grotesq.com/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    className: "gq-nav navbar fixed-top navbar-expand navbar-dark bg-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    src: "/assets/images/logo-small.png",
    className: "gq-nav__logo-image",
    alt: "\uADF8\uB85C\uD14C\uC2A4\uD050 \uC2A4\uD29C\uB514\uC624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }))), __jsx("div", {
    className: "collapse navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("ul", {
    className: "navbar-nav ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/works",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Works"))), __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "mailto:unknown@grotesq.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Contact"))))), props.children);
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

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
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

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

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
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

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
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
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
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
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
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
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
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

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

    const decode = decodeURIComponent;
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

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
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
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/works/big-hit-global-audition.js":
/*!************************************************!*\
  !*** ./pages/works/big-hit-global-audition.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/unk/works/v2.grotesq.com/pages/works/big-hit-global-audition.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const title = "Big Hit Global Audition - 그로테스큐 스튜디오 || Studio GrotesQ";
const metaDescription = "빅히트 엔터테인먼트의 글로벌 오디션 사이트. QR코드를 이용한 접수 자동화 시스템을 구축했습니다.";
const ogTitle = "Big Hit Global Audition - 그로테스큐 스튜디오 || Studio GrotesQ";
const ogUrl = "https://www.grotesq.com/works/big-hit-global-audition/";
const ogImage = "https://www.grotesq.com/assets/images/works/big-hit-global-audition/bighit-user-1.png";
const ogImageWidth = 1600;
const ogImageHeight = 1067;
const ogDescription = "빅히트 엔터테인먼트의 글로벌 오디션 사이트. QR코드를 이용한 접수 자동화 시스템을 구축했습니다.";
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
  title: title,
  description: metaDescription,
  openGraph: {
    url: ogUrl,
    title: ogTitle,
    description: ogDescription,
    images: [{
      url: ogImage,
      width: ogImageWidth,
      height: ogImageHeight,
      alt: ogTitle
    }],
    site_name: "그로테스큐 스튜디오 || Studio GrotesQ"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("div", {
  className: "gq-section gq-section--dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Big Hit Global Audition")), __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("div", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("img", {
  src: "/assets/images/works/big-hit-global-audition/bighit-user-1.png",
  alt: "",
  className: "gq-image-landscape",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
})), __jsx("p", {
  className: "mt-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "\uBE45\uD788\uD2B8 \uC5D4\uD130\uD14C\uC778\uBA3C\uD2B8\uC758 \uAE00\uB85C\uBC8C \uC624\uB514\uC158 \uC0AC\uC774\uD2B8\uB97C \uAD6C\uCD95\uD588\uC2B5\uB2C8\uB2E4.", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}), "\uC804\uC138\uACC4\uB97C \uB300\uC0C1\uC73C\uB85C \uD558\uB294 \uC0AC\uC774\uD2B8\uC778 \uB9CC\uD07C \uAE00\uB85C\uBC8C CDN\uC744 \uAD6C\uCD95\uD558\uACE0 \uB2E4\uAD6D\uC5B4\uB97C \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4.", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}), "\uBC18\uC751\uD615 \uC6F9\uC0AC\uC774\uD2B8\uB85C \uC0AC\uC6A9\uC790\uB4E4\uC774 \uC190\uC27D\uAC8C \uC624\uB514\uC158\uC744 \uC811\uC218\uD558\uACE0 \uD655\uC778\uD558\uACE0 \uCC38\uC5EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))), __jsx("div", {
  className: "gq-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("img", {
  src: "/assets/images/works/big-hit-global-audition/bighit-user-2_3.png",
  alt: "",
  className: "gq-image-landscape",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}), __jsx("p", {
  className: "mt-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, "\uAE30\uC874\uC758 \uC624\uB514\uC158\uC740 \uC774\uBA54\uC77C\uB85C \uC6CC\uB4DC \uD30C\uC77C\uC744 \uBC1B\uC544 \uB2F4\uB2F9\uC790\uAC00 \uC190\uC73C\uB85C \uC815\uB9AC\uD558\uB294 \uC2DC\uC2A4\uD15C\uC73C\uB85C \uB9CE\uC740 \uC778\uB825 \uB9AC\uC18C\uC2A4\uAC00 \uD544\uC694\uD588\uACE0 \uC2E4\uC218\uD560 \uD655\uB960\uC774 \uB192\uC558\uC2B5\uB2C8\uB2E4.", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}), "\uC2E0\uADDC \uC2DC\uC2A4\uD15C\uC5D0\uC11C\uB294 \uBB38\uC11C \uC791\uC5C5 \uC5C6\uC774 \uC0AC\uC6A9\uC790\uAC00 \uBC14\uB85C \uC2E0\uCCAD\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uACE0, \uC2E0\uCCAD\uC11C\uB294 \uAD00\uB9AC\uC790\uAC00 \uC27D\uAC8C \uC870\uD68C\uAC00 \uAC00\uB2A5\uD558\uBA70, \uC624\uB514\uC158 \uD604\uC7A5\uC5D0\uC11C\uB3C4 QR \uCF54\uB4DC\uB97C \uC774\uC6A9\uD574 \uBE60\uB974\uAC8C \uC811\uC218 \uB0B4\uC6A9\uC744 \uC870\uD68C\uD558\uACE0 \uB4F1\uB85D\uD560 \uC218 \uC788\uB3C4\uB85D \uD588\uC2B5\uB2C8\uB2E4."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}))), __jsx("div", {
  className: "gq-section gq-section--dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("img", {
  src: "/assets/images/works/big-hit-global-audition/bighit-admin-2.png",
  alt: "",
  className: "gq-image-landscape",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}))), __jsx("div", {
  className: "gq-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, "GOAL")), __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, "\uD504\uB808\uC784\uC6CC\uD06C \uC5C6\uB294 \uD504\uB808\uC784\uC6CC\uD06C \uC218\uC900\uC758 \uC0AC\uC774\uD2B8 \uAD6C\uCD95"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, "\uC21C\uAC04\uC801\uC778 \uB300\uB7C9\uC758 \uD2B8\uB798\uD53D\uC5D0 \uB300\uC751\uD558\uB294 \uC11C\uBC84 \uBD84\uC0B0 \uCC98\uB9AC"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, "\uC774\uD0C8\uC728\uC744 \uCD5C\uC18C\uB85C \uD558\uB294 \uC911\uB2E8 \uC5C6\uB294 \uC811\uC218 \uD398\uC774\uC9C0 \uAD6C\uD604"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, "QR\uCF54\uB4DC\uB97C \uC774\uC6A9\uD55C \uC811\uC218 \uC790\uB3D9\uD654"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, "\uD655\uC7A5\uC131 \uB192\uC740 \uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0")))), __jsx("div", {
  className: "gq-section gq-section--dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, "\uD504\uB808\uC784\uC6CC\uD06C \uC5C6\uB294 \uD504\uB808\uC784\uC6CC\uD06C \uC218\uC900\uC758 \uC0AC\uC774\uD2B8 \uAD6C\uCD95")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, "\uCD08\uAE30\uC758 \uCEE8\uC149\uC740 \uCD5C\uC885 \uAD6C\uD604 \uD615\uD0DC\uC778 \uB2E8\uB3C5 \uC811\uC218 \uC0AC\uC774\uD2B8\uAC00 \uC544\uB2CC \uAE30\uC874 \uC0AC\uC774\uD2B8\uC758 \uC77C\uBD80 \uD398\uC774\uC9C0\uB85C \uAD6C\uD604\uB418\uB294 \uAC83\uC774\uC5C8\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uAE30\uC874 \uC0AC\uC774\uD2B8\uC758 \uD615\uD0DC\uB97C \uCDA9\uC2E4\uD788 \uB530\uB974\uB418 \uCD5C\uC2E0 \uAE30\uB2A5\uB4E4\uC774 \uC2E0\uADDC \uD398\uC774\uC9C0\uC5D0\uC11C\uB9CC \uC81C\uD55C\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uB294 \uD63C\uD569\uB41C \uD615\uD0DC\uC758 \uAD6C\uCD95\uC774 \uD544\uC694\uD588\uC2B5\uB2C8\uB2E4."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "\uAC01 \uC8FC\uC18C\uC5D0 \uD574\uB2F9\uD558\uB294 php \uD30C\uC77C\uC740 \uB2E8\uC21C \uB77C\uC6B0\uD130\uC758 \uC5ED\uD560\uC744 \uD558\uB3C4\uB85D \uD558\uACE0, \uC2E4\uC81C\uC801\uC778 \uB0B4\uBD80 \uAD6C\uD604\uC740 Composer \uB97C \uD1B5\uD574\uC11C \uC124\uCE58\uB41C Symphony HTTP Foundation, Eloquent ORM, Blade Template Engine \uB4F1\uC744 \uC774\uC6A9\uD574 \uB0B4\uBD80 \uAD6C\uD604\uC744 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uAC00\uAE4C\uC6B4 \uC218\uC900\uC73C\uB85C \uAD6C\uD604\uD588\uC2B5\uB2C8\uB2E4."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, "\uC548\uC815\uC131 \uC788\uB294 Composer \uD328\uD0A4\uC9C0\uB4E4\uC744 \uC5C4\uC120\uD574 \uC0AC\uC6A9\uD558\uACE0, \uCC28\uD6C4\uC5D0 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uC644\uC804\uD788 \uC774\uC804\uC744 \uD560 \uB54C\uC5D0\uB3C4 \uCF54\uB4DC\uB97C \uBC14\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uCD5C\uB300\uD55C PSR\uC744 \uC900\uC218\uD574 \uC791\uC131\uD588\uC2B5\uB2C8\uB2E4."))), __jsx("div", {
  className: "gq-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}, "\uC21C\uAC04\uC801\uC778 \uB300\uB7C9\uC758 \uD2B8\uB798\uD53D\uC5D0 \uB300\uC751\uD558\uB294 \uC11C\uBC84 \uBD84\uC0B0 \uCC98\uB9AC")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}, "\uBE45\uD788\uD2B8 \uC5D4\uD130\uD14C\uC778\uBA3C\uD2B8\uB294 \uC804\uC138\uACC4\uB97C \uB300\uC0C1\uC73C\uB85C \uC9C0\uC6D0\uC790\uB4E4\uC744 \uBAA8\uC9D1\uD558\uACE0, \uC9C0\uC5ED\uBCC4 \uC624\uD508 \uC2DC\uAC04\uC774 \uC0AC\uC804\uC5D0 \uACF5\uC9C0\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uD574\uB2F9 \uC2DC\uAC04\uB300\uC5D0 \uD3ED\uBC1C\uC801\uC778 \uC811\uC18D\uC774 \uC608\uC0C1\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC9C0\uC5ED\uBCC4\uB85C \uC624\uD508\uACFC \uB9C8\uAC10\uC774 \uC815\uD574\uC838 \uC788\uC9C0\uB9CC \uC870\uAE08\uC529 \uC2DC\uAC04\uB300\uAC00 \uACB9\uCCD0\uC788\uAE30 \uB54C\uBB38\uC5D0 \uC624\uD508 \uC774\uD6C4\uB85C\uB294 \uBC18\uB4DC\uC2DC \uC5B4\uB518\uAC00 \uD55C \uACF3 \uC774\uC0C1\uC740 \uC811\uC218\uC911\uC778 \uC0C1\uD0DC\uAC00 \uC720\uC9C0\uB418\uC5B4\uC57C \uD588\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB300\uB7C9\uC758 \uD2B8\uB798\uD53D\uC744 \uC18C\uD654\uD558\uAE30 \uC704\uD55C \uBD84\uC0B0\uCC98\uB9AC\uC640, \uBB34\uC911\uB2E8 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uCD95\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD588\uC2B5\uB2C8\uB2E4."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
}, "\uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 AWS\uC758 \uAE30\uC220\uB4E4\uC744 \uC774\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC778 \uCEF4\uD4E8\uD305 \uC11C\uBE44\uC2A4\uB294 Elastic Beanstalk\uC744 \uC774\uC6A9\uD574 \uC624\uD1A0\uC2A4\uCF00\uC77C\uB9C1\uC744 \uD560\uB2F9\uD558\uACE0 \uBC30\uD3EC \uBC29\uC2DD\uC73C\uB860 \uCD94\uAC00 \uBC30\uCE58\uB97C \uD1B5\uD55C \uB864\uB9C1 \uBC30\uD3EC\uB97C \uC124\uC815\uD574 \uBB34\uC911\uB2E8\uC73C\uB85C \uC11C\uBE44\uC2A4 \uB418\uB3C4\uB85D \uD588\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB4E4\uC774 \uC5C5\uB85C\uB4DC \uD558\uB294 \uC790\uB8CC\uB294 S3\uC5D0 \uBC30\uD3EC\uD55C \uD6C4 Cloud Front\uB85C CDN \uCC98\uB9AC\uD574 \uC804\uC138\uACC4 \uBAA8\uB4E0 \uB9AC\uC804\uC744 \uB300\uC0C1\uC73C\uB85C \uBC30\uD3EC/\uCE90\uC2F1\uB418\uB3C4\uB85D \uCC98\uB9AC\uD588\uC2B5\uB2C8\uB2E4."))), __jsx("div", {
  className: "gq-section gq-section--dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, "\uC774\uD0C8\uC728\uC744 \uCD5C\uC18C\uB85C \uD558\uB294 \uC911\uB2E8 \uC5C6\uB294 \uC811\uC218 \uD398\uC774\uC9C0 \uAD6C\uD604")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164
  },
  __self: undefined
}, "\uC2E0\uCCAD\uC11C\uB97C \uC791\uC131\uD558\uB294 \uACFC\uC815\uC5D0 \uC788\uC5B4\uC11C \uBCC0\uC2EC \uC678\uC758 \uB2E4\uB978 \uAE30\uC220\uC801\uC778 \uC694\uC778\uC73C\uB85C \uC774\uD0C8\uC774 \uBC1C\uC0DD\uD558\uB294 \uAC83\uC744 \uCD5C\uC18C\uD654 \uD588\uC2B5\uB2C8\uB2E4. \uC791\uC131 \uC591\uC2DD\uC5D0 \uC788\uC5B4 \uAC80\uC99D\uC774 \uD544\uC694\uD55C \uB0B4\uC6A9\uC740 \uD56D\uC0C1 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uCCB4\uD06C\uD574 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uBC14\uB85C \uD53C\uB4DC\uBC31\uC744 \uC804\uB2EC\uD569\uB2C8\uB2E4. \uC811\uC218 \uBC84\uD2BC\uC744 \uB20C\uB7EC \uD3FC\uC774 \uC804\uC1A1\uB41C \uD6C4 \uAC80\uC99D \uACB0\uACFC\uC5D0 \uB530\uB77C \uB0B4\uC6A9\uC744 \uC7AC\uC785\uB825\uD558\uB294 \uACBD\uC6B0\uB97C \uC81C\uB85C\uC5D0 \uC218\uB834\uD558\uB3C4\uB85D \uB9CC\uB4DC\uB294 \uAC83\uC744 \uBAA9\uD45C\uB85C \uD588\uC2B5\uB2C8\uB2E4."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
}, "\uC774\uB97C \uAD6C\uD604\uD558\uAE30 \uC704\uD574 \uD504\uB860\uD2B8\uC5D4\uB4DC\uC5D0 \uB9AC\uC561\uD2B8\uB97C \uB3C4\uC785\uD588\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC SPA\uB85C \uAD6C\uCD95\uD558\uC9C0\uB294 \uC54A\uC73C\uBBC0\uB85C \uD654\uBA74\uC0C1\uC758 \uC8FC\uC694 \uCEF4\uD3EC\uB10C\uD2B8\uB4E4\uB9CC \uB9AC\uC561\uD2B8\uB85C \uB80C\uB354\uB9C1 \uD560 \uC218 \uC788\uB3C4\uB85D \uCEE4\uC2A4\uD140 DOM \uB80C\uB354\uB7EC\uB97C \uB9CC\uB4E4\uC5B4 \uCC98\uB9AC\uB97C \uD588\uC2B5\uB2C8\uB2E4."))), __jsx("div", {
  className: "gq-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181
  },
  __self: undefined
}, "QR\uCF54\uB4DC\uB97C \uC774\uC6A9\uD55C \uC811\uC218 \uC790\uB3D9\uD654")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}, "\uC774\uBC88 \uD504\uB85C\uC81D\uD2B8\uC758 \uAC00\uC7A5 \uD575\uC2EC\uC801\uC778 \uBD80\uBD84\uC73C\uB85C, \uAE30\uC874\uC758 \uC11C\uB958 \uC811\uC218 \uBC29\uC2DD\uC744 \uC644\uC804\uD788 \uC804\uC790\uBB38\uC11C\uD654 \uD558\uB3C4\uB85D \uD588\uC2B5\uB2C8\uB2E4. \uC2E0\uCCAD\uC790\uB294 \uC811\uC218\uC640 \uB3D9\uC2DC\uC5D0 QR\uCF54\uB4DC\uB97C \uBC1C\uAE09\uBC1B\uACE0, \uBA54\uC77C\uB85C\uB3C4 \uC0AC\uBCF8\uC744 \uBC1B\uC2B5\uB2C8\uB2E4. \uC624\uB514\uC158 \uD604\uC7A5 \uC811\uC218\uCC98\uC5D0\uC11C\uB294 \uC774 QR\uCF54\uB4DC\uB97C \uC2A4\uCE90\uB108\uB85C \uC77D\uAE30\uB9CC \uD558\uB294 \uAC83\uC73C\uB85C \uC811\uC218\uC790\uC758 \uB0B4\uC6A9\uC744 \uC870\uD68C\uD560 \uC218 \uC788\uC73C\uBA70, \uC790\uB3D9\uC73C\uB85C \uD1B5\uACC4 \uCC98\uB9AC \uB429\uB2C8\uB2E4."))), __jsx("div", {
  className: "gq-section gq-section--dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 195
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196
  },
  __self: undefined
}, "\uD655\uC7A5\uC131 \uB192\uC740 \uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
}, "\uC804\uC138\uACC4\uB97C \uB300\uC0C1\uC73C\uB85C \uC624\uB514\uC158\uC744 \uC9C4\uD589\uD558\uAC8C \uB418\uBBC0\uB85C \uB2E4\uAD6D\uC5B4\uC5D0 \uB300\uD55C \uCC98\uB9AC\uB294 \uD544\uC218\uC801\uC774\uC5C8\uC2B5\uB2C8\uB2E4. \uD654\uBA74\uC5D0 \uB300\uD55C \uB80C\uB354\uB9C1\uC744 PHP\uC640 \uB9AC\uC561\uD2B8\uAC00 \uBD84\uB2F4\uD558\uAC8C \uB418\uBBC0\uB85C, \uAC01 \uC5B8\uC5B4\uC5D0 \uB9DE\uB294 \uB2E4\uAD6D\uC5B4 \uCC98\uB9AC\uAC00 \uD544\uC694\uD588\uC2B5\uB2C8\uB2E4. i18n \uD45C\uC900\uC744 \uC900\uC218\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uCC44\uD0DD\uD574 \uAC01\uAE30 \uB2E4\uB978 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC9C0\uB9CC \uC5B8\uC5B4 \uD30C\uC77C\uC740 \uAC19\uC740 json\uC744 \uACF5\uC720\uD560 \uC218 \uC788\uB3C4\uB85D \uD588\uC2B5\uB2C8\uB2E4."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206
  },
  __self: undefined
}, "\uB610\uD55C \uC5B8\uC81C\uB4E0 \uD544\uC694\uD55C \uC5B8\uC5B4\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uB3C4\uB85D \uD655\uC7A5\uC131 \uC788\uB294 \uAD6C\uC870\uB85C \uC81C\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}, "\uC5B8\uC5B4\uC5D0 \uB530\uB978 \uC0AC\uC774\uD2B8 \uB514\uC790\uC778\uC5D0 \uB300\uD55C \uCD5C\uC801\uD654\uB97C \uC704\uD574 HTML5 \uD45C\uC900 lang \uC2A4\uD399\uC744 \uB530\uB974\uB3C4\uB85D \uC81C\uC791\uB418\uACE0 \uAC01 \uC5B8\uC5B4\uC5D0 \uB9DE\uB294 \uC6F9\uD3F0\uD2B8\uAC00 \uBD88\uB7EC\uC640 \uC801\uC6A9\uB418\uB3C4\uB85D \uCC98\uB9AC \uB418\uC5C8\uC2B5\uB2C8\uB2E4."))), __jsx("div", {
  className: "gq-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 219
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221
  },
  __self: undefined
}, "Technical Summary")), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 224
  },
  __self: undefined
}, __jsx("div", {
  className: "col-12 col-md-4 mb-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225
  },
  __self: undefined
}, __jsx("div", {
  className: "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 226
  },
  __self: undefined
}, __jsx("div", {
  className: "card-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 227
  },
  __self: undefined
}, "Backend"), __jsx("div", {
  className: "card-body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228
  },
  __self: undefined
}, __jsx("ul", {
  className: "list-unstyled",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 230
  },
  __self: undefined
}, "Symphony Framework"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 231
  },
  __self: undefined
}, "Laravel Libraries"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 232
  },
  __self: undefined
}, "i18n for PHP"))))), __jsx("div", {
  className: "col-12 col-md-4 mb-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237
  },
  __self: undefined
}, __jsx("div", {
  className: "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 238
  },
  __self: undefined
}, __jsx("div", {
  className: "card-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239
  },
  __self: undefined
}, "Frontend"), __jsx("div", {
  className: "card-body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240
  },
  __self: undefined
}, __jsx("ul", {
  className: "list-unstyled",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 241
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 242
  },
  __self: undefined
}, "React"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 243
  },
  __self: undefined
}, "React Dynamic Loader"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244
  },
  __self: undefined
}, "i18n for Javascript"))))), __jsx("div", {
  className: "col-12 col-md-4 mb-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249
  },
  __self: undefined
}, __jsx("div", {
  className: "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 250
  },
  __self: undefined
}, __jsx("div", {
  className: "card-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 251
  },
  __self: undefined
}, "etc"), __jsx("div", {
  className: "card-body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 252
  },
  __self: undefined
}, __jsx("ul", {
  className: "list-unstyled",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 253
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 254
  },
  __self: undefined
}, "Amazon Web Services"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 255
  },
  __self: undefined
}, "Elastic Beanstalk"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 256
  },
  __self: undefined
}, "Cloud Front with S3"))))))))));

/***/ }),

/***/ 6:
/*!******************************************************!*\
  !*** multi ./pages/works/big-hit-global-audition.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/unk/works/v2.grotesq.com/pages/works/big-hit-global-audition.js */"./pages/works/big-hit-global-audition.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=big-hit-global-audition.js.map