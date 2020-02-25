import Value from "./value";

export default function ValueActualObject(type : string, value : string) : string {

    return Value(type) + `, actual '${value}'`
}
