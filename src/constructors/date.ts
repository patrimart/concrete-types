
import { ReadonlyError } from "../errors";
import { ConcreteDate } from "../interfaces/ConcreteDate";
import {
    ConcreteStructureType,
    ConcreteStructureTypeKey
} from "./ConcreteStructure";


const readOnlyErrorProp = {
    value: function () { throw new ReadonlyError("This method is not supported by ConcreteDate."); },
};

/**
 * 
 */
export function from (date: Date): ConcreteDate {

    date = Object.defineProperties(date, {
        ConcreteStructureTypeKey: {
            value: ConcreteStructureType.DATE
        },
        setTime            : readOnlyErrorProp,
        setUTCMilliseconds : readOnlyErrorProp,
        setSeconds         : readOnlyErrorProp,
        setUTCSeconds      : readOnlyErrorProp,
        setMinutes         : readOnlyErrorProp,
        setUTCMinutes      : readOnlyErrorProp,
        setHours           : readOnlyErrorProp,
        setUTCHours        : readOnlyErrorProp,
        setDate            : readOnlyErrorProp,
        setUTCDate         : readOnlyErrorProp,
        setMonth           : readOnlyErrorProp,
        setUTCMonth        : readOnlyErrorProp,
        setFullYear        : readOnlyErrorProp,
        setUTCFullYear     : readOnlyErrorProp,
        toMutable          : function () {
            return new Date(date.getTime());
        },
    });

    date = Object.freeze<Date>(date) as any;
    // date = new Proxy(date, {
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

    return date as ConcreteDate;
}
