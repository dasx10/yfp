import{left,right}from"./either.js";
import promise from"./promise.js";
var o=(x)=>(x.then=x);
export default(x)=>{var i;return o((y,e)=>((i||(i=(promise(x)((x)=>(i=null,right(x)),(x)=>(i=null,left(x))))))(y,e)));};
