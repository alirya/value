import Type from "@dikac/t-validatable/type/type";
import Value from "./value";

export default function ValueObject(data : Type) : string {

    return Value(data.type);
}
