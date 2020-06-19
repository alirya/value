import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/functions";

export default class Callback<
    Fn extends Functions,
> implements Readonly<Value<ReturnType<Fn>>>, Argument<Parameters<Fn>>
{

    constructor(
        public functions : Fn,
        public argument : Parameters<Fn>
    ) {
    }

    get value () : ReturnType<Fn> {

        return this.functions(...this.argument);
    }

}
