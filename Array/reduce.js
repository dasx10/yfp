var reduce = (call) => (value)=> (values)=> {
  var index = 0, length = values.length;
  while (index < length) value = call(value)(values[index++]);
  return value;
}
export var then=(resolve)=>resolve(reduce);
