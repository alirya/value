import ValueContainer from '../../../dist/value';
import Value from '../../../dist/value/boolean/value';
import Object_ from '@alirya/object/boolean/object';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('valid', function() {

    let value : ValueContainer<object> = {value:{}};

    expect(Value(value, Object_)).toBe(true);

});


it('invalid', function() {

    let value : ValueContainer<string> = {value:'string'};

    expect(Value(value, Object_)).toBe(false);

});
