import r from"./right.js";var n=((x,e)=>x?e?(x.constructor===Function&&e.constructor===Function&&x.length===1&&e.length===1&&x.name===""&&e.name==="")?maybe(x()):e&&e.constructor===Function?maybe(e()):nothing:nothing:nothing),o=((x)=>(x.then=x)),w=new WeakSet,_=(x)=>(w.add(x.then=x),x),i=(x)=>x&&x===Object(x)&&w.has(x);export var nothing=Object.setPrototypeOf(n,{then:n,valueOf:()=>(void 0),toString:()=>'',[Symbol.toPrimitive]:(x)=>x==='number'?NaN:"",toJSON:()=>(null)});w.add(nothing);export var just=(x)=>((x=r(x)),o((y)=>maybe(r(y)(x))));var maybe=Object.setPrototypeOf((x)=>x==null?nothing:i(x)?x:_((y,e)=>y==null?nothing:(maybe(x.then?x.then((x)=>x==null?nothing:y(x),e):y(x)))),{nothing,just});export default maybe;
