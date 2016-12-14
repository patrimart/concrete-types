
import { ReadonlyError } from "../errors";
import { ConcreteDate }  from "../interfaces/ConcreteDate";
import {
    ConcreteStructureType,
    ConcreteStructureTypeKey
} from "./ConcreteStructure";

import { isDate } from "../guards";


const readOnlyErrorProp = {
    value: function () { throw new ReadonlyError("This method is not supported by ConcreteDate."); },
};

/**
 * 
 */
export function from (date: Date): ConcreteDate {

    if (isDate(date)) { return date as ConcreteDate; }

    date = Object.defineProperties(date, {
        [ConcreteStructureTypeKey]: {
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

    return Object.freeze<Date>(date) as ConcreteDate;
}
