import Value from "../value";

type Infer<Type> = Type extends Value<infer As> ? As : never;

export default Infer;
