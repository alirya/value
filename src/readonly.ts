import Value from "./value";


export default class Readonly_<V> implements Readonly<Value<V>> {

    constructor(
        readonly value : V
    ){}
}

function R(value : Value<any>) {

    value.value = 1;
}

R(new Readonly_(1));
