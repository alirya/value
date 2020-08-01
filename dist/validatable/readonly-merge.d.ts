import ValidInfer from "@dikac/t-validatable/boolean/infer";
import Value from "../value";
import ValueInfer from "../value/infer";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * readonly wrapper for {@link Validatable}
 */
export default class ReadonlyMerge<ValueType extends Value, ValidatableType extends Validatable> implements Readonly<Validatable<ValidInfer<ValidatableType>>>, Readonly<Value<ValueInfer<ValueType>>> {
    protected subjectValue: ValueType;
    protected subjectValidatable: ValidatableType;
    constructor(subjectValue: ValueType, subjectValidatable: ValidatableType);
    get valid(): ValidInfer<ValidatableType>;
    get value(): ValueInfer<ValueType>;
}
