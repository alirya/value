import Value from "../value";
import Function from "@dikac/t-function/function";
import ValueCallback from "../validatable/callback";
import MessageCallback from "@dikac/t-message/callback";
import Memoize from "@dikac/t-message/memoize";
import ReadonlyMerge from "./readonly-merge";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value}
 * to {@param validation}
 *
 * {@param message} is used to generate message
 */
export default function Callback<
    Val,
    Msg,
    Return extends boolean = boolean
>(
    value : Val,
    validation : Function<[Val], Return>,
    message : Function<[Readonly<Value<Val> & Validatable<Return>>], Msg>,
) : Readonly<Value<Val> & Validatable<Return> & Message<Msg>> {

    let val = ValueCallback(value, validation);
    let callback = new MessageCallback(message, [val]);
    let memoize = new Memoize(callback);

    return new ReadonlyMerge(
        val, memoize, val
    );

}

