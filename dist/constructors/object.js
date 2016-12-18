"use strict";
var ConcreteStructure_1 = require("./ConcreteStructure");
var consArray = require("./array");
var guards_1 = require("../guards");
var errors_1 = require("../errors");
var _1 = require("../");
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
    if ("$" in obj === false) {
        obj = Object.defineProperty(obj, "$", { value: new ConObjUtils(obj) });
    }
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
var ConObjUtils = (function () {
    function ConObjUtils(target) {
        this.target = target;
        this._keys = Object.keys(target);
    }
    /**
     *
     */
    ConObjUtils.prototype.forEach = function (callbackfn, thisArg) {
        var _this = this;
        this._keys.forEach(function (key, i) { return callbackfn.call(thisArg, function () { return _this.target[key]; }, key, i, _this.target); });
    };
    /**
     * Simply return the key to keep the value, avoiding eval of lazy value.
     */
    ConObjUtils.prototype.flatMap = function (callbackfn, thisArg) {
        var _this = this;
        return from(this._keys.reduce(function (o, k, i) {
            o[k] = callbackfn.call(thisArg, _this.target[k], k, i, _this.target);
            return o;
        }, {}));
    };
    /**
     *
     */
    ConObjUtils.prototype.map = function (callbackfn, thisArg) {
        return from(callbackfn.call(thisArg, this.target));
    };
    /**
     *
     */
    ConObjUtils.prototype.pick = function () {
        var _this = this;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var plucked = {};
        keys.forEach(function (k) { return plucked[k] = _this.target[k]; });
        return from(plucked);
    };
    /**
     *
     */
    ConObjUtils.prototype.pluck = function () {
        var _this = this;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var plucked = new Array(keys.length);
        keys.forEach(function (k, i) { return plucked[i] = _this.target[k]; });
        return from(plucked);
    };
    /**
     *
     */
    ConObjUtils.prototype.zip = function () {
        var _this = this;
        return consArray.from(this._keys.reduce(function (p, k, i) {
            p[i] = [k, function () { return _this.target[k]; }];
            return p;
        }, new Array(this._keys.length)));
    };
    /**
     *
     */
    ConObjUtils.prototype.toMutable = function () {
        return toMutable(this.target);
    };
    ;
    return ConObjUtils;
}());
//# sourceMappingURL=object.js.map