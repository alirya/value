import ObjectProperty from "../dist/object-property";

it("enable console log", () => spyOn(console, 'log').and.callThrough());

describe("get", function() {

    describe("array", function() {

        let op = new ObjectProperty([1,2], 'length');

        it(`length`, () => expect(op.value).toBe(2));
    });

    describe("object", function() {

        let object = {
            str : 'string',
            num : 2
        };

        it(`str`, () => {
            let op = new ObjectProperty(object, 'str');
            expect(op.value).toBe('string')
        });

        it(`num`, () => {
            let op = new ObjectProperty(object, 'num');
            expect(op.value).toBe(2)
        });

    });
});


describe("set", function() {

    describe("array", function() {

        let array = [1,2];
        let op = new ObjectProperty(array, 'length');

        it(`length`, () => expect(op.value).toBe(2));

        it(`set length`, () => {

            op.value = 1;
            expect(op.value).toBe(1)
            expect(array).toEqual([1]);
        });
    });

    describe("object", function() {

        let object = {
            str : 'string',
            num : 2
        };

        it(`set str`, () => {
            let op = new ObjectProperty(object, 'str');
            op.value = 'updated string';

            expect(op.value).toBe('updated string')
            expect(object.str).toBe('updated string')
        });

        it(`num`, () => {

            let op = new ObjectProperty(object, 'num');
            op.value = 5;
            expect(op.value).toBe(5)
            expect(object.num).toBe(5)
        });

    });
});
