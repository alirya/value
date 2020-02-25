(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("../wrapper");
    class Mixin extends wrapper_1.default {
        constructor(value, validatable) {
            super(value);
            this.validatable = validatable;
        }
        get valid() {
            return this.validatable.valid;
        }
    }
    exports.default = Mixin;
});
//# sourceMappingURL=mixin.js.map