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
    /**
     * get {@link Value.value} value
     *
     * @param value
     * object to be extracted
     */
    function Value(value) {
        return value.value;
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map