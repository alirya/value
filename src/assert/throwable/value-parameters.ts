import ValueType from '../../boolean/string/value-parameters';
import Callback from '@alirya/function/assert/throwable/callback-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

export default function ValueParameters(
    value : unknown,
    message : Dynamic<unknown, string> = ValueType,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return Callback([value], message, error);
}
