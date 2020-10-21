import ValueInterface from "../../value";
import ValueObject from "../../boolean/value";

export default function Value<ValueType>(
    value : ValueInterface<unknown>,
    guard : (value:unknown)=>value is ValueType
) : value is ValueInterface<ValueType> {

    return ValueObject(value) && guard(value.value);
}
