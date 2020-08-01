(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-function/argument/value/call"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const call_1 = require("@dikac/t-function/argument/value/call");
    class CallbackFromObject {
        constructor(subject) {
            this.subject = subject;
        }
        get value() {
            return call_1.default(this.subject);
        }
    }
    exports.default = CallbackFromObject;
});
//# sourceMappingURL=callback-from-object.js.map