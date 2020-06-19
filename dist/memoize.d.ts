import Value from "./value";
import Infer from "./infer/value";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * Wrap {@link Value} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<Container extends Value = Value> implements Readonly<Value<Infer<Container>>>, Readonly<Validatable<boolean>> {
    subject: Container;
    protected memoized: Value<Infer<Container>> | undefined;
    constructor(subject: Container);
    get valid(): boolean;
    /**
     * clear cached value
     */
    reset(): void;
    get value(): Infer<Container>;
}
