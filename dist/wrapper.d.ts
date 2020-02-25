import Value from "./value";
export default class Wrapper<Data, Container extends Value<Data>> implements Readonly<Value<Data>> {
    valueContainer: Container;
    constructor(valueContainer: Container);
    get value(): Data;
}
