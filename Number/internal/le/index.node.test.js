import { it, describe } from "node:test";
import assert from "node:assert";

import _le from "./index.js";

describe("less than or equal (_le)", () => {
  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(_le(index, index), true);
      assert.strictEqual(_le(index, index + 1), true);
      assert.strictEqual(_le(index, index - 1), false);
    }
  });

  it("test by float ", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(_le(currentFloat, currentFloat), true);
        assert.strictEqual(_le(currentFloat, currentFloat + 1), true);
        assert.strictEqual(_le(currentFloat, currentFloat - 1), false);
      }
    }
  });
});
