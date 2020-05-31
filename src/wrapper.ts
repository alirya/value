import Value, {Infer} from "./value";

export default class Wrapper<Container extends Value = Value> implements Readonly<Value<Infer<Container>>> {

    constructor(
        public valueContainer : Container
    ){

    }

    get value() : Infer<Container> {

        return this.valueContainer.value;
    }
}

