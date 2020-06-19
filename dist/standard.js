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
     * create {@link Value} form {@param value}
     */
    function Standard(value) {
        return { value: value };
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map