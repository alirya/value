import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "../value";
import MessageInterface from "@dikac/t-message/message";
import FunctionSingle from "@dikac/t-function/function-single";
declare type ValidatorType<Val> = Validatable & Value<Val>;
declare type MessageType<Val, Msg> = FunctionSingle<Readonly<Validatable & Value<Val>>, Msg>;
export default class Message<Parameter, Val, Msg> implements Validator<Parameter, ValidatorType<Val>>, MessageInterface<MessageType<Val, Msg>> {
    subject: Validator<Parameter, ValidatorType<Val>>;
    message: MessageType<Val, Msg>;
    constructor(subject: Validator<Parameter, ValidatorType<Val>>, message: MessageType<Val, Msg>);
    validate(value: Parameter): ValidatorType<Val> & MessageInterface<Msg>;
}
export {};
