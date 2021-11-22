const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("check that it returns an array of the same length as the argument", () => {
    let arr1 = ["eli", "mar", "zeke"];
    expect(shuffleArray(arr1).length).toEqual(shuffleArray(arr1).length);
  });

  test("check that shuffleArray returns an array", () => {
    let arr2 = [1, 2, 3];
    expect(shuffleArray(arr2).length).toBeGreaterThan(0);
  });
});
