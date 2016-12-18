
import { ReadonlyError } from "../errors";
import { ConcreteMap }   from "../interfaces/ConcreteMap";
import { isMap }         from "../guards";

import { ConcreteStructureType, ConcreteStructureTypeKey } from "./ConcreteStructure";

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

    if (isMap(map)) { return map; }

    map.forEach((v, k) => fromAll(v)); // map.set(k, fromAll(v)));

    map = Object.defineProperties(map, {
        [ConcreteStructureTypeKey]: {
            value: ConcreteStructureType.MAP
        },
        clear     : readOnlyErrorProp,
        delete    : readOnlyErrorProp,
        set       : readOnlyErrorProp,
        toMutable : {
            enumerable: true,
            value: function () {
                const mutMap = new Map<K, V>();
                map.forEach((v, k) => mutMap.set(k, toMutableAll(v as any) as any as V));
                return mutMap;
            }
        },
    });

    return Object.freeze(map) as ConcreteMap<K, V>;
}
