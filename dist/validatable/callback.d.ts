import Value from "../value";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callback<ValueT, Return extends boolean = boolean>(value: ValueT, validation: Function<[ValueT], Return>): Readonly<Value<ValueT> & Validatable<Return>>;
