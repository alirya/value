import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Wrapper from "@dikac/t-validator/wrapper";
import Value from "../value";
import Parameter from "@dikac/t-validator/parameter/parameter";
import MessageInterface from "@dikac/t-message/message";
import ReadonlyMerge from "../message/readonly-merge";
import Function from "@dikac/t-function/function";
import FunctionSingle from "@dikac/t-function/function-single";
import MessageCallback from "@dikac/t-message/callback";
import MessageMemoize from "@dikac/t-message/memoize";

type ValidatorType<Val> = Validatable  & Value<Val>;
type MessageType<Val, Msg> = FunctionSingle<Readonly<Validatable & Value<Val>>, Msg>;

export default class Message<
    Parameter,
    Val,
    Msg
> implements Validator<
    Parameter,
    ValidatorType<Val>>,
    MessageInterface<MessageType<Val, Msg>
> {

    constructor(
        public subject : Validator<Parameter, ValidatorType<Val>>,
        public message : MessageType<Val, Msg>,
    ) {

    }

    validate(value: Parameter): ValidatorType<Val> & MessageInterface<Msg> {

        let validatable = this.subject.validate(value);
        let message = new MessageMemoize( new MessageCallback(this.message, [validatable]));

        return new ReadonlyMerge(validatable, message, validatable);
    }
}
