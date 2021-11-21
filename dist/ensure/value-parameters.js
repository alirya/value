import AssertString from "../assert/value";
import ValueError from "../assert/throwable/value-parameters";
/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function ValueParameters(value, error = ValueError) {
    AssertString(value, error);
    return value;
}
//# sourceMappingURL=value-parameters.js.map