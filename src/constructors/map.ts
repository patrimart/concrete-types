
import { ReadonlyError } from "../errors";
import { ConcreteMap }   from "../interfaces/ConcreteMap";

import { ConcreteStructureType } from "./ConcreteStructure";
import {
    from as fromAll,
    toMutable as toMutableAll,
} from "../";


const readOnlyErrorProp = {
    value: function () { throw new ReadonlyError("This method is not supported by ConcreteMap."); },
};

/**
 * 
 */
export function from <K, V> (map: Map<K, V>): ConcreteMap<K, V> {

    map.forEach((v, k) => fromAll(v)); // map.set(k, fromAll(v)));

    map = Object.defineProperties(map, {
        ConcreteStructureTypeKey: {
            value: ConcreteStructureType.MAP
        },
        clear     : readOnlyErrorProp,
        delete    : readOnlyErrorProp,
        set       : readOnlyErrorProp,
        toMutable : function () {
            const mutMap = new Map<K, V>();
            map.forEach((v, k) => mutMap.set(k, toMutableAll(v) as V));
            return mutMap;
        },
    });

    map = Object.freeze(map) as any;
    // map = new Proxy(map, {
    //     set: function (oTarget, sKey, vValue) {
    //         throw new ReadonlyError("Setting a property on a ConcreteDate is forbidden.");
    //     },
    //     deleteProperty: function (oTarget, sKey) {
    //         throw new ReadonlyError("Deleting a property on a ConcreteDate is forbidden.");
    //     },
    //     defineProperty: function (oTarget, sKey, oDesc) {
    //         throw new ReadonlyError("Defining a property on a ConcreteDate is forbidden.");
    //     },
    // });

    return map as ConcreteMap<K, V>;
}
