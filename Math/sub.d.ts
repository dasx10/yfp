import type Lambda   from "../Types/Lambda";
import type Identity from "../Types/Identity";
/**
  * Subtract two numbers
  * @param {number} next
  * @return {function}
  * @example
  * ```javascript
  * sub(1)(2) // 1
  * sub(1)(-2) // -3
  * sub(-1)(2) // 3
  * sub(-1)(-2) // 1
  * sub(0)(0) // 0
  * sub(0)(-0) // 0
  * ```
  */
export default function sub<Y extends number>(y: Y): {
  <X extends number>(x: X): number;
  (x: number): number
};

export default function sub(y: number): {
  <X extends number>(x: X): number;
  (x: number): number
};
