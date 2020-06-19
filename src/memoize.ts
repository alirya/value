import Value from "./value";
import Infer from "./infer/value";
import Validatable from "@dikac/t-validatable/validatable";

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
    protected memoized : Value<Infer<Container>>|undefined;

    constructor(
        public subject : Container
    ) {
        this.clear();
    }

    get valid () : boolean {

        return this.memoized !== undefined;
    }

    /**
     * clear cached value
     */
    clear () {

        this.memoized = undefined;
    }

    get value () : Infer<Container> {

        if(!this.valid) {

            this.memoized = {
                value : <Infer<Container>>this.subject.value
            };
        }

        return (<Value<Infer<Container>>> this.memoized).value;
    }

}
