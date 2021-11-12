import { getBar } from "..";

describe("getFoo", () => {
  it("Valid", () => {
    const result = getBar({ bar: "Foo" });
    expect(result).toEqual("Foo");
  });

  it("Invalid", () => {
    const result = getBar({ bar: "Foo" });
    expect(result).not.toEqual("");
  });
});
