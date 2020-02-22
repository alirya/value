import Value from "./value";
export default class Readonly<V> implements globalThis.Readonly<Value<V>> {
    readonly value: V;
    constructor(value: V);
}
