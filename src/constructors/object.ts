
import { ConcreteStructureType, ConcreteStructureTypeKey }                from "./ConcreteStructure";
import { ConcreteObject, ConcreteArray, ConcreteTupleArray, ConcreteObjectUtils, LazyValue }  from "../interfaces/";

import * as consArray from "./array";
import * as consDate  from "./date";
import * as consMap   from "./map";
import * as consSet   from "./set";
import { isObject }   from "../guards";

import { ReadonlyError } from "../errors";

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
export function from <T> (obj: T, forceDeep?: boolean): ConcreteObject<T> {

    if (isObject<T>(obj)) { return obj; }

    obj = Object.defineProperty(obj, ConcreteStructureTypeKey, {
        value: ConcreteStructureType.OBJECT
    });

    if ("$" in obj === false) {
        obj = Object.defineProperty(obj, "$", { value: new ConObjUtils(obj as any) });
    }

    // Proxify or Freeze
    if (typeof Proxy !== "undefined") {
        if (forceDeep) { for (let v in obj) { fromAll(obj[v] as any, true); } }
        obj = new Proxy(obj, proxyHandler(forceDeep)) as T;
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


class ConObjUtils <T> implements ConcreteObjectUtils<T> {

    private _keys: Array<keyof T>;

    constructor (private target: ConcreteObject<T>) {
        this._keys = Object.keys(target) as Array<keyof T>;
    }

    /**
     * 
     */
    public forEach <K extends keyof T> (callbackfn: (value: LazyValue<T[K]>, key: K, index: number, obj: ConcreteObject<T>) => void, thisArg?: any) {

        this._keys.forEach((key, i) => callbackfn.call(thisArg, () => (this.target as any)[key], key, i, this.target));
    }
    
    /**
     * Simply return the key to keep the value, avoiding eval of lazy value.
     */
    public flatMap <K extends keyof T> (callbackfn: (value: T[K], key: K, index: number, obj: ConcreteObject<T>) => T[K], thisArg?: any): ConcreteObject<T> {

        return from(this._keys.reduce((o, k, i) => {
            o[k] = callbackfn.call(thisArg, (this.target as any)[k], k, i, this.target);
            return o;
        }, {} as T));
    }

    /**
     * 
     */
    public map <U> (callbackfn: (obj: T) => U, thisArg?: any): ConcreteObject<U> {

        return from(callbackfn.call(thisArg, this.target));
    }

    /**
     * 
     */
    public pick <K extends keyof T, U> (...keys: K[]): ConcreteObject<U> {

        const plucked = {} as any;
        keys.forEach(k => plucked[k] = (this.target as any)[k]);
        return from(plucked);
    }

    /**
     * 
     */
    public pluck <K extends keyof T> (...keys: K[]): ConcreteArray<T[K]> {

        const plucked = new Array<T[K]>(keys.length);
        keys.forEach((k, i) => plucked[i] = (this.target as any)[k]);
        return from(plucked) as any;
    }
    
    /**
     * 
     */
    zip <K extends keyof T, U extends [K, LazyValue<T[K]>]> (): ConcreteTupleArray<T, U> {

        return consArray.from(this._keys.reduce((p, k, i) => {
            p[i] = [k, () => (this.target as any)[k]] as U;
            return p;
        }, new Array<U>(this._keys.length))) as ConcreteTupleArray<T, U>;
    }

    /**
     * 
     */
    public toMutable (): T {
        return toMutable(this.target);
    };
}
