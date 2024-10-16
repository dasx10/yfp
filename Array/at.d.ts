import type ArrayAt from "../types/Array/At";
import type Int from "../types/Number/Int";

type Ating<Index extends number> = <Values extends readonly any[]>(values: Values) => ArrayAt<Values, Index>;

/**
  * @example
  * ```
  * at(0)([1, 2, 3]) // 1
  * at(1)([1, 2, 3]) // 2
  * at(2)([1, 2, 3]) // 3
  * at(3)([1, 2, 3]) // undefined
  * at(-1)([1, 2, 3]) // 3
  * at(-2)([1, 2, 3]) // 2
  * at(-3)([1, 2, 3]) // 1
  * at(-4)([1, 2, 3]) // undefined
  * ```
  * @description Get the value at the specified index
  * @function
  * @name at
  * @param {number} index
  * @return {function}
  * @see {@link Array.prototype.at}
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.at}
  */
export default function at<Index extends number>(index: Int<Index>): Ating<Index>;
declare export var then: (resolve: (value: typeof at) => any) => any;
