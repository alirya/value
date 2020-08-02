import Value from "../value";
declare type Infer<Type> = Type extends Value<infer As> ? As : never;
export default Infer;
