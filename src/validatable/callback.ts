import Value from "../value";
import Function from "@dikac/t-function/function";
import ReadonlyMerge from "./readonly-merge";
import CallbackValidatable from "@dikac/t-validatable/callback";
import Memoize from "@dikac/t-validatable/memoize";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callback<
    Val,
    Return extends boolean = boolean,
>(
    value : Val,
    validation : Function<[Val], Return>
) : Readonly<Value<Val> & Validatable<Return>> {

    let callback = new CallbackValidatable([value], validation);
    let memoize = new Memoize(callback);

    return new ReadonlyMerge({value : value}, memoize);
}
