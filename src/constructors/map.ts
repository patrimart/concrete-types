
import { ConcreteMap } from "../interfaces/ConcreteMap";


export function from <K, V> (map: Map<K, V>): ConcreteMap<K, V> {

    return map as any;
}
