const fn = require("./app.js");

const dbMock = [
  "twitter.com",
  "nintendo.com",
  "nintendoeurope.com",
  "playstation.com",
  "",
];

describe("google Search", () => {
  it("searching Google", () => {
    // there is no "nope" in the db -> array will be empty
    expect(fn.googleSearch(dbMock, "nope")).toEqual([]);
    expect(fn.googleSearch(dbMock, "ninten")).toEqual([
      "nintendo.com",
      "nintendoeurope.com",
    ]);
  });

  it("handling undefined and null", () => {
    expect(fn.googleSearch(dbMock, undefined)).toEqual([]);
    expect(fn.googleSearch(dbMock, null)).toEqual([]);
  });

  it("doesn't return more than 3 matches", () => {
    expect(fn.googleSearch(dbMock, ".com").length).toEqual(3);
  });
});

describe("fetching API tests", () => {});
