import ValueParameters from "./value-parameters";
/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function ValueParameter(
//value : object,
//error : (value:object)=>Error = ValueError,
{ value, error, }) {
    return ValueParameters(value, error);
    // AssertString(value, error);
    //
    // return value;
}
//# sourceMappingURL=value-parameter.js.map