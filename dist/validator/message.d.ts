import ValidatorInterface from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Parameter from "@dikac/t-validator/parameter/parameter";
import Value from "../value";
import MessageInterface from "@dikac/t-message/message";
import FunctionSingle from "@dikac/t-function/function-single";
export default class Message<Validator extends ValidatorInterface<unknown, Validatable & Value>, Message> implements ValidatorInterface<unknown, Validatable & Value<Parameter<Validator>> & MessageInterface<Message>>, MessageInterface<FunctionSingle<ValidatorValidatable<Validator>, Message>> {
    subject: Validator;
    message: FunctionSingle<ValidatorValidatable<Validator>, Message>;
    constructor(subject: Validator, message: FunctionSingle<ValidatorValidatable<Validator>, Message>);
    validate(value: Parameter<Validator>): Validatable & Value<Parameter<Validator>> & MessageInterface<Message>;
}
