(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/typeof"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const typeof_1 = require("../../boolean/string/typeof");
    function Typeof(object) {
        return typeof_1.default(object.valid, object.value, object.type);
    }
    exports.default = Typeof;
});
//# sourceMappingURL=typeof.js.map