import type Index       from "../types";
import type IterateCall from "../types/IterateCall";
export default function indexesByRight<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => Index<Values>[];
