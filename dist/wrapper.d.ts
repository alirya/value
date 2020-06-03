import Value, { Infer } from "./value";
export default class Wrapper<Container extends Value = Value> implements Readonly<Value<Infer<Container>>> {
    subject: Container;
    constructor(subject: Container);
    get value(): Infer<Container>;
}
