import Type from '../../dist/boolean/value';
import Value from '../../dist/value';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let data : object = {null:null};

    if(Type(data)) {
        let value : Value = data;
    } else {
        // @ts-expect-error
        let value : Value = data;
    }

    it('result equal', function() {
        expect(true).toBe(true);
    });
});

describe('unvalidated value', function() {

    describe('valid', function() {

        it('string', () => {

            let value = {value : 'string'};
            expect(Type(value)).toBe(true)

        });

        it('integer', () => {

            let value = {value : 1};
            expect(Type(value)).toBe(true)

        });
    });

    describe('invalid', function() {

        it('string', () => {

            let value = {string:'string'};
            expect(Type(value)).toBe(false)

        });

        it('integer', () => {

            let value = {integer:1};
            expect(Type(value)).toBe(false)

        });
    });
})


describe('validated value', function() {

    describe('valid', function() {

        it('object', () => {

            let value = {value :{}};
            expect(Type(value)).toBe(true)
        });

        it('class', () => {

            class C {
                constructor(
                    public value : object = {}
                ){}
            }

            expect(Type(new C)).toBe(true)
        });
    });

    describe('invalid value', function() {

        it('object', () => {

            let value = {};
            expect(Type(value)).toBe(false)
        });

        it('class', () => {

            class C {
                constructor(
                    public string : string = '1'
                ){}
            }

            expect(Type(new C)).toBe(false)
        });
    });
})
