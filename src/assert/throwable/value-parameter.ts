import Value from '../../value';
import Message from '@alirya/message/message';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import ValueParameters from './value-parameters';

export default function ValueParameter(
    {
        value,
        message,
        error
    } : Value<unknown> & Message<Dynamic<unknown, string>> & {error : (message:string)=>Error}
) : Error {

    return ValueParameters(
        value,
        (value, valid) => message({value, valid}),
        error
    );
}
