import Value from "./value";
import Infer from "./infer/value";

/**
 * Wrap {@link Value} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    Container extends Value = Value
    > implements
    Readonly<Value<Infer<Container>>>
{
    protected memoize : Value<Infer<Container>>|undefined;

    constructor(
        public subject : Container
    ) {
        this.clear();
    }

    get memoized () : boolean {

        return this.memoize !== undefined;
    }

    /**
     * clear cached value
     */
    clear () {

        this.memoize = undefined;
    }

    get value () : Infer<Container> {

        if(!this.memoized) {

            this.memoize = {
                value : <Infer<Container>>this.subject.value
            };
        }

        return (<Value<Infer<Container>>> this.memoize).value;
    }

}


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
