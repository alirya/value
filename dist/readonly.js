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
    class Readonly_ {
        constructor(value) {
            this.value = value;
        }
    }
    exports.default = Readonly_;
    function R(value) {
        value.value = 1;
    }
    R(new Readonly_(1));
});
//# sourceMappingURL=readonly.js.map