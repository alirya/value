import Validator from "@dikac/t-validator/validator";
import ReturnInfer from "@dikac/t-validator/return/infer";
import MessageInterface from "@dikac/t-message/message";
import FunctionSingle from "@dikac/t-function/function-single";
import BaseInfer from "@dikac/t-validator/parameter/base/infer";
import TypeInfer from "@dikac/t-validator/parameter/type/infer";
import Return from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";
export default class Message<ValidatorT extends Validator, MessageT> implements Validator<BaseInfer<ValidatorT>, TypeInfer<ValidatorT>, Instance<BaseInfer<ValidatorT>, MessageT>>, MessageInterface<FunctionSingle<ReturnInfer<ValidatorT>, MessageT>> {
    subject: ValidatorT;
    message: FunctionSingle<ReturnInfer<ValidatorT>, MessageT>;
    constructor(subject: ValidatorT, message: FunctionSingle<ReturnInfer<ValidatorT>, MessageT>);
    validate<Argument extends BaseInfer<ValidatorT>>(value: Argument): Return<BaseInfer<ValidatorT>, Argument, TypeInfer<ValidatorT>, Instance<BaseInfer<ValidatorT>, MessageT>>;
}
