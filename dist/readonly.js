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
     * Readonly wrapper for {@link Value}
     */
    class Readonly {
        constructor(subject) {
            this.subject = subject;
        }
        get value() {
            return this.subject.value;
        }
    }
    exports.default = Readonly;
});
//# sourceMappingURL=readonly.js.map