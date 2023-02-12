import ValueInterface from '../../value.js';
import ValueObject from '../../boolean/value.js';

export default function Value<ValueType>(
    value : ValueInterface<unknown>,
    guard : (value:unknown)=>value is ValueType
) : value is ValueInterface<ValueType> {

    return ValueObject(value) && guard(value.value);
}
