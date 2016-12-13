
import { is } from "../guards";

import { ConcreteStructureType, ConcreteStructureTypeKey } from "./ConcreteStructure";

import { ReadonlyError }  from "../errors";
import { ConcreteArray } from "../interfaces/";

import * as consArray from "./object";
import * as consDate  from "./date";
import * as consMap   from "./map";
import * as consSet   from "./set";

import {
    from as fromAll,
    toMutable as toMutableAll,
} from "../";


const readOnlyErrorProp = {
    value: function () { throw new ReadonlyError("This method is not supported by Concrete arrays."); },
};

export function from <T> (arr: T[], forceDeep?: boolean): ConcreteArray<T> {

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
    if (Proxy) {
        if (forceDeep) { arr.forEach(v => fromAll(v, true)); }
        arr = new Proxy(arr, proxyHandler(forceDeep)) as T[];
    } else {
        arr.forEach(v => fromAll(v, true));
        arr = Object.freeze(arr) as T[];
    }

    // Add Array to cache.
    return arr as ConcreteArray<T>;
}


function proxyHandler<T> (forceDeep?: boolean): ProxyHandler<T> {

    return {
        get: forceDeep ? undefined : function (oTarget, sKey) {

            const value = (oTarget as any)[sKey];
            const typeOf = typeof value;

            if (forceDeep || value === undefined || value === null || typeOf === "function" || typeOf === "symbol") {
                return value;
            }

            return fromAll(value);

        },

        set: function (oTarget, sKey, vValue) {
            throw new ReadonlyError("Setting an index or property on ConcreteArray is forbidden.");
        },

        deleteProperty: function (oTarget, sKey) {
            throw new ReadonlyError("Deleting an index on ConcreteArray is forbidden.");
        },

        defineProperty: function (oTarget, sKey, oDesc) {
            throw new ReadonlyError("Defining a property on ConcreteArray is forbidden.");
        },
    };
}
