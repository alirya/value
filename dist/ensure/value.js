import AssertString from "../assert/value";
import ValueError from "../assert/throwable/value";
/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function Value(value, error = ValueError) {
    AssertString(value, error);
    return value;
}
//# sourceMappingURL=value.js.map