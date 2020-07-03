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
            this.clear();
        }
        get memoized() {
            return this.memoize !== undefined;
        }
        /**
         * clear cached value
         */
        clear() {
            this.memoize = undefined;
        }
        get value() {
            if (!this.memoized) {
                this.memoize = {
                    value: this.subject.value
                };
            }
            return this.memoize.value;
        }
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map