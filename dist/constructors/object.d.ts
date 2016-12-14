import { ConcreteObject } from "../interfaces/";
/**
 *
 */
export declare function toMutable<T>(obj: ConcreteObject<T>): T;
/**
 *
 */
export declare function from<T>(obj: T, forceDeep?: boolean): ConcreteObject<T>;
