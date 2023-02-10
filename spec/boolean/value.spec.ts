import Type from '../../dist/boolean/value.js';
import Value from '../../dist/value';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    const data : object = {null:null};

    if(Type(data)) {
        const value : Value = data;
    } else {
        // @ts-expect-error
        const value : Value = data;
    }

    it('result equal', function() {
        expect(true).toBe(true);
    });
});

describe('unvalidated value', function() {

    describe('valid', function() {

        it('string', () => {

            const value = {value : 'string'};
            expect(Type(value)).toBe(true);

        });

        it('integer', () => {

            const value = {value : 1};
            expect(Type(value)).toBe(true);

        });
    });

    describe('invalid', function() {

        it('string', () => {

            const value = {string:'string'};
            expect(Type(value)).toBe(false);

        });

        it('integer', () => {

            const value = {integer:1};
            expect(Type(value)).toBe(false);

        });
    });
});


describe('validated value', function() {

    describe('valid', function() {

        it('object', () => {

            const value = {value :{}};
            expect(Type(value)).toBe(true);
        });

        it('class', () => {

            class C {
                constructor(
                    public value : object = {}
                ){}
            }

            expect(Type(new C)).toBe(true);
        });
    });

    describe('invalid value', function() {

        it('object', () => {

            const value = {};
            expect(Type(value)).toBe(false);
        });

        it('class', () => {

            class C {
                constructor(
                    public string : string = '1'
                ){}
            }

            expect(Type(new C)).toBe(false);
        });
    });
});
