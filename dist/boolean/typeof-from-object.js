(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./typeof"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const typeof_1 = require("./typeof");
    function TypeofFromObject(value) {
        return typeof_1.default(value.value, value.type);
    }
    exports.default = TypeofFromObject;
});
//# sourceMappingURL=typeof-from-object.js.map