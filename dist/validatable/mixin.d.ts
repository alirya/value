import Value from "../value";
import Validatable from "@dikac/t-validatable/validatable";
import Wrapper from "../wrapper";
export default class Mixin<Data, Validatable_ extends Validatable, Container extends Value<Data>> extends Wrapper<Data, Container> implements Value<Data>, Validatable {
    validatable: Validatable_;
    constructor(value: Container, validatable: Validatable_);
    get valid(): boolean;
}
