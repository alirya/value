import PropertyExists from "@dikac/t-object/property/boolean/exists";
/**
 * check if {@param value} is compatible with {@link ValueInterface}
 */
export default function Value(value) {
    return PropertyExists(value, 'value');
}
//# sourceMappingURL=value.js.map