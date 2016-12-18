
// import { ConcreteStructure } from "../constructors/ConcreteStructure";

export * from "./ConcreteSet";
export * from "./ConcreteMap";
export * from "./ConcreteDate";
export * from "./ConcreteArray";
export * from "./ConcreteObject";

/**
 * 
 */
// export type ConcreteObject <T> = Readonly<T> & ConcreteStructure;

/**
 * 
 */
export type BasicValue = string | number | boolean | null | undefined | never;

/**
 * 
 */
export type LazyValue<V> = () => V;
