import Value from "./value";
import Infer from "./infer/value";
/**
 * Wrap {@link Value} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<Container extends Value = Value> implements Readonly<Value<Infer<Container>>> {
    subject: Container;
    protected memoize: Value<Infer<Container>> | undefined;
    constructor(subject: Container);
    get memoized(): boolean;
    /**
     * clear cached value
     */
    clear(): void;
    get value(): Infer<Container>;
}
