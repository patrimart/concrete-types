
import { ConcreteStructure } from "../constructors/ConcreteStructure";

/**
 * 
 */
export interface ConcreteDate extends Date, ConcreteStructure {
    
    toMutable (): Date;
}
