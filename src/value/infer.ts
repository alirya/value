import Value from '../value.js';

type Infer<Type> = Type extends Value<infer As> ? As : never;

export default Infer;
