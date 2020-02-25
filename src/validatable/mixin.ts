import Value from "../value";
import Validatable from "@dikac/t-validatable/validatable";
import Wrapper from "../wrapper";

export default class Mixin<Data, Validatable_ extends Validatable, Container extends Value<Data>> extends Wrapper<Data, Container> implements Value<Data>, Validatable {

    constructor(
         value : Container,
         public validatable : Validatable_
    ) {
        super(value);
    }

    get valid() : boolean {

        return this.validatable.valid;
    }
}
