export * from "./ConcreteSet";
export * from "./ConcreteMap";
export * from "./ConcreteDate";
export * from "./ConcreteArray";
export * from "./ConcreteObject";
/**
 *
 */
/**
 *
 */
export declare type BasicValue = string | number | boolean | null | undefined | never;
/**
 *
 */
export declare type LazyValue<V> = () => V;
