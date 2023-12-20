# REDUCE
- [Array](../README.md)
  - [reduce](.)

## USE

```javascript
import reduce from "flp/Array/reduce/index.js";
```

## Examples

```javascript
import add from "flp/Number/add/index.js";

const numbers = [1, 2, 3, 4, 5];
const sum = reduce(add)(0)(numbers); // 15
```
