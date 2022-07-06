import Callable from '@alirya/function/callable.js';
import Value from './value.js';
import Argument from '@alirya/function/argument/argument.js';
import {CallParameter} from '@alirya/function/argument/value/call.js';
import Callback from '@alirya/function/callback/callback.js';

export interface CallbackType<FunctionType extends Callable> extends Readonly<Value<ReturnType<FunctionType>>> {

}

export class CallbackParameter<
    FunctionType extends Callable,
> implements Readonly<Value<ReturnType<FunctionType>>>
{

    constructor(
        private subject : Callback<FunctionType> & Argument<Parameters<FunctionType>>,
    ) {
    }

    get value () : ReturnType<FunctionType> {

        return CallParameter(this.subject);
    }
}

export class CallbackParameters<
    FunctionType extends Callable,
    > extends CallbackParameter<FunctionType>
{
    constructor(
        callback : FunctionType,
        argument : Parameters<FunctionType>
    ) {

        super({callback, argument});
    }
}


namespace Callback {
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
    export type Type<FunctionType extends Callable> = CallbackType<FunctionType>;
}
export default Callback;
