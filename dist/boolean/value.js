(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/property/boolean/exists"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const exists_1 = require("@dikac/t-object/property/boolean/exists");
    /**
     * check if {@param value} is compatible with {@link ValueInterface}
     */
    function Value(value) {
        if (!exists_1.default(value, 'value')) {
            return false;
        }
        return true;
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map