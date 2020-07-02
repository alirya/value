(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-function/return/memoize", "@dikac/t-function/return/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_1 = require("@dikac/t-function/return/memoize");
    const callback_1 = require("@dikac/t-function/return/callback");
    /**
     * Wrap {@link Value} and cache its value
     *
     * suitable to cached value from heave operation
     */
    class Memoize {
        constructor(subject) {
            this.subject = subject;
            let callback = new callback_1.default({
                argument: [],
                value: () => subject.value
            });
            this.memoize = new memoize_1.default(callback);
        }
        get memoized() {
            return this.memoize.memoized;
        }
        /**
         * clear cached value
         */
        clear() {
            this.memoize.clear();
        }
        get value() {
            return this.memoize.return;
        }
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map