import Value from "./value";
export default class Standard<V> implements Value<V> {
    value: V;
    constructor(value: V);
}
