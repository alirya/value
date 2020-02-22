import Value from "./value";

export default class Readonly<V> implements globalThis.Readonly<Value<V>> {

    constructor(
        readonly value : V
    ){}
}

