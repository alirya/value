(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value-actual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_actual_1 = require("./value-actual");
    function ValueActualObject(data) {
        return value_actual_1.default(data.type, data.value);
    }
    exports.default = ValueActualObject;
});
//# sourceMappingURL=value-actual-object.js.map