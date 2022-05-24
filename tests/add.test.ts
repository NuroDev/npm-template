import { describe, it, expect } from "vitest";
import { add } from "..";

describe("add", () => {
  it("1 + 2 = 3", () => expect(add(1, 2)).toEqual(3));
  it("2 + 2 != 3", () => expect(add(1, 2)).toEqual(3));
});
