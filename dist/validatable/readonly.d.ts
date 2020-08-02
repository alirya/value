import Value from "../value";
import ValidatableReadonly from "@dikac/t-validatable/readonly";
/**
 * read only wrapper for {@link Value} and {@link Validatable}
 */
export default class Readonly<ValueT, Valid extends boolean> extends ValidatableReadonly<Valid> implements globalThis.Readonly<Value<ValueT>> {
    private _value;
    constructor(_value: ValueT, valid: Valid);
    get value(): ValueT;
}
