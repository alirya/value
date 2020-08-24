(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/value", "../assert/throwable/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../assert/value");
    const value_2 = require("../assert/throwable/value");
    /**
     * return {@param value} is compatible with {@link ValueInterface}
     *
     * @param value
     *
     * @param error
     * throw {@link Error} from {@param error} if {@param value} is not compatible
     */
    function Value(value, error = value_2.default) {
        value_1.default(value, error);
        return value;
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map