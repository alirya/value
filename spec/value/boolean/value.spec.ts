import ValueContainer from '../../../dist/value.js';
import Value from '../../../dist/value/boolean/value.js';
import Object_ from '@axiona/object/boolean/object.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('valid', function() {

    const value : ValueContainer<object> = {value:{}};

    expect(Value(value, Object_)).toBe(true);

});


it('invalid', function() {

    const value : ValueContainer<string> = {value:'string'};

    expect(Value(value, Object_)).toBe(false);

});
