import Value from "../value";
import Callback from "./callback";
import Guard from "@dikac/t-function/boolean/guard";
import Validatable from "@dikac/t-validatable/validatable";

type Return<Argument, Valid> = (Readonly<Value<Valid> & Validatable<true>>) | (Readonly<Value<Argument> & Validatable<false>>);

/**
 * same as {@link Callback} but with type
 */
export default function CallbackType<
    Argument,
    Valid extends Argument,
>(
    value : Argument,
    callback : Guard<Argument,  Valid>
) : Return<Argument, Valid> {

    return <Return<Argument, Valid>> Callback(value, callback)
}
