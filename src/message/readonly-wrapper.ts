import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/return/return";
import ValueWrapper from "../validatable/readonly-wrapper";
import Value from "@dikac/t-value/value";

/**
 * read only wrapper for {@link Message}, {@link Value} and {@link Validatable}
 */

export default class ReadonlyWrapper<
    Subject extends Validatable & Message & Value = Validatable & Message & Value
> extends ValueWrapper<Subject> implements
    Readonly<Message<InferMessage<Subject>>> {

    get message() : InferMessage<Subject> {

        return <InferMessage<Subject>> this.subject.message;
    }
}
