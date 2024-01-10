import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

import sub from "./index.js";

describe("subtract (sub)", () => {
  __functionLength2(sub);

  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      for (var next = -10; next < 10; next++) {
        assert.strictEqual(sub(index, next), index - next);
        assert.strictEqual(sub(next, index), next - index);
      }
    }
  });
});
