
# Concrete Types
## Immutable objects and arrays for TypeScript and JavaScript.

[![Build Status](https://travis-ci.org/patrimart/concrete-types.svg?branch=master)](https://travis-ci.org/patrimart/concrete-types)
[![Coverage Status](https://coveralls.io/repos/github/patrimart/concrete-types/badge.svg?branch=master)](https://coveralls.io/github/patrimart/concrete-types?branch=master)


#### About

This library uses *structure sharing* and *lazy immutablility* in an effort to maximize performance
via the Proxy object. If your environment does not support `Proxy`, the library will fallback to deep-freezing
(walking the structure and applying `Object.freeze()`).

This library works best with plain-old JS objects, arrays and `Date()` objects. While it is aware of `Map` and `Set`
and will deep-freeze those objects, it is recommended you use [ImmutableJS](https://facebook.github.io/immutable-js/)
should you require more advanced immutable data structures.

**IMPORTANT.** Because of *structure sharing* and the nature of `Proxy`, modifying the original data structures will
modify the *Concrete* objects. Once you generate an immutable object with *Concrete*, discard the orginial.

Concrete objects can be used just like their original objects. `ConcreteObject` and `ConcreteArray` do have some additional
methods.

**If a program attempts to modify an object, a `ReadonlyError` will be thrown.**

A note on the LazyValue<V> type: `export type LazyValue<V> = () => V;`. Most object.$ methods return the value wrapped
in a function. This is to prevent unnecessary evaluations of the lazy immutability.


### Installation

Install the library.

```
npm i -S concrete-types
```


#### Usage

For TypeScript and ES6:
```js
import * as Concrete from "concrete-types";
```

For NodeJS:
```js
const Concrete = require("concrete-types");
```

For old-school script tag importing:
```html
<script src="node_modules/concrete-types/bundle/concrete.min.js"></script>
```

**Examples**

Plain JS Object:
```js
interface IObj {
    foo: string;
    bar: number;
    fooBar: {
        foo: boolean;
    }
}

const obj: IObj = {
    foo: "foo value",
    bar: 123,
    fooBar: {
        foo: "fooBar.foo value"
    }
};
// Generates a ConcreteObject.
const cobj = Concrete.from(obj);
// Use it like the original.
const anotherObj: IObj = cobj;

cobj.foo = "new value"; // Fail
delete cobj.foo;        // Fail

// Walk through the value/key pairs. Note LazyValue.
cobj.$.forEach((v, k, i, o) => {
    console.log(`value=${v()} key=${k} index=${i} cobj=${o}`);
});

// Walk through the object, returning a transformed value. No LazyValue.
cobj.$.flatMap((v, k, i, o) => k !=== "fooBar" ? v + v : v);

// Create a new ConcreteObject.
cobj.$.map(o => ({
    newFoo: `${o.foo} is new`,
    newBar: o.bar * 2
}));

// Pick out the given properties and create a new ConcreteObject.
const fooBarObj = cobj.$.pick("foo", "bar");

// Pluck out the values of the given properties and return a ConcreteArray.
const fooBarArray = cobj.$.pluck("foo", "bar");

// Convert the ConcreteObject into an array of key/value tuples:
// [["foo": "foo value", "bar": 123, "fooBar": {...}]]
const zipped = cobj.$.zip();
// Convert an array of key/value tuples into a ConcreteObject.
const cobj2: IObj = zipped.unzip();

// Deep copy to a mutable object.
const obj2 = cobj.toMutable();

```

Plain JS Array:
```js
const arr = [1, 2, 3, 4, 5];
const carr = Concrete.from(arr);

// Fail: copyWithin, fill, pop, push, reverse, shift, sort, splice, unshift
carr[1] = 3;  // Fail
carr.push(6); // Fail

// All other Array methods can be used, plus "sum()" and "toMutable()".
const total = carr.sum();

// Deep copy to a mutable array.
const arr2 = carr.toMutable();

```


#### Documentation

Coming Soon. Hopefully the examples are enough the get rolling for now.

If you are insatiably curious, dig into the interface definitions under `/src/interfaces`.


#### Benchmarks

Coming very soon.
