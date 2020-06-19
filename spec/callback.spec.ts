import Callback from "../dist/callback";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("basic", function() {

    let fn = function (number : number) {

        return number + number;
    };

    let callback = new Callback({value:fn, argument:[1]});

    it('validate initial data', function () {

        expect(callback.argument).toEqual([1]);
        expect(callback.subject.value).toEqual(fn);

    });

    it('validate value', function () {

        expect(callback.value).toEqual(2);

    });

    it('change argument', function () {

        callback.subject.argument = [2];
        expect(callback.argument).toEqual([2]);

    })

    it('validate value', function () {

        expect(callback.value).toEqual(4);

    });
});




