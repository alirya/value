import Typeof from "../../dist/boolean/typeof";
it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe("compiler compatible", function() {

    describe("boolean", function() {

        let value : unknown = true;

        if(Typeof(value, "boolean")) {

            let result : boolean = value;

        } else {

            // @ts-expect-error
            let result : boolean = value;
        }
    });

    describe("object", function() {

        let value : unknown = {};

        if(Typeof(value, "object")) {

            let result : object = value;

        } else {

            // @ts-expect-error
            let result : object = value;
        }
    });

    describe("string", function() {

        let value : unknown = 'str';

        if(Typeof(value, "string")) {

            let result : string = value;

        } else {

            // @ts-expect-error
            let result : string = value;
        }
    });


    describe("number", function() {

        let value : unknown = 1;

        if(Typeof(value, "number")) {

            let result : number = value;

        } else {

            // @ts-expect-error
            let result : number = value;
        }
    });

    describe("function", function() {

        let value : unknown = ()=>null;

        if(Typeof(value, "function")) {

            let result : ()=>any = value;

        } else {

            // @ts-expect-error
            let result : ()=>any = value;
        }
    });

});

describe("boolean", function() {

    it(`true`, () => {
        expect(Typeof(true, "boolean")).toBeTrue();
    });

    it(`false`, () => {
        expect(Typeof(false, "boolean")).toBeTrue();
    });

});

describe("string", function() {

    it(`primitive`, () => {
        expect(Typeof('str', "string")).toBeTrue();
    });

    it(`object`, () => {
        expect(Typeof(new String('str'), "string")).toBeFalse();
    });

});


describe("number", function() {

    it(`primitive`, () => {
        expect(Typeof(1, "number")).toBeTrue();
    });

    it(`nan`, () => {
        expect(Typeof(NaN, "number")).toBeTrue();
    });

});

describe("object", function() {

    it(`plain`, () => {
        expect(Typeof({}, "object")).toBeTrue();
    });

    it(`instance`, () => {
        expect(Typeof(new Map(), "object")).toBeTrue();
    });

});

describe("function", function() {

    it(`anonymous `, () => {
        expect(Typeof(function () {}, "function")).toBeTrue();
    });

    it(`anonymous arrow`, () => {
        expect(Typeof(()=>{}, "function")).toBeTrue();
    });

    it(`named`, () => {
        expect(Typeof(isNaN, "function")).toBeTrue();
    });

});

describe("empty", function() {

    it(`null `, () => {
        expect(Typeof(null, "object")).toBeTrue();
    });

    it(`undefined`, () => {
        expect(Typeof(undefined, "undefined")).toBeTrue();
    });

});
