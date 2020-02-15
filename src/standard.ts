import Value from "./value";

export default class Standard<V> implements Value<V> {

    constructor(
        public value : V
    ){}
}
