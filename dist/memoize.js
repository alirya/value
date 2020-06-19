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
     * Wrap {@link Value} and cache its value
     *
     * suitable to cached value from heave operation
     */
    class Memoize {
        constructor(subject) {
            this.subject = subject;
            this.reset();
        }
        get valid() {
            return this.memoized !== undefined;
        }
        /**
         * clear cached value
         */
        reset() {
            this.memoized = undefined;
        }
        get value() {
            if (!this.valid) {
                this.memoized = {
                    value: this.subject.value
                };
            }
            return this.memoized.value;
        }
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map