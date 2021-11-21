import ValueType from "../../boolean/string/value-parameters";
import Callback from "@dikac/t-function/assert/throwable/callback-parameters";
export default function ValueParameters(value, message = ValueType, error = (string) => new Error(string)) {
    return Callback([value], message, error);
}
//# sourceMappingURL=value-parameters.js.map