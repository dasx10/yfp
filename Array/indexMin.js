import paramArrayLikeNumbers from "../.validator/paramArrayLikeNumbers.js";

var indexMin = paramArrayLikeNumbers((array)=>{
  var min=(array.length-1),index;
  if(min > 0){
    index=min-1;
    while(index--)(array[index]<array[min])&&(min=index);
  }
  return min
});

export default indexMin;
export var then=(resolve)=>resolve(indexMin);
