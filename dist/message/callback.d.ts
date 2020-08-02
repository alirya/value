import Value from "../value";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value}
 * to {@param validation}
 *
 * {@param message} is used to generate message
 */
export default function Callback<ValueT, MessageT, Return extends boolean = boolean>(value: ValueT, validation: Function<[ValueT], Return>, message: Function<[Readonly<Value<ValueT> & Validatable<Return>>], MessageT>): Readonly<Value<ValueT> & Validatable<Return> & Message<MessageT>>;
