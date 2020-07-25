import Value from "../value";
import Validation from "@dikac/t-boolean/validation/validation";
import Callback from "./callback";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * {@link Callback} factory by using {@param object}
 *
 * {@link validation} is used as callback
 * {@link Value} is used as value
 */
export default function CallbackFromObject<
    Val,
    Return extends boolean,
>(
    object : Value<Val> & Validation<[Val], Return>,
) : Readonly<Value<Val>> & Readonly<Validatable<Return>> {

    return Callback(object.value, object.validation);
}

