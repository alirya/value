export default interface Value<Value = any> {

   value : Value
}


export type Infer<Data> = Data extends Value<infer As> ? As : never;
