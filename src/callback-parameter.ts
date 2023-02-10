import Value from './value';
import Argument from '@alirya/function/argument/argument';
import Call from '@alirya/function/argument/value/call-parameter.js';
import Callback from '@alirya/function/callback/callback';
import Callable from '@alirya/function/callable';

export default class CallbackParameter<
    FunctionType extends Callable,
> implements Readonly<Value<ReturnType<FunctionType>>>
{

    constructor(
        private subject : Callback<FunctionType> & Argument<Parameters<FunctionType>>,
    ) {
    }

    get value () : ReturnType<FunctionType> {

        return Call(this.subject);
    }
}
