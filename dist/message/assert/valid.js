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
     * Throw exception if given value is not {@link Validatable} type
     */
    function Valid(value, error) {
        if (!value.valid) {
            throw error(value);
        }
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map