import CallbackFromObject from "./callback-from-object";
export default function Callback(callback, argument) {
    return new CallbackFromObject({
        callback: callback,
        argument: argument
    });
}
//# sourceMappingURL=callback.js.map