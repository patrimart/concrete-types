"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var errors_1 = require("../errors");
var ConcreteStructure_1 = require("./ConcreteStructure");
function from(date) {
    return new ConcreteDateConstructor(date);
}
exports.from = from;
/**
 *
 */
var ConcreteDateConstructor = (function (_super) {
    __extends(ConcreteDateConstructor, _super);
    function ConcreteDateConstructor(date) {
        return _super.call(this, date.getTime()) || this;
    }
    ConcreteDateConstructor.prototype[ConcreteStructure_1.ConcreteStructureTypeKey] = function () {
        return ConcreteStructure_1.ConcreteStructureType.DATE;
    };
    ConcreteDateConstructor.prototype.setTime = function (time) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setMilliseconds = function (ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setUTCMilliseconds = function (ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setSeconds = function (sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setUTCSeconds = function (sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setMinutes = function (min, sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setUTCMinutes = function (min, sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setHours = function (hours, min, sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setUTCHours = function (hours, min, sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setDate = function (date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setUTCDate = function (date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setMonth = function (month, date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setUTCMonth = function (month, date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setFullYear = function (year, month, date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.setUTCFullYear = function (year, month, date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDateConstructor.prototype.toMutable = function () {
        return new Date(this.getTime());
    };
    return ConcreteDateConstructor;
}(Date));
//# sourceMappingURL=date.js.map