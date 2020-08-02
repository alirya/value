import Value from "../value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
export default function Create<ValueT, Valid extends boolean, MessageT>(value: ValueT, valid: Valid, message: MessageT): Validatable<Valid> & Value<ValueT> & Message<MessageT>;
