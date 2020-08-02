import Value from "../value";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";
import Guard from "@dikac/t-function/boolean/guard";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "@dikac/t-validator/return/return";
/**
 * same as {@link Callback} but with type
 */
export default function CallbackType<Argument, Valid extends Argument, MessageT>(value: Argument, callback: Guard<Argument, Valid>, messsage: Function<[Return<Argument, Argument, Valid, Readonly<Value<Argument> & Validatable & Message<MessageT>>>], MessageT>): Return<Argument, Argument, Valid, Readonly<Value<Argument> & Validatable & Message<MessageT>>>;
