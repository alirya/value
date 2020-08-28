import Value from "./value";
import Callable from "@dikac/t-function/callable";
export default function Callback<FunctionType extends Callable>(callback: FunctionType, argument: Parameters<FunctionType>): Readonly<Value<ReturnType<FunctionType>>>;
