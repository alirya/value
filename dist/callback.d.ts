import Value from "./value";
import Functions from "@dikac/t-function/function";
export default function Callback<FunctionT extends Functions>(callback: FunctionT, argument: Parameters<FunctionT>): Readonly<Value<ReturnType<FunctionT>>>;
