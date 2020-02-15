import Value from "./value";
export default class Readonly_<V> implements Readonly<Value<V>> {
    readonly value: V;
    constructor(value: V);
}
