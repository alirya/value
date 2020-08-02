import ReadonlyValue from "../validatable/readonly";
import Message from "@dikac/t-message/message";

export default class Readonly<
    Value,
    MessageT,
    Valid extends boolean
> extends
    ReadonlyValue<Value, Valid>
implements
    globalThis.Readonly<Message<MessageT>>
{
    constructor(
        value : Value,
        valid : Valid,
        private _message : MessageT,
    ) {
        super(value, valid);
    }

    get message() : MessageT {

        return this._message;
    }
}
