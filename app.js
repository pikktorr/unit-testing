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

const getData = (fetch) => {
  return fetch("https://acnhapi.com/v1/art")
    .then((response) => response.json())
    .then((result) => {
      Object.entries(result).map((data) => {
        console.log(data[1]);
      });
    });
};
getData(fetch);

module.exports = { googleSearch, getData };
