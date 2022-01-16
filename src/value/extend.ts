import Value from '../value';
import Infer from './infer';

export type Extend<ValueT extends Value, Extend extends Infer<ValueT>> = {
    [Key in keyof ValueT]: Key extends 'value' ? Extend : ValueT[Key];
};

export default Extend;
