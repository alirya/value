import ValueInterface from "../value";

type Infer<Type> = Type extends ValueInterface<infer As> ? As : never;

export default Infer;
