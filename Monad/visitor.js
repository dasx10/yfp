import{left,right}from "./either.js";
import promise from"./promise.js";
var o=(x)=>(x.then=x);
export default(x)=>{var i=1,z=promise(x);z(()=>(i=0),()=>(i=0));return o((y,e)=>((i||(i=1,x((x)=>(z=right(x),i=0),(x)=>(z=left(x),i=0)))),z(y,e)));};
