
# Concrete Types
## Immutable data types for TypeScript and JavaScript.

[![Build Status](https://travis-ci.org/patrimart/concrete-types.svg?branch=master)](https://travis-ci.org/patrimart/concrete-types)
[![Coverage Status](https://coveralls.io/repos/github/patrimart/concrete-types/badge.svg?branch=master)](https://coveralls.io/github/patrimart/concrete-types?branch=master)


### Installation

Install the library.

```
npm install concrete-types
```


#### Requirements

This library uses the Proxy object. If your environment does not support Proxy, use a Proxy polyfill.
```
npm install proxy-polyfill
```


#### Usage

For TypeScript and ES6:
```
import * as Concrete from "concrete-types";
```

For browser's `<script>` importing:
```
<script src="node_modules/concrete-types/bundle/concrete.min.js"></script>
```
