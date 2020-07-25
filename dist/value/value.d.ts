import ValueInterface from "../value";
declare type Value<Type> = Type extends ValueInterface<infer As> ? As : never;
export default Value;
