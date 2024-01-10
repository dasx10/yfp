import type ArrayFilter            from "../../../types/Array/Filter";
import type ArrayIterateCallValues from "../../../types/Array/IterateCallValues";
export default function filterRight<Values extends readonly any[]>(values: Values, call: ArrayIterateCallValues<any, Values>): ArrayFilter<Values>;
