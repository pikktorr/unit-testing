const fetch = require("node-fetch");

const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "playstation.com",
  "catpictures.com",
  "myfavouritecats.com",
  "catnip.com",
];

const googleSearch = (database, searchInput) => {
  const matches = database.filter((website) => {
    return website.includes(searchInput);
  });
  // only return the first 3 results
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

const getArt = (fetch) => {
  return fetch("https://acnhapi.com/v1/art")
    .then((response) => response.json())
    .then((result) => {
      const data = Object.entries(result).map((data) => {
        return data[1];
      });
      return {
        count: data.length,
        result: data,
      };
    });
};
getArt(fetch);

const getFishes = async (fetch) => {
  const request = await fetch("https://acnhapi.com/v1/fish/3");
  const data = await request.json();
  return data;
};
getFishes(fetch);

module.exports = { googleSearch, getArt, getFishes };
