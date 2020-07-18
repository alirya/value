import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/return/return";
import ValueWrapperMerge from "../validatable/readonly-merge";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * merge {@link Value}, {@link Message} and {@link Validatable}
 */
export default class ReadonlyMerge<
    Val extends Value,
    Msg extends Message,
    Instance extends Validatable,
> extends
    ValueWrapperMerge<Val, Instance>
implements
    Readonly<Message<InferMessage<Msg>>>
{

    constructor(
         subjectValue: Val,
         protected subjectMessage: Msg,
         subjectValidatable: Instance,
    ) {
        super(subjectValue, subjectValidatable)
    }

    get message(): InferMessage<Msg> {

        return <InferMessage<Msg>> this.subjectMessage.message;
    }
}
