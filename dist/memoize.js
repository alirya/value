(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Wrap {@link Value} and cache its value
     *
     * suitable to cached value from heave operation
     */
    class Memoize {
        constructor(subject) {
            this.subject = subject;
            this.clear();
        }
        get memoized() {
            return this.memoize !== undefined;
        }
        /**
         * clear cached value
         */
        clear() {
            this.memoize = undefined;
        }
        get value() {
            if (!this.memoized) {
                this.memoize = {
                    value: this.subject.value
                };
            }
            return this.memoize.value;
        }
    }
    exports.default = Memoize;
});
// import Value from "./value";
// import Infer from "./infer/value";
// import ReturnMemoize from "@dikac/t-function/return/memoize";
// import ReturnCallback from "@dikac/t-function/return/callback";
// import Functions from "@dikac/t-function/functions";
//
// /**
//  * Wrap {@link Value} and cache its value
//  *
//  * suitable to cached value from heave operation
//  */
// export default class Memoize<
//     Container extends Value = Value
// > implements
//     Readonly<Value<Infer<Container>>>
// {
//     protected memoize : ReturnMemoize<ReturnCallback<Functions<[], Infer<Container>>>>;
//
//     constructor(
//         public subject : Container
//     ) {
//
//         let callback  = new ReturnCallback({
//             argument : [],
//             value : () => subject.value
//         });
//
//         this.memoize = new ReturnMemoize(callback);
//     }
//
//     get memoized () : boolean {
//
//         return this.memoize.memoized;
//     }
//
//     /**
//      * clear cached value
//      */
//     clear () {
//
//         this.memoize.clear();
//     }
//
//     get value () : Infer<Container> {
//
//         return this.memoize.return;
//     }
//
// }
//# sourceMappingURL=memoize.js.map