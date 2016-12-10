"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var guards = require("./guards");
var consArray = require("./constructors/array");
var consDate = require("./constructors/date");
var consMap = require("./constructors/map");
var consObj = require("./constructors/object");
var consSet = require("./constructors/set");
__export(require("./guards"));
function from(obj) {
    if (obj instanceof Map) {
        return consMap.from(obj);
    }
    else if (obj instanceof Set) {
        return consSet.from(obj);
    }
    else if (obj instanceof Date) {
        return consDate.from(obj);
    }
    else if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            return consArray.from(obj);
        }
        return consObj.from(obj);
    }
    throw new TypeError("The given object type is not supported: " + obj);
}
exports.from = from;
function toMutable(obj) {
    if (guards.isArray(obj)) {
        return obj.toMutable();
    }
    else if (guards.isDate(obj)) {
        return obj.toMutable();
    }
    else if (guards.isMap(obj)) {
        return obj.toMutable();
    }
    else if (guards.isObject(obj)) {
        return consObj.toMutable(obj);
    }
    else if (guards.isSet(obj)) {
        return obj.toMutable();
    }
    throw new TypeError("The given object type is not supported: " + obj);
}
exports.toMutable = toMutable;
//# sourceMappingURL=index.js.map