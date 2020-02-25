import Standard from "../standard";
export default class Value<V> extends Standard<V> {
    valid: boolean;
    constructor(value: V, valid: boolean);
}
