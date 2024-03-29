import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

import gt from "./index.js";

describe("less than or equal (gt)", () => {
  __functionLength2(gt);

  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(gt(index, index), false);
      assert.strictEqual(gt(index, index + 1), false);
      assert.strictEqual(gt(index, index - 1), true);
    }
  });

  it("test by float ", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(gt(currentFloat, currentFloat), false);
        assert.strictEqual(gt(currentFloat, currentFloat + 1), false);
        assert.strictEqual(gt(currentFloat, currentFloat - 1), true);
      }
    }
  });
});
