
import { is } from "../guards";

import { ConcreteStructureType, ConcreteStructureTypeKey } from "./ConcreteStructure";

import { ReadonlyError }  from "../errors";
import { ConcreteObject } from "../interfaces/";

import * as consArray from "./array";
import * as consDate  from "./date";
import * as consMap   from "./map";
import * as consSet   from "./set";

import { toMutable as toMutableAll } from "../";

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
export function from <T extends {}> (obj: T): ConcreteObject<T> {

    obj = Object.defineProperty(obj, ConcreteStructureTypeKey, {
        value: ConcreteStructureType.OBJECT
    });

    // Proxify
    obj = new Proxy(obj, {

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
            throw new ReadonlyError("Setting a property on this Concrete object is forbidden.");
        },

        deleteProperty: function (oTarget, sKey) {
            throw new ReadonlyError("Deleting a property on this Concrete object is forbidden.");
        },

        defineProperty: function (oTarget, sKey, oDesc) {
            throw new ReadonlyError("Defining a property on this Concrete object is forbidden.");
        },
    });

    return obj as ConcreteObject<T>;
}
