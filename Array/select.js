var select =(y)=>new Function("x","return"+"["+y.map(x=>"x"+"."+"at"+"("+x+")").join(",")+"]"+"."+"filter"+"("+"("+"x"+")"+"=>"+"x"+"!=="+"void 0"+")");
export default select;
