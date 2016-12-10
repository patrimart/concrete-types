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