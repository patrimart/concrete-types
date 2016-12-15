(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Allows TypeScript `import * as Concrete from "concrete-types"`
	 */

	global = __webpack_require__(1);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var guards = __webpack_require__(2);
	var consArray = __webpack_require__(4);
	var consDate = __webpack_require__(6);
	var consMap = __webpack_require__(7);
	var consObj = __webpack_require__(8);
	var consSet = __webpack_require__(9);
	__export(__webpack_require__(2));
	function from(obj, forceDeep) {
	    if (guards.is(obj)) {
	        return obj;
	    }
	    if (typeof obj === "object") {
	        if (Array.isArray(obj)) {
	            return consArray.from(obj, forceDeep);
	        }
	        else if (obj.constructor.name === "Object") {
	            return consObj.from(obj, forceDeep);
	        }
	    }
	    if (obj instanceof Map) {
	        return consMap.from(obj);
	    }
	    else if (obj instanceof Set) {
	        return consSet.from(obj);
	    }
	    else if (obj instanceof Date) {
	        return consDate.from(obj);
	    }
	    return obj;
	}
	exports.from = from;
	function toMutable(obj) {
	    if (guards.isObject(obj)) {
	        return consObj.toMutable(obj);
	    }
	    else if (guards.isArray(obj)) {
	        return obj.toMutable();
	    }
	    else if (guards.isDate(obj)) {
	        return obj.toMutable();
	    }
	    else if (guards.isMap(obj)) {
	        return obj.toMutable();
	    }
	    else if (guards.isSet(obj)) {
	        return obj.toMutable();
	    }
	    return obj;
	}
	exports.toMutable = toMutable;
	//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConcreteStructure_1 = __webpack_require__(3);
	/**
	 *
	 */
	function is(obj) {
	    return obj !== undefined && obj[ConcreteStructure_1.ConcreteStructureTypeKey] !== undefined;
	}
	exports.is = is;
	function isArray(obj) {
	    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.ARRAY;
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.DATE;
	}
	exports.isDate = isDate;
	function isMap(obj) {
	    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.MAP;
	}
	exports.isMap = isMap;
	function isObject(obj) {
	    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.OBJECT;
	}
	exports.isObject = isObject;
	function isSet(obj) {
	    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.SET;
	}
	exports.isSet = isSet;
	//# sourceMappingURL=guards.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

	// const StructureCacheKey = Symbol("StructureCacheKey");
	// const StructureCache = new WeakMap<Object, ConcreteStructure>();
	"use strict";
	/**
	 *
	 */
	var ConcreteStructureType;
	(function (ConcreteStructureType) {
	    ConcreteStructureType[ConcreteStructureType["OBJECT"] = 0] = "OBJECT";
	    ConcreteStructureType[ConcreteStructureType["ARRAY"] = 1] = "ARRAY";
	    ConcreteStructureType[ConcreteStructureType["DATE"] = 2] = "DATE";
	    ConcreteStructureType[ConcreteStructureType["MAP"] = 3] = "MAP";
	    ConcreteStructureType[ConcreteStructureType["SET"] = 4] = "SET";
	    ConcreteStructureType[ConcreteStructureType["UNKNOWN"] = 5] = "UNKNOWN";
	})(ConcreteStructureType = exports.ConcreteStructureType || (exports.ConcreteStructureType = {}));
	/**
	 *
	 */
	exports.ConcreteStructureTypeKey = Symbol("ConcreteStructureTypeKey");
	//# sourceMappingURL=ConcreteStructure.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConcreteStructure_1 = __webpack_require__(3);
	var errors_1 = __webpack_require__(5);
	var guards_1 = __webpack_require__(2);
	var _1 = __webpack_require__(1);
	var readOnlyErrorProp = {
	    value: function () { throw new errors_1.ReadonlyError("This method is not supported by Concrete arrays."); },
	};
	function from(arr, forceDeep) {
	    if (guards_1.isArray(arr)) {
	        return arr;
	    }
	    var sumCache;
	    arr = Object.defineProperties(arr, (_a = {},
	        _a[ConcreteStructure_1.ConcreteStructureTypeKey] = {
	            value: ConcreteStructure_1.ConcreteStructureType.ARRAY,
	        },
	        _a.length = { value: arr.length },
	        _a.copyWithin = readOnlyErrorProp,
	        _a.fill = readOnlyErrorProp,
	        _a.pop = readOnlyErrorProp,
	        _a.push = readOnlyErrorProp,
	        _a.reverse = readOnlyErrorProp,
	        _a.shift = readOnlyErrorProp,
	        _a.sort = readOnlyErrorProp,
	        _a.splice = readOnlyErrorProp,
	        _a.unshift = readOnlyErrorProp,
	        _a.sum = {
	            value: function () {
	                if (sumCache === undefined) {
	                    sumCache = arr.reduce(function (p, c) { return p + (parseFloat(String(c)) || 0); }, 0);
	                }
	                return sumCache;
	            },
	        },
	        _a.toMutable = {
	            value: function () {
	                return arr.map(function (v) { return _1.toMutable(v); });
	            }
	        },
	        _a));
	    // Proxify
	    if (typeof Proxy !== "undefined") {
	        if (forceDeep) {
	            arr.forEach(function (v) { return _1.from(v, true); });
	        }
	        arr = new Proxy(arr, proxyHandler(forceDeep));
	    }
	    else {
	        arr.forEach(function (v) { return _1.from(v, true); });
	        arr = Object.freeze(arr);
	    }
	    // Add Array to cache.
	    return arr;
	    var _a;
	}
	exports.from = from;
	function proxyHandler(forceDeep) {
	    return {
	        get: forceDeep ? undefined : function (oTarget, sKey) {
	            var value = oTarget[sKey];
	            var typeOf = typeof value;
	            if (forceDeep || value === undefined || value === null || typeOf === "function" || typeOf === "symbol") {
	                return value;
	            }
	            return _1.from(value);
	        },
	        set: function (oTarget, sKey, vValue) {
	            throw new errors_1.ReadonlyError("Setting an index or property on ConcreteArray is forbidden.");
	        },
	        deleteProperty: function (oTarget, sKey) {
	            throw new errors_1.ReadonlyError("Deleting an index on ConcreteArray is forbidden.");
	        },
	        defineProperty: function (oTarget, sKey, oDesc) {
	            throw new errors_1.ReadonlyError("Defining a property on ConcreteArray is forbidden.");
	        },
	    };
	}
	//# sourceMappingURL=array.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * The ReadonlyError is thrown during an attempt to change a Concrete object.
	 */
	var ReadonlyError = (function (_super) {
	    __extends(ReadonlyError, _super);
	    /**
	     * Constructs the ReadonlyError.
	     * @param message - the error message.
	     */
	    function ReadonlyError(message) {
	        var _this = _super.call(this, message) || this;
	        _this.name = "ReadonlyError";
	        return _this;
	    }
	    return ReadonlyError;
	}(Error));
	exports.ReadonlyError = ReadonlyError;
	//# sourceMappingURL=errors.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errors_1 = __webpack_require__(5);
	var ConcreteStructure_1 = __webpack_require__(3);
	var guards_1 = __webpack_require__(2);
	var readOnlyErrorProp = {
	    value: function () { throw new errors_1.ReadonlyError("This method is not supported by ConcreteDate."); },
	};
	/**
	 *
	 */
	function from(date) {
	    if (guards_1.isDate(date)) {
	        return date;
	    }
	    date = Object.defineProperties(date, (_a = {},
	        _a[ConcreteStructure_1.ConcreteStructureTypeKey] = {
	            value: ConcreteStructure_1.ConcreteStructureType.DATE
	        },
	        _a.setTime = readOnlyErrorProp,
	        _a.setUTCMilliseconds = readOnlyErrorProp,
	        _a.setSeconds = readOnlyErrorProp,
	        _a.setUTCSeconds = readOnlyErrorProp,
	        _a.setMinutes = readOnlyErrorProp,
	        _a.setUTCMinutes = readOnlyErrorProp,
	        _a.setHours = readOnlyErrorProp,
	        _a.setUTCHours = readOnlyErrorProp,
	        _a.setDate = readOnlyErrorProp,
	        _a.setUTCDate = readOnlyErrorProp,
	        _a.setMonth = readOnlyErrorProp,
	        _a.setUTCMonth = readOnlyErrorProp,
	        _a.setFullYear = readOnlyErrorProp,
	        _a.setUTCFullYear = readOnlyErrorProp,
	        _a.toMutable = {
	            enumerable: true,
	            value: function () {
	                return new Date(date.getTime());
	            },
	        },
	        _a));
	    return Object.freeze(date);
	    var _a;
	}
	exports.from = from;
	//# sourceMappingURL=date.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errors_1 = __webpack_require__(5);
	var guards_1 = __webpack_require__(2);
	var ConcreteStructure_1 = __webpack_require__(3);
	var _1 = __webpack_require__(1);
	var readOnlyErrorProp = {
	    value: function () { throw new errors_1.ReadonlyError("This method is not supported by ConcreteMap."); },
	};
	/**
	 *
	 */
	function from(map) {
	    if (guards_1.isMap(map)) {
	        return map;
	    }
	    map.forEach(function (v, k) { return _1.from(v); }); // map.set(k, fromAll(v)));
	    map = Object.defineProperties(map, (_a = {},
	        _a[ConcreteStructure_1.ConcreteStructureTypeKey] = {
	            value: ConcreteStructure_1.ConcreteStructureType.MAP
	        },
	        _a.clear = readOnlyErrorProp,
	        _a.delete = readOnlyErrorProp,
	        _a.set = readOnlyErrorProp,
	        _a.toMutable = {
	            enumerable: true,
	            value: function () {
	                var mutMap = new Map();
	                map.forEach(function (v, k) { return mutMap.set(k, _1.toMutable(v)); });
	                return mutMap;
	            }
	        },
	        _a));
	    return Object.freeze(map);
	    var _a;
	}
	exports.from = from;
	//# sourceMappingURL=map.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConcreteStructure_1 = __webpack_require__(3);
	var errors_1 = __webpack_require__(5);
	var guards_1 = __webpack_require__(2);
	var _1 = __webpack_require__(1);
	/**
	 *
	 */
	function toMutable(obj) {
	    var mutObj = {};
	    for (var key in obj) {
	        mutObj[key] = _1.toMutable(obj[key]);
	    }
	    return mutObj;
	}
	exports.toMutable = toMutable;
	/**
	 *
	 */
	function from(obj, forceDeep) {
	    if (guards_1.isObject(obj)) {
	        return obj;
	    }
	    obj = Object.defineProperty(obj, ConcreteStructure_1.ConcreteStructureTypeKey, {
	        value: ConcreteStructure_1.ConcreteStructureType.OBJECT
	    });
	    // Proxify or Freeze
	    if (typeof Proxy !== "undefined") {
	        if (forceDeep) {
	            for (var v in obj) {
	                _1.from(obj[v], true);
	            }
	        }
	        obj = new Proxy(obj, proxyHandler(forceDeep));
	    }
	    else {
	        for (var v in obj) {
	            _1.from(obj[v], true);
	        }
	        obj = Object.freeze(obj);
	    }
	    return obj;
	}
	exports.from = from;
	function proxyHandler(forceDeep) {
	    return {
	        get: forceDeep ? undefined : function (oTarget, sKey) {
	            var value = oTarget[sKey];
	            var typeOf = typeof value;
	            if (forceDeep || value === undefined || value === null || typeOf === "function" || typeOf === "symbol") {
	                return value;
	            }
	            return _1.from(value);
	        },
	        set: function (oTarget, sKey, vValue) {
	            throw new errors_1.ReadonlyError("Setting an index or property on ConcreteObject is forbidden.");
	        },
	        deleteProperty: function (oTarget, sKey) {
	            throw new errors_1.ReadonlyError("Deleting an index on ConcreteObject is forbidden.");
	        },
	        defineProperty: function (oTarget, sKey, oDesc) {
	            throw new errors_1.ReadonlyError("Defining a property on ConcreteObject is forbidden.");
	        },
	    };
	}
	//# sourceMappingURL=object.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errors_1 = __webpack_require__(5);
	var guards_1 = __webpack_require__(2);
	var ConcreteStructure_1 = __webpack_require__(3);
	var _1 = __webpack_require__(1);
	var readOnlyErrorProp = {
	    value: function () { throw new errors_1.ReadonlyError("This method is not supported by ConcreteSet."); },
	};
	/**
	 *
	 */
	function from(set) {
	    if (guards_1.isSet(set)) {
	        return set;
	    }
	    set.forEach(function (v) { return _1.from(v); });
	    set = Object.defineProperties(set, (_a = {},
	        _a[ConcreteStructure_1.ConcreteStructureTypeKey] = {
	            value: ConcreteStructure_1.ConcreteStructureType.MAP
	        },
	        _a.add = readOnlyErrorProp,
	        _a.clear = readOnlyErrorProp,
	        _a.delete = readOnlyErrorProp,
	        _a.toMutable = {
	            enumerable: true,
	            value: function () {
	                var mutSet = new Set();
	                set.forEach(function (v) { return mutSet.add(_1.toMutable(v)); });
	                return mutSet;
	            },
	        },
	        _a));
	    return Object.freeze(set);
	    var _a;
	}
	exports.from = from;
	//# sourceMappingURL=set.js.map

/***/ }
/******/ ])
});
;