import { test } from "./index.js";

describe("test", () => {
  it("is a function", () => {
    expect(test).toBeInstanceOf(Function);
  });
});
