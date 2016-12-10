
import { ReadonlyError } from "../errors";
import { ConcreteDate } from "../interfaces/ConcreteDate";
import {
    ConcreteStructureType,
    ConcreteStructureTypeKey
} from "./ConcreteStructure";


export function from (date: Date): ConcreteDate {

    return new ConcreteDateConstructor(date);
}

/**
 * 
 */
class ConcreteDateConstructor extends Date implements ConcreteDate {

    constructor (date: Date) {
        super(date.getTime());
    }

    public [ConcreteStructureTypeKey](): ConcreteStructureType {
        return ConcreteStructureType.DATE;
    }

    public setTime(time: number): number {
        throw new ReadonlyError("");
    }

    public setMilliseconds(ms: number): number {
        throw new ReadonlyError("");
    }

    public setUTCMilliseconds(ms: number): number {
        throw new ReadonlyError("");
    }

    public setSeconds(sec: number, ms?: number): number {
        throw new ReadonlyError("");
    }

    public setUTCSeconds(sec: number, ms?: number): number {
        throw new ReadonlyError("");
    }

    public setMinutes(min: number, sec?: number, ms?: number): number {
        throw new ReadonlyError("");
    }

    public setUTCMinutes(min: number, sec?: number, ms?: number): number {
        throw new ReadonlyError("");
    }

    public setHours(hours: number, min?: number, sec?: number, ms?: number): number {
        throw new ReadonlyError("");
    }

    public setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number {
        throw new ReadonlyError("");
    }

    public setDate(date: number): number {
        throw new ReadonlyError("");
    }

    public setUTCDate(date: number): number {
        throw new ReadonlyError("");
    }

    public setMonth(month: number, date?: number): number {
        throw new ReadonlyError("");
    }

    public setUTCMonth(month: number, date?: number): number {
        throw new ReadonlyError("");
    }

    public setFullYear(year: number, month?: number, date?: number): number {
        throw new ReadonlyError("");
    }

    public setUTCFullYear(year: number, month?: number, date?: number): number {
        throw new ReadonlyError("");
    }

    public toMutable (): Date {
        return new Date(this.getTime());
    }
}
