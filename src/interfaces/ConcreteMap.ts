
import { ConcreteStructure } from "../constructors/ConcreteStructure";

/**
 * 
 */
export interface ConcreteMap <K, V> extends Map<K, V>, ConcreteStructure {
    
    /**
     * 
     */
    filter ( f: (k: K, v: () => V) => boolean ): this;
    
    /**
     * 
     */
    map ( f: (k: K, v: () => V) => [K, V] | K ): this;
    
    /**
     * 
     */
    map <U> ( f: (k: K, v: () => V) => [K, U]): ConcreteMap <K, U>;
    
    /**
     * 
     */
    pick (...keys: K[]): this;
    
    /**
     * 
     */
    reduce <L, U> ( f: (p: [L, U], c: [K, V]) => [L, U], i: [L, U]): ConcreteMap <L, U>;

    toMutable (): Map<K, V>;
}
