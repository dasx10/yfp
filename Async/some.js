import{right}from "../Monad/either.js";import p from"../Monad/promise.js";export default(y)=>(y=right(y),(x)=>p((o,e)=>{var k,z,n=0,i=0;for(k of x){y(k)((x)=>n||(x?(n=1,o(true)):(--i===0&&((n=1,z?e(z):o(false))))),(x)=>n||(--i===0?(n=1,e(x)):(z=x)));if(n)return;i++;}(n||(i===0&&(z?e(z):o(false))));}));

