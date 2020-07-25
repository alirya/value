import Value from "../value";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callback<Val, Return extends boolean = boolean>(value: Val, validation: Function<[Val], Return>): Readonly<Value<Val> & Validatable<Return>>;
