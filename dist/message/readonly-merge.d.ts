import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/message/message";
import ValueWrapperMerge from "../validatable/readonly-merge";
import Value from "../value";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * merge {@link Value}, {@link Message} and {@link Validatable}
 */
export default class ReadonlyMerge<ValueT extends Value, MessageT extends Message, Instance extends Validatable> extends ValueWrapperMerge<ValueT, Instance> implements Readonly<Message<InferMessage<MessageT>>> {
    protected subjectMessage: MessageT;
    constructor(subjectValue: ValueT, subjectMessage: MessageT, subjectValidatable: Instance);
    get message(): InferMessage<MessageT>;
}
