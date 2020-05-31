import Value, { Infer } from "./value";
export default class Wrapper<Container extends Value = Value> implements Readonly<Value<Infer<Container>>> {
    valueContainer: Container;
    constructor(valueContainer: Container);
    get value(): Infer<Container>;
}
