(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/value", "@dikac/t-function/assert/callback", "./throwable/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../boolean/value");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const value_2 = require("./throwable/value");
    /**
     * assert {@param value} is compatible with {@link ValueInterface}
     *
     * @param value
     *
     * @param error
     * throw {@link Error} from {@param error} if  {@param value} is not compatible
     */
    function Value(value, error = value_2.default) {
        callback_1.default(value, value_1.default, error);
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map