(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./callback-from-object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_from_object_1 = require("./callback-from-object");
    function Callback(callback, argument) {
        return new callback_from_object_1.default({
            value: callback,
            argument: argument
        });
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map