import ValueInterface from "../../value";
import Type from "@dikac/t-validatable/type/type";
import ValueActual from "./value-actual";


export default function ValueActualObject(data : ValueInterface<string> & Type) : string {

    return ValueActual(data.type, data.value);
}
