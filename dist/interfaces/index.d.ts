import { ConcreteStructure } from "../constructors/ConcreteStructure";
export * from "./ConcreteSet";
export * from "./ConcreteMap";
export * from "./ConcreteDate";
export * from "./ConcreteArray";
/**
 *
 */
export declare type ConcreteObject<T> = Readonly<T> & ConcreteStructure;
/**
 *
 */
export declare type BasicValue = string | number | boolean | null | undefined | never;
/**
 *
 */
export declare type LazyValue<V> = () => V;
