
import { ConcreteStructure } from "../constructors/ConcreteStructure";

/**
 * 
 */
export type ConcreteObject <T> = Readonly<T> & ConcreteStructure;
