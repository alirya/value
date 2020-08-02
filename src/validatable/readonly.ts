import Validatable from "@dikac/t-validatable/validatable";
import Value from "../value";
import ValidatableReadonly from "@dikac/t-validatable/readonly";
/**
 * read only wrapper for {@link Value} and {@link Validatable}
 */
export default class Readonly<
    ValueT,
    Valid extends boolean
> extends ValidatableReadonly<Valid> implements
    globalThis.Readonly<Value<ValueT>>
{

    constructor(
        private _value : ValueT,
        valid : Valid,
    ) {
        super(valid);
    }

    get value() : ValueT {

        return this._value;
    }

}
