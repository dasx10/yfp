import eq from "../../Object/eq/main.js";

export default (call) => (values) => values
  .map(call)
  .reduce((create, value, index, values) => create.some((next) => eq(values[next], value)) ? create : create.concat(index), [])
  .map((index) => values[index])
;
