
import { is } from "../guards";

import { ConcreteStructureType, ConcreteStructureTypeKey } from "./ConcreteStructure";

import { ReadonlyError }  from "../errors";
import { ConcreteArray } from "../interfaces/";

import * as consArray from "./object";
import * as consDate  from "./date";
import * as consMap   from "./map";
import * as consSet   from "./set";

import { toMutable as toMutableAll } from "../";


const readOnlyErrorProp = {
    value: function () { throw new ReadonlyError("This method is not supported by Concrete arrays."); },
};

export function from <T> (arr: T[]): ConcreteArray<T> {

    let sumCache: number;

    arr = Object.defineProperties(arr, {
        ConcreteStructureTypeKey: {
            value: ConcreteStructureType.ARRAY,
        },
        length     : { value: arr.length },
        copyWithin : readOnlyErrorProp,
        fill       : readOnlyErrorProp,
        pop        : readOnlyErrorProp,
        push       : readOnlyErrorProp,
        reverse    : readOnlyErrorProp,
        shift      : readOnlyErrorProp,
        sort       : readOnlyErrorProp,
        splice     : readOnlyErrorProp,
        unshift    : readOnlyErrorProp,
        sum        : {
            value: function () {
                if (sumCache === undefined) {
                    sumCache = arr.reduce((p, c) => p + (parseFloat(String(c)) || 0), 0);
                }
                return sumCache;
            },
        },
        toMutable  : function (): T[] {
            return arr.map(v => toMutableAll(v)) as T[];
        },
    });

    // Proxify
    arr = new Proxy(arr, {

        get: function (oTarget, sKey) {

            const value = (oTarget as any)[sKey];
            const typeOf = typeof value;

            if (value === undefined || value === null || typeOf === "function" || typeOf === "symbol") {
                return value;
            }
            // If already Concrete, return.
            if (is(value)) { return value; }
            // If not Concrete and supported object, make Concrete.
            if (value instanceof Map) {
                return consMap.from(value);
            } else if (value instanceof Set) {
                return consSet.from(value);
            } else if (value instanceof Date) {
                return consDate.from(value);
            } else if (typeOf === "object") {
                if (Array.isArray(value)) {
                    return consArray.from(value);
                } else if (value.constructor === Object) {
                    return from(value);
                }
            }
            // Else, return raw unsupported object.
            return value;
        },

        set: function (oTarget, sKey, vValue) {
            throw new ReadonlyError("Setting an index or property on this Concrete object is forbidden.");
        },

        deleteProperty: function (oTarget, sKey) {
            throw new ReadonlyError("Deleting an index on this Concrete array is forbidden.");
        },

        defineProperty: function (oTarget, sKey, oDesc) {
            throw new ReadonlyError("Defining a property on this Concrete array is forbidden.");
        },
    });

    // Add Array to cache.
    return arr as ConcreteArray<T>;
}
