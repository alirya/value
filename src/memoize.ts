import Value from "./value";
import Infer from "./infer/value";

/**
 * Wrap {@link Value} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    Container extends Value = Value
> implements Readonly<
    Value<Infer<Container>>
> {
    protected memoized : Value<Infer<Container>>|undefined;

    constructor(
        public subject : Container
    ) {
        this.reset();
    }

    /**
     * clear cached value
     */
    reset () {

        this.memoized = undefined;
    }

    get value () : Infer<Container> {

        if(!this.memoized) {

            this.memoized = {
                value : <Infer<Container>>this.subject.value
            };
        }

        return this.memoized.value;
    }

}
