import Callback from "../../dist/value/callback";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("basic", function() {

    let fn = function (number : number) {

        return number + number;
    };

    let callback = new Callback(fn, [1]);

    it('validate initial data', function () {

        expect(callback.argument).toEqual([1]);
        expect(callback.functions).toEqual(fn);

    });

    it('validate value', function () {

        expect(callback.value).toEqual(2);

    });

    it('change argument', function () {

        callback.argument = [2];
        expect(callback.argument).toEqual([2]);

    })

    it('validate value', function () {

        expect(callback.value).toEqual(4);

    });
});




