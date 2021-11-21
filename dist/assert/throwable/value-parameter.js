import ValueParameters from "./value-parameters";
export default function ValueParameter(
// string : unknown,
// value : (
//     valid : boolean,
//     value : unknown,
// ) => string = ValueType,
// error : (message:string)=>Error = (string : string) => new Error(string),
{ value, message, error }) {
    return ValueParameters(value, (value, valid) => message({ value, valid }), error);
}
//# sourceMappingURL=value-parameter.js.map