import ReadonlyValue from "../validatable/readonly";
import Message from "@dikac/t-message/message";
export default class Readonly<Value, MessageT, Valid extends boolean> extends ReadonlyValue<Value, Valid> implements globalThis.Readonly<Message<MessageT>> {
    private _message;
    constructor(value: Value, valid: Valid, _message: MessageT);
    get message(): MessageT;
}
