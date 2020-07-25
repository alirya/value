(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/readonly-merge", "@dikac/t-value/message/callback", "../boolean/typeof-from-object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-value/message/readonly-merge");
    const callback_1 = require("@dikac/t-value/message/callback");
    const typeof_from_object_1 = require("../boolean/typeof-from-object");
    class Typeof extends readonly_merge_1.default {
        constructor(value, type, message) {
            let container = {
                type: type,
                value: value,
            };
            let msg = callback_1.default(container, typeof_from_object_1.default, () => message(this));
            super(container, msg, msg);
            this.type = type;
        }
    }
    exports.default = Typeof;
});
//# sourceMappingURL=typeof.js.map