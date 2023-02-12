import ValueType from '../../boolean/string/value.js';
import {CallbackParameters} from '@alirya/function/assert/throwable/callback.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import Value from '../../value.js';
import Message from '@alirya/message/message.js';

export function ValueParameters(
    value : unknown,
    message : ValidatableParameters<unknown, string> = ValueType.Parameters,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return CallbackParameters([value], message, error);
}

export interface ValueArgument extends Value<unknown>, Partial<Message<ValidatableParameter<unknown, string>>> {
    error ?: (message:string)=>Error;
}

export function ValueParameter(
    {
        value,
        message = ValueType.Parameter,
        error = (string : string) => new Error(string)
    } : ValueArgument
) : Error {

    return ValueParameters(
        value,
        (value, valid) => message({value, valid}),
        error
    );
}


namespace Value {
    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
}
export default Value;
