
import "mocha";
import * as assert from "assert";

import * as Concrete from "../dist/";

interface ITestObj {
    string: string;
    number: number;
    bool: boolean;
    array: string[];
    date: Date;
    map: Map<string, number>;
    set: Set<string>;
}

describe("ConcreteObject", function () {

    const obj: ITestObj = {
        string: "Hello",
        number: 1,
        bool: true,
        array: ["a", "b", "c"],
        date: new Date(),
        map: new Map<string, number>(),
        set: new Set<string>(["a", "b", "c"]),
    };
    const cobj = Concrete.from(obj);

    it("should output with console.log()", function () {

        console.log(cobj);
        // console.log(Object.keys(cobj));
        for (let key in cobj) {
            console.log(`ConcreteObject key=${key} value=${cobj[key]}`);
        }
    });

    it("should equal JS Object", function () {

        assert.deepEqual(cobj, obj, "ConcreteObject not equal");

    });

});
