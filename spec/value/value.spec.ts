import Value from '../../dist/value/value.js';
import ValueContainer from '../../dist/value.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function() {

    const value : ValueContainer<string> = {value:'string'};

    const result : string = Value(value);

    it('result equal', function() {
        expect(true).toBe(true);
    });
});

it('result equal', function() {

    const value : ValueContainer<string> = {value:'string'};

    const result : string = Value(value);

    expect(result).toBe('string');

});

