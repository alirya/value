import Callable from '@alirya/function/callable';
import CallbackParameter from './callback-parameter.js';

export default class CallbackParameters<
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
