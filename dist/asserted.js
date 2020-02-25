(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("@dikac/t-validatable/wrapper");
    class Asserted extends wrapper_1.default {
        constructor(validatable, messageContainer, exception = (message) => new Error(message)) {
            super(validatable);
            this.messageContainer = messageContainer;
            this.exception = exception;
        }
        get message() {
            return this.messageContainer.message;
        }
        get value() {
            if (!this.validatable.valid) {
                throw this.exception(this.message);
            }
            return this.validatable.value;
        }
    }
    exports.default = Asserted;
});
//# sourceMappingURL=asserted.js.map