
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

interface ITestObjMapped {
    pre_string: boolean;
    pre_number: boolean;
    pre_bool: boolean;
    pre_array: boolean;
    pre_objArray: boolean;
    pre_date: boolean;
    pre_map: boolean;
    pre_set: boolean;
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
    const cdobj = Concrete.from(obj, true);

    it("should have same keys as original", function () {

        assert.deepEqual(Object.keys(obj), Object.keys(cobj));
    });

    it("should support util methods", function () {

        cobj.$.forEach((v, k) => console.log("cobj().forEach() => ", k, v()));
        const pobj = cobj.$.pick("string", "number", "bool");
        console.log(pobj);
        const mobj = cobj.$.flatMap((v, k) => v);
        console.log(mobj);

        const zobj = cobj.$.zip();
        console.log(zobj.map(([k, v]) => [k, v()]));
        const uzobj = zobj.unzip();
        console.log(uzobj);
        assert.deepEqual(Object.keys(obj), Object.keys(uzobj));
    });

    it("should reject propery reassignments", function () {

        assert.throws(() => (cobj as any).string = "Goodby", "Allowed `cobj.string`");
        assert.throws(() => Object.create(cobj as any).string = "Goodby", "Allowed `cobj.string` 2");
        assert.throws(() => cobj.array[0] = "d", "Allowed `cobj.array[0] = \"d\"`");
        assert.throws(() => cobj.date.setTime(1234), "Allowed `cobj.date.setTime(1234)`");
        assert.throws(() => cobj.map.set("d", 4), "Allowed `cobj.map.set(\"d\", 4)`");
        assert.throws(() => cobj.set.add("d"), "Allowed `cobj.set.add(\"d\")`");

        assert.throws(() => delete cobj.date);
        assert.throws(() => Object.defineProperty(cobj, "test", {}));
    });

    it("should generate immutable object", function () {

        const obj2 = Concrete.toMutable(cobj);
        assert.deepEqual(Object.keys(obj), Object.keys(obj2));

        const obj3 = cobj.$.toMutable();
        assert.deepEqual(Object.keys(obj), Object.keys(obj3));
    });

});
