"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var errors_1 = require("../errors");
var ConcreteStructure_1 = require("./ConcreteStructure");
/**
 *
 */
var ConcreteDate = (function (_super) {
    __extends(ConcreteDate, _super);
    function ConcreteDate(date) {
        return _super.call(this, date.getTime()) || this;
    }
    ConcreteDate.prototype[ConcreteStructure_1.ConcreteStructureTypeKey] = function () {
        return ConcreteStructure_1.ConcreteStructureType.DATE;
    };
    ConcreteDate.prototype.setTime = function (time) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setMilliseconds = function (ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setUTCMilliseconds = function (ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setSeconds = function (sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setUTCSeconds = function (sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setMinutes = function (min, sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setUTCMinutes = function (min, sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setHours = function (hours, min, sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setUTCHours = function (hours, min, sec, ms) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setDate = function (date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setUTCDate = function (date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setMonth = function (month, date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setUTCMonth = function (month, date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setFullYear = function (year, month, date) {
        throw new errors_1.ReadonlyError("");
    };
    ConcreteDate.prototype.setUTCFullYear = function (year, month, date) {
        throw new errors_1.ReadonlyError("");
    };
    return ConcreteDate;
}(Date));
exports.ConcreteDate = ConcreteDate;
//# sourceMappingURL=ConcreteDate.js.map