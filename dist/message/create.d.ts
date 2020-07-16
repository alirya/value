import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
export default function Create<Val, Valid extends boolean, Msg>(value: Val, valid: Valid, message: Msg): Validatable<Valid> & Value<Val> & Message<Msg>;
