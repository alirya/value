import Value from "../value";
export declare type Replace<ValueT extends Value, Replace extends boolean> = {
    [Key in keyof ValueT]: Key extends 'value' ? Replace : ValueT[Key];
};
export default Replace;
