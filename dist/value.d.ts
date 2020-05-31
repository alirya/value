export default interface Value<Value = any> {
    value: Value;
}
export declare type Infer<Data> = Data extends Value<infer As> ? As : never;
