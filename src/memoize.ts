import Value from "./value";
import Infer from "./infer/value";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnMemoize from "@dikac/t-function/return/memoize";
import ReturnCallback from "@dikac/t-function/return/callback";
import Functions from "@dikac/t-function/functions";

/**
 * Wrap {@link Value} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    Container extends Value = Value
> implements
    Readonly<Value<Infer<Container>>>,
    Readonly<Validatable<boolean>>
{
    protected memoized : ReturnMemoize<ReturnCallback<Functions<[], Infer<Container>>>>;

    constructor(
        public subject : Container
    ) {

        let callback  = new ReturnCallback({
            argument : [],
            value : () => subject.value
        });

        this.memoized = new ReturnMemoize(callback);
    }

    get valid () : boolean {

        return this.memoized.valid;
    }

    /**
     * clear cached value
     */
    clear () {

        this.memoized.clear();
    }

    get value () : Infer<Container> {

        return this.memoized.return;
    }

}
