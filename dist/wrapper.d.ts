import Value from "./value";
import Infer from "./infer/value";
export default class Wrapper<Container extends Value = Value> implements Readonly<Value<Infer<Container>>> {
    subject: Container;
    constructor(subject: Container);
    get value(): Infer<Container>;
}
