const fetch = require("node-fetch");
const app = require("./app.js");

const dbMock = [
  "twitter.com",
  "nintendo.com",
  "nintendoeurope.com",
  "playstation.com",
];

describe("Google Search", () => {
  it("searching Google", () => {
    // there is no "nope" in the db -> array will be empty
    expect(app.googleSearch(dbMock, "nope")).toEqual([]);
    expect(app.googleSearch(dbMock, "ninten")).toEqual([
      "nintendo.com",
      "nintendoeurope.com",
    ]);
  });

  it("handling undefined and null", () => {
    expect(app.googleSearch(dbMock, undefined)).toEqual([]);
    expect(app.googleSearch(dbMock, null)).toEqual([]);
  });

  it("doesn't return more than 3 matches", () => {
    expect(app.googleSearch(dbMock, ".com").length).toEqual(3);
  });
});

describe("Tests with Animal Crossing: New Horizons API", () => {
  // PROMISE TEST
  it("get Art from api", (done) => {
    // expect 1 assertion to test
    expect.assertions(1); // with asynchronous test always use expect.assertions
    // without expect.assertions the test passes on getArt()
    app.getArt(fetch).then((data) => {
      // assertion 1
      expect(data.count).toEqual(43);
      done(); // dont pass this test until this is done
    });
  });

  // ASYNC TEST
  test("get Fishes from api", () => {
    expect.assertions(2); // with asynchronous test always use expect.assertions
    // instead of done(), can use "return" to return the promise
    return app.getFishes(fetch).then((data) => {
      expect(data["file-name"]).toEqual("crucian_carp");
      expect(data["catch-phrase"]).toEqual(
        "I caught a crucian carp! My skills are sharp!"
      );
    });
  });

  // MOCKING FETCH CALL
  it("get Fishes with mocking", () => {
    const mockSuccessResponse = {
      name: "Sea Bass",
      catchPhrase: "I caught a sea bass! No, wait- it's at least a C+!",
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    const mockFetch = jest.fn().mockReturnValue(mockFetchPromise);

    expect.assertions(4);
    return app.getFishes(mockFetch).then((data) => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith("https://acnhapi.com/v1/fish/3");
      expect(data.name).toBe("Sea Bass");
      expect(data.catchPhrase).toEqual(
        "I caught a sea bass! No, wait- it's at least a C+!"
      );
    });
  });
});

// Mock functions are also known as "spies", because
// they let you spy on the behavior of a function that is
// called indirectly by some other code, rather than just
// testing the output. You can create a mock function with
// jest.fn(). If no implementation is given, the mock
// function will return undefined when invoked.
