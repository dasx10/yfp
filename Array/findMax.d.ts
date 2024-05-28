import type ArrayValue from "../Types/ArrayValue";
import type Lambda     from "../Types/Lambda";

export default function findMax<Value>(call: Lambda<number, Value>): {
  (values: readonly []): undefined;
  <Values extends readonly Value[]>(values: Values): ArrayValue<Values>;
}
