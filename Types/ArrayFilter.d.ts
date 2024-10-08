import type ArrayMaybePrepend from "./ArrayMaybePrepend";

type TupleFilter<Values extends readonly any[], Is> = Values extends readonly[infer First, ...infer Tail]
  ? First extends Is
    ? ArrayMaybePrepend<TupleFilter<Tail, Is>, First>
    : Is extends First
      ? ArrayMaybePrepend<TupleFilter<Tail, Is>, First>
      : TupleFilter<Tail, Is>
  : readonly[]
;

type ArrayFilter<Values extends readonly any[], Is> = Values extends readonly[infer First, ...infer Tail]
  ? First extends Is
    ? ArrayMaybePrepend<TupleFilter<Tail, Is>, First>
    : Is extends First
      ? ArrayMaybePrepend<TupleFilter<Tail, Is>, First>
      : TupleFilter<Tail, Is>
  : Values extends readonly[]
    ? readonly[]
    : Values
;


export default ArrayFilter;
