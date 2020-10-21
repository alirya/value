import ValueObject from "../../boolean/value";
export default function Value(value, guard) {
    return ValueObject(value) && guard(value.value);
}
//# sourceMappingURL=value.js.map