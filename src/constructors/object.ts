
import { ConcreteDate } from "../interfaces/ConcreteDate";
import { ConcreteObject } from "../interfaces/ConcreteObject";


export function toMutable <T> (obj: ConcreteObject<T>): T {

    return obj;
}


export function from (date: Date): ConcreteDate {

    return date as any;
}
