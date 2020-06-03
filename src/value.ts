export default interface Value<Value = unknown> {

   value : Value
}


export type Infer<Data> = Data extends Value<infer As> ? As : never;

