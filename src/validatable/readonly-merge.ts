import ValidInfer from "@dikac/t-validatable/boolean/boolean";
import Value from "../value";
import ValueInfer from "../value/value";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * readonly wrapper for {@link Validatable}
 */

export default class ReadonlyMerge<
    ValueType extends Value,
    ValidatableType extends Validatable,
> implements
    Readonly<Validatable<ValidInfer<ValidatableType>>>,
    Readonly<Value<ValueInfer<ValueType>>>
{
    constructor(
        protected subjectValue : ValueType,
        protected subjectValidatable : ValidatableType,
    ) {

    }

    get valid() : ValidInfer<ValidatableType> {

        return <ValidInfer<ValidatableType>>this.subjectValidatable.valid;
    }

    get value() : ValueInfer<ValueType> {

        return <ValueInfer<ValueType>> this.subjectValue.value;
    }
}
