import constructor from "../constructor.js";
var Number=constructor(NaN);
if (!Number.MAX_SAFE_INTEGER) Number.MAX_SAFE_INTEGER=2 ** 53 - 1;
export default Number;