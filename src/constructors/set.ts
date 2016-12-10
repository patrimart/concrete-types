
import { ConcreteSet } from "../interfaces";


export function from <T> (set: Set<T>): ConcreteSet<T> {

    return set as any;
}
