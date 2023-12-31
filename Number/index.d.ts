import type { Promises } from "..";
import type AsyncAdd from "./add/Async";
import {AsyncAvg} from "./avg/Async";

export interface NumberNamespace {
  public readonly NAN     : Promise<typeof import("./NAN").default>,
  public readonly add     : Promise<typeof import("./add").default>,
  public readonly avg     : Promise<typeof import("./avg").default>,
  public readonly between : Promise<typeof import("./between").default>,
  public readonly clamp   : Promise<typeof import("./clamp").default>,
  public readonly dec     : Promise<typeof import("./dec").default>,
  public readonly div     : Promise<typeof import("./div").default>,
  public readonly double  : Promise<typeof import("./double").default>,
  public readonly eq      : Promise<typeof import("./eq").default>,
  public readonly even    : Promise<typeof import("./even").default>,
  public readonly ge      : Promise<typeof import("./ge").default>,
  public readonly gt      : Promise<typeof import("./gt").default>,
  public readonly half    : Promise<typeof import("./half").default>,
  public readonly inc     : Promise<typeof import("./inc").default>,
  public readonly is      : Promise<typeof import("./is").default>,
  public readonly isNeg   : Promise<typeof import("./isNeg").default>,
  public readonly isOne   : Promise<typeof import("./isOdd").default>,
  public readonly isPos   : Promise<typeof import("./isPos").default>,
  public readonly isZero  : Promise<typeof import("./isZero").default>,
  public readonly le      : Promise<typeof import("./le").default>,
  public readonly lt      : Promise<typeof import("./lt").default>,
  public readonly max     : Promise<typeof import("./max").default>,
  public readonly min     : Promise<typeof import("./min").default>,
  public readonly mul     : Promise<typeof import("./mul").default>,
  public readonly ne      : Promise<typeof import("./ne").default>,
  public readonly neNeg   : Promise<typeof import("./neNeg").default>,
  public readonly nePos   : Promise<typeof import("./nePos").default>,
  public readonly neZero  : Promise<typeof import("./neZero").default>,
  public readonly neg     : Promise<typeof import("./neg").default>,
  public readonly not     : Promise<typeof import("./not").default>,
  public readonly odd     : Promise<typeof import("./odd").default>,
  public readonly one     : Promise<typeof import("./one").default>,
  public readonly pos     : Promise<typeof import("./pos").default>,
  public readonly pow     : Promise<typeof import("./pow").default>,
  public readonly sub     : Promise<typeof import("./sub").default>,
  public readonly zero    : Promise<typeof import("./zero").default>,
}

declare const NumberNamespace: NumberNamespace;
export default NumberNamespace;
