
import { ConcreteArray } from "../interfaces/ConcreteArray";


export function from <T> (arr: T[]): ConcreteArray<T> {

    return arr as any;
}
