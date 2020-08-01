import ValueInterface from "../value";
declare type Infer<Type> = Type extends ValueInterface<infer As> ? As : never;
export default Infer;
