import Value from "./value";
export default class ObjectProperty<Key extends keyof Object, Object extends object> implements Value<Object[Key]> {
    object: Object;
    key: Key;
    constructor(object: Object, key: Key);
    get value(): Object[Key];
    set value(value: Object[Key]);
}
