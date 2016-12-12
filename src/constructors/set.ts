
import { ReadonlyError } from "../errors";
import { ConcreteSet }   from "../interfaces/ConcreteSet";

import { ConcreteStructureType } from "./ConcreteStructure";
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

    set.forEach(v => fromAll(v));

    set = Object.defineProperties(set, {
        ConcreteStructureTypeKey: {
            value: ConcreteStructureType.MAP
        },
        add       : readOnlyErrorProp,
        clear     : readOnlyErrorProp,
        delete    : readOnlyErrorProp,
        toMutable : function () {
            const mutSet = new Set<T>();
            set.forEach(v => mutSet.add(toMutableAll(v) as any));
            return mutSet;
        },
    });

set = new Proxy(set, {
        set: function (oTarget, sKey, vValue) {
            throw new ReadonlyError("Setting a property on a ConcreteDate is forbidden.");
        },
        deleteProperty: function (oTarget, sKey) {
            throw new ReadonlyError("Deleting a property on a ConcreteDate is forbidden.");
        },
        defineProperty: function (oTarget, sKey, oDesc) {
            throw new ReadonlyError("Defining a property on a ConcreteDate is forbidden.");
        },
    });

    return set as ConcreteSet<T>;
}
