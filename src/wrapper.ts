import Value from "./value";
import Infer from "./infer/value";

/**
 * Readonly wrapper for {@link Value}
 */
export default class Wrapper<
    Container extends Value = Value
> implements Readonly<
    Value<Infer<Container>>
> {

    constructor(
        public subject : Container
    ){

    }

    get value() : Infer<Container> {

        return <Infer<Container>> this.subject.value;
    }
}

