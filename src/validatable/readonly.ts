import Validatable from "@dikac/t-validatable/validatable";
import Value from "../value";
import ValidatableReadonly from "@dikac/t-validatable/readonly";
/**
 * read only wrapper for {@link Value} and {@link Validatable}
 */
export default class Readonly<
    Val,
    Valid extends boolean
> extends ValidatableReadonly<Valid> implements
    globalThis.Readonly<Value<Val>>
{

    constructor(
        private _value : Val,
        valid : Valid,
    ) {
        super(valid);
    }

    get value() : Val {

        return this._value;
    }

}
