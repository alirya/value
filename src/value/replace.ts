import Value from '../value';

export type Replace<ValueT extends Value, Replace extends any> = {
    [Key in keyof ValueT]: Key extends 'value' ? Replace : ValueT[Key];
};

export default Replace;
