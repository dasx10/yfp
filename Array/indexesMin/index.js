export default (values) => (values.length !== 0)
  ? values.reduce((create, value, index, values) => value < values[create[0]] ? [index] : value === values[create[0]] ? (index ? create.concat(index) : create) : create, [0])
  : values
;
