import Value from "./value";
import Infer from "./infer/value";
/**
 * Readonly wrapper for {@link Value}
 */
export default class Readonly<Container extends Value = Value> implements Readonly<Value<Infer<Container>>> {
    subject: Container;
    constructor(subject: Container);
    get value(): Infer<Container>;
}
