import * as i from "./interfaces/";
import { Guards } from "./guards";
export declare namespace Concrete {
    type IArray<T> = i.IConcreteArray<T>;
    type IDate = i.IConcreteDate;
    type IMap<K, V> = i.IConcreteMap<K, V>;
    type IObj<T> = i.IConcreteObject<T> & Readonly<T>;
    type ISet<T> = i.IConcreteSet<T>;
    const guard: typeof Guards;
    function from<T>(arr: T[]): IArray<T>;
    function from(date: Date): IDate;
    function from<K, V>(map: Map<K, V>): IMap<K, V>;
    function from<T>(arr: Set<T>): ISet<T>;
    function from<T>(obj: T): IObj<T>;
    function toMutable<T>(obj: IArray<T>): T[];
    function toMutable(obj: IDate): Date;
    function toMutable<K, V>(obj: IMap<K, V>): Map<K, V>;
    function toMutable<T>(obj: IObj<T>): T;
    function toMutable<T>(obj: ISet<T>): Set<T>;
}
