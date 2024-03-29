import arity from "../arity/index.js";

var partialLimit = (call, length, ...values) => length > values.length
  ? arity(((...next) => partialLimit(call, length, ...next, ...values)), length - values.length)
  : call(...values)
;

export default partialLimit;
