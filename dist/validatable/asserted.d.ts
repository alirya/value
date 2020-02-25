import Validatable from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Wrapper from "@dikac/t-validatable/wrapper";
import Message from "@dikac/t-message/message";
export default class Asserted<Val, Valid extends Validatable & ValueInterface<Val>> extends Wrapper<Valid> implements Readonly<Message<string>>, Readonly<ValueInterface<Val>> {
    messageContainer: Message<string>;
    exception: (message: string) => Error;
    constructor(validatable: Valid, messageContainer: Message<string>, exception?: (message: string) => Error);
    get message(): string;
    get value(): Val;
}
