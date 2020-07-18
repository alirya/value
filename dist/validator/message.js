(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../message/readonly-merge", "@dikac/t-message/callback", "@dikac/t-message/memoize"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("../message/readonly-merge");
    const callback_1 = require("@dikac/t-message/callback");
    const memoize_1 = require("@dikac/t-message/memoize");
    class Message {
        constructor(subject, message) {
            this.subject = subject;
            this.message = message;
        }
        validate(value) {
            let validatable = this.subject.validate(value);
            let message = new memoize_1.default(new callback_1.default(this.message, [validatable]));
            return new readonly_merge_1.default(validatable, message, validatable);
        }
    }
    exports.default = Message;
});
//# sourceMappingURL=message.js.map