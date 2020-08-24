(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/value", "@dikac/t-function/assert/throwable/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../../boolean/string/value");
    const callback_1 = require("@dikac/t-function/assert/throwable/callback");
    function Value(string, value = value_1.default, error = (string) => new Error(string)) {
        return callback_1.default([string], value, error);
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map