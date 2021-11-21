import Value from "../../value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
export default function ValueParameter({ value, message, error }: Value<unknown> & Message<Dynamic<unknown, string>> & {
    error: (message: string) => Error;
}): Error;
