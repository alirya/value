(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Value(valid, value) {
        if (valid) {
            return `value is compatible with Value interface`;
        }
        else {
            return `value is not compatible with Value interface`;
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map