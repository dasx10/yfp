export default (value, test) => {
  for (var key in test) if (test[key](value[key], key, value)) return false;
  return true;
}
