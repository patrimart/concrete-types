
import { ReadonlyError } from "../errors";
import { ConcreteSet }   from "../interfaces/ConcreteSet";
import { isSet }         from "../guards";

import { ConcreteStructureType, ConcreteStructureTypeKey } from "./ConcreteStructure";

import {
    from as fromAll,
    toMutable as toMutableAll,
} from "../";


const readOnlyErrorProp = {
    value: function () { throw new ReadonlyError("This method is not supported by ConcreteSet."); },
};

/**
 * 
 */
export function from <T> (set: Set<T>): ConcreteSet<T> {

    if (isSet(set)) { return set; }

    set.forEach(v => fromAll(v));
    let sumCache: number;

    set = Object.defineProperties(set, {
        [ConcreteStructureTypeKey]: {
            value: ConcreteStructureType.MAP
        },
        add       : readOnlyErrorProp,
        clear     : readOnlyErrorProp,
        delete    : readOnlyErrorProp,
        sum       : {
            value: function () {
                if (sumCache === undefined) {
                    sumCache = 0;
                    set.forEach(v => sumCache += parseFloat(String(v)) || 0);
                }
                return sumCache;
            },
        },
        toMutable : {
            value: function () {
                const mutSet = new Set<T>();
                set.forEach(v => mutSet.add(toMutableAll(v as any) as any));
                return mutSet;
            },
        },
    });

    return Object.freeze(set) as ConcreteSet<T>;
}
