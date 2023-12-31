import type { ArrayFillAll } from "../fillAll";
import type { MapExec } from "../map";
import type IterateCall from "../types/IterateCall";
export default function mapRight<Return, Value>(call: IterateCall<Return, Value>): <Values extends readonly Value[]>(values: Values) => ArrayFillAll<Values, Return>;
