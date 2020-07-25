(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/typeof"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const typeof_1 = require("../validatable/typeof");
    class Typeof {
        constructor(type, message) {
            this.type = type;
            this.message = message;
        }
        validate(value) {
            return new typeof_1.default(value, this.type, this.message);
        }
    }
    exports.default = Typeof;
});
//# sourceMappingURL=typeof.js.map