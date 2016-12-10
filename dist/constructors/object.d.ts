import { ConcreteDate } from "../interfaces/ConcreteDate";
import { ConcreteObject } from "../interfaces/ConcreteObject";
export declare function toMutable<T>(obj: ConcreteObject<T>): T;
export declare function from(date: Date): ConcreteDate;
