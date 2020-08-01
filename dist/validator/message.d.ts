import ValidatorInterface from "@dikac/t-validator/validator";
import ReturnInfer from "@dikac/t-validator/return/infer";
import MessageInterface from "@dikac/t-message/message";
import FunctionSingle from "@dikac/t-function/function-single";
import BaseInfer from "@dikac/t-validator/parameter/base/infer";
import TypeInfer from "@dikac/t-validator/parameter/type/infer";
import Return from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";
export default class Message<Validator extends ValidatorInterface, Message> implements ValidatorInterface<BaseInfer<Validator>, TypeInfer<Validator>, Instance<BaseInfer<Validator>, Message>>, MessageInterface<FunctionSingle<ReturnInfer<Validator>, Message>> {
    subject: Validator;
    message: FunctionSingle<ReturnInfer<Validator>, Message>;
    constructor(subject: Validator, message: FunctionSingle<ReturnInfer<Validator>, Message>);
    validate<Argument extends BaseInfer<Validator>>(value: Argument): Return<BaseInfer<Validator>, Argument, TypeInfer<Validator>, Instance<BaseInfer<Validator>, Message>>;
}
