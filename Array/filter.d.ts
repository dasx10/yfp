import type ArrayFilter   from "../../Types/ArrayFilter";
import type ArrayFiltered from "../../Types/ArrayFiltered";
import type Lambda        from "../../Types/Lambda";
import type Predicate     from "../../Types/Predicate";

export type Filter<Values extends readonly any[], Is> = Values extends readonly[infer First, ...infer Tail]
  ? First extends Is
    ? ArrayMaybePrepend<TupleFilter<Tail, Is>, First>
    : Is extends First
      ? ArrayMaybePrepend<TupleFilter<Tail, Is>, First>
      : TupleFilter<Tail, Is>
  : Values extends readonly[]
    ? readonly[]
    : Values
;

/**
  * @description Creates an array of values that satisfy the condition.
  * @function
  * @name filter
  * @param {Function} call
  * @returns {Function}
  * @example
  * ```
  * var is5 = (value) => value === 5;
  * filter(is5)([1, 2, 3, 4, 5]); // [5];
  * filter(is5)([1, 2, 5, 4, 5]); // [5, 5];
  * filter(is5)([1, 2, 3, 4, 6]); // [];
  *
  * var gt2 = (value) => value > 2;
  * filter(gt2)([1, 2, 3, 4, 5]); // [3, 4, 5];
  * filter(gt2)([]); // [];
  * filter(gt2)([1, 2]); // [];
  * ```
  * @see {@link Array.prototype.filter}
  */
export default function filter<Is, X>(call: (x: X) => x is Is): <Values extends readonly X[]>(values: Values) => ArrayFilter<Values, Is>;
export default function filter<X>(call: (x: X) => any): <Values extends readonly X[]>(values: Values) => ArrayFiltered<Values>;
