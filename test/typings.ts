
import * as Concrete from "../src/";

interface IFoo  {
    hello: number;
    bye: string;
}


const obj: IFoo = { hello: 3, bye: "4" };
const cobj = Concrete.from(obj);
const iobj: IFoo = cobj;
console.log(cobj.hello);
// cobj.hello = 6;
const pobj = cobj.$.pick("hello", "bye");
// const hi = pobj.hello;

const arr = [1, 2, 3, 4];
const carr = Concrete.from(arr);
const iarr: number[] = carr;
// carr[1] = 3;

const map = new Map<string, string>();
map.set("foo", "bar");
const cmap = Concrete.from(map);
cmap.set("foo", "bar2");
const imap: Map<string, string> = cmap;
cmap
    // .pick("hello", "goodbye")
    // .filter((k, v) => true)
    // .filter(k => false)
    // .map((k, v) => [k, {hello: 2} as IFoo])
    // .map((k, v) => [k, v])
    // .map(k => [k, 3])
    .forEach((v, k) => { });

const set = new Set(["a", "b", "c", "d"]);
const cset = Concrete.from(set);
const iset: Set<string> = cset;

const cdate = Concrete.from(new Date());
const idate: Date = cdate;

test(cdate);

function test (date: Date) {
    console.log(date.toISOString());
}
