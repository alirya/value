import Value from "../value";
import Function from "@dikac/t-function/function";
import Validation from "@dikac/t-boolean/validation/validation";
import Message from "@dikac/t-message/message";
import Callback from "./callback";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * {@link Callback} factory by using {@param object}
 *
 * {@link validation} is used as callback
 * {@link Value} is used as value
 * {@link Message} is used as message
 */
export default function CallbackObject<
    Val,
    Msg,
    Return extends boolean = boolean
>(
    object : Value<Val> & Validation<[Val], Return> & Message<Function<[Readonly<Value<Val>> & Readonly<Validatable<Return>>], Msg>>,
) : Readonly<Value<Val>> & Readonly<Validatable<Return>> & Readonly<Message<Msg>> {

    return Callback(object.value, object.validation, object.message);

}

