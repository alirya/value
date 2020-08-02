import Value from "../value";
import Guard from "@dikac/t-function/boolean/guard";
import Validatable from "@dikac/t-validatable/validatable";
declare type Return<Argument, Valid> = (Readonly<Value<Valid> & Validatable<true>>) | (Readonly<Value<Argument> & Validatable<false>>);
/**
 * same as {@link Callback} but with type
 */
export default function CallbackType<Argument, Valid extends Argument>(value: Argument, callback: Guard<Argument, Valid>): Return<Argument, Valid>;
export {};
