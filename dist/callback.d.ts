import Value from "./value";
import Functions from "@dikac/t-function/function";
export default function Callback<Fn extends Functions>(callback: Fn, argument: Parameters<Fn>): Readonly<Value<ReturnType<Fn>>>;
