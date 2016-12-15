
import "mocha";
import * as assert from "assert";

import * as Concrete from "../dist/";

interface ITestObj {
    string: string;
    number: number;
    bool: boolean;
    array: string[];
    objArray: Array<{ [key: string]: number }>;
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
        objArray: [ {a: 1}, {b: 2}, {c: 3}, {d: 4} ],
        date: new Date(),
        map: new Map<string, number>([["a", 1], ["b", 2], ["c", 3] ]),
        set: new Set<string>(["a", "b", "c"]),
    };

    const cobj = Concrete.from(obj);

    it("should have same keys as original", function () {

        assert.deepEqual(Object.keys(obj), Object.keys(cobj));
    });

    it("should reject propery reassignments", function () {

        assert.throws(() => (cobj as any).string = "Goodby", "Allowed `cobj.string`");
        assert.throws(() => Object.create(cobj as any).string = "Goodby", "Allowed `cobj.string` 2");
        assert.throws(() => cobj.array[0] = "d", "Allowed `cobj.array[0] = \"d\"`");
        assert.throws(() => cobj.date.setTime(1234), "Allowed `cobj.date.setTime(1234)`");
        assert.throws(() => cobj.map.set("d", 4), "Allowed `cobj.map.set(\"d\", 4)`");
        assert.throws(() => cobj.set.add("d"), "Allowed `cobj.set.add(\"d\")`");
    });

    it("should generate immutable object", function () {

        const obj2 = Concrete.toMutable(cobj);
        assert.deepEqual(Object.keys(obj), Object.keys(obj2));
    });

});
