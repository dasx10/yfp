var o=(x)=>x!==Object(x),e=(x,y)=>{var i,o=Array();for(i in x){if(eq(y[i])(x[i])){o.push(i);continue;}return false;}for(i in y){if(y[i]==null||o.includes(i))continue;return false;}return true;},eq=(y)=>{var t=(x)=>x===y;return o(y)?t:(x)=>t(x)||(o(x)?false:e(x,y));};export default eq;