import PropertyExists from "@dikac/t-object/property/boolean/exists";
/**
 * check if {@param value} is compatible with {@link ValueInterface}
 */
export default function Value(value) {
    if (!PropertyExists(value, 'value')) {
        return false;
    }
    return true;
}
//# sourceMappingURL=value.js.map