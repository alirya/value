import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/functions";
import Call from "@dikac/t-function/any/call";

export default class Callback<
    Fn extends Functions,
> implements Readonly<Value<ReturnType<Fn>>>
{

    constructor(
        public subject : Value<Fn> & Argument<Parameters<Fn>>,
    ) {
    }

    get value () : ReturnType<Fn> {

        return Call(this.subject);
    }
}
