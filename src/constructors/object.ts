
import { is } from "../guards";

import { ConcreteStructureType, ConcreteStructureTypeKey } from "./ConcreteStructure";

import { ReadonlyError }  from "../errors";
import { ConcreteObject } from "../interfaces/";

import * as consArray from "./array";
import * as consDate  from "./date";
import * as consMap   from "./map";
import * as consSet   from "./set";

import {
    from as fromAll,
    toMutable as toMutableAll,
} from "../";

/**
 * 
 */
export function toMutable <T> (obj: ConcreteObject<T>): T {
    const mutObj: any = {};
    for (const key in obj) {
        mutObj[key] = toMutableAll((obj as any)[key]);
    }
    return mutObj as T;
}

/**
 * 
 */
export function from <T extends Object> (obj: T, forceDeep?: boolean): ConcreteObject<T> {

    obj = Object.defineProperty(obj, ConcreteStructureTypeKey, {
        value: ConcreteStructureType.OBJECT
    });

    // Proxify or Freeze
    const proxy = Proxy || undefined;
    if (proxy) {
        if (forceDeep) { for (let v in obj) { fromAll(obj[v] as any, true); } }
        obj = new proxy(obj, proxyHandler(forceDeep)) as T;
    } else {
        for (let v in obj) { fromAll(obj[v] as any, true); }
        obj = Object.freeze(obj) as T;
    }

    return obj as ConcreteObject<T>;
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
            throw new ReadonlyError("Setting an index or property on ConcreteObject is forbidden.");
        },

        deleteProperty: function (oTarget, sKey) {
            throw new ReadonlyError("Deleting an index on ConcreteObject is forbidden.");
        },

        defineProperty: function (oTarget, sKey, oDesc) {
            throw new ReadonlyError("Defining a property on ConcreteObject is forbidden.");
        },
    };
}
