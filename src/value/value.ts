import ValueInterface from "../value";

type Value<Type> = Type extends ValueInterface<infer As> ? As : never;

export default Value;
