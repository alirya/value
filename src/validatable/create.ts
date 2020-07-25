import Value from "../value";
import Validatable from "@dikac/t-validatable/validatable";

export default function Create<Val, Valid extends boolean>(value : Val, valid : Valid) : Validatable<Valid> & Value<Val> {

    return {
        valid : valid,
        value : value
    };
}
