import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Callback from "@dikac/t-function/callback/callback";
import Callable from "@dikac/t-function/callable";
export default class CallbackFromObject<FunctionType extends Callable> implements Readonly<Value<ReturnType<FunctionType>>> {
    private subject;
    constructor(subject: Callback<FunctionType> & Argument<Parameters<FunctionType>>);
    get value(): ReturnType<FunctionType>;
}
