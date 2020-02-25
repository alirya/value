import Standard from "../standard";

export default class Value<V> extends Standard<V> {

    constructor(
         value : V,
         public valid : boolean
    ) {
        super(value);
    }
}
