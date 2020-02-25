import Value from "./value";

export default class Wrapper<Data, Container extends Value<Data>> implements Readonly<Value<Data>> {

    constructor(
        public valueContainer : Container
    ){

    }

    get value() : Data {

        return this.valueContainer.value;
    }
}

