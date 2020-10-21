import ValueInterface from "../../value";
export default function Value<ValueType>(value: ValueInterface<unknown>, guard: (value: unknown) => value is ValueType): value is ValueInterface<ValueType>;
