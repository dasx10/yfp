import type IterateCall from "../types/IterateCall";
export default function individualByRight<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => Values[number][] | Values;
