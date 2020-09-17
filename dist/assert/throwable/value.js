import ValueType from "../../boolean/string/value";
import Callback from "@dikac/t-function/assert/throwable/callback";
export default function Value(string, value = ValueType, error = (string) => new Error(string)) {
    return Callback([string], value, error);
}
//# sourceMappingURL=value.js.map