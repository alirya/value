import ValidatorInterface from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Parameter from "@dikac/t-validator/parameter/parameter";
import Value from "../value";
import MessageInterface from "@dikac/t-message/message";
import FunctionSingle from "@dikac/t-function/function-single";
import MessageMemoize from "@dikac/t-message/memoize";
import ReadonlyMerge from "../message/readonly-merge";
import MessageCallback from "@dikac/t-message/callback";

export default class Message<
    Validator extends ValidatorInterface<unknown, Validatable & Value>, Message
> implements
    ValidatorInterface<unknown, Validatable & Value<Parameter<Validator>>  & MessageInterface<Message>>,
    MessageInterface<FunctionSingle<ValidatorValidatable<Validator>, Message>> {

    constructor(
        public subject : Validator,
        public message : FunctionSingle<ValidatorValidatable<Validator>, Message>
    ) {
    }

    validate(value: Parameter<Validator>): Validatable & Value<Parameter<Validator>> & MessageInterface<Message> {

        let validatable = this.subject.validate(value);
        let message = new MessageMemoize( new MessageCallback(this.message, [<ValidatorValidatable<Validator>>validatable]));

        return <Validatable & Value<Parameter<Validator>> & MessageInterface<Message>> new ReadonlyMerge(validatable, message, validatable);
    }
}
