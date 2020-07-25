import Typeof from "../../dist/validator/typeof";
import TypeofString from "../../dist/validatable/string/typeof";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    describe('explicit', ()=>{

        let validator = new Typeof<"string">( 'string', TypeofString);
        let validatable = validator.validate('ab');

        if(validatable.valid) {

            let type : "string" = validator.type;
            let string : string = validatable.value;

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            let type : "string" = validator.type;
        }


    });

    describe('implicit', ()=>{

        let validator = new Typeof( 'string', TypeofString);
        let validatable = validator.validate('ab');

        if(validatable.valid) {

            // @ts-expect-error
            let type : "string" = validator.type;
            // @ts-expect-error
            let string : string = validatable.value;

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            // @ts-expect-error
            let type : "string" = validator.type;
        }


    });
});

describe(`validate`,function() {

    describe('string', ()=>{

        let validator = new Typeof<"string">( 'string', TypeofString);

        it('valid', ()=>{

            let validatable = validator.validate('ab');

            expect(validator.type).toBe('string');
            expect(validatable.valid).toBe(true);
            expect(validatable.type).toBe('string');
            expect(validatable.value).toBe('ab');
        });

        it('valid', ()=>{

            let validatable = validator.validate(2);

            expect(validator.type).toBe('string');
            expect(validatable.valid).toBe(false);
            expect(validatable.type).toBe('string');
            expect(validatable.value).toBe(2);
        });
    });

    describe('object', ()=>{

        let validator = new Typeof<"number">( 'number', TypeofString);

        it('valid', ()=>{

            let validatable = validator.validate('ab');

            expect(validator.type).toBe('number');
            expect(validatable.valid).toBe(false);
            expect(validatable.type).toBe('number');
            expect(validatable.value).toBe('ab');
        });

        it('valid', ()=>{

            let validatable = validator.validate(1);

            expect(validator.type).toBe('number');
            expect(validatable.valid).toBe(true);
            expect(validatable.type).toBe('number');
            expect(validatable.value).toBe(1);
        });
    });

});
